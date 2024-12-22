use nom::{
    branch::*, bytes::complete::*, character::complete::*, combinator::*, error::Error,
    sequence::*, IResult, Parser,
};

use crate::syntax::*;

type CpcInput<'a> = &'a str;
type CpcError<'a> = Error<CpcInput<'a>>;
type CpcResult<'a, T> = IResult<CpcInput<'a>, T>;

/// ** Main Parser

pub fn expression(input: CpcInput) -> CpcResult<Exp> {
    alt((
        pi_expression,
        lambda_expression,
        absurd_expression,
        applicative_expression,
    ))
    .parse(input)
}

/// ** Sub-Parsers

/// *** Expression Case Parsers

fn pi_expression(input: CpcInput) -> CpcResult<Exp> {
    let pi_binder = alt((
        keyword("forall"),
        keyword("Pi"),
        symbol("∀"),
        symbol("Π"),
        symbol("π"),
    ));
    let pi_separator = symbol(".");
    binder_expression(pi_binder, pi_separator, |param, ret_typ| {
        Exp::pi(Pi { param, ret_typ })
    })
    .parse(input)
}

fn lambda_expression(input: CpcInput) -> CpcResult<Exp> {
    let lambda_binder = alt((keyword("fun"), keyword("Lambda"), symbol("λ"), symbol("Λ")));
    let lambda_separator = symbol("->");
    binder_expression(lambda_binder, lambda_separator, |param, body| {
        Exp::fun(Fun { param, body })
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
    .map(|_| todo!())
    .parse(input)
}

fn applicative_expression(input: CpcInput) -> CpcResult<Exp> {
    let (input, fun) = atomic_expression.parse(input)?;
    let mut it = iterator(input, atomic_expression);
    let res = it.fold(fun, |fun, arg| Exp::app(App { fun, arg }));

    it.finish().map(|(input, _)| (input, res))
}

fn atomic_expression(input: CpcInput) -> CpcResult<Exp> {
    let univ_expression =
        separated_pair(keyword("Univ"), symbol("@"), level).map(|(_, lvl)| Exp::Univ(lvl));
    alt((
        value(Exp::Bottom, alt((keyword("Bottom"), symbol("⊥")))),
        univ_expression,
        identifier.map(Exp::Var),
        parened(expression),
    ))
    .parse(input)
}

/// *** Expression Helpers

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
    tuple((binder_keyword, parameter, body_separator, expression))
        .map(move |(_, param, _, body)| {
            f(param, body)
        })
}

/// *** Non-expression Parsers

fn parameter(input: CpcInput) -> CpcResult<TypedName<Typ>> {
    parened(separated_pair(identifier, symbol(":"), expression))
        .map(|(name, typ)| TypedName { name, typ })
        .parse(input)
}

/// ** Other Helpers

/// *** Extra Parser Combinators

fn parened<'a, O, T>(p: T) -> impl Parser<CpcInput<'a>, O, CpcError<'a>>
where
    T: Parser<CpcInput<'a>, O, CpcError<'a>>,
{
    delimited(symbol("("), p, symbol(")"))
}

/// *** Lexer-like Helpers

fn identifier(input: CpcInput) -> CpcResult<Ident> {
    let first_character = satisfy(|c| c.is_alphabetic() || c == '_');
    let other_characters = take_while(|c: char| c.is_alphanumeric() || c == '_');
    let identifier_like = terminated(recognize(pair(first_character, other_characters)), multispace0);
    Parser::into(verify(identifier_like, is_not_keyword)).parse(input)
}

fn level(input: CpcInput) -> CpcResult<Level> {
    terminated(u128, multispace0).parse(input)
}

fn keyword<'a>(s: &'static str) -> impl Parser<CpcInput<'a>, (), CpcError<'a>> {
    value(
        (),
        terminated(tag(s), preceded(not(alphanumeric1), multispace0)),
    )
}

fn symbol<'a>(s: &'static str) -> impl Parser<CpcInput<'a>, (), CpcError<'a>> {
    value((), terminated(tag(s), multispace0))
}

fn is_not_keyword(s: &str) -> bool {
    let arr = ["forall", "Pi", "fun", "Lambda", "Univ", "Bottom"];
    !arr.contains(&s)
}

/// *** Debugging helpers

#[cfg(test)]
#[allow(dead_code)]
fn debug<'a, O, T>(s: &'static str, p: T) -> impl Parser<CpcInput<'a>, O, CpcError<'a>>
where
    T: Parser<CpcInput<'a>, O, CpcError<'a>> {
    delimited(move |input| {println!("{s:?} {input:?}"); Ok((input, ()))}, p, |input| {println!("{input:?}"); Ok((input, ()))})
}
