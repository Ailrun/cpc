//! # Evaluation into Domain
use super::{domain::*, panic::*};
use crate::front::syntax::*;

/// # Main Trait for Evaluation
pub trait Eval {
    type Domain<'a>
    where
        Self: 'a;

    type Environment<'a>
    where
        Self: 'a;

    fn eval<'a>(&'a self, env: &Self::Environment<'a>) -> Self::Domain<'a>;
}

impl Eval for Exp {
    type Domain<'a> = Dom<'a>;
    type Environment<'a> = Env<'a>;

    fn eval<'a>(&'a self, env: &Env<'a>) -> Dom<'a> {
        match self {
            Self::Univ(lvl) => Dom::from(*lvl),
            Self::Bottom => Dom::Bottom,
            Self::Absurd(absurd_exp) => match absurd_exp.scr.eval(env) {
                Dom::Neut(scr_typ, scr) => {
                    let motive_param = &absurd_exp.motive_param;
                    let mut motive_body_env = env.clone();
                    let motive_body_exp = &absurd_exp.motive_body;

                    let prev_entry =
                        motive_body_env.insert(motive_param, Dom::from((scr_typ, scr.clone())));
                    let dom_typ = motive_body_exp.eval(&motive_body_env);
                    match prev_entry {
                        Some(value) => motive_body_env.insert(motive_param, value),
                        None => motive_body_env.remove(motive_param),
                    };

                    Dom::from((
                        dom_typ,
                        AbsurdDom {
                            scr,
                            motive_param,
                            motive_body_env,
                            motive_body_exp,
                        },
                    ))
                }
                scr => inconsistent_panic(&scr),
            },
            Self::Pi(pi_exp) => {
                let param = &pi_exp.param.name;
                let param_typ = pi_exp.param.typ.eval(env);
                let ret_typ_env = env.clone();
                let ret_typ_exp = &pi_exp.ret_typ;
                Dom::from(PiDom {
                    param,
                    param_typ,
                    ret_typ_env,
                    ret_typ_exp,
                })
            }
            Self::Fun(fun_exp) => {
                let param = &fun_exp.param.name;
                let body_env = env.clone();
                let body_exp = &fun_exp.body;
                Dom::from(FunDom {
                    param,
                    body_env,
                    body_exp,
                })
            }
            Self::App(app_exp) => {
                let fun = app_exp.fun.eval(env);
                let arg = app_exp.arg.eval(env);
                reduce_app(fun, arg)
            }
            Self::Var(id) => env[id].clone(),
        }
    }
}

/// # Reduce Domain-value Application
///
/// TODO: Extract panics
pub fn reduce_app<'a>(fun: Dom<'a>, arg: Dom<'a>) -> Dom<'a> {
    match fun {
        Dom::Fun(fun_dom) => {
            let mut new_env = fun_dom.body_env;
            new_env.insert(fun_dom.param, arg);
            fun_dom.body_exp.eval(&new_env)
        }
        Dom::Neut(dom_typ, fun) => {
            let Dom::Pi(pi_dom) = *dom_typ else {
                panic!("Invalid dom_typ {:?}", *dom_typ)
            };
            let mut new_env = pi_dom.ret_typ_env;
            new_env.insert(pi_dom.param, arg.clone());
            let arg = DomNorm {
                typ: pi_dom.param_typ,
                dom: arg,
            };
            Dom::from((pi_dom.ret_typ_exp.eval(&new_env), AppDom { fun, arg }))
        }
        _ => panic!("Invalid function {fun:?}"),
    }
}
