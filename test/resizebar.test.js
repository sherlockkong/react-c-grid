import React from 'react';
import ResizeBar from '../src/components/ResizeBar';
import renderer from 'react-test-renderer';

it('resizebar', () => {
	const resizebar = renderer
		.create(<ResizeBar colIndex={0} column={{}} />)
		.toJSON();
	expect(resizebar).toMatchSnapshot();
});