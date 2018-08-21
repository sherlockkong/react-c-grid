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

var OrderType = {
    ASC: 'ASC',
    DESC: 'DESC'
};

var Sorting = function (_React$Component) {
    _inherits(Sorting, _React$Component);

    function Sorting(props, context) {
        _classCallCheck(this, Sorting);

        var _this = _possibleConstructorReturn(this, (Sorting.__proto__ || Object.getPrototypeOf(Sorting)).call(this, props, context));

        _this.componentDidMount = function () {
            _this._grid = utils.parent(_this._dom, '.c-grid');
            _this._col = utils.parent(_this._dom, '.cg-h-cell');
            _this._col.addEventListener('click', _this.onMouseClick);
        };

        _this.componentWillUnmount = function () {
            _this._col.removeEventListener('click', _this.onMouseClick);
        };

        _this.onMouseClick = function (e) {
            if (utils.parent(e.target, '.col-resize-bar')) return;

            _this._grid.querySelectorAll('.sort-hd,.cg-h-cell').forEach(function (elem) {
                if (elem !== _this._col && elem !== _this._dom) elem.classList.remove('sorting');
            });

            if (!_this._dom.classList.contains('sorting')) _this._dom.classList.add('sorting');
            if (!_this._col.classList.contains('sorting')) _this._col.classList.add('sorting');

            var orderType = _this.state.orderType === OrderType.ASC ? OrderType.DESC : OrderType.ASC;
            _this.setState({ orderType: orderType });
            _this.props.column.sorting.onSort(_this.props.column.key, orderType);
        };

        _this.state = {
            orderType: OrderType.DESC
        };
        return _this;
    }

    _createClass(Sorting, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var colIndex = this.props.colIndex;


            return React.createElement(
                'div',
                { className: 'sort-hd ' + (this.state.orderType === OrderType.DESC ? 'desc' : ''),
                    'data-col-index': colIndex,
                    ref: function ref(_ref) {
                        return _this2._dom = _ref;
                    }
                },
                React.createElement(
                    'svg',
                    { fill: 'rgba(0, 0, 0, 0.87)', height: '18', viewBox: '0 0 24 24', width: '18', xmlns: 'http://www.w3.org/2000/svg' },
                    React.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }),
                    React.createElement('path', { d: 'M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z' })
                )
            );
        }
    }]);

    return Sorting;
}(React.Component);

exports.default = Sorting;