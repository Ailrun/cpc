use std::{collections::HashMap, io::*, process::exit};

use cpc::{front::parser, front::syntax::*, kernel::typecheck::*};

fn main() {
    let mut s = String::new();
    print!(">> ");
    stdout().flush().expect("What...?");
    stdin()
        .read_to_string(&mut s)
        .expect("Please input UTF-8 code");
    if s.is_empty() {
        println!("\nExit");
        exit(1)
    }
    match parser::proper_expression(s.as_str()) {
        Ok(exp) => {
            println!("Parsed Expression: {exp:?}");
            let ctx = HashMap::new();
            match infer(exp.clone(), &ctx) {
                Ok(typ) => {
                    println!("Infered Type: {typ:?}");
                    let normal_form = exp.clone().nbe(Exp::from(typ), &ctx);
                    println!("Normalized Expression: {normal_form:?}");
                }
                Err(_) => println!("Ill-typed Expression"),
            }
        }
        Err(_) => println!("Parse Error..."),
    }
    main()
}
