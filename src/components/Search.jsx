import React from "react";
import { Redirect } from "react-router";
import FormTemplate from "../bo-shared-components/src/ui/Form";
import DefaultTable from "../bo-shared-components/src/ui/Table/default-table";
import history from "../history";

const config = {
    name: "searchUsers",
    formInputs: [
        {
            name: "id",
            type: "text"
        },
        {
            name: "number",
            type: "number"
        },
        {
            name: "email", // name must be uniqe
            type: "email"
        },
        {
            name: "isHasDeposit",
            type: "checkbox",
            label: "wo"
        }
    ]
};

const ShowResults = values => {
    history.push("/results");
};

const Form = () => <FormTemplate config={config} onSubmit={ShowResults} />;

export default Form;

// domain: "http://almond:8081",
// endPoint: "/accounts?p_count",
