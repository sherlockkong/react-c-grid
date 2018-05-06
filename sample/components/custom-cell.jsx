import React, { Component } from 'react'
import CGrid from './../../src'

class CustomCell extends Component {
    constructor(props, context) {
        super(props, context)
    }

    onRenderCell = (key, row) => {
        const style = { height: '100%' }
        if (key === 'action') {
            return (
                <div className='actions' style={style}>
                    <button data-name={row.name} onClick={(e) => { alert(`Edit ${e.target.dataset.name}`) }}>EDIT</button>
                    <button data-name={row.name} onClick={(e) => { alert(`Delete ${e.target.dataset.name}`) }}>DELTE</button>
                </div>
            )
        }
    }

    render() {
        const { rows } = this.props
        const columns = [
            { key: 'name', label: 'Name' },
            { key: 'email', label: 'Email' },
            { key: 'phone', label: 'Phone' },
            { key: 'city', label: 'City' },
            { key: 'action', label: '', width: 250 }
        ]

        return <CGrid
            rows={rows}
            columns={columns}
            onRenderCell={this.onRenderCell}
        />
    }
}

const Code = `
class CustomCell extends Component {
    constructor(props, context) {
        super(props, context)
    }

    onRenderCell = (key, row) => {
        const style = { height: '100%' }
        if (key === 'action') {
            return (
                <div className='actions' style={style}>
                    <button data-name={row.name} onClick={(e) => { alert(\`Edit \${e.target.dataset.name}\`) }}>EDIT</button>
                    <button data-name={row.name} onClick={(e) => { alert(\`Delete \${e.target.dataset.name}\`) }}>DELTE</button>
                </div>
            )
        }
    }

    render() {
        const { rows } = this.props
        const columns = [
            { key: 'name', label: 'Name' },
            { key: 'email', label: 'Email' },
            { key: 'phone', label: 'Phone' },
            { key: 'city', label: 'City' },
            { key: 'action', label: '', width: 250 }
        ]

        return <CGrid
            rows={rows}
            columns={columns}
            onRenderCell={this.onRenderCell}
        />
    }
}
`

export default {
    CGrid: CustomCell,
    Code: Code
}