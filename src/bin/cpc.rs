use std::{collections::HashMap, io::*, process::exit};

use cpc::{front::parser, front::syntax::*, kernel::typecheck::*};

fn main() {
    loop {
        let s = read_instruction();
        if let Err(e) = interpret_instruction(s.as_str()) {
            handle_error(e)
        }
    }
}

fn read_instruction() -> String {
    let mut s = String::new();
    print!(">> ");
    stdout().flush().expect("What...?");
    stdin()
        .read_to_string(&mut s)
        .expect("Please input UTF-8 code");
    s
}

enum ReplError {
    Exit(i32),
    ParserError(String),
    TypeCheckingError(String),
}

fn interpret_instruction(s: &str) -> std::result::Result<(), ReplError> {
    let instr = parse_instruction(s)?;
    run_instruction(instr)
}

fn parse_instruction(s: &str) -> std::result::Result<ReplInstr, ReplError> {
    (!s.is_empty()).then_some(()).ok_or(ReplError::Exit(1))?;
    parser::proper_repl_instruction(s).map_err(|e| {
        eprintln!("Parse Error...");
        ReplError::ParserError(String::from(e.to_string()))
    })
}

fn run_instruction(instr: ReplInstr) -> std::result::Result<(), ReplError> {
    match instr {
        ReplInstr::Check(exp, typ) => run_check(exp, typ),
        ReplInstr::Infer(exp) => run_infer(exp),
    }
}

fn run_infer(exp: Exp) -> std::result::Result<(), ReplError> {
    println!("Parsed instruction: infer the minimal type of the expression\n{}\n", exp.to_indented_pretty(2, 80));
    let ctx = HashMap::new();
    let typ = infer(&exp, &ctx).map_err(|e| {
        eprintln!("Ill-typed expression");
        ReplError::TypeCheckingError(format_typechecking_error(e))
    })?;
    println!("Infered type is\n{}\n", typ.to_indented_pretty(2, 80));
    let normal_form = exp.nbe(&Exp::from(typ), &ctx);
    println!("Normalization result\n{}\n", normal_form.to_indented_pretty(2, 80));
    Ok(())
}

fn run_check(exp: Exp, typ: Exp) -> std::result::Result<(), ReplError> {
    println!("Parsed instruction: check the expression\n{}\nagainst the type\n{}\n", exp.to_indented_pretty(2, 80), typ.to_indented_pretty(2, 80));
    let ctx = HashMap::new();
    let _ = infer_typ_lvl(&typ, &ctx).map_err(|e| {
        eprintln!("Ill-typed type\n{}\n", typ.to_indented_pretty(2, 80));
        ReplError::TypeCheckingError(format_typechecking_error(e))
    });
    check(&exp, typ.nbe_typ(&ctx), &ctx).map_err(|e| {
        eprintln!("Expression\n{}\nis not of\n{}\n", exp.to_indented_pretty(2, 80), typ.to_indented_pretty(2,80));
        ReplError::TypeCheckingError(format_typechecking_error(e))
    })?;
    let normal_form = exp.nbe(&Exp::from(typ), &ctx);
    println!("Normalization result\n{}\n", normal_form.to_indented_pretty(2,80));
    Ok(())
}

fn format_typechecking_error(e: TypeCheckError) -> String {
    format!("{e:?}")
}

fn handle_error(e: ReplError) {
    match e {
        ReplError::Exit(code) => exit(code),
        ReplError::ParserError(err_msg) => eprintln!("{}", err_msg),
        ReplError::TypeCheckingError(err_msg) => eprintln!("{}", err_msg),
    }
}
