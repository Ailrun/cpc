/// * Normalization Module Based on Normalization-by-Evaluation (NbE)
///
/// This module provides normalization methods (`nbe` and `nbe_typ`)
/// for a well-typed term (and well-formed type). Note that,
/// for well-typed term, normalization should never fail, any
/// errorneous cases in this module call `panic!`.
use std::{collections::HashMap, convert::Infallible};

use crate::{kernel::domain::*, syntax::*};

use Dom as D;
use DomNeut as DR;
use DomNorm as DN;
use Exp as E;

impl Exp {
    pub fn nbe(self, typ: Self, ctx: &Ctx) -> Norm {
        let mut env = HashMap::new();
        let mut names = vec![];
        for (var, var_typ) in ctx.iter() {
            let var_typ_dom = Exp::from(var_typ.clone()).eval(&env);
            env.insert(var.clone(), D::var(var_typ_dom, var.clone()));
            names.push(var.clone());
        }
        let typ_dom = typ.eval(&env);
        DN::Ann(typ_dom, self.eval(&env)).readback(&names)
    }

    pub fn nbe_typ(self, ctx: &Ctx) -> Norm {
        let mut env = HashMap::new();
        let mut names = vec![];
        for (var, var_typ) in ctx.iter() {
            let var_typ_dom = Exp::from(var_typ.clone()).eval(&env);
            env.insert(var.clone(), D::var(var_typ_dom, var.clone()));
            names.push(var.clone());
        }
        self.eval(&env).readback_typ(&names)
    }
}

impl Exp {
    fn eval(self, env: &Env) -> D {
        match self {
            E::Univ(lvl) => D::Univ(lvl),
            E::Bottom => D::Bottom,
            E::Absurd(absurd_exp) => match absurd_exp.scr.eval(env) {
                D::Neut(scr_typ, scr) => {
                    let motive_param = absurd_exp.motive_param.clone();
                    let motive_body_env = env.clone();
                    let motive_body_exp = absurd_exp.motive_body;
                    let mut dom_typ_env = motive_body_env.clone();
                    dom_typ_env.insert(motive_param.clone(), D::Neut(scr_typ.clone(), scr.clone()));
                    let dom_typ = motive_body_exp.clone().eval(&dom_typ_env);
                    D::absurd(
                        dom_typ,
                        AbsurdDom {
                            scr,
                            motive_param,
                            motive_body_env,
                            motive_body_exp,
                        },
                    )
                }
                scr => into_bang(inconsistent_panic(scr)),
            },
            E::Pi(pi_exp) => {
                let param = pi_exp.param.name;
                let param_typ = pi_exp.param.typ.eval(env);
                let ret_typ_env = env.clone();
                let ret_typ_exp = pi_exp.ret_typ;
                D::pi(PiDom {
                    param,
                    param_typ,
                    ret_typ_env,
                    ret_typ_exp,
                })
            }
            E::Fun(fun_exp) => {
                let param = fun_exp.param.name;
                let body_env = env.clone();
                let body_exp = fun_exp.body;
                D::fun(FunDom {
                    param,
                    body_env,
                    body_exp,
                })
            }
            E::App(app_exp) => {
                let fun = app_exp.fun.eval(env);
                let arg = app_exp.arg.eval(env);
                eval_app(fun, arg)
            }
            E::Var(id) => env[&id].clone(),
        }
    }
}

/// TODO: Extract panics
fn eval_app(fun: Dom, arg: Dom) -> Dom {
    match fun {
        D::Fun(fun_dom) => {
            let mut new_env = fun_dom.body_env.clone();
            new_env.insert(fun_dom.param, arg);
            fun_dom.body_exp.eval(&new_env)
        }
        D::Neut(dom_typ, fun) => {
            let D::Pi(pi_dom) = *dom_typ else {
                panic!("Invalid dom_typ {:?}", *dom_typ)
            };
            let mut new_env = pi_dom.ret_typ_env.clone();
            new_env.insert(pi_dom.param, arg.clone());
            let arg = DN::Ann(pi_dom.param_typ, arg);
            D::app(pi_dom.ret_typ_exp.eval(&new_env), AppDom { fun, arg })
        }
        _ => panic!("Invalid function {:?}", fun),
    }
}

trait Readback {
    type NormalizedSyntax;

    fn readback(self, names: &Vec<Ident>) -> Self::NormalizedSyntax;
}

