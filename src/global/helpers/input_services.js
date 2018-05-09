//@flow

import React from "react";
import Input from "../components/input/Input";
import Select from "../components/select_dropdown/Select";
import Button from "../components/button/index";

export const buildSearchQuery = (inputs: Array<Object>) => {
    let query = "";
    inputs.forEach(element => {
        element.type === "checkbox" && element.name === "test"
            ? (query += `${element.name}=${element.checked ? 0 : 1}&`)
            : element.type === "checkbox" && element.name != "test"
              ? (query += `${element.name}=${element.checked ? 1 : 0}&`)
              : element.type === "date"
                ? (query += `${element.name}=${Date.parse(element.value)}&`)
                : (query += `${element.name}=${element.value}&`);
    });

    return query;
};

export const filterEmptyInputs = (elements: Array<Object>) => {
    return elements.filter(
        element =>
            (element.type != "checkbox" && element.value != "") ||
            (element.type === "checkbox" && element.checked)
    );
};

export const buildBodyData = (inputs: Array<Object>) => {
    let bodyData = {};
    inputs.forEach(element => {
        element.type === "checkbox"
            ? (bodyData[element.name] = element.checked)
            : element.type === "date"
              ? (bodyData[element.name] = Date.parse(element.value))
              : (bodyData[element.name] = element.value);
    });
    return bodyData;
};

export const filterObjByType = (list: Array<Object>, filter: string) =>
    list.filter(obj => obj.type === filter);

export const filterObjByName = (list: Array<Object>, filter: string) =>
    list.filter(obj => filter.indexOf(obj.name) != -1);

export const removeObjFromList = (list: Array<Object>, filter: string) =>
    list.filter(obj => filter.indexOf(obj.name) === -1);

export const mapObj = (data: Array<Object>) =>
    data.map((obj, index) => {
        return obj.elementType === "Text Area" ? (
            <textarea
                name={obj.name}
                form={obj.form}
                placeholder={obj.placeholder}
                defaultValue={obj.defaultValue}
                required={obj.required}
            />
        ) : obj.type === "select" ? (
            <Select
                id={obj.inputId}
                key={index}
                labelId={obj.labelId}
                title={obj.title}
                name={obj.name}
                options={obj.options}
                multi={obj.multi}
            />
        ) : obj.type.includes("Button") ? (
            <Button
                id={obj.buttonId}
                key={index}
                text={obj.text}
                type={obj.type}
            />
        ) : (
            <Input
                inputId={obj.inputId}
                labelId={obj.labelId}
                key={index}
                name={obj.name}
                label={obj.label}
                type={obj.type}
                value={obj.value}
                checked={obj.checked}
                labelStyle={obj.labelStyle}
                minlength={obj.minlength}
                disabled={obj.disabled}
                autocomplete={obj.autocomplete}
                onChange={obj.onChange}
                placeholder={obj.placeholder}
                required={obj.required}
                step={obj.step}
            />
        );
    });
