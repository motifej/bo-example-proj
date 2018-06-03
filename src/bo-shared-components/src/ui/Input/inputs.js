import React from "react";
import Input from "material-ui/Input";
import TextField from "material-ui/TextField";

export const Default = props => {
    return <Input {...props.config} />;
};

export const Disabled = props => (
    <Input
        value="Disabled"
        disabled
        inputProps={{
            "aria-label": "Description"
        }}
        {...props.config}
    />
);

export const CreateTextField = props => {
    return (
        <TextField
            {...props}
            value={props.value}
            onChange={e => props.onChange(e)}
        />
    );
};

/* more here https://material-ui-next.com/demos/text-fields/ */
