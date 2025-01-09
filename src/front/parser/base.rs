use nom::{error::Error, IResult};

#[doc(hidden)]
pub type CpcInput<'a> = &'a str;
#[doc(hidden)]
pub type CpcError<'a> = Error<CpcInput<'a>>;
#[doc(hidden)]
pub type CpcResult<'a, T> = IResult<CpcInput<'a>, T>;
