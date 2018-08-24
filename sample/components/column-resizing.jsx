import React, { Component } from 'react';
import CGrid from './../../src';

class ColumnResizing extends Component {
	render() {
		const { rows } = this.props;
		const columns = [
			{ key: 'name', label: 'Name' },
			{ key: 'email', label: 'Email', width: 300, minWidth: 200 },
			{ key: 'phone', label: 'Phone' },
			{ key: 'city', label: 'City' },
			{ key: 'country', label: 'Country' }
		];

		return <CGrid
			rows={rows}
			columns={columns}
			columnResizing={true}
		/>
	}
}

const Code = `
class ColumnResizing extends Component {
    render() {
        const { rows } = this.props;
        const columns = [
            { key: 'name', label: 'Name' },
            { key: 'email', label: 'Email', width: 300, minWidth: 200 },
            { key: 'phone', label: 'Phone' },
            { key: 'city', label: 'City' },
            { key: 'country', label: 'Country' }
        ];

        return <CGrid
            rows={rows}
            columns={columns}
            columnResizing={true}
        />
    }
}
`

export default {
	CGrid: ColumnResizing,
	Code: Code
}