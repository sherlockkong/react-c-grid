import React, { Component } from 'react'
import CGrid from './../../src'

class HideGridLine extends Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        const { rows } = this.props
        const columns = [
            { key: 'name', label: 'Name' },
            { key: 'email', label: 'Email', width: 300 },
            { key: 'company', label: 'Company' },
            { key: 'city', label: 'City' },
            { key: 'country', label: 'Country' }
        ]

        return <CGrid
            rows={rows}
            columns={columns}
            hideGridLine={true}
        />
    }
}

const Code = `
render() {
    const { rows } = this.props
    const columns = [
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email', width: 300 },
        { key: 'company', label: 'Company' },
        { key: 'city', label: 'City' },
        { key: 'country', label: 'Country' }
    ]

    return <CGrid
        rows={rows}
        columns={columns}
        hideGridLine={true}
    />
}
`

export default {
    CGrid: HideGridLine,
    Code: Code
}