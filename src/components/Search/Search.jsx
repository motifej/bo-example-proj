import React from "react";
import withStyles from "material-ui/styles/withStyles";
import { Redirect } from "react-router";
import FormTemplate from "../../bo-shared-components/src/ui/Form";
import GridContainer from "../../bo-shared-components/src/ui/Grid/GridContainer";
import ItemGrid from "../../bo-shared-components/src/ui/Grid/ItemGrid";
import HeaderCard from "../../bo-shared-components/src/ui/Cards/HeaderCard";
import history from "../../history";

import config from "./config";
import searchFormStyle from "./style";

const showResults = values => {
    history.push("/results");
};

const clearResults = () => {};

const content = <FormTemplate config={config} onSubmit={showResults} />;
const SearchForm = props => {
    const { classes } = props;
    return (
        <div className={classes.wrapper}>
        <GridContainer className={classes.container}>
            <ItemGrid xs={12} sm={12} md={12}>
                <HeaderCard
                    cardTitle="Customers Search"
                    headerColor="blue"
                    content={content}
                />
            </ItemGrid>
        </GridContainer>
            </div>
    );
};
export default withStyles(searchFormStyle)(SearchForm);
