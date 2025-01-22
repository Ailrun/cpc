searchState.loadedDescShard("addr2line", 0, "<code>addr2line</code> provides a cross-platform library for retrieving …\nAn abbreviation declared that its tag is zero, but zero is …\nAn address calculation overflowed.\nAn attribute specification declared that its form is zero, …\nInvalid branch target for a DW_OP_bra or DW_OP_skip.\nThe abbreviation’s has-children byte was not one of …\nThe specified length is impossible.\nAn error parsing a signed LEB128 value.\nAn error parsing an unsigned LEB128 value.\nFound an invalid UTF-8 string.\nThe type of reader used.\nCannot parse a pointer with a <code>DW_EH_PE_omit</code> encoding.\nEncountered a call frame instruction in a context in which …\nThe state necessary to perform address to line translation.\nFound a data relative pointer, but the data base is …\nDivision or modulus by zero when evaluating an expression.\nFound an abbreviation code that has already been used.\nFound a duplicate arange.\nExpected an attribute value to be a string form.\nExpected a zero, found something else.\nA function frame.\nAn iterator over function frames.\nFound a function relative pointer in a context that does …\nA function name.\nAn expression operation required an integral type but saw a\nThe end of an address range was before the beginning.\nThe size of a deref expression must not be larger than the …\nAn unrecognized operation was found while parsing a DWARF …\nAn expression-terminating operation was followed by …\n<code>DW_FORM_implicit_const</code> used in an invalid context.\nInvalid hash row in <code>.dwp</code> index.\nInvalid section count in <code>.dwp</code> index.\nInvalid slot count in <code>.dwp</code> index.\nThe expression had a piece followed by an expression …\nDW_OP_push_object_address used but no address passed in.\nThe shift value in an expression must be a non-negative …\nAn I/O error occurred while reading.\nThe line range must not be zero.\nThe lookup requires split DWARF data to be loaded.\nA source location.\nIterator over <code>Location</code>s in a range of addresses, returned …\nThis trait represents a partially complete operation that …\nOperations that consult debug information may require …\nThe maximum operations per instruction must not be zero.\nThe minimum instruction length must not be zero.\nMissing DW_LNCT_path in file entry format.\nA compilation unit or type unit is missing its top level …\nDid not find an entry at the given offset.\nDo not have unwind info for the given address.\nExpected to find the CIE ID, but found something else.\nExpected to find a pointer to a CIE, but found the CIE ID …\nNot enough items on the stack when evaluating an …\nExpected to find a pointer to an FDE, but found a CIE …\nThe given offset is out of bounds.\nThe opcode base must not be zero.\nThe lookup has completed and produced an output.\nThe final output of this operation.\nFound a PC relative pointer, but the section base is …\nWhen evaluating call frame instructions, found a …\nThis struct contains the information needed to find split …\nAttempted to push onto the CFI or evaluation stack, but it …\nFound a <code>.text</code> relative pointer, but the <code>.text</code> base is …\nToo many iterations to compute the expression.\nThe CFI program defined more register rules than we have …\nAn expression operation used mismatching types.\nHit the end of input before it was expected.\nRead a null entry before it was expected.\nFound a record with an unknown abbreviation code.\nFound an unknown CFI augmentation.\nAn unknown DW_CFA_* instruction.\nFound an unknown extended opcode.\nFound an unknown <code>DW_FORM_*</code> type.\nUnknown section type in <code>.dwp</code> index.\nUnknown section type in version 2 <code>.dwp</code> index.\nFound an unknown location-lists format.\nThe given pointer encoding is either unknown or invalid.\nFound an unknown range-lists format.\nFound an unknown reserved length value.\nFound an unknown standard opcode.\nFound an unknown DWARF version.\nRanges using AddressIndex are not supported yet.\nThe specified address size is not supported.\nA DIE attribute used an unsupported form.\nAn unsupported operation was found while evaluating a …\nThe specified field size is not supported.\nAn offset value was larger than the maximum supported …\nThe specified offset size is not supported.\nWe do not support the given pointer encoding yet.\nRegisters larger than <code>u16</code> are not supported.\nNonzero segment selector sizes aren’t supported yet.\nAn expression operation used types that are not supported.\nThe <code>DW_UT_*</code> value for this unit is not supported yet.\nThe <code>.eh_frame_hdr</code> binary search table claims to be …\nThe column number.\nThe compilation directory <code>path</code> is relative to.\nDemangle a symbol name using the demangling scheme for the …\nApply ‘best effort’ demangling of a symbol name.\nThe DWARF unit offset corresponding to the DIE of the …\nThe dwo id, for looking up in a DWARF package, or for …\nThe file name.\nFind the DWARF unit corresponding to the given virtual …\nReturn an iterator for the function frames corresponding …\nFind the source file and line corresponding to the given …\nReturn source file and lines for a range of addresses. For …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstruct a new <code>Context</code> from an existing <code>gimli::Dwarf</code> …\nConstruct a new <code>Context</code> from an existing <code>gimli::Dwarf</code> …\nConstruct a new <code>Context</code> from DWARF sections.\nThe name of the function.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe language of the compilation unit containing this …\nThe line number.\nThe source location corresponding to this frame.\nThe name of the function.\nOnce the split DWARF data is loaded, the loader is expected\nA path on the filesystem, relative to <code>comp_dir</code> to find …\nPreload units for <code>probe</code>.\nResumes the operation with the provided data.\nThe continuation to resume with the loaded split DWARF …\nThe information needed to find the split DWARF data.\nA function frame.\nAn iterator over function frames.\nA function name.\nA source location.\nThe column number.\nDemangle a symbol name using the demangling scheme for the …\nThe name of this function after demangling (if applicable).\nApply ‘best effort’ demangling of a symbol name.\nThe DWARF unit offset corresponding to the DIE of the …\nThe file name.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThe name of the function.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe language of the compilation unit containing this …\nThe line number.\nThe source location corresponding to this frame.\nThe name of the function.\nAdvances the iterator and returns the next frame.\nThe raw name of this function before demangling.\nA single address range for a function.\nList of <code>DW_TAG_subprogram</code> address ranges in the unit.\nBuild the list of inlined functions that contain <code>probe</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nAn index into <code>Functions::functions</code>.\nAn index into <code>Function::inlined_functions</code>.\nList of all <code>DW_TAG_subprogram</code> details in the unit.\nList of <code>DW_TAG_inlined_subroutine</code> address ranges in this …\nList of all <code>DW_TAG_inlined_subroutine</code> details in this …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCheck if the path in the given string has a unix style root\nCheck if the path in the given string has a windows style …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe type of reader used.\nThe lookup requires split DWARF data to be loaded.\nThis trait represents a partially complete operation that …\nOperations that consult debug information may require …\nSome functions (e.g. <code>find_frames</code>) require considering …\nThe lookup has completed and produced an output.\nThe final output of this operation.\nThis struct contains the information needed to find split …\nThe compilation directory <code>path</code> is relative to.\nThe dwo id, for looking up in a DWARF package, or for …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nOnce the split DWARF data is loaded, the loader is expected\nA path on the filesystem, relative to <code>comp_dir</code> to find …\nResumes the operation with the provided data.\nCallers that do not handle split DWARF can call …\nThe continuation to resume with the loaded split DWARF …\nThe information needed to find the split DWARF data.\nA DWO unit has its own DWARF sections.\nIterator over <code>Location</code>s in a range of addresses, returned …\nReturns the DWARF sections and the unit.\nFinds the CUs for the function address given.\nFinds the CUs covering the range of addresses given.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.")