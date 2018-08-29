import React from 'react';
import { connect } from 'react-redux';

import { AppActions } from '../store';
import * as utils from '../utils';

import ColumnResizing from './demos/ColumnResizing';
import Pagination from './demos/Pagination';
import CustomCell from './demos/CustomCell';
import ChangeRowHeight from './demos/ChangeRowHeight';
import AutoFit from './demos/AutoFit';
import Sorting from './demos/Sorting';

class DemoSelector extends React.Component {

	componentDidMount = () => {
		const rows = utils.rows;
		const demos = [{
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
			Name: 'Sorting',
			CGrid: React.createElement(Sorting.CGrid, { rows: rows }),
			Code: Sorting.Code
		},
		{
			Name: 'Pagination',
			CGrid: React.createElement(Pagination.CGrid, { rows: rows }),
			Code: Pagination.Code
		}];

		this.props.dispatch(AppActions.DemoSelector.SetDemos(demos));
		this.props.dispatch(AppActions.DemoSelector.SetSelected(demos[0]));
		this.updateIndicatorPosition();
	}
	componentDidUpdate = () => this.updateIndicatorPosition();

	updateIndicatorPosition = () => {
		if (!this._container || !this._indicator) return;

		let selected = this._container.querySelector('.selected');
		if (selected) {
			let rect = selected.getBoundingClientRect();
			let containerRect = this._container.getBoundingClientRect();
			this._indicator.style.top = `${rect.top - containerRect.top}px`;
		}
	}

	render() {
		const { demos, selected } = this.props;

		if (demos.length === 0 || !selected) return null;

		return (
			<div className="demo-selector">
				<div className="cg-logo"> CGrid </div>
				<div ref={ref => this._container = ref} className="demos-container">
					{demos.map((item, index) => (
						<div
							className={`d-item ${selected.Name === item.Name ? 'selected' : ''}`}
							data-index={index}
							key={item.Name}
							onClick={e => this.props.dispatch(AppActions.DemoSelector.SetSelected(this.props.demos[e.target.dataset.index]))}
						> {item.Name}
						</div>
					))}
					<div ref={ref => this._indicator = ref} className="d-indicator" />
				</div>
			</div>
		)
	}
}

export default connect(state => state.demoSelector)(DemoSelector);