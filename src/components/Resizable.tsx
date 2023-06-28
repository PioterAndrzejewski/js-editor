import { useEffect, useState } from "react";
import { ResizableBox, ResizableBoxProps } from "react-resizable";
import "./resizable.css";

interface ResizableProps {
  direction: "horizontal" | "vertical";
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    let timer: any;
    const listener = () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        setInnerWidth(window.innerWidth);
        setInnerHeight(window.innerHeight);
        if (window.innerWidth * 0.9 < width) {
          setWidth(window.innerWidth * 0.9);
        }
      }, 50);
    };
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, []);

  let resizableProps: ResizableBoxProps;
  if (direction === "horizontal") {
    resizableProps = {
      height: Infinity,
      width: width,
      resizeHandles: ["e"],
      maxConstraints: [innerWidth * 0.9, Infinity],
      minConstraints: [innerWidth * 0.2, Infinity],
      className: "resize-horizontal",
      onResizeStop: (e, data) => {
        setWidth(data.size.width);
      },
    };
  } else {
    resizableProps = {
      height: 300,
      width: Infinity,
      resizeHandles: ["s"],
      maxConstraints: [Infinity, innerHeight * 0.9],
      minConstraints: [Infinity, 120],
      className: "resize-vertical",
    };
  }

  return <ResizableBox {...resizableProps}>{children}</ResizableBox>;
};

export default Resizable;
