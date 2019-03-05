import React from 'react';
import { connect } from 'react-redux';

import { Route, Switch } from "react-router-dom";
import { withRouter } from 'react-router-dom';

import NavBar from './NavBar';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/jsx/jsx';

class Demo extends React.PureComponent {

	content = (item) => {
		const { demo: { mode } } = this.props;
		return (
			<React.Fragment>
				{mode == 'GRID' && item.CGrid}
				{mode == 'CODE' &&
					<CodeMirror
						value={item.Code}
						options={{
							mode: 'text/javascript',
							theme: 'material',
							lineNumbers: true
						}}
					/>
				}
			</React.Fragment>
		)
	}

	renderGridOrCode = () => {
		const { demoSelector: { demos } } = this.props;

		return (
			<div className='grid-or-code'>
				<Switch>
					{demos.map((item, index) => (
						<Route key={item.Name} exact={index === 0} path={index === 0 ? '/' : `/${item.Name.replace(/ /g, '').toLowerCase()}`} component={() => this.content(item)} />
					))}
				</Switch>
			</div>
		)
	}

	render() {
		return (
			<div className='cg-demo'>
				<NavBar />
				{this.renderGridOrCode()}
			</div>
		)
	}
}

export default withRouter(connect(state => state)(Demo));