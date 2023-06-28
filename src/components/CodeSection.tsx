import { useState, useEffect } from "react";
import bundle from "../bundler";
import Preview from "./Preview";
import CodeEditor from "./CodeEditor";
import Resizable from "./Resizable";
import "bulmaswatch/slate/bulmaswatch.min.css";
import "./code-section.css";

const initValue = `import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => <h1>Hello world!</h1>;

const root = createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
console.log('happens');
`;

const CodeSection = () => {
  const [code, setCode] = useState("");
  const [err, setErr] = useState("");
  const [input, setInput] = useState(initValue);

  useEffect(() => {
    const timer = setTimeout(async () => {
      const bundledCode = await bundle(input);
      setCode(bundledCode.code);
      setErr(bundledCode.err);
    }, 750);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <Resizable direction='vertical'>
      <div className='code-section-wrapper'>
        <Resizable direction='horizontal'>
          <CodeEditor initialValue={input} onChange={(val) => setInput(val)} />
        </Resizable>
        <Preview code={code} error={err} />
      </div>
    </Resizable>
  );
};

export default CodeSection;
