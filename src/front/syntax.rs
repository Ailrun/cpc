//! # Abstract Syntax Tree (AST) of CPC

use serde::Serialize;
use std::collections::HashMap;

pub enum ReplInstr {
    Check(Exp, Typ),
    Infer(Exp),
}

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

impl Exp {
    pub const BOTTOM: Exp = Exp::Bottom;
}

/// Type as an Expression
///
/// In a dependently-typed world, expression can also be a type.
pub type Typ = Exp;

/// Context
pub type Ctx<'a> = HashMap<&'a Ident, &'a Typ>;

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
        Self {
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
        Self::Univ(value)
    }
}

impl From<Absurd<Self, Self>> for Exp {
    fn from(value: Absurd<Self, Self>) -> Self {
        Self::Absurd(Box::new(value))
    }
}

impl From<Pi<Self>> for Exp {
    fn from(value: Pi<Self>) -> Self {
        Self::Pi(Box::new(value))
    }
}

impl From<Fun<Self>> for Exp {
    fn from(value: Fun<Self>) -> Self {
        Self::Fun(Box::new(value))
    }
}

impl From<App<Self, Self>> for Exp {
    fn from(value: App<Self, Self>) -> Self {
        Self::App(Box::new(value))
    }
}

impl From<Ident> for Exp {
    fn from(value: Ident) -> Self {
        Self::Var(value)
    }
}

impl From<Norm> for Exp {
    fn from(value: Norm) -> Self {
        match value {
            Norm::Univ(lvl) => Self::from(lvl),
            Norm::Bottom => Self::Bottom,
            Norm::Pi(pi) => Self::from(Pi {
                param: TypedName::from(pi.param),
                ret_typ: From::from(pi.ret_typ),
            }),
            Norm::Fun(fun) => Self::from(Fun {
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
            Neut::Absurd(absurd) => Self::from(Absurd {
                scr: From::from(absurd.scr),
                motive_param: absurd.motive_param,
                motive_body: From::from(absurd.motive_body),
            }),
            Neut::App(app) => Self::from(App {
                fun: From::from(app.fun),
                arg: From::from(app.arg),
            }),
            Neut::Var(id) => Self::from(id),
        }
    }
}

impl<T: Into<Neut>> From<T> for Norm {
    fn from(value: T) -> Self {
        Self::Neut(T::into(value))
    }
}

impl From<Level> for Norm {
    fn from(value: Level) -> Self {
        Self::Univ(value)
    }
}

impl From<Pi<Self>> for Norm {
    fn from(value: Pi<Self>) -> Self {
        Self::Pi(Box::new(value))
    }
}

impl From<Fun<Self>> for Norm {
    fn from(value: Fun<Self>) -> Self {
        Self::Fun(Box::new(value))
    }
}

impl From<Absurd<Norm, Self>> for Neut {
    fn from(value: Absurd<Norm, Self>) -> Self {
        Self::Absurd(Box::new(value))
    }
}

impl From<App<Norm, Self>> for Neut {
    fn from(value: App<Norm, Self>) -> Self {
        Self::App(Box::new(value))
    }
}

impl From<Ident> for Neut {
    fn from(value: Ident) -> Self {
        Self::Var(value)
    }
}
