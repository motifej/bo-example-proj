import React from "react";
import { connect } from "react-redux";
import { BuildDefaultTable } from "../bo-shared-components/src/ui/Table/index";
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
        },
        {
            value: "time_stamp",
            name: "Registration Time"
        },
        {
            value: "status",
            name: "Status"
        },
        {
            value: "a_purchased_tokens",
            name: "Purchased Tokens"
        },
        {
            value: "a_bonus_tokens",
            name: "Bonus Tokens"
        },
        {
            value: "a_normalized_amount_eth",
            name: "Cont. Amount(ETH)"
        },
        {
            value: "a_normalized_amount_usd",
            name: "Cont. Amount(USD)"
        },
        {
            value: "email",
            name: "Email"
        },
        {
            value: "country_iso",
            name: "Country"
        },
        {
            value: "tracking_id",
            name: "Referred By"
        },
        {
            value: "marketer",
            name: "Marketer"
        },
        {
            value: "kyc_status",
            name: "KYC status"
        }
    ]
};

const Wrapped = BuildDefaultTable(config);
const Results = props => {
    return (
        <div>
            <Wrapped />
        </div>
    );
};

const mapStateToProps = state => ({
    state: state.form.SearchForm
});

export default connect(mapStateToProps)(Results);
