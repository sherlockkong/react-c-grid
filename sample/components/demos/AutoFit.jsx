import React, { Component } from 'react';
import CGrid from '../../../src';

class AutoFit extends Component {
	render() {
		const { rows } = this.props;
		const columns = [
			{ key: 'name', label: 'Name' },
			{ key: 'email', label: 'Email', maxWidthForAutoFit: 500 },
			{ key: 'company', label: 'Company' },
			{ key: 'city', label: 'City' },
			{ key: 'country', label: 'Country' }
		];

		// This is the default value of the context.
		// If you do not change the cell style, you do not need to pass this property.
		const measureLabelContext = {
			fontSize: '13px',
			fontWeight: 'normal',
			padding: '0 8px',
			fontFamily: 'Open Sans,Segoe UI,Roboto,Helvetica Neue,Tahoma,Geneva,Verdana,sans-serif'
		};

		return <CGrid
			rows={rows}
			columns={columns}
			autoFit={true}
			measureLabelContext={measureLabelContext}
		/>
	}
}

const Code = `
class AutoFit extends Component {
	render() {
		const { rows } = this.props;
		const columns = [
			{ key: 'name', label: 'Name' },
			{ key: 'email', label: 'Email', maxWidthForAutoFit: 500 },
			{ key: 'company', label: 'Company' },
			{ key: 'city', label: 'City' },
			{ key: 'country', label: 'Country' }
		];

		// This is the default value of the context.
		// If you do not change the cell style, you do not need to pass this property.
		const measureLabelContext = {
			fontSize: '13px',
			fontWeight: 'normal',
			padding: '0 8px',
			fontFamily: 'Open Sans,Segoe UI,Roboto,Helvetica Neue,Tahoma,Geneva,Verdana,sans-serif'
		};

		return (
			<CGrid
				rows={rows}
				columns={columns}
				autoFit={true}
				measureLabelContext={measureLabelContext}
			/>
		);
	}
}
`

export default {
	CGrid: AutoFit,
	Code: Code
}