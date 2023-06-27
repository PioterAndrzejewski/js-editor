import ReactDOM from "react-dom";
import CodeSection from "./components/CodeSection";
import "bulmaswatch/slate/bulmaswatch.min.css";

const App = () => {
  return (
    <div>
      <CodeSection />
      <CodeSection />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
