import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./state";
import CellList from "./components/CellList";
import "bulmaswatch/slate/bulmaswatch.min.css";
import "./index.css";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <CellList />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
