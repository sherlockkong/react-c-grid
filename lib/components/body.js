'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _resizeBar = require('./resize-bar');

var _resizeBar2 = _interopRequireDefault(_resizeBar);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _utils = require('./../utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *  Props: 
 *      rows: []
 *      onRenderCell: (key, row) => react element
 */
var Body = function (_React$Component) {
    _inherits(Body, _React$Component);

    function Body(props, context) {
        _classCallCheck(this, Body);

        var _this = _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this, props, context));

        _this.renderRows = function () {
            var _this$props = _this.props,
                rows = _this$props.rows,
                rowHeight = _this$props.rowHeight;

            if (!rows) return null;
            var columns = _this.props.columns ? _this.props.columns : utils.generateColumns(_this.props.rows);

            var height = rowHeight ? rowHeight : utils.DefaultRowHeight;
            var style = {
                height: height + 'px',
                lineHeight: height + 'px'
            };

            return rows.map(function (row, rIndex) {
                return React.createElement(
                    'div',
                    { className: 'cg-row ' + ((rIndex + 1) % 2 == 0 ? 'even' : 'odd'), style: style, key: 'cg-row-' + rIndex },
                    columns.map(function (col, index) {
                        return React.createElement(
                            'div',
                            { style: style, className: 'cg-col-' + index + ' cg-cell', key: 'cell-' + rIndex + '-' + index },
                            _this.renderCell(col.key, row)
                        );
                    })
                );
            });
        };

        _this.renderCell = function (key, row) {
            var onRenderCell = _this.props.onRenderCell;

            if (typeof onRenderCell === 'function') {
                var cell = onRenderCell(key, row);
                return cell === undefined ? row[key] : cell;
            } else {
                return row[key];
            }
        };

        return _this;
    }

    _createClass(Body, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'div',
                {
                    className: 'cg-body',
                    ref: function ref(_ref) {
                        return _this2._dom = _ref;
                    }
                },
                this.renderRows()
            );
        }
    }]);

    return Body;
}(React.Component);

exports.default = Body;