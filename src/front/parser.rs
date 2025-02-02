#![allow(rustdoc::private_intra_doc_links)]
//! # Parsers of CPC
//!
//! This module implements following parsers:
//! - [proper_expression]
use miette::{Diagnostic, Error, LabeledSpan};
use nom::{combinator::opt, sequence::*, Parser};
use nom_locate::LocatedSpan;
use nom_supreme::{
    error::{ErrorTree, GenericErrorTree},
    final_parser::final_parser,
};
use thiserror::Error;

#[doc(hidden)]
mod base;
mod combinators;
#[cfg(test)]
#[allow(dead_code)]
mod debug;
mod expression;
mod lexerlike;

use base::{CpcInput, CpcResult};
use combinators::*;
use expression::*;
use lexerlike::symbol;

use crate::front::syntax::{Exp, ReplInstr};

use ReplInstr::*;

/// # Parser for Repl Instructions
///
/// This parser reads a REPL instruction by consuming
/// the entire input. Note that this ignores whitespaces
/// at the beginning of the input as well as at the end.
pub fn proper_repl_instruction<'a>(file: &'a str, input: &'a str) -> Result<ReplInstr, String> {
    let orig_input = String::from(input);
    final_parser(proper(repl_instruction))(LocatedSpan::new_extra(input, file))
        .map_err(pretty_error(orig_input))
}

fn repl_instruction(input: CpcInput) -> CpcResult<ReplInstr> {
    tuple((expression, opt(preceded(symbol(":"), expression))))
        .map(|(exp, opt_typ)| match opt_typ {
            Some(typ) => Check(exp, typ),
            None => Infer(exp),
        })
        .parse(input)
}

/// # Parser for Proper Expression Syntax
///
/// This parser reads an expression by consuming
/// the entire input. Note that this ignores whitespaces
/// at the beginning of the input as well as at the end.
pub fn proper_expression<'a>(file: &'a str, input: &'a str) -> Result<Exp, String> {
    let orig_input = String::from(input);
    final_parser(proper(expression))(LocatedSpan::new_extra(input, file))
        .map_err(pretty_error(orig_input))
}

#[derive(Clone, Debug, Diagnostic, Error)]
#[diagnostic()]
#[error("Syntax Error")]
struct ParserDiag {
    #[source_code]
    src: String,
    message: String,
    #[label(collection, "")]
    labels: Vec<LabeledSpan>,
    #[related]
    related: Vec<Self>,
}

fn pretty_error(src: String) -> impl FnOnce(ErrorTree<CpcInput>) -> String {
    let mut diag = ParserDiag {
        src: src.clone(),
        message: String::from("In"),
        labels: vec![],
        related: vec![],
    };
    |e| {
        add_error_to_diag(&mut diag, src, e);
        format!(
            "{:?}",
            Into::<Error>::into(diag)
        )
    }
}

#[allow(dead_code)]
fn add_error_to_diag(diag: &mut ParserDiag, src: String, e: ErrorTree<CpcInput>)  {
    match e {
        GenericErrorTree::Base { location, kind } => {
            diag.labels.push(LabeledSpan::new_primary_with_span(
                Some(kind.to_string()),
                (location.location_offset(), 1),
            ))
        }
        GenericErrorTree::Stack { base, contexts } => {
            add_error_to_diag(diag, src, *base);
            diag.labels.extend(contexts.iter().map(|context| {
                LabeledSpan::new(
                    Some(format!("{}", context.1)),
                    context.0.location_offset(),
                    context.0.len(),
                )
            }));
        }
        GenericErrorTree::Alt(vec) => {
            for e in vec {
                let mut ediag = ParserDiag {
                    src: src.clone(),
                    message: String::from("Or in"),
                    labels: vec![],
                    related: vec![],
                };
                add_error_to_diag(&mut ediag, src.clone(), e);
                diag.related.push(ediag)
            }
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::assert_ok;

    #[test]
    fn pi_expression_parsing0() {
        let exp_string = "Pi (qwe : Univ@1) . Univ@1";
        let exp = assert_ok!(proper_expression("test", exp_string));
        insta::with_settings!({
            description => exp_string,
            omit_expression => true,
        }, {
            insta::assert_ron_snapshot!(exp, @r#"
            Pi(Pi(
              param: TypedName(
                name: "qwe",
                typ: Univ(1),
              ),
              ret_typ: Univ(1),
            ))
            "#);
        });
    }

    #[test]
    fn application_expression_parsing0() {
        let exp_string = "(fun (a: Pi (qwe : Univ@1) . Univ@1) -> a) (lambda (b : Univ@1) -> b)";
        let exp = assert_ok!(proper_expression("test", exp_string));
        insta::with_settings!({
            description => exp_string,
            omit_expression => true,
        }, {
            insta::assert_ron_snapshot!(exp, @r#"
            App(App(
              fun: Fun(Fun(
                param: TypedName(
                  name: "a",
                  typ: Pi(Pi(
                    param: TypedName(
                      name: "qwe",
                      typ: Univ(1),
                    ),
                    ret_typ: Univ(1),
                  )),
                ),
                body: Var("a"),
              )),
              arg: Fun(Fun(
                param: TypedName(
                  name: "b",
                  typ: Univ(1),
                ),
                body: Var("b"),
              )),
            ))
            "#);
        });
    }
}
