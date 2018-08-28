import React, { Component } from 'react';
import * as utils from './utils';
import './index.scss';

import ColumnResizing from './components/demos/ColumnResizing';
import Pagination from './components/demos/Pagination';
import CustomCell from './components/demos/CustomCell';
import ChangeRowHeight from './components/demos/ChangeRowHeight';
import AutoFitWidthColumnLabel from './components/demos/AutoFitWithColumnLabel';
import AutoFit from './components/demos/AutoFit';
import Sorting from './components/demos/Sorting';

import { DemoSelector } from './components/DemoSelector';

import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/jsx/jsx';

const rows = utils.rows;
const items = [{
	Name: 'Columns Resizing',
	CGrid: React.createElement(ColumnResizing.CGrid, { rows: rows }),
	Code: ColumnResizing.Code
},
{
	Name: 'Custom Cell',
	CGrid: React.createElement(CustomCell.CGrid, { rows: rows }),
	Code: CustomCell.Code
},
{
	Name: 'Change Row Height',
	CGrid: React.createElement(ChangeRowHeight.CGrid, { rows: rows }),
	Code: ChangeRowHeight.Code
},
{
	Name: 'Auto Fit',
	CGrid: React.createElement(AutoFit.CGrid, { rows: rows }),
	Code: AutoFit.Code
},
{
	Name: 'Auto Fit Width Column Label',
	CGrid: React.createElement(AutoFitWidthColumnLabel.CGrid, { rows: rows }),
	Code: AutoFitWidthColumnLabel.Code
},
{
	Name: 'Sorting',
	CGrid: React.createElement(Sorting.CGrid, { rows: rows }),
	Code: Sorting.Code
},
{
	Name: 'Pagination',
	CGrid: React.createElement(Pagination.CGrid, { rows: rows }),
	Code: Pagination.Code
}];

export default class App extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = { selected: 0, type: 'sample' };
	}

	renderGridAndSampleCode = () => {
		return (
			<div className='btm-part'>
				{this.state.type == 'sample' && items[this.state.selected].CGrid}
				{this.state.type == 'source' &&
					<CodeMirror
						value={items[this.state.selected].Code}
						options={{
							mode: 'text/javascript',
							theme: 'material',
							lineNumbers: true
						}}
					/>
				}
			</div>
		)
	}

	renderNav = () => {
		return (
			<div className='nav-bar'>
				<div className={`nav-item ${this.state.type == 'sample' ? 'selected' : ''}`}
					onClick={() => { this.setState({ type: 'sample' }) }}
				> Sample </div>
				<div className={`nav-item ${this.state.type == 'source' ? 'selected' : ''}`}
					onClick={() => { this.setState({ type: 'source' }) }}
				> Source </div>
			</div>
		)
	}

	renderDemo = () => {
		return (
			<div className='cg-demo'>
				{this.renderNav()}
				{this.renderGridAndSampleCode()}
			</div>
		)
	}

	render() {
		const demoSelectorProps = {
			items,
			selected: this.state.selected,
			onSelectedChange: (index) => this.setState({ type: 'sample', selected: index })
		}

		return (
			<div className='cgrid-sample'>
				<DemoSelector {...demoSelectorProps} />
				{this.renderDemo()}
			</div>
		)
	}
}
