//! # Semantic Domain For Evaluation
//!
//! The domain ([Dom]) in this module is used to evaluate [Exp].
//! Each [Dom] value corresponds to a β-normal form of [Exp],
//! so once we convert [Exp] into a correct [Dom] value, all we
//! need to do is reading the [Dom] value back into a correct
//! βη-normal form by η expanding it in the course.
use std::collections::HashMap;

use crate::front::syntax::*;

pub type Env<'a> = HashMap<&'a Ident, Dom<'a>>;

#[derive(Clone, Debug)]
pub enum Dom<'a> {
    Univ(Level),
    Bottom,
    Pi(Box<PiDom<'a>>),
    Fun(Box<FunDom<'a>>),
    Neut(Box<Self>, DomNeut<'a>),
}

#[derive(Clone, Debug)]
pub enum DomNeut<'a> {
    Absurd(Box<AbsurdDom<'a>>),
    App(Box<AppDom<'a>>),
    Var(&'a Ident),
}

#[derive(Clone, Debug)]
pub struct DomNorm<'a> {
    pub typ: Dom<'a>,
    pub dom: Dom<'a>,
}

#[derive(Clone, Debug)]
pub struct AbsurdDom<'a> {
    pub scr: DomNeut<'a>,
    pub motive_param: &'a Ident,
    pub motive_body_env: Env<'a>,
    pub motive_body_exp: &'a Exp,
}

#[derive(Clone, Debug)]
pub struct PiDom<'a> {
    pub param: &'a Ident,
    pub param_typ: Dom<'a>,
    pub ret_typ_env: Env<'a>,
    pub ret_typ_exp: &'a Exp,
}

#[derive(Clone, Debug)]
pub struct FunDom<'a> {
    pub param: &'a Ident,
    pub body_env: Env<'a>,
    pub body_exp: &'a Exp,
}

#[derive(Clone, Debug)]
pub struct AppDom<'a> {
    pub fun: DomNeut<'a>,
    pub arg: DomNorm<'a>,
}

////////////////////////////////////////////////////////////
// Conversions
////////////////////////////////////////////////////////////

impl<'a> From<Level> for Dom<'a> {
    fn from(value: Level) -> Self {
        Self::Univ(value)
    }
}

impl<'a> From<PiDom<'a>> for Dom<'a> {
    fn from(value: PiDom<'a>) -> Self {
        Self::Pi(Box::new(value))
    }
}

impl<'a> From<FunDom<'a>> for Dom<'a> {
    fn from(value: FunDom<'a>) -> Self {
        Self::Fun(Box::new(value))
    }
}

impl<'a, T: Into<Box<Self>>, U: Into<DomNeut<'a>>> From<(T, U)> for Dom<'a> {
    fn from(value: (T, U)) -> Self {
        Self::Neut(T::into(value.0), U::into(value.1))
    }
}

impl<'a> From<AbsurdDom<'a>> for DomNeut<'a> {
    fn from(value: AbsurdDom<'a>) -> Self {
        Self::Absurd(Box::new(value))
    }
}

impl<'a> From<AppDom<'a>> for DomNeut<'a> {
    fn from(value: AppDom<'a>) -> Self {
        Self::App(Box::new(value))
    }
}

impl<'a> From<&'a Ident> for DomNeut<'a> {
    fn from(value: &'a Ident) -> Self {
        Self::Var(value)
    }
}

impl<'a> TryFrom<Dom<'a>> for DomNeut<'a> {
    type Error = Dom<'a>;

    fn try_from(value: Dom<'a>) -> Result<Self, Self::Error> {
        if let Dom::Neut(_, dom) = value {
            Ok(dom)
        } else {
            Err(value)
        }
    }
}
