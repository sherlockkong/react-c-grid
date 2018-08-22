'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.parent = parent;
exports.generateColumns = generateColumns;
exports.disableScroll = disableScroll;
exports.enableScroll = enableScroll;
exports.getScrollbarWidth = getScrollbarWidth;
exports.nodeListForEachPolyill = nodeListForEachPolyill;
function parent(elm, selector, cmp) {
	var any = function any(arr, elem) {
		for (var i = 0; i < arr.length; i++) {
			if (typeof cmp === 'function') {
				if (cmp(arr[i], elem)) return true;
			} else {
				if (arr[i] === elem) return true;
			}
		}
		return false;
	};

	var ancestors = document.querySelectorAll(selector);
	while (elm) {
		if (any(ancestors, elm)) {
			return elm;
		}

		elm = elm.parentNode;
	}

	return null;
}

function generateColumns(rows) {
	var columns = [];
	if (rows && rows.length > 0) {
		for (var prop in rows[0]) {
			columns.push({ key: prop, display: prop });
		}
	}
	return columns;
}

var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
function preventDefault(e) {
	e = e || window.event;
	if (e.preventDefault) e.preventDefault();
	e.returnValue = false;
}
function preventDefaultForScrollKeys(e) {
	if (keys[e.keyCode]) {
		preventDefault(e);
		return false;
	}
}

function disableScroll() {
	if (window.addEventListener) // older FF
		window.addEventListener('DOMMouseScroll', preventDefault, false);
	window.onwheel = preventDefault; // modern standard
	window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
	window.ontouchmove = preventDefault; // mobile
	document.onkeydown = preventDefaultForScrollKeys;
}
function enableScroll() {
	if (window.removeEventListener) window.removeEventListener('DOMMouseScroll', preventDefault, false);
	window.onmousewheel = document.onmousewheel = null;
	window.onwheel = null;
	window.ontouchmove = null;
	document.onkeydown = null;
}

var scrollbarWidth = false;
function getScrollbarWidth() {
	if (scrollbarWidth !== false) return scrollbarWidth;
	if (typeof document !== 'undefined') {
		var div = document.createElement('div');
		div.style.width = 100;
		div.style.height = 100;
		div.style.position = 'absolute';
		div.style.top = -9999;
		div.style.overflow = 'scroll';
		div.style.MsOverflowStyle = 'scrollbar';
		document.body.appendChild(div);
		scrollbarWidth = div.offsetWidth - div.clientWidth;
		document.body.removeChild(div);
	} else scrollbarWidth = 0;

	return scrollbarWidth || 0;
}

function nodeListForEachPolyill() {
	if (window.NodeList && !NodeList.prototype.forEach) {
		NodeList.prototype.forEach = function (callback, thisArg) {
			thisArg = thisArg || window;
			for (var i = 0; i < this.length; i++) {
				callback.call(thisArg, this[i], i, this);
			}
		};
	}
}

var DefaultRowHeight = exports.DefaultRowHeight = 48;
var DefaultCellWidth = exports.DefaultCellWidth = 100;
var EmptyHolderWidth = exports.EmptyHolderWidth = 30;