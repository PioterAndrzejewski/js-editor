import { CellsState } from "../reducers/cellsReducer";

export const saveToLS = (state: CellsState) => {
  localStorage.setItem("cellsStore", JSON.stringify(state));
};
