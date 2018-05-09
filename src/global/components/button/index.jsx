//@flow

type Props = {
	id: string,
	btnStyle: string,
	wrapperStyle: string,
	disbaledStyle: string,
	text: string,
	onClick: Function,
	disabled: boolean
};

import React from "react";
import Styles from "./styles.js";

const Button = (props: Props) => {
	const { id, type, text, onClick, disabled } = props;
	const CurrentStyle = Styles[`${type}`] || Styles["Default_Button"];
	return (
		<div className={CurrentStyle.wrapperStyle}>
			<button
				id={id}
				className={
					disabled
						? CurrentStyle.disbaledStyle
						: CurrentStyle.btnStyle
				}
				onClick={onClick}
				disabled={disabled}
			>
				{text}
			</button>
		</div>
	);
};

export default Button;
