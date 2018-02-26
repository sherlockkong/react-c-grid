import * as React from 'react'
import ResizeBar from './resize-bar'
import * as utils from './../utils'

/**
 *  Props: 
 *      columns: []
 */
export default class Header extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    renderColumns = () => {
        let columns = this.props.columns
            ? this.props.columns
            : utils.generateColumns(this.props.rows)
        let style = {
            height: `${utils.DefaultRowHeight}px`,
            lineHeight: `${utils.DefaultRowHeight}px`
        }

        return <div className="cg-row" style={style}>
            {columns.map((col, index) =>
                <div style={style} className={`cg-col-${index} cg-h-cell`} key={`col-${index}`} data-col-index={index} >
                    {col.label}
                    {this.props.columnResizing && <ResizeBar colIndex={index} />}
                </div>
            )}
        </div>
    }

    render() {
        return <div
            className="cg-header"
            ref={ref => this._dom = ref}
        >
            {this.renderColumns()}
        </div>
    }
}