import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import AddGreeter from './AddGreeter';

describe (AddGreeter, () => {
	const mockAddGreeting = jest.fn ();
	const mockRemoveGreeting = jest.fn ();
	const component = shallow (
		<AddGreeter addGreeting={mockAddGreeting} 
								removeGreeting={mockRemoveGreeting} />);

	it ('renders and matches our snapshot',()=> {
		const component = renderer.create (
			<AddGreeter />
		);
		const tree = component.toJSON ();
		expect (tree).toMatchSnapshot ();
	});

 it ('contains the form', () => {
 		expect (component.find ('div')).toHaveLength (1);
 		expect (component.find ('input')).toHaveLength (1);
 		expect (component.find ('button')).toHaveLength (2);
 });

 it ('calls the passed in addGreeting and removeGreeting functions' +
 'when add and remove buttons are clicked', () => {
 	component.find ('button').at(0).simulate ('click');
 	expect (mockAddGreeting).toBeCalled ();
	component.find ('button').at(1).simulate ('click');
 	expect (mockRemoveGreeting).toBeCalled ();
 });

 it ('updates the form when keys are pressed', () => {
 	const updateKey = 'bar';
 	component.instance ().handleUpdate ({ target: { value: updateKey}});
 	expect (component.state ('greetingName')).toEqual (updateKey);
 });

 it ('blanks out the greetingName when the button is clicked', () => {
 	const updateKey = 'bar';
 	component.instance ().handleUpdate ( {target: { value : updateKey}});
 	expect (component.state ('greetingName')).toEqual (updateKey);
 	component.find ('button').at (0).simulate ('click');
 	expect (component.state ('greetingName')).toEqual ('');
 });
});