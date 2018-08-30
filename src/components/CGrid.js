import * as React from 'react';

import Header from './Header';
import Body from './Body';
import Pagination from './Pagination';
import ProgressBar from './ProgressBar';
import Scrollbar from './Scrollbar';

import * as utils from '../utils';

utils.nodeListForEachPolyill();

/**
 *  Props: 
 *      rows: []
 *      columns: []
 *      pagination: {}
 *      progressBar: {}
 *      rowHeight: number
 *      autoFit: bool // measure all text in rows.
 *      autoFitWithColumnLabel: bool
 *      columnResizing: bool
 *      showGridLine: bool
 *      onRenderCell: (key, row) => react element
 *      measureLabelContext: {
 *          fontSize: '13px',
 *          fontWeight: 'bold',
 *          fontFamily: 'Open Sans,Segoe UI,Roboto,Helvetica Neue,Tahoma,Geneva,Verdana,sans-serif'
 *      }
 * 
 *  Column Props:
 *      key: string
 *      label: string
 *      width: number
 */

export default class CGrid extends React.Component {
	constructor(props, context) {
		super(props, context);

		this._gridId = `cgrid-${Math.round(1000000 * Math.random())}`;
	}

	componentDidMount = () => {
		this.initGridSize();
		window.addEventListener('resize', this.updateGridSize);
	}
	componentDidUpdate = (nextProps) => {
		if (nextProps.columns && this.props.columns) {
			let hasDiff = nextProps.columns.length != this.props.columns.length;

			if (!hasDiff) for (let i = 0; i < nextProps.columns.length; i++) {
				if (nextProps.columns[i].label !== this.props.columns[i].label) {
					hasDiff = true; break;
				}
			}

			if (hasDiff) this.initGridSize();
		}

		if (nextProps.rows && this.props.rows &&
			nextProps.rows.length != this.props.rows.length) {

			this.initGridSize();
			this.updateRowsSize();
		}
	}
	componentWillUnmount = () => {
		window.removeEventListener('resize', this.updateGridSize);
	}

