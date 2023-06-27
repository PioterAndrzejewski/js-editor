import { useState } from "react";
import bundle from "../bundler";
import Preview from "./Preview";
import CodeEditor from "./CodeEditor";
import "bulmaswatch/slate/bulmaswatch.min.css";

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
  const [input, setInput] = useState(initValue);

  const onClick = async () => {
    const bundledCode = await bundle(input);
    setCode(bundledCode);
  };

  return (
    <div>
      <CodeEditor initialValue={input} onChange={(val) => setInput(val)} />
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <Preview code={code} />
    </div>
  );
};

export default CodeSection;
