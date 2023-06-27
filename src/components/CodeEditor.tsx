import MonacoEditor, { EditorDidMount } from "@monaco-editor/react";
import { useRef } from "react";
import prettier from "prettier/standalone";
import parser from "prettier/parser-babel";
import codeShift from "jscodeshift";
import Highlighter from "monaco-jsx-highlighter";

import "./code-editor.css";
import "./syntax.css";

interface CodeEditorProps {
  initialValue: string | null;
  onChange(val: string): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue, onChange }) => {
  const monacoRef: any = useRef();
  const onEditorDidMount: EditorDidMount = (getValue, monacoEditor) => {
    monacoRef.current = monacoEditor;
    monacoEditor.onDidChangeModelContent(() => onChange(getValue()));
    monacoEditor.getModel()?.updateOptions({ tabSize: 2 });

    const highlighter = new Highlighter(
      // @ts-ignore
      window.monaco,
      codeShift,
      monacoEditor,
    );
    highlighter.highLightOnDidChangeModelContent(
      () => {},
      () => {},
      undefined,
      () => {},
    );
  };

  const onFormat = () => {
    const unformatted = monacoRef.current.getModel().getValue();
    const formatted = prettier
      .format(unformatted, {
        parser: "babel",
        plugins: [parser],
        semi: true,
        singleQuote: true,
      })
      .replace(/\n$/, "");
    monacoRef.current.setValue(formatted);
  };

  return (
    <div className='editor-wrapper'>
      <button
        onClick={onFormat}
        className='button button-format is-primary is-small'
      >
        Format code
      </button>
      <MonacoEditor
        editorDidMount={onEditorDidMount}
        value={initialValue}
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
    </div>
  );
};

export default CodeEditor;
