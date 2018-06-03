import React from "react";
import { reduxForm } from "redux-form";
import withStyles from "material-ui/styles/withStyles";

import { generateInputs } from "./utils";
import GridContainer from "../Grid/GridContainer.jsx";

import userSearchFormStyle from "./style.jsx";

const Form = props => {
    const { name, onSubmit, inputs, classes } = props;
    return (
        <form name={name} onSubmit={onSubmit}>
            <GridContainer className={classes.container}>
                {generateInputs(inputs, classes)}
                <button type="submit">send</button>
            </GridContainer>
        </form>
    );
};

const FormTemplate = props => {
    const {
        config,
        pristine,
        reset,
        submitting,
        handleSubmit,
        classes
    } = props;
    return (
        <Form
            name={config.name}
            onSubmit={handleSubmit}
            inputs={config.formInputs}
            classes={classes}
        />
    );
};

export default reduxForm({
    form: "SearchForm",
    destroyOnUnmount: false
})(withStyles(userSearchFormStyle)(FormTemplate));
