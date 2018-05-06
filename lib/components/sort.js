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

var Sort = function (_React$Component) {
    _inherits(Sort, _React$Component);

    function Sort(props, context) {
        _classCallCheck(this, Sort);

        var _this = _possibleConstructorReturn(this, (Sort.__proto__ || Object.getPrototypeOf(Sort)).call(this, props, context));

        _this._up = React.createElement(
            'svg',
            { fill: '#000000', height: '18', viewBox: '0 0 24 24', width: '18', xmlns: 'http://www.w3.org/2000/svg' },
            React.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }),
            React.createElement('path', { d: 'M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z' })
        );

        _this._down = React.createElement(
            'svg',
            { fill: '#000000', height: '18', viewBox: '0 0 24 24', width: '18', xmlns: 'http://www.w3.org/2000/svg' },
            React.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }),
            React.createElement('path', { d: 'M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z', fill: '#010101' })
        );
        return _this;
    }

    _createClass(Sort, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'sort-hd' },
                this._down
            );
        }
    }]);

    return Sort;
}(React.Component);

exports.default = Sort;