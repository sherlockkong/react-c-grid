import React, { Component } from 'react'
import CGrid from './../../src'

class AutoFit extends Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        const { rows } = this.props
        const columns = [
            { key: 'name', label: 'Name' },
            { key: 'email', label: 'Email', maxWidthForAutoFit: 500 },
            { key: 'company', label: 'Company' },
            { key: 'city', label: 'City' },
            { key: 'country', label: 'Country' }
        ]

        return <CGrid
            rows={rows}
            columns={columns}
            autoFit={true}
            hideGridLine={true}
        />
    }
}

const Code = `
render() {
    const { rows } = this.props
    const columns = [
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email', maxWidthForAutoFit: 500 },
        { key: 'company', label: 'Company' },
        { key: 'city', label: 'City' },
        { key: 'country', label: 'Country' }
    ]

    return <CGrid
        rows={rows}
        columns={columns}
        autoFit={true}
        hideGridLine={true}
    />
}
`

export default {
    CGrid: AutoFit,
    Code: Code
}