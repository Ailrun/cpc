(function() {
    var implementors = Object.fromEntries([["libc",[]],["owo_colors",[["impl&lt;'a, Color: <a class=\"trait\" href=\"owo_colors/trait.Color.html\" title=\"trait owo_colors::Color\">Color</a>, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"owo_colors/struct.BgColorDisplay.html\" title=\"struct owo_colors::BgColorDisplay\">BgColorDisplay</a>&lt;'a, Color, T&gt;"],["impl&lt;'a, Color: <a class=\"trait\" href=\"owo_colors/trait.Color.html\" title=\"trait owo_colors::Color\">Color</a>, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"owo_colors/struct.FgColorDisplay.html\" title=\"struct owo_colors::FgColorDisplay\">FgColorDisplay</a>&lt;'a, Color, T&gt;"],["impl&lt;'a, Color: <a class=\"trait\" href=\"owo_colors/trait.DynColor.html\" title=\"trait owo_colors::DynColor\">DynColor</a>, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"owo_colors/struct.BgDynColorDisplay.html\" title=\"struct owo_colors::BgDynColorDisplay\">BgDynColorDisplay</a>&lt;'a, Color, T&gt;"],["impl&lt;'a, Color: <a class=\"trait\" href=\"owo_colors/trait.DynColor.html\" title=\"trait owo_colors::DynColor\">DynColor</a>, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"owo_colors/struct.FgDynColorDisplay.html\" title=\"struct owo_colors::FgDynColorDisplay\">FgDynColorDisplay</a>&lt;'a, Color, T&gt;"],["impl&lt;'a, Fg: <a class=\"trait\" href=\"owo_colors/trait.Color.html\" title=\"trait owo_colors::Color\">Color</a>, Bg: <a class=\"trait\" href=\"owo_colors/trait.Color.html\" title=\"trait owo_colors::Color\">Color</a>, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"owo_colors/combo/struct.ComboColorDisplay.html\" title=\"struct owo_colors::combo::ComboColorDisplay\">ComboColorDisplay</a>&lt;'a, Fg, Bg, T&gt;"],["impl&lt;'a, Fg: <a class=\"trait\" href=\"owo_colors/trait.DynColor.html\" title=\"trait owo_colors::DynColor\">DynColor</a>, Bg: <a class=\"trait\" href=\"owo_colors/trait.DynColor.html\" title=\"trait owo_colors::DynColor\">DynColor</a>, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"owo_colors/combo/struct.ComboDynColorDisplay.html\" title=\"struct owo_colors::combo::ComboDynColorDisplay\">ComboDynColorDisplay</a>&lt;'a, Fg, Bg, T&gt;"],["impl&lt;'a, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"owo_colors/styles/struct.BlinkDisplay.html\" title=\"struct owo_colors::styles::BlinkDisplay\">BlinkDisplay</a>&lt;'a, T&gt;"],["impl&lt;'a, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"owo_colors/styles/struct.BlinkFastDisplay.html\" title=\"struct owo_colors::styles::BlinkFastDisplay\">BlinkFastDisplay</a>&lt;'a, T&gt;"],["impl&lt;'a, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"owo_colors/styles/struct.BoldDisplay.html\" title=\"struct owo_colors::styles::BoldDisplay\">BoldDisplay</a>&lt;'a, T&gt;"],["impl&lt;'a, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"owo_colors/styles/struct.DimDisplay.html\" title=\"struct owo_colors::styles::DimDisplay\">DimDisplay</a>&lt;'a, T&gt;"],["impl&lt;'a, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"owo_colors/styles/struct.HiddenDisplay.html\" title=\"struct owo_colors::styles::HiddenDisplay\">HiddenDisplay</a>&lt;'a, T&gt;"],["impl&lt;'a, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"owo_colors/styles/struct.ItalicDisplay.html\" title=\"struct owo_colors::styles::ItalicDisplay\">ItalicDisplay</a>&lt;'a, T&gt;"],["impl&lt;'a, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"owo_colors/styles/struct.ReversedDisplay.html\" title=\"struct owo_colors::styles::ReversedDisplay\">ReversedDisplay</a>&lt;'a, T&gt;"],["impl&lt;'a, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"owo_colors/styles/struct.StrikeThroughDisplay.html\" title=\"struct owo_colors::styles::StrikeThroughDisplay\">StrikeThroughDisplay</a>&lt;'a, T&gt;"],["impl&lt;'a, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"owo_colors/styles/struct.UnderlineDisplay.html\" title=\"struct owo_colors::styles::UnderlineDisplay\">UnderlineDisplay</a>&lt;'a, T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"owo_colors/dyn_styles/struct.Styled.html\" title=\"struct owo_colors::dyn_styles::Styled\">Styled</a>&lt;T&gt;"]]],["rustix",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"rustix/backend/io/types/struct.DupFlags.html\" title=\"struct rustix::backend::io::types::DupFlags\">DupFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"rustix/backend/io/types/struct.FdFlags.html\" title=\"struct rustix::backend::io::types::FdFlags\">FdFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"rustix/backend/io/types/struct.ReadWriteFlags.html\" title=\"struct rustix::backend::io::types::ReadWriteFlags\">ReadWriteFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"rustix/termios/types/struct.ControlModes.html\" title=\"struct rustix::termios::types::ControlModes\">ControlModes</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"rustix/termios/types/struct.InputModes.html\" title=\"struct rustix::termios::types::InputModes\">InputModes</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"rustix/termios/types/struct.LocalModes.html\" title=\"struct rustix::termios::types::LocalModes\">LocalModes</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"rustix/termios/types/struct.OutputModes.html\" title=\"struct rustix::termios::types::OutputModes\">OutputModes</a>"]]],["serde",[]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":57,"fragment_lengths":[11,8122,2042,13]}