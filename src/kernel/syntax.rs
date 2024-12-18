pub type Ident = String;

#[derive(Clone)]
pub struct TypedName {
    pub name: Ident,
    pub typ: Exp,
}

// pub struct TermDef {
//     pub head: TypedName,
//     pub body: Exp,
// }

// pub struct TypeDef {
//     pub head: TypedName,
//     pub cons: Vec<TypedName>,
// }

#[derive(Clone)]
pub enum Exp {
    /** We should use big integer here to avoid inconsistency bug */
    Univ(u128),
    // Data(Ident),
    // Con(Ident),
    // Rec(Ident),
    Bottom,
    Absurd,
    Pi(Box<PiExp>),
    Fun(Box<FunExp>),
    App(Box<AppExp>),
    Var(Ident),
}

#[derive(Clone)]
pub struct PiExp {
    pub param: TypedName,
    pub ret_typ: Exp,
}

#[derive(Clone)]
pub struct FunExp {
    pub param: TypedName,
    pub body: Exp,
}

#[derive(Clone)]
pub struct AppExp {
    pub fun: Exp,
    pub arg: Exp,
}
