use std::collections::HashMap;

use crate::kernel::syntax::*;

#[derive(Clone, Debug)]
pub enum Dom {
    Univ(Level),
    Bottom,
    Pi(Box<PiDom>),
    Fun(Box<FunDom>),
    Neut(Box<Self>, DomNeut),
}

#[derive(Clone, Debug)]
pub enum DomNeut {
    Absurd(Box<AbsurdDom>),
    App(Box<AppDom>),
    Var(Ident),
}

#[derive(Clone, Debug)]
pub enum DomNorm {
    Ann(Dom, Dom),
}

#[derive(Clone, Debug)]
pub struct AbsurdDom {
    pub scr: DomNeut,
    pub motive_param: Ident,
    pub motive_body_env: Env,
    pub motive_body_exp: Exp,
}

#[derive(Clone, Debug)]
pub struct PiDom {
    pub param: Ident,
    pub param_typ: Dom,
    pub ret_typ_env: Env,
    pub ret_typ_exp: Exp,
}

#[derive(Clone, Debug)]
pub struct FunDom {
    pub param: Ident,
    pub body_env: Env,
    pub body_exp: Exp,
}

#[derive(Clone, Debug)]
pub struct AppDom {
    pub fun: DomNeut,
    pub arg: DomNorm,
}

pub type Env = HashMap<Ident, Dom>;

impl Exp {
    pub fn eval(self, env: &Env) -> Dom {
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
                    Dom::Neut(
                        Box::new(dom_typ),
                        DomNeut::Absurd(Box::new(AbsurdDom {
                            scr,
                            motive_param,
                            motive_body_env,
                            motive_body_exp,
                        })),
                    )
                }
                scr => scr.inconsistent_panic(),
            },
            Exp::Pi(pi_exp) => {
                let param = pi_exp.param.name;
                let param_typ = pi_exp.param.typ.eval(env);
                let ret_typ_env = env.clone();
                let ret_typ_exp = pi_exp.ret_typ;
                Dom::Pi(Box::new(PiDom {
                    param,
                    param_typ,
                    ret_typ_env,
                    ret_typ_exp,
                }))
            }
            Exp::Fun(fun_exp) => {
                let param = fun_exp.param.name;
                let body_env = env.clone();
                let body_exp = fun_exp.body;
                Dom::Fun(Box::new(FunDom {
                    param,
                    body_env,
                    body_exp,
                }))
            }
            Exp::App(app_exp) => app_exp.fun.eval(env).eval_app(app_exp.arg.eval(env)),
            Exp::Var(id) => env[&id].clone(),
        }
    }
}

impl Dom {
    fn eval_app(self, arg: Dom) -> Dom {
        match self {
            Dom::Fun(fun_dom) => {
                let mut new_env = fun_dom.body_env.clone();
                new_env.insert(fun_dom.param, arg);
                fun_dom.body_exp.eval(&new_env)
            }
            Dom::Neut(dom_typ, fun) => match *dom_typ {
                Dom::Pi(pi_dom) => {
                    let mut new_env = pi_dom.ret_typ_env.clone();
                    new_env.insert(pi_dom.param, arg.clone());
                    Dom::Neut(
                        Box::new(pi_dom.ret_typ_exp.eval(&new_env)),
                        DomNeut::App(Box::new(AppDom {
                            fun,
                            arg: DomNorm::Ann(pi_dom.param_typ, arg),
                        })),
                    )
                }
                _ => panic!("dqwdwq"),
            },
            _ => panic!("dqwdwq"),
        }
    }

    fn inconsistent_panic(self) -> ! {
        panic!("Inconsistent term {:?} is found", self)
    }

    pub fn readback_typ(self, names: &Vec<Ident>) -> Norm {
        match self {
            Dom::Univ(lvl) => Norm::Univ(lvl),
            Dom::Bottom => Norm::Bottom,
            Dom::Pi(pi_dom) => {
                let param_typ = pi_dom.param_typ;
                let param = TypedName {
                    name: pi_dom.param.clone(),
                    typ: param_typ.clone().readback_typ(names),
                };
                let mut newenv = pi_dom.ret_typ_env;
                let param_itself =
                    Dom::Neut(Box::new(param_typ), DomNeut::Var(pi_dom.param.clone()));
                newenv.insert(pi_dom.param, param_itself);
                let ret_typ = pi_dom.ret_typ_exp.eval(&newenv).readback_typ(names);
                Norm::Pi(Box::new(Pi { param, ret_typ }))
            }
            Dom::Neut(_typ, neut) => Norm::Neut(neut.readback(names)),
            _ => panic!("Not a Type! {:?}", self),
        }
    }

    pub fn readback_as_neut<T>(self, names: &Vec<Ident>, err: T) -> Neut
    where
        T: Fn(Self) -> !,
    {
        if let Dom::Neut(_, dom) = self {
            dom.readback(names)
        } else {
            err(self)
        }
    }
}

impl DomNeut {
    pub fn readback(self, names: &Vec<Ident>) -> Neut {
        match self {
            DomNeut::Absurd(absurd_dom) => {
                let scr = absurd_dom.scr.readback(names);
                let motive_param_name = absurd_dom.motive_param;
                let motive_param = TypedName {
                    name: motive_param_name.clone(),
                    typ: Norm::Bottom,
                };
                let mut newenv = absurd_dom.motive_body_env;
                let param_itself = Dom::Neut(
                    Box::new(Dom::Bottom),
                    DomNeut::Var(motive_param_name.clone()),
                );
                newenv.insert(motive_param_name, param_itself);
                let motive_body = absurd_dom.motive_body_exp.eval(&newenv).readback_typ(names);
                Neut::Absurd(Box::new(Absurd {
                    scr,
                    motive_param,
                    motive_body,
                }))
            }
            DomNeut::App(app_dom) => {
                let fun = app_dom.fun.readback(names);
                let arg = app_dom.arg.readback(names);
                Neut::App(Box::new(App { fun, arg }))
            }
            DomNeut::Var(id) => Neut::Var(id),
        }
    }
}

impl DomNorm {
    pub fn readback(self, names: &Vec<Ident>) -> Norm {
        let DomNorm::Ann(typ, dom) = self;
        match typ {
            Dom::Univ(_) => dom.readback_typ(names),
            Dom::Bottom => Norm::Neut(dom.readback_as_neut(names, Dom::inconsistent_panic)),
            Dom::Pi(pi_dom) => {
                let param_name = pi_dom.param;
                let param_typ = pi_dom.param_typ;
                let param = TypedName {
                    name: param_name.clone(),
                    typ: param_typ.clone().readback_typ(names),
                };
                let mut newenv = pi_dom.ret_typ_env;
                let param_itself =
                    Dom::Neut(Box::new(param_typ), DomNeut::Var(param_name.clone()));
                newenv.insert(param_name, param_itself.clone());
                let ret_typ = pi_dom.ret_typ_exp.eval(&newenv);
                let body = DomNorm::Ann(ret_typ, dom.eval_app(param_itself)).readback(names);
                Norm::Fun(Box::new(Fun {
                    param,
                    body,
                }))
            }
            Dom::Neut(_, _) => Norm::Neut(dom.readback_as_neut(names, |dom| {
                panic!(
                    "Non-neutral term {:?} cannot be readback under a neutral type",
                    dom
                )
            })),
            _ => panic!("Not a Type! {:?}", typ),
        }
    }
}
