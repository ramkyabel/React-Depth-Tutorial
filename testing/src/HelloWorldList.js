import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import './HelloWorldList.css';

class HelloWorldList extends Component {
	render () {
		return (
			<div className="HelloWorldList">
				<HelloWorld name="Jim" />
				<HelloWorld name="Sally" />
			</div>
			);
	}
}

export default HelloWorldList;