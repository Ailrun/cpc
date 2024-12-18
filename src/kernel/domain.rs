use std::{collections::HashMap, rc::Rc};

use crate::kernel::syntax::*;

pub type Eval<A> = Result<A, String>;

#[derive(Clone)]
pub struct TypedDomName {
    pub name: Ident,
    pub typ: Dom,
}

#[derive(Clone)]
pub enum Dom {
    Univ(u128),
    Bottom,
    Pi(Box<PiDom>),
    Fun(Box<FunDom>),
    Neut(Box<Dom>, DomNeut),
}

#[derive(Clone)]
pub enum DomNeut {
    Absurd(Box<AbsurdDom>),
    App(Box<AppDom>),
    Var(Ident),
}

#[derive(Clone)]
pub enum DomNorm {
    Ann(Box<Dom>, Dom),
}

#[derive(Clone)]
pub struct AbsurdDom {
    pub scr: Dom,
    pub motive: FunDom,
    pub branch: Dom,
}

#[derive(Clone)]
pub struct PiDom {
    pub param: TypedDomName,
    pub ret_typ: Rc<dyn Fn(Dom) -> Eval<Dom>>,
}

#[derive(Clone)]
pub struct FunDom {
    pub param: TypedDomName,
    pub fun: Rc<dyn Fn(Dom) -> Eval<Dom>>,
}

#[derive(Clone)]
pub struct AppDom {
    pub fun: DomNeut,
    pub arg: Dom,
}

pub type Env = HashMap<Ident, Dom>;

impl Exp {
    pub fn eval(self, env: &Env) -> Eval<Dom> {
        match self {
            Exp::Univ(lvl) => Ok(Dom::Univ(lvl)),
            Exp::Bottom => Ok(Dom::Bottom),
            Exp::Absurd(absurd_exp) => {
                let scr = absurd_exp.scr.eval(env)?;
                let param_name = absurd_exp.motive.param.name.clone();
                let exp_body = absurd_exp.motive.body;
                let param = absurd_exp.motive.param.eval(env)?;
                let stable_env = env.clone();
                let fun = Rc::new(move |v| {
                    let mut newenv = stable_env.clone();
                    /* Is there a way to avoid this double clone of name? */
                    newenv.insert(param_name.clone(), v);
                    (&exp_body).clone().eval(&newenv)
                });
                let dom_typ = fun(scr.clone())?;
                let branch = absurd_exp.branch.eval(env)?;
                Ok(Dom::Neut(
                    Box::new(dom_typ),
                    DomNeut::Absurd(Box::new(AbsurdDom {
                        scr,
                        motive: FunDom { param, fun },
                        branch,
                    })),
                ))
            }
            Exp::Pi(pi_exp) => {
                let param_name = pi_exp.param.name.clone();
                let exp_ret_typ = pi_exp.ret_typ;
                let param = pi_exp.param.eval(env)?;
                let stable_env = env.clone();
                let ret_typ = Rc::new(move |v| {
                    let mut newenv = stable_env.clone();
                    /* Is there a way to avoid this double clone of name? */
                    newenv.insert(param_name.clone(), v);
                    (&exp_ret_typ).clone().eval(&newenv)
                });
                Ok(Dom::Pi(Box::new(PiDom { param, ret_typ })))
            }
            Exp::Fun(fun_exp) => {
                let param_name = fun_exp.param.name.clone();
                let exp_body = fun_exp.body;
                let param = fun_exp.param.eval(env)?;
                let stable_env = env.clone();
                let fun = Rc::new(move |v| {
                    let mut newenv = stable_env.clone();
                    /* Is there a way to avoid this double clone of name? */
                    newenv.insert(param_name.clone(), v);
                    (&exp_body).clone().eval(&newenv)
                });
                Ok(Dom::Fun(Box::new(FunDom { param, fun })))
            }
            Exp::App(app_exp) => match app_exp.fun.eval(env)? {
                Dom::Fun(fun_dom) => Ok((fun_dom.fun)(app_exp.arg.eval(env)?)?),
                Dom::Neut(dom_typ, fun) => match *dom_typ {
                    Dom::Pi(pi_dom) => {
                        let arg = app_exp.arg.eval(env)?;
                        Ok(Dom::Neut(
                            Box::new((pi_dom.ret_typ)(arg.clone())?),
                            DomNeut::App(Box::new(AppDom { fun, arg })),
                        ))
                    }
                    _ => Err("dqwdwq".to_string()),
                },
                _ => Err("dqwdwq".to_string()),
            },
            Exp::Var(id) => Ok(env[&id].clone()),
        }
    }
}

impl TypedName {
    pub fn eval(self, env: &Env) -> Eval<TypedDomName> {
        Ok(TypedDomName {
            name: self.name,
            typ: self.typ.eval(env)?,
        })
    }
}

pub type Readback<A> = Result<A, String>;

impl Dom {
    pub fn readback(self, names: Vec<Ident>) -> Readback<Exp> {
        panic!("Not YET")
    }
}

impl DomNeut {
    pub fn readback(self, names: Vec<Ident>) -> Readback<Exp> {
        panic!("Not YET")
    }
}

impl DomNorm {
    pub fn readback(self, names: Vec<Ident>) -> Readback<Exp> {
        panic!("Not YET")
    }
}
