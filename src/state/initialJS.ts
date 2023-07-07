export const initialJS = [
  `const HelloWorld = () => <h2>Hello world!</h2>`,
  `const App = () => {
  return (
    <div style={wrapperStyle}>
      <HelloWorld />
    </div>
  );
};

const wrapperStyle = {
  border: "1px solid black",
  borderRadius: "5px",
  padding: "10px",
  textAlign: "center",
  fontFamily: "Calibri, sans-serif"
}`,
  `//every next code cell bundles code from all above
import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(<App />, document.querySelector("#root"));`,
];
