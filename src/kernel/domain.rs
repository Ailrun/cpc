use std::collections::HashMap;

use crate::syntax::*;

pub type Env = HashMap<Ident, Dom>;

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

/// Helper functions for easier `Dom` construction
impl Dom {
    pub fn absurd(typ: Dom, absurd_dom: AbsurdDom) -> Self {
        Dom::Neut(Box::new(typ), DomNeut::absurd(absurd_dom))
    }

    pub fn pi(pi_dom: PiDom) -> Self {
        Dom::Pi(Box::new(pi_dom))
    }

    pub fn fun(fun_dom: FunDom) -> Self {
        Dom::Fun(Box::new(fun_dom))
    }

    pub fn app(typ: Dom, app_dom: AppDom) -> Self {
        Dom::Neut(Box::new(typ), DomNeut::app(app_dom))
    }

    pub fn var(typ: Dom, id: Ident) -> Self {
        Dom::Neut(Box::new(typ), DomNeut::Var(id))
    }
}

/// Helper functions for easier `DomNeut` construction
impl DomNeut {
    pub fn absurd(absurd_dom: AbsurdDom) -> Self {
        DomNeut::Absurd(Box::new(absurd_dom))
    }

    pub fn app(app_dom: AppDom) -> Self {
        DomNeut::App(Box::new(app_dom))
    }
}