fn eval_typ_for_binder(
    param_name: String,
    param_typ: Dom,
    typ: Typ,
    mut env: Env,
    names: &Vec<Ident>,
) -> (TypedName<Norm>, Dom, Vec<Ident>, Dom) {
    let param = TypedName {
        name: param_name.clone(),
        typ: param_typ.clone().readback_typ(names),
    };
    let param_itself = D::var(param_typ, param_name.clone());
    env.insert(param_name.clone(), param_itself.clone());
    let mut newnames = names.clone();
    newnames.push(param_name);
    (param, param_itself, newnames, typ.eval(&env))
}

impl Dom {
    fn readback_typ(self, names: &Vec<Ident>) -> Norm {
        match self {
            D::Univ(lvl) => Norm::Univ(lvl),
            D::Bottom => Norm::Bottom,
            D::Pi(pi_dom) => {
                let (param, _, newnames, ret_typ_dom) = eval_typ_for_binder(
                    pi_dom.param,
                    pi_dom.param_typ,
                    pi_dom.ret_typ_exp,
                    pi_dom.ret_typ_env,
                    names,
                );
                let ret_typ = ret_typ_dom.readback_typ(&newnames);
                Norm::pi(Pi { param, ret_typ })
            }
            D::Neut(_typ, neut) => Norm::Neut(neut.readback(names)),
            _ => into_bang(non_type_exp_panic(self)),
        }
    }

    fn readback_as_neut<T>(self, names: &Vec<Ident>, err: T) -> Neut
    where
        T: Fn(Self) -> Infallible,
    {
        let D::Neut(_, dom) = self else {
            into_bang(err(self))
        };
        dom.readback(names)
    }
}

impl Readback for DomNeut {
    type NormalizedSyntax = Neut;

    fn readback(self, names: &Vec<Ident>) -> Neut {
        match self {
            DR::Absurd(absurd_dom) => {
                let scr = absurd_dom.scr.readback(names);
                let (
                    TypedName {
                        name: motive_param,
                        typ: _,
                    },
                    _,
                    newnames,
                    motive_body_dom,
                ) = eval_typ_for_binder(
                    absurd_dom.motive_param.clone(),
                    D::Bottom,
                    absurd_dom.motive_body_exp,
                    absurd_dom.motive_body_env,
                    names,
                );
                let motive_body = motive_body_dom.readback_typ(&newnames);
                Neut::absurd(Absurd {
                    scr,
                    motive_param,
                    motive_body,
                })
            }
            DR::App(app_dom) => {
                let fun = app_dom.fun.readback(names);
                let arg = app_dom.arg.readback(names);
                Neut::app(App { fun, arg })
            }
            DR::Var(id) => Neut::Var(id),
        }
    }
}

impl Readback for DomNorm {
    type NormalizedSyntax = Norm;

    fn readback(self, names: &Vec<Ident>) -> Norm {
        let DN::Ann(typ, dom) = self;
        match typ {
            D::Univ(_) => dom.readback_typ(names),
            D::Bottom => Norm::Neut(dom.readback_as_neut(names, inconsistent_panic)),
            D::Pi(pi_dom) => {
                let (param, param_itself, newnames, ret_typ) = eval_typ_for_binder(
                    pi_dom.param,
                    pi_dom.param_typ,
                    pi_dom.ret_typ_exp,
                    pi_dom.ret_typ_env,
                    names,
                );
                let body = DN::Ann(ret_typ, eval_app(dom, param_itself)).readback(&newnames);
                Norm::fun(Fun { param, body })
            }
            D::Neut(_, _) => Norm::Neut(dom.readback_as_neut(names, non_neutral_exp_panic)),
            _ => into_bang(non_type_exp_panic(typ)),
        }
    }
}

/// TODO: Move to a common util module
fn into_bang(value: Infallible) -> ! {
    match value {}
}

/// TODO: Give panic codes
fn inconsistent_panic(dom: Dom) -> Infallible {
    panic!("Inconsistent expression {:?} is found", dom)
}

/// TODO: Give panic codes
fn non_neutral_exp_panic(dom: Dom) -> Infallible {
    panic!(
        "Non-neutral expression {:?} cannot be readback under a neutral type",
        dom
    )
}

/// TODO: Give panic codes
fn non_type_exp_panic(dom: Dom) -> Infallible {
    panic!("Expression {:?} is not a type", dom)
}
