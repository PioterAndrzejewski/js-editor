export const initialJS = `import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div style={wrapperStyle}>
      <h2>Hello world!</h2>
    </div>
  );
};

const wrapperStyle = {
  border: "1px solid black",
  borderRadius: "5px",
  padding: "10px",
  textAlign: "center",
  fontFamily: "Calibri, sans-serif"
}

ReactDOM.render(<App />, document.querySelector("#root"));`;
