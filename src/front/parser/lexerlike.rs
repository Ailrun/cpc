#![allow(rustdoc::private_intra_doc_links)]
//! # Lexer-like Parsers
use nom::{
    bytes::complete::take_while, character::complete::*, combinator::*, sequence::*, Parser,
};
use nom_supreme::{tag::complete::tag, ParserExt};

use super::base::*;
use crate::front::syntax::*;

pub fn identifier(input: CpcInput) -> CpcResult<Ident> {
    let first_character = satisfy(|c| c.is_alphabetic() || c == '_');
    let other_characters = take_while(|c: char| c.is_alphanumeric() || c == '_');
    let identifier_like = pair(first_character, other_characters)
        .recognize()
        .terminated(multispace0);
    let x = verify(identifier_like, is_not_keyword);
    Parser::into(x.map(|s: CpcInput| s.into_fragment())).parse(input)
}

pub fn level(input: CpcInput) -> CpcResult<Level> {
    u128.terminated(multispace0).parse(input)
}

pub fn keyword<'a>(s: &'static str) -> impl Parser<CpcInput<'a>, (), CpcError<'a>> {
    debug_assert!(KEYWORD_LIST.contains(&s));
    tag(s)
        .terminated(preceded(not(alphanumeric1), multispace0))
        .value(())
        .context("keyword")
}

pub fn symbol<'a>(s: &'static str) -> impl Parser<CpcInput<'a>, (), CpcError<'a>> {
    tag(s).terminated(multispace0).value(())
}

fn is_not_keyword(s: &CpcInput) -> bool {
    !KEYWORD_LIST.contains(s.fragment())
}

/// # List of Keywords in CPC
const KEYWORD_LIST: [&str; 11] = [
    "forall", "Pi", "∀", "Π", "fun", "lambda", "λ", "Univ", "Bottom", "absurd", "return",
];
