import React, { FC, useRef } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../redux/index";

import { Circle } from "../redux/reducers/allCircles";
import { Rectangle } from "../redux/reducers/allRectangles";
import { Line } from "../redux/reducers/allLines";

import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const ShapeAccordion: FC<ReduxProps> = ({
  id,
  type,
  number,
  allCircles,
  newCircleList,
  allRectangles,
  newRectangleList,
  allLines,
  newLineList,
}) => {
  const arrowRef = useRef<HTMLDivElement>(null);
  const circleSettings = useRef<HTMLDivElement>(null);
  const rectangleSettings = useRef<HTMLDivElement>(null);
  const lineSettings = useRef<HTMLDivElement>(null);

  const onClickAccordion = () => {
    circleSettings.current?.classList.toggle("active");
    rectangleSettings.current?.classList.toggle("active");
    lineSettings.current?.classList.toggle("active");
    arrowRef.current?.classList.toggle("active");
  };

  const saveCircle = () => {
    let values: string[] = [];
    let newList = allCircles.filter((circle) => circle.id !== id);
    const inputs = circleSettings.current?.querySelectorAll("input");
    inputs?.forEach((input) => {
      values.push(input.value);
    });

    newCircleList([
      ...newList,
      {
        id,
        fillColor: values[0],
        left: values[1],
        top: values[2],
        width: `${String(parseInt(values[3]) * 2)}px`,
        height: `${String(parseInt(values[3]) * 2)}px`,
      },
    ]);
  };

  const saveRectangle = () => {
    let values: string[] = [];
    let newList = allRectangles.filter((rectangle) => rectangle.id !== id);
    const inputs = rectangleSettings.current?.querySelectorAll("input");
    inputs?.forEach((input) => {
      values.push(input.value);
    });

    newRectangleList([
      ...newList,
      {
        id,
        fillColor: values[0],
        x: `${values[1]}px`,
        y: `${values[2]}px`,
        width: `${values[3]}px`,
        height: `${values[4]}px`,
      },
    ]);
  };

  const saveLine = () => {
    let values: string[] = [];
    let newList = allLines.filter((line) => line.id !== id);
    const inputs = lineSettings.current?.querySelectorAll("input");
    inputs?.forEach((input) => {
      values.push(input.value);
    });

    newLineList([
      ...newList,
      {
        id,
        fillColor: values[0],
        x: `${values[1]}px`,
        y: `${values[2]}px`,
        width: `${values[3]}px`,
        height: `${values[4]}px`,
        angle: `${values[5]}deg`,
      },
    ]);
  };

  switch (type) {
    case "circle":
      return (
        <div className="accordion">
          <div className="title-container">
            <h4>{`Circle${number}`}</h4>
            <div
              ref={arrowRef}
              className="arrow-icon"
              onClick={onClickAccordion}
            >
              <Icon icon={faChevronUp} />
            </div>
          </div>

          <div className="accordion-settings" ref={circleSettings}>
            <input type="text" placeholder="Fill Color" />
            <input type="text" placeholder="X" />
            <input type="text" placeholder="Y" />
            <input type="text" placeholder="Radius" />

            <button className="save-settings" onClick={saveCircle}>
              Save
            </button>
          </div>
        </div>
      );
    case "rectangle":
      return (
        <div className="accordion">
          <div className="title-container">
            <h4>{`Rectangle${number}`}</h4>
            <div
              ref={arrowRef}
              className="arrow-icon"
              onClick={onClickAccordion}
            >
              <Icon icon={faChevronUp} />
            </div>
          </div>

          <div className="accordion-settings" ref={rectangleSettings}>
            <input type="text" placeholder="Fill Color" />
            <input type="text" placeholder="X" />
            <input type="text" placeholder="Y" />
            <input type="text" placeholder="Width" />
            <input type="text" placeholder="Height" />

            <button className="save-settings" onClick={saveRectangle}>
              Save
            </button>
          </div>
        </div>
      );
    default:
      return (
        <div className="accordion">
          <div className="title-container">
            <h4>{`Line${number}`}</h4>
            <div
              ref={arrowRef}
              className="arrow-icon"
              onClick={onClickAccordion}
            >
              <Icon icon={faChevronUp} />
            </div>
          </div>

          <div className="accordion-settings" ref={lineSettings}>
            <input type="text" placeholder="Color" />
            <input type="text" placeholder="X" />
            <input type="text" placeholder="Y" />
            <input type="text" placeholder="Width" />
            <input type="text" placeholder="Height" />
            <input type="text" placeholder="Angle" />

            <button className="save-settings" onClick={saveLine}>
              Save
            </button>
          </div>
        </div>
      );
  }
};

const mapStateToProps = (
  state: RootState,
  ownProps: { id: string; type: string; number: number }
) => {
  const { id, type, number } = ownProps;
  const { allCircles, allRectangles, allLines } = state;

  return {
    id,
    type,
    number,
    allCircles,
    allRectangles,
    allLines,
  };
};

const mapDispatchToProps = {
  newCircleList: (newList: Circle[]) => {
    return {
      type: "new-list-circle",
      payload: {
        newList,
      },
    };
  },
  newRectangleList: (newList: Rectangle[]) => {
    return {
      type: "new-list-rectangle",
      payload: {
        newList,
      },
    };
  },
  newLineList: (newList: Line[]) => {
    return {
      type: "new-list-line",
      payload: {
        newList,
      },
    };
  },
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;

export default connector(ShapeAccordion);
