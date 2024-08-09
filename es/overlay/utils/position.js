import { __read, __spreadArray } from "tslib";
import { dom } from '../../util';
import findNode from './find-node';
var VIEWPORT = 'viewport';
// IE8 not support pageXOffset
var getPageX = function () { return window.pageXOffset || document.documentElement.scrollLeft; };
var getPageY = function () { return window.pageYOffset || document.documentElement.scrollTop; };
/**
 * @internal get element size
 */
function _getSize(element) {
    // element like `svg` do not have offsetWidth and offsetHeight prop
    // then getBoundingClientRect
    if ('offsetWidth' in element && 'offsetHeight' in element) {
        return {
            width: element.offsetWidth,
            height: element.offsetHeight,
        };
    }
    else {
        var _a = element.getBoundingClientRect(), width = _a.width, height = _a.height;
        return {
            width: width,
            height: height,
        };
    }
}
/**
 * @internal get element rect
 */
function _getElementRect(elem, container) {
    var offsetTop = 0, offsetLeft = 0, scrollTop = 0, scrollLeft = 0;
    var _a = _getSize(elem), width = _a.width, height = _a.height;
    do {
        if (!isNaN(elem.offsetTop)) {
            offsetTop += elem.offsetTop;
        }
        if (!isNaN(elem.offsetLeft)) {
            offsetLeft += elem.offsetLeft;
        }
        if (elem && elem.offsetParent) {
            if (!isNaN(elem.offsetParent.scrollLeft) && elem.offsetParent !== document.body) {
                scrollLeft += elem.offsetParent.scrollLeft;
            }
            if (!isNaN(elem.offsetParent.scrollTop) && elem.offsetParent !== document.body) {
                scrollTop += elem.offsetParent.scrollTop;
            }
        }
        elem = elem.offsetParent;
    } while (elem !== null && elem !== container);
    // if container is body or invalid, treat as window, use client width & height
    var treatAsWindow = !container || container === document.body;
    return {
        top: offsetTop -
            scrollTop -
            (treatAsWindow ? document.documentElement.scrollTop || document.body.scrollTop : 0),
        left: offsetLeft -
            scrollLeft -
            (treatAsWindow ? document.documentElement.scrollLeft || document.body.scrollLeft : 0),
        width: width,
        height: height,
    };
}
/**
 * @internal get viewport size
 */
