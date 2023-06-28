import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./state";
import CodeSection from "./components/CodeSection";
import Editor from "./components/MD-editor";
import "bulmaswatch/slate/bulmaswatch.min.css";
import "./index.css";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Editor />
        <CodeSection />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
