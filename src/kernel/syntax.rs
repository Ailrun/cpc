pub type Ident = String;

/** We should use big integer here to avoid inconsistency bug */
pub type Level = u128;

#[derive(Clone, Debug)]
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

#[derive(Clone, Debug)]
pub enum Exp {
    Univ(Level),
    // Data(Ident),
    // Con(Ident),
    // Rec(Ident),
    Bottom,
    Absurd(Box<Absurd<Self,Self>>),
    Pi(Box<Pi<Self>>),
    Fun(Box<Fun<Self>>),
    App(Box<App<Self,Self>>),
    Var(Ident),
}

#[derive(Clone, Debug)]
pub struct Absurd<N,R> {
    pub scr: R,
    pub motive_param: TypedName<N>,
    pub motive_body: N,
}

#[derive(Clone, Debug)]
pub struct Pi<N> {
    pub param: TypedName<N>,
    pub ret_typ: N,
}

#[derive(Clone, Debug)]
pub struct Fun<N> {
    pub param: TypedName<N>,
    pub body: N,
}

#[derive(Clone, Debug)]
pub struct App<N,R> {
    pub fun: R,
    pub arg: N,
}

#[derive(Clone, Debug)]
pub enum Norm {
    Univ(Level),
    // Data(Ident),
    // Con(Ident),
    Bottom,
    Pi(Box<Pi<Self>>),
    Fun(Box<Fun<Self>>),
    Neut(Neut),
}

#[derive(Clone, Debug)]
pub enum Neut {
    // Rec(Ident),
    Absurd(Box<Absurd<Norm,Self>>),
    App(Box<App<Norm,Self>>),
    Var(Ident),
}
