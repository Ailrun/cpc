use std::fmt::{Display, Formatter};

use pretty::*;

use crate::front::syntax::*;

impl<T> TypedName<T> {
    fn to_doc<'a, D, A>(&'a self, allocator: &'a D) -> DocBuilder<'a, D, A>
    where
        &'a T: Pretty<'a, D, A>,
        A: 'a,
        D: 'a + ?Sized + DocAllocator<'a, A>,
        DocBuilder<'a, D, A>: Clone,
    {
        docs![
            allocator,
            &self.name,
            allocator.softline(),
            ":",
            allocator.softline(),
            docs![allocator, &self.typ].nest(2).align().group(),
        ]
        .nest(2)
        .align()
        .parens()
        .group()
    }

    pub fn to_pretty<'a>(&'a self, width: usize) -> String
    where
        &'a T: Pretty<'a, RcAllocator, ()>,
    {
        self.to_indented_pretty(0, width)
    }

    pub fn to_indented_pretty<'a>(&'a self, indent: usize, width: usize) -> String
    where
        &'a T: Pretty<'a, RcAllocator, ()>,
    {
        let mut w = Vec::new();
        self.to_doc::<RcAllocator, ()>(&RcAllocator)
            .indent(indent)
            .render(width, &mut w)
            .unwrap();
        String::from_utf8(w).unwrap()
    }
}

impl<T> Display for TypedName<T>
where
    for<'a> &'a T: Pretty<'a, RcAllocator, ()>,
{
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        f.write_str(self.to_pretty(80).as_str())
    }
}

fn typed_exp_to_doc<'a, D, A>(texp: &'a (Exp, Typ), allocator: &'a D) -> DocBuilder<'a, D, A>
where
    A: 'a,
    D: 'a + ?Sized + DocAllocator<'a, A>,
    DocBuilder<'a, D, A>: Clone,
{
    docs![
        allocator,
        &texp.0,
        allocator.softline(),
        ":",
        allocator.softline(),
        &texp.1,
        allocator.softline(),
    ]
    .align()
    .group()
}

pub fn typed_exp_to_pretty<'a>(texp: &'a (Exp, Typ), width: usize) -> String
{
    typed_exp_to_indented_pretty(texp, 0, width)
}

pub fn typed_exp_to_indented_pretty<'a>(texp: &'a (Exp, Typ), indent: usize, width: usize) -> String
{
    let mut w = Vec::new();
    typed_exp_to_doc::<RcAllocator, ()>(texp, &RcAllocator)
        .indent(indent)
        .render(width, &mut w)
        .unwrap();
    String::from_utf8(w).unwrap()
}

impl Exp {
    fn to_doc<'a, D, A>(&'a self, allocator: &'a D) -> DocBuilder<'a, D, A>
    where
        A: 'a,
        D: 'a + ?Sized + DocAllocator<'a, A>,
        DocBuilder<'a, D, A>: Clone,
    {
        self.to_doc_with_prec(0, allocator)
    }

