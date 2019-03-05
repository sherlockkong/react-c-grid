import React from 'react';
import './index.scss';

import { BrowserRouter as Router } from "react-router-dom";

import DemoSelector from './components/DemoSelector';
import Demo from './components/Demo';

export default class App extends React.PureComponent {

	render() {
		return (
			<Router>
				<div className='cgrid-sample'>
					<DemoSelector />
					<Demo />
				</div>
			</Router>
		)
	}
}