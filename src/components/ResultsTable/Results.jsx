import React from "react";
import { connect } from "react-redux";
import { BuildDefaultTable } from "../../bo-shared-components/src/ui/Table/index";
import config from "./config"

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
