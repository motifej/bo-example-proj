import React from "react";
import { render } from "react-dom";

import {
    RaisedPrimaryBtn,
    RaisedDefaultBtn,
    RaisedSecondaryBtn,
    RaisedDsiabledBtn,
    FlatDefaultBtn,
    FlatPrimaryBtn,
    FlatSecondaryBtn,
    FlatDsiabledBtn
} from "./bo-shared-components/src/ui/Button/index.js";

import {
    DisabledInput,
    DefaultInput,
    TextField
} from "./bo-shared-components/src/ui/Input";

import { BuildDefaultTable } from "./bo-shared-components/src/ui/Table";

const TableConfig = {
    domain: "http://almond:8081",
    endPoint: "/accounts",
    header: [
        {
            value: "id",
            name: "Id"
        },
        {
            value: "first_name",
            name: "First Name"
        }
    ]
};

const UsersTable = BuildDefaultTable(TableConfig);

const App = () => {
    return (
        <div>
            <RaisedPrimaryBtn />
            <RaisedDefaultBtn />
            <RaisedSecondaryBtn />
            <RaisedDsiabledBtn />
            <FlatDefaultBtn />
            <FlatPrimaryBtn />
            <FlatSecondaryBtn />
            <FlatDsiabledBtn />
            <DisabledInput />
            <DefaultInput />
            <TextField />
            <UsersTable />
        </div>
    );
};
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development")
    render(<App />, document.getElementById("app"));

export default {
    show: props => {
        return ReactDOM.render(<App />, document.getElementById("app"));
    }
};
