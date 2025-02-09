(function() {
    var type_impls = Object.fromEntries([["object",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CoffSection%3C'data,+'file,+R,+Coff%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/object/read/coff/section.rs.html#298-319\">Source</a><a href=\"#impl-CoffSection%3C'data,+'file,+R,+Coff%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'data, 'file, R: <a class=\"trait\" href=\"object/read/read_ref/trait.ReadRef.html\" title=\"trait object::read::read_ref::ReadRef\">ReadRef</a>&lt;'data&gt;, Coff: <a class=\"trait\" href=\"object/read/coff/file/trait.CoffHeader.html\" title=\"trait object::read::coff::file::CoffHeader\">CoffHeader</a>&gt; <a class=\"struct\" href=\"object/read/coff/section/struct.CoffSection.html\" title=\"struct object::read::coff::section::CoffSection\">CoffSection</a>&lt;'data, 'file, R, Coff&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.coff_file\" class=\"method\"><a class=\"src rightside\" href=\"src/object/read/coff/section.rs.html#300-302\">Source</a><h4 class=\"code-header\">pub fn <a href=\"object/read/coff/section/struct.CoffSection.html#tymethod.coff_file\" class=\"fn\">coff_file</a>(&amp;self) -&gt; &amp;'file <a class=\"struct\" href=\"object/read/coff/file/struct.CoffFile.html\" title=\"struct object::read::coff::file::CoffFile\">CoffFile</a>&lt;'data, R, Coff&gt;</h4></section></summary><div class=\"docblock\"><p>Get the COFF file containing this section.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.coff_section\" class=\"method\"><a class=\"src rightside\" href=\"src/object/read/coff/section.rs.html#305-307\">Source</a><h4 class=\"code-header\">pub fn <a href=\"object/read/coff/section/struct.CoffSection.html#tymethod.coff_section\" class=\"fn\">coff_section</a>(&amp;self) -&gt; &amp;'data <a class=\"struct\" href=\"object/pe/struct.ImageSectionHeader.html\" title=\"struct object::pe::ImageSectionHeader\">ImageSectionHeader</a></h4></section></summary><div class=\"docblock\"><p>Get the raw COFF section header.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.coff_relocations\" class=\"method\"><a class=\"src rightside\" href=\"src/object/read/coff/section.rs.html#310-312\">Source</a><h4 class=\"code-header\">pub fn <a href=\"object/read/coff/section/struct.CoffSection.html#tymethod.coff_relocations\" class=\"fn\">coff_relocations</a>(&amp;self) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;&amp;'data [<a class=\"struct\" href=\"object/pe/struct.ImageRelocation.html\" title=\"struct object::pe::ImageRelocation\">ImageRelocation</a>]&gt;</h4></section></summary><div class=\"docblock\"><p>Get the raw COFF relocations for this section.</p>\n</div></details><section id=\"method.bytes\" class=\"method\"><a class=\"src rightside\" href=\"src/object/read/coff/section.rs.html#314-318\">Source</a><h4 class=\"code-header\">fn <a href=\"object/read/coff/section/struct.CoffSection.html#tymethod.bytes\" class=\"fn\">bytes</a>(&amp;self) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;&amp;'data [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.u8.html\">u8</a>]&gt;</h4></section></div></details>",0,"object::read::coff::section::CoffBigSection"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-CoffSection%3C'data,+'file,+R,+Coff%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/object/read/coff/section.rs.html#286\">Source</a><a href=\"#impl-Debug-for-CoffSection%3C'data,+'file,+R,+Coff%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'data, 'file, R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"object/read/read_ref/trait.ReadRef.html\" title=\"trait object::read::read_ref::ReadRef\">ReadRef</a>&lt;'data&gt;, Coff: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"object/read/coff/file/trait.CoffHeader.html\" title=\"trait object::read::coff::file::CoffHeader\">CoffHeader</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"object/read/coff/section/struct.CoffSection.html\" title=\"struct object::read::coff::section::CoffSection\">CoffSection</a>&lt;'data, 'file, R, Coff&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/section.rs.html#286\">Source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","object::read::coff::section::CoffBigSection"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ObjectSection%3C'data%3E-for-CoffSection%3C'data,+'file,+R,+Coff%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/object/read/coff/section.rs.html#326-426\">Source</a><a href=\"#impl-ObjectSection%3C'data%3E-for-CoffSection%3C'data,+'file,+R,+Coff%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'data, 'file, R: <a class=\"trait\" href=\"object/read/read_ref/trait.ReadRef.html\" title=\"trait object::read::read_ref::ReadRef\">ReadRef</a>&lt;'data&gt;, Coff: <a class=\"trait\" href=\"object/read/coff/file/trait.CoffHeader.html\" title=\"trait object::read::coff::file::CoffHeader\">CoffHeader</a>&gt; <a class=\"trait\" href=\"object/read/traits/trait.ObjectSection.html\" title=\"trait object::read::traits::ObjectSection\">ObjectSection</a>&lt;'data&gt; for <a class=\"struct\" href=\"object/read/coff/section/struct.CoffSection.html\" title=\"struct object::read::coff::section::CoffSection\">CoffSection</a>&lt;'data, 'file, R, Coff&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.RelocationIterator\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/section.rs.html#329\">Source</a><a href=\"#associatedtype.RelocationIterator\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"object/read/traits/trait.ObjectSection.html#associatedtype.RelocationIterator\" class=\"associatedtype\">RelocationIterator</a> = <a class=\"struct\" href=\"object/read/coff/relocation/struct.CoffRelocationIterator.html\" title=\"struct object::read::coff::relocation::CoffRelocationIterator\">CoffRelocationIterator</a>&lt;'data, 'file, R, Coff&gt;</h4></section></summary><div class='docblock'>An iterator for the relocations for a section. <a href=\"object/read/traits/trait.ObjectSection.html#associatedtype.RelocationIterator\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.index\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/section.rs.html#332-334\">Source</a><a href=\"#method.index\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.index\" class=\"fn\">index</a>(&amp;self) -&gt; <a class=\"struct\" href=\"object/read/struct.SectionIndex.html\" title=\"struct object::read::SectionIndex\">SectionIndex</a></h4></section></summary><div class='docblock'>Returns the section index.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.address\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/section.rs.html#337-339\">Source</a><a href=\"#method.address\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.address\" class=\"fn\">address</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.u64.html\">u64</a></h4></section></summary><div class='docblock'>Returns the address of the section.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.size\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/section.rs.html#342-345\">Source</a><a href=\"#method.size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.size\" class=\"fn\">size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.u64.html\">u64</a></h4></section></summary><div class='docblock'>Returns the size of the section in memory.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.align\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/section.rs.html#348-350\">Source</a><a href=\"#method.align\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.align\" class=\"fn\">align</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.u64.html\">u64</a></h4></section></summary><div class='docblock'>Returns the alignment of the section in memory.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.file_range\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/section.rs.html#353-356\">Source</a><a href=\"#method.file_range\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.file_range\" class=\"fn\">file_range</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.84.1/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.u64.html\">u64</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.u64.html\">u64</a>)&gt;</h4></section></summary><div class='docblock'>Returns offset and size of on-disk segment (if any).</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.data\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/section.rs.html#358-360\">Source</a><a href=\"#method.data\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.data\" class=\"fn\">data</a>(&amp;self) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;&amp;'data [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.u8.html\">u8</a>]&gt;</h4></section></summary><div class='docblock'>Returns the raw contents of the section. <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.data\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.data_range\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/section.rs.html#362-369\">Source</a><a href=\"#method.data_range\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.data_range\" class=\"fn\">data_range</a>(&amp;self, address: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.u64.html\">u64</a>, size: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.u64.html\">u64</a>) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.84.1/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;'data [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.u8.html\">u8</a>]&gt;&gt;</h4></section></summary><div class='docblock'>Return the raw contents of the section data in the given range. <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.data_range\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.compressed_file_range\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/section.rs.html#372-374\">Source</a><a href=\"#method.compressed_file_range\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.compressed_file_range\" class=\"fn\">compressed_file_range</a>(&amp;self) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;<a class=\"struct\" href=\"object/read/struct.CompressedFileRange.html\" title=\"struct object::read::CompressedFileRange\">CompressedFileRange</a>&gt;</h4></section></summary><div class='docblock'>Returns the potentially compressed file range of the section,\nalong with information about the compression.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.compressed_data\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/section.rs.html#377-379\">Source</a><a href=\"#method.compressed_data\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.compressed_data\" class=\"fn\">compressed_data</a>(&amp;self) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;<a class=\"struct\" href=\"object/read/struct.CompressedData.html\" title=\"struct object::read::CompressedData\">CompressedData</a>&lt;'data&gt;&gt;</h4></section></summary><div class='docblock'>Returns the potentially compressed contents of the section,\nalong with information about the compression.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.name_bytes\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/section.rs.html#382-384\">Source</a><a href=\"#method.name_bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.name_bytes\" class=\"fn\">name_bytes</a>(&amp;self) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;&amp;'data [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.u8.html\">u8</a>]&gt;</h4></section></summary><div class='docblock'>Returns the name of the section.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.name\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/section.rs.html#387-392\">Source</a><a href=\"#method.name\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.name\" class=\"fn\">name</a>(&amp;self) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;&amp;'data <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.str.html\">str</a>&gt;</h4></section></summary><div class='docblock'>Returns the name of the section. <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.name\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.segment_name_bytes\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/section.rs.html#395-397\">Source</a><a href=\"#method.segment_name_bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.segment_name_bytes\" class=\"fn\">segment_name_bytes</a>(&amp;self) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.84.1/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.u8.html\">u8</a>]&gt;&gt;</h4></section></summary><div class='docblock'>Returns the name of the segment for this section.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.segment_name\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/section.rs.html#400-402\">Source</a><a href=\"#method.segment_name\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.segment_name\" class=\"fn\">segment_name</a>(&amp;self) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.84.1/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.str.html\">str</a>&gt;&gt;</h4></section></summary><div class='docblock'>Returns the name of the segment for this section. <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.segment_name\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.kind\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/section.rs.html#405-407\">Source</a><a href=\"#method.kind\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.kind\" class=\"fn\">kind</a>(&amp;self) -&gt; <a class=\"enum\" href=\"object/common/enum.SectionKind.html\" title=\"enum object::common::SectionKind\">SectionKind</a></h4></section></summary><div class='docblock'>Return the kind of this section.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.relocations\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/section.rs.html#409-415\">Source</a><a href=\"#method.relocations\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.relocations\" class=\"fn\">relocations</a>(&amp;self) -&gt; <a class=\"struct\" href=\"object/read/coff/relocation/struct.CoffRelocationIterator.html\" title=\"struct object::read::coff::relocation::CoffRelocationIterator\">CoffRelocationIterator</a>&lt;'data, 'file, R, Coff&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"CoffRelocationIterator&lt;&#39;data, &#39;file, R, Coff&gt;\">ⓘ</a></h4></section></summary><div class='docblock'>Get the relocations for this section.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.relocation_map\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/section.rs.html#417-419\">Source</a><a href=\"#method.relocation_map\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.relocation_map\" class=\"fn\">relocation_map</a>(&amp;self) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;<a class=\"struct\" href=\"object/read/struct.RelocationMap.html\" title=\"struct object::read::RelocationMap\">RelocationMap</a>&gt;</h4></section></summary><div class='docblock'>Construct a relocation map for this section.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.flags\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/section.rs.html#421-425\">Source</a><a href=\"#method.flags\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.flags\" class=\"fn\">flags</a>(&amp;self) -&gt; <a class=\"enum\" href=\"object/common/enum.SectionFlags.html\" title=\"enum object::common::SectionFlags\">SectionFlags</a></h4></section></summary><div class='docblock'>Section flags that are specific to each file format.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.uncompressed_data\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/traits.rs.html#431-433\">Source</a><a href=\"#method.uncompressed_data\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/traits/trait.ObjectSection.html#method.uncompressed_data\" class=\"fn\">uncompressed_data</a>(&amp;self) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.84.1/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'data, [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.u8.html\">u8</a>]&gt;&gt;</h4></section></summary><div class='docblock'>Returns the uncompressed contents of the section. <a href=\"object/read/traits/trait.ObjectSection.html#method.uncompressed_data\">Read more</a></div></details></div></details>","ObjectSection<'data>","object::read::coff::section::CoffBigSection"],["<section id=\"impl-Sealed-for-CoffSection%3C'data,+'file,+R,+Coff%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/object/read/coff/section.rs.html#321-324\">Source</a><a href=\"#impl-Sealed-for-CoffSection%3C'data,+'file,+R,+Coff%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'data, 'file, R: <a class=\"trait\" href=\"object/read/read_ref/trait.ReadRef.html\" title=\"trait object::read::read_ref::ReadRef\">ReadRef</a>&lt;'data&gt;, Coff: <a class=\"trait\" href=\"object/read/coff/file/trait.CoffHeader.html\" title=\"trait object::read::coff::file::CoffHeader\">CoffHeader</a>&gt; <a class=\"trait\" href=\"object/read/private/trait.Sealed.html\" title=\"trait object::read::private::Sealed\">Sealed</a> for <a class=\"struct\" href=\"object/read/coff/section/struct.CoffSection.html\" title=\"struct object::read::coff::section::CoffSection\">CoffSection</a>&lt;'data, 'file, R, Coff&gt;</h3></section>","Sealed","object::read::coff::section::CoffBigSection"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[23008]}