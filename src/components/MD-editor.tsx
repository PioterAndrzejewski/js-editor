import { useState, useEffect, useRef } from "react";
import MDEditor from "@uiw/react-md-editor";

const Editor: React.FC = () => {
  const [editMode, setEditMode] = useState(false);
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
    >
      {editMode && <MDEditor value='#fdsafEdea' />}
      {!editMode && <MDEditor.Markdown source='#fdsafEdea' />}
    </div>
  );
};

export default Editor;
