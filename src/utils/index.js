export function parent(elm, selector, cmp) {
    let any = (arr, elem) => {
        for (let i = 0; i < arr.length; i++) {
            if (typeof cmp === 'function') {
                if (cmp(arr[i], elem)) return true
            } else {
                if (arr[i] === elem) return true
            }
        }
        return false
    }

    let ancestors = document.querySelectorAll(selector)
    while (elm) {
        if (any(ancestors, elm)) {
            return elm
        }

        elm = elm.parentNode
    }

    return null
}

export function generateColumns(rows) {
    let columns = []
    if (rows && rows.length > 0) {
        for (let prop in rows[0])
            columns.push({ key: prop, display: prop })
    }
    return columns
}

var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}
function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

export function disableScroll() {
    if (window.addEventListener) // older FF
        window.addEventListener('DOMMouseScroll', preventDefault, false)
    window.onwheel = preventDefault // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault // older browsers, IE
    window.ontouchmove = preventDefault // mobile
    document.onkeydown = preventDefaultForScrollKeys
}
export function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false)
    window.onmousewheel = document.onmousewheel = null
    window.onwheel = null
    window.ontouchmove = null
    document.onkeydown = null
}

let scrollbarWidth = false
export function getScrollbarWidth() {
    if (scrollbarWidth !== false) return scrollbarWidth
    if (typeof document !== 'undefined') {
        const div = document.createElement('div');
        div.style.width = 100
        div.style.height = 100
        div.style.position = 'absolute'
        div.style.top = -9999
        div.style.overflow = 'scroll'
        div.style.MsOverflowStyle = 'scrollbar'
        document.body.appendChild(div)
        scrollbarWidth = (div.offsetWidth - div.clientWidth)
        document.body.removeChild(div)
    } else {
        scrollbarWidth = 0
    }
    return scrollbarWidth || 0
}

export function nodeListForEachPolyill() {
    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = function (callback, thisArg) {
            thisArg = thisArg || window;
            for (var i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this);
            }
        };
    }
}

export const DefaultRowHeight = 48
export const DefaultCellWidth = 100
export const EmptyHolderWidth = 30
