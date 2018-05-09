//@flow

type Props = {
    inputId: string,
    labelId: string,
    name: string,
    type: string,
    label: string,
    value: string,
    defaultValue: string,
    placeholder: string,
    checked: boolean,
    disabled: boolean,
    required: boolean,
    minlength: number,
    autocomplete: string,
    min: number,
    max: number,
    pattern: string,
    step: string,
    onChange: Function
};
import React from "react";
import Label from "../label/Label.jsx";

const Input = (props: Props) => {
    const {
        inputId,
        labelId,
        name,
        type,
        label,
        value,
        defaultValue,
        placeholder,
        checked,
        disabled,
        required,
        max,
        step,
        pattern,
        min,
        onChange,
        minlength,
        autocomplete,
        onKeyPress
    } = props;
    const inputStyle =
        "input-reset bn bg-transparent b--black-20 pa1 w-100 br2 dib";
    return (
        <div>
            {labelId ? (
                <Label
                    id={labelId}
                    htmlAttribute={name}
                    text={label}
                    required={required}
                />
            ) : null}
            <input
                id={inputId}
                name={name}
                type={type}
                value={value}
                defaultValue={defaultValue}
                defaultChecked={checked}
                className={inputStyle}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                step={step}
                onKeyPress={onKeyPress}
                required={required}
                minLength={minlength}
                autoComplete={autocomplete}
                pattern={pattern}
                min={min}
                max={max}
            />
        </div>
    );
};

export default Input;
