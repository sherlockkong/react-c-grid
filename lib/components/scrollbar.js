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

var Scrollbar = function (_React$Component) {
	_inherits(Scrollbar, _React$Component);

	function Scrollbar(props, context) {
		_classCallCheck(this, Scrollbar);

		var _this = _possibleConstructorReturn(this, (Scrollbar.__proto__ || Object.getPrototypeOf(Scrollbar)).call(this, props, context));

		_this.componentDidMount = function () {
			_this.updateScrollBarSize();
			_this.attachEvents();
		};

		_this.componentDidUpdate = function () {
			_this.updateScrollBarSize();
		};

		_this.componentWillUnmount = function () {
			_this.detachEvents();
		};

		_this.attachEvents = function () {
			window.addEventListener('resize', _this.onWindowResize);
			document.addEventListener('cgrid-column-resizing', _this.onColumnResize);
			document.addEventListener('mouseup', _this.onDocumentMouseUp);
			document.addEventListener('mousemove', _this.onDocumentMouseMove);
		};

		_this.detachEvents = function () {
			window.removeEventListener('resize', _this.onWindowResize);
			document.removeEventListener('cgrid-column-resizing', _this.onColumnResize);
			document.removeEventListener('mouseup', _this.onDocumentMouseUp);
			document.removeEventListener('mousemove', _this.onDocumentMouseMove);
		};

		_this.onWindowResize = function () {
			_this.updateScrollBarSize();
		};

		_this.onColumnResize = function () {
			_this.updateScrollBarSize();
		};

		_this.onDocumentMouseUp = function (e) {
			_this._mouseDownOffsetY = undefined;
			_this._mouseDownOffsetX = undefined;
			_this.hideScrollbar();
		};

		_this.onDocumentMouseMove = function (e) {
			if (_this._mouseDownOffsetY !== undefined) {
				_this.updateVBarPosition(e.clientY - _this._mouseDownOffsetY);
			}

			if (_this._mouseDownOffsetX !== undefined) {
				_this.updateHBarPosition(e.clientX - _this._mouseDownOffsetX);
			}
		};

		_this.onScroll = function (e) {
			_this.showScrollbar();
			_this.updateScrollbarPostion();
			_this.hideScrollbar();

			_this.props.onScroll(_this._container.scrollLeft);
		};

		_this.updateScrollBarSize = function () {
			var updateBarSize = function updateBarSize() {
				// vertical scrollbar
				var vBarHeight = Math.ceil(_this._container.clientHeight / (_this._container.scrollHeight / _this._container.clientHeight));
				vBarHeight = vBarHeight === _this._container.clientHeight ? 0 : vBarHeight;
				_this._vBarContainer.style.display = vBarHeight === 0 ? 'none' : 'block';

				// horizontal scrollbar
				var hBarWidth = Math.ceil(_this._container.clientWidth / (_this._container.scrollWidth / _this._container.clientWidth));
				hBarWidth = hBarWidth === _this._container.clientWidth ? 0 : hBarWidth;
				_this._hBarContainer.style.display = hBarWidth === 0 ? 'none' : 'block';

				_this._vBar.style.height = vBarHeight - (hBarWidth !== 0 ? _this._hBarContainer.clientHeight : 0) + 'px';
				_this._hBar.style.width = hBarWidth - (vBarHeight !== 0 ? _this._vBarContainer.clientWidth : 0) + 'px';
			};

			setTimeout(updateBarSize, 1);
		};

		_this.updateScrollbarPostion = function () {
			var top = Math.ceil(_this._container.scrollTop / _this._container.scrollHeight * _this._container.clientHeight);
			_this._vBar.style.top = _this.adjustVerticalScrollbarTop(top) + 'px';

			var left = Math.ceil(_this._container.scrollLeft / _this._container.scrollWidth * _this._container.clientWidth);
			_this._hBar.style.left = _this.adjustHorizontalScrollbarLeft(left) + 'px';
		};

		_this.adjustVerticalScrollbarTop = function (top) {
			if (top < 0) return 0;
			var maxTop = _this._vBarContainer.clientHeight - _this._vBar.clientHeight;
			return Math.min(top, maxTop);
		};

		_this.adjustHorizontalScrollbarLeft = function (left) {
			if (left < 0) return 0;
			var maxLeft = _this._hBarContainer.clientWidth - _this._hBar.clientWidth;
			return Math.min(left, maxLeft);
		};

		_this.onVBarContainerMouseDown = function (e) {
			_this.updateVBarPosition(e.clientY);
		};

		_this.onVBarMouseDown = function (e) {
			var rect = _this._vBar.getBoundingClientRect();
			_this._mouseDownOffsetY = e.clientY - rect.top;
			e.preventDefault();
			e.stopPropagation();
		};

		_this.updateVBarPosition = function (clientY) {
			var rect = _this._vBarContainer.getBoundingClientRect();
			var offset = Math.ceil(_this._container.scrollHeight / rect.height * (clientY - rect.top));
			_this._container.scrollTop = offset;
		};

		_this.renderVerticalScrollbar = function () {
			return React.createElement(
				'div',
				{
					className: 'vertical-scrollbar-container',
					ref: function ref(_ref2) {
						return _this._vBarContainer = _ref2;
					},
					onMouseDown: _this.onVBarContainerMouseDown,
					onMouseMove: _this.showScrollbar,
					onMouseEnter: _this.showScrollbar
				},
				React.createElement('div', {
					className: 'vertical-scrollbar scrollbar',
					ref: function ref(_ref) {
						return _this._vBar = _ref;
					},
					onMouseDown: _this.onVBarMouseDown,
					onMouseMove: _this.showScrollbar,
					onMouseEnter: _this.showScrollbar
				})
			);
		};

		_this.onHBarContainerMouseDown = function (e) {
			_this.updateHBarPosition(e.clientX);
		};

		_this.onHBarMouseDown = function (e) {
			var rect = _this._hBar.getBoundingClientRect();
			_this._mouseDownOffsetX = e.clientX - rect.left;
			e.preventDefault();
			e.stopPropagation();
		};

		_this.updateHBarPosition = function (clientX) {
			var rect = _this._hBarContainer.getBoundingClientRect();
			var offset = Math.ceil(_this._container.scrollWidth / rect.width * (clientX - rect.left));
			_this._container.scrollLeft = offset;
		};

		_this.renderHorizontalScrollbar = function () {
			return React.createElement(
				'div',
				{
					className: 'horizontal-scrollbar-container',
					ref: function ref(_ref4) {
						return _this._hBarContainer = _ref4;
					},
					onMouseDown: _this.onHBarContainerMouseDown,
					onMouseMove: _this.showScrollbar,
					onMouseEnter: _this.showScrollbar
				},
				React.createElement('div', {
					className: 'horizontal-scrollbar scrollbar',
					ref: function ref(_ref3) {
						return _this._hBar = _ref3;
					},
					onMouseDown: _this.onHBarMouseDown,
					onMouseMove: _this.showScrollbar,
					onMouseEnter: _this.showScrollbar
				})
			);
		};

		_this.showScrollbar = function () {
			_this._vBar.style.opacity = 1;
			_this._hBar.style.opacity = 1;
		};

		_this.hideScrollbar = function () {
			if (_this._hideScrollbarTimerId !== undefined) {
				window.clearTimeout(_this.hideScrollbarTimerId);
			}

			_this._hideScrollbarTimerId = setTimeout(function () {
				if (_this._mouseDownOffsetY === undefined && _this._mouseDownOffsetX === undefined) {
					if (_this._vBar) _this._vBar.style.opacity = 0;
					if (_this._hBar) _this._hBar.style.opacity = 0;
				}
			}, 500);
		};

		_this.onMouseEnter = function () {
			_this.showScrollbar();
			_this.hideScrollbar();
		};

		_this.onMouseLeave = function (e) {
			if (_this._mouseDownOffsetX === undefined && _this._mouseDownOffsetY === undefined && _this._container === e.currentTarget) {
				_this.hideScrollbar();
			}
		};

		_this._mouseDownOffsetY = undefined;
		_this._mouseDownOffsetX = undefined;
		_this._hideScrollbarTimerId = undefined;
		return _this;
	}

	_createClass(Scrollbar, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var scrollbarWidth = utils.getScrollbarWidth();

			var containerStyle = {
				position: 'absolute',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				overflow: 'scroll',
				marginRight: scrollbarWidth ? -scrollbarWidth + 'px' : 0,
				marginBottom: scrollbarWidth ? -scrollbarWidth + 'px' : 0
			};

			var wrapperStyle = {
				position: 'relative',
				overflow: 'hidden',
				width: '100%',
				height: '100%'
			};

			return React.createElement(
				'div',
				{ style: wrapperStyle },
				React.createElement(
					'div',
					{ style: containerStyle,
						ref: function ref(_ref5) {
							return _this2._container = _ref5;
						},
						onScroll: this.onScroll,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					},
					this.props.children && this.props.children
				),
				this.renderVerticalScrollbar(),
				this.renderHorizontalScrollbar()
			);
		}
	}]);

	return Scrollbar;
}(React.Component);

exports.default = Scrollbar;