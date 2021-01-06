import React, { FC, useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../redux/index";

import { Rectangle } from "../redux/reducers/allRectangles";
import { Circle } from "../redux/reducers/allCircles";
import { Line } from "../redux/reducers/allLines";

import ShapeAccordion from "./ShapeAccordion";

import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faSquareFull,
  faRulerHorizontal,
} from "@fortawesome/free-solid-svg-icons";

const SidePanel: FC<ReduxProps> = ({
  allCircles,
  addCircle,
  allRectangles,
  addRectangle,
  allLines,
  addLine,
}) => {
  const onAddCircle = () => {
    addCircle({
      newCircle: {
        id: String(Math.random()),
        fillColor: "blue",
        left: "250px",
        top: "200px",
        width: "120px",
        height: "120px",
      },
    });
  };

  const onAddRectangle = () => {
    addRectangle({
      newRectangle: {
        id: String(Math.random()),
        fillColor: "red",
        x: "100px",
        y: "100px",
        width: "100px",
        height: "100px",
      },
    });
  };

  const onAddLine = () => {
    addLine({
      newLine: {
        id: String(Math.random()),
        fillColor: "green",
        x: "200px",
        y: "250px",
        width: "250px",
        height: "5px",
        angle: "25deg",
      },
    });
  };

  return (
    <div className="side-panel">
      <div className="add-shape--container">
        <Icon
          className="add-shape--icon"
          icon={faCircle}
          onClick={onAddCircle}
        />
        <Icon
          className="add-shape--icon"
          icon={faSquareFull}
          onClick={onAddRectangle}
        />
        <Icon
          className="add-shape--icon"
          icon={faRulerHorizontal}
          onClick={onAddLine}
        />
      </div>

      {allCircles.map((circle, i) => (
        <ShapeAccordion
          key={circle.id}
          id={circle.id}
          type="circle"
          number={i}
        />
      ))}

      {allRectangles.map((rectangle, i) => (
        <ShapeAccordion
          key={rectangle.id}
          id={rectangle.id}
          type="rectangle"
          number={i}
        />
      ))}

      {allLines.map((line, i) => (
        <ShapeAccordion key={line.id} id={line.id} type="line" number={i} />
      ))}
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  const { allCircles, allRectangles, allLines } = state;

  return {
    allCircles,
    allRectangles,
    allLines,
  };
};

const mapDispatchToProps = {
  addCircle: (payload: { newCircle: Circle }) => {
    return {
      type: "add-circle",
      payload,
    };
  },
  addRectangle: (payload: { newRectangle: Rectangle }) => {
    return {
      type: "add-rectangle",
      payload,
    };
  },
  addLine: (payload: { newLine: Line }) => {
    return {
      type: "add-line",
      payload,
    };
  },
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;

export default connector(SidePanel);
