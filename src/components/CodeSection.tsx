import { useEffect } from "react";
import Preview from "./Preview";
import CodeEditor from "./CodeEditor";
import Resizable from "./Resizable";
import { Cell } from "../state";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import "./code-section.css";

interface CodeSectionProps {
  cell: Cell;
}

const initShowFunction = `
  const show = (toShow) => {
    if (typeof toShow === 'object') {
      document.querySelector('#root').innerHTML = JSON.stringify(toShow);
      return;
    };
    document.querySelector('#root').innerHTML = toShow;
  }
`;

const CodeSection: React.FC<CodeSectionProps> = ({ cell }) => {
  const { updateCell, createBundle } = useActions();
  const bundle = useTypedSelector((state) => state.bundles[cell.id]);
  const cumulativeCode = useTypedSelector((state) => {
    const { data, order } = state.cells;
    const orderedCells = order.map((id) => data[id]);
    const cumulativeCode = [initShowFunction];
    for (const currentCell of orderedCells) {
      if (currentCell.type === "code") {
        cumulativeCode.push(currentCell.content);
      }
      if (currentCell.id === cell.id) {
        break;
      }
    }
    return cumulativeCode;
  });
  console.log(cumulativeCode);

  useEffect(() => {
    if (!bundle && cumulativeCode) {
      createBundle(cell.id, cumulativeCode.join("\n"));
      return;
    }
    const timer = setTimeout(async () => {
      if (cumulativeCode) {
        createBundle(cell.id, cumulativeCode.join("\n"));
      }
    }, 750);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cumulativeCode?.join("\n"), cell.id, createBundle]);

  return (
    <Resizable direction='vertical'>
      <div className='code-section-wrapper'>
        <Resizable direction='horizontal'>
          <CodeEditor
            initialValue={cell.content}
            onChange={(val) => updateCell(cell.id, val)}
          />
        </Resizable>
        <div className='progress-wrapper'>
          {!bundle || bundle.loading ? (
            <div className='progress-cover'>
              <progress className='progress is-small is-primary'>
                Loading
              </progress>
            </div>
          ) : (
            <Preview code={bundle.code} error={bundle.err} />
          )}
        </div>
      </div>
    </Resizable>
  );
};

export default CodeSection;
