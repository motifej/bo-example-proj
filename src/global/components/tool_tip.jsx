import React from "react";
import ReactTooltip from "react-tooltip";

const ToolTip = ({ ...props }) => {
    const { id, renderOnHover, render, type, wrapperStyle } = props;
    return (
        <div className={wrapperStyle}>
            <a data-tip data-for={id}>
                {render}
            </a>
            <ReactTooltip id={id} type={type}>
                <span>{!renderOnHover ? "-" : renderOnHover}</span>
            </ReactTooltip>
        </div>
    );
};

export default ToolTip;
