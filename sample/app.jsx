import React from 'react';
import { connect } from 'react-redux';
import './index.scss';

import DemoSelector from './components/DemoSelector';
import Demo from './components/Demo';

export default class App extends React.Component {

	render() {
		return (
			<div className='cgrid-sample'>
				<DemoSelector />
				<Demo />
			</div>
		)
	}
}