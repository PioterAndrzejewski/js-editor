import { Fragment, useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import CellListItem from "./CellListItem";
import AddCell from "./AddCell";
import LoadSaveBar from "./LoadSaveBar";
import { useActions } from "../hooks/useActions";
import "./cell-list.css";

const CellList: React.FC = () => {
  const { loadCells } = useActions();

  useEffect(() => {
    const storeFromLS = localStorage.getItem("cellsStore");
    if (storeFromLS) {
      const loadedState = JSON.parse(storeFromLS);
      loadCells(loadedState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const orderedCells = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id) => data[id]),
  );

  // const orderedCells = useTypedSelector((data) => console.log(data));

  const renderedCells = orderedCells.map((cell) => (
    <Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell id={cell.id} />
    </Fragment>
  ));

  return (
    <div className='cell-list-wrapper'>
      <LoadSaveBar />
      <AddCell id={null} />
      {renderedCells}
    </div>
  );
};

export default CellList;
