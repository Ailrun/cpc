mod common;

use std::collections::HashMap;

use cpc::{kernel::typecheck::*, parser};

#[test]
fn example_type_check1() {
    let exp = assert_ok!(parser::full_expression("(fun (a : Pi (qwe : Univ@1) . Univ@1) -> a) (lambda (b : Univ@1) -> b)"));
    let ctx = HashMap::new();
    let typ = assert_ok!(parser::full_expression("Pi (d : Univ@1) . Univ@1")).nbe_typ(&ctx);
    assert_ok!(check(exp, typ, &ctx));
}
