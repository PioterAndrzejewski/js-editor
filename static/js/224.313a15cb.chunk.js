(this["webpackJsonpjs-editor"]=this["webpackJsonpjs-editor"]||[]).push([[224],{398:function(e,t){Prism.languages.jolie=Prism.languages.extend("clike",{string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},keyword:/\b(?:include|define|is_defined|undef|main|init|outputPort|inputPort|Location|Protocol|Interfaces|RequestResponse|OneWay|type|interface|extender|throws|cset|csets|forward|Aggregates|Redirects|embedded|courier|execution|sequential|concurrent|single|scope|install|throw|comp|cH|default|global|linkIn|linkOut|synchronized|this|new|for|if|else|while|in|Jolie|Java|Javascript|nullProcess|spawn|constants|with|provide|until|exit|foreach|instanceof|over|service)\b/,number:/(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?l?/i,operator:/-[-=>]?|\+[+=]?|<[<=]?|[>=*!]=?|&&|\|\||[:?\/%^]/,punctuation:/[,.]/,builtin:/\b(?:undefined|string|int|void|long|Byte|bool|double|float|char|any)\b/,symbol:/[|;@]/}),delete Prism.languages.jolie["class-name"],Prism.languages.insertBefore("jolie","keyword",{function:{pattern:/((?:\b(?:outputPort|inputPort|in|service|courier)\b|@)\s*)\w+/,lookbehind:!0},aggregates:{pattern:/(\bAggregates\s*:\s*)(?:\w+(?:\s+with\s+\w+)?\s*,\s*)*\w+(?:\s+with\s+\w+)?/,lookbehind:!0,inside:{"with-extension":{pattern:/\bwith\s+\w+/,inside:{keyword:/\bwith\b/}},function:{pattern:/\w+/},punctuation:{pattern:/,/}}},redirects:{pattern:/(\bRedirects\s*:\s*)(?:\w+\s*=>\s*\w+\s*,\s*)*(?:\w+\s*=>\s*\w+)/,lookbehind:!0,inside:{punctuation:{pattern:/,/},function:{pattern:/\w+/},symbol:{pattern:/=>/}}}})}}]);
//# sourceMappingURL=224.313a15cb.chunk.js.map