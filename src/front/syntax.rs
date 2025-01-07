//! # Abstract Syntax Tree (AST) of CPC

use serde::Serialize;
use std::collections::HashMap;

pub type Ident = String;

/// # Universe Level Starting from 0.
///
/// TODO: We should use a big integer here to avoid inconsistency bugs.
pub type Level = u128;

/// # Name ([Ident]) with a Type
#[derive(Clone, Debug, PartialEq, Eq, Serialize)]
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
#[derive(Clone, Debug, PartialEq, Eq, Serialize)]
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

/// Context
pub type Ctx = HashMap<Ident, Norm>;

/// # AST for Normal Expression
#[derive(Clone, Debug, PartialEq, Eq, Serialize)]
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
#[derive(Clone, Debug, PartialEq, Eq, Serialize)]
pub enum Neut {
    // Rec(Ident),
    Absurd(Box<Absurd<Norm, Self>>),
    App(Box<App<Norm, Self>>),
    Var(Ident),
}

/// # Absurd case
///
/// Type parameter `N` represents **N**ormal subcase, and `R`
/// represents Neut**r**al subcase. In a non-normalized
/// expression, they are both `Self`.
#[derive(Clone, Debug, PartialEq, Eq, Serialize)]
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
#[derive(Clone, Debug, PartialEq, Eq, Serialize)]
pub struct Pi<N> {
    pub param: TypedName<N>,
    pub ret_typ: N,
}

/// # Fun case
///
/// Type parameter `N` represents **N**ormal subcase, and `R`
/// represents Neut**r**al subcase. In a non-normalized
/// expression, they are both `Self`.
#[derive(Clone, Debug, PartialEq, Eq, Serialize)]
pub struct Fun<N> {
    pub param: TypedName<N>,
    pub body: N,
}

/// # App case
///
/// Type parameter `N` represents **N**ormal subcase, and `R`
/// represents Neut**r**al subcase. In a non-normalized
/// expression, they are both `Self`.
#[derive(Clone, Debug, PartialEq, Eq, Serialize)]
pub struct App<N, R> {
    pub fun: R,
    pub arg: N,
}

/// ## Ad-hoc simulation of [From] for generic [TypedName]
///
/// This simulates `From<TypedName<U>>` for `TypedName<T>`
/// where `T: From<U>`. However, this cannot be implemented
/// as a trait implementation as such an implementation will
/// conflict with `impl<T> From<T> for T` (the blanket reflexive
/// implementation). Because of that reflexive impl itself,
/// `From<TypedName<T>>` for `TypedName<T>` is both an instance
/// of the simulated implementation and the blanket reflexive
/// implementation, and Rust cannot pick one.
impl<T> TypedName<T> {
    pub fn from<U: Into<T>>(value: TypedName<U>) -> Self {
        TypedName {
            name: value.name,
            typ: Into::into(value.typ),
        }
    }
}

////////////////////////////////////////////////////////////
// Conversions
////////////////////////////////////////////////////////////

impl From<Level> for Exp {
    fn from(value: Level) -> Self {
        Exp::Univ(value)
    }
}

impl From<Absurd<Exp, Exp>> for Exp {
    fn from(value: Absurd<Exp, Exp>) -> Self {
        Exp::Absurd(Box::new(value))
    }
}

impl From<Pi<Exp>> for Exp {
    fn from(value: Pi<Exp>) -> Self {
        Exp::Pi(Box::new(value))
    }
}

impl From<Fun<Exp>> for Exp {
    fn from(value: Fun<Exp>) -> Self {
        Exp::Fun(Box::new(value))
    }
}

impl From<App<Exp, Exp>> for Exp {
    fn from(value: App<Exp, Exp>) -> Self {
        Exp::App(Box::new(value))
    }
}

impl From<Ident> for Exp {
    fn from(value: Ident) -> Self {
        Exp::Var(value)
    }
}

impl From<Norm> for Exp {
    fn from(value: Norm) -> Self {
        match value {
            Norm::Univ(lvl) => Exp::from(lvl),
            Norm::Bottom => Exp::Bottom,
            Norm::Pi(pi) => Exp::from(Pi {
                param: TypedName::from(pi.param),
                ret_typ: From::from(pi.ret_typ),
            }),
            Norm::Fun(fun) => Exp::from(Fun {
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
            Neut::Absurd(absurd) => Exp::from(Absurd {
                scr: From::from(absurd.scr),
                motive_param: absurd.motive_param,
                motive_body: From::from(absurd.motive_body),
            }),
            Neut::App(app) => Exp::from(App {
                fun: From::from(app.fun),
                arg: From::from(app.arg),
            }),
            Neut::Var(id) => Exp::from(id),
        }
    }
}

impl<T: Into<Neut>> From<T> for Norm {
    fn from(value: T) -> Self {
        Norm::Neut(T::into(value))
    }
}

impl From<Level> for Norm {
    fn from(value: Level) -> Self {
        Norm::Univ(value)
    }
}

impl From<Pi<Norm>> for Norm {
    fn from(value: Pi<Norm>) -> Self {
        Norm::Pi(Box::new(value))
    }
}

impl From<Fun<Norm>> for Norm {
    fn from(value: Fun<Norm>) -> Self {
        Norm::Fun(Box::new(value))
    }
}

impl From<Absurd<Norm, Neut>> for Neut {
    fn from(value: Absurd<Norm, Neut>) -> Self {
        Neut::Absurd(Box::new(value))
    }
}

impl From<App<Norm, Neut>> for Neut {
    fn from(value: App<Norm, Neut>) -> Self {
        Neut::App(Box::new(value))
    }
}

impl From<Ident> for Neut {
    fn from(value: Ident) -> Self {
        Neut::Var(value)
    }
}