	initGridSize = () => {
		// update body size
		let minWidth = `${this._grid.clientWidth}px`,
			paginationHeight = this._pagination && this._pagination._dom ? this._pagination._dom.clientHeight : 0,
			minHeight = `${this._grid.clientHeight - this._header._dom.clientHeight - paginationHeight}px`;
		this._body._dom.style.minWidth = minWidth;
		this._body._dom.style.minHeight = minHeight;

		// update cells width
		let colWidths = this.getColWidths(), sum = utils.EmptyHolderWidth;
		colWidths.forEach((width, index) => {
			sum += width;
			this._grid
				.querySelectorAll(`.cg-col-${index}`)
				.forEach(dom => dom.style.width = `${width}px`);
		})

		// update row size
		this._grid
			.querySelectorAll('.cg-row,.cg-header')
			.forEach(row => {
				row.style.minWidth = minWidth
				row.style.width = `${sum}px`
			});
	}
	measureColumn = (column, span) => {
		const { rows, autoFitWithColumnLabel, autoFit, measureLabelContext } = this.props;
		const getWidth = (span) => {
			let style = window.getComputedStyle(span);
			return parseInt(style.width);
		}

		let w = 0;
		if (autoFit) {
			span.textContent = column.label;
			let init = getWidth(span);
			span.style.fontWeight = measureLabelContext && measureLabelContext.fontWeight ? measureLabelContext.fontWeight : 'normal';
			w = rows.reduce((width, row) => {
				span.textContent = row[column.key];
				let nw = getWidth(span);
				if (nw > width) width = nw;
				return width;
			}, init);
		}
		else if (autoFitWithColumnLabel) {
			span.textContent = column.label;
			w = getWidth(span);
		}

		w += 15; // add offset

		if (column.maxWidthForAutoFit && w > column.maxWidthForAutoFit) {
			w = column.maxWidthForAutoFit;
		}

		return w;
	}
	getColWidths = () => {
		let bodyWidth = this._grid.clientWidth - utils.EmptyHolderWidth;
		let columns = this.props.columns
			? this.props.columns
			: utils.generateColumns(this.props.rows);

		let span = this.appendMeasureSpan();
		let colWidths = [], indexs = [], w = 0;
		columns.forEach((col, index) => {
			let width = -1;
			if (col.minWidth) width = col.minWidth;
			if (col.width && col.width > width) width = col.width;

			if (this.props.autoFitWithColumnLabel || this.props.autoFit) {
				let w = this.measureColumn(col, span);
				if (w > width) width = w;
			}

			if (width === -1) {
				indexs.push(index);
				colWidths.push(undefined);
			}
			else {
				colWidths.push(width);
				w += width;
			}
		})
		this.removeMessureSpan(span);

		if (indexs.length > 0) {
			let k = bodyWidth - w;
			if (k > 0) { // All known width less than body width.
				let l = parseInt(k / indexs.length);
				indexs.forEach((index, i) => {
					if (i === indexs.length - 1) colWidths[index] = k - (indexs.length - 1) * l;
					else colWidths[index] = l;
				});
			}
			else indexs.forEach((index, i) => colWidths[index] = utils.DefaultCellWidth);
		}

		return colWidths;
	}
	updateGridSize = () => {
		// update cells width
		let row = this._header._dom.querySelector('.cg-row'),
			rowWidth = parseInt(row.style.width),
			cells = row.querySelectorAll('.cg-h-cell');

		if (cells.length === 0) return;

		// update body size
		let bodyWidth = `${this._grid.clientWidth}px`,
			paginationHeight = this._pagination && this._pagination._dom ? this._pagination._dom.clientHeight : 0,
			bodyMinHeight = `${this._grid.clientHeight - this._header._dom.clientHeight - paginationHeight}px`;

		this._body._dom.style.minHeight = bodyMinHeight;

		if (this._grid.clientWidth >= rowWidth) {
			this._body._dom.style.minWidth = bodyWidth;

			let sum = 0;
			cells.forEach((cell, index) => {
				if (index !== cells.length - 1) sum += parseInt(cell.style.width);
			});
			let lastCellWidth = `${rowWidth - sum - utils.EmptyHolderWidth}px`;

			// update row size
			this._grid
				.querySelectorAll('.cg-row')
				.forEach(row => {
					row.style.minWidth = bodyWidth;
					row.style.width = bodyWidth;

					// update last cell width
					row.querySelector(`.cg-col-${cells.length - 1}`).style.width = lastCellWidth;
				});
		}
	}
	updateRowsSize = () => {
		// update cells width
		let colWidths = [];
		this._header._dom.querySelectorAll('.cg-h-cell').forEach(c => colWidths.push(c.style.width));
		colWidths.forEach((width, index) => {
			this._body._dom
				.querySelectorAll(`.cg-col-${index}`)
				.forEach(dom => dom.style.width = width);
		});

		// update row size
		this._grid
			.querySelectorAll('.cg-row,.cg-header')
			.forEach(row => {
				row.style.minWidth = this._header._dom.style.minWidth
				row.style.width = this._header._dom.style.width
			});
	}
	appendMeasureSpan = () => {
		const { measureLabelContext } = this.props;
		if (typeof document !== 'undefined') {
			const span = document.createElement('span');
			span.style.fontSize = measureLabelContext && measureLabelContext.fontSize ? measureLabelContext.fontSize : '13px';
			span.style.fontWeight = measureLabelContext && measureLabelContext.fontWeight ? measureLabelContext.fontWeight : 'bold';
			span.style.padding = measureLabelContext && measureLabelContext.padding ? measureLabelContext.padding : '0 8px';
			span.style.fontFamily = measureLabelContext && measureLabelContext.fontFamily ? measureLabelContext.fontFamily : 'Open Sans,Segoe UI,Roboto,Helvetica Neue,Tahoma,Geneva,Verdana,sans-serif';
			span.style.whiteSpace = 'nowrap';
			span.style.position = 'absolute';
			span.style.top = -9999;
			document.body.appendChild(span);
			return span;
		}
	}
	removeMessureSpan = (span) => {
		if (span) document.body.removeChild(span);
	}
	onScroll = (scrollLeft) => {
		this._header._dom.style.left = `${-scrollLeft}px`;
	}

	render() {
		const { rows, columns, progressBar, pagination, rowHeight, onRenderCell, showGridLine } = this.props;

		const style = { height: `${pagination ? 'calc(100% - 50px)' : '100%'}` };

		return (
			<div
				className={`c-grid-wrapper ${showGridLine ? '' : 'hide-grid-line'}`}
				style={{ width: '100%', height: '100%', position: 'relative' }}
			>
				<div
					id={this._gridId}
					className='c-grid'
					ref={ref => this._grid = ref}
					style={style}
				>
					<Header
						gridId={this._gridId}
						rows={rows}
						columnResizing={this.props.columnResizing}
						columns={columns}
						rowHeight={rowHeight}
						ref={ref => this._header = ref}
					/>

					<Scrollbar onScroll={this.onScroll} >
						<Body
							rows={rows}
							columns={columns}
							rowHeight={rowHeight}
							ref={ref => this._body = ref}
							onRenderCell={onRenderCell}
						/>

						{progressBar && <ProgressBar {...progressBar} />}
					</Scrollbar>
				</div>

				{pagination && <Pagination ref={ref => this._pagination = ref} {...pagination} />}
			</div>
		);
	}
}