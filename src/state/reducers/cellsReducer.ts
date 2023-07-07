import produce from "immer";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import { Cell } from "../cell";
import { initialJS } from "../initialJS";
import { saveToLS } from "../local-storage";

export interface CellsState {
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
  order: ["initial-code-0", "initial-code-1", "initial-code-2", "initial-MD"],
  data: {
    "initial-code-0": {
      id: "initial-code-0",
      type: "code",
      content: initialJS[0],
    },
    "initial-code-1": {
      id: "initial-code-1",
      type: "code",
      content: initialJS[1],
    },
    "initial-code-2": {
      id: "initial-code-2",
      type: "code",
      content: initialJS[2],
    },
    "initial-MD": {
      id: "initial-MD",
      type: "text",
      content: "# Click here to edit",
    },
  },
};

const reducer = produce(
  (state: CellsState = initialState, action: Action): CellsState => {
    switch (action.type) {
      case ActionType.UPDATE_CELL:
        const { id, content } = action.payload;
        state.data[id].content = content;
        saveToLS(state);
        return state;
      case ActionType.DELETE_CELL:
        const idToDelete = action.payload;
        delete state.data[idToDelete];
        const index = state.order.findIndex((cell) => cell === idToDelete);
        if (index !== -1) state.order.splice(index, 1);
        saveToLS(state);
        return state;
      case ActionType.MOVE_CELL:
        const { direction } = action.payload;
        const oldIndex = state.order.findIndex(
          (cell) => cell === action.payload.id,
        );
        const targetIndex = direction === "up" ? oldIndex - 1 : oldIndex + 1;
        if (targetIndex === -1 || targetIndex > state.order.length - 1) {
          saveToLS(state);
          return state;
        }
        state.order[oldIndex] = state.order[targetIndex];
        state.order[targetIndex] = action.payload.id;
        saveToLS(state);
        return state;
      case ActionType.INSERT_CELL_AFTER:
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
          state.order.unshift(cell.id);
          saveToLS(state);
          return state;
        }
        state.order.splice(foundIndex + 1, 0, cell.id);
        saveToLS(state);
        return state;
      default:
        return state;
    }
  },
  initialState,
);

const randomId = () => {
  return Math.random().toString(36).substring(2, 6);
};

export default reducer;
