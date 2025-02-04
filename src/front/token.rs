use std::{convert::Infallible, fmt::Display, num::ParseIntError};

use logos::{Logos, SpannedIter};

use super::syntax::Level;

#[derive(Clone, Default, Debug, PartialEq)]
pub enum LexerError {
    InvalidInteger(ParseIntError),
    #[default]
    InvalidToken,
}

impl From<ParseIntError> for LexerError {
    fn from(err: ParseIntError) -> Self {
        LexerError::InvalidInteger(err)
    }
}

#[derive(Clone, Debug, Logos)]
#[logos(skip r"[ \t\n]+", error = LexerError)]
pub enum Token {
    #[regex(r"0|([1-9][0-9]*)", |lex| lex.slice().parse())]
    Level(Level),
    #[regex(r"(\p{alpha}|_)(\p{alpha}|\d|_)*", |lex| lex.slice().to_string())]
    Identifier(String),

    // Symbols
    #[token("(")]
    LParen,
    #[token(")")]
    RParen,
    #[token("->")]
    Arrow,
    #[token("@")]
    At,
    #[token(":")]
    Colon,
    #[token(",")]
    Comma,
    #[token(".")]
    Dot,

    // Keywords
    #[token("Univ")]
    Univ,
    #[token("forall")]
    Forall,
    #[token("∀")]
    UnicodeForall,
    #[token("Π")]
    Pi,
    #[token("Pi")]
    UnicodePi,
    #[token("fun")]
    Fun,
    #[token("lambda")]
    Lambda,
    #[token("λ")]
    UnicodeLambda,
    #[token("Bottom")]
    Bottom,
    #[token("⊥")]
    UnicodeBottom,
    #[token("absurd")]
    Absurd,
    #[token("return")]
    Return,

    // Error
    Error,
}

impl Display for Token {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Token::Level(_) => write!(f, "Level"),
            Token::Identifier(_) => write!(f, "Identifier"),
            Token::LParen => write!(f, "'('"),
            Token::RParen => write!(f, "')'"),
            Token::Arrow => write!(f, "'->'"),
            Token::At => write!(f, "'@'"),
            Token::Colon => write!(f, "':'"),
            Token::Comma => write!(f, "','"),
            Token::Dot => write!(f, "'.'"),
            Token::Univ => write!(f, "'Univ'"),
            Token::Forall => write!(f, "'Forall'"),
            Token::UnicodeForall => write!(f, "'∀'"),
            Token::Pi => write!(f, "'Pi'"),
            Token::UnicodePi => write!(f, "'Π'"),
            Token::Fun => write!(f, "'fun'"),
            Token::Lambda => write!(f, "'lambda'"),
            Token::UnicodeLambda => write!(f, "'λ'"),
            Token::Bottom => write!(f, "'Bottom'"),
            Token::UnicodeBottom => write!(f, "'⊥'"),
            Token::Absurd => write!(f, "'absurd'"),
            Token::Return => write!(f, "'return'"),
            Token::Error => write!(f, "ERROR"),
        }
    }
    }

pub type Spanned<Tok, Loc, Error> = Result<(Loc, Tok, Loc), Error>;

pub struct Lexer<'input> {
    token_stream: SpannedIter<'input, Token>,
}

impl<'input> Lexer<'input> {
    pub fn new(input: &'input str) -> Self {
        Self {
            token_stream: Token::lexer(input).spanned(),
        }
    }
}

impl<'input> Iterator for Lexer<'input> {
    type Item = Spanned<Token, usize, Infallible>;

    fn next(&mut self) -> Option<Self::Item> {
        self.token_stream.next().map(|(token, span)| match token {
            Ok(token) => Ok((span.start, token, span.end)),
            Err(_) => Ok((span.start, Token::Error, span.end)),
        })
    }
}
