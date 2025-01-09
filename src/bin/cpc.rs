use std::{collections::HashMap, io::*, process::exit};

use cpc::{front::parser, front::syntax::*, kernel::typecheck::*};

fn main() {
    repl()
}

#[allow(dead_code)]
enum ReplError {
    Exit(i32),
    ParserError(String),
    TypeCheckingError(TypeCheckError),
}

fn repl() {
    loop {
        let s = get_instruction();
        if let Err(ReplError::Exit(code)) = run_instruction(s) {
            exit(code)
        }
    }
}

fn get_instruction() -> String {
    let mut s = String::new();
    print!(">> ");
    stdout().flush().expect("What...?");
    stdin()
        .read_to_string(&mut s)
        .expect("Please input UTF-8 code");
    s
}

fn run_instruction(s: String) -> std::result::Result<(), ReplError> {
    (!s.is_empty()).then_some(()).ok_or(ReplError::Exit(1))?;
    let exp = parser::proper_expression(s.as_str()).map_err(|e| {
        println!("Parse Error...");
        ReplError::ParserError(String::from(e.input))
    })?;
    println!("Parsed Expression: {exp:?}");
    let ctx = HashMap::new();
    let typ = infer(exp.clone(), &ctx).map_err(|e| {
        println!("Ill-typed Expression");
        ReplError::TypeCheckingError(e)
    })?;
    println!("Infered Type: {typ:?}");
    let normal_form = exp.clone().nbe(Exp::from(typ), &ctx);
    println!("Normalized Expression: {normal_form:?}");
    Ok(())
}
