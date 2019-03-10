import React, { Component } from 'react';
import CGrid from '../../../src';

class ChangeRowHeight extends Component {
	render() {
		const { rows } = this.props;
		const columns = [
			{ key: 'name', label: 'Name' },
			{ key: 'email', label: 'Email', width: 300 },
			{ key: 'company', label: 'Company' },
			{ key: 'city', label: 'City' },
			{ key: 'country', label: 'Country' }
		];

		return <CGrid
			rows={rows}
			columns={columns}
			rowHeight={30}
		/>
	}
}

const Code = `
class ChangeRowHeight extends Component {
	render() {
		const { rows } = this.props;
		const columns = [
			{ key: 'name', label: 'Name' },
			{ key: 'email', label: 'Email', width: 300 },
			{ key: 'company', label: 'Company' },
			{ key: 'city', label: 'City' },
			{ key: 'country', label: 'Country' }
		];

		return (
			<CGrid
				rows={rows}
				columns={columns}
				rowHeight={30}
			/>
		);
	}
}
`

export default {
	CGrid: ChangeRowHeight,
	Code: Code
}