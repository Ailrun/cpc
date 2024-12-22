use std::collections::HashMap;

use cpc::syntax::*;

use Exp as E;
use Norm as EN;

#[test]
fn example_nbe1() {
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
    let typ = E::pi(Pi {
                param: TypedName {
                    name: String::from("d"),
                    typ: E::Univ(1),
                },
                ret_typ: E::Univ(1),
    });
    let result = EN::fun(Fun {
        param: TypedName {
            name: String::from("d"),
            typ: EN::Univ(1),
        },
        body: EN::var(String::from("d")),
    });
    assert_eq!(exp.nbe(typ, &HashMap::new()), result);
}
