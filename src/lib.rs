//! # Core Proof Checker

/// # Kernel of CPC
pub mod kernel {
  pub mod domain;
  pub mod nbe;
  pub mod typecheck;
}
pub mod parser;
pub mod syntax;