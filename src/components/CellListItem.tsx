import { Cell } from "../state";
import CodeSection from "./CodeSection";
import TextEditor from "./TextEditor";

interface CellListItemProps {
  cell: Cell;
}

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
  let child: JSX.Element;
  if (cell.type === "code") {
    child = <CodeSection cell={cell} />;
  } else {
    child = <TextEditor cell={cell} />;
  }
  return child;
};

export default CellListItem;
