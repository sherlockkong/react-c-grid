import * as React from 'react';

import ResizeBar from './ResizeBar';
import Sorting from './Sorting';

import * as utils from '../utils';

/**
 *  Props: 
 *      columns: []
 */
export default class Header extends React.Component {
	renderColumns = () => {
		let columns = this.props.columns
			? this.props.columns
			: utils.generateColumns(this.props.rows);
		let height = this.props.rowHeight
			? this.props.rowHeight
			: utils.DefaultRowHeight;
		let style = {
			height: `${height}px`,
			lineHeight: `${height}px`,
		};

		return <div className="cg-row" style={style}>
			{columns.map((col, index) =>
				<div
					style={style}
					className={`cg-col-${index} cg-h-cell ${col.sorting ? 'can-sort' : ''}`}
					key={`col-${index}`}
					data-col-index={index}
				>
					{col.label}
					{this.props.columnResizing && <ResizeBar colIndex={index} column={col} />}
					{col.sorting && <Sorting colIndex={index} column={col} />}
				</div>
			)}
		</div>
	}

	render() {
		return (
			<div
				className="cg-header"
				ref={ref => this._dom = ref}
			>
				{this.renderColumns()}
			</div>
		);
	}
}