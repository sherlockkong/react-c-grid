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
 *      show: bool
 *      color: string
 *      background: string
 */

var ProgressBar = function (_React$Component) {
    _inherits(ProgressBar, _React$Component);

    function ProgressBar(props, context) {
        _classCallCheck(this, ProgressBar);

        var _this = _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).call(this, props, context));

        _this.componentDidMount = function () {
            return _this.checkEvent();
        };

        _this.componentDidUpdate = function () {
            return _this.checkEvent();
        };

        _this.componentWillUnmount = function () {
            if (_this._timer) {
                clearInterval(_this._timer);
                _this._timer = undefined;
                utils.enableScroll();
            }
        };

        _this.checkEvent = function () {
            var show = _this.props.show;


            if (show) {
                if (!_this._timer) {
                    _this._timer = setInterval(_this.updateBar, 80);
                    utils.disableScroll();
                }
            } else {
                if (_this._timer) {
                    clearInterval(_this._timer);
                    _this._timer = undefined;
                    utils.enableScroll();
                }
            }
        };

        _this.updateBar = function () {
            if (_this.props.show) {
                var grid = utils.parent(_this._barBg, '.c-grid');
                var rect = grid.getBoundingClientRect();
                _this._wrapper.style.left = rect.left + 'px';
                _this._wrapper.style.right = rect.right + 'px';
                _this._wrapper.style.top = rect.top + 'px';
                _this._wrapper.style.bottom = rect.bottom + 'px';
                _this._wrapper.style.width = rect.width + 'px';
                _this._wrapper.style.height = rect.height + 'px';

                if (_this.props.background) _this._barBg.style.background = _this.props.background;
                if (_this.props.color) _this._bar.style.background = _this.props.color;

                var headerHeight = grid.querySelector('.cg-header').clientHeight;
                _this._barBg.style.top = headerHeight + 'px';
                _this._barBg.style.display = 'block';

                var barWidth = parseInt(_this._barBg.clientWidth / 4);
                _this._bar.style.width = barWidth + 'px';
                var step = parseInt(_this._barBg.clientWidth / 10);
                var newLeft = _this._bar.style.left ? parseInt(_this._bar.style.left) + step : -step;
                if (newLeft > _this._barBg.clientWidth + barWidth / 2) {
                    _this._bar.style.transition = 'none';
                    _this._bar.style.left = -barWidth + 'px';
                } else {
                    _this._bar.style.transition = 'all .3s';
                    _this._bar.style.left = newLeft + 'px';
                }
            }
        };

        return _this;
    }

    _createClass(ProgressBar, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var show = this.props.show;


            return React.createElement(
                'div',
                {
                    className: 'cg-progress-bar-wrapper ' + (show ? 'show' : ''),
                    ref: function ref(_ref3) {
                        return _this2._wrapper = _ref3;
                    }
                },
                React.createElement(
                    'div',
                    { ref: function ref(_ref2) {
                            return _this2._barBg = _ref2;
                        }, className: 'cg-progress-bar-bg' },
                    React.createElement('div', { ref: function ref(_ref) {
                            return _this2._bar = _ref;
                        }, className: 'cg-progress-bar' })
                )
            );
        }
    }]);

    return ProgressBar;
}(React.Component);

exports.default = ProgressBar;