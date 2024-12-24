//! # Abstract Syntax Tree (AST) of CPC

use std::collections::HashMap;

pub type Ident = String;

/// # Universe Level Starting from 0.
///
/// TODO: We should use a big integer here to avoid inconsistency bugs.
pub type Level = u128;

/// # Name ([Ident]) with a Type
#[derive(Clone, Debug, PartialEq, Eq)]
pub struct TypedName<T> {
    pub name: Ident,
    pub typ: T,
}

// pub struct TermDef {
//     pub head: TypedName,
//     pub body: Exp,
// }

// pub struct TypeDef {
//     pub head: TypedName,
//     pub cons: Vec<TypedName>,
// }

/// # AST for An Expression/Type
#[derive(Clone, Debug, PartialEq, Eq)]
pub enum Exp {
    Univ(Level),
    // Data(Ident),
    // Con(Ident),
    // Rec(Ident),
    Bottom,
    Absurd(Box<Absurd<Self, Self>>),
    Pi(Box<Pi<Self>>),
    Fun(Box<Fun<Self>>),
    App(Box<App<Self, Self>>),
    Var(Ident),
}

/// Type as an Expression
///
/// In a dependently-typed world, expression can also be a type.
pub type Typ = Exp;

/// # Absurd case
///
/// Type parameter `N` represents **N**ormal subcase, and `R`
/// represents Neut**r**al subcase. In a non-normalized
/// expression, they are both `Self`.
#[derive(Clone, Debug, PartialEq, Eq)]
pub struct Absurd<N, R> {
    pub scr: R,
    pub motive_param: Ident,
    pub motive_body: N,
}

/// # Pi case
///
/// Type parameter `N` represents **N**ormal subcase, and `R`
/// represents Neut**r**al subcase. In a non-normalized
/// expression, they are both `Self`.
#[derive(Clone, Debug, PartialEq, Eq)]
pub struct Pi<N> {
    pub param: TypedName<N>,
    pub ret_typ: N,
}

/// # Fun case
///
/// Type parameter `N` represents **N**ormal subcase, and `R`
/// represents Neut**r**al subcase. In a non-normalized
/// expression, they are both `Self`.
#[derive(Clone, Debug, PartialEq, Eq)]
pub struct Fun<N> {
    pub param: TypedName<N>,
    pub body: N,
}

/// # App case
///
/// Type parameter `N` represents **N**ormal subcase, and `R`
/// represents Neut**r**al subcase. In a non-normalized
/// expression, they are both `Self`.
#[derive(Clone, Debug, PartialEq, Eq)]
pub struct App<N, R> {
    pub fun: R,
    pub arg: N,
}

/// ## Helper functions for easier [Exp] construction
impl Exp {
    pub fn absurd(absurd_exp: Absurd<Self, Self>) -> Self {
        Exp::Absurd(Box::new(absurd_exp))
    }

    pub fn pi(pi_exp: Pi<Self>) -> Self {
        Exp::Pi(Box::new(pi_exp))
    }

    pub fn fun(fun_exp: Fun<Self>) -> Self {
        Exp::Fun(Box::new(fun_exp))
    }

    pub fn app(app_exp: App<Self, Self>) -> Self {
        Exp::App(Box::new(app_exp))
    }
}

pub type Ctx = HashMap<Ident, Norm>;

/// # AST for Normal Expression
#[derive(Clone, Debug, PartialEq, Eq)]
pub enum Norm {
    Univ(Level),
    // Data(Ident),
    // Con(Ident),
    Bottom,
    Pi(Box<Pi<Self>>),
    Fun(Box<Fun<Self>>),
    Neut(Neut),
}

/// # AST for Neutral Expression
#[derive(Clone, Debug, PartialEq, Eq)]
pub enum Neut {
    // Rec(Ident),
    Absurd(Box<Absurd<Norm, Self>>),
    App(Box<App<Norm, Self>>),
    Var(Ident),
}

/// ## Helper functions for easier [Norm] construction
impl Norm {
    pub fn absurd(absurd_exp: Absurd<Self, Neut>) -> Self {
        Norm::Neut(Neut::absurd(absurd_exp))
    }

    pub fn pi(pi_exp: Pi<Self>) -> Self {
        Norm::Pi(Box::new(pi_exp))
    }

    pub fn fun(fun_exp: Fun<Self>) -> Self {
        Norm::Fun(Box::new(fun_exp))
    }

    pub fn app(app_exp: App<Self, Neut>) -> Self {
        Norm::Neut(Neut::app(app_exp))
    }

    pub fn var(id: Ident) -> Self {
        Norm::Neut(Neut::Var(id))
    }
}

/// ## Helper functions for easier [Neut] construction
impl Neut {
    pub fn absurd(absurd_exp: Absurd<Norm, Self>) -> Self {
        Neut::Absurd(Box::new(absurd_exp))
    }

    pub fn app(app_exp: App<Norm, Self>) -> Self {
        Neut::App(Box::new(app_exp))
    }
}

impl<T> TypedName<T> {
    pub fn from<U>(value: TypedName<U>) -> Self
    where
        T: From<U>,
    {
        TypedName {
            name: value.name,
            typ: From::from(value.typ),
        }
    }
}

impl From<Norm> for Exp {
    fn from(value: Norm) -> Self {
        match value {
            Norm::Univ(lvl) => Exp::Univ(lvl),
            Norm::Bottom => Exp::Bottom,
            Norm::Pi(pi) => Exp::pi(Pi {
                param: TypedName::from(pi.param),
                ret_typ: From::from(pi.ret_typ),
            }),
            Norm::Fun(fun) => Exp::fun(Fun {
                param: TypedName::from(fun.param),
                body: From::from(fun.body),
            }),
            Norm::Neut(neut) => From::from(neut),
        }
    }
}

impl From<Neut> for Exp {
    fn from(value: Neut) -> Self {
        match value {
            Neut::Absurd(absurd) => Exp::absurd(Absurd {
                scr: From::from(absurd.scr),
                motive_param: absurd.motive_param,
                motive_body: From::from(absurd.motive_body),
            }),
            Neut::App(app) => Exp::app(App {
                fun: From::from(app.fun),
                arg: From::from(app.arg),
            }),
            Neut::Var(id) => Exp::Var(id),
        }
    }
}
