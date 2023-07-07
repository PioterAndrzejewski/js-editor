import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./state";
import CellList from "./components/CellList";
import CodeSection from "./components/CodeSection";
import Editor from "./components/TextEditor";
import "bulmaswatch/slate/bulmaswatch.min.css";
import "./index.css";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <CellList />
        {/* <Editor />
        <CodeSection /> */}
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
