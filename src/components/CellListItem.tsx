import { Cell } from "../state";
import CodeSection from "./CodeSection";
import TextEditor from "./TextEditor";
import ActionBar from "./ActionBar";
import "./cell-list-item.css";

interface CellListItemProps {
  cell: Cell;
}

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
  let child: JSX.Element;
  if (cell.type === "code") {
    child = (
      <>
        <div className='action-bar-wrapper'>
          <ActionBar id={cell.id} />
        </div>
        <CodeSection cell={cell} />
      </>
    );
  } else {
    child = (
      <>
        <ActionBar id={cell.id} />
        <TextEditor cell={cell} />
      </>
    );
  }

  return (
    <>
      <div className='cell-wrapper'>{child}</div>
    </>
  );
};

export default CellListItem;
