(function() {
    var type_impls = Object.fromEntries([["addr2line",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-LazyCell%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/addr2line/lazy.rs.html#9-34\">Source</a><a href=\"#impl-LazyCell%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"struct\" href=\"addr2line/lazy/struct.LazyCell.html\" title=\"struct addr2line::lazy::LazyCell\">LazyCell</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/addr2line/lazy.rs.html#10-14\">Source</a><h4 class=\"code-header\">pub(crate) fn <a href=\"addr2line/lazy/struct.LazyCell.html#tymethod.new\" class=\"fn\">new</a>() -&gt; <a class=\"struct\" href=\"addr2line/lazy/struct.LazyCell.html\" title=\"struct addr2line::lazy::LazyCell\">LazyCell</a>&lt;T&gt;</h4></section><section id=\"method.borrow\" class=\"method\"><a class=\"src rightside\" href=\"src/addr2line/lazy.rs.html#16-18\">Source</a><h4 class=\"code-header\">pub(crate) fn <a href=\"addr2line/lazy/struct.LazyCell.html#tymethod.borrow\" class=\"fn\">borrow</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.84.1/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/core/primitive.reference.html\">&amp;T</a>&gt;</h4></section><section id=\"method.borrow_with\" class=\"method\"><a class=\"src rightside\" href=\"src/addr2line/lazy.rs.html#20-33\">Source</a><h4 class=\"code-header\">pub(crate) fn <a href=\"addr2line/lazy/struct.LazyCell.html#tymethod.borrow_with\" class=\"fn\">borrow_with</a>(&amp;self, closure: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>() -&gt; T) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/core/primitive.reference.html\">&amp;T</a></h4></section></div></details>",0,"addr2line::lazy::LazyResult"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[2049]}