import { useState, useEffect } from "react";
import bundle from "../bundler";
import Preview from "./Preview";
import CodeEditor from "./CodeEditor";
import Resizable from "./Resizable";
import { Cell } from "../state";
import { useActions } from "../hooks/useActions";
import "./code-section.css";

interface CodeSectionProps {
  cell: Cell;
}

const CodeSection: React.FC<CodeSectionProps> = ({ cell }) => {
  const [code, setCode] = useState("");
  const [err, setErr] = useState("");
  const { updateCell } = useActions();

  useEffect(() => {
    const timer = setTimeout(async () => {
      const bundledCode = await bundle(cell.content);
      setCode(bundledCode.code);
      setErr(bundledCode.err);
    }, 750);

    return () => {
      clearTimeout(timer);
    };
  }, [cell.content]);

  return (
    <Resizable direction='vertical'>
      <div className='code-section-wrapper'>
        <Resizable direction='horizontal'>
          <CodeEditor
            initialValue={cell.content}
            onChange={(val) => updateCell(cell.id, val)}
          />
        </Resizable>
        <Preview code={code} error={err} />
      </div>
    </Resizable>
  );
};

export default CodeSection;
