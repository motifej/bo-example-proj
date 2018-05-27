import React from "react";
import { connect } from "react-redux";
import DefaultTable from "../bo-shared-components/src/ui/Table/default-table";

const config = {
    domain: "http://almond:8081",
    endPoint: "/accounts",
    resultsHeader: [
        {
            value: "id",
            name: "Id"
        },
        {
            value: "first_name",
            name: "First Name"
        },
        {
            value: "last_name",
            name: "Last Name"
        }
    ]
};

const Results = props => {
    return (
        <div>
            <DefaultTable state={props.state} header={config.resultsHeader} />
        </div>
    );
};

const mapStateToProps = state => ({
    state: state.form.SearchForm
});

export default connect(mapStateToProps)(Results);
