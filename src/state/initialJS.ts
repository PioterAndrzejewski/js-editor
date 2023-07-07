export const initialJS = [
  `
const HelloWorld = () => <h2>Hello world!</h2>
show('editor has build-in show() function to preview something')`,
  `
  const App = () => {
  return (
    <div style={wrapperStyle}>
      <HelloWorld />
    </div>
  )};

  show(<HelloWorld />);

  const wrapperStyle = {
  border: "1px solid black",
  borderRadius: "5px",
  padding: "10px",
  textAlign: "center",
  fontFamily: "Calibri, sans-serif"
}`,
  `//every next code cell bundles code from all above
show(<App />)`,
];
