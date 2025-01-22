use nom::IResult;
use nom_locate::LocatedSpan;
use nom_supreme::error::ErrorTree;

#[doc(hidden)]
pub type CpcInput<'a> = LocatedSpan<&'a str, &'a str>;
#[doc(hidden)]
pub type CpcError<'a> = ErrorTree<CpcInput<'a>>;
#[doc(hidden)]
pub type CpcResult<'a, T> = IResult<CpcInput<'a>, T, CpcError<'a>>;
