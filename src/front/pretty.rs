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
            docs![
                allocator,
                &self.name,
                allocator.softline(),
                ":",
            ]
            .group(),
            allocator.line(),
            docs![allocator, &self.typ].nest(2).align().group(),
        ]
        .nest(2)
        .align()
        .parens()
        .group()
    }

    pub fn to_pretty<'a>(&'a self, width: usize) -> String
    where
        &'a T: Pretty<'a, RcAllocator>,
    {
        let mut w = Vec::new();
        self.to_doc(&RcAllocator).render(width, &mut w).unwrap();
        String::from_utf8(w).unwrap()
    }
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
                let motive = docs![
                    allocator,
                    &absurd.motive_param,
                    allocator.softline(),
                    ".",
                    allocator.line(),
                    docs![allocator, &absurd.motive_body].group(),
                ]
                .nest(2)
                .align()
                .parens()
                .group();
                let doc = docs![
                    allocator,
                    "absurd",
                    allocator.softline(),
                    absurd.scr.to_doc_with_prec(1, allocator).group(),
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
                let binder = docs![allocator, "forall", allocator.softline(), &pi.param,].group();
                let doc = docs![
                    allocator,
                    binder,
                    allocator.line(),
                    ".",
                    allocator.softline(),
                    docs![allocator, &pi.ret_typ].group(),
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
            Exp::Fun(fun) => {
                let binder = docs![allocator, "fun", allocator.softline(), &fun.param,].group();
                let doc = docs![
                    allocator,
                    binder,
                    allocator.line(),
                    "->",
                    allocator.softline(),
                    fun.body.to_doc(allocator).group(),
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
            Exp::App(app) => {
                let doc = (app.fun.to_doc_with_prec(1, allocator)
                    + allocator.line()
                    + app.arg.to_doc_with_prec(2, allocator))
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

    pub fn to_pretty<'a>(&'a self, width: usize) -> String {
        let mut w = Vec::new();
        self.to_doc::<'a, RcAllocator, ()>(&RcAllocator)
            .render(width, &mut w)
            .unwrap();
        String::from_utf8(w).unwrap()
    }
}

impl Norm {
    pub fn to_pretty(&self, width: usize) -> String {
        Exp::from(self.clone()).to_pretty(width)
    }
}

impl Neut {
    pub fn to_pretty(&self, width: usize) -> String {
        Exp::from(self.clone()).to_pretty(width)
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
