use std::collections::HashMap;

use cpc::kernel::{syntax::*, typecheck::*};

use Exp as E;
use Norm as EN;

#[test]
fn example_type_check1() {
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
    let typ = EN::pi(Pi {
                param: TypedName {
                    name: String::from("d"),
                    typ: EN::Univ(1),
                },
                ret_typ: EN::Univ(1),
    });
    assert!(check(exp, typ, &HashMap::new()).is_ok());
}
