import React, { Component } from 'react'
import CGrid from './../../src'

class ColumnResizing extends Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        const { rows } = this.props
        const columns = [
            { key: 'name', label: 'Name' },
            { key: 'email', label: 'Email' },
            { key: 'phone', label: 'Phone' },
            { key: 'city', label: 'City' },
            { key: 'country', label: 'Country' }
        ]

        return <CGrid
            rows={rows}
            columns={columns}
            columnResizing={true}
        />
    }
}

const Code = `
render() {
    const { rows } = this.props
    const columns = [
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email' },
        { key: 'phone', label: 'Phone' },
        { key: 'city', label: 'City' },
        { key: 'country', label: 'Country' }
    ]

    return <CGrid
        rows={rows}
        columns={columns}
        columnResizing={true}
    />
}
`

export default {
    CGrid: ColumnResizing,
    Code: Code
}