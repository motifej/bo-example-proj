import React from "react";
import { mapObj } from "./input_services";

const createForm = (formName, onFormSubmit, formInputs) => {
    return (
        <section className="mw6 center w-100 pt2 relative">
            <form name={formName} onSubmit={onFormSubmit}>
                {mapObj(formInputs)}
            </form>
        </section>
    );
};

export default createForm;
