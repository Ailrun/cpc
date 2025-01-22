(function() {
    var type_impls = Object.fromEntries([["gimli",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-LineRow\" class=\"impl\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#579\">Source</a><a href=\"#impl-Clone-for-LineRow\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"gimli/read/line/struct.LineRow.html\" title=\"struct gimli::read::line::LineRow\">LineRow</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#579\">Source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"gimli/read/line/struct.LineRow.html\" title=\"struct gimli::read::line::LineRow\">LineRow</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.84.0/src/core/clone.rs.html#174\">Source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","gimli::read::line::LineNumberRow"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-LineRow\" class=\"impl\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#579\">Source</a><a href=\"#impl-Debug-for-LineRow\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"gimli/read/line/struct.LineRow.html\" title=\"struct gimli::read::line::LineRow\">LineRow</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#579\">Source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","gimli::read::line::LineNumberRow"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-LineRow\" class=\"impl\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#596-957\">Source</a><a href=\"#impl-LineRow\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"gimli/read/line/struct.LineRow.html\" title=\"struct gimli::read::line::LineRow\">LineRow</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#598-621\">Source</a><h4 class=\"code-header\">pub fn <a href=\"gimli/read/line/struct.LineRow.html#tymethod.new\" class=\"fn\">new</a>&lt;R: <a class=\"trait\" href=\"gimli/read/reader/trait.Reader.html\" title=\"trait gimli::read::reader::Reader\">Reader</a>&gt;(header: &amp;<a class=\"struct\" href=\"gimli/read/line/struct.LineProgramHeader.html\" title=\"struct gimli::read::line::LineProgramHeader\">LineProgramHeader</a>&lt;R&gt;) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Create a line number row in the initial state for the given program.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.address\" class=\"method\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#626-628\">Source</a><h4 class=\"code-header\">pub fn <a href=\"gimli/read/line/struct.LineRow.html#tymethod.address\" class=\"fn\">address</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/core/primitive.u64.html\">u64</a></h4></section></summary><div class=\"docblock\"><p>“The program-counter value corresponding to a machine instruction\ngenerated by the compiler.”</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.op_index\" class=\"method\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#638-640\">Source</a><h4 class=\"code-header\">pub fn <a href=\"gimli/read/line/struct.LineRow.html#tymethod.op_index\" class=\"fn\">op_index</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/core/primitive.u64.html\">u64</a></h4></section></summary><div class=\"docblock\"><blockquote>\n<p>An unsigned integer representing the index of an operation within a VLIW\ninstruction. The index of the first operation is 0. For non-VLIW\narchitectures, this register will always be 0.</p>\n<p>The address and op_index registers, taken together, form an operation\npointer that can reference any individual operation with the\ninstruction stream.</p>\n</blockquote>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.file_index\" class=\"method\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#645-647\">Source</a><h4 class=\"code-header\">pub fn <a href=\"gimli/read/line/struct.LineRow.html#tymethod.file_index\" class=\"fn\">file_index</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/core/primitive.u64.html\">u64</a></h4></section></summary><div class=\"docblock\"><p>“An unsigned integer indicating the identity of the source file\ncorresponding to a machine instruction.”</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.file\" class=\"method\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#651-656\">Source</a><h4 class=\"code-header\">pub fn <a href=\"gimli/read/line/struct.LineRow.html#tymethod.file\" class=\"fn\">file</a>&lt;'header, R: <a class=\"trait\" href=\"gimli/read/reader/trait.Reader.html\" title=\"trait gimli::read::reader::Reader\">Reader</a>&gt;(\n    &amp;self,\n    header: &amp;'header <a class=\"struct\" href=\"gimli/read/line/struct.LineProgramHeader.html\" title=\"struct gimli::read::line::LineProgramHeader\">LineProgramHeader</a>&lt;R&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.84.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;'header <a class=\"struct\" href=\"gimli/read/line/struct.FileEntry.html\" title=\"struct gimli::read::line::FileEntry\">FileEntry</a>&lt;R&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>The source file corresponding to the current machine instruction.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.line\" class=\"method\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#663-665\">Source</a><h4 class=\"code-header\">pub fn <a href=\"gimli/read/line/struct.LineRow.html#tymethod.line\" class=\"fn\">line</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.84.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"type\" href=\"https://doc.rust-lang.org/1.84.0/core/num/nonzero/type.NonZeroU64.html\" title=\"type core::num::nonzero::NonZeroU64\">NonZeroU64</a>&gt;</h4></section></summary><div class=\"docblock\"><p>“An unsigned integer indicating a source line number. Lines are numbered\nbeginning at 1. The compiler may emit the value 0 in cases where an\ninstruction cannot be attributed to any source line.”\nLine number values of 0 are represented as <code>None</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.column\" class=\"method\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#671-675\">Source</a><h4 class=\"code-header\">pub fn <a href=\"gimli/read/line/struct.LineRow.html#tymethod.column\" class=\"fn\">column</a>(&amp;self) -&gt; <a class=\"enum\" href=\"gimli/read/line/enum.ColumnType.html\" title=\"enum gimli::read::line::ColumnType\">ColumnType</a></h4></section></summary><div class=\"docblock\"><p>“An unsigned integer indicating a column number within a source\nline. Columns are numbered beginning at 1. The value 0 is reserved to\nindicate that a statement begins at the “left edge” of the line.”</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_stmt\" class=\"method\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#682-684\">Source</a><h4 class=\"code-header\">pub fn <a href=\"gimli/read/line/struct.LineRow.html#tymethod.is_stmt\" class=\"fn\">is_stmt</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/core/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>“A boolean indicating that the current instruction is a recommended\nbreakpoint location. A recommended breakpoint location is intended to\n“represent” a line, a statement and/or a semantically distinct subpart\nof a statement.”</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.basic_block\" class=\"method\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#689-691\">Source</a><h4 class=\"code-header\">pub fn <a href=\"gimli/read/line/struct.LineRow.html#tymethod.basic_block\" class=\"fn\">basic_block</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/core/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>“A boolean indicating that the current instruction is the beginning of a\nbasic block.”</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.end_sequence\" class=\"method\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#698-700\">Source</a><h4 class=\"code-header\">pub fn <a href=\"gimli/read/line/struct.LineRow.html#tymethod.end_sequence\" class=\"fn\">end_sequence</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/core/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>“A boolean indicating that the current address is that of the first byte\nafter the end of a sequence of target machine instructions. end_sequence\nterminates a sequence of lines; therefore other information in the same\nrow is not meaningful.”</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.prologue_end\" class=\"method\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#706-708\">Source</a><h4 class=\"code-header\">pub fn <a href=\"gimli/read/line/struct.LineRow.html#tymethod.prologue_end\" class=\"fn\">prologue_end</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/core/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>“A boolean indicating that the current address is one (of possibly many)\nwhere execution should be suspended for an entry breakpoint of a\nfunction.”</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.epilogue_begin\" class=\"method\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#714-716\">Source</a><h4 class=\"code-header\">pub fn <a href=\"gimli/read/line/struct.LineRow.html#tymethod.epilogue_begin\" class=\"fn\">epilogue_begin</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/core/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>“A boolean indicating that the current address is one (of possibly many)\nwhere execution should be suspended for an exit breakpoint of a\nfunction.”</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.isa\" class=\"method\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#727-729\">Source</a><h4 class=\"code-header\">pub fn <a href=\"gimli/read/line/struct.LineRow.html#tymethod.isa\" class=\"fn\">isa</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/core/primitive.u64.html\">u64</a></h4></section></summary><div class=\"docblock\"><p>Tag for the current instruction set architecture.</p>\n<blockquote>\n<p>An unsigned integer whose value encodes the applicable instruction set\narchitecture for the current instruction.</p>\n<p>The encoding of instruction sets should be shared by all users of a\ngiven architecture. It is recommended that this encoding be defined by\nthe ABI authoring committee for each architecture.</p>\n</blockquote>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.discriminator\" class=\"method\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#738-740\">Source</a><h4 class=\"code-header\">pub fn <a href=\"gimli/read/line/struct.LineRow.html#tymethod.discriminator\" class=\"fn\">discriminator</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/core/primitive.u64.html\">u64</a></h4></section></summary><div class=\"docblock\"><p>“An unsigned integer identifying the block to which the current\ninstruction belongs. Discriminator values are assigned arbitrarily by\nthe DWARF producer and serve to distinguish among multiple blocks that\nmay all be associated with the same source file, line, and column. Where\nonly one block exists for a given source position, the discriminator\nvalue should be zero.”</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.execute\" class=\"method\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#747-863\">Source</a><h4 class=\"code-header\">pub fn <a href=\"gimli/read/line/struct.LineRow.html#tymethod.execute\" class=\"fn\">execute</a>&lt;R, Program&gt;(\n    &amp;mut self,\n    instruction: <a class=\"enum\" href=\"gimli/read/line/enum.LineInstruction.html\" title=\"enum gimli::read::line::LineInstruction\">LineInstruction</a>&lt;R&gt;,\n    program: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/core/primitive.reference.html\">&amp;mut Program</a>,\n) -&gt; <a class=\"type\" href=\"gimli/read/type.Result.html\" title=\"type gimli::read::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/core/primitive.bool.html\">bool</a>&gt;<div class=\"where\">where\n    Program: <a class=\"trait\" href=\"gimli/read/line/trait.LineProgram.html\" title=\"trait gimli::read::line::LineProgram\">LineProgram</a>&lt;R&gt;,\n    R: <a class=\"trait\" href=\"gimli/read/reader/trait.Reader.html\" title=\"trait gimli::read::reader::Reader\">Reader</a>,</div></h4></section></summary><div class=\"docblock\"><p>Execute the given instruction, and return true if a new row in the\nline number matrix needs to be generated.</p>\n<p>Unknown opcodes are treated as no-ops.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.reset\" class=\"method\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#867-882\">Source</a><h4 class=\"code-header\">pub fn <a href=\"gimli/read/line/struct.LineRow.html#tymethod.reset\" class=\"fn\">reset</a>&lt;R: <a class=\"trait\" href=\"gimli/read/reader/trait.Reader.html\" title=\"trait gimli::read::reader::Reader\">Reader</a>&gt;(&amp;mut self, header: &amp;<a class=\"struct\" href=\"gimli/read/line/struct.LineProgramHeader.html\" title=\"struct gimli::read::line::LineProgramHeader\">LineProgramHeader</a>&lt;R&gt;)</h4></section></summary><div class=\"docblock\"><p>Perform any reset that was required after copying the previous row.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.apply_line_advance\" class=\"method\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#885-896\">Source</a><h4 class=\"code-header\">fn <a href=\"gimli/read/line/struct.LineRow.html#tymethod.apply_line_advance\" class=\"fn\">apply_line_advance</a>(&amp;mut self, line_increment: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/core/primitive.i64.html\">i64</a>)</h4></section></summary><div class=\"docblock\"><p>Step 1 of section 6.2.5.1</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.apply_operation_advance\" class=\"method\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#899-930\">Source</a><h4 class=\"code-header\">fn <a href=\"gimli/read/line/struct.LineRow.html#tymethod.apply_operation_advance\" class=\"fn\">apply_operation_advance</a>&lt;R: <a class=\"trait\" href=\"gimli/read/reader/trait.Reader.html\" title=\"trait gimli::read::reader::Reader\">Reader</a>&gt;(\n    &amp;mut self,\n    operation_advance: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/core/primitive.u64.html\">u64</a>,\n    header: &amp;<a class=\"struct\" href=\"gimli/read/line/struct.LineProgramHeader.html\" title=\"struct gimli::read::line::LineProgramHeader\">LineProgramHeader</a>&lt;R&gt;,\n) -&gt; <a class=\"type\" href=\"gimli/read/type.Result.html\" title=\"type gimli::read::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/core/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Step 2 of section 6.2.5.1</p>\n</div></details><section id=\"method.adjust_opcode\" class=\"method\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#933-935\">Source</a><h4 class=\"code-header\">fn <a href=\"gimli/read/line/struct.LineRow.html#tymethod.adjust_opcode\" class=\"fn\">adjust_opcode</a>&lt;R: <a class=\"trait\" href=\"gimli/read/reader/trait.Reader.html\" title=\"trait gimli::read::reader::Reader\">Reader</a>&gt;(\n    &amp;self,\n    opcode: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/core/primitive.u8.html\">u8</a>,\n    header: &amp;<a class=\"struct\" href=\"gimli/read/line/struct.LineProgramHeader.html\" title=\"struct gimli::read::line::LineProgramHeader\">LineProgramHeader</a>&lt;R&gt;,\n) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/core/primitive.u8.html\">u8</a></h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.exec_special_opcode\" class=\"method\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#938-956\">Source</a><h4 class=\"code-header\">fn <a href=\"gimli/read/line/struct.LineRow.html#tymethod.exec_special_opcode\" class=\"fn\">exec_special_opcode</a>&lt;R: <a class=\"trait\" href=\"gimli/read/reader/trait.Reader.html\" title=\"trait gimli::read::reader::Reader\">Reader</a>&gt;(\n    &amp;mut self,\n    opcode: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/core/primitive.u8.html\">u8</a>,\n    header: &amp;<a class=\"struct\" href=\"gimli/read/line/struct.LineProgramHeader.html\" title=\"struct gimli::read::line::LineProgramHeader\">LineProgramHeader</a>&lt;R&gt;,\n) -&gt; <a class=\"type\" href=\"gimli/read/type.Result.html\" title=\"type gimli::read::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/core/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Section 6.2.5.1</p>\n</div></details></div></details>",0,"gimli::read::line::LineNumberRow"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-LineRow\" class=\"impl\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#579\">Source</a><a href=\"#impl-PartialEq-for-LineRow\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"gimli/read/line/struct.LineRow.html\" title=\"struct gimli::read::line::LineRow\">LineRow</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#579\">Source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"gimli/read/line/struct.LineRow.html\" title=\"struct gimli::read::line::LineRow\">LineRow</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/core/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>self</code> and <code>other</code> values to be equal, and is used by <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.84.0/src/core/cmp.rs.html#261\">Source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/core/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/core/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>!=</code>. The default implementation is almost always sufficient,\nand should not be overridden without very good reason.</div></details></div></details>","PartialEq","gimli::read::line::LineNumberRow"],["<section id=\"impl-Copy-for-LineRow\" class=\"impl\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#579\">Source</a><a href=\"#impl-Copy-for-LineRow\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"gimli/read/line/struct.LineRow.html\" title=\"struct gimli::read::line::LineRow\">LineRow</a></h3></section>","Copy","gimli::read::line::LineNumberRow"],["<section id=\"impl-Eq-for-LineRow\" class=\"impl\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#579\">Source</a><a href=\"#impl-Eq-for-LineRow\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"gimli/read/line/struct.LineRow.html\" title=\"struct gimli::read::line::LineRow\">LineRow</a></h3></section>","Eq","gimli::read::line::LineNumberRow"],["<section id=\"impl-StructuralPartialEq-for-LineRow\" class=\"impl\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#579\">Source</a><a href=\"#impl-StructuralPartialEq-for-LineRow\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"gimli/read/line/struct.LineRow.html\" title=\"struct gimli::read::line::LineRow\">LineRow</a></h3></section>","StructuralPartialEq","gimli::read::line::LineNumberRow"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[24778]}