import React from "react";
import { render } from "react-dom";
import { ControlledForm, NewWrapped } from "./ui/Form";

const App = () => {
    return (
        <div>
            <ControlledForm />
            <NewWrapped />
        </div>
    );
};

window.onload = () => {
    render(<App />, document.getElementById("root"));
};

// const config = {
//     formName: "search-users",
//     onSubmit: e => {
//         e.preventDefault();
//         console.log("e", e);
//     },
//     inputs: [
//         {
//             config: {
//                 placeholder: "Im TextField"
//             }
//         },
//         {
//             config: {
//                 label: "Im TextField"
//             }
//         }
//     ]
// };

// const About = () => CreateForm(config);
