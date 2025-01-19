#![allow(rustdoc::private_intra_doc_links)]
//! # Parsers of CPC
//!
//! This module implements following parsers:
//! - [proper_expression]
use base::CpcResult;
use lexerlike::symbol;
use nom::{branch::*, error::Error, sequence::*, Finish, Parser};

#[doc(hidden)]
mod base;
mod combinators;
#[cfg(test)]
#[allow(dead_code)]
mod debug;
mod expression;
mod lexerlike;

use combinators::*;
use expression::*;

use crate::front::syntax::{Exp, ReplInstr};

use ReplInstr::*;

/// # Parser for Repl Instructions
///
/// This parser reads a REPL instruction by consuming
/// the entire input. Note that this ignores whitespaces
/// at the beginning of the input as well as at the end.
pub fn proper_repl_instruction(input: &str) -> Result<ReplInstr, Error<&str>> {
    proper(repl_instruction)
        .parse(input)
        .finish()
        .map(|(_, instr)| instr)
}

fn repl_instruction(input: &str) -> CpcResult<ReplInstr> {
    alt((
        tuple((expression, symbol(":"), expression)).map(|(exp, _, typ)| Check(exp, typ)),
        expression.map(Infer),
    ))
    .parse(input)
}

/// # Parser for Proper Expression Syntax
///
/// This parser reads an expression by consuming
/// the entire input. Note that this ignores whitespaces
/// at the beginning of the input as well as at the end.
pub fn proper_expression(input: &str) -> Result<Exp, Error<&str>> {
    proper(expression).parse(input).finish().map(|(_, exp)| exp)
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::assert_ok;

    #[test]
    fn pi_expression_parsing0() {
        let exp_string = "Pi (qwe : Univ@1) . Univ@1";
        let exp = assert_ok!(proper_expression(exp_string));
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
        let exp = assert_ok!(proper_expression(exp_string));
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
