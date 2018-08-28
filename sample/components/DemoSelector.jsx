import React from 'react';

export class DemoSelector extends React.Component {

	componentDidUpdate = () => this.updateIndicatorPosition();
	componentDidMount = () => this.updateIndicatorPosition();

	updateIndicatorPosition = () => {
		let selected = this._container.querySelector('.selected');
		if (selected) {
			let rect = selected.getBoundingClientRect();
			this._indicator.style.top = `${rect.top}px`;
		}
	}

	render() {
		const { items, selected, onSelectedChange } = this.props;

		return (
			<div className="demo-selector">
				<div className="cg-logo"> CGrid </div>
				<div ref={ref => this._container = ref} className="demos-container">
					{items.map((item, index) => (
						<div
							className={`d-item ${items[selected].Name === item.Name ? 'selected' : ''}`}
							data-index={index}
							key={item.Name}
							onClick={e => onSelectedChange(e.target.dataset.index)}
						> {item.Name}
						</div>
					))}
					<div ref={ref => this._indicator = ref} className="d-indicator" />
				</div>
			</div>
		)
	}
}