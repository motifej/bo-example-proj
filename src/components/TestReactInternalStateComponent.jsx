import React from "react";

const TestReactInternalState = ({ changeTruth1, changeTruth }) => {
    return (
        <div>
            <button onClick={changeTruth}>Im changetruth</button>
            <button onClick={changeTruth1}>Im changetruth1</button>
        </div>
    );
};

export default TestReactInternalState;
