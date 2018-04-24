import React from "react";
import { render } from "react-dom";
import App from "./App.jsx";

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development")
    render(<App />, document.getElementById("root"));

export default {
    show: props => {
        return ReactDOM.render(<App />, document.getElementById("root"));
    }
};
