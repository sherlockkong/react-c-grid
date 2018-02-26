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
        const { rows } = this.props
        if (!rows) return null
        let columns = this.props.columns
            ? this.props.columns
            : utils.generateColumns(this.props.rows)

        let style = {
            height: `${utils.DefaultRowHeight}px`,
            lineHeight: `${utils.DefaultRowHeight}px`
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