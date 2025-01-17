//! # Type Checking/Inference Implementation
//!
//! This module provides both type checking and inference functions
//! based on NbE algorithm from [Module nbe](crate::kernel::nbe).
use std::collections::HashMap;

use crate::{front::syntax::*, kernel::nbe::*};

use Exp as E;
use Norm as EN;

/// # Possible Errors from Type Checking/Inference
///
/// TODO: Give error codes
#[derive(Clone, Debug)]
pub enum TypeCheckError<'a> {
    NonType(Norm),
    NonFunction(Norm),
    IncompatibleType(Norm, Norm),
    NoSuchVariable(&'a Ident, Ctx<'a>),
    InconsistentUniverse,
}

/// # Type-checking Monad
pub type TypeCheck<'a, T> = Result<T, TypeCheckError<'a>>;

/// # Type Inference for Closed Expression
pub fn closed_infer(exp: &Exp) -> TypeCheck<Norm> {
    let ctx = HashMap::new();
    infer(exp, &ctx)
}

/// # Universe-level Inference for Closed Types
pub fn closed_infer_typ_lvl(typ: &Exp) -> TypeCheck<Level> {
    let ctx = HashMap::new();
    infer_typ_lvl(typ, &ctx)
}

/// # Type Checking for Closed Expression
pub fn closed_check(exp: &Exp, typ: Norm) -> TypeCheck<()> {
    let ctx = HashMap::new();
    check(exp, typ, &ctx)
}

/// # Type Inference for General (Possibly Open) Expression
pub fn infer<'a>(exp: &'a Exp, ctx: &Ctx<'a>) -> TypeCheck<'a, Norm> {
    let typ = match exp {
        E::Univ(lvl) => lvl
            .checked_add(1)
            .map(EN::from)
            .ok_or(TypeCheckError::InconsistentUniverse)?,
        E::Bottom => EN::from(0),
        E::Absurd(absurd) => {
            check(&absurd.scr, EN::Bottom, ctx)?;
            let mut newctx = ctx.clone();
            newctx.insert(&absurd.motive_param, &E::BOTTOM);
            infer_typ_lvl(&absurd.motive_body, &newctx)?;
            subst_nbe_typ(&absurd.motive_param, &absurd.motive_body, &absurd.scr, ctx)
        }
        E::Pi(pi) => {
            let param_lvl = infer_typ_lvl(&pi.param.typ, ctx)?;
            let mut newctx = ctx.clone();
            newctx.insert(&pi.param.name, &pi.param.typ);
            let ret_lvl = infer_typ_lvl(&pi.ret_typ, &newctx)?;
            EN::from(param_lvl.max(ret_lvl))
        }
        E::Fun(fun) => {
            infer_typ_lvl(&fun.param.typ, ctx)?;
            let mut newctx = ctx.clone();
            newctx.insert(&fun.param.name, &fun.param.typ);
            let ret_typ = infer(&fun.body, &newctx)?;
            EN::from(Pi {
                param: TypedName {
                    name: fun.param.name.clone(),
                    typ: fun.param.typ.nbe_typ(ctx),
                },
                ret_typ,
            })
        }
        E::App(app) => match infer(&app.fun, ctx)? {
            EN::Pi(pi) => {
                check(&app.arg, pi.param.typ, ctx)?;
                subst_nbe_typ(&pi.param.name, &From::from(pi.ret_typ), &app.arg, ctx)
            }
            fun_typ => Err(TypeCheckError::NonFunction(fun_typ))?,
        },
        E::Var(id) => match ctx.get(id) {
            Some(typ) => typ.nbe_typ(ctx),
            None => Err(TypeCheckError::NoSuchVariable(id, ctx.clone()))?,
        },
    };
    Ok(typ)
}

/// # Universe-level Inference for General (Possibly Open) Types
pub fn infer_typ_lvl<'a>(typ: &'a Exp, ctx: &Ctx<'a>) -> TypeCheck<'a, Level> {
    match infer(typ, ctx)? {
        EN::Univ(lvl) => Ok(lvl),
        ki => Err(TypeCheckError::NonType(ki)),
    }
}

/// # Type Checking for General (Possibly Open) Expressions
///
/// This function uses [infer] and [check_subtyp_nf] to
/// typecheck. This might be less efficient for ill-typed cases,
/// but this allows a cleaner implementation.
pub fn check<'a>(exp: &'a Exp, typ: Norm, ctx: &Ctx<'a>) -> TypeCheck<'a, ()> {
    let infered_typ = infer(exp, ctx)?;
    if check_subtyp_nf(&infered_typ, &typ, &HashMap::new()) {
        Ok(())
    } else {
        Err(TypeCheckError::IncompatibleType(infered_typ, typ))
    }
}

/// # Renaming for α-Equivalence and Subtyping
type Renaming<'a> = HashMap<&'a Ident, &'a Ident>;

