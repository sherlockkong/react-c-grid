'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _utils = require('./../utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *  Props: 
 *      colIndex: number
 *      column: Column
 */

var ResizeBar = function (_React$Component) {
    _inherits(ResizeBar, _React$Component);

    function ResizeBar(props, context) {
        _classCallCheck(this, ResizeBar);

        var _this = _possibleConstructorReturn(this, (ResizeBar.__proto__ || Object.getPrototypeOf(ResizeBar)).call(this, props, context));

        _this.componentDidMount = function () {
            _this._grid = utils.parent(_this._dom, '.c-grid');
            document.addEventListener('mousemove', _this.onMouseMove);
            document.addEventListener('mouseup', _this.onMouseUp);
        };

        _this.componentWillUnmount = function () {
            document.removeEventListener('mousemove', _this.onMouseMove);
            document.removeEventListener('mouseup', _this.onMouseUp);
        };

        _this.onMouseDown = function (e) {
            if (e.button === 0) {
                // left button
                var col = utils.parent(e.target, '.cg-h-cell');
                _this._origin = {
                    x: e.screenX,
                    index: col.dataset.colIndex,
                    width: col.clientWidth
                };
            }
        };

        _this.onMouseUp = function (e) {
            if (e.button === 0) {
                // left button
                _this._origin = undefined;

                _this._grid.querySelector('.cg-col-' + _this.props.colIndex + ' .col-resize-bar').classList.remove('active');
            }
        };

        _this.onMouseMove = function (e) {
            var colMinWidth = _this.props.column.minWidth ? _this.props.column.minWidth : _this._colMinWidth;

            if (_this._origin && _this.currentWidth !== colMinWidth) {
                var width = _this._origin.width + (e.screenX - _this._origin.x);
                if (width < colMinWidth) width = colMinWidth;

                var newRowWidth = utils.EmptyHolderWidth,
                    colWidth = width + 'px';

                _this._grid.querySelector('.cg-col-' + _this.props.colIndex + ' .col-resize-bar').classList.add('active');

                _this._grid.querySelectorAll('.cg-col-' + _this.props.colIndex).forEach(function (elem) {
                    return elem.style.width = colWidth;
                });

                _this._grid.querySelectorAll('.cg-header .cg-h-cell').forEach(function (elem) {
                    return newRowWidth += parseInt(elem.style.width);
                });

                var rowWdith = newRowWidth + 'px';

                _this._grid.querySelectorAll('.cg-row,.cg-header').forEach(function (elem) {
                    return elem.style.width = rowWdith;
                });

                var isIE = /*@cc_on!@*/false || !!document.documentMode;
                if (isIE) {
                    var event = document.createEvent('Event');
                    event.initEvent('cgrid-column-resizing', false, true);
                    document.dispatchEvent(event);
                } else {
                    document.dispatchEvent(new Event('cgrid-column-resizing'));
                }
            }
        };

        _this._colMinWidth = 50;
        return _this;
    }

    _createClass(ResizeBar, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var colIndex = this.props.colIndex;


            return React.createElement(
                'div',
                {
                    className: 'col-resize-bar',
                    'data-col-index': '' + colIndex,
                    onMouseDown: this.onMouseDown,
                    ref: function ref(_ref) {
                        return _this2._dom = _ref;
                    }
                },
                React.createElement('div', { className: 'holder holder-left' }),
                React.createElement('div', { className: 'holder holder-right' })
            );
        }
    }]);

    return ResizeBar;
}(React.Component);

exports.default = ResizeBar;