'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _ResizeBar = require('./ResizeBar');

var _ResizeBar2 = _interopRequireDefault(_ResizeBar);

var _Sorting = require('./Sorting');

var _Sorting2 = _interopRequireDefault(_Sorting);

var _utils = require('../utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *  Props: 
 *      columns: []
 */
var Header = function (_React$PureComponent) {
	_inherits(Header, _React$PureComponent);

	function Header() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Header);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), _this), _this.renderColumns = function () {
			var columns = _this.props.columns ? _this.props.columns : utils.generateColumns(_this.props.rows);
			var height = _this.props.rowHeight ? _this.props.rowHeight : utils.DefaultRowHeight;
			var style = {
				height: height + 'px',
				lineHeight: height + 'px'
			};

			return React.createElement(
				'div',
				{ className: 'cg-row', style: style },
				columns.map(function (col, index) {
					return React.createElement(
						'div',
						{
							style: style,
							className: 'cg-col-' + index + ' cg-h-cell ' + (col.sorting ? 'can-sort' : ''),
							key: 'col-' + index,
							'data-col-index': index
						},
						col.label,
						_this.props.columnResizing && React.createElement(_ResizeBar2.default, { colIndex: index, column: col }),
						col.sorting && React.createElement(_Sorting2.default, { colIndex: index, column: col })
					);
				})
			);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Header, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			return React.createElement(
				'div',
				{
					className: 'cg-header',
					ref: function ref(_ref2) {
						return _this2._dom = _ref2;
					}
				},
				this.renderColumns()
			);
		}
	}]);

	return Header;
}(React.PureComponent);

exports.default = Header;