    fn to_doc_with_prec<'a, D, A>(&'a self, prec: usize, allocator: &'a D) -> DocBuilder<'a, D, A>
    where
        A: 'a,
        D: 'a + ?Sized + DocAllocator<'a, A>,
        DocBuilder<'a, D, A>: Clone,
    {
        match self {
            Exp::Univ(lvl) => docs![allocator, "Type@", lvl.to_string()],
            Exp::Bottom => docs![allocator, "Bottom"],
            Exp::Absurd(absurd) => {
                let scr = absurd
                    .scr
                    .to_doc_with_prec(1, allocator)
                    .nest(2)
                    .align()
                    .group();
                let motive = docs![
                    allocator,
                    &absurd.motive_param,
                    allocator.softline(),
                    ".",
                    allocator.softline(),
                    docs![allocator, &absurd.motive_body]
                        .nest(2)
                        .align()
                        .group(),
                ]
                .nest(2)
                .align()
                .parens()
                .group();
                let doc = docs![
                    allocator,
                    "absurd",
                    allocator.softline(),
                    scr,
                    allocator.line(),
                    "return",
                    allocator.softline(),
                    motive,
                ]
                .nest(2)
                .align()
                .group();

                if prec > 0 {
                    doc.parens()
                } else {
                    doc
                }
            }
            Exp::Pi(pi) => {
                let mut ret_typ = &pi.ret_typ;
                let mut params = pi.param.to_doc(allocator);
                while let Exp::Pi(pi) = ret_typ {
                    params += allocator.line() + pi.param.to_doc(allocator);
                    ret_typ = &pi.ret_typ;
                }
                let binder = docs![allocator, "forall", allocator.softline(), params.align().group()]
                    .nest(2)
                    .align()
                    .group();
                let doc = docs![
                    allocator,
                    binder,
                    allocator.line(),
                    ".",
                    allocator.softline(),
                    docs![allocator, ret_typ].group(),
                ]
                .nest(7)
                .align()
                .group();

                if prec > 0 {
                    doc.parens()
                } else {
                    doc
                }
            }
            Exp::Fun(fun) => {
                let mut body = &fun.body;
                let mut params = fun.param.to_doc(allocator);
                while let Exp::Fun(fun) = body {
                    params += allocator.line() + fun.param.to_doc(allocator);
                    body = &fun.body;
                }
                let binder = docs![allocator, "fun", allocator.softline(), params.align().group()]
                    .nest(2)
                    .align()
                    .group();
                let doc = docs![
                    allocator,
                    binder,
                    allocator.line(),
                    "->",
                    allocator.softline(),
                    docs![allocator, body].group(),
                ]
                .nest(4)
                .align()
                .group();

                if prec > 0 {
                    doc.parens()
                } else {
                    doc
                }
            }
            Exp::App(app) => {
                let mut args = app.arg.to_doc_with_prec(2, allocator);
                let mut fun = &app.fun;
                while let Exp::App(app) = fun {
                    args = app.arg.to_doc_with_prec(2, allocator) + allocator.line() + args;
                    fun = &app.fun;
                }
                let doc = (fun.to_doc_with_prec(1, allocator)
                    + allocator.line()
                    + args.align())
                .nest(2)
                .align()
                .group();

                if prec > 1 {
                    doc.parens()
                } else {
                    doc
                }
            }
            Exp::Var(id) => docs![allocator, id],
        }
    }

    pub fn to_pretty<'a>(&'a self, width: usize) -> String
    {
        self.to_indented_pretty(0, width)
    }

    pub fn to_indented_pretty<'a>(&'a self, indent: usize, width: usize) -> String
    {
        let mut w = Vec::new();
        self.to_doc::<RcAllocator, ()>(&RcAllocator)
            .indent(indent)
            .render(width, &mut w)
            .unwrap();
        String::from_utf8(w).unwrap()
    }
}

impl Display for Exp {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        f.write_str(self.to_pretty(80).as_str())
    }
}

impl Norm {
    pub fn to_pretty<'a>(&'a self, width: usize) -> String
    {
        self.to_indented_pretty(0, width)
    }

    pub fn to_indented_pretty<'a>(&'a self, indent: usize, width: usize) -> String
    {
        Exp::from(self.clone()).to_indented_pretty(indent, width)
    }
}

impl Display for Norm {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        f.write_str(self.to_pretty(80).as_str())
    }
}

impl Neut {
    pub fn to_pretty<'a>(&'a self, width: usize) -> String
    {
        self.to_indented_pretty(0, width)
    }

    pub fn to_indented_pretty<'a>(&'a self, indent: usize, width: usize) -> String
    {
        Exp::from(self.clone()).to_indented_pretty(indent, width)
    }
}

impl Display for Neut {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        f.write_str(self.to_pretty(80).as_str())
    }
}

impl<'a, D, A, T> Pretty<'a, D, A> for &'a TypedName<T>
where
    &'a T: Pretty<'a, D, A>,
    A: 'a,
    D: 'a + ?Sized + DocAllocator<'a, A>,
    DocBuilder<'a, D, A>: Clone,
{
    fn pretty(self, allocator: &'a D) -> DocBuilder<'a, D, A> {
        self.to_doc(allocator)
    }
}

impl<'a, D, A> Pretty<'a, D, A> for &'a Exp
where
    A: 'a,
    D: 'a + ?Sized + DocAllocator<'a, A>,
    DocBuilder<'a, D, A>: Clone,
{
    fn pretty(self, allocator: &'a D) -> DocBuilder<'a, D, A> {
        self.to_doc(allocator)
    }
}
