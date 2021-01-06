import React, { FC } from "react";

export interface ShapeProps {
  width: string;
  height: string;
  left: string;
  top: string;
  fill: string;
}

const Circle: FC<ShapeProps> = ({ width, height, left, top, fill }) => {
  return (
    <svg
      version="1.1"
      viewBox="0 0 512 512"
      style={{
        width,
        height,
        position: "absolute",
        left,
        top,
        fill,
      }}
    >
      <g>
        <g>
          <path d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z" />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};

export default Circle;
