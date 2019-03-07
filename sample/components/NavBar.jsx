import React from 'react';
import { connect } from 'react-redux';

import { AppActions } from '../store';

class NavBar extends React.PureComponent {
	render() {
		const { mode, dispatch } = this.props;
		const nextMode = mode === 'GRID' ? 'CODE' : 'GRID';

		return (
			<div className='nav-bar'>
				<button className={`nav-item mdi ${mode === 'GRID' ? 'mdi-code-tags' : 'mdi-grid-large'}`}
					onClick={() => dispatch(AppActions.Demo.SetDemoMode(nextMode))}
				/>
			</div>
		)
	}
}

export default connect(state => state.demo)(NavBar);