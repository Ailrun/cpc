#[macro_export]
macro_rules! assert_ok {
    ($cond:expr $(,)?) => {
        match $cond {
            ::core::result::Result::Ok(t) => t,
            ::core::result::Result::Err(e) => {
                ::core::panic!("assertion failed, expected Ok(_), got Err({:?})", e);
            }
        }
    };
    ($cond:expr, $($arg:tt)+) => {
        match $cond {
            ::core::result::Result::Ok(t) => t,
            ::core::result::Result::Err(e) => {
                ::core::panic!("assertion failed, expected Ok(_), got Err({:?}): {}", e, ::core::format_args!($($arg)+));
            }
        }
    };
}
