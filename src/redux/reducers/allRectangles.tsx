import React from "react";

export interface Rectangle {
  id: string;
  fillColor: string;
  x: string;
  y: string;
  width: string;
  height: string;
}

const allRectangles = (
  state: Rectangle[] = [],
  action: {
    type: string;
    payload: {
      newRectangle: Rectangle;
      newList: Rectangle[];
    };
  }
) => {
  switch (action.type) {
    case "add-rectangle":
      return (state = [...state, action.payload.newRectangle]);
    case "new-list-rectangle":
      state = action.payload.newList;
      return state;
    default:
      return state;
  }
};

export default allRectangles;
