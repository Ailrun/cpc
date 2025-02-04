//! # Core Proof Checker

/// # Kernel of CPC
pub mod kernel {
    pub mod nbe;
    pub mod typecheck;
}

/// # Frontend of CPC
pub mod front {
    pub mod parser;
    pub mod pretty;
    pub mod syntax;
    pub mod token;
}

#[cfg(test)]
pub mod testutil;
