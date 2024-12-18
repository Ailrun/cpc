use std::{collections::HashMap, rc::Rc};

use crate::kernel::syntax::*;

#[derive(Clone)]
pub struct TypedDomName {
    pub name: Ident,
    pub typ: Dom,
}

pub type Eval<A> = Result<A, String>;

#[derive(Clone)]
pub enum Dom {
    Univ(u128),
    Bottom,
    Pi(PiDom),
    Fun(FunDom),
}

#[derive(Clone)]
pub struct PiDom {
    pub param: Box<TypedDomName>,
    pub ret_typ: Rc<dyn Fn(Dom) -> Eval<Dom>>,
}

#[derive(Clone)]
pub struct FunDom {
    pub param: Box<TypedDomName>,
    pub fun: Rc<dyn Fn(Dom) -> Eval<Dom>>,
}

pub type Env = HashMap<Ident, Dom>;

impl Exp {
    pub fn eval(self, env: &Env) -> Eval<Dom> {
        match self {
            Exp::Univ(lvl) => Ok(Dom::Univ(lvl)),
            Exp::Bottom => Ok(Dom::Bottom),
            Exp::Absurd => Err("Impossible".to_string()),
            Exp::Pi(pi_exp) =>  {
                let param_name = pi_exp.param.name.clone();
                let ret_typ = pi_exp.ret_typ;
                let param = Box::new(pi_exp.param.eval(env)?);
                let stable_env = env.clone();
                Ok(Dom::Pi(PiDom {
                    param,
                    ret_typ: Rc::new(move |v| {
                        let mut newenv = stable_env.clone();
                        /* Is there a way to avoid this double clone of name? */
                        newenv.insert(param_name.clone(), v);
                        (&ret_typ).clone().eval(&newenv)
                    }),
                }))
            },
            Exp::Fun(fun_exp) => {
                let param_name = fun_exp.param.name.clone();
                let body = fun_exp.body;
                let param = Box::new(fun_exp.param.eval(env)?);
                let stable_env = env.clone();
                Ok(Dom::Fun(FunDom {
                    param,
                    fun: Rc::new(move |v| {
                        let mut newenv = stable_env.clone();
                        /* Is there a way to avoid this double clone of name? */
                        newenv.insert(param_name.clone(), v);
                        (&body).clone().eval(&newenv)
                    }),
                }))
            }
            Exp::App(app_exp) => {
                if let Dom::Fun(fun_dom) = app_exp.fun.eval(env)? {
                    Ok((fun_dom.fun)(app_exp.arg.eval(env)?)?)
                } else {
                    Err("dqwdwq".to_string())
                }
            }
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
