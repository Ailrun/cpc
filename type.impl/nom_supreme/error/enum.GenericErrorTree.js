(function() {
    var type_impls = Object.fromEntries([["nom_supreme",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ContextError%3CI%3E-for-GenericErrorTree%3CI,+T,+%26str,+E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/nom_supreme/error.rs.html#608-612\">Source</a><a href=\"#impl-ContextError%3CI%3E-for-GenericErrorTree%3CI,+T,+%26str,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I, T, E&gt; <a class=\"trait\" href=\"nom/error/trait.ContextError.html\" title=\"trait nom::error::ContextError\">ContextError</a>&lt;I&gt; for <a class=\"enum\" href=\"nom_supreme/error/enum.GenericErrorTree.html\" title=\"enum nom_supreme::error::GenericErrorTree\">GenericErrorTree</a>&lt;I, T, &amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.str.html\">str</a>, E&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.add_context\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nom_supreme/error.rs.html#609-611\">Source</a><a href=\"#method.add_context\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"nom/error/trait.ContextError.html#method.add_context\" class=\"fn\">add_context</a>(location: I, ctx: &amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.str.html\">str</a>, other: Self) -&gt; Self</h4></section></summary><div class='docblock'>Creates a new error from an input position, a static string and an existing error.\nThis is used mainly in the <a href=\"nom/error/fn.context.html\" title=\"fn nom::error::context\">context</a> combinator, to add user friendly information\nto errors when backtracking through a parse tree</div></details></div></details>","ContextError<I>","nom_supreme::error::ErrorTree"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ContextError%3CI,+C%3E-for-GenericErrorTree%3CI,+T,+C,+E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/nom_supreme/error.rs.html#588-606\">Source</a><a href=\"#impl-ContextError%3CI,+C%3E-for-GenericErrorTree%3CI,+T,+C,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I, T, C, E&gt; <a class=\"trait\" href=\"nom_supreme/context/trait.ContextError.html\" title=\"trait nom_supreme::context::ContextError\">ContextError</a>&lt;I, C&gt; for <a class=\"enum\" href=\"nom_supreme/error/enum.GenericErrorTree.html\" title=\"enum nom_supreme::error::GenericErrorTree\">GenericErrorTree</a>&lt;I, T, C, E&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.add_context\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nom_supreme/error.rs.html#589-605\">Source</a><a href=\"#method.add_context\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"nom_supreme/context/trait.ContextError.html#tymethod.add_context\" class=\"fn\">add_context</a>(location: I, ctx: C, other: Self) -&gt; Self</h4></section></summary><div class='docblock'>Create a new error from an input position, a context, and an existing\nerror. This is used by the <a href=\"nom_supreme/parser_ext/trait.ParserExt.html#method.context\" title=\"method nom_supreme::parser_ext::ParserExt::context\"><code>.context</code></a>\ncombinator to add friendly information to errors when backtracking\nthrough a parse tree.</div></details></div></details>","ContextError<I, C>","nom_supreme::error::ErrorTree"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-GenericErrorTree%3CLocation,+Tag,+Context,+ExternalError%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/nom_supreme/error.rs.html#392\">Source</a><a href=\"#impl-Debug-for-GenericErrorTree%3CLocation,+Tag,+Context,+ExternalError%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Location: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, Tag: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, Context: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, ExternalError: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"nom_supreme/error/enum.GenericErrorTree.html\" title=\"enum nom_supreme::error::GenericErrorTree\">GenericErrorTree</a>&lt;Location, Tag, Context, ExternalError&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nom_supreme/error.rs.html#392\">Source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","nom_supreme::error::ErrorTree"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-GenericErrorTree%3CI,+T,+C,+E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/nom_supreme/error.rs.html#471-489\">Source</a><a href=\"#impl-Display-for-GenericErrorTree%3CI,+T,+C,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"nom_supreme/error/enum.GenericErrorTree.html\" title=\"enum nom_supreme::error::GenericErrorTree\">GenericErrorTree</a>&lt;I, T, C, E&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nom_supreme/error.rs.html#472-488\">Source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","nom_supreme::error::ErrorTree"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Error-for-GenericErrorTree%3CI,+T,+C,+E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/nom_supreme/error.rs.html#491-494\">Source</a><a href=\"#impl-Error-for-GenericErrorTree%3CI,+T,+C,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"nom_supreme/error/enum.GenericErrorTree.html\" title=\"enum nom_supreme::error::GenericErrorTree\">GenericErrorTree</a>&lt;I, T, C, E&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.source\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.30.0\">1.30.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.84.0/src/core/error.rs.html#81\">Source</a></span><a href=\"#method.source\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/error/trait.Error.html#method.source\" class=\"fn\">source</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.84.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;(dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> + 'static)&gt;</h4></section></summary><div class='docblock'>Returns the lower-level source of this error, if any. <a href=\"https://doc.rust-lang.org/1.84.0/core/error/trait.Error.html#method.source\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.description\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.84.0/src/core/error.rs.html#107\">Source</a></span><a href=\"#method.description\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/error/trait.Error.html#method.description\" class=\"fn\">description</a>(&amp;self) -&gt; &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.str.html\">str</a></h4></section></summary><span class=\"item-info\"><div class=\"stab deprecated\"><span class=\"emoji\">👎</span><span>Deprecated since 1.42.0: use the Display impl or to_string()</span></div></span><div class='docblock'> <a href=\"https://doc.rust-lang.org/1.84.0/core/error/trait.Error.html#method.description\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.cause\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.84.0/src/core/error.rs.html#117\">Source</a></span><a href=\"#method.cause\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/error/trait.Error.html#method.cause\" class=\"fn\">cause</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.84.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a>&gt;</h4></section></summary><span class=\"item-info\"><div class=\"stab deprecated\"><span class=\"emoji\">👎</span><span>Deprecated since 1.33.0: replaced by Error::source, which can support downcasting</span></div></span></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.provide\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/1.84.0/src/core/error.rs.html#180\">Source</a><a href=\"#method.provide\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/error/trait.Error.html#method.provide\" class=\"fn\">provide</a>&lt;'a&gt;(&amp;'a self, request: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.0/core/error/struct.Request.html\" title=\"struct core::error::Request\">Request</a>&lt;'a&gt;)</h4></section></summary><span class=\"item-info\"><div class=\"stab unstable\"><span class=\"emoji\">🔬</span><span>This is a nightly-only experimental API. (<code>error_generic_member_access</code>)</span></div></span><div class='docblock'>Provides type-based access to context intended for error reports. <a href=\"https://doc.rust-lang.org/1.84.0/core/error/trait.Error.html#method.provide\">Read more</a></div></details></div></details>","Error","nom_supreme::error::ErrorTree"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ErrorConvert%3CGenericErrorTree%3C(I,+usize),+T,+C,+E%3E%3E-for-GenericErrorTree%3CI,+T,+C,+E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/nom_supreme/error.rs.html#639-645\">Source</a><a href=\"#impl-ErrorConvert%3CGenericErrorTree%3C(I,+usize),+T,+C,+E%3E%3E-for-GenericErrorTree%3CI,+T,+C,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I, T, C, E&gt; <a class=\"trait\" href=\"nom/traits/trait.ErrorConvert.html\" title=\"trait nom::traits::ErrorConvert\">ErrorConvert</a>&lt;<a class=\"enum\" href=\"nom_supreme/error/enum.GenericErrorTree.html\" title=\"enum nom_supreme::error::GenericErrorTree\">GenericErrorTree</a>&lt;(I, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.usize.html\">usize</a>), T, C, E&gt;&gt; for <a class=\"enum\" href=\"nom_supreme/error/enum.GenericErrorTree.html\" title=\"enum nom_supreme::error::GenericErrorTree\">GenericErrorTree</a>&lt;I, T, C, E&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.convert\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nom_supreme/error.rs.html#642-644\">Source</a><a href=\"#method.convert\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"nom/traits/trait.ErrorConvert.html#tymethod.convert\" class=\"fn\">convert</a>(self) -&gt; <a class=\"enum\" href=\"nom_supreme/error/enum.GenericErrorTree.html\" title=\"enum nom_supreme::error::GenericErrorTree\">GenericErrorTree</a>&lt;(I, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.usize.html\">usize</a>), T, C, E&gt;</h4></section></summary><div class='docblock'>Transform to another error type</div></details></div></details>","ErrorConvert<GenericErrorTree<(I, usize), T, C, E>>","nom_supreme::error::ErrorTree"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ErrorConvert%3CGenericErrorTree%3CI,+T,+C,+E%3E%3E-for-GenericErrorTree%3C(I,+usize),+T,+C,+E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/nom_supreme/error.rs.html#647-653\">Source</a><a href=\"#impl-ErrorConvert%3CGenericErrorTree%3CI,+T,+C,+E%3E%3E-for-GenericErrorTree%3C(I,+usize),+T,+C,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I, T, C, E&gt; <a class=\"trait\" href=\"nom/traits/trait.ErrorConvert.html\" title=\"trait nom::traits::ErrorConvert\">ErrorConvert</a>&lt;<a class=\"enum\" href=\"nom_supreme/error/enum.GenericErrorTree.html\" title=\"enum nom_supreme::error::GenericErrorTree\">GenericErrorTree</a>&lt;I, T, C, E&gt;&gt; for <a class=\"enum\" href=\"nom_supreme/error/enum.GenericErrorTree.html\" title=\"enum nom_supreme::error::GenericErrorTree\">GenericErrorTree</a>&lt;(I, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.usize.html\">usize</a>), T, C, E&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.convert\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nom_supreme/error.rs.html#650-652\">Source</a><a href=\"#method.convert\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"nom/traits/trait.ErrorConvert.html#tymethod.convert\" class=\"fn\">convert</a>(self) -&gt; <a class=\"enum\" href=\"nom_supreme/error/enum.GenericErrorTree.html\" title=\"enum nom_supreme::error::GenericErrorTree\">GenericErrorTree</a>&lt;I, T, C, E&gt;</h4></section></summary><div class='docblock'>Transform to another error type</div></details></div></details>","ErrorConvert<GenericErrorTree<I, T, C, E>>","nom_supreme::error::ErrorTree"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ExtractContext%3CI,+GenericErrorTree%3CI2,+T,+C,+E%3E%3E-for-GenericErrorTree%3CI,+T,+C,+E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/nom_supreme/error.rs.html#655-664\">Source</a><a href=\"#impl-ExtractContext%3CI,+GenericErrorTree%3CI2,+T,+C,+E%3E%3E-for-GenericErrorTree%3CI,+T,+C,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I, I2, T, C, E&gt; <a class=\"trait\" href=\"nom_supreme/final_parser/trait.ExtractContext.html\" title=\"trait nom_supreme::final_parser::ExtractContext\">ExtractContext</a>&lt;I, <a class=\"enum\" href=\"nom_supreme/error/enum.GenericErrorTree.html\" title=\"enum nom_supreme::error::GenericErrorTree\">GenericErrorTree</a>&lt;I2, T, C, E&gt;&gt; for <a class=\"enum\" href=\"nom_supreme/error/enum.GenericErrorTree.html\" title=\"enum nom_supreme::error::GenericErrorTree\">GenericErrorTree</a>&lt;I, T, C, E&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    I2: <a class=\"trait\" href=\"nom_supreme/final_parser/trait.RecreateContext.html\" title=\"trait nom_supreme::final_parser::RecreateContext\">RecreateContext</a>&lt;I&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.extract_context\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nom_supreme/error.rs.html#661-663\">Source</a><a href=\"#method.extract_context\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"nom_supreme/final_parser/trait.ExtractContext.html#tymethod.extract_context\" class=\"fn\">extract_context</a>(self, original_input: I) -&gt; <a class=\"enum\" href=\"nom_supreme/error/enum.GenericErrorTree.html\" title=\"enum nom_supreme::error::GenericErrorTree\">GenericErrorTree</a>&lt;I2, T, C, E&gt;</h4></section></summary><div class='docblock'>Given the context attached to a nom error, and given the <em>original</em>\ninput to the nom parser, extract more the useful context information. <a href=\"nom_supreme/final_parser/trait.ExtractContext.html#tymethod.extract_context\">Read more</a></div></details></div></details>","ExtractContext<I, GenericErrorTree<I2, T, C, E>>","nom_supreme::error::ErrorTree"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FromExternalError%3CI,+E2%3E-for-GenericErrorTree%3CI,+T,+C,+E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/nom_supreme/error.rs.html#614-625\">Source</a><a href=\"#impl-FromExternalError%3CI,+E2%3E-for-GenericErrorTree%3CI,+T,+C,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I, T, C, E, E2&gt; <a class=\"trait\" href=\"nom/error/trait.FromExternalError.html\" title=\"trait nom::error::FromExternalError\">FromExternalError</a>&lt;I, E2&gt; for <a class=\"enum\" href=\"nom_supreme/error/enum.GenericErrorTree.html\" title=\"enum nom_supreme::error::GenericErrorTree\">GenericErrorTree</a>&lt;I, T, C, E&gt;<div class=\"where\">where\n    E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;E2&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_external_error\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nom_supreme/error.rs.html#619-624\">Source</a><a href=\"#method.from_external_error\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"nom/error/trait.FromExternalError.html#tymethod.from_external_error\" class=\"fn\">from_external_error</a>(location: I, _kind: <a class=\"enum\" href=\"nom/error/enum.ErrorKind.html\" title=\"enum nom::error::ErrorKind\">NomErrorKind</a>, e: E2) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Create an error from a given external error, such as from FromStr</p>\n</div></details></div></details>","FromExternalError<I, E2>","nom_supreme::error::ErrorTree"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GenericErrorTree%3CI,+T,+C,+E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/nom_supreme/error.rs.html#426-469\">Source</a><a href=\"#impl-GenericErrorTree%3CI,+T,+C,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I, T, C, E&gt; <a class=\"enum\" href=\"nom_supreme/error/enum.GenericErrorTree.html\" title=\"enum nom_supreme::error::GenericErrorTree\">GenericErrorTree</a>&lt;I, T, C, E&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.map_locations_ref\" class=\"method\"><a class=\"src rightside\" href=\"src/nom_supreme/error.rs.html#429-457\">Source</a><h4 class=\"code-header\">fn <a href=\"nom_supreme/error/enum.GenericErrorTree.html#tymethod.map_locations_ref\" class=\"fn\">map_locations_ref</a>&lt;I2&gt;(\n    self,\n    convert_location: &amp;mut impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(I) -&gt; I2,\n) -&gt; <a class=\"enum\" href=\"nom_supreme/error/enum.GenericErrorTree.html\" title=\"enum nom_supreme::error::GenericErrorTree\">GenericErrorTree</a>&lt;I2, T, C, E&gt;</h4></section></summary><div class=\"docblock\"><p>Helper for <code>map_locations</code>. Because it operates recursively, this\nmethod uses an <code>&amp;mut impl FnMut</code>, which can be reborrowed.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.map_locations\" class=\"method\"><a class=\"src rightside\" href=\"src/nom_supreme/error.rs.html#463-468\">Source</a><h4 class=\"code-header\">pub fn <a href=\"nom_supreme/error/enum.GenericErrorTree.html#tymethod.map_locations\" class=\"fn\">map_locations</a>&lt;I2&gt;(\n    self,\n    convert_location: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(I) -&gt; I2,\n) -&gt; <a class=\"enum\" href=\"nom_supreme/error/enum.GenericErrorTree.html\" title=\"enum nom_supreme::error::GenericErrorTree\">GenericErrorTree</a>&lt;I2, T, C, E&gt;</h4></section></summary><div class=\"docblock\"><p>Convert all of the locations in this error using some kind of mapping\nfunction. This is intended to help add additional context that may not\nhave been available when the nom parsers were running, such as line\nand column numbers.</p>\n</div></details></div></details>",0,"nom_supreme::error::ErrorTree"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ParseError%3CI%3E-for-GenericErrorTree%3CI,+T,+C,+E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/nom_supreme/error.rs.html#496-586\">Source</a><a href=\"#impl-ParseError%3CI%3E-for-GenericErrorTree%3CI,+T,+C,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I: <a class=\"trait\" href=\"nom/traits/trait.InputLength.html\" title=\"trait nom::traits::InputLength\">InputLength</a>, T, C, E&gt; <a class=\"trait\" href=\"nom/error/trait.ParseError.html\" title=\"trait nom::error::ParseError\">ParseError</a>&lt;I&gt; for <a class=\"enum\" href=\"nom_supreme/error/enum.GenericErrorTree.html\" title=\"enum nom_supreme::error::GenericErrorTree\">GenericErrorTree</a>&lt;I, T, C, E&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_error_kind\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nom_supreme/error.rs.html#499-527\">Source</a><a href=\"#method.from_error_kind\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"nom/error/trait.ParseError.html#tymethod.from_error_kind\" class=\"fn\">from_error_kind</a>(location: I, kind: <a class=\"enum\" href=\"nom/error/enum.ErrorKind.html\" title=\"enum nom::error::ErrorKind\">NomErrorKind</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Create a new error at the given position. Interpret <code>kind</code> as an\n<a href=\"nom_supreme/error/enum.Expectation.html\" title=\"enum nom_supreme::error::Expectation\"><code>Expectation</code></a> if possible, to give a more informative error message.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.append\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nom_supreme/error.rs.html#535-554\">Source</a><a href=\"#method.append\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"nom/error/trait.ParseError.html#tymethod.append\" class=\"fn\">append</a>(location: I, kind: <a class=\"enum\" href=\"nom/error/enum.ErrorKind.html\" title=\"enum nom::error::ErrorKind\">NomErrorKind</a>, other: Self) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Combine an existing error with a new one. This is how error context is\naccumulated when backtracing. “other” is the original error, and the\ninputs new error from higher in the call stack.</p>\n<p>If <code>other</code> is already an <code>GenericErrorTree::Stack</code>, the context is added to\nthe stack; otherwise, a new stack is created, with <code>other</code> at the root.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_char\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nom_supreme/error.rs.html#557-562\">Source</a><a href=\"#method.from_char\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"nom/error/trait.ParseError.html#method.from_char\" class=\"fn\">from_char</a>(location: I, character: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.char.html\">char</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Create an error indicating an expected character at a given position</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.or\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nom_supreme/error.rs.html#568-585\">Source</a><a href=\"#method.or\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"nom/error/trait.ParseError.html#method.or\" class=\"fn\">or</a>(self, other: Self) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Combine two errors from branches of alt. If either or both errors are\nalready <a href=\"nom_supreme/error/enum.GenericErrorTree.html#variant.Alt\" title=\"variant nom_supreme::error::GenericErrorTree::Alt\"><code>GenericErrorTree::Alt</code></a>, the different error sets are merged;\notherwise, a new <a href=\"nom_supreme/error/enum.GenericErrorTree.html#variant.Alt\" title=\"variant nom_supreme::error::GenericErrorTree::Alt\"><code>GenericErrorTree::Alt</code></a> is created, containing both\n<code>self</code> and <code>other</code>.</p>\n</div></details></div></details>","ParseError<I>","nom_supreme::error::ErrorTree"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TagError%3CI,+T%3E-for-GenericErrorTree%3CI,+T,+C,+E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/nom_supreme/error.rs.html#627-637\">Source</a><a href=\"#impl-TagError%3CI,+T%3E-for-GenericErrorTree%3CI,+T,+C,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.u8.html\">u8</a>]&gt;, C, E&gt; <a class=\"trait\" href=\"nom_supreme/tag/trait.TagError.html\" title=\"trait nom_supreme::tag::TagError\">TagError</a>&lt;I, T&gt; for <a class=\"enum\" href=\"nom_supreme/error/enum.GenericErrorTree.html\" title=\"enum nom_supreme::error::GenericErrorTree\">GenericErrorTree</a>&lt;I, T, C, E&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_tag\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nom_supreme/error.rs.html#628-636\">Source</a><a href=\"#method.from_tag\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"nom_supreme/tag/trait.TagError.html#tymethod.from_tag\" class=\"fn\">from_tag</a>(location: I, tag: T) -&gt; Self</h4></section></summary><div class='docblock'>Create an error from an expected tag at a location.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_tag_no_case\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nom_supreme/tag.rs.html#22-24\">Source</a><a href=\"#method.from_tag_no_case\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"nom_supreme/tag/trait.TagError.html#method.from_tag_no_case\" class=\"fn\">from_tag_no_case</a>(input: I, tag: T) -&gt; Self</h4></section></summary><div class='docblock'>As above, but for a case insensitive tag. By default this just\ncalls <a href=\"nom_supreme/tag/trait.TagError.html#tymethod.from_tag\"><code>from_tag</code></a></div></details></div></details>","TagError<I, T>","nom_supreme::error::ErrorTree"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[30690]}