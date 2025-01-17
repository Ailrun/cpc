//! # Expression Parsers of CPC
//!
//! This module provides the following parsers:
//! - [expression]
//! - [pi_expression]
//! - [lambda_expression]
//! - [absurd_expression]
//! - [applicative_expression]
//! - [atomic_expression]
//! - [binder_expression]
//! - [parameter]
use nom::{branch::*, combinator::*, multi::*, sequence::*, Parser};

use super::base::*;
use super::combinators::*;
use super::lexerlike::*;
use crate::front::syntax::*;

pub fn expression(input: CpcInput) -> CpcResult<Exp> {
    alt((
        pi_expression,
        lambda_expression,
        absurd_expression,
        applicative_expression,
    ))
    .parse(input)
}

fn pi_expression(input: CpcInput) -> CpcResult<Exp> {
    let pi_binder = alt((keyword("forall"), keyword("Pi"), keyword("∀"), keyword("Π")));
    let pi_separator = symbol(".");
    binder_expression(pi_binder, pi_separator, |param, ret_typ| {
        Exp::from(Pi { param, ret_typ })
    })
    .parse(input)
}

fn lambda_expression(input: CpcInput) -> CpcResult<Exp> {
    let lambda_binder = alt((keyword("fun"), keyword("lambda"), keyword("λ")));
    let lambda_separator = symbol("->");
    binder_expression(lambda_binder, lambda_separator, |param, body| {
        Exp::from(Fun { param, body })
    })
    .parse(input)
}

fn absurd_expression(input: CpcInput) -> CpcResult<Exp> {
    tuple((
        keyword("absurd"),
        expression,
        keyword("return"),
        parened(separated_pair(identifier, symbol("."), expression)),
    ))
    .map(|(_, scr, _, (motive_param, motive_body))| {
        Exp::from(Absurd {
            scr,
            motive_param,
            motive_body,
        })
    })
    .parse(input)
}

fn applicative_expression(input: CpcInput) -> CpcResult<Exp> {
    let (input, fun) = atomic_expression.parse(input)?;
    let mut it = iterator(input, atomic_expression);
    let res = it.fold(fun, |fun, arg| Exp::from(App { fun, arg }));

    it.finish().map(|(input, _)| (input, res))
}

fn atomic_expression(input: CpcInput) -> CpcResult<Exp> {
    let univ_expression =
        separated_pair(keyword("Univ"), symbol("@"), level).map(|(_, lvl)| Exp::from(lvl));
    alt((
        value(Exp::Bottom, alt((keyword("Bottom"), symbol("⊥")))),
        univ_expression,
        identifier.map(Exp::from),
        parened(expression),
    ))
    .parse(input)
}

/// # General Helper Parser for Single-variable Binder Expression.
///
/// It first parses `binder_keyword`, [parameter],
/// `body_separator`, and [expression] (as a body).
/// Then, it uses `f` to combine the parameter and
/// and body.
fn binder_expression<'a, O1, O2, T1, T2, F>(
    binder_keyword: T1,
    body_separator: T2,
    f: F,
) -> impl Parser<CpcInput<'a>, Exp, CpcError<'a>>
where
    T1: Parser<CpcInput<'a>, O1, CpcError<'a>>,
    T2: Parser<CpcInput<'a>, O2, CpcError<'a>>,
    F: Fn(TypedName<Typ>, Exp) -> Exp,
{
    tuple((binder_keyword, many1(parameter), body_separator, expression)).map(
        move |(_, params, _, mut body)| {
            for param in params {
                body = f(param, body);
            }
            body
        },
    )
}

/// # Parameter Parser
///
/// This parses a string of `(<ident> : <expression>)`.
fn parameter(input: CpcInput) -> CpcResult<TypedName<Typ>> {
    parened(separated_pair(identifier, symbol(":"), expression))
        .map(|(name, typ)| TypedName { name, typ })
        .parse(input)
}
