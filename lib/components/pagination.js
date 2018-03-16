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
 *      pageSize: number
 *      itemsCount: number
 *      selected: bool
 *      showCountMsg: string
 *      visiblePageCount: number (min-value : 3)
 *      onFormatCountMsg: (selected, pageSize, itemsCount) => html
 *      selectedPageChanged: (selected) => { }
 */

var Pagination = function (_React$Component) {
    _inherits(Pagination, _React$Component);

    function Pagination(props, context) {
        _classCallCheck(this, Pagination);

        var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props, context));

        _this.renderCountMsg = function () {
            var _this$props = _this.props,
                pageSize = _this$props.pageSize,
                itemsCount = _this$props.itemsCount,
                selected = _this$props.selected,
                onFormatCountMsg = _this$props.onFormatCountMsg;


            if (typeof onFormatCountMsg === 'function') return onFormatCountMsg(selected, pageSize, itemsCount);

            var first = (selected - 1) * pageSize + 1,
                last = selected * pageSize;
            return React.createElement(
                'div',
                { className: 'count-msg' },
                first + '-' + (last > itemsCount ? itemsCount : last) + ' of ' + itemsCount
            );
        };

        _this.renderPaging = function () {
            var _this$props2 = _this.props,
                pageSize = _this$props2.pageSize,
                itemsCount = _this$props2.itemsCount,
                selected = _this$props2.selected,
                visiblePageCount = _this$props2.visiblePageCount;

            var vsPageCount = visiblePageCount ? visiblePageCount >= 3 ? visiblePageCount : 3 : _this._defaultVisablePageCount,
                allPageCount = parseInt(itemsCount / pageSize) + (itemsCount % pageSize === 0 ? 0 : 1),
                pages = [selected],
                halfVsCount = parseInt(vsPageCount / 2),
                offset = 1,
                beforeCount = 0,
                afterCount = 0,
                afterCountShould = vsPageCount % 2 == 0 ? halfVsCount - 1 : halfVsCount,
                afterLostCount = allPageCount - selected >= afterCountShould ? 0 : afterCountShould - (allPageCount - selected),
                beforeLostCount = selected > halfVsCount ? 0 : halfVsCount - selected + 1,
                beforeCountLimit = halfVsCount + afterLostCount,
                afterCountLimit = afterCountShould + beforeLostCount,
                stopBefore = false,
                stopAfter = false;

            for (var i = vsPageCount; i > -1; i--, offset++) {
                var beforePage = selected - offset;
                var afterPage = selected + offset;

                if (beforePage >= 1 && !stopBefore) {
                    beforeCount++;

                    if (beforeCount < beforeCountLimit) {
                        pages.unshift(beforePage);
                    } else {
                        if (beforePage > 1) {
                            pages.unshift('...');
                        }
                        pages.unshift(1);
                        stopBefore = true;
                    }
                }

                if (afterPage <= allPageCount && !stopAfter) {
                    afterCount++;

                    if (afterCount < afterCountLimit) {
                        pages.push(afterPage);
                    } else {
                        if (afterPage < allPageCount) {
                            pages.push('...');
                        }
                        pages.push(allPageCount);
                        stopAfter = true;
                    }
                }

                if (afterCount + beforeCount + 1 === vsPageCount) break;
            }

            return React.createElement(
                'div',
                {
                    className: 'cg-pages'
                },
                React.createElement(
                    'span',
                    { onClick: _this.changeSelectedPageClick, key: 'cg-p-left', className: 'cg-page-button cg-left-button ' + (selected === 1 ? 'disabled' : '') },
                    React.createElement(
                        'svg',
                        { height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
                        React.createElement('path', { d: 'M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z' }),
                        React.createElement('path', { d: 'M0-.5h24v24H0z', fill: 'none' })
                    )
                ),
                pages.map(function (page, index) {
                    return _this.renderPage(page, index);
                }),
                React.createElement(
                    'span',
                    { onClick: _this.changeSelectedPageClick, key: 'cg-p-right', className: 'cg-page-button cg-right-button ' + (selected === allPageCount ? 'disabled' : '') },
                    React.createElement(
                        'svg',
                        { height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
                        React.createElement('path', { d: 'M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z' }),
                        React.createElement('path', { d: 'M0-.25h24v24H0z', fill: 'none' })
                    )
                )
            );
        };

        _this.renderPage = function (page, index) {
            return React.createElement(
                'span',
                { onClick: _this.onPageClick, 'data-page': page, key: 'cg-p-' + index, className: (typeof page === 'number' ? 'cg-page' : 'cg-page-ellipsis') + ' ' + (_this.props.selected === page ? 'selected' : '') },
                page
            );
        };

        _this.changeSelectedPageClick = function (e) {
            if (typeof _this.props.selectedPageChanged === 'function') {
                var offset = utils.parent(e.target, '.cg-page-button').classList.contains('cg-left-button') ? -1 : 1;
                _this.props.selectedPageChanged(_this.props.selected + offset);
            }
        };

        _this.onPageClick = function (e) {
            var selected = parseInt(e.target.dataset.page);
            if (typeof _this.props.selectedPageChanged === 'function' && selected != _this.props.selected) {
                _this.props.selectedPageChanged(selected);
            }
        };

        _this._defaultVisablePageCount = 5;
        return _this;
    }

    _createClass(Pagination, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                pageSize = _props.pageSize,
                itemsCount = _props.itemsCount,
                selected = _props.selected,
                showCountMsg = _props.showCountMsg,
                visiblePageCount = _props.visiblePageCount;


            return React.createElement(
                'div',
                {
                    className: 'cg-pagination',
                    ref: function ref(_ref) {
                        return _this2._dom = _ref;
                    }
                },
                itemsCount > 0 && this.renderPaging(),
                itemsCount > 0 && showCountMsg && this.renderCountMsg()
            );
        }
    }]);

    return Pagination;
}(React.Component);

exports.default = Pagination;