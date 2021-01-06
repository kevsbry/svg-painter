import React, { FC } from "react";
import { ShapeProps } from "./Circle";

const Rectangle: FC<ShapeProps> = ({ width, height, left, top, fill }) => {
  return (
    <div
      style={{
        position: "absolute",
        width,
        height,
        left,
        top,
        background: fill,
      }}
    ></div>
  );
};

export default Rectangle;
