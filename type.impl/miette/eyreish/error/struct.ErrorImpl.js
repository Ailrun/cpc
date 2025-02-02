(function() {
    var type_impls = Object.fromEntries([["miette",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-ErrorImpl%3CE%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/miette/eyreish/error.rs.html#739-746\">Source</a><a href=\"#impl-Debug-for-ErrorImpl%3CE%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"miette/eyreish/error/struct.ErrorImpl.html\" title=\"struct miette::eyreish::error::ErrorImpl\">ErrorImpl</a>&lt;E&gt;<div class=\"where\">where\n    E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/miette/eyreish/error.rs.html#743-745\">Source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, formatter: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","miette::eyreish::error::ErasedErrorImpl"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-ErrorImpl%3CE%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/miette/eyreish/error.rs.html#748-755\">Source</a><a href=\"#impl-Display-for-ErrorImpl%3CE%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"miette/eyreish/error/struct.ErrorImpl.html\" title=\"struct miette::eyreish::error::ErrorImpl\">ErrorImpl</a>&lt;E&gt;<div class=\"where\">where\n    E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/miette/eyreish/error.rs.html#752-754\">Source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, formatter: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","miette::eyreish::error::ErasedErrorImpl"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ErrorImpl%3C()%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/miette/eyreish/error.rs.html#706-737\">Source</a><a href=\"#impl-ErrorImpl%3C()%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"miette/eyreish/error/struct.ErrorImpl.html\" title=\"struct miette::eyreish::error::ErrorImpl\">ErrorImpl</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.unit.html\">()</a>&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.error\" class=\"method\"><a class=\"src rightside\" href=\"src/miette/eyreish/error.rs.html#707-713\">Source</a><h4 class=\"code-header\">pub(crate) unsafe fn <a href=\"miette/eyreish/error/struct.ErrorImpl.html#tymethod.error\" class=\"fn\">error</a>&lt;'a&gt;(\n    this: <a class=\"struct\" href=\"miette/eyreish/ptr/struct.Ref.html\" title=\"struct miette::eyreish::ptr::Ref\">Ref</a>&lt;'a, Self&gt;,\n) -&gt; &amp;'a (dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">StdError</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static)</h4></section><section id=\"method.diagnostic\" class=\"method\"><a class=\"src rightside\" href=\"src/miette/eyreish/error.rs.html#715-721\">Source</a><h4 class=\"code-header\">pub(crate) unsafe fn <a href=\"miette/eyreish/error/struct.ErrorImpl.html#tymethod.diagnostic\" class=\"fn\">diagnostic</a>&lt;'a&gt;(\n    this: <a class=\"struct\" href=\"miette/eyreish/ptr/struct.Ref.html\" title=\"struct miette::eyreish::ptr::Ref\">Ref</a>&lt;'a, Self&gt;,\n) -&gt; &amp;'a (dyn <a class=\"trait\" href=\"miette/protocol/trait.Diagnostic.html\" title=\"trait miette::protocol::Diagnostic\">Diagnostic</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static)</h4></section><section id=\"method.diagnostic_mut\" class=\"method\"><a class=\"src rightside\" href=\"src/miette/eyreish/error.rs.html#723-731\">Source</a><h4 class=\"code-header\">pub(crate) unsafe fn <a href=\"miette/eyreish/error/struct.ErrorImpl.html#tymethod.diagnostic_mut\" class=\"fn\">diagnostic_mut</a>&lt;'a&gt;(\n    this: <a class=\"struct\" href=\"miette/eyreish/ptr/struct.Mut.html\" title=\"struct miette::eyreish::ptr::Mut\">Mut</a>&lt;'a, Self&gt;,\n) -&gt; &amp;'a mut (dyn <a class=\"trait\" href=\"miette/protocol/trait.Diagnostic.html\" title=\"trait miette::protocol::Diagnostic\">Diagnostic</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static)</h4></section><section id=\"method.chain\" class=\"method\"><a class=\"src rightside\" href=\"src/miette/eyreish/error.rs.html#734-736\">Source</a><h4 class=\"code-header\">pub(crate) unsafe fn <a href=\"miette/eyreish/error/struct.ErrorImpl.html#tymethod.chain\" class=\"fn\">chain</a>(this: <a class=\"struct\" href=\"miette/eyreish/ptr/struct.Ref.html\" title=\"struct miette::eyreish::ptr::Ref\">Ref</a>&lt;'_, Self&gt;) -&gt; <a class=\"struct\" href=\"miette/chain/struct.Chain.html\" title=\"struct miette::chain::Chain\">Chain</a>&lt;'_&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Chain&lt;&#39;_&gt;\">ⓘ</a></h4></section></div></details>",0,"miette::eyreish::error::ErasedErrorImpl"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ErrorImpl%3C()%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/miette/eyreish/fmt.rs.html#4-20\">Source</a><a href=\"#impl-ErrorImpl%3C()%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"miette/eyreish/error/struct.ErrorImpl.html\" title=\"struct miette::eyreish::error::ErrorImpl\">ErrorImpl</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.unit.html\">()</a>&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.display\" class=\"method\"><a class=\"src rightside\" href=\"src/miette/eyreish/fmt.rs.html#5-11\">Source</a><h4 class=\"code-header\">pub(crate) unsafe fn <a href=\"miette/eyreish/error/struct.ErrorImpl.html#tymethod.display\" class=\"fn\">display</a>(\n    this: <a class=\"struct\" href=\"miette/eyreish/ptr/struct.Ref.html\" title=\"struct miette::eyreish::ptr::Ref\">Ref</a>&lt;'_, Self&gt;,\n    f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;,\n) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section><section id=\"method.debug\" class=\"method\"><a class=\"src rightside\" href=\"src/miette/eyreish/fmt.rs.html#13-19\">Source</a><h4 class=\"code-header\">pub(crate) unsafe fn <a href=\"miette/eyreish/error/struct.ErrorImpl.html#tymethod.debug\" class=\"fn\">debug</a>(this: <a class=\"struct\" href=\"miette/eyreish/ptr/struct.Ref.html\" title=\"struct miette::eyreish::ptr::Ref\">Ref</a>&lt;'_, Self&gt;, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></div></details>",0,"miette::eyreish::error::ErasedErrorImpl"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ErrorImpl%3CE%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/miette/eyreish/error.rs.html#697-704\">Source</a><a href=\"#impl-ErrorImpl%3CE%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E&gt; <a class=\"struct\" href=\"miette/eyreish/error/struct.ErrorImpl.html\" title=\"struct miette::eyreish::error::ErrorImpl\">ErrorImpl</a>&lt;E&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.erase\" class=\"method\"><a class=\"src rightside\" href=\"src/miette/eyreish/error.rs.html#698-703\">Source</a><h4 class=\"code-header\">fn <a href=\"miette/eyreish/error/struct.ErrorImpl.html#tymethod.erase\" class=\"fn\">erase</a>(&amp;self) -&gt; <a class=\"struct\" href=\"miette/eyreish/ptr/struct.Ref.html\" title=\"struct miette::eyreish::ptr::Ref\">Ref</a>&lt;'_, <a class=\"struct\" href=\"miette/eyreish/error/struct.ErrorImpl.html\" title=\"struct miette::eyreish::error::ErrorImpl\">ErrorImpl</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.unit.html\">()</a>&gt;&gt;</h4></section></div></details>",0,"miette::eyreish::error::ErasedErrorImpl"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[10885]}