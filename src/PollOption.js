import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class PollOption extends Component {
	constructor(props) {
		super(props);
		this.handleTextChange = this.handleTextChange.bind(this);
	}

	handleTextChange(e) {
		const key = parseInt(this.props.optionKey, 10);
		this.props.onTextChange(key, e.target.value);
	}

	render() {
		const optionText = this.props.optionText;
		const optionKey = this.props.optionKey;
		return (
			<FormGroup controlId={optionKey}>
				<ControlLabel srOnly>Option</ControlLabel>
				<FormControl
					type="text"
					placeholder="Option..."
					onChange={this.handleTextChange}
					value={optionText}
				/>
			</FormGroup>
		);
	}
}

export default PollOption;
