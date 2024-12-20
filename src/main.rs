#![feature(never_type)]
use std::collections::HashMap;

pub mod kernel;

use crate::kernel::syntax::*;

fn main() {
    example_run1()
}

fn example_run1() {
    let exp = Exp::app(App {
        fun: Exp::fun(Fun {
            param: TypedName {
                name: String::from("a"),
                typ: Exp::pi(Pi {
                    param: TypedName {
                        name: String::from("qwe"),
                        typ: Exp::Univ(1),
                    },
                    ret_typ: Exp::Univ(1),
                }),
            },
            body: Exp::Var(String::from("a")),
        }),
        arg: Exp::fun(Fun {
            param: TypedName {
                name: String::from("b"),
                typ: Exp::Univ(1),
            },
            body: Exp::Var(String::from("b")),
        }),
    });
    println!("Initial exp: {:?}", exp);
    println!(
        "Initial nbe-ed exp: {:?}",
        exp.nbe(
            &HashMap::new(),
            Exp::pi(Pi {
                param: TypedName {
                    name: String::from("d"),
                    typ: Exp::Univ(1),
                },
                ret_typ: Exp::Univ(1),
            })
        )
    );
}
