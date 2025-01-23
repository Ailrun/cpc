(function() {
    var type_impls = Object.fromEntries([["object",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-MachOSection%3C'data,+'file,+Mach,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/object/read/macho/section.rs.html#67\">source</a><a href=\"#impl-Debug-for-MachOSection%3C'data,+'file,+Mach,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'data, 'file, Mach, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"object/read/macho/section/struct.MachOSection.html\" title=\"struct object::read::macho::section::MachOSection\">MachOSection</a>&lt;'data, 'file, Mach, R&gt;<div class=\"where\">where\n    Mach: <a class=\"trait\" href=\"object/read/macho/file/trait.MachHeader.html\" title=\"trait object::read::macho::file::MachHeader\">MachHeader</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    R: <a class=\"trait\" href=\"object/read/read_ref/trait.ReadRef.html\" title=\"trait object::read::read_ref::ReadRef\">ReadRef</a>&lt;'data&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/macho/section.rs.html#67\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","object::read::macho::section::MachOSection32","object::read::macho::section::MachOSection64"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MachOSection%3C'data,+'file,+Mach,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/object/read/macho/section.rs.html#77-120\">source</a><a href=\"#impl-MachOSection%3C'data,+'file,+Mach,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'data, 'file, Mach, R&gt; <a class=\"struct\" href=\"object/read/macho/section/struct.MachOSection.html\" title=\"struct object::read::macho::section::MachOSection\">MachOSection</a>&lt;'data, 'file, Mach, R&gt;<div class=\"where\">where\n    Mach: <a class=\"trait\" href=\"object/read/macho/file/trait.MachHeader.html\" title=\"trait object::read::macho::file::MachHeader\">MachHeader</a>,\n    R: <a class=\"trait\" href=\"object/read/read_ref/trait.ReadRef.html\" title=\"trait object::read::read_ref::ReadRef\">ReadRef</a>&lt;'data&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.macho_file\" class=\"method\"><a class=\"src rightside\" href=\"src/object/read/macho/section.rs.html#83-85\">source</a><h4 class=\"code-header\">pub fn <a href=\"object/read/macho/section/struct.MachOSection.html#tymethod.macho_file\" class=\"fn\">macho_file</a>(&amp;self) -&gt; &amp;'file <a class=\"struct\" href=\"object/read/macho/file/struct.MachOFile.html\" title=\"struct object::read::macho::file::MachOFile\">MachOFile</a>&lt;'data, Mach, R&gt;</h4></section></summary><div class=\"docblock\"><p>Get the Mach-O file containing this section.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.macho_section\" class=\"method\"><a class=\"src rightside\" href=\"src/object/read/macho/section.rs.html#88-90\">source</a><h4 class=\"code-header\">pub fn <a href=\"object/read/macho/section/struct.MachOSection.html#tymethod.macho_section\" class=\"fn\">macho_section</a>(&amp;self) -&gt; &amp;'data Mach::<a class=\"associatedtype\" href=\"object/read/macho/file/trait.MachHeader.html#associatedtype.Section\" title=\"type object::read::macho::file::MachHeader::Section\">Section</a></h4></section></summary><div class=\"docblock\"><p>Get the raw Mach-O section structure.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.macho_relocations\" class=\"method\"><a class=\"src rightside\" href=\"src/object/read/macho/section.rs.html#93-97\">source</a><h4 class=\"code-header\">pub fn <a href=\"object/read/macho/section/struct.MachOSection.html#tymethod.macho_relocations\" class=\"fn\">macho_relocations</a>(&amp;self) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;&amp;'data [<a class=\"struct\" href=\"object/macho/struct.Relocation.html\" title=\"struct object::macho::Relocation\">Relocation</a>&lt;Mach::<a class=\"associatedtype\" href=\"object/read/macho/file/trait.MachHeader.html#associatedtype.Endian\" title=\"type object::read::macho::file::MachHeader::Endian\">Endian</a>&gt;]&gt;</h4></section></summary><div class=\"docblock\"><p>Get the raw Mach-O relocation entries.</p>\n</div></details><section id=\"method.bytes\" class=\"method\"><a class=\"src rightside\" href=\"src/object/read/macho/section.rs.html#99-104\">source</a><h4 class=\"code-header\">fn <a href=\"object/read/macho/section/struct.MachOSection.html#tymethod.bytes\" class=\"fn\">bytes</a>(&amp;self) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;&amp;'data [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u8.html\">u8</a>]&gt;</h4></section><section id=\"method.maybe_compressed_gnu\" class=\"method\"><a class=\"src rightside\" href=\"src/object/read/macho/section.rs.html#107-119\">source</a><h4 class=\"code-header\">fn <a href=\"object/read/macho/section/struct.MachOSection.html#tymethod.maybe_compressed_gnu\" class=\"fn\">maybe_compressed_gnu</a>(&amp;self) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"object/read/struct.CompressedFileRange.html\" title=\"struct object::read::CompressedFileRange\">CompressedFileRange</a>&gt;&gt;</h4></section></div></details>",0,"object::read::macho::section::MachOSection32","object::read::macho::section::MachOSection64"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ObjectSection%3C'data%3E-for-MachOSection%3C'data,+'file,+Mach,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/object/read/macho/section.rs.html#129-238\">source</a><a href=\"#impl-ObjectSection%3C'data%3E-for-MachOSection%3C'data,+'file,+Mach,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'data, 'file, Mach, R&gt; <a class=\"trait\" href=\"object/read/traits/trait.ObjectSection.html\" title=\"trait object::read::traits::ObjectSection\">ObjectSection</a>&lt;'data&gt; for <a class=\"struct\" href=\"object/read/macho/section/struct.MachOSection.html\" title=\"struct object::read::macho::section::MachOSection\">MachOSection</a>&lt;'data, 'file, Mach, R&gt;<div class=\"where\">where\n    Mach: <a class=\"trait\" href=\"object/read/macho/file/trait.MachHeader.html\" title=\"trait object::read::macho::file::MachHeader\">MachHeader</a>,\n    R: <a class=\"trait\" href=\"object/read/read_ref/trait.ReadRef.html\" title=\"trait object::read::read_ref::ReadRef\">ReadRef</a>&lt;'data&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.RelocationIterator\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/object/read/macho/section.rs.html#134\">source</a><a href=\"#associatedtype.RelocationIterator\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"object/read/traits/trait.ObjectSection.html#associatedtype.RelocationIterator\" class=\"associatedtype\">RelocationIterator</a> = <a class=\"struct\" href=\"object/read/macho/relocation/struct.MachORelocationIterator.html\" title=\"struct object::read::macho::relocation::MachORelocationIterator\">MachORelocationIterator</a>&lt;'data, 'file, Mach, R&gt;</h4></section></summary><div class='docblock'>An iterator for the relocations for a section. <a href=\"object/read/traits/trait.ObjectSection.html#associatedtype.RelocationIterator\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.index\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/macho/section.rs.html#137-139\">source</a><a href=\"#method.index\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.index\" class=\"fn\">index</a>(&amp;self) -&gt; <a class=\"struct\" href=\"object/read/struct.SectionIndex.html\" title=\"struct object::read::SectionIndex\">SectionIndex</a></h4></section></summary><div class='docblock'>Returns the section index.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.address\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/macho/section.rs.html#142-144\">source</a><a href=\"#method.address\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.address\" class=\"fn\">address</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u64.html\">u64</a></h4></section></summary><div class='docblock'>Returns the address of the section.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.size\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/macho/section.rs.html#147-149\">source</a><a href=\"#method.size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.size\" class=\"fn\">size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u64.html\">u64</a></h4></section></summary><div class='docblock'>Returns the size of the section in memory.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.align\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/macho/section.rs.html#152-159\">source</a><a href=\"#method.align\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.align\" class=\"fn\">align</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u64.html\">u64</a></h4></section></summary><div class='docblock'>Returns the alignment of the section in memory.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.file_range\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/macho/section.rs.html#162-164\">source</a><a href=\"#method.file_range\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.file_range\" class=\"fn\">file_range</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u64.html\">u64</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u64.html\">u64</a>)&gt;</h4></section></summary><div class='docblock'>Returns offset and size of on-disk segment (if any).</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.data\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/macho/section.rs.html#167-169\">source</a><a href=\"#method.data\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.data\" class=\"fn\">data</a>(&amp;self) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;&amp;'data [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u8.html\">u8</a>]&gt;</h4></section></summary><div class='docblock'>Returns the raw contents of the section. <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.data\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.data_range\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/macho/section.rs.html#171-178\">source</a><a href=\"#method.data_range\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.data_range\" class=\"fn\">data_range</a>(&amp;self, address: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u64.html\">u64</a>, size: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u64.html\">u64</a>) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;'data [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u8.html\">u8</a>]&gt;&gt;</h4></section></summary><div class='docblock'>Return the raw contents of the section data in the given range. <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.data_range\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.compressed_file_range\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/macho/section.rs.html#180-186\">source</a><a href=\"#method.compressed_file_range\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.compressed_file_range\" class=\"fn\">compressed_file_range</a>(&amp;self) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;<a class=\"struct\" href=\"object/read/struct.CompressedFileRange.html\" title=\"struct object::read::CompressedFileRange\">CompressedFileRange</a>&gt;</h4></section></summary><div class='docblock'>Returns the potentially compressed file range of the section,\nalong with information about the compression.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.compressed_data\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/macho/section.rs.html#188-190\">source</a><a href=\"#method.compressed_data\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.compressed_data\" class=\"fn\">compressed_data</a>(&amp;self) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;<a class=\"struct\" href=\"object/read/struct.CompressedData.html\" title=\"struct object::read::CompressedData\">CompressedData</a>&lt;'data&gt;&gt;</h4></section></summary><div class='docblock'>Returns the potentially compressed contents of the section,\nalong with information about the compression.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.name_bytes\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/macho/section.rs.html#193-195\">source</a><a href=\"#method.name_bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.name_bytes\" class=\"fn\">name_bytes</a>(&amp;self) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;&amp;'data [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u8.html\">u8</a>]&gt;</h4></section></summary><div class='docblock'>Returns the name of the section.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.name\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/macho/section.rs.html#198-202\">source</a><a href=\"#method.name\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.name\" class=\"fn\">name</a>(&amp;self) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;&amp;'data <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.str.html\">str</a>&gt;</h4></section></summary><div class='docblock'>Returns the name of the section. <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.name\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.segment_name_bytes\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/macho/section.rs.html#205-207\">source</a><a href=\"#method.segment_name_bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.segment_name_bytes\" class=\"fn\">segment_name_bytes</a>(&amp;self) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u8.html\">u8</a>]&gt;&gt;</h4></section></summary><div class='docblock'>Returns the name of the segment for this section.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.segment_name\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/macho/section.rs.html#210-216\">source</a><a href=\"#method.segment_name\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.segment_name\" class=\"fn\">segment_name</a>(&amp;self) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.str.html\">str</a>&gt;&gt;</h4></section></summary><div class='docblock'>Returns the name of the segment for this section. <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.segment_name\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.kind\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/macho/section.rs.html#218-220\">source</a><a href=\"#method.kind\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.kind\" class=\"fn\">kind</a>(&amp;self) -&gt; <a class=\"enum\" href=\"object/common/enum.SectionKind.html\" title=\"enum object::common::SectionKind\">SectionKind</a></h4></section></summary><div class='docblock'>Return the kind of this section.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.relocations\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/macho/section.rs.html#222-227\">source</a><a href=\"#method.relocations\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.relocations\" class=\"fn\">relocations</a>(&amp;self) -&gt; <a class=\"struct\" href=\"object/read/macho/relocation/struct.MachORelocationIterator.html\" title=\"struct object::read::macho::relocation::MachORelocationIterator\">MachORelocationIterator</a>&lt;'data, 'file, Mach, R&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"MachORelocationIterator&lt;&#39;data, &#39;file, Mach, R&gt;\">ⓘ</a></h4></section></summary><div class='docblock'>Get the relocations for this section.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.relocation_map\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/macho/section.rs.html#229-231\">source</a><a href=\"#method.relocation_map\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.relocation_map\" class=\"fn\">relocation_map</a>(&amp;self) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;<a class=\"struct\" href=\"object/read/struct.RelocationMap.html\" title=\"struct object::read::RelocationMap\">RelocationMap</a>&gt;</h4></section></summary><div class='docblock'>Construct a relocation map for this section.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.flags\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/macho/section.rs.html#233-237\">source</a><a href=\"#method.flags\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/traits/trait.ObjectSection.html#tymethod.flags\" class=\"fn\">flags</a>(&amp;self) -&gt; <a class=\"enum\" href=\"object/common/enum.SectionFlags.html\" title=\"enum object::common::SectionFlags\">SectionFlags</a></h4></section></summary><div class='docblock'>Section flags that are specific to each file format.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.uncompressed_data\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/traits.rs.html#431-433\">source</a><a href=\"#method.uncompressed_data\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/traits/trait.ObjectSection.html#method.uncompressed_data\" class=\"fn\">uncompressed_data</a>(&amp;self) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'data, [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u8.html\">u8</a>]&gt;&gt;</h4></section></summary><div class='docblock'>Returns the uncompressed contents of the section. <a href=\"object/read/traits/trait.ObjectSection.html#method.uncompressed_data\">Read more</a></div></details></div></details>","ObjectSection<'data>","object::read::macho::section::MachOSection32","object::read::macho::section::MachOSection64"],["<section id=\"impl-Sealed-for-MachOSection%3C'data,+'file,+Mach,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/object/read/macho/section.rs.html#122-127\">source</a><a href=\"#impl-Sealed-for-MachOSection%3C'data,+'file,+Mach,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'data, 'file, Mach, R&gt; <a class=\"trait\" href=\"object/read/private/trait.Sealed.html\" title=\"trait object::read::private::Sealed\">Sealed</a> for <a class=\"struct\" href=\"object/read/macho/section/struct.MachOSection.html\" title=\"struct object::read::macho::section::MachOSection\">MachOSection</a>&lt;'data, 'file, Mach, R&gt;<div class=\"where\">where\n    Mach: <a class=\"trait\" href=\"object/read/macho/file/trait.MachHeader.html\" title=\"trait object::read::macho::file::MachHeader\">MachHeader</a>,\n    R: <a class=\"trait\" href=\"object/read/read_ref/trait.ReadRef.html\" title=\"trait object::read::read_ref::ReadRef\">ReadRef</a>&lt;'data&gt;,</div></h3></section>","Sealed","object::read::macho::section::MachOSection32","object::read::macho::section::MachOSection64"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[24458]}