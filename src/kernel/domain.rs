//! # Semantic Domain For Evaluation
//!
//! The domain ([Dom]) in this module is used to evaluate [Exp].
//! Each [Dom] value corresponds to a β-normal form of [Exp],
//! so once we convert [Exp] into a correct [Dom] value, all we
//! need to do is reading the [Dom] value back into a correct
//! βη-normal form by η expanding it in the course.
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
pub struct DomNorm {
    pub typ: Dom,
    pub dom: Dom,
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

////////////////////////////////////////////////////////////
// Conversions
////////////////////////////////////////////////////////////

impl From<Level> for Dom {
    fn from(value: Level) -> Self {
        Dom::Univ(value)
    }
}

impl From<PiDom> for Dom {
    fn from(value: PiDom) -> Self {
        Dom::Pi(Box::new(value))
    }
}

impl From<FunDom> for Dom {
    fn from(value: FunDom) -> Self {
        Dom::Fun(Box::new(value))
    }
}

impl<T: Into<Box<Dom>>, U: Into<DomNeut>> From<(T, U)> for Dom {
    fn from(value: (T, U)) -> Self {
        Dom::Neut(T::into(value.0), U::into(value.1))
    }
}

impl From<AbsurdDom> for DomNeut {
    fn from(value: AbsurdDom) -> Self {
        DomNeut::Absurd(Box::new(value))
    }
}

impl From<AppDom> for DomNeut {
    fn from(value: AppDom) -> Self {
        DomNeut::App(Box::new(value))
    }
}

impl From<Ident> for DomNeut {
    fn from(value: Ident) -> Self {
        DomNeut::Var(value)
    }
}

impl TryFrom<Dom> for DomNeut {
    type Error = Dom;

    fn try_from(value: Dom) -> Result<Self, Self::Error> {
        if let Dom::Neut(_, dom) = value {
            Ok(dom)
        } else {
            Err(value)
        }
    }
}
