import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import ActionBar from "./ActionBar";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);
describe("ActionBar component", () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn();
  });

  test('should call moveCell function with "up" when up button is clicked', () => {
    render(
      <Provider store={store}>
        <ActionBar id={5} />
      </Provider>,
    );

    const button = screen.getByRole("button", {
      name: /move cell up/i,
    });
    fireEvent.click(button);

    expect(store.dispatch).toHaveBeenCalledWith({
      payload: { direction: "up", id: 5 },
      type: "move_cell",
    });
  });

  test('should call moveCell function with "down" when down button is clicked', () => {
    render(
      <Provider store={store}>
        <ActionBar id={5} />
      </Provider>,
    );

    const button = screen.getByRole("button", {
      name: /move cell down/i,
    });
    fireEvent.click(button);

    expect(store.dispatch).toHaveBeenCalledWith({
      payload: { direction: "down", id: 5 },
      type: "move_cell",
    });
  });

  test("should call deleteCell function when delete button is clicked", () => {
    render(
      <Provider store={store}>
        <ActionBar id={5} />
      </Provider>,
    );

    const button = screen.getByRole("button", {
      name: /delete cell/i,
    });
    fireEvent.click(button);

    expect(store.dispatch).toHaveBeenCalledWith({
      payload: 5,
      type: "delete_cell",
    });
  });
});
