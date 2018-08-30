import * as React from 'react';
import * as utils from '../utils';

/**
 *  Props: 
 *      show: bool
 *      color: string
 *      background: string
 */

export default class ProgressBar extends React.Component {
	componentDidMount = () => this.checkEvent()
	componentDidUpdate = () => this.checkEvent()
	componentWillUnmount = () => {
		if (this._timer) {
			clearInterval(this._timer);
			this._timer = undefined;
			utils.enableScroll();
		}
	}

	checkEvent = () => {
		const { show } = this.props;

		if (show) {
			if (!this._timer) {
				this._timer = setInterval(this.updateBar, 80);
				utils.disableScroll();
			}
		}
		else {
			if (this._timer) {
				clearInterval(this._timer);
				this._timer = undefined;
				utils.enableScroll();
			}
		}
	}
	updateBar = () => {
		if (this.props.show) {
			let grid = utils.parent(this._barBg, '.c-grid');
			let rect = grid.getBoundingClientRect();
			this._wrapper.style.left = `${rect.left}px`;
			this._wrapper.style.right = `${rect.right}px`;
			this._wrapper.style.top = `${rect.top}px`;
			this._wrapper.style.bottom = `${rect.bottom}px`;
			this._wrapper.style.width = `${rect.width}px`;
			this._wrapper.style.height = `${rect.height}px`;

			if (this.props.background) this._barBg.style.background = this.props.background;
			if (this.props.color) this._bar.style.background = this.props.color;

			let headerHeight = grid.querySelector('.cg-header').clientHeight;
			this._barBg.style.top = `${headerHeight}px`;
			this._barBg.style.display = 'block';

			let barWidth = parseInt(this._barBg.clientWidth / 4);
			this._bar.style.width = `${barWidth}px`;
			let step = parseInt(this._barBg.clientWidth / 10);
			let newLeft = this._bar.style.left
				? parseInt(this._bar.style.left) + step
				: -step;

			if (newLeft > this._barBg.clientWidth + barWidth / 2) {
				this._bar.style.transition = 'none';
				this._bar.style.left = `${-barWidth}px`;
			}
			else {
				this._bar.style.transition = 'all .3s';
				this._bar.style.left = `${newLeft}px`;
			}
		}
	}

	render() {
		const { show } = this.props;

		return (
			<div
				className={`cg-progress-bar-wrapper ${show ? 'show' : ''}`}
				ref={ref => this._wrapper = ref}
			>
				<div ref={ref => this._barBg = ref} className="cg-progress-bar-bg">
					<div ref={ref => this._bar = ref} className="cg-progress-bar"></div>
				</div>
			</div>
		);
	}
}