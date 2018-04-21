import React from "react";
import Wanted from "./pub/index.html";

function createMarkup() {
    return { __html: Wanted };
}
const Navigation = () => {
    return (
        <div>
            <div dangerouslySetInnerHTML={createMarkup()} />
        </div>
    );
};

export default Navigation;
