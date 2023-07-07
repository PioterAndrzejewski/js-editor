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
      <CellListItem cell={cell} />
      <AddCell id={cell.id} />
    </Fragment>
  ));

  return (
    <div className='cell-list-wrapper'>
      <AddCell id={null} />
      {renderedCells}
    </div>
  );
};

export default CellList;
