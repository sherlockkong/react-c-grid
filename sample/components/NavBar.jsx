import React from 'react';
import { connect } from 'react-redux';

import { AppActions } from '../store';

class NavBar extends React.Component {
	render() {
		const { mode } = this.props;

		return (
			<div className='nav-bar'>
				<div className={`nav-item ${mode === 'GRID' ? 'selected' : ''}`}
					onClick={() => this.props.dispatch(AppActions.Demo.SetDemoMode('GRID'))}
				> GRID </div>
				<div className={`nav-item ${mode === 'CODE' ? 'selected' : ''}`}
					onClick={() => this.props.dispatch(AppActions.Demo.SetDemoMode('CODE'))}
				> CODE </div>
			</div>
		)
	}
}

export default connect(state => state.demo)(NavBar);