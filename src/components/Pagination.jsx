import * as React from 'react';
import * as utils from '../utils';

/**
 *  Props: 
 *      pageSize: number
 *      itemsCount: number
 *      selected: number
 *      showCountMsg: bool
 *      visiblePageCount: number (min-value : 3)
 *      onFormatCountMsg: (selected, pageSize, itemsCount) => html
 *      selectedPageChanged: (selected) => { }
 */
export default class Pagination extends React.Component {
	constructor(props, context) {
		super(props, context);

		this._defaultVisablePageCount = 5;
	}

	renderCountMsg = () => {
		const { pageSize, itemsCount, selected, onFormatCountMsg } = this.props;

		if (typeof onFormatCountMsg === 'function') return onFormatCountMsg(selected, pageSize, itemsCount);

		let first = (selected - 1) * pageSize + 1, last = selected * pageSize;
		return <div className="count-msg">{`${first}-${last > itemsCount ? itemsCount : last} of ${itemsCount}`}</div>
	}
	renderPaging = () => {
		const { pageSize, itemsCount, selected, visiblePageCount } = this.props;
		let vsPageCount = visiblePageCount ? (visiblePageCount >= 3 ? visiblePageCount : 3) : this._defaultVisablePageCount,
			allPageCount = parseInt(itemsCount / pageSize) + ((itemsCount % pageSize) === 0 ? 0 : 1),
			pages = [selected],
			halfVsCount = parseInt(vsPageCount / 2),
			offset = 1,
			beforeCount = 0,
			afterCount = 0,
			afterCountShould = vsPageCount % 2 == 0 ? halfVsCount - 1 : halfVsCount,
			afterLostCount = (allPageCount - selected >= afterCountShould ? 0 : (afterCountShould - (allPageCount - selected))),
			beforeLostCount = selected > halfVsCount ? 0 : (halfVsCount - selected + 1),
			beforeCountLimit = halfVsCount + afterLostCount,
			afterCountLimit = afterCountShould + beforeLostCount,
			stopBefore = false,
			stopAfter = false;

		for (let i = vsPageCount; i > -1; i-- , offset++) {
			let beforePage = selected - offset;
			let afterPage = selected + offset;

			if (beforePage >= 1 && !stopBefore) {
				beforeCount++;

				if (beforeCount < beforeCountLimit) pages.unshift(beforePage);
				else {
					if (beforePage > 1) pages.unshift('...');

					pages.unshift(1);
					stopBefore = true;
				}
			}

			if (afterPage <= allPageCount && !stopAfter) {
				afterCount++;

				if (afterCount < afterCountLimit) pages.push(afterPage);
				else {
					if (afterPage < allPageCount) pages.push('...');

					pages.push(allPageCount);
					stopAfter = true;
				}
			}

			if (afterCount + beforeCount + 1 === vsPageCount) break;
		}

		return <div
			className="cg-pages"
		>
			<span onClick={this.changeSelectedPageClick} key="cg-p-left" className={`cg-page-button cg-left-button ${selected === 1 ? 'disabled' : ''}`}>
				<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
					<path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
					<path d="M0-.5h24v24H0z" fill="none" />
				</svg>
			</span>
			{pages.map((page, index) => this.renderPage(page, index))}
			<span onClick={this.changeSelectedPageClick} key="cg-p-right" className={`cg-page-button cg-right-button ${selected === allPageCount ? 'disabled' : ''}`}>
				<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
					<path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
					<path d="M0-.25h24v24H0z" fill="none" />
				</svg>
			</span>
		</div>
	}
	renderPage = (page, index) => {
		return <span onClick={this.onPageClick} data-page={page} key={`cg-p-${index}`} className={`${typeof page === 'number' ? 'cg-page' : 'cg-page-ellipsis'} ${this.props.selected === page ? 'selected' : ''}`}>{page}</span>
	}

	changeSelectedPageClick = (e) => {
		if (typeof this.props.selectedPageChanged === 'function') {
			let offset = utils.parent(e.target, '.cg-page-button').classList.contains('cg-left-button') ? -1 : 1;
			this.props.selectedPageChanged(this.props.selected + offset);
		}
	}

	onPageClick = (e) => {
		let selected = parseInt(e.target.dataset.page);
		if (typeof this.props.selectedPageChanged === 'function' && selected != this.props.selected) {
			this.props.selectedPageChanged(selected);
		}
	}

	render() {
		const { itemsCount, showCountMsg } = this.props;

		return (
			<div
				className="cg-pagination"
				ref={ref => this._dom = ref}
			>
				{itemsCount > 0 && this.renderPaging()}
				{itemsCount > 0 && showCountMsg && this.renderCountMsg()}
			</div>
		);
	}
}
