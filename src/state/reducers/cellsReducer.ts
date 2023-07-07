import produce from "immer";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import { Cell } from "../cell";

interface CellsState {
  loading: boolean;
  error: string | null;
  order: string[];
  data: {
    [key: string]: Cell;
  };
}

const initialState: CellsState = {
  loading: false,
  error: null,
  order: [],
  data: {},
};

const reducer = produce((state: CellsState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.UPDATE_CELL:
      const { id, content } = action.payload;
      state.data[id].content = content;
      return state;
    case ActionType.DELETE_CELL:
      const idToDelete = action.payload;
      delete state.data[idToDelete];
      const index = state.order.findIndex((cell) => cell === idToDelete);
      if (index !== -1) state.order.splice(index, 1);
      return state;
    case ActionType.MOVE_CELL:
      const { direction } = action.payload;
      const oldIndex = state.order.findIndex(
        (cell) => cell === action.payload.id,
      );
      const targetIndex = direction === "up" ? oldIndex - 1 : oldIndex + 1;
      if (targetIndex === -1 || targetIndex > state.order.length - 1) {
        return state;
      }
      state.order[oldIndex] = state.order[targetIndex];
      state.order[targetIndex] = action.payload.id;
      return state;
    case ActionType.INSERT_CELL_BEFORE:
      const cell: Cell = {
        content: "",
        type: action.payload.type,
        id: randomId(),
      };
      state.data[cell.id] = cell;
      const foundIndex = state.order.findIndex(
        (id) => id === action.payload.id,
      );
      if (foundIndex < 0) {
        state.order.push(cell.id);
        return state;
      }
      state.order.splice(foundIndex, 0, cell.id);
      return state;
    default:
      return state;
  }
}, initialState);

const randomId = () => {
  return Math.random().toString(36).substring(2, 6);
};

export default reducer;
