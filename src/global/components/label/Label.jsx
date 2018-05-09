import React from "react";

const Label = ({ id, text, htmlAttribute, required }) => {
    const labelStyle = "f6 fw4 b db blue dib";
    return (
        <label id={id} className={labelStyle} htmlFor={htmlAttribute}>
            {required ? `${text}*` : `${text}`}
        </label>
    );
};

export default Label;