/// # Subtyping Check for Normalized Types
///
/// For `check_subtyp_nf(subtyp, supertyp, renaming)`, we check whether
/// `subtyp` (after applying `renaming` on that) is a subtype of `supertyp`.
fn check_subtyp_nf<'a>(subtyp: &'a Norm, supertyp: &'a Norm, renaming: &Renaming<'a>) -> bool {
    match (subtyp, supertyp) {
        (Norm::Univ(lower_lvl), Norm::Univ(higher_lvl)) => lower_lvl <= higher_lvl,
        (Norm::Pi(sub_pi), Norm::Pi(super_pi)) => {
            // Do we want contravariant subtyping here?
            if sub_pi
                .param
                .typ
                .check_alpha_eq(&super_pi.param.typ, renaming)
            {
                let mut newrenaming = renaming.clone();
                newrenaming.insert(&sub_pi.param.name, &super_pi.param.name);
                check_subtyp_nf(&sub_pi.ret_typ, &super_pi.ret_typ, &newrenaming)
            } else {
                false
            }
        }
        (subtyp, supertyp) => subtyp.check_alpha_eq(supertyp, renaming),
    }
}

/// # α-Equivalence Checker
trait AlphaEq {
    fn check_alpha_eq<'a>(&'a self, other: &'a Self, renaming: &Renaming<'a>) -> bool;
}

/// # α-Equivalence Checker for [Norm]
impl AlphaEq for Norm {
    fn check_alpha_eq(&self, other: &Self, renaming: &Renaming) -> bool {
        match (self, other) {
            (Self::Univ(self_lvl), Self::Univ(other_lvl)) => self_lvl == other_lvl,
            (Self::Bottom, Self::Bottom) => true,
            (Self::Pi(self_pi), Self::Pi(other_pi)) => {
                if self_pi
                    .param
                    .typ
                    .check_alpha_eq(&other_pi.param.typ, renaming)
                {
                    let mut newrenaming = renaming.clone();
                    newrenaming.insert(&self_pi.param.name, &other_pi.param.name);
                    self_pi
                        .ret_typ
                        .check_alpha_eq(&other_pi.ret_typ, &newrenaming)
                } else {
                    false
                }
            }
            (Self::Fun(self_fun), Self::Fun(other_fun)) => {
                if self_fun
                    .param
                    .typ
                    .check_alpha_eq(&other_fun.param.typ, renaming)
                {
                    let mut newrenaming = renaming.clone();
                    newrenaming.insert(&self_fun.param.name, &other_fun.param.name);
                    self_fun.body.check_alpha_eq(&other_fun.body, &newrenaming)
                } else {
                    false
                }
            }
            (Self::Neut(self_neut), Self::Neut(other_neut)) => {
                self_neut.check_alpha_eq(other_neut, renaming)
            }
            (_, _) => false,
        }
    }
}

/// # α-Equivalence Checker for [Neut]
impl AlphaEq for Neut {
    fn check_alpha_eq(&self, other: &Self, renaming: &Renaming) -> bool {
        match (self, other) {
            (Self::Absurd(self_absurd), Self::Absurd(other_absurd)) => {
                if self_absurd.scr.check_alpha_eq(&other_absurd.scr, renaming) {
                    let mut newrenaming = renaming.clone();
                    newrenaming.insert(&self_absurd.motive_param, &other_absurd.motive_param);
                    self_absurd
                        .motive_body
                        .check_alpha_eq(&other_absurd.motive_body, &newrenaming)
                } else {
                    false
                }
            }
            (Self::App(self_app), Self::App(other_app)) => {
                self_app.fun.check_alpha_eq(&other_app.fun, renaming)
                    && self_app.arg.check_alpha_eq(&other_app.arg, renaming)
            }
            (Self::Var(self_id), Self::Var(other_id)) => {
                (*renaming.get(self_id).unwrap_or(&self_id)).eq(other_id)
            }
            (_, _) => false,
        }
    }
}

#[cfg(test)]
mod tests {
    use std::collections::HashMap;

    use crate::{assert_ok, front::parser, kernel::typecheck::*};

    #[test]
    fn application_type_checks0() {
        let exp_str = "(fun (a : Univ@0) -> a) Bottom";
        let typ_str = "Univ@0";
        let ctx = HashMap::new();
        let exp = parser::proper_expression(exp_str).unwrap();
        let typ = parser::proper_expression(typ_str).unwrap().nbe_typ(&ctx);
        assert_ok!(check(&exp, typ.clone(), &ctx));
    }

    #[test]
    fn application_type_checks1() {
        let exp_str = "(fun (a : Pi (qwe : Univ@1) . Univ@1) -> a) (lambda (b : Univ@1) -> b)";
        let typ_str = "Pi (d : Univ@1) . Univ@1";
        let ctx = HashMap::new();
        let exp = parser::proper_expression(exp_str).unwrap();
        let typ = parser::proper_expression(typ_str).unwrap().nbe_typ(&ctx);
        assert_ok!(check(&exp, typ.clone(), &ctx));
    }
}
