import React from "react";
import ItemGrid from "../Grid/ItemGrid.jsx";
import FormLabel from "material-ui/Form/FormLabel";
import { Field } from "redux-form";
import MenuItem from "material-ui/Menu/MenuItem";
import { Checkbox, SelectField, TextField } from "./inputs/";

const Inputs = {
    text: TextField,
    number: TextField,
    email: TextField,
    checkbox: Checkbox,
    select: SelectField
};

export const buildQuery = filterd => {
    let query = "";
    Object.entries(filterd).forEach(([key, value]) => {
        query += `${key}=${value}&`;
    });
    return query;
};

export const generateInputs = (inputs, classes) =>
    inputs.map(
        (input, index) =>
            input.type === ("select" || "multiSelect")
                ? createSelectInput(input, index, classes)
                : createInput(input, index, classes)
    );

const createInput = (input, index, classes) => (
    <React.Fragment key={index}>
        <ItemGrid xs={input.grid.label.xs} sm={input.grid.label.sm}>
            <FormLabel className={classes && classes.labelHorizontal}>
                {input.label}
            </FormLabel>
        </ItemGrid>
        <ItemGrid xs={input.grid.field.xs} sm={input.grid.field.sm}>
            <Field
                key={index}
                name={input.name}
                type={input.type}
                component={Inputs[input.type]}
            />
        </ItemGrid>
    </React.Fragment>
);

const createSelectInput = (input, index, classes) => {
    return (
        <React.Fragment key={index}>
            <FormLabel className={classes && classes.labelHorizontal}>
                {input.label}
            </FormLabel>
            <Field
                key={index}
                name={input.name}
                type={input.type}
                component={SelectField}
                placeholder={input.placeholder}
                format={value => (Array.isArray(value) ? value : value || "")}
                multiple={input.multiple}
            >
                {input.options.map((option, index) => {
                    return (
                        <MenuItem key={index} value={option.value}>
                            {option.primaryText}
                        </MenuItem>
                    );
                })}
            </Field>
        </React.Fragment>
    );
};
