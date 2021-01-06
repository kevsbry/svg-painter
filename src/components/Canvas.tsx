import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/index";

import Circle from "./shapes/Circle";
import Rectangle from "./shapes/Rectangle";
import Line from "./shapes/Line";

const Canvas = () => {
  let circles = useSelector((state: RootState) => state.allCircles);
  let rectangles = useSelector((state: RootState) => state.allRectangles);
  let lines = useSelector((state: RootState) => state.allLines);

  return (
    <div className="canvas">
      {circles.map((circle) => (
        <Circle
          key={circle.id}
          fill={circle.fillColor}
          height={circle.height}
          width={circle.width}
          left={circle.left}
          top={circle.top}
        />
      ))}

      {rectangles.map((rectangle) => (
        <Rectangle
          key={rectangle.id}
          fill={rectangle.fillColor}
          height={rectangle.height}
          width={rectangle.width}
          left={rectangle.x}
          top={rectangle.y}
        />
      ))}

      {lines.map((line) => (
        <Line
          key={line.id}
          fill={line.fillColor}
          height={line.height}
          width={line.width}
          left={line.x}
          top={line.y}
          angle={line.angle}
        />
      ))}
    </div>
  );
};

export default Canvas;
