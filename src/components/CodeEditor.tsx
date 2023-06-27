import MonacoEditor from "@monaco-editor/react";
import { useRef } from "react";

interface CodeEditorProps {
  initialValue: string | null;
  onChange(val: string): void;
}

const defaultValue = `
import React from 'react';
import { createRoot } from "react-dom/client";

const App = () => <h1>Hello world!</h1>;

const root = createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App /></React.StrictMode>);
`;

const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue, onChange }) => {
  const onEditorDidMount = (getValue: () => string, monacoEditor: any) => {
    monacoEditor.onDidChangeModelContent(() => onChange(getValue()));
  };

  return (
    <MonacoEditor
      editorDidMount={onEditorDidMount}
      value={initialValue || defaultValue}
      height='500px'
      language='javascript'
      theme='dark'
      options={{
        wordWrap: "on",
        minimap: {
          enabled: false,
        },
        showUnused: false,
        folding: false,
        lineNumbersMinChars: 3,
        fontSize: 18,
        scrollBeyondLastLine: false,
        automaticLayout: true,
      }}
    />
  );
};

export default CodeEditor;
