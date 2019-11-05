import React from "react";
import ReactDOM from "react-dom";

import App from "./app";
import DataProvider from "./utils/DataProvider";
import Api from "./utils/Api";

import * as serviceWorker from "./serviceWorker";

import "@fortawesome/fontawesome-free/css/all.min.css";

const NuBoxx = props => (
  <DataProvider>
    <App />
  </DataProvider>
);

ReactDOM.render(<NuBoxx />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
