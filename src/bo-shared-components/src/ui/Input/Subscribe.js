import React from "react";
import TextField from "material-ui/TextField";

const createInput = props => {
    console.log("props", props);
    return <TextField {...props} />;
};

const Subscribe = Wrapped =>
    class extends React.Component {
        render() {
            console.log("dis", this.props);
            return <Wrapped props={this.props} hello="lol" />;
        }
    };

export default Subscribe;

export const WrappedTextField = Subscribe(createInput);

// autoComplete={config.autoComplete}
// autoFocus={config.autoFocus}
// classes={config.classes}
// className={config.className}
// defaultValue={config.defaultValue}
// disabled={config.disabled}
// disableUnderline={config.disableUnderline}
// endAdornment={config.endAdornment}
// error={config.error}
// fullWidth={config.fullWidth}
// id={config.id}
// inputComponent={config.inputComponent}
// inputProps={config.inputProps}
// label={config.label}
// inputRef={config.inputRef}
// multiline={config.multiline}
// required={config.required}
// name={config.name}
// onChange={config.onChange}
// placeholder={config.placeholder}
// rows={config.rows}
// rowsMax={config.rowsMax}
// margin={config.margin}
// select={config.margin}
// startAdornment={config.startAdornment}
// type={config.type}
// value={config && config.value}
