use std::collections::HashMap;

use crate::kernel::{domain::*, syntax::*};

impl Exp {
    fn eval(self, env: &Env) -> Dom {
        match self {
            Exp::Univ(lvl) => Dom::Univ(lvl),
            Exp::Bottom => Dom::Bottom,
            Exp::Absurd(absurd_exp) => match absurd_exp.scr.eval(env) {
                Dom::Neut(scr_typ, scr) => {
                    let motive_param = absurd_exp.motive_param.name.clone();
                    let motive_body_env = env.clone();
                    let motive_body_exp = absurd_exp.motive_body;
                    let mut dom_typ_env = motive_body_env.clone();
                    dom_typ_env.insert(
                        motive_param.clone(),
                        Dom::Neut(scr_typ.clone(), scr.clone()),
                    );
                    let dom_typ = motive_body_exp.clone().eval(&dom_typ_env);
                    Dom::absurd(
                        dom_typ,
                        AbsurdDom {
                            scr,
                            motive_param,
                            motive_body_env,
                            motive_body_exp,
                        },
                    )
                }
                scr => inconsistent_panic(scr),
            },
            Exp::Pi(pi_exp) => {
                let param = pi_exp.param.name;
                let param_typ = pi_exp.param.typ.eval(env);
                let ret_typ_env = env.clone();
                let ret_typ_exp = pi_exp.ret_typ;
                Dom::pi(PiDom {
                    param,
                    param_typ,
                    ret_typ_env,
                    ret_typ_exp,
                })
            }
            Exp::Fun(fun_exp) => {
                let param = fun_exp.param.name;
                let body_env = env.clone();
                let body_exp = fun_exp.body;
                Dom::fun(FunDom {
                    param,
                    body_env,
                    body_exp,
                })
            }
            Exp::App(app_exp) => {
                let fun = app_exp.fun.eval(env);
                let arg = app_exp.arg.eval(env);
                eval_app(fun, arg)
            }
            Exp::Var(id) => env[&id].clone(),
        }
    }

    pub fn nbe(self, ctx: &Ctx, typ: Self) -> Norm {
        let mut env = HashMap::new();
        let mut names = vec![];
        for (var, var_typ) in ctx.iter() {
            let var_typ_dom = var_typ.clone().eval(&env);
            env.insert(var.clone(), Dom::var(var_typ_dom, var.clone()));
            names.push(var.clone());
        }
        let typ = typ.eval(&env);
        DomNorm::Ann(typ, self.eval(&env)).readback(&names)
    }
}

/** TODO: Extract panics */
fn eval_app(fun: Dom, arg: Dom) -> Dom {
    match fun {
        Dom::Fun(fun_dom) => {
            let mut new_env = fun_dom.body_env.clone();
            new_env.insert(fun_dom.param, arg);
            fun_dom.body_exp.eval(&new_env)
        }
        Dom::Neut(dom_typ, fun) => {
            let Dom::Pi(pi_dom) = *dom_typ else {
                panic!("Invalid dom_typ {:?}", *dom_typ)
            };
            let mut new_env = pi_dom.ret_typ_env.clone();
            new_env.insert(pi_dom.param, arg.clone());
            let arg = DomNorm::Ann(pi_dom.param_typ, arg);
            Dom::app(pi_dom.ret_typ_exp.eval(&new_env), AppDom { fun, arg })
        }
        _ => panic!("Invalid function {:?}", fun),
    }
}

trait Readback {
    type NormalizedSyntax;

    fn readback(self, names: &Vec<Ident>) -> Self::NormalizedSyntax;
}

fn nbe_typ_for_binder(
    param_name: String,
    param_typ: Dom,
    exp: Exp,
    mut env: Env,
    names: &Vec<Ident>,
) -> (TypedName<Norm>, Dom, Vec<Ident>, Dom) {
    let param = TypedName {
        name: param_name.clone(),
        typ: param_typ.clone().readback_typ(names),
    };
    let param_itself = Dom::var(param_typ, param_name.clone());
    env.insert(param_name.clone(), param_itself.clone());
    let mut newnames = names.clone();
    newnames.push(param_name);
    (param, param_itself, newnames, exp.eval(&env))
}

impl Dom {
    fn readback_typ(self, names: &Vec<Ident>) -> Norm {
        match self {
            Dom::Univ(lvl) => Norm::Univ(lvl),
            Dom::Bottom => Norm::Bottom,
            Dom::Pi(pi_dom) => {
                let (param, _, newnames, ret_typ_dom) = nbe_typ_for_binder(
                    pi_dom.param,
                    pi_dom.param_typ,
                    pi_dom.ret_typ_exp,
                    pi_dom.ret_typ_env,
                    names,
                );
                let ret_typ = ret_typ_dom.readback_typ(&newnames);
                Norm::pi(Pi { param, ret_typ })
            }
            Dom::Neut(_typ, neut) => Norm::Neut(neut.readback(names)),
            _ => non_type_exp_panic(self),
        }
    }

    fn readback_as_neut<T>(self, names: &Vec<Ident>, err: T) -> Neut
    where
        T: Fn(Self) -> !,
    {
        let Dom::Neut(_, dom) = self else { err(self) };
        dom.readback(names)
    }
}

impl Readback for DomNeut {
    type NormalizedSyntax = Neut;

    fn readback(self, names: &Vec<Ident>) -> Neut {
        match self {
            DomNeut::Absurd(absurd_dom) => {
                let scr = absurd_dom.scr.readback(names);
                let (motive_param, _, newnames, motive_body_dom) = nbe_typ_for_binder(
                    absurd_dom.motive_param.clone(),
                    Dom::Bottom,
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
            DomNeut::App(app_dom) => {
                let fun = app_dom.fun.readback(names);
                let arg = app_dom.arg.readback(names);
                Neut::app(App { fun, arg })
            }
            DomNeut::Var(id) => Neut::Var(id),
        }
    }
}

impl Readback for DomNorm {
    type NormalizedSyntax = Norm;

    fn readback(self, names: &Vec<Ident>) -> Norm {
        let DomNorm::Ann(typ, dom) = self;
        match typ {
            Dom::Univ(_) => dom.readback_typ(names),
            Dom::Bottom => Norm::Neut(dom.readback_as_neut(names, inconsistent_panic)),
            Dom::Pi(pi_dom) => {
                let (param, param_itself, newnames, ret_typ) = nbe_typ_for_binder(
                    pi_dom.param,
                    pi_dom.param_typ,
                    pi_dom.ret_typ_exp,
                    pi_dom.ret_typ_env,
                    names,
                );
                let body = DomNorm::Ann(ret_typ, eval_app(dom, param_itself)).readback(&newnames);
                Norm::fun(Fun { param, body })
            }
            Dom::Neut(_, _) => Norm::Neut(dom.readback_as_neut(names, non_neutral_exp_panic)),
            _ => non_type_exp_panic(typ),
        }
    }
}

/** TODO: Give panic codes */
fn inconsistent_panic(dom: Dom) -> ! {
    panic!("Inconsistent expression {:?} is found", dom)
}

fn non_neutral_exp_panic(dom: Dom) -> ! {
    panic!(
        "Non-neutral expression {:?} cannot be readback under a neutral type",
        dom
    )
}

fn non_type_exp_panic(dom: Dom) -> ! {
    panic!("Expression {:?} is not a type", dom)
}
