#![allow(rustdoc::private_intra_doc_links)]
//! # Normalization Module Based on Normalization-by-Evaluation (NbE)
//!
//! This module provides normalization methods (`nbe` and `nbe_typ`)
//! for a well-typed term (and well-formed type). Note that,
//! for well-typed term, normalization should never fail, any
//! errorneous cases in this module call `panic!`.
//!
//! Actual implementation lives in trait implementations of [Exp].
//! Specifically, one can check its [nbe method](Exp::nbe) and [eval method](Exp::eval).
use std::collections::HashMap;

mod domain;
mod evaluation;
mod panic;
mod readback;

use domain::*;
use evaluation::*;
use readback::*;

use crate::front::syntax::*;

/// # Main Functions for Normalization-by-Evaluation
impl Exp {
    pub fn nbe(&self, typ: &Self, ctx: &Ctx) -> Norm {
        let env = build_initial_env(ctx);
        DomNorm {
            typ: typ.eval(&env),
            dom: self.eval(&env),
        }
        .readback(&mut env_into_idents(&env))
    }

    pub fn nbe_typ(&self, ctx: &Ctx) -> Norm {
        let env = build_initial_env(ctx);
        self.nbe_typ_env(&env)
    }

    fn nbe_typ_env(&self, env: &Env) -> Norm {
        self.eval(env).readback_typ(&mut env_into_idents(env))
    }
}

/// # Eager Substitution-Normalization for Types
///
/// This function allows us to substitute a variable via NbE
/// without defining a substitution (which is cumbersome, especially
/// in a capture-avoiding way).
pub fn subst_nbe_typ(param_name: &Ident, body: &Typ, arg: &Exp, ctx: &Ctx) -> Norm {
    let mut env = build_initial_env(ctx);
    let arg_dom = arg.eval(&env);
    env.insert(param_name, arg_dom);
    body.nbe_typ_env(&env)
}

fn build_initial_env<'a>(ctx: &'a Ctx) -> Env<'a> {
    let mut env = HashMap::new();
    for (var, var_typ) in ctx {
        let var_typ_dom: Dom<'a> = var_typ.eval(&env);
        env.insert(*var, Dom::from((var_typ_dom, *var)));
    }
    env
}

fn env_into_idents<'a>(env: &Env<'a>) -> Idents<'a> {
    env.keys().copied().collect()
}

#[cfg(test)]
mod tests {
    use std::collections::HashMap;

    use crate::front::parser;

    #[test]
    fn universe_nbe_typ_normal_form0() {
        let exp_str = "Univ@1";
        let exp = parser::proper_expression(exp_str).unwrap();
        insta::with_settings!({
            description => exp_str,
            omit_expression => true,
        }, {
            insta::assert_ron_snapshot!(exp.nbe_typ(&HashMap::new()), @"Univ(1)");
        });
    }

    #[test]
    fn universe_nbe_typ_normal_form1() {
        let exp_str = "Univ@3122180";
        let exp = parser::proper_expression(exp_str).unwrap();
        insta::with_settings!({
            description => exp_str,
            omit_expression => true,
        }, {
            insta::assert_ron_snapshot!(exp.nbe_typ(&HashMap::new()), @"Univ(3122180)");
        });
    }

    #[test]
    fn pi_nbe_typ_normal_form0() {
        let exp_str = "Pi (asda : Bottom) . Bottom";
        let exp = parser::proper_expression(exp_str).unwrap();
        insta::with_settings!({
            description => exp_str,
            omit_expression => true,
        }, {
            insta::assert_ron_snapshot!(exp.nbe_typ(&HashMap::new()), @r#"
            Pi(Pi(
              param: TypedName(
                name: "asda",
                typ: Bottom,
              ),
              ret_typ: Bottom,
            ))
            "#);
        });
    }

    #[test]
    fn pi_nbe_typ_argument0() {
        let exp_str = "Pi (qqq : (fun (a : Univ@0) -> a) Bottom) . Bottom";
        let exp = parser::proper_expression(exp_str).unwrap();
        insta::with_settings!({
            description => exp_str,
            omit_expression => true,
        }, {
            insta::assert_ron_snapshot!(exp.nbe_typ(&HashMap::new()), @r#"
            Pi(Pi(
              param: TypedName(
                name: "qqq",
                typ: Bottom,
              ),
              ret_typ: Bottom,
            ))
            "#);
        });
    }

    #[test]
    fn pi_nbe_typ_return_type0() {
        let exp_str =
            "Pi (qqq : Bottom) . (fun (a : Bottom) -> absurd a return (qwdwq . Univ@0)) qqq";
        let exp = parser::proper_expression(exp_str).unwrap();
        insta::with_settings!({
            description => exp_str,
            omit_expression => true,
        }, {
            insta::assert_ron_snapshot!(exp.nbe_typ(&HashMap::new()), @r#"
            Pi(Pi(
              param: TypedName(
                name: "qqq",
                typ: Bottom,
              ),
              ret_typ: Neut(Absurd(Absurd(
                scr: Var("qqq"),
                motive_param: "qwdwq",
                motive_body: Univ(0),
              ))),
            ))
            "#);
        });
    }

    #[test]
    fn application_nbe_beta0() {
        let exp_str = "(fun (a : Univ@0) -> a) Bottom";
        let typ_str = "Univ@0";
        let exp = parser::proper_expression(exp_str).unwrap();
        let typ = parser::proper_expression(typ_str).unwrap();
        insta::with_settings!({
            description => format!("{} : {}", exp_str, typ_str),
            omit_expression => true,
        }, {
            insta::assert_ron_snapshot!(exp.nbe(&typ, &HashMap::new()), @"Bottom");
        });
    }

    #[test]
    fn application_nbe_beta1() {
        let exp_str = "(fun (a : Pi (qwe : Univ@1) . Univ@1) -> a) (lambda (b : Univ@1) -> b)";
        let typ_str = "Pi (d : Univ@1) . Univ@1";
        let exp = parser::proper_expression(exp_str).unwrap();
        let typ = parser::proper_expression(typ_str).unwrap();
        insta::with_settings!({
            description => format!("{} : {}", exp_str, typ_str),
            omit_expression => true,
        }, {
            insta::assert_ron_snapshot!(exp.nbe(&typ, &HashMap::new()), @r#"
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
}
