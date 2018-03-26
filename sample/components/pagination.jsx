import React, { Component } from 'react'
import CGrid from './../../src'

class Pagination extends Component {
    constructor(props, context) {
        super(props, context)

        this.state = { progressBar: { show: false }, selected: 1 }
    }

    selectedPageChanged = (selected) => {
        this.setState({ selected: selected })
        this.setState({
            progressBar: {
                show: true,
                color: 'rgb(29,169,240)',
                background: 'rgb(199,199,199)'
            }
        })

        setTimeout(() => {
            this.setState({ progressBar: { show: false } })
        }, 1000)
    }

    render() {
        const { rows } = this.props
        const columns = [
            { key: 'name', label: 'Name' },
            { key: 'email', label: 'Email' },
            { key: 'company', label: 'Company' },
            { key: 'phone', label: 'Phone' },
            { key: 'city', label: 'City' }
        ]

        let pagination = {
            pageSize: 22,
            selected: this.state.selected,
            itemsCount: rows.length,
            visiblePageCount: 6,
            showCountMsg: true,
            selectedPageChanged: this.selectedPageChanged
        }
        let subRows = rows.slice(
            (this.state.selected - 1) * pagination.pageSize,
            this.state.selected * pagination.pageSize)

        return <CGrid
            hideGridLine={true}
            rows={subRows}
            columns={columns}
            pagination={pagination}
            columnResizing={true}
            progressBar={this.state.progressBar}
        />
    }
}

const Code = `
selectedPageChanged = (selected) => {
    this.setState({ selected: selected })
    this.setState({
        progressBar: {
            show: true,
            color: 'rgb(29,169,240)',
            background: 'rgb(199,199,199)'
        }
    })

    setTimeout(() => {
        this.setState({ progressBar: { show: false } })
    }, 1000)
}

render() {
    const { rows } = this.props
    const columns = [
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email' },
        { key: 'company', label: 'Company' },
        { key: 'phone', label: 'Phone' },
        { key: 'city', label: 'City' }
    ]

    let pagination = {
        pageSize: 22,
        selected: this.state.selected,
        itemsCount: rows.length,
        visiblePageCount: 6,
        showCountMsg: true,
        selectedPageChanged: this.selectedPageChanged
    }
    let subRows = rows.slice(
        (this.state.selected - 1) * pagination.pageSize,
        this.state.selected * pagination.pageSize)

    return <CGrid
        rows={subRows}
        columns={columns}
        pagination={pagination}
        progressBar={this.state.progressBar}
    />
}
`

export default {
    CGrid: Pagination,
    Code: Code
}