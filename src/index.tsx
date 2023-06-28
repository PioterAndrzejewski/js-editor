import ReactDOM from "react-dom";
import CodeSection from "./components/CodeSection";
import Editor from "./components/MD-editor";
import "bulmaswatch/slate/bulmaswatch.min.css";
import "./index.css";

const App = () => {
  return (
    <div>
      {/* <CodeSection /> */}
      <Editor />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
