import React from "react";
import "./styles/index.css";
import { Provider } from "react-redux";
import store from "./redux/index";

import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
      ;
    </Provider>
  );
}

export default App;
