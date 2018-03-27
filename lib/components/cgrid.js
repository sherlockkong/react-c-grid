'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _body = require('./body');

var _body2 = _interopRequireDefault(_body);

var _pagination = require('./pagination');

var _pagination2 = _interopRequireDefault(_pagination);

var _progressBar = require('./progress-bar');

var _progressBar2 = _interopRequireDefault(_progressBar);

var _scrollbar = require('./scrollbar');

var _scrollbar2 = _interopRequireDefault(_scrollbar);

var _utils = require('../utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

utils.nodeListForEachPolyill();

/**
 *  Props: 
 *      rows: []
 *      columns: []
 *      pagination: {}
 *      progressBar: {}
 *      rowHeight: number
 *      autoFit: bool // measure all text in rows.
 *      autoFitWithColumnLabel: bool
 *      columnResizing: bool
 *      hideGridLine: bool
 *      onRenderCell: (key, row) => react element
 *      measureLabelContext: {
 *          fontSize: '13px',
 *          fontWeight: 'bold',
 *          fontFamily: 'Open Sans,Segoe UI,Roboto,Helvetica Neue,Tahoma,Geneva,Verdana,sans-serif'
 *      }
 * 
 *  Column Props:
 *      key: string
 *      label: string
 *      width: number
 */

var CGrid = function (_React$Component) {
    _inherits(CGrid, _React$Component);

    function CGrid(props, context) {
        _classCallCheck(this, CGrid);

        var _this = _possibleConstructorReturn(this, (CGrid.__proto__ || Object.getPrototypeOf(CGrid)).call(this, props, context));

        _this.componentDidMount = function () {
            _this.initGridSize();
            window.addEventListener('resize', _this.updateGridSize);
        };

        _this.componentDidUpdate = function (nextProps) {
            if (nextProps.columns && _this.props.columns) {
                var diff = nextProps.columns.length != _this.props.columns.length;
                if (!diff) {
                    for (var i = 0; i < nextProps.columns.length; i++) {
                        if (nextProps.columns[i].label !== _this.props.columns[i].label) {
                            diff = true;
                            break;
                        }
                    }
                }
                if (diff) _this.initGridSize();
            }

            if (nextProps.rows && _this.props.rows && nextProps.rows.length != _this.props.rows.length) {

                _this.initGridSize();
                _this.updateRowsSize();
            }
        };

        _this.componentWillUnmount = function () {
            window.removeEventListener('resize', _this.updateGridSize);
        };

        _this.initGridSize = function () {
            // update body size
            var minWidth = _this._grid.clientWidth + 'px',
                paginationHeight = _this._pagination && _this._pagination._dom ? _this._pagination._dom.clientHeight : 0,
                minHeight = _this._grid.clientHeight - _this._header._dom.clientHeight - paginationHeight + 'px';
            _this._body._dom.style.minWidth = minWidth;
            _this._body._dom.style.minHeight = minHeight;

            // update cells width
            var colWidths = _this.getColWidths(),
                sum = utils.EmptyHolderWidth;
            colWidths.forEach(function (width, index) {
                sum += width;
                _this._grid.querySelectorAll('.cg-col-' + index).forEach(function (dom) {
                    return dom.style.width = width + 'px';
                });
            });

            // update row size
            _this._grid.querySelectorAll('.cg-row,.cg-header').forEach(function (row) {
                row.style.minWidth = minWidth;
                row.style.width = sum + 'px';
            });
        };

        _this.measureColumn = function (column, span) {
            var _this$props = _this.props,
                rows = _this$props.rows,
                autoFitWithColumnLabel = _this$props.autoFitWithColumnLabel,
                autoFit = _this$props.autoFit,
                measureLabelContext = _this$props.measureLabelContext;

            var getWidth = function getWidth(span) {
                var style = window.getComputedStyle(span);
                return parseInt(style.width);
            };

            var w = 0;
            if (autoFit) {
                span.textContent = column.label;
                var init = getWidth(span);
                span.style.fontWeight = measureLabelContext && measureLabelContext.fontWeight ? measureLabelContext.fontWeight : 'normal';
                w = rows.reduce(function (width, row) {
                    span.textContent = row[column.key];
                    var nw = getWidth(span);
                    if (nw > width) width = nw;
                    return width;
                }, init);
            } else {
                if (autoFitWithColumnLabel) {
                    span.textContent = column.label;
                    w = getWidth(span);
                }
            }
            w += 15; // add offset

            if (column.maxWidthForAutoFit && w > column.maxWidthForAutoFit) {
                w = column.maxWidthForAutoFit;
            }

            return w;
        };

        _this.getColWidths = function () {
            var bodyWidth = _this._grid.clientWidth - utils.EmptyHolderWidth;
            var columns = _this.props.columns ? _this.props.columns : utils.generateColumns(_this.props.rows);

            var span = _this.appendMeasureSpan();
            var colWidths = [],
                indexs = [],
                w = 0;
            columns.forEach(function (col, index) {
                var width = -1;
                if (col.minWidth) width = col.minWidth;
                if (col.width && col.width > width) width = col.width;

                if (_this.props.autoFitWithColumnLabel || _this.props.autoFit) {
                    var _w = _this.measureColumn(col, span);
                    if (_w > width) width = _w;
                }

                if (width === -1) {
                    indexs.push(index);
                    colWidths.push(undefined);
                } else {
                    colWidths.push(width);
                    w += width;
                }
            });
            _this.removeMessureSpan(span);

            if (indexs.length > 0) {
                var k = bodyWidth - w;
                if (k > 0) {
                    // All known width less than body width.
                    var l = parseInt(k / indexs.length);
                    indexs.forEach(function (index, i) {
                        if (i === indexs.length - 1) {
                            colWidths[index] = k - (indexs.length - 1) * l;
                        } else {
                            colWidths[index] = l;
                        }
                    });
                } else {
                    indexs.forEach(function (index, i) {
                        return colWidths[index] = utils.DefaultCellWidth;
                    });
                }
            }

            return colWidths;
        };

        _this.updateGridSize = function () {
            // update cells width
            var row = _this._header._dom.querySelector('.cg-row'),
                rowWidth = parseInt(row.style.width),
                cells = row.querySelectorAll('.cg-h-cell');

            // update body size
            var bodyWidth = _this._grid.clientWidth + 'px',
                paginationHeight = _this._pagination && _this._pagination._dom ? _this._pagination._dom.clientHeight : 0,
                bodyMinHeight = _this._grid.clientHeight - _this._header._dom.clientHeight - paginationHeight + 'px';

            _this._body._dom.style.minHeight = bodyMinHeight;

            if (_this._grid.clientWidth >= rowWidth) {
                _this._body._dom.style.minWidth = bodyWidth;

                var sum = 0;
                cells.forEach(function (cell, index) {
                    if (index !== cells.length - 1) sum += parseInt(cell.style.width);
                });
                var lastCellWidth = rowWidth - sum - utils.EmptyHolderWidth + 'px';

                // update row size
                _this._grid.querySelectorAll('.cg-row').forEach(function (row) {
                    row.style.minWidth = bodyWidth;
                    row.style.width = bodyWidth;

                    // update last cell width
                    row.querySelector('.cg-col-' + (cells.length - 1)).style.width = lastCellWidth;
                });
            }
        };

        _this.updateRowsSize = function () {
            // update cells width
            var colWidths = [];
            _this._header._dom.querySelectorAll('.cg-h-cell').forEach(function (c) {
                return colWidths.push(c.style.width);
            });
            colWidths.forEach(function (width, index) {
                _this._body._dom.querySelectorAll('.cg-col-' + index).forEach(function (dom) {
                    return dom.style.width = width;
                });
            });

            // update row size
            _this._grid.querySelectorAll('.cg-row,.cg-header').forEach(function (row) {
                row.style.minWidth = _this._header._dom.style.minWidth;
                row.style.width = _this._header._dom.style.width;
            });
        };

        _this.appendMeasureSpan = function () {
            var measureLabelContext = _this.props.measureLabelContext;

            if (typeof document !== 'undefined') {
                var span = document.createElement('span');
                span.style.fontSize = measureLabelContext && measureLabelContext.fontSize ? measureLabelContext.fontSize : '13px';
                span.style.fontWeight = measureLabelContext && measureLabelContext.fontWeight ? measureLabelContext.fontWeight : 'bold';
                span.style.padding = measureLabelContext && measureLabelContext.padding ? measureLabelContext.padding : '0 8px';
                span.style.fontFamily = measureLabelContext && measureLabelContext.fontFamily ? measureLabelContext.fontFamily : 'Open Sans,Segoe UI,Roboto,Helvetica Neue,Tahoma,Geneva,Verdana,sans-serif';
                span.style.whiteSpace = 'nowrap';
                span.style.position = 'absolute';
                span.style.top = -9999;
                document.body.appendChild(span);

                return span;
            }
        };

        _this.removeMessureSpan = function (span) {
            if (span) document.body.removeChild(span);
        };

        _this.onScroll = function (scrollLeft) {
            _this._header._dom.style.left = -scrollLeft + 'px';
        };

        _this._gridId = 'cgrid-' + Math.round(1000000 * Math.random());
        return _this;
    }

    _createClass(CGrid, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                rows = _props.rows,
                columns = _props.columns,
                progressBar = _props.progressBar,
                pagination = _props.pagination,
                rowHeight = _props.rowHeight,
                onRenderCell = _props.onRenderCell,
                hideGridLine = _props.hideGridLine;


            var style = {
                height: '' + (pagination ? 'calc(100% - 50px)' : '100%')
            };

            return React.createElement(
                'div',
                {
                    className: 'c-grid-wrapper ' + (hideGridLine ? 'hide-grid-line' : ''),
                    style: { width: '100%', height: '100%', position: 'relative' }
                },
                React.createElement(
                    'div',
                    {
                        id: this._gridId,
                        className: 'c-grid',
                        ref: function ref(_ref3) {
                            return _this2._grid = _ref3;
                        },
                        style: style
                    },
                    React.createElement(_header2.default, {
                        gridId: this._gridId,
                        rows: rows,
                        columnResizing: this.props.columnResizing,
                        columns: columns,
                        rowHeight: rowHeight,
                        ref: function ref(_ref) {
                            return _this2._header = _ref;
                        }
                    }),
                    React.createElement(
                        _scrollbar2.default,
                        {
                            onScroll: this.onScroll
                        },
                        React.createElement(_body2.default, {
                            rows: rows,
                            columns: columns,
                            rowHeight: rowHeight,
                            ref: function ref(_ref2) {
                                return _this2._body = _ref2;
                            },
                            onRenderCell: onRenderCell
                        }),
                        progressBar && React.createElement(_progressBar2.default, progressBar)
                    )
                ),
                pagination && React.createElement(_pagination2.default, _extends({ ref: function ref(_ref4) {
                        return _this2._pagination = _ref4;
                    } }, pagination))
            );
        }
    }]);

    return CGrid;
}(React.Component);

exports.default = CGrid;