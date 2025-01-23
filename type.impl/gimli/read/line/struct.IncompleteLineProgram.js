(function() {
    var type_impls = Object.fromEntries([["gimli",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-IncompleteLineProgram%3CR,+Offset%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#1410\">source</a><a href=\"#impl-Clone-for-IncompleteLineProgram%3CR,+Offset%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, Offset&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"gimli/read/line/struct.IncompleteLineProgram.html\" title=\"struct gimli::read::line::IncompleteLineProgram\">IncompleteLineProgram</a>&lt;R, Offset&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"gimli/read/reader/trait.Reader.html\" title=\"trait gimli::read::reader::Reader\">Reader</a>&lt;Offset = Offset&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Offset: <a class=\"trait\" href=\"gimli/read/reader/trait.ReaderOffset.html\" title=\"trait gimli::read::reader::ReaderOffset\">ReaderOffset</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#1410\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"gimli/read/line/struct.IncompleteLineProgram.html\" title=\"struct gimli::read::line::IncompleteLineProgram\">IncompleteLineProgram</a>&lt;R, Offset&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.83.0/src/core/clone.rs.html#174\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","gimli::read::line::IncompleteLineNumberProgram"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-IncompleteLineProgram%3CR,+Offset%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#1410\">source</a><a href=\"#impl-Debug-for-IncompleteLineProgram%3CR,+Offset%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, Offset&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"gimli/read/line/struct.IncompleteLineProgram.html\" title=\"struct gimli::read::line::IncompleteLineProgram\">IncompleteLineProgram</a>&lt;R, Offset&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"gimli/read/reader/trait.Reader.html\" title=\"trait gimli::read::reader::Reader\">Reader</a>&lt;Offset = Offset&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    Offset: <a class=\"trait\" href=\"gimli/read/reader/trait.ReaderOffset.html\" title=\"trait gimli::read::reader::ReaderOffset\">ReaderOffset</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#1410\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","gimli::read::line::IncompleteLineNumberProgram"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IncompleteLineProgram%3CR,+Offset%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#1419-1494\">source</a><a href=\"#impl-IncompleteLineProgram%3CR,+Offset%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, Offset&gt; <a class=\"struct\" href=\"gimli/read/line/struct.IncompleteLineProgram.html\" title=\"struct gimli::read::line::IncompleteLineProgram\">IncompleteLineProgram</a>&lt;R, Offset&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"gimli/read/reader/trait.Reader.html\" title=\"trait gimli::read::reader::Reader\">Reader</a>&lt;Offset = Offset&gt;,\n    Offset: <a class=\"trait\" href=\"gimli/read/reader/trait.ReaderOffset.html\" title=\"trait gimli::read::reader::ReaderOffset\">ReaderOffset</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.header\" class=\"method\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#1425-1427\">source</a><h4 class=\"code-header\">pub fn <a href=\"gimli/read/line/struct.IncompleteLineProgram.html#tymethod.header\" class=\"fn\">header</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"gimli/read/line/struct.LineProgramHeader.html\" title=\"struct gimli::read::line::LineProgramHeader\">LineProgramHeader</a>&lt;R, Offset&gt;</h4></section></summary><div class=\"docblock\"><p>Retrieve the <code>LineProgramHeader</code> for this program.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.rows\" class=\"method\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#1431-1433\">source</a><h4 class=\"code-header\">pub fn <a href=\"gimli/read/line/struct.IncompleteLineProgram.html#tymethod.rows\" class=\"fn\">rows</a>(self) -&gt; <a class=\"struct\" href=\"gimli/read/line/struct.LineRows.html\" title=\"struct gimli::read::line::LineRows\">LineRows</a>&lt;R, <a class=\"struct\" href=\"gimli/read/line/struct.IncompleteLineProgram.html\" title=\"struct gimli::read::line::IncompleteLineProgram\">IncompleteLineProgram</a>&lt;R, Offset&gt;, Offset&gt;</h4></section></summary><div class=\"docblock\"><p>Construct a new <code>LineRows</code> for executing this program to iterate\nover rows in the line information matrix.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.sequences\" class=\"method\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#1456-1493\">source</a><h4 class=\"code-header\">pub fn <a href=\"gimli/read/line/struct.IncompleteLineProgram.html#tymethod.sequences\" class=\"fn\">sequences</a>(\n    self,\n) -&gt; <a class=\"type\" href=\"gimli/read/type.Result.html\" title=\"type gimli::read::Result\">Result</a>&lt;(<a class=\"struct\" href=\"gimli/read/line/struct.CompleteLineProgram.html\" title=\"struct gimli::read::line::CompleteLineProgram\">CompleteLineProgram</a>&lt;R, Offset&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"gimli/read/line/struct.LineSequence.html\" title=\"struct gimli::read::line::LineSequence\">LineSequence</a>&lt;R&gt;&gt;)&gt;</h4></section></summary><div class=\"docblock\"><p>Execute the line number program, completing the <code>IncompleteLineProgram</code>\ninto a <code>CompleteLineProgram</code> and producing an array of sequences within\nthe line number program that can later be used with\n<code>CompleteLineProgram::resume_from</code>.</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>gimli::{IncompleteLineProgram, EndianSlice, NativeEndian};\n\n<span class=\"kw\">fn </span>get_line_number_program&lt;<span class=\"lifetime\">'a</span>&gt;() -&gt; IncompleteLineProgram&lt;EndianSlice&lt;<span class=\"lifetime\">'a</span>, NativeEndian&gt;&gt; {\n    <span class=\"comment\">// Get a line number program from some offset in a\n    // `.debug_line` section...\n</span>}\n\n<span class=\"kw\">let </span>program = get_line_number_program();\n<span class=\"kw\">let </span>(program, sequences) = program.sequences().unwrap();\n<span class=\"macro\">println!</span>(<span class=\"string\">\"There are {} sequences in this line number program\"</span>, sequences.len());</code></pre></div>\n</div></details></div></details>",0,"gimli::read::line::IncompleteLineNumberProgram"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-LineProgram%3CR,+Offset%3E-for-IncompleteLineProgram%3CR,+Offset%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#132-143\">source</a><a href=\"#impl-LineProgram%3CR,+Offset%3E-for-IncompleteLineProgram%3CR,+Offset%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, Offset&gt; <a class=\"trait\" href=\"gimli/read/line/trait.LineProgram.html\" title=\"trait gimli::read::line::LineProgram\">LineProgram</a>&lt;R, Offset&gt; for <a class=\"struct\" href=\"gimli/read/line/struct.IncompleteLineProgram.html\" title=\"struct gimli::read::line::IncompleteLineProgram\">IncompleteLineProgram</a>&lt;R, Offset&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"gimli/read/reader/trait.Reader.html\" title=\"trait gimli::read::reader::Reader\">Reader</a>&lt;Offset = Offset&gt;,\n    Offset: <a class=\"trait\" href=\"gimli/read/reader/trait.ReaderOffset.html\" title=\"trait gimli::read::reader::ReaderOffset\">ReaderOffset</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.header\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#137-139\">source</a><a href=\"#method.header\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"gimli/read/line/trait.LineProgram.html#tymethod.header\" class=\"fn\">header</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"gimli/read/line/struct.LineProgramHeader.html\" title=\"struct gimli::read::line::LineProgramHeader\">LineProgramHeader</a>&lt;R, Offset&gt;</h4></section></summary><div class='docblock'>Get a reference to the held <code>LineProgramHeader</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.add_file\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#140-142\">source</a><a href=\"#method.add_file\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"gimli/read/line/trait.LineProgram.html#tymethod.add_file\" class=\"fn\">add_file</a>(&amp;mut self, file: <a class=\"struct\" href=\"gimli/read/line/struct.FileEntry.html\" title=\"struct gimli::read::line::FileEntry\">FileEntry</a>&lt;R, Offset&gt;)</h4></section></summary><div class='docblock'>Add a file to the file table if necessary.</div></details></div></details>","LineProgram<R, Offset>","gimli::read::line::IncompleteLineNumberProgram"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-IncompleteLineProgram%3CR,+Offset%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#1410\">source</a><a href=\"#impl-PartialEq-for-IncompleteLineProgram%3CR,+Offset%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, Offset&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"gimli/read/line/struct.IncompleteLineProgram.html\" title=\"struct gimli::read::line::IncompleteLineProgram\">IncompleteLineProgram</a>&lt;R, Offset&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"gimli/read/reader/trait.Reader.html\" title=\"trait gimli::read::reader::Reader\">Reader</a>&lt;Offset = Offset&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,\n    Offset: <a class=\"trait\" href=\"gimli/read/reader/trait.ReaderOffset.html\" title=\"trait gimli::read::reader::ReaderOffset\">ReaderOffset</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#1410\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"gimli/read/line/struct.IncompleteLineProgram.html\" title=\"struct gimli::read::line::IncompleteLineProgram\">IncompleteLineProgram</a>&lt;R, Offset&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/core/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>self</code> and <code>other</code> values to be equal, and is used by <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.83.0/src/core/cmp.rs.html#261\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/core/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/core/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>!=</code>. The default implementation is almost always sufficient,\nand should not be overridden without very good reason.</div></details></div></details>","PartialEq","gimli::read::line::IncompleteLineNumberProgram"],["<section id=\"impl-Eq-for-IncompleteLineProgram%3CR,+Offset%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#1410\">source</a><a href=\"#impl-Eq-for-IncompleteLineProgram%3CR,+Offset%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, Offset&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"gimli/read/line/struct.IncompleteLineProgram.html\" title=\"struct gimli::read::line::IncompleteLineProgram\">IncompleteLineProgram</a>&lt;R, Offset&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"gimli/read/reader/trait.Reader.html\" title=\"trait gimli::read::reader::Reader\">Reader</a>&lt;Offset = Offset&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,\n    Offset: <a class=\"trait\" href=\"gimli/read/reader/trait.ReaderOffset.html\" title=\"trait gimli::read::reader::ReaderOffset\">ReaderOffset</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div></h3></section>","Eq","gimli::read::line::IncompleteLineNumberProgram"],["<section id=\"impl-StructuralPartialEq-for-IncompleteLineProgram%3CR,+Offset%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#1410\">source</a><a href=\"#impl-StructuralPartialEq-for-IncompleteLineProgram%3CR,+Offset%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, Offset&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"gimli/read/line/struct.IncompleteLineProgram.html\" title=\"struct gimli::read::line::IncompleteLineProgram\">IncompleteLineProgram</a>&lt;R, Offset&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"gimli/read/reader/trait.Reader.html\" title=\"trait gimli::read::reader::Reader\">Reader</a>&lt;Offset = Offset&gt;,\n    Offset: <a class=\"trait\" href=\"gimli/read/reader/trait.ReaderOffset.html\" title=\"trait gimli::read::reader::ReaderOffset\">ReaderOffset</a>,</div></h3></section>","StructuralPartialEq","gimli::read::line::IncompleteLineNumberProgram"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[17890]}