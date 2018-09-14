import React from 'react';
import { connect } from 'react-redux';

import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';

import { AppActions } from '../store';
import * as utils from '../utils';

class DemoSelector extends React.Component {

	componentDidMount = () => {
		this.props.dispatch(AppActions.DemoSelector.SetDemos(utils.demos));
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
		const { demos, location: { pathname: path } } = this.props;

		if (demos.length === 0) return null;

		const selected = path === '/' ? demos[0] : demos.find(d => path.replace('/', '') == d.Name.replace(/ /g, '').toLowerCase());

		return (
			<div className="demo-selector">
				<div className="cg-logo"> CGrid </div>
				<div ref={ref => this._container = ref} className="demos-container">
					{demos.map((item, index) => (
						<Link
							key={item.Name}
							className={`d-item ${selected.Name === item.Name ? 'selected' : ''}`}
							to={index === 0 ? '/' : `/${item.Name.replace(/ /g, '').toLowerCase()}`}
							data-index={index}
						>
							{item.Name}
						</Link>
					))}
					<div ref={ref => this._indicator = ref} className="d-indicator" />
				</div>
			</div>
		)
	}
}

export default withRouter(connect(state => state.demoSelector)(DemoSelector));