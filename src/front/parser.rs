#![allow(rustdoc::private_intra_doc_links)]
//! # Parsers of CPC
//!
//! This module implements following parsers:
//! - [proper_expression]
use std::convert::Infallible;

use lalrpop_util::{lalrpop_mod, ParseError};
use miette::{Diagnostic, Error, LabeledSpan};
use thiserror::Error;

use crate::front::syntax::{Exp, ReplInstr};

use super::token::{Lexer, Token};

lalrpop_mod!(grammar, "/front/grammar.rs");

/// # Parser for Repl Instructions
///
/// This parser reads a REPL instruction by consuming
/// the entire input. Note that this ignores whitespaces
/// at the beginning of the input as well as at the end.
pub fn proper_repl_instruction<'a>(file: &'a str, input: &'a str) -> Result<ReplInstr, String> {
    let file_name = String::from(file);
    let orig_input = String::from(input);
    grammar::ReplInstrParser::new()
        .parse(Lexer::new(input))
        .map_err(pretty_error(file_name, orig_input))
}

/// # Parser for Proper Expression Syntax
///
/// This parser reads an expression by consuming
/// the entire input. Note that this ignores whitespaces
/// at the beginning of the input as well as at the end.
pub fn proper_expression<'a>(file: &'a str, input: &'a str) -> Result<Exp, String> {
    let file_name = String::from(file);
    let orig_input = String::from(input);
    grammar::ExpParser::new()
        .parse(Lexer::new(input))
        .map_err(pretty_error(file_name, orig_input))
}

#[derive(Clone, Debug, Diagnostic, Error)]
#[diagnostic()]
#[error("Syntax Error in {file}")]
struct ParserDiag {
    file: String,
    #[source_code]
    src: String,
    message: String,
    #[label(collection, "")]
    labels: Vec<LabeledSpan>,
}

fn pretty_error(
    file: String,
    src: String,
) -> impl FnOnce(ParseError<usize, Token, Infallible>) -> String {
    let mut diag = ParserDiag {
        file,
        src,
        message: String::from("In"),
        labels: vec![],
    };
    |e| {
        match e {
            ParseError::InvalidToken { location } => diag.labels.push(LabeledSpan::new_primary_with_span(Some(String::from("Invalid Token")), (location, 1))),
            ParseError::UnrecognizedEof { location, expected } => diag.labels.push(LabeledSpan::new_primary_with_span(Some(format!("Unexpected EOF; expected one of {}", expected.join(", "))), (location, 1))),
            ParseError::UnrecognizedToken { token, expected } => diag.labels.push(LabeledSpan::new_primary_with_span(Some(format!("Unexpected token {} found; expected one of {}", token.1, expected.join(", "))), (token.0, token.2 - token.0))),
            ParseError::ExtraToken { token } => diag.labels.push(LabeledSpan::new_primary_with_span(Some(format!("Extraneous token {} found", token.1)), (token.0, token.2 - token.0))),
        };
        format!("{:?}", Into::<Error>::into(diag))
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
