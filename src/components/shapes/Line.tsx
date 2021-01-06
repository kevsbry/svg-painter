import React, { FC } from "react";
import { ShapeProps } from "./Circle";

const Line: FC<ShapeProps & { angle: string }> = ({
  width,
  height,
  left,
  top,
  fill,
  angle,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        width,
        height,
        left,
        top,
        background: fill,
        transform: `rotate(${angle})`,
      }}
    ></div>
  );
};

export default Line;
