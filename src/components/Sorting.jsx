import * as React from 'react';
import * as utils from '../utils';

const OrderType = {
	ASC: 'ASC',
	DESC: 'DESC'
};

/**
 *  Props: 
 *      colIndex: number
 *      column: {}
 */
export default class Sorting extends React.PureComponent {
	constructor(props, context) {
		super(props, context);

		this.state = {
			orderType: OrderType.DESC,
		};

		this._upIndicator = `<svg fill="rgba(0, 0, 0, 0.87)" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
			<path d="M0 0h24v24H0V0z" fill="none" />
			<path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
		</svg>`;

		this._downIndicator = `<svg fill="rgba(0, 0, 0, 0.87)" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
			<path d="M0 0h24v24H0V0z" fill="none" />
			<path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" fill="rgba(0, 0, 0, 0.87)" />
		</svg>`;
	}

	componentDidMount = () => {
		this._grid = utils.parent(this._dom, '.c-grid');
		this._col = utils.parent(this._dom, '.cg-h-cell');
		this._col.addEventListener('click', this.onMouseClick);

		this.addSortIndicator();
	}
	componentWillUpdate = () => {
		this._dom.classList.remove('rotate');
	}
	componentDidUpdate = () => {
		this.addSortIndicator();
	}
	componentWillUnmount = () => {
		this._col.removeEventListener('click', this.onMouseClick);
	}

	addSortIndicator = () => {
		this._dom.innerHTML = this.state.orderType === OrderType.DESC ? this._upIndicator : this._downIndicator;
		setTimeout(() => this._dom.classList.add('rotate'));
	}

	onMouseClick = (e) => {
		if (utils.parent(e.target, '.col-resize-bar')) return;

		this._grid
			.querySelectorAll('.sort-hd,.cg-h-cell')
			.forEach(elem => {
				if (elem !== this._col && elem !== this._dom) elem.classList.remove('sorting')
			});

		if (!this._dom.classList.contains('sorting')) this._dom.classList.add('sorting');
		if (!this._col.classList.contains('sorting')) this._col.classList.add('sorting');

		let orderType = this.state.orderType === OrderType.ASC ? OrderType.DESC : OrderType.ASC;
		this.setState({ orderType });
		this.props.column.sorting.onSort(this.props.column.key, orderType);
	}

	render() {
		const { colIndex } = this.props;

		return (
			<div
				className="sort-hd"
				data-col-index={colIndex}
				ref={ref => this._dom = ref}
			>
			</div>
		);
	}
}