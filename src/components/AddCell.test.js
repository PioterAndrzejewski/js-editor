import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import AddCell from "./AddCell";
import configureStore from "redux-mock-store";

const mockId = 5;

const mockStore = configureStore([]);
describe("AddCell component", () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn();
  });

  test('should call correct dispatcher function when "add text editor" button is clicked', () => {
    render(
      <Provider store={store}>
        <AddCell id={mockId} />
      </Provider>,
    );

    const button = screen.getByRole("button", {
      name: /text editor/i,
    });
    fireEvent.click(button);

    expect(store.dispatch).toHaveBeenCalledWith({
      payload: { id: mockId, type: "text" },
      type: "insert_cell_after",
    });
  });

  test('should call correct dispatcher function when "add code editor" button is clicked', () => {
    render(
      <Provider store={store}>
        <AddCell id={mockId} />
      </Provider>,
    );

    const button = screen.getByRole("button", {
      name: /code editor/i,
    });
    fireEvent.click(button);

    expect(store.dispatch).toHaveBeenCalledWith({
      payload: { id: mockId, type: "code" },
      type: "insert_cell_after",
    });
  });
});
