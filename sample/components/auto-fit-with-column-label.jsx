import React, { Component } from 'react'
import CGrid from './../../src'

class AutoFitWidthColumnLabel extends Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        const rows = [{ name: 'auto fit column' }]
        const columns = [
            { key: 'name', label: 'SHORT COLUMN' },
            { key: 'name', label: 'I AM A VERY VERY VERY VERY VERY VERY VERY VERY LANG COLUMN NAME' },
            { key: 'name', label: 'COLUMN NORMAL' },
            { key: 'name', label: 'COLUMN NOT VERY LANG' }
        ]

        // This is the default value of the context.
        // If you do not change the header cell style, you do not need to pass this property.
        const measureLabelContext = {
            fontSize: '13px', 
            fontWeight: 'bold',
            fontFamily: 'Open Sans,Segoe UI,Roboto,Helvetica Neue,Tahoma,Geneva,Verdana,sans-serif'
        }

        return <CGrid
            rows={rows}
            columns={columns}
            autoFitWithColumnLabel={true}
            measureLabelContext={measureLabelContext}
        />
    }
}

const Code = `
render() {
    const rows = [{ name: 'auto fit column' }]
    const columns = [
        { key: 'name', label: 'SHORT COLUMN' },
        { key: 'name', label: 'I AM A VERY VERY VERY VERY VERY VERY VERY VERY LANG COLUMN NAME' },
        { key: 'name', label: 'COLUMN NORMAL' },
        { key: 'name', label: 'COLUMN NOT VERY LANG' }
    ]

    // This is the default value of the context.
    // If you do not change the header cell style, you do not need to pass this property.
    const measureLabelContext = {
        fontSize: '13px', 
        fontWeight: 'bold',
        fontFamily: 'Open Sans,Segoe UI,Roboto,Helvetica Neue,Tahoma,Geneva,Verdana,sans-serif'
    }

    return <CGrid
        rows={rows}
        columns={columns}
        autoFitWithColumnLabel={true}
        measureLabelContext={measureLabelContext}
    />
}
`

export default {
    CGrid: AutoFitWidthColumnLabel,
    Code: Code
}