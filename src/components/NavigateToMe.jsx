import React from "react";

const NavigateToMe = ({ goBack }) => {
    return (
        <div>
            Navigated to Me
            <button onClick={goBack}>go back</button>
        </div>
    );
};

export default NavigateToMe;
