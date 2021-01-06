import "../styles/index.css";
import { Provider } from "react-redux";
import store from "../redux/index";

import ShapeAccordion from "../components/ShapeAccordion";
import SidePanel from "../components/SidePanel";

const story = {
  title: "SVG",
};

export default story;

export const ShapeSettings = () => {
  return (
    <Provider store={store}>
      <ShapeAccordion id="243" number={1} type="rectangle" />;
    </Provider>
  );
};

export const Panel = () => {
  return (
    <Provider store={store}>
      <SidePanel />
    </Provider>
  );
};
