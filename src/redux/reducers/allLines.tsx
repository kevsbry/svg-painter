import React from "react";

export interface Line {
  id: string;
  fillColor: string;
  x: string;
  y: string;
  width: string;
  height: string;
  angle: string;
}

const allLines = (
  state: Line[] = [],
  action: {
    type: string;
    payload: {
      newLine: Line;
      newList: Line[];
    };
  }
) => {
  switch (action.type) {
    case "add-line":
      return (state = [...state, action.payload.newLine]);
    case "new-list-line":
      state = action.payload.newList;
      return state;
    default:
      return state;
  }
};

export default allLines;
