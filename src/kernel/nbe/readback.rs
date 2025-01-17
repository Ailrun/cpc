//! # Readback from Domain
//!
//! This module describes readback from domain into syntactic forms,
//! specifically from [DomNorm] and [DomNeut] into [Norm] and [Neut] respectively.
use super::{domain::*, evaluation::*, panic::*};
use crate::front::syntax::*;

/// # List of Seen Identifiers
///
/// This will be needed in a future when we create new names
/// to avoid identifier conflicts.
pub type Idents<'a> = Vec<&'a Ident>;

/// # Main Trait for Readback
pub trait Readback<'a> {
    type NormalizedSyntax;

    /// This method takes the ownership of `self`
    /// as we also want to take the ownership of [Dom] as a domain type
    /// in domain values.
    fn readback(self, ids: &mut Idents<'a>) -> Self::NormalizedSyntax;
}

impl<'a> Dom<'a> {
    /// Special Readback from a domain type into a normalized syntactic type.
    pub fn readback_typ(self, ids: &mut Idents<'a>) -> Norm {
        match self {
            Self::Univ(lvl) => Norm::from(lvl),
            Self::Bottom => Norm::Bottom,
            Self::Pi(pi_dom) => {
                let PiDom {
                    param: param_name,
                    param_typ,
                    mut ret_typ_env,
                    ret_typ_exp,
                } = *pi_dom;
                let param = TypedName {
                    name: param_name.clone(),
                    typ: param_typ.clone().readback_typ(ids),
                };
                ret_typ_env.insert(param_name, Self::from((param_typ, param_name)));
                ids.push(param_name);
                let ret_typ = ret_typ_exp.eval(&ret_typ_env).readback_typ(ids);
                ids.pop();
                Norm::from(Pi { param, ret_typ })
            }
            Self::Neut(_typ, neut) => Norm::from(neut.readback(ids)),
            _ => non_type_exp_panic(&self),
        }
    }

    /// Helper Readback for a Domain Value as a Neutral Domain Value
    fn readback_as_neut(self, ids: &mut Idents<'a>, err: fn(&Self) -> !) -> Neut {
        DomNeut::try_from(self)
            .unwrap_or_else(|x| err(&x))
            .readback(ids)
    }
}

/// # Readback from [DomNorm] into [Norm]
impl<'a> Readback<'a> for DomNorm<'a> {
    type NormalizedSyntax = Norm;

    fn readback(self, ids: &mut Idents<'a>) -> Norm {
        let Self { typ, dom } = self;
        match typ {
            Dom::Univ(_) => dom.readback_typ(ids),
            Dom::Bottom => Norm::from(dom.readback_as_neut(ids, inconsistent_panic)),
            Dom::Pi(pi_dom) => {
                let PiDom {
                    param: param_name,
                    param_typ,
                    mut ret_typ_env,
                    ret_typ_exp,
                } = *pi_dom;
                let param = TypedName {
                    name: param_name.clone(),
                    typ: param_typ.clone().readback_typ(ids),
                };
                let param_itself = Dom::from((param_typ, param_name));
                ret_typ_env.insert(param_name, param_itself.clone());
                ids.push(param_name);
                let ret_typ_dom = ret_typ_exp.eval(&ret_typ_env);
                let body = Self {
                    typ: ret_typ_dom,
                    dom: reduce_app(dom, param_itself),
                }
                .readback(ids);
                ids.pop();
                Norm::from(Fun { param, body })
            }
            Dom::Neut(_, _) => Norm::from(dom.readback_as_neut(ids, non_neutral_exp_panic)),
            _ => non_type_exp_panic(&typ),
        }
    }
}

/// # Readback from [DomNeut] into [Neut]
impl<'a> Readback<'a> for DomNeut<'a> {
    type NormalizedSyntax = Neut;

    fn readback(self, ids: &mut Idents<'a>) -> Neut {
        match self {
            Self::Absurd(absurd_dom) => {
                let AbsurdDom {
                    scr,
                    motive_param,
                    mut motive_body_env,
                    motive_body_exp,
                } = *absurd_dom;
                let scr = scr.readback(ids);
                motive_body_env.insert(motive_param, Dom::from((Dom::Bottom, motive_param)));
                ids.push(motive_param);
                let motive_body = motive_body_exp.eval(&motive_body_env).readback_typ(ids);
                ids.pop();
                Neut::from(Absurd {
                    scr,
                    motive_param: motive_param.clone(),
                    motive_body,
                })
            }
            Self::App(app_dom) => {
                let fun = app_dom.fun.readback(ids);
                let arg = app_dom.arg.readback(ids);
                Neut::from(App { fun, arg })
            }
            Self::Var(id) => Neut::from(id.clone()),
        }
    }
}
