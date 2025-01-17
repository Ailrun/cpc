use super::domain::*;

////////////////////////////////////////////////////////////
// Panic Functions
////////////////////////////////////////////////////////////
// TODO: Panic code should be implemented

/// Helper for Inconsistency Case
///
/// TODO: Give panic codes
pub fn inconsistent_panic(dom: &Dom) -> ! {
    panic!("Inconsistent expression {:?} is found", *dom)
}

/// Helper for Non-neutral Expression Case when Expecting Neutral
///
/// TODO: Give panic codes
pub fn non_neutral_exp_panic(dom: &Dom) -> ! {
    panic!(
        "Non-neutral expression {:?} cannot be readback under a neutral type",
        *dom,
    )
}

/// Helper for Non-type Expression Case when Expecting Type
///
/// TODO: Give panic codes
pub fn non_type_exp_panic(dom: &Dom) -> ! {
    panic!("Expression {:?} is not a type", *dom)
}
