import React, { Component } from 'react'
import * as utils from './utils'
import './index.scss'

import HideGridLine from './components/hide-grid-line'
import ColumnResizing from './components/column-resizing'
import Pagination from './components/pagination'
import CustomCell from './components/custom-cell'

const rows = utils.rows
const columns = utils.columns

export default class App extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = { selected: 0, type: 'sample' }
    }

    render() {
        let items = [{
            Name: 'Hide Grid Line',
            CGrid: React.createElement(HideGridLine.CGrid, { rows: rows }),
            Code: HideGridLine.Code
        },
        {
            Name: 'Columns Resizing',
            CGrid: React.createElement(ColumnResizing.CGrid, { rows: rows }),
            Code: ColumnResizing.Code
        },
        {
            Name: 'Pagination',
            CGrid: React.createElement(Pagination.CGrid, { rows: rows }),
            Code: Pagination.Code
        },
        {
            Name: 'Custom Cell',
            CGrid: React.createElement(CustomCell.CGrid, { rows: rows }),
            Code: CustomCell.Code
        }]

        return (
            <div className='cgrid-sample'
            >
                <div className='left-part'>
                    <div className='top-part'>CGrid sample</div>
                    <div className='btm-part'>
                        {
                            items.map((item, index) => {
                                return <div
                                    className={`item ${items[this.state.selected].Name === item.Name ? 'selected' : ''}`}
                                    data-index={index}
                                    key={item.Name}
                                    onClick={(e) => {
                                        this.setState({ selected: e.target.dataset.index })
                                        this.setState({ type: 'sample' })
                                    }}
                                >
                                    {item.Name}
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className='right-part'>
                    <div className='top-part'>
                        <div
                            className={`nav-item ${this.state.type == 'sample' ? 'selected' : ''}`}
                            onClick={() => { this.setState({ type: 'sample' }) }}
                        >
                            Sample
                        </div>
                        <div
                            className={`nav-item ${this.state.type == 'source' ? 'selected' : ''}`}
                            onClick={() => { this.setState({ type: 'source' }) }}
                        >
                            Source
                        </div>
                    </div>
                    <div className='btm-part'>
                        {this.state.type == 'sample' && items[this.state.selected].CGrid}
                        {this.state.type == 'source' && <pre>{items[this.state.selected].Code}</pre>}
                    </div>
                </div>
            </div>
        )
    }
}