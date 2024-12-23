mod common;

use cpc::{syntax::*, parser};

use Exp as E;

#[test]
fn example_expression_parsing0() {
    let exp_string = "Pi (qwe : Univ@1) . Univ@1";
    let exp = E::pi(Pi {
        param: TypedName {
            name: String::from("qwe"),
            typ: E::Univ(1),
        },
        ret_typ: E::Univ(1),
    });
    let res = assert_ok!(parser::full_expression(exp_string));
    assert_eq!(res, exp);
}

#[test]
fn example_expression_parsing1() {
    let exp_string = "(fun (a: Pi (qwe : Univ@1) . Univ@1) -> a) (lambda (b : Univ@1) -> b)";
    let exp = E::app(App {
        fun: E::fun(Fun {
            param: TypedName {
                name: String::from("a"),
                typ: E::pi(Pi {
                    param: TypedName {
                        name: String::from("qwe"),
                        typ: E::Univ(1),
                    },
                    ret_typ: E::Univ(1),
                }),
            },
            body: E::Var(String::from("a")),
        }),
        arg: E::fun(Fun {
            param: TypedName {
                name: String::from("b"),
                typ: E::Univ(1),
            },
            body: E::Var(String::from("b")),
        }),
    });
    let res = assert_ok!(parser::full_expression(exp_string));
    assert_eq!(res, exp);
}
