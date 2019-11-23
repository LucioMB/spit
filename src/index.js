import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
//import MenuBody from './menuBody.js';
import Root from "./view/root";

ReactDOM.render(<Root />, document.getElementById("root"));
//<MenuBody />
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
