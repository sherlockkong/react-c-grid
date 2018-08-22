import * as React from 'react';
import * as utils from './../utils';

/**
 *  Props: 
 *      colIndex: number
 *      column: Column
 */

export default class ResizeBar extends React.Component {
	constructor(props, context) {
		super(props, context);

		this._colMinWidth = 50;
	}

	componentDidMount = () => {
		this._grid = utils.parent(this._dom, '.c-grid');
		document.addEventListener('mousemove', this.onMouseMove);
		document.addEventListener('mouseup', this.onMouseUp);
	}
	componentWillUnmount = () => {
		document.removeEventListener('mousemove', this.onMouseMove);
		document.removeEventListener('mouseup', this.onMouseUp);
	}

	onMouseDown = (e) => {
		if (e.button === 0) { // left button
			let col = utils.parent(e.target, '.cg-h-cell');
			this._origin = {
				x: e.screenX,
				index: col.dataset.colIndex,
				width: col.clientWidth
			};
		}
	}
	onMouseUp = (e) => {
		if (e.button === 0) { // left button
			this._origin = undefined;

			this._grid
				.querySelector(`.cg-col-${this.props.colIndex} .col-resize-bar`)
				.classList
				.remove('active');
		}
	}
	onMouseMove = (e) => {
		let colMinWidth = this.props.column.minWidth ? this.props.column.minWidth : this._colMinWidth;

		if (this._origin && this.currentWidth !== colMinWidth) {
			let width = this._origin.width + (e.screenX - this._origin.x);
			if (width < colMinWidth) width = colMinWidth;

			let newRowWidth = utils.EmptyHolderWidth,
				colWidth = `${width}px`;

			this._grid
				.querySelector(`.cg-col-${this.props.colIndex} .col-resize-bar`)
				.classList
				.add('active');

			this._grid
				.querySelectorAll(`.cg-col-${this.props.colIndex}`)
				.forEach(elem => elem.style.width = colWidth);

			this._grid
				.querySelectorAll(`.cg-header .cg-h-cell`)
				.forEach(elem => newRowWidth += parseInt(elem.style.width));

			let rowWdith = `${newRowWidth}px`;

			this._grid
				.querySelectorAll(`.cg-row,.cg-header`)
				.forEach(elem => elem.style.width = rowWdith);

			let isIE = /*@cc_on!@*/false || !!document.documentMode;
			if (isIE) {
				let event = document.createEvent('Event');
				event.initEvent('cgrid-column-resizing', false, true);
				document.dispatchEvent(event);
			}
			else document.dispatchEvent(new Event('cgrid-column-resizing'));
		}
	}

	render() {
		const { colIndex } = this.props;

		return <div
			className="col-resize-bar"
			data-col-index={`${colIndex}`}
			onMouseDown={this.onMouseDown}
			ref={ref => this._dom = ref}
		>
			<div className="holder holder-left" />
			<div className="holder holder-right" />
		</div>
	}
}