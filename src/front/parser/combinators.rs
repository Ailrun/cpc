//! # More (Language-level) Parser Combinators
use nom::{character::complete::multispace0, combinator::eof, sequence::*, Parser};

use super::base::*;
use super::lexerlike::*;

pub fn proper<'a, O, T>(p: T) -> impl Parser<CpcInput<'a>, O, CpcError<'a>>
where
    T: Parser<CpcInput<'a>, O, CpcError<'a>>,
{
    delimited(multispace0, p, eof)
}

pub fn parened<'a, O, T>(p: T) -> impl Parser<CpcInput<'a>, O, CpcError<'a>>
where
    T: Parser<CpcInput<'a>, O, CpcError<'a>>,
{
    delimited(symbol("("), p, symbol(")"))
}
