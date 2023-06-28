import { ResizableBox, ResizableBoxProps } from "react-resizable";
import "./resizable.css";
import useWindowSize from "../hooks/handleResize";

interface ResizableProps {
  direction: "horizontal" | "vertical";
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
  const windowSize = useWindowSize();

  let resizableProps: ResizableBoxProps;
  if (direction === "horizontal") {
    resizableProps = {
      height: Infinity,
      width: 300,
      resizeHandles: ["e"],
      maxConstraints: [windowSize.width * 0.95, Infinity],
      minConstraints: [windowSize.width * 0.1, 100],
      className: "resize-horizontal",
    };
  } else {
    resizableProps = {
      height: 300,
      width: Infinity,
      resizeHandles: ["s"],
      maxConstraints: [Infinity, windowSize.height * 0.95],
      minConstraints: [100, windowSize.height * 0.1],
      className: "resize-vertical",
    };
  }

  return <ResizableBox {...resizableProps}>{children}</ResizableBox>;
};

export default Resizable;
