searchState.loadedDescShard("textwrap", 0, "The textwrap library provides functions for word wrapping …\nFind words by splitting on runs of <code>&#39; &#39;</code> characters.\n<em>Carriage return and line feed</em> – a line ending sequence …\nFind words using a custom word separator\n<em>Line feed</em> – a line ending historically used in Unix. …\nSupported line endings. Like in the Rust standard library, …\nHolds configuration options for wrapping and filling text.\nSplit <code>line</code> into words using Unicode break properties.\nDescribes where words occur in a line of text.\nAllow long words to be broken if they cannot fit on a line.\nFunctionality for wrapping text into columns.\nBuilding blocks for advanced wrapping functionality.\nRemoves common leading whitespace from each line.\nFunctions for filling text.\nFill a line of text at a given width.\nFill <code>text</code> in-place without reallocating the input string.\nIndent each line by the given prefix.\nFunctions related to adding and removing indentation from …\nIndentation used for the first line of output. See the …\nLine ending detection and conversion.\nLine ending used for breaking lines.\nOptions for wrapping text.\nFunctionality for unfilling and refilling text.\nRefill a paragraph of wrapped text with a new width.\nIndentation used for subsequent lines of output. See the …\nUnpack a paragraph of already-wrapped text.\nThe width in columns at which the text will be wrapped.\nThe line breaking algorithm to use, see the <code>WordSeparator</code> …\nFunctionality for finding words.\nThe method for splitting words. This can be used to …\nWord splitting functionality.\nFunctions for wrapping text.\nWrap a line of text at a given width.\nWrapping algorithm to use, see the implementations of the …\nWord wrapping algorithms.\nWrap text into columns with a given total width.\nWrap text into columns with a given total width.\nThe final bytes of an ANSI escape sequence must be in this …\nThe CSI or “Control Sequence Introducer” introduces an …\nA (text) fragment denotes the unit which we wrap into …\nA piece of wrappable text, including any trailing …\nBreak this word into smaller words with a width of at most …\nForcibly break words wider than <code>line_width</code> into smaller …\nCompute the display width of <code>text</code> while skipping over ANSI …\nConstruct a <code>Word</code> from a string.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nPenalty string to insert if the word falls at the end of a …\nDisplayed width of the penalty that must be inserted if the\nSkip ANSI escape sequences.\nWhitespace to insert if the word does not fall at the end …\nDisplayed width of the whitespace that must follow the word\nDisplayed width of word represented by this fragment.\nWord content.\nFill a line of text at a given width.\nFill <code>text</code> in-place without reallocating the input string.\nSlow path for fill.\nRemoves common leading whitespace from each line.\nIndent each line by the given prefix.\n<em>Carriage return and line feed</em> – a line ending sequence …\n<em>Line feed</em> – a line ending historically used in Unix. …\nSupported line endings. Like in the Rust standard library, …\nAn iterator over the lines of a string, as tuples of …\nTurns this <code>LineEnding</code> value into its ASCII representation.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nHolds configuration options for wrapping and filling text.\nChange <code>self.break_words</code>. This controls if words longer …\nAllow long words to be broken if they cannot fit on a line.\nReturns the argument unchanged.\nChange <code>self.initial_indent</code>. The initial indentation is …\nIndentation used for the first line of output. See the …\nCalls <code>U::from(self)</code>.\nChange <code>self.line_ending</code>. This specifies which of the …\nLine ending used for breaking lines.\nCreates a new <code>Options</code> with the specified width.\nChange <code>self.subsequent_indent</code>. The subsequent indentation …\nIndentation used for subsequent lines of output. See the …\nSet <code>self.width</code> to the given value.\nThe width in columns at which the text will be wrapped.\nChange <code>self.word_separator</code>.\nThe line breaking algorithm to use, see the <code>WordSeparator</code> …\nChange <code>self.word_splitter</code>. The <code>WordSplitter</code> is used to fit …\nThe method for splitting words. This can be used to …\nChange <code>self.wrap_algorithm</code>.\nWrapping algorithm to use, see the implementations of the …\nRefill a paragraph of wrapped text with a new width.\nUnpack a paragraph of already-wrapped text.\nFind words by splitting on runs of <code>&#39; &#39;</code> characters.\nFind words using a custom word separator\nSoft hyphen, also knows as a “shy hyphen”. Should show …\nSplit <code>line</code> into words using Unicode break properties.\nDescribes where words occur in a line of text.\nCompare two word separators.\nFind all words in <code>line</code>.\nFind words in line. ANSI escape sequences are ignored in …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCreate a new word separator.\nUse a custom function as the word splitter.\n<code>HyphenSplitter</code> is the default <code>WordSplitter</code> used by …\nUse this as a <code>Options.word_splitter</code> to avoid any kind of …\nThe <code>WordSplitter</code> enum describes where words can be split.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturn all possible indices where <code>word</code> can be split.\nSplit words into smaller words according to the split …\nWrap a line of text at a given width.\nWrap a single line of text.\nCustom wrapping function.\nWrap words using a fast and simple algorithm.\nDescribes how to wrap words into lines.\nCompare two wrap algorithms.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCreate new wrap algorithm.\nWrap words according to line widths.\nWrap abstract fragments into lines with a first-fit …")