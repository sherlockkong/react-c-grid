import * as React from 'react'
import * as utils from './../utils'

export default class Scrollbar extends React.Component {
    constructor(props, context) {
        super(props, context)

        this._mouseDownOffsetY = undefined
        this._mouseDownOffsetX = undefined
        this._hideScrollbarTimerId = undefined
    }

    componentDidMount = () => {
        this.updateScrollBarSize()
        this.attachEvents()
    }
    componentDidUpdate = () => {
        this.updateScrollBarSize()
    }
    componentWillUnmount = () => {
        this.detachEvents()
    }

    attachEvents = () => {
        window.addEventListener('resize', this.onWindowResize)
        document.addEventListener('cgrid-column-resizing', this.onColumnResize)
        document.addEventListener('mouseup', this.onDocumentMouseUp)
        document.addEventListener('mousemove', this.onDocumentMouseMove)
    }
    detachEvents = () => {
        window.removeEventListener('resize', this.onWindowResize)
        document.removeEventListener('cgrid-column-resizing', this.onColumnResize)
        document.removeEventListener('mouseup', this.onDocumentMouseUp)
        document.removeEventListener('mousemove', this.onDocumentMouseMove)
    }
    onWindowResize = () => {
        setTimeout(this.updateScrollBarSize, 1)
    }
    onColumnResize = () => {
        setTimeout(this.updateScrollBarSize, 1)
    }
    onDocumentMouseUp = (e) => {
        this._mouseDownOffsetY = undefined
        this._mouseDownOffsetX = undefined
    }
    onDocumentMouseMove = (e) => {
        if (this._mouseDownOffsetY !== undefined) {
            this.updateVBarPosition(e.clientY - this._mouseDownOffsetY)
        }

        if (this._mouseDownOffsetX !== undefined) {
            this.updateHBarPosition(e.clientX - this._mouseDownOffsetX)
        }
    }
    onScroll = (e) => {
        this.showScrollbar()
        this.updateScrollbarPostion()

        if (this._hideScrollbarTimerId !== undefined) {
            window.clearTimeout(this.hideScrollbarTimerId)
        }
        this.hideScrollbar()

        this.props.onScroll(this._container.scrollLeft)
    }

    updateScrollBarSize = () => {
        // vertical scrollbar
        let vBarHeight = Math.ceil(this._container.clientHeight / (this._container.scrollHeight / this._container.clientHeight))
        vBarHeight = vBarHeight === this._container.clientHeight ? 0 : vBarHeight
        this._vBarContainer.style.display = vBarHeight === 0 ? 'none' : 'block'

        // horizontal scrollbar
        let hBarWidth = Math.ceil(this._container.clientWidth / (this._container.scrollWidth / this._container.clientWidth))
        hBarWidth = hBarWidth === this._container.clientWidth ? 0 : hBarWidth
        this._hBarContainer.style.display = hBarWidth === 0 ? 'none' : 'block'

        this._vBar.style.height = `${vBarHeight - (hBarWidth !== 0 ? this._hBarContainer.clientHeight : 0)}px`
        this._hBar.style.width = `${hBarWidth - (vBarHeight !== 0 ? this._vBarContainer.clientWidth : 0)}px`
    }
    updateScrollbarPostion = () => {
        let top = Math.ceil(this._container.scrollTop / this._container.scrollHeight * this._container.clientHeight)
        this._vBar.style.top = `${this.adjustVerticalScrollbarTop(top)}px`

        let left = Math.ceil(this._container.scrollLeft / this._container.scrollWidth * this._container.clientWidth)
        this._hBar.style.left = `${this.adjustHorizontalScrollbarLeft(left)}px`
    }
    adjustVerticalScrollbarTop = (top) => {
        if (top < 0) return 0
        let maxTop = this._vBarContainer.clientHeight - this._vBar.clientHeight
        return Math.min(top, maxTop)
    }
    adjustHorizontalScrollbarLeft = (left) => {
        if (left < 0) return 0
        let maxLeft = this._hBarContainer.clientWidth - this._hBar.clientWidth
        return Math.min(left, maxLeft)
    }

