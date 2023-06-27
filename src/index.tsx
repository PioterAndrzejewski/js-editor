import { createRoot } from "react-dom/client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import * as esbuild from "esbuild-wasm";
import { unpkgPathPlugin } from "./plugins/unpkg-path-plugin";
import { fetchPlugin } from "./plugins/fetch-plugin";

import "bulmaswatch/slate/bulmaswatch.min.css";

import CodeEditor from "./components/CodeEditor";

const App = () => {
  const ref = useRef<any>();
  const iFrame = useRef<any>();
  const [input, setInput] = useState("");

  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: "https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm",
    });
  };

  useEffect(() => {
    startService();
  }, []);

  const onClick = async () => {
    iFrame.current.srcdoc = html;
    const result = await ref.current.build({
      entryPoints: ["index.js"],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin(), fetchPlugin(input)],
      define: {
        "process.env.NODE_ENV": '"production"',
        global: '"window"',
      },
    });
    iFrame.current.contentWindow.postMessage(result.outputFiles[0].text, "*");
  };

  const html = `
  <!DOCTYPE html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
    <script>
      window.addEventListener('message', event => {
        try {
          eval(event.data);
        } catch (e) {
          document.querySelector('#root').innerHTML = '<div style="color: red;"><h2>Runtime error</h2>' + e + '</div>';
          console.error(e)
        }
      }, false)
    </script>
  </body>
  </html>
  `;
  return (
    <div>
      <CodeEditor initialValue={null} onChange={(val) => setInput(val)} />
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <iframe
        ref={iFrame}
        srcDoc={html}
        title='screen'
        sandbox='allow-scripts allow-modals'
      />
    </div>
  );
};

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
