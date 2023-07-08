import { useRef } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { CellsState } from "../state/reducers/cellsReducer";
import "./load-save-bar.css";

const LoadSaveBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { loadCells } = useActions();
  const cellsStateJSON = useTypedSelector((state) =>
    JSON.stringify(state.cells),
  );

  const handleUploadButton = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  async function parseJsonFile(file: FileList) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = (event) => {
        if (typeof event!.target!.result !== "string") {
          reject();
        } else {
          resolve(JSON.parse(event!.target!.result));
        }
      };
      fileReader.onerror = (error) => reject(error);
      fileReader.readAsText(file[0]);
    });
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const loadedState = (await parseJsonFile(e.target.files)) as CellsState;
    loadCells(loadedState);
  };

  return (
    <div className='load-save-bar'>
      <a
        className='button is-primary is-small'
        href={`data:text/json;charset=utf-8,${encodeURIComponent(
          cellsStateJSON,
        )}`}
        download='js-editor-file.json'
      >
        <span className='icon'>
          <i className='fas fa-save' />
        </span>
        <span className='text'>Save current cells to file</span>
      </a>
      <button
        className='button is-primary is-small'
        onClick={handleUploadButton}
      >
        <span className='icon'>
          <i className='fas fa-upload' />
        </span>
        <span className='text'>Load from file</span>
        <input
          type='file'
          onChange={handleFileChange}
          className='input-file'
          ref={inputRef}
        />
      </button>
    </div>
  );
};

export default LoadSaveBar;
