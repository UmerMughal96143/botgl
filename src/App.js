import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import "./index.css";


const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
