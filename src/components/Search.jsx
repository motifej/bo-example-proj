import React from "react";
import withStyles from "material-ui/styles/withStyles";
import { Redirect } from "react-router";
import userSearchFormStyle from "../bo-shared-components/src/ui/Form/style";
import FormTemplate from "../bo-shared-components/src/ui/Form";
import DefaultTable from "../bo-shared-components/src/ui/Table/default-table";
import history from "../history";

const config = {
    name: "searchUsers",
    formInputs: [
        {
            name: "id",
            type: "text",
            grid: {
                label: {
                    xs: 12,
                    ms: 2
                },
                field: {
                    xs: 12,
                    ms: 9
                }
            },
            label: "Id"
        },
        {
            name: "number",
            type: "number",
            grid: {
                label: {
                    xs: 12,
                    ms: 2
                },
                field: {
                    xs: 12,
                    ms: 9
                }
            },
            label: "Number"
        },
        {
            name: "email", // name must be uniqe
            type: "email",
            grid: {
                label: {
                    xs: 12,
                    ms: 2
                },
                field: {
                    xs: 12,
                    ms: 9
                }
            },
            label: "Email"
        },
        {
            name: "isHasDeposit",
            type: "checkbox",
            grid: {
                label: {
                    xs: 12,
                    ms: 2
                },
                field: {
                    xs: 12,
                    ms: 9
                }
            },
            label: "Im checkbox"
        },
        {
            name: "countries",
            type: "select",
            grid: {
                label: {
                    xs: 12,
                    ms: 2
                },
                field: {
                    xs: 12,
                    ms: 9
                }
            },
            label: "Im selectbox",

            options: [
                {
                    primaryText: "A",
                    value: "A"
                },
                {
                    primaryText: "B",
                    value: "B"
                },
                {
                    primaryText: "C",
                    value: "C"
                }
            ]
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

// {
//     name: "countries",
//     type: "multiSelect",
//     options: [
//         {
//             primaryText: "A",
//             value: "A"
//         },
//         {
//             primaryText: "B",
//             value: "B"
//         },
//         {
//             primaryText: "C",
//             value: "C"
//         }
//     ]
// }
