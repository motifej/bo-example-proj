//@flow

type Props = {
    id: string,
    text: string,
    costumWrapperStyle: string,
    costumTextStyle: string
};

import React from "react";

const Title = (props: Props) => {
    const { id, text, costumWrapperStyle, costumTextStyle } = props;
    const wrapperStyle = costumWrapperStyle || "pt5 tc mb0";
    const textStyle = costumTextStyle || " fw1 f3 blue ttu";
    return (
        <div className={wrapperStyle}>
            <div id={id} className={textStyle}>
                {text}
            </div>
        </div>
    );
};

export default Title;
