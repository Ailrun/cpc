//! # Debugging helpers
use nom::{sequence::*, Parser};

use super::base::*;

fn debug<'a, O, T>(s: &'static str, p: T) -> impl Parser<CpcInput<'a>, O, CpcError<'a>>
where
    T: Parser<CpcInput<'a>, O, CpcError<'a>>,
{
    delimited(
        move |input| {
            println!("{s:?} {input:?}");
            Ok((input, ()))
        },
        p,
        |input| {
            println!("{input:?}");
            Ok((input, ()))
        },
    )
}
