import { Fragment } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import CellListItem from "./CellListItem";
import AddCell from "./AddCell";
import "./cell-list.css";

const CellList: React.FC = () => {
  const orderedCells = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id) => data[id]),
  );

  const renderedCells = orderedCells.map((cell) => (
    <Fragment key={cell.id}>
      <AddCell id={cell.id} />
      <CellListItem cell={cell} />
    </Fragment>
  ));

  return (
    <div className='cell-list-wrapper'>
      {renderedCells}
      <AddCell id={null} />
    </div>
  );
};

export default CellList;
