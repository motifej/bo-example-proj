import React from "react";
import { render } from "react-dom";
import App from "./App.jsx";

export default {
    show: props => {
        return ReactDOM.render(<App />, document.getElementById("app"));
    }
};
