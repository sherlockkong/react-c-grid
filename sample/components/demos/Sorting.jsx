import React, { Component } from 'react';
import CGrid from '../../../src';

class Sorting extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = { rows: null };
	}

	componentDidMount = () => this.setState({ rows: this.props.rows })

	nameSortASC = (item1, item2) => {
		if (item1.name > item2.name) return 1;
		if (item1.name < item2.name) return -1;
		return 0;
	}

	phoneSortASC = (item1, item2) => parseInt(item1.phone.substr(0, 3)) - parseInt(item2.phone.substr(0, 3))

	onSort = (key, order) => {
		const sortFunc = key === 'name' ? this.nameSortASC : this.phoneSortASC;

		this.setState({
			rows: this.state.rows.sort((item1, item2) =>
				order === 'ASC' ? sortFunc(item1, item2) : -sortFunc(item1, item2)
			).concat([])
		});
	}

	render() {
		if (!this.state.rows) return null;

		const sorting = { onSort: this.onSort };

		const columns = [
			{ key: 'name', label: 'Name', sorting },
			{ key: 'email', label: 'Email' },
			{ key: 'phone', label: 'Phone', sorting },
			{ key: 'city', label: 'City' },
			{ key: 'country', label: 'Country' }
		];

		return <CGrid
			rows={this.state.rows}
			columns={columns}
		/>
	}
}

const Code = `
class Sorting extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = { rows: null };
    }

    componentDidMount = () => this.setState({ rows: this.props.rows })

    nameSortASC = (item1, item2) => {
        if (item1.name > item2.name) return 1;
        if (item1.name < item2.name) return -1;
        return 0;
    }

    phoneSortASC = (item1, item2) => parseInt(item1.phone.substr(0, 3)) - parseInt(item2.phone.substr(0, 3))

    onSort = (key, order) => {
        const sortFunc = key === 'name' ? this.nameSortASC : this.phoneSortASC;

        this.setState({
            rows: this.state.rows.sort((item1, item2) =>
                order === 'ASC' ? sortFunc(item1, item2) : -sortFunc(item1, item2)
            ).concat([])
        });
    }

    render() {
        if (!this.state.rows) return null;

        const sorting = { onSort: this.onSort };

        const columns = [
            { key: 'name', label: 'Name', sorting },
            { key: 'email', label: 'Email' },
            { key: 'phone', label: 'Phone', sorting },
            { key: 'city', label: 'City' },
            { key: 'country', label: 'Country' }
        ];

        return <CGrid
            rows={this.state.rows}
            columns={columns}
        />
    }
}
`

export default {
	CGrid: Sorting,
	Code: Code
}