    onVBarContainerMouseDown = (e) => {
        this.updateVBarPosition(e.clientY)
    }
    onVBarMouseDown = (e) => {
        let rect = this._vBar.getBoundingClientRect()
        this._mouseDownOffsetY = e.clientY - rect.y
        e.preventDefault()
        e.stopPropagation()
    }
    updateVBarPosition = (clientY) => {
        let rect = this._vBarContainer.getBoundingClientRect()
        let offset = Math.ceil(this._container.scrollHeight / rect.height * (clientY - rect.y))
        this._container.scrollTop = offset
    }
    renderVerticalScrollbar = () => {
        return <div
            className="vertical-scrollbar-container"
            ref={ref => this._vBarContainer = ref}
            onMouseDown={this.onVBarContainerMouseDown}
            onMouseMove={this.showScrollbar}
            onMouseEnter={this.showScrollbar}
        >
            <div
                className="vertical-scrollbar scrollbar"
                ref={ref => this._vBar = ref}
                onMouseDown={this.onVBarMouseDown}
                onMouseMove={this.showScrollbar}
                onMouseEnter={this.showScrollbar}
            >
            </div>
        </div>
    }

    onHBarContainerMouseDown = (e) => {
        this.updateHBarPosition(e.clientX)
    }
    onHBarMouseDown = (e) => {
        let rect = this._hBar.getBoundingClientRect()
        this._mouseDownOffsetX = e.clientX - rect.x
        e.preventDefault()
        e.stopPropagation()
    }
    updateHBarPosition = (clientX) => {
        let rect = this._hBarContainer.getBoundingClientRect()
        let offset = Math.ceil(this._container.scrollWidth / rect.width * (clientX - rect.x))
        this._container.scrollLeft = offset
    }
    renderHorizontalScrollbar = () => {
        return <div
            className="horizontal-scrollbar-container"
            ref={ref => this._hBarContainer = ref}
            onMouseDown={this.onHBarContainerMouseDown}
            onMouseMove={this.showScrollbar}
            onMouseEnter={this.showScrollbar}
        >
            <div
                className="horizontal-scrollbar scrollbar"
                ref={ref => this._hBar = ref}
                onMouseDown={this.onHBarMouseDown}
                onMouseMove={this.showScrollbar}
                onMouseEnter={this.showScrollbar}
            >
            </div>
        </div>
    }

    showScrollbar = () => {
        this._vBar.style.opacity = 1
        this._hBar.style.opacity = 1
    }
    hideScrollbar = () => {
        this._hideScrollbarTimerId = setTimeout(() => {
            if (this._vBar) this._vBar.style.opacity = 0
            if (this._hBar) this._hBar.style.opacity = 0
        }, 500)
    }

    onMouseLeave = (e) => {
        if (this._mouseDownOffsetX === undefined &&
            this._mouseDownOffsetY === undefined &&
            this._container === e.currentTarget) {
            this.hideScrollbar()
        }
    }

    render() {
        const scrollbarWidth = utils.getScrollbarWidth()

        const containerStyle = {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: 'scroll',
            marginRight: scrollbarWidth ? `${-scrollbarWidth}px` : 0,
            marginBottom: scrollbarWidth ? `${-scrollbarWidth}px` : 0
        }

        const wrapperStyle = {
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            height: '100%'
        }

        return <div style={wrapperStyle}>
            <div style={containerStyle}
                ref={ref => this._container = ref}
                onScroll={this.onScroll}
                onMouseEnter={this.showScrollbar}
                onMouseLeave={this.onMouseLeave}
            >
                {this.props.children && this.props.children}
            </div>

            {this.renderVerticalScrollbar()}
            {this.renderHorizontalScrollbar()}
        </div>
    }
}