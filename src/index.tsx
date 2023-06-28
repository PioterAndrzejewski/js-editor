import ReactDOM from "react-dom";
import CodeSection from "./components/CodeSection";
import "bulmaswatch/slate/bulmaswatch.min.css";

const App = () => {
  return (
    <div>
      <CodeSection />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
