searchState.loadedDescShard("ron", 0, "RON is a simple config format which looks similar to Rust …\nRoundtrip serde Options module.\nValue module.\nThe RON deserializer.\nDeserialization module.\nDeserialization module.\nDeserialization module.\nDeserialization module.\nCheck if the remaining bytes are whitespace only, …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nA convenience function for building a deserializer and …\nA convenience function for building a deserializer and …\nA convenience function for building a deserializer and …\nCalled from <code>deserialize_any</code> when a struct was detected. …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nContains the error value\nThis type represents all possible errors that can occur …\nContains the success value\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the set containing all flags.\nReturns the intersection between the two sets of flags.\nDisables all flags disabled in the set.\nReturns the union of the two sets of flags.\nAdds the set of flags.\nReturns the raw value of the flags currently stored.\nReturns the left flags, but with all the right flags …\nToggles the set of flags.\nReturns the complement of this set of flags.\nReturns <code>true</code> if all of the flags in <code>other</code> are contained …\nReturns the difference between the flags in <code>self</code> and <code>other</code>.\nReturns an empty set of flags.\nReturns the argument unchanged.\nConvert from underlying bit representation, unless that …\nConvert from underlying bit representation, dropping any …\nConvert from underlying bit representation, preserving all …\nCreates an extension flag from an ident.\nInserts the specified flags in-place.\nReturns the intersection between the flags in <code>self</code> and …\nReturns <code>true</code> if there are flags common to both <code>self</code> and …\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if all flags are currently set.\nReturns <code>true</code> if no flags are currently stored.\nReturns the complement of this set of flags.\nRemoves the specified flags in-place.\nInserts or removes the specified flags depending on the …\nReturns the set difference of the two sets of flags.\nDisables all flags enabled in the set.\nReturns the symmetric difference between the flags in <code>self</code> …\nToggles the specified flags in-place.\nReturns the union of between the flags in <code>self</code> and <code>other</code>.\nRoundtrip serde options.\nPrivate field to ensure adding a field is non-breaking.\nExtensions that are enabled by default during …\nReturns the argument unchanged.\nA convenience function for building a deserializer and …\nA convenience function for building a deserializer and …\nA convenience function for building a deserializer and …\nA convenience function for building a deserializer and …\nA convenience function for building a deserializer and …\nA convenience function for building a deserializer and …\nCalls <code>U::from(self)</code>.\nSerializes <code>value</code> and returns it as string.\nSerializes <code>value</code> in the recommended RON layout in a pretty …\nSerializes <code>value</code> into <code>writer</code>\nSerializes <code>value</code> into <code>writer</code> in a pretty way.\nEnable <code>default_extension</code> by default during serialization …\nDo NOT enable <code>default_extension</code> by default during …\nOnly returns true if the char after <code>ident</code> cannot belong to …\nShould only be used on a working copy\nReturns <code>true</code> on overflow\nReturns <code>true</code> on overflow\nReturns <code>true</code> on overflow\nOnly returns true if the char after <code>ident</code> cannot belong to …\nReturns the extensions bit mask.\nBits set according to <code>Extension</code> enum.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nPretty serializer state\nPretty serializer configuration.\nThe RON serializer.\nPrivate field to ensure adding a field is non-breaking.\nConfigures whether every array should be a single line …\nEnable compact arrays\nConfigures whether floats should always include a decimal. …\nAlways include the decimal in floats\nLimits the pretty-formatting based on the number of …\nLimit the pretty-ness up to the given depth.\nConfigures whether a comment shall be added to every array …\nEnumerate array items in comments\nConfigures extensions\nEnable extensions. Only configures ‘implicit_some’ and …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConfigures the string sequence used for indentation.\nIndentation string\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreates a new <code>Serializer</code>.\nCreates a default <code>PrettyConfig</code>.\nConfigures the newlines used for serialization.\nNew line string\nConfigures whether tuples are single- or multi-line. If …\nSeparate tuple members with indentation\nConfigures the string sequence used to separate items …\nSeparator string\nConfigures whether to emit struct names.\ntemporary field for semver compatibility this was moved to …\nSerializes <code>value</code> and returns it as string.\nSerializes <code>value</code> in the recommended RON layout in a pretty …\nSerializes <code>value</code> into <code>writer</code>\nSerializes <code>value</code> into <code>writer</code> in a pretty way.\nCreates a new <code>Serializer</code>.\nA wrapper for <code>f64</code>, which guarantees that the inner value …\nA <code>Value</code> to <code>Value</code> map.\nA wrapper for a number, which can be either <code>f64</code> or <code>i64</code>.\nIf the <code>Number</code> is a float, return it. Otherwise return <code>None</code>.\nIf the <code>Number</code> is an integer, return it. Otherwise return …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a value from a string reference.\nReturns the wrapped float.\nInserts a new element, returning the previous element with …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the <code>f64</code> representation of the number regardless of …\nTries to deserialize this <code>Value</code> into <code>T</code>.\nReturns <code>true</code> if <code>self.len() == 0</code>, <code>false</code> otherwise.\nIterate all key-value pairs.\nIterate all key-value pairs mutably.\nIterate all keys.\nReturns the number of elements in the map.\nMap this number to a single type using the appropriate …\nCreates a new, empty <code>Map</code>.\nConstruct a new number.\nConstruct a new <code>Float</code>.\nRemoves an element by its <code>key</code>.\nIterate all values.\nIterate all values mutably.")