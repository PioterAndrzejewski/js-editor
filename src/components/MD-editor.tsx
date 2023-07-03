import { useState, useEffect, useRef } from "react";
import MDEditor from "@uiw/react-md-editor";
import "./MD-editor.css";

const Editor: React.FC = () => {
  const [editMode, setEditMode] = useState(false);
  const [markdown, setMarkdown] = useState("# Header");
  const editorRef = useRef<HTMLDivElement | null>(null);

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
    >
      {editMode && (
        <MDEditor
          value={markdown}
          onChange={(newValue) => setMarkdown(newValue!)}
        />
      )}
      {!editMode && <MDEditor.Markdown source={markdown} />}
    </div>
  );
};

export default Editor;
