(this["webpackJsonpjs-editor"]=this["webpackJsonpjs-editor"]||[]).push([[191],{365:function(t,a){!function(t){t.languages.http={"request-line":{pattern:/^(?:GET|HEAD|POST|PUT|DELETE|CONNECT|OPTIONS|TRACE|PATCH|PRI|SEARCH)\s(?:https?:\/\/|\/)\S*\sHTTP\/[0-9.]+/m,inside:{method:{pattern:/^[A-Z]+\b/,alias:"property"},"request-target":{pattern:/^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,lookbehind:!0,alias:"url",inside:t.languages.uri},"http-version":{pattern:/^(\s)HTTP\/[0-9.]+/,lookbehind:!0,alias:"property"}}},"response-status":{pattern:/^HTTP\/[0-9.]+ \d+ .+/m,inside:{"http-version":{pattern:/^HTTP\/[0-9.]+/,alias:"property"},"status-code":{pattern:/^(\s)\d+(?=\s)/,lookbehind:!0,alias:"number"},"reason-phrase":{pattern:/^(\s).+/,lookbehind:!0,alias:"string"}}},"header-name":{pattern:/^[\w-]+:(?=.)/m,alias:"keyword"}};var a,e,s,n=t.languages,i={"application/javascript":n.javascript,"application/json":n.json||n.javascript,"application/xml":n.xml,"text/xml":n.xml,"text/html":n.html,"text/css":n.css},r={"application/json":!0,"application/xml":!0};for(var p in i)if(i[p]){a=a||{};var o=r[p]?(s=(e=p).replace(/^[a-z]+\//,""),"(?:"+e+"|\\w+/(?:[\\w.-]+\\+)+"+s+"(?![+\\w.-]))"):p;a[p.replace(/\//g,"-")]={pattern:RegExp("(content-type:\\s*"+o+"(?:(?:\\r\\n?|\\n).+)*)(?:\\r?\\n|\\r){2}[\\s\\S]*","i"),lookbehind:!0,inside:i[p]}}a&&t.languages.insertBefore("http","header-name",a)}(Prism)}}]);
//# sourceMappingURL=191.2877bcfd.chunk.js.map