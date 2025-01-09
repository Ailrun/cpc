#![allow(rustdoc::private_intra_doc_links)]
//! # Lexer-like Parsers
use nom::{bytes::complete::*, character::complete::*, combinator::*, sequence::*, Parser};

use super::base::*;
use crate::front::syntax::*;

pub fn identifier(input: CpcInput) -> CpcResult<Ident> {
    let first_character = satisfy(|c| c.is_alphabetic() || c == '_');
    let other_characters = take_while(|c: char| c.is_alphanumeric() || c == '_');
    let identifier_like = terminated(
        recognize(pair(first_character, other_characters)),
        multispace0,
    );
    Parser::into(verify(identifier_like, is_not_keyword)).parse(input)
}

pub fn level(input: CpcInput) -> CpcResult<Level> {
    terminated(u128, multispace0).parse(input)
}

pub fn keyword<'a>(s: &'static str) -> impl Parser<CpcInput<'a>, (), CpcError<'a>> {
    debug_assert!(KEYWORD_LIST.contains(&s));
    value(
        (),
        terminated(tag(s), preceded(not(alphanumeric1), multispace0)),
    )
}

pub fn symbol<'a>(s: &'static str) -> impl Parser<CpcInput<'a>, (), CpcError<'a>> {
    value((), terminated(tag(s), multispace0))
}

fn is_not_keyword(s: &str) -> bool {
    !KEYWORD_LIST.contains(&s)
}

/// ### Constants for Identifier-likes

const KEYWORD_LIST: [&str; 11] = [
    "forall", "Pi", "∀", "Π", "fun", "lambda", "λ", "Univ", "Bottom", "absurd", "return",
];
