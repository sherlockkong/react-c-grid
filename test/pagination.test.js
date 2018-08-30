import React from 'react';
import Pagination from '../src/components/Pagination';
import renderer from 'react-test-renderer';

it('pagination with count message', () => {
	const props = {
		pageSize: 15,
		itemsCount: 100,
		selected: 1,
		showCountMsg: true,
		visiblePageCount: 7,
		selectedPageChanged: (selected) => { }
	};

	const pagination = renderer
		.create(<Pagination {...props} />)
		.toJSON();
	expect(pagination).toMatchSnapshot();
});

it('pagination without count message', () => {
	const props = {
		pageSize: 15,
		itemsCount: 100,
		selected: 2,
		showCountMsg: false,
		visiblePageCount: 8,
		selectedPageChanged: (selected) => { }
	};

	const pagination = renderer
		.create(<Pagination {...props} />)
		.toJSON();
	expect(pagination).toMatchSnapshot();
});

it('pagination custom count message', () => {
	const props = {
		pageSize: 15,
		itemsCount: 100,
		selected: 1,
		showCountMsg: true,
		visiblePageCount: 7,
		onFormatCountMsg: (selected, pageSize, itemsCount) => `${selected}-${pageSize}-${itemsCount}`,
		selectedPageChanged: (selected) => { }
	};

	const pagination = renderer
		.create(<Pagination {...props} />)
		.toJSON();
	expect(pagination).toMatchSnapshot();
});