function _getViewportSize(container) {
    if (!container || container === document.body) {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
        };
    }
    var _a = container.getBoundingClientRect(), width = _a.width, height = _a.height;
    return {
        width: width,
        height: height,
    };
}
var getContainer = function (_a) {
    var container = _a.container, baseElement = _a.baseElement;
    // SSR下会有副作用
    if (typeof document === 'undefined') {
        return container;
    }
    var calcContainer = findNode(container, baseElement);
    if (!calcContainer) {
        calcContainer = document.body;
    }
    while (dom.getStyle(calcContainer, 'position') === 'static') {
        if (!calcContainer || calcContainer === document.body) {
            return document.body;
        }
        calcContainer = calcContainer.parentNode;
    }
    return calcContainer;
};
var Position = /** @class */ (function () {
    function Position(props) {
        var _this = this;
        this._calPinOffset = function (align) {
            var offset = __spreadArray([], __read(_this.offset), false);
            if (_this.autoFit && align && _this.container && _this.container !== document.body) {
                var baseElementRect = _getElementRect(
                // @ts-expect-error _getElementRect baseElement不支持"viewport" 需要对baseElement做非"viewport"处理
                _this.baseElement, _this.container);
                // @ts-expect-error _getElementRect pinElement不支持"viewport" 需要对pinElement做非"viewport"处理
                var pinElementRect = _getElementRect(_this.pinElement, _this.container);
                var viewportSize = _getViewportSize(_this.container);
                var pinAlign = align.split(' ')[0];
                var y = pinAlign.charAt(0);
                if (pinElementRect.top < 0 ||
                    pinElementRect.top + pinElementRect.height > viewportSize.height) {
                    offset[1] = -baseElementRect.top - (y === 't' ? baseElementRect.height : 0);
                }
            }
            return offset;
        };
        this._getParentScrollOffset = function (elem) {
            var top = 0;
            var left = 0;
            if (elem && elem.offsetParent && elem.offsetParent !== document.body) {
                if (!isNaN(elem.offsetParent.scrollTop)) {
                    top += elem.offsetParent.scrollTop;
                }
                if (!isNaN(elem.offsetParent.scrollLeft)) {
                    left += elem.offsetParent.scrollLeft;
                }
            }
            return {
                top: top,
                left: left,
            };
        };
        this.pinElement = props.pinElement;
        this.baseElement = props.baseElement;
        this.pinFollowBaseElementWhenFixed = props.pinFollowBaseElementWhenFixed;
        this.container = getContainer(props);
        this.autoFit = props.autoFit || false;
        this.align = props.align || 'tl tl';
        this.offset = props.offset || [0, 0];
        this.needAdjust = props.needAdjust || false;
        this.isRtl = props.isRtl || false;
    }
    Position.prototype.setPosition = function () {
        var pinElement = this.pinElement;
        var baseElement = this.baseElement;
        var pinFollowBaseElementWhenFixed = this.pinFollowBaseElementWhenFixed;
        var expectedAlign = this._getExpectedAlign();
        var isPinFixed, isBaseFixed, firstPositionResult;
        if (pinElement === VIEWPORT) {
            return;
        }
        if (dom.getStyle(pinElement, 'position') !== 'fixed') {
            dom.setStyle(pinElement, 'position', 'absolute');
            isPinFixed = false;
        }
        else {
            isPinFixed = true;
        }
        if (baseElement === VIEWPORT || dom.getStyle(baseElement, 'position') !== 'fixed') {
            isBaseFixed = false;
        }
        else {
            isBaseFixed = true;
        }
        // 根据期望的定位
        for (var i = 0; i < expectedAlign.length; i++) {
            var align = expectedAlign[i];
            var pinElementPoints = this._normalizePosition(pinElement, align.split(' ')[0], isPinFixed);
            var baseElementPoints = this._normalizePosition(baseElement, align.split(' ')[1], 
            // 忽略元素位置，发生在类似dialog的场景下
            isPinFixed && !pinFollowBaseElementWhenFixed);
            var pinElementParentOffset = this._getParentOffset(pinElement);
            var pinElementParentScrollOffset = this._getParentScrollOffset(pinElement);
            var baseElementOffset = isPinFixed && isBaseFixed
                ? // @ts-expect-error _getLeftTop 不支持"viewport" 需要对baseElement做非"viewport"处理
                    this._getLeftTop(baseElement)
                : // 在 pin 是 fixed 布局，并且又需要根据 base 计算位置时，计算 base 的 offset 需要忽略页面滚动
                    baseElementPoints.offset(isPinFixed && pinFollowBaseElementWhenFixed);
            var top_1 = baseElementOffset.top +
                baseElementPoints.y -
                pinElementParentOffset.top -
                pinElementPoints.y +
                pinElementParentScrollOffset.top;
            var left = baseElementOffset.left +
                baseElementPoints.x -
                pinElementParentOffset.left -
                pinElementPoints.x +
                pinElementParentScrollOffset.left;
            // 此处若真实改变元素位置可能为导致布局发生变化，从而导致 container 发生 resize，进而重复触发 postion 和 componentUpdate，导致崩溃
            // 需要根据新的 left、top 进行模拟计算 isInViewport
            var xOffset = Math.round(left + this.offset[0] - dom.getStyle(pinElement, 'left'));
            var yOffset = Math.round(top_1 + this.offset[1] - dom.getStyle(pinElement, 'top'));
            if (this._isInViewport(pinElement, align, [xOffset, yOffset])) {
                // 如果在视区内，则设置 pin 位置，并中断 postion 返回设置的位置
                this._setPinElementPostion(pinElement, { left: left, top: top_1 }, this.offset);
                return align;
            }
            else if (!firstPositionResult) {
                if (this.needAdjust && !this.autoFit) {
                    var right = this._getViewportOffset(pinElement, align).right;
                    firstPositionResult = {
                        left: right < 0 ? left + right : left,
                        top: top_1,
                    };
                }
                else {
                    firstPositionResult = { left: left, top: top_1 };
                }
            }
        }
        // This will only execute if `pinElement` could not be placed entirely in the Viewport
        var inViewportLeft = this._makeElementInViewport(pinElement, firstPositionResult.left, 'Left', isPinFixed);
        var inViewportTop = this._makeElementInViewport(pinElement, firstPositionResult.top, 'Top', isPinFixed);
        this._setPinElementPostion(pinElement, { left: inViewportLeft, top: inViewportTop }, this._calPinOffset(expectedAlign[0]));
        return expectedAlign[0];
    };
    Position.prototype._getParentOffset = function (element) {
        var parent = element.offsetParent || document.documentElement;
        var offset;
        if (parent === document.body && dom.getStyle(parent, 'position') === 'static') {
            offset = {
                top: 0,
                left: 0,
            };
        }
        else {
            offset = this._getElementOffset(parent);
        }
        // @ts-expect-error parseFloat 不支持第二个参数
        offset.top += parseFloat(dom.getStyle(parent, 'border-top-width'), 10);
        // @ts-expect-error parseFloat 不支持第二个参数
        offset.left += parseFloat(dom.getStyle(parent, 'border-left-width'), 10);
        offset.offsetParent = parent;
        return offset;
    };
    Position.prototype._makeElementInViewport = function (pinElement, number, type, isPinFixed) {
        // pinElement.offsetParent is never body because wrapper has position: absolute
        // refactored to make code clearer. Revert if wrapper style changes.
        var result = number;
        var docElement = document.documentElement;
        var offsetParent = pinElement.offsetParent || document.documentElement;
        if (result < 0) {
            if (isPinFixed) {
                result = 0;
            }
            else if (offsetParent === document.body &&
                dom.getStyle(offsetParent, 'position') === 'static') {
                // Only when div's offsetParent is document.body, we set new position result.
                result = Math.max(docElement["scroll".concat(type)], document.body["scroll".concat(type)]);
            }
        }
        return result;
    };
    // 这里的第三个参数真实含义为：是否为fixed布局，并且像dialog一样，不跟随trigger元素
    Position.prototype._normalizePosition = function (element, align, ignoreElementOffset) {
        var points = this._normalizeElement(element, ignoreElementOffset);
        this._normalizeXY(points, align);
        return points;
    };
    Position.prototype._normalizeXY = function (points, align) {
        var x = align.split('')[1];
        var y = align.split('')[0];
        points.x = this._xyConverter(x, points, 'width');
        points.y = this._xyConverter(y, points, 'height');
        return points;
    };
    Position.prototype._xyConverter = function (align, points, type) {
        var res = align
            .replace(/t|l/gi, '0%')
            .replace(/c/gi, '50%')
            .replace(/b|r/gi, '100%')
            .replace(/(\d+)%/gi, function (m, d) {
            // @ts-expect-error  返回值需要转换为string，目前是number
            return points.size()[type] * (d / 100);
        });
        // @ts-expect-error parseFloat 不支持第二个参数
        return parseFloat(res, 10) || 0;
    };
    Position.prototype._getLeftTop = function (element) {
        return {
            // @ts-expect-error parseFloat 不支持第二个参数
            left: parseFloat(dom.getStyle(element, 'left')) || 0,
            // @ts-expect-error parseFloat 不支持第二个参数
            top: parseFloat(dom.getStyle(element, 'top')) || 0,
        };
    };
    Position.prototype._normalizeElement = function (element, ignoreElementOffset) {
        var _this = this;
        var result = {
            element: element,
            x: 0,
            y: 0,
        }, isViewport = element === VIEWPORT, docElement = document.documentElement;
        result.offset = function (ignoreScroll) {
            // 这里是关键，第二个参数的含义以ing该是：是否为 fixed 布局，并且像 dialog 一样，不跟随 trigger 元素
            if (ignoreElementOffset) {
                return {
                    left: 0,
                    top: 0,
                };
            }
            else if (isViewport) {
                return {
                    left: getPageX(),
                    top: getPageY(),
                };
            }
            else {
                return _this._getElementOffset(element, ignoreScroll);
            }
        };
        result.size = function () {
            if (isViewport) {
                return {
                    width: docElement.clientWidth,
                    height: docElement.clientHeight,
                };
            }
            else {
                return _getSize(element);
            }
        };
        return result;
    };
    // ignoreScroll 在 pin 元素为 fixed 的时候生效，此时需要忽略页面滚动
    // 对 fixed 模式下 subNav 弹层的计算很重要，只有在这种情况下，才同时需要元素的相对位置，又不关心页面滚动
    Position.prototype._getElementOffset = function (element, ignoreScroll) {
        var rect = element.getBoundingClientRect();
        var docElement = document.documentElement;
        var body = document.body;
        var docClientLeft = docElement.clientLeft || body.clientLeft || 0;
        var docClientTop = docElement.clientTop || body.clientTop || 0;
        return {
            left: rect.left + (ignoreScroll ? 0 : getPageX()) - docClientLeft,
            top: rect.top + (ignoreScroll ? 0 : getPageY()) - docClientTop,
        };
    };
    // According to the location of the overflow to calculate the desired positioning
    Position.prototype._getExpectedAlign = function () {
        // @ts-expect-error align这里需要确定是string，不能是boolean
        var align = this.isRtl
            ? // @ts-expect-error align这里需要确定是string，不能是boolean
                this._replaceAlignDir(this.align, /l|r/g, { l: 'r', r: 'l' })
            : this.align;
        var expectedAlign = [align];
        if (this.needAdjust) {
            if (/t|b/g.test(align)) {
                expectedAlign.push(this._replaceAlignDir(align, /t|b/g, { t: 'b', b: 't' }));
            }
            if (/l|r/g.test(align)) {
                expectedAlign.push(this._replaceAlignDir(align, /l|r/g, { l: 'r', r: 'l' }));
            }
            if (/c/g.test(align)) {
                expectedAlign.push(this._replaceAlignDir(align, /c(?= |$)/g, { c: 'l' }));
                expectedAlign.push(this._replaceAlignDir(align, /c(?= |$)/g, { c: 'r' }));
            }
            expectedAlign.push(this._replaceAlignDir(align, /l|r|t|b/g, {
                l: 'r',
                r: 'l',
                t: 'b',
                b: 't',
            }));
        }
        return expectedAlign;
    };
    // Transform align order.
    Position.prototype._replaceAlignDir = function (align, regExp, map) {
        return align.replace(regExp, function (res) {
            return map[res];
        });
    };
    // Are the right sides of the pin and base aligned?
    Position.prototype._isRightAligned = function (align) {
        var _a = __read(align.split(' '), 2), pinAlign = _a[0], baseAlign = _a[1];
        return pinAlign[1] === 'r' && pinAlign[1] === baseAlign[1];
    };
    // Are the bottoms of the pin and base aligned?
    Position.prototype._isBottomAligned = function (align) {
        var _a = __read(align.split(' '), 2), pinAlign = _a[0], baseAlign = _a[1];
        return pinAlign[0] === 'b' && pinAlign[0] === baseAlign[0];
    };
    // Detecting element is in the window， we want to adjust position later.
    Position.prototype._isInViewport = function (element, align, adjustOffset) {
        if (adjustOffset === void 0) { adjustOffset = []; }
        var viewportSize = _getViewportSize(this.container);
        var elementRect = _getElementRect(element, this.container);
        var _a = __read(adjustOffset, 2), _b = _a[0], xOffset = _b === void 0 ? 0 : _b, _c = _a[1], yOffset = _c === void 0 ? 0 : _c;
        var left = elementRect.left + xOffset;
        var top = elementRect.top + yOffset;
        var elementSize = _getSize(element);
        // https://github.com/alibaba-fusion/next/issues/853
        // Equality causes issues in Chrome when pin element is off screen to right or bottom.
        // If it is not supposed to align with the bottom or right, then subtract 1 to use strict less than.
        var viewportWidth = this._isRightAligned(align)
            ? viewportSize.width
            : viewportSize.width - 1;
        var viewportHeight = this._isBottomAligned(align)
            ? viewportSize.height
            : viewportSize.height - 1;
        // 临时方案，在 select + table 的场景下，不需要关注横向上是否在可视区域内
        // 在 balloon 场景下需要关注
        if (this.autoFit) {
            return top >= 0 && top + element.offsetHeight <= viewportHeight;
        }
        // Avoid animate problem that use offsetWidth instead of getBoundingClientRect.
        return (left >= 0 &&
            left + elementSize.width <= viewportWidth &&
            top >= 0 &&
            top + elementSize.height <= viewportHeight);
    };
    Position.prototype._getViewportOffset = function (element, align) {
        var viewportSize = _getViewportSize(this.container);
        var elementRect = _getElementRect(element, this.container);
        var elementSize = _getSize(element);
        var viewportWidth = this._isRightAligned(align)
            ? viewportSize.width
            : viewportSize.width - 1;
        var viewportHeight = this._isBottomAligned(align)
            ? viewportSize.height
            : viewportSize.height - 1;
        return {
            top: elementRect.top,
            right: viewportWidth - (elementRect.left + elementSize.width),
            bottom: viewportHeight - (elementRect.top + elementSize.height),
            left: elementRect.left,
        };
    };
    // 在这里做RTL判断 top-left 定位转化为等效的 top-right定位
    Position.prototype._setPinElementPostion = function (pinElement, postion, offset) {
        if (offset === void 0) { offset = [0, 0]; }
        var top = postion.top, left = postion.left;
        if (!this.isRtl) {
            dom.setStyle(pinElement, {
                left: "".concat(left + offset[0], "px"),
                top: "".concat(top + offset[1], "px"),
            });
            return;
        }
        // transfer {left,top} equaly to {right,top}
        var pinElementParentOffset = this._getParentOffset(pinElement);
        var offsetParentWidth = _getElementRect(pinElementParentOffset.offsetParent).width;
        var width = _getElementRect(pinElement).width;
        var right = offsetParentWidth - (left + width);
        dom.setStyle(pinElement, {
            left: 'auto',
            right: "".concat(right + offset[0], "px"),
            top: "".concat(top + offset[1], "px"),
        });
    };
    Position.VIEWPORT = VIEWPORT;
    Position.place = function (props) { return new Position(props).setPosition(); };
    return Position;
}());
export default Position;
