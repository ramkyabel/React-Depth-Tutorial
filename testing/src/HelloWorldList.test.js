import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import HelloWorldList from './HelloWorldList';
import AddGreeter from './AddGreeter';
import HelloWorld from './HelloWorld';

describe (HelloWorldList, () => {
	const component = shallow (
		<HelloWorldList />
	);

	it ('renders and matches our snapshot', () => {
		const component = renderer.create (
			<HelloWorldList />
		);
		const tree = component.toJSON ();
		expect (tree).toMatchSnapshot ();
	});

	it ('contains an AddGreeter subcomponent', () => {
		expect (component.find (AddGreeter)).toHaveLength (1);
	});

	it ('contains the same number of HelloWorld components as greetings', () => {
		const helloWorlds = component.find (HelloWorld).length;
		const greetings   = component.state('greetings').length;
		// console.log(component);
		expect (helloWorlds).toEqual (greetings);
	});

	it ('adds another greeting when the add greeting function is called', () => {
		const greetingsBefore = component.state ('greetings').length;
		const componentsBefore = component.find (HelloWorld).length;

		component.instance().addGreeting	('Added');

		const greetingsAfter = component.state ('greetings').length;
		const componentsAfter = component.find (HelloWorld).length;

		expect(greetingsAfter).toBeGreaterThan(greetingsBefore);
		expect(componentsAfter).toBeGreaterThan(componentsBefore);

	});	

	it ('removes a greeting from the list when the remove greeting functions' +
		'is being called.', () => {
			const before = component.find (HelloWorld).length;
			const greetRemove = 
				component.state('greetings')[component.state('greetings').length - 1];
			component.instance ().removeGreeting(greetRemove);
			const after = component.find (HelloWorld).length;
			expect (after).toBeLessThan (before);
	});
});