import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import CellList from "./CellList";
import configureStore from "redux-mock-store";

const initialState = {
  cells: {
    loading: false,
    error: null,
    order: ["initial-code-0", "initial-MD"],
    data: {
      "initial-code-0": {
        id: "initial-code-0",
        type: "code",
        content: "console.log('test')",
      },
      "initial-MD": {
        id: "initial-MD",
        type: "text",
        content: "# Click here to edit",
      },
    },
  },
  bundles: {
    "initial-code-0": "console.log('test')",
  },
};

const emptyInitialState = {
  cells: {
    loading: false,
    error: null,
    order: [],
    data: {},
  },
  bundles: {},
};

const mockStore = configureStore();
describe("CellList component with initial cells", () => {
  let store;
  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
  });

  test("should render component with initial 1 code cell and 1 text cell", () => {
    render(
      <Provider store={store}>
        <CellList />
      </Provider>,
    );
    const codeSection = screen.getByTestId("code-section");
    expect(codeSection).toBeInTheDocument();
    const textSection = screen.getByTestId("text-section");
    expect(textSection).toBeInTheDocument();
  });
  test("should render buttons to save and load", () => {
    render(
      <Provider store={store}>
        <CellList />
      </Provider>,
    );
    const saveButton = screen.getByText(/save current cells/i);
    expect(saveButton).toBeInTheDocument();
    const loadButton = screen.getByText(/load from file/i);
    expect(loadButton).toBeInTheDocument();
  });
  test("should render 3 sections to add code cells", () => {
    render(
      <Provider store={store}>
        <CellList />
      </Provider>,
    );
    const addCellSections = screen.queryAllByTestId("add-cell");
    expect(addCellSections).toHaveLength(3);
  });
});

describe("CellList component without initial cells", () => {
  let store;
  beforeEach(() => {
    store = mockStore(emptyInitialState);
    store.dispatch = jest.fn();
  });

  test("should render component with no cells and exactly one add-cell button", () => {
    render(
      <Provider store={store}>
        <CellList />
      </Provider>,
    );
    const codeSection = screen.queryByTestId("code-section");
    expect(codeSection).toEqual(null);
    const textSection = screen.queryByTestId("text-section");
    expect(textSection).toEqual(null);
  });

  test("should render 1 section to add code cells", () => {
    render(
      <Provider store={store}>
        <CellList />
      </Provider>,
    );
    const addCellSections = screen.queryAllByTestId("add-cell");
    expect(addCellSections).toHaveLength(1);
  });
});
