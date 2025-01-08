mod common;
use cpc::front::parser;

#[test]
fn example_expression_parsing0() {
    let exp_string = "Pi (qwe : Univ@1) . Univ@1";
    let res = assert_ok!(parser::full_expression(exp_string));
    insta::with_settings!({
      description => exp_string,
      omit_expression => true,
    }, {
      insta::assert_ron_snapshot!(res, @r#"
      Pi(Pi(
        param: TypedName(
          name: "qwe",
          typ: Univ(1),
        ),
        ret_typ: Univ(1),
      ))
      "#);
    });
}

#[test]
fn example_expression_parsing1() {
    let exp_string = "(fun (a: Pi (qwe : Univ@1) . Univ@1) -> a) (lambda (b : Univ@1) -> b)";
    let res = assert_ok!(parser::full_expression(exp_string));
    insta::with_settings!({
      description => exp_string,
      omit_expression => true,
    }, {
      insta::assert_ron_snapshot!(res, @r#"
      App(App(
        fun: Fun(Fun(
          param: TypedName(
            name: "a",
            typ: Pi(Pi(
              param: TypedName(
                name: "qwe",
                typ: Univ(1),
              ),
              ret_typ: Univ(1),
            )),
          ),
          body: Var("a"),
        )),
        arg: Fun(Fun(
          param: TypedName(
            name: "b",
            typ: Univ(1),
          ),
          body: Var("b"),
        )),
      ))
      "#);
    });
}
