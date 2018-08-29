import React from 'react';
import { connect } from 'react-redux';

import NavBar from './NavBar';

import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/jsx/jsx';

class Demo extends React.Component {

	renderGridOrCode = () => {
		const { demoSelector: { selected }, demo: { mode } } = this.props;

		if (!selected) return null;

		return (
			<div className='grid-or-code'>
				{mode == 'GRID' && selected.CGrid}
				{mode == 'CODE' &&
					<CodeMirror
						value={selected.Code}
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

	render() {
		return (
			<div className='cg-demo'>
				<NavBar />
				{this.renderGridOrCode()}
			</div>
		)
	}
}

export default connect(state => state)(Demo);