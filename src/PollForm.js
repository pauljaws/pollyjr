import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import PollOption from './PollOption';

class PollForm extends Component {
	constructor(props) {
		super(props);
		this.handleQuestionChange = this.handleQuestionChange.bind(this);
		this.handleOptionChange = this.handleOptionChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			pollQuestion: '',
			pollOptions: [
				{
					optionText: '',
					isPreferred: false,
				},
				{
					optionText: '',
					isPreferred: false,
				},
				{
					optionText: '',
					isPreferred: false,
				},
				{
					optionText: '',
					isPreferred: false,
				},
			],
		}
	}

	handleQuestionChange(e) {
		this.setState({ pollQuestion: e.target.value });
	}

	handleOptionChange(optionKey, optionText) {
		let options = this.state.pollOptions.slice();
		options[optionKey].optionText = optionText;
		this.setState({ pollOptions: options });
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log(JSON.stringify(this.state));
	}

	render() {
		const pollQuestion = this.state.pollQuestion;
		return (
			<article className="poll-form">
				<section className="instructions">
					<p>
						Start your Polly Jr. by typing a question.
					</p>
				</section>
				<section className="form-inputs">
					<form onSubmit={this.handleSubmit}>
						<FormGroup controlId="pollQuestion">
							<ControlLabel srOnly>Poll Question</ControlLabel>
							<FormControl
								componentClass="textarea"
								onChange={this.handleQuestionChange}
								value={pollQuestion}
								autoFocus
							/>
						</FormGroup>
						<PollOption optionKey="0" onTextChange={this.handleOptionChange} />
						<PollOption optionKey="1" onTextChange={this.handleOptionChange} />
						<PollOption optionKey="2" onTextChange={this.handleOptionChange} />
						<PollOption optionKey="3" onTextChange={this.handleOptionChange} />
						<Button
							bsSize="large"
							type="submit"
							disabled={this.isSubmitDisabled}
							block>
							🐤 Make my Polly Jr.
						</Button>
					</form>
				</section>
			</article>
		);
	}
}

export default PollForm;
