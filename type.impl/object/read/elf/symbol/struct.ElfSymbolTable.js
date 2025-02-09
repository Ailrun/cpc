(function() {
    var type_impls = Object.fromEntries([["object",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-ElfSymbolTable%3C'data,+'file,+Elf,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/object/read/elf/symbol.rs.html#228\">Source</a><a href=\"#impl-Clone-for-ElfSymbolTable%3C'data,+'file,+Elf,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'data, 'file, Elf, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"object/read/elf/symbol/struct.ElfSymbolTable.html\" title=\"struct object::read::elf::symbol::ElfSymbolTable\">ElfSymbolTable</a>&lt;'data, 'file, Elf, R&gt;<div class=\"where\">where\n    Elf: <a class=\"trait\" href=\"object/read/elf/file/trait.FileHeader.html\" title=\"trait object::read::elf::file::FileHeader\">FileHeader</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    R: <a class=\"trait\" href=\"object/read/read_ref/trait.ReadRef.html\" title=\"trait object::read::read_ref::ReadRef\">ReadRef</a>&lt;'data&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Elf::<a class=\"associatedtype\" href=\"object/read/elf/file/trait.FileHeader.html#associatedtype.Endian\" title=\"type object::read::elf::file::FileHeader::Endian\">Endian</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/elf/symbol.rs.html#228\">Source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.1/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"object/read/elf/symbol/struct.ElfSymbolTable.html\" title=\"struct object::read::elf::symbol::ElfSymbolTable\">ElfSymbolTable</a>&lt;'data, 'file, Elf, R&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.84.1/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.84.1/src/core/clone.rs.html#174\">Source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.1/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.84.1/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","object::read::elf::symbol::ElfSymbolTable32","object::read::elf::symbol::ElfSymbolTable64"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-ElfSymbolTable%3C'data,+'file,+Elf,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/object/read/elf/symbol.rs.html#228\">Source</a><a href=\"#impl-Debug-for-ElfSymbolTable%3C'data,+'file,+Elf,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'data, 'file, Elf, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"object/read/elf/symbol/struct.ElfSymbolTable.html\" title=\"struct object::read::elf::symbol::ElfSymbolTable\">ElfSymbolTable</a>&lt;'data, 'file, Elf, R&gt;<div class=\"where\">where\n    Elf: <a class=\"trait\" href=\"object/read/elf/file/trait.FileHeader.html\" title=\"trait object::read::elf::file::FileHeader\">FileHeader</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    R: <a class=\"trait\" href=\"object/read/read_ref/trait.ReadRef.html\" title=\"trait object::read::read_ref::ReadRef\">ReadRef</a>&lt;'data&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    Elf::<a class=\"associatedtype\" href=\"object/read/elf/file/trait.FileHeader.html#associatedtype.Endian\" title=\"type object::read::elf::file::FileHeader::Endian\">Endian</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/elf/symbol.rs.html#228\">Source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","object::read::elf::symbol::ElfSymbolTable32","object::read::elf::symbol::ElfSymbolTable64"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ObjectSymbolTable%3C'data%3E-for-ElfSymbolTable%3C'data,+'file,+Elf,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/object/read/elf/symbol.rs.html#243-262\">Source</a><a href=\"#impl-ObjectSymbolTable%3C'data%3E-for-ElfSymbolTable%3C'data,+'file,+Elf,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'data, 'file, Elf: <a class=\"trait\" href=\"object/read/elf/file/trait.FileHeader.html\" title=\"trait object::read::elf::file::FileHeader\">FileHeader</a>, R: <a class=\"trait\" href=\"object/read/read_ref/trait.ReadRef.html\" title=\"trait object::read::read_ref::ReadRef\">ReadRef</a>&lt;'data&gt;&gt; <a class=\"trait\" href=\"object/read/traits/trait.ObjectSymbolTable.html\" title=\"trait object::read::traits::ObjectSymbolTable\">ObjectSymbolTable</a>&lt;'data&gt; for <a class=\"struct\" href=\"object/read/elf/symbol/struct.ElfSymbolTable.html\" title=\"struct object::read::elf::symbol::ElfSymbolTable\">ElfSymbolTable</a>&lt;'data, 'file, Elf, R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Symbol\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/object/read/elf/symbol.rs.html#246\">Source</a><a href=\"#associatedtype.Symbol\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"object/read/traits/trait.ObjectSymbolTable.html#associatedtype.Symbol\" class=\"associatedtype\">Symbol</a> = <a class=\"struct\" href=\"object/read/elf/symbol/struct.ElfSymbol.html\" title=\"struct object::read::elf::symbol::ElfSymbol\">ElfSymbol</a>&lt;'data, 'file, Elf, R&gt;</h4></section></summary><div class='docblock'>A symbol table entry.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.SymbolIterator\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/object/read/elf/symbol.rs.html#247\">Source</a><a href=\"#associatedtype.SymbolIterator\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"object/read/traits/trait.ObjectSymbolTable.html#associatedtype.SymbolIterator\" class=\"associatedtype\">SymbolIterator</a> = <a class=\"struct\" href=\"object/read/elf/symbol/struct.ElfSymbolIterator.html\" title=\"struct object::read::elf::symbol::ElfSymbolIterator\">ElfSymbolIterator</a>&lt;'data, 'file, Elf, R&gt;</h4></section></summary><div class='docblock'>An iterator for the symbols in a symbol table.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.symbols\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/elf/symbol.rs.html#249-251\">Source</a><a href=\"#method.symbols\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/traits/trait.ObjectSymbolTable.html#tymethod.symbols\" class=\"fn\">symbols</a>(&amp;self) -&gt; Self::<a class=\"associatedtype\" href=\"object/read/traits/trait.ObjectSymbolTable.html#associatedtype.SymbolIterator\" title=\"type object::read::traits::ObjectSymbolTable::SymbolIterator\">SymbolIterator</a></h4></section></summary><div class='docblock'>Get an iterator for the symbols in the table. <a href=\"object/read/traits/trait.ObjectSymbolTable.html#tymethod.symbols\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.symbol_by_index\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/elf/symbol.rs.html#253-261\">Source</a><a href=\"#method.symbol_by_index\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/traits/trait.ObjectSymbolTable.html#tymethod.symbol_by_index\" class=\"fn\">symbol_by_index</a>(&amp;self, index: <a class=\"struct\" href=\"object/read/struct.SymbolIndex.html\" title=\"struct object::read::SymbolIndex\">SymbolIndex</a>) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;Self::<a class=\"associatedtype\" href=\"object/read/traits/trait.ObjectSymbolTable.html#associatedtype.Symbol\" title=\"type object::read::traits::ObjectSymbolTable::Symbol\">Symbol</a>&gt;</h4></section></summary><div class='docblock'>Get the symbol at the given index. <a href=\"object/read/traits/trait.ObjectSymbolTable.html#tymethod.symbol_by_index\">Read more</a></div></details></div></details>","ObjectSymbolTable<'data>","object::read::elf::symbol::ElfSymbolTable32","object::read::elf::symbol::ElfSymbolTable64"],["<section id=\"impl-Copy-for-ElfSymbolTable%3C'data,+'file,+Elf,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/object/read/elf/symbol.rs.html#228\">Source</a><a href=\"#impl-Copy-for-ElfSymbolTable%3C'data,+'file,+Elf,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'data, 'file, Elf, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"object/read/elf/symbol/struct.ElfSymbolTable.html\" title=\"struct object::read::elf::symbol::ElfSymbolTable\">ElfSymbolTable</a>&lt;'data, 'file, Elf, R&gt;<div class=\"where\">where\n    Elf: <a class=\"trait\" href=\"object/read/elf/file/trait.FileHeader.html\" title=\"trait object::read::elf::file::FileHeader\">FileHeader</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,\n    R: <a class=\"trait\" href=\"object/read/read_ref/trait.ReadRef.html\" title=\"trait object::read::read_ref::ReadRef\">ReadRef</a>&lt;'data&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,\n    Elf::<a class=\"associatedtype\" href=\"object/read/elf/file/trait.FileHeader.html#associatedtype.Endian\" title=\"type object::read::elf::file::FileHeader::Endian\">Endian</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</div></h3></section>","Copy","object::read::elf::symbol::ElfSymbolTable32","object::read::elf::symbol::ElfSymbolTable64"],["<section id=\"impl-Sealed-for-ElfSymbolTable%3C'data,+'file,+Elf,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/object/read/elf/symbol.rs.html#238-241\">Source</a><a href=\"#impl-Sealed-for-ElfSymbolTable%3C'data,+'file,+Elf,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'data, 'file, Elf: <a class=\"trait\" href=\"object/read/elf/file/trait.FileHeader.html\" title=\"trait object::read::elf::file::FileHeader\">FileHeader</a>, R: <a class=\"trait\" href=\"object/read/read_ref/trait.ReadRef.html\" title=\"trait object::read::read_ref::ReadRef\">ReadRef</a>&lt;'data&gt;&gt; <a class=\"trait\" href=\"object/read/private/trait.Sealed.html\" title=\"trait object::read::private::Sealed\">Sealed</a> for <a class=\"struct\" href=\"object/read/elf/symbol/struct.ElfSymbolTable.html\" title=\"struct object::read::elf::symbol::ElfSymbolTable\">ElfSymbolTable</a>&lt;'data, 'file, Elf, R&gt;</h3></section>","Sealed","object::read::elf::symbol::ElfSymbolTable32","object::read::elf::symbol::ElfSymbolTable64"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[13294]}