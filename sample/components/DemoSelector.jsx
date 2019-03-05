import React from 'react';
import { connect } from 'react-redux';

import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';

import { AppActions } from '../store';
import * as utils from '../utils';

class DemoSelector extends React.PureComponent {

	componentDidMount = () => {
		this.props.dispatch(AppActions.DemoSelector.SetDemos(utils.demos));
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
							<span className={`${item.Icon} icon`} />
							<span className="name">{item.Name}</span>
						</Link>
					))}
				</div>
			</div>
		)
	}
}

export default withRouter(connect(state => state.demoSelector)(DemoSelector));