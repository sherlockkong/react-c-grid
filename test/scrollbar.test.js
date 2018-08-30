import React from 'react';
import Scrollbar from '../src/components/Scrollbar';
import renderer from 'react-test-renderer';

it('scrollbar', () => {
	const scrollbar = renderer
		.create(<Scrollbar onScroll={(left) => { }}>Grid Content</Scrollbar>)
		.toJSON();
	expect(scrollbar).toMatchSnapshot();
});