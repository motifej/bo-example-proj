//@flow

type Props = {
    id: string,
    message: string,
    costumWrapperStyle: string,
    costumTextStyle: string
};
import React from "react";

const Message = (props: Props) => {
    const { id, message, costumWrapperStyle, costumTextStyle } = props;
    const wrapperStyle = costumWrapperStyle || "center pt7";
    const textStyle = costumTextStyle || "tc mt6";
    return (
        <div className={wrapperStyle}>
            <div id={id} className={textStyle}>
                {message}
            </div>
        </div>
    );
};

export default Message;
