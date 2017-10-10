import React, { Component } from 'react';
import PollForm from './PollForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
				<div className="container">
					<div className="col-sm-12 col-md-8 col-md-offset-2">
						<PollForm />
					</div>
				</div>
      </div>
    );
  }
}

export default App;
