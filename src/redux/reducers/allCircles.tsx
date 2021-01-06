import React from "react";

export interface Circle {
  id: string;
  fillColor: string;
  left: string;
  top: string;
  width: string;
  height: string;
}

const allCircles = (
  state: Circle[] = [],
  action: {
    type: string;
    payload: {
      newCircle: Circle;
      newList: Circle[];
    };
  }
) => {
  switch (action.type) {
    case "add-circle":
      return (state = [...state, action.payload.newCircle]);
    case "new-list-circle":
      state = action.payload.newList;
      return state;
    default:
      return state;
  }
};

export default allCircles;
