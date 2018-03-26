import * as React from 'react'
import ResizeBar from './resize-bar'
import Header from './header'
import * as utils from './../utils'

/**
 *  Props: 
 *      rows: []
 *      onRenderCell: (key, row) => react element
 */
export default class Body extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    renderRows = () => {
        const { rows, rowHeight } = this.props
        if (!rows) return null
        let columns = this.props.columns
            ? this.props.columns
            : utils.generateColumns(this.props.rows)

        let height = rowHeight ? rowHeight : utils.DefaultRowHeight
        let style = {
            height: `${height}px`,
            lineHeight: `${height}px`
        }

        let domRows = [this.renderPlaceHolderRow(style)]
            .concat(rows.map((row, rIndex) =>
                <div className={`cg-row ${(rIndex + 1) % 2 == 0 ? 'even' : 'odd'}`} style={style} key={`cg-row-${rIndex}`}>
                    {columns.map((col, index) =>
                        <div style={style} className={`cg-col-${index} cg-cell`} key={`cell-${rIndex}-${index}`}>
                            {this.renderCell(col.key, row)}
                        </div>
                    )}
                </div>
            ))

        return domRows
    }
    renderCell = (key, row) => {
        const { onRenderCell } = this.props
        if (typeof onRenderCell === 'function') {
            let cell = onRenderCell(key, row)
            return cell === undefined ? row[key] : cell
        } else {
            return row[key]
        }
    }
    renderPlaceHolderRow = (style) => {
        return <div
            style={style}
            className='place-holder-row'
            key='place-holder-row'
        >
        </div>
    }

    render() {
        return <div
            className='cg-body'
            ref={ref => this._dom = ref}
        >
            {this.renderRows()}
        </div>
    }
}