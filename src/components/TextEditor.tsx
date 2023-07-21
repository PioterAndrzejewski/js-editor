import { useState, useEffect, useRef } from "react";
import MDEditor from "@uiw/react-md-editor";
import { Cell } from "../state";
import { useActions } from "../hooks/useActions";
import "./text-editor.css";

interface TextEditorProps {
  cell: Cell;
}

const TextEditor: React.FC<TextEditorProps> = ({ cell }) => {
  const [editMode, setEditMode] = useState(false);
  const editorRef = useRef<HTMLDivElement | null>(null);
  const { updateCell } = useActions();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        editorRef.current &&
        e.target &&
        editorRef.current.contains(e.target as Node)
      ) {
        return;
      }
      setEditMode(false);
    };
    window.addEventListener("click", handleClick, { capture: true });
    return () =>
      window.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return (
    <div
      onClick={() => {
        setEditMode(true);
      }}
      ref={editorRef}
      className={editMode ? "text-editor" : "text-editor card-content"}
      data-testid='text-section'
    >
      {editMode && (
        <MDEditor
          value={cell.content}
          onChange={(newValue) => updateCell(cell.id, newValue || "")}
        />
      )}
      {!editMode && (
        <MDEditor.Markdown source={cell.content || "Click here to edit"} />
      )}
    </div>
  );
};

export default TextEditor;
