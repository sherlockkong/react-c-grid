import React from 'react';
import Body from '../src/components/Body';
import renderer from 'react-test-renderer';

it('body', () => {
	const columns = [
		{ key: 'name', label: 'Name' },
		{ key: 'email', label: 'Email' },
		{ key: 'company', label: 'Company' },
		{ key: 'phone', label: 'Phone' },
		{ key: 'city', label: 'City' },
		{ key: 'country', label: 'Country' },
		{ key: 'postal', label: 'Postal' }
	];
	const rows = [
		{
			"name": "Stewart",
			"email": "nec@auctorMaurisvel.edu",
			"company": "Amet Diam Eu PC",
			"phone": "1675071109899",
			"city": "San Marcello",
			"country": "Iceland",
			"postal": "14778"
		}
	];

	const props = { rows, columns };

	const body = renderer
		.create(<Body {...props} />)
		.toJSON();
	expect(body).toMatchSnapshot();
});

it('body change row height', () => {
	const columns = [
		{ key: 'name', label: 'Name' },
		{ key: 'email', label: 'Email' },
		{ key: 'company', label: 'Company' },
		{ key: 'phone', label: 'Phone' },
		{ key: 'city', label: 'City' },
		{ key: 'country', label: 'Country' },
		{ key: 'postal', label: 'Postal' }
	];
	const rows = [
		{
			"name": "Stewart",
			"email": "nec@auctorMaurisvel.edu",
			"company": "Amet Diam Eu PC",
			"phone": "1675071109899",
			"city": "San Marcello",
			"country": "Iceland",
			"postal": "14778"
		}
	];

	const props = { rows, columns, rowHeight: 66 };

	const body = renderer
		.create(<Body {...props} />)
		.toJSON();
	expect(body).toMatchSnapshot();
});

it('body custom render cell', () => {
	const columns = [
		{ key: 'name', label: 'Name' },
		{ key: 'email', label: 'Email' },
		{ key: 'company', label: 'Company' },
		{ key: 'phone', label: 'Phone' },
		{ key: 'city', label: 'City' },
		{ key: 'country', label: 'Country' },
		{ key: 'postal', label: 'Postal' }
	];
	const rows = [
		{
			"name": "Stewart",
			"email": "nec@auctorMaurisvel.edu",
			"company": "Amet Diam Eu PC",
			"phone": "1675071109899",
			"city": "San Marcello",
			"country": "Iceland",
			"postal": "14778"
		}
	];

	const props = { rows, columns, rowHeight: 66, onRenderCell: (key, row) => `custom-${row[key]}` };

	const body = renderer
		.create(<Body {...props} />)
		.toJSON();
	expect(body).toMatchSnapshot();
});