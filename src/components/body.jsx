import * as React from 'react'
import ResizeBar from './resize-bar'
import Header from './header'
import * as utils from './../utils'

/**
 *  Props: 
 *      rows: []
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

        let height = rowHeight ? rowHeight: utils.DefaultRowHeight
        let style = {
            height: `${height}px`,
            lineHeight: `${height}px`
        }

        return rows.map((row, rIndex) =>
            <div className="cg-row" style={style} key={`cg-row-${rIndex}`}>
                {columns.map((col, index) =>
                    <div style={style} className={`cg-col-${index} cg-cell`} key={`cell-${rIndex}-${index}`}>
                        {row[col.key]}
                    </div>
                )}
            </div>
        )
    }

    render() {
        return <
            div className="cg-body"
            ref={ref => this._dom = ref}
        >
            {this.renderRows()}
        </div>
    }
}