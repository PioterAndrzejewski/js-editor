import { useTypedSelector } from "../hooks/useTypedSelector";
import CellListItem from "./CellListItem";

const CellList: React.FC = () => {
  const orderedCells = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id) => data[id]),
  );

  const renderedCells = orderedCells.map((cell) => (
    <CellListItem cell={cell} key={cell.id} />
  ));

  return <div>{renderedCells}</div>;
};

export default CellList;
