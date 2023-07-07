import { useTypedSelector } from "./useTypedSelector";

const initReactImport = `
import _React from 'react';
import _ReactDOM from 'react-dom';
`;

const initShowFunction = `
  var show = value => {
    const root = document.querySelector('#root');
    if (typeof value === 'object') {
      if (value.$$typeof && value.props) {
        _ReactDOM.render(value, root)
      } else {
        root.innerHTML = JSON.stringify(value);
        return;
      }
    } else {
      root.innerHTML = value;
    }
  }
`;

const showFuncNoop = `var show = () => {}`;

export const useCumulativeCode = (cellId: string) => {
  return useTypedSelector((state) => {
    const { data, order } = state.cells;
    const orderedCells = order.map((id) => data[id]);
    const cumulativeCode = [initReactImport];
    for (const currentCell of orderedCells) {
      if (currentCell.type === "code") {
        if (currentCell.id === cellId) {
          cumulativeCode.push(initShowFunction);
        } else {
          cumulativeCode.push(showFuncNoop);
        }
        cumulativeCode.push(currentCell.content);
      }
      if (currentCell.id === cellId) {
        break;
      }
    }

    return cumulativeCode;
  }).join("\n");
};
