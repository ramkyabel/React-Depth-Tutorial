import React, { Component } from 'react';
import AddGreeter from './AddGreeter';
import HelloWorld from './HelloWorld';
import './HelloWorldList.css';

class HelloWorldList extends Component {
	constructor (props) {
		super (props);
		this.state = { greetings: ['Jim', 'Sally', 'Bender']};
		this.addGreeting = this.addGreeting.bind (this);
		this.removeGreeting = this.removeGreeting.bind (this);
	}
	addGreeting (newName) {
		this.setState ( {greetings: [...this.state.greetings, newName]});
	} 
	removeGreeting (removeName) {
		const filteredGreetings = this.state.greetings.filter ((name) => 
			 removeName !== name);
		this.setState ( {greetings: filteredGreetings});
	}
	renderGreetings () {
		return this.state.greetings.map (name => 
			<HelloWorld 
				key={name}
				name={name}
				removeGreeting={this.removeGreeting} />
		);
	}
	render () {
		return (
			<div className="HelloWorldList">
				<AddGreeter addGreeting={this.addGreeting} 
										removeGreeting={this.removeGreeting}
				/>
				{this.renderGreetings ()}
			</div>
		);	
	}
}

export default HelloWorldList;