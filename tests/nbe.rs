mod common;

use std::collections::HashMap;

use cpc::{syntax::*, parser};

use Norm as EN;

#[test]
fn example_nbe0() {
    let exp = assert_ok!(parser::full_expression("(fun (a : Univ@0) -> a) Bottom"));
    let typ = assert_ok!(parser::full_expression("Univ@0"));
    let result = EN::Bottom;
    assert_eq!(exp.nbe(typ, &HashMap::new()), result);
}

#[test]
fn example_nbe1() {
    let exp = assert_ok!(parser::full_expression("(fun (a : Pi (qwe : Univ@1) . Univ@1) -> a) (lambda (b : Univ@1) -> b)"));
    let typ = assert_ok!(parser::full_expression("Pi (d : Univ@1) . Univ@1"));
    let result = EN::fun(Fun {
        param: TypedName {
            name: String::from("d"),
            typ: EN::Univ(1),
        },
        body: EN::var(String::from("d")),
    });
    assert_eq!(exp.nbe(typ, &HashMap::new()), result);
}
