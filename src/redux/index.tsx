import React from "react";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import allCircles from "./reducers/allCircles";
import allRectangles from "./reducers/allRectangles";
import allLines from "./reducers/allLines";

const allReducers = combineReducers({
  allCircles,
  allRectangles,
  allLines,
});

const store = createStore(allReducers, composeWithDevTools());
export type RootState = ReturnType<typeof allReducers>;

export default store;
