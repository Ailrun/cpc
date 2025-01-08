mod common;

use std::collections::HashMap;

use cpc::front::parser;

#[test]
fn example_nbe0() {
    let exp = assert_ok!(parser::full_expression("(fun (a : Univ@0) -> a) Bottom"));
    let typ = assert_ok!(parser::full_expression("Univ@0"));
    insta::with_settings!({
      info => &(&exp, &typ),
      omit_expression => true,
    }, {
      insta::assert_ron_snapshot!(exp.nbe(typ, &HashMap::new()), @"Bottom");
    });
}

#[test]
fn example_nbe1() {
    let exp = assert_ok!(parser::full_expression(
        "(fun (a : Pi (qwe : Univ@1) . Univ@1) -> a) (lambda (b : Univ@1) -> b)"
    ));
    let typ = assert_ok!(parser::full_expression("Pi (d : Univ@1) . Univ@1"));
    insta::with_settings!({
      info => &(&exp, &typ),
      omit_expression => true,
    }, {
      insta::assert_ron_snapshot!(exp.nbe(typ, &HashMap::new()), @r#"
      Fun(Fun(
        param: TypedName(
          name: "d",
          typ: Univ(1),
        ),
        body: Neut(Var("d")),
      ))
      "#);
    });
}
