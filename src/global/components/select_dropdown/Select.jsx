import * as React from "react";
import Select from "react-select";
import Label from "../label/Label.jsx";

class SelectWrapper extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			removeSelectedStatus: true,
			stayOpenStatus: false,
			statusValue: [],
			statusValueNotMulti: ""
		};

		this.handleSelectChange = this.handleSelectChange.bind(this);
		this.toggleCheckbox = this.toggleCheckbox.bind(this);
	}

	render() {
		const {
			stayOpenStatus,
			statusValue,
			removeSelectedStatus,
			statusValueNotMulti
		} = this.state;
		return (
			<div>
				{this.props.labelId && (
					<Label
						text={`Select ${this.props.title}`}
						id={this.props.labelId}
					/>
				)}
				<div>
					<Select
						id={this.props.id}
						name={this.props.name}
						className={this.props.className}
						menuPosition="bottom"
						closeOnSelect={!stayOpenStatus}
						multi={this.props.multi}
						onChange={this.handleSelectChange}
						options={this.props.options}
						removeSelected={removeSelectedStatus}
						simpleValue
						placeholder={this.props.placeholder}
						value={
							this.props.multi ? statusValue : statusValueNotMulti
						}
						required={this.props.required}
						disabled={this.props.disabled}
					/>
				</div>
			</div>
		);
	}
	handleSelectChange(value) {
		this.props.multi
			? this.setState({ statusValue: value })
			: this.setState({ statusValueNotMulti: value });
	}
	toggleCheckbox(e) {
		this.setState({ [e.target.name]: e.target.checked });
	}
}

export default SelectWrapper;
