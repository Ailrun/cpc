//! # Type Checking/Inference Implementation
//!
//! This module provides both type checking and inference functions
//! based on NbE algorithm from [Module nbe](crate::kernel::nbe).
use std::collections::HashMap;

use crate::front::syntax::*;

use Exp as E;
use Norm as EN;

/// Possible Errors during Type Checking/Inference
///
/// TODO: Give error codes
#[derive(Clone, Debug)]
pub enum TypeCheckError {
    NonType(Norm),
    NonFunction(Norm),
    IncompatibleType(Norm, Norm),
    NoSuchVariable(Ident, Ctx),
}

pub type TypeCheck<T> = Result<T, TypeCheckError>;

fn subst_nbe_typ(param: TypedName<Norm>, body: Typ, arg: Exp, ctx: &Ctx) -> Norm {
    let param = TypedName::from(param);
    E::from(App {
        fun: E::from(Fun { param, body }),
        arg,
    })
    .nbe_typ(ctx)
}

pub fn infer(exp: Exp, ctx: &Ctx) -> Result<Norm, TypeCheckError> {
    let typ = match exp {
        E::Univ(lvl) => EN::from(lvl + 1),
        E::Bottom => EN::from(0),
        E::Absurd(absurd) => {
            check(absurd.scr.clone(), EN::Bottom, ctx)?;
            let mut newctx = ctx.clone();
            newctx.insert(absurd.motive_param.clone(), EN::Bottom);
            infer_typ_lvl(absurd.motive_body.clone(), &newctx)?;
            subst_nbe_typ(
                TypedName {
                    name: absurd.motive_param,
                    typ: EN::Bottom,
                },
                absurd.motive_body,
                absurd.scr,
                ctx,
            )
        }
        E::Pi(pi) => {
            let param_lvl = infer_typ_lvl(pi.param.typ.clone(), &ctx)?;
            let mut newctx = ctx.clone();
            newctx.insert(pi.param.name.clone(), pi.param.typ.clone().nbe_typ(ctx));
            let ret_lvl = infer_typ_lvl(pi.ret_typ, &newctx)?;
            EN::from(param_lvl.max(ret_lvl))
        }
        E::Fun(fun) => {
            infer_typ_lvl(fun.param.typ.clone(), &ctx)?;
            let mut newctx = ctx.clone();
            newctx.insert(fun.param.name.clone(), fun.param.typ.clone().nbe_typ(ctx));
            let ret_typ = infer(fun.body, &newctx)?;
            EN::from(Pi {
                param: TypedName {
                    name: fun.param.name,
                    typ: fun.param.typ.nbe_typ(ctx),
                },
                ret_typ,
            })
        }
        E::App(app) => match infer(app.fun, ctx)? {
            EN::Pi(pi) => {
                check(app.arg.clone(), pi.param.typ.clone(), ctx)?;
                subst_nbe_typ(pi.param, From::from(pi.ret_typ), app.arg, ctx)
            }
            fun_typ => Err(TypeCheckError::NonFunction(fun_typ))?,
        },
        E::Var(id) => match ctx.get(&id) {
            Some(typ) => typ.clone(),
            None => Err(TypeCheckError::NoSuchVariable(id, ctx.clone()))?,
        },
    };
    Ok(typ)
}

pub fn infer_typ_lvl(typ: Exp, ctx: &Ctx) -> Result<Level, TypeCheckError> {
    match infer(typ, ctx)? {
        EN::Univ(lvl) => Ok(lvl),
        ki => Err(TypeCheckError::NonType(ki)),
    }
}

pub fn check(exp: Exp, typ: Norm, ctx: &Ctx) -> Result<(), TypeCheckError> {
    let infered_typ = infer(exp, ctx)?;
    if check_subtyp(infered_typ.clone(), typ.clone(), &HashMap::new()) {
        Ok(())
    } else {
        Err(TypeCheckError::IncompatibleType(infered_typ, typ))
    }
}

type Renaming = HashMap<String, String>;

fn check_subtyp(subtyp: Norm, supertyp: Norm, renaming: &Renaming) -> bool {
    match (subtyp, supertyp) {
        (Norm::Univ(lower_lvl), Norm::Univ(higher_lvl)) => lower_lvl <= higher_lvl,
        (Norm::Pi(sub_pi), Norm::Pi(super_pi)) => {
            // Do we want contravariant subtyping here?
            if sub_pi
                .param
                .typ
                .check_alpha_eq(super_pi.param.typ, renaming)
            {
                let mut newrenaming = renaming.clone();
                newrenaming.insert(sub_pi.param.name, super_pi.param.name);
                check_subtyp(sub_pi.ret_typ, super_pi.ret_typ, &newrenaming)
            } else {
                false
            }
        }
        (subtyp, supertyp) => subtyp.check_alpha_eq(supertyp, renaming),
    }
}

impl Norm {
    fn check_alpha_eq(self, other: Self, renaming: &Renaming) -> bool {
        match (self, other) {
            (Norm::Univ(self_lvl), Norm::Univ(other_lvl)) => self_lvl == other_lvl,
            (Norm::Bottom, Norm::Bottom) => true,
            (Norm::Pi(self_pi), Norm::Pi(other_pi)) => {
                if self_pi
                    .param
                    .typ
                    .check_alpha_eq(other_pi.param.typ, renaming)
                {
                    let mut newrenaming = renaming.clone();
                    newrenaming.insert(self_pi.param.name, other_pi.param.name);
                    self_pi
                        .ret_typ
                        .check_alpha_eq(other_pi.ret_typ, &newrenaming)
                } else {
                    false
                }
            }
            (Norm::Fun(self_fun), Norm::Fun(other_fun)) => {
                if self_fun
                    .param
                    .typ
                    .check_alpha_eq(other_fun.param.typ, renaming)
                {
                    let mut newrenaming = renaming.clone();
                    newrenaming.insert(self_fun.param.name, other_fun.param.name);
                    self_fun.body.check_alpha_eq(other_fun.body, &newrenaming)
                } else {
                    false
                }
            }
            (Norm::Neut(self_neut), Norm::Neut(other_neut)) => {
                self_neut.check_alpha_eq(other_neut, renaming)
            }
            (_, _) => false,
        }
    }
}

impl Neut {
    fn check_alpha_eq(self, other: Self, renaming: &Renaming) -> bool {
        match (self, other) {
            (Neut::Absurd(self_absurd), Neut::Absurd(other_absurd)) => {
                if self_absurd.scr.check_alpha_eq(other_absurd.scr, renaming) {
                    let mut newrenaming = renaming.clone();
                    newrenaming.insert(self_absurd.motive_param, other_absurd.motive_param);
                    self_absurd
                        .motive_body
                        .check_alpha_eq(other_absurd.motive_body, &newrenaming)
                } else {
                    false
                }
            }
            (Neut::App(self_app), Neut::App(other_app)) => {
                self_app.fun.check_alpha_eq(other_app.fun, renaming)
                    && self_app.arg.check_alpha_eq(other_app.arg, renaming)
            }
            (Neut::Var(self_id), Neut::Var(other_id)) => renaming.get(&self_id).unwrap_or(&self_id).eq(&other_id),
            (_, _) => false,
        }
    }
}
