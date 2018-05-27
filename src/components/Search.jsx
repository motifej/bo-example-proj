import React from "react";
import { Redirect } from "react-router";
import FormTemplate from "../bo-shared-components/src/ui/Form";
import DefaultTable from "../bo-shared-components/src/ui/Table/default-table";
import store from "../store";
import history from "../history";

const config = {
    name: "searchUsers",
    formInputs: [
        {
            name: "first_name",
            value: "first_name",
            label: "First Name"
        },
        {
            name: "last_name",
            value: "last_name"
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
