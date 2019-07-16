import { dom } from '../../util';

const VIEWPORT = 'viewport';

// IE8 not support pageXOffset
const getPageX = () =>
    window.pageXOffset || document.documentElement.scrollLeft;
const getPageY = () => window.pageYOffset || document.documentElement.scrollTop;

/**
 * @private get element rect
 * @param       {Element} elem
 * @return      {Object}
 */
function _getElementRect(elem) {
    let offsetTop = 0,
        offsetLeft = 0,
        scrollTop = 0,
        scrollLeft = 0;

    const offsetHeight = elem.offsetHeight;
    const offsetWidth = elem.offsetWidth;

    do {
        if (!isNaN(elem.offsetTop)) {
            offsetTop += elem.offsetTop;
        }
        if (!isNaN(elem.offsetLeft)) {
            offsetLeft += elem.offsetLeft;
        }
        if (!isNaN(elem.scrollTop)) {
            scrollTop += elem.scrollTop;
        }
        if (!isNaN(elem.scrollLeft)) {
            scrollLeft += elem.scrollLeft;
        }
    } while ((elem = elem.offsetParent) !== null);

    return {
        top:
            offsetTop -
            scrollTop -
            (document.documentElement.scrollTop || document.body.scrollTop),
        left:
            offsetLeft -
            scrollLeft -
            (document.documentElement.scrollLeft || document.body.scrollLeft),
        height: offsetHeight,
        width: offsetWidth,
    };
}

/**
 * @private get viewport size
 * @return {Object}
 */
function _getViewportSize() {
    return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
    };
}
export default class Position {
    static VIEWPORT = VIEWPORT;

    /**
     * @public static place method
     * @param  {Object}       props
     *     @param  {DOM}      props.pinElement
     *     @param  {DOM}      props.baseElement
     *     @param  {String}   props.align
     *     @param  {Number}   props.offset
     *     @param  {Boolean}  props.needAdjust
     *     @param  {Boolean}  props.isRtl
     * @return {Position}
     */
    static place = props => new Position(props).setPosition();

    constructor(props) {
        this.pinElement = props.pinElement;
        this.baseElement = props.baseElement;
        this.align = props.align || 'tl tl';
        this.offset = props.offset || [0, 0];
        this.needAdjust = props.needAdjust || false;
        this.isRtl = props.isRtl || false;
    }

    setPosition() {
        const pinElement = this.pinElement;
        const baseElement = this.baseElement;
        const expectedAlign = this._getExpectedAlign();
        let isPinFixed, isBaseFixed, firstPositionResult;
        if (pinElement === VIEWPORT) {
            return;
        }
        if (dom.getStyle(pinElement, 'position') !== 'fixed') {
            dom.setStyle(pinElement, 'position', 'absolute');
            isPinFixed = false;
        } else {
            isPinFixed = true;
        }
        if (
            baseElement === VIEWPORT ||
            dom.getStyle(baseElement, 'position') !== 'fixed'
        ) {
            isBaseFixed = false;
        } else {
            isBaseFixed = true;
        }
        // 根据期望的定位
        for (let i = 0; i < expectedAlign.length; i++) {
            const align = expectedAlign[i];
            const pinElementPoints = this._normalizePosition(
                pinElement,
                align.split(' ')[0],
                isPinFixed
            );
            const baseElementPoints = this._normalizePosition(
                baseElement,
                align.split(' ')[1],
                isPinFixed
            );
            const pinElementParentOffset = this._getParentOffset(pinElement);
            const pinElementParentScrollOffset = this._getParentScrollOffset(
                pinElement
            );

            const baseElementOffset =
                isPinFixed && isBaseFixed
                    ? this._getLeftTop(baseElement)
                    : baseElementPoints.offset();
            const top =
                baseElementOffset.top +
                baseElementPoints.y -
                pinElementParentOffset.top -
                pinElementPoints.y +
                pinElementParentScrollOffset.top;
            const left =
                baseElementOffset.left +
                baseElementPoints.x -
                pinElementParentOffset.left -
                pinElementPoints.x +
                pinElementParentScrollOffset.left;
            this._setPinElementPostion(pinElement, { left, top }, this.offset);

            if (!firstPositionResult) {
                firstPositionResult = { left, top };
            }
            if (this._isInViewport(pinElement, align)) {
                return align;
            }
        }

        // This will only execute if `pinElement` could not be placed entirely in the Viewport
        const inViewportLeft = this._makeElementInViewport(
            pinElement,
            firstPositionResult.left,
            'Left',
            isPinFixed
        );
        const inViewportTop = this._makeElementInViewport(
            pinElement,
            firstPositionResult.top,
            'Top',
            isPinFixed
        );

        this._setPinElementPostion(
            pinElement,
            { left: inViewportLeft, top: inViewportTop },
            this.offset
        );
        return expectedAlign[0];
    }

    _getParentOffset(element) {
        const parent = element.offsetParent || document.documentElement;
        let offset;
        if (
            parent === document.body &&
            dom.getStyle(parent, 'position') === 'static'
        ) {
            offset = {
                top: 0,
                left: 0,
            };
        } else {
            offset = this._getElementOffset(parent);
        }

        offset.top += parseFloat(dom.getStyle(parent, 'border-top-width'), 10);
        offset.left += parseFloat(
            dom.getStyle(parent, 'border-left-width'),
            10
        );
        offset.offsetParent = parent;
        return offset;
    }

    _getParentScrollOffset = function(elem) {
        let top = 0;
        let left = 0;

        if (elem && elem.offsetParent) {
            if (!isNaN(elem.offsetParent.scrollTop)) {
                top += elem.offsetParent.scrollTop;
            }
            if (!isNaN(elem.offsetParent.scrollLeft)) {
                left += elem.offsetParent.scrollLeft;
            }
        }

        return {
            top,
            left,
        };
    };

    _makeElementInViewport(pinElement, number, type, isPinFixed) {
        // pinElement.offsetParent is never body because wrapper has position: absolute
        // refactored to make code clearer. Revert if wrapper style changes.

        // let result = number;
        // const docElement = document.documentElement;
        // const offsetParent =
        //     pinElement.offsetParent || document.documentElement;

        // if (result < 0) {
        //     if (isPinFixed) {
        //         result = 0;
        //     }

        //     else if (
        //         offsetParent === document.body &&
        //         dom.getStyle(offsetParent, 'position') === 'static'
        //     ) {
        //         // Only when div's offsetParent is document.body, we set new position result.
        //         result = Math.max(
        //             docElement[`scroll${type}`],
        //             document.body[`scroll${type}`]
        //         );
        //     }
        // }
        // return result;

        return number < 0 && isPinFixed ? 0 : number;
    }

    _normalizePosition(element, align, isPinFixed) {
        const points = this._normalizeElement(element, isPinFixed);
        this._normalizeXY(points, align);

        return points;
    }

    _normalizeXY(points, align) {
        const x = align.split('')[1];
        const y = align.split('')[0];

        points.x = this._xyConverter(x, points, 'width');
        points.y = this._xyConverter(y, points, 'height');

        return points;
    }

    _xyConverter(align, points, type) {
        const res = align
            .replace(/t|l/gi, '0%')
            .replace(/c/gi, '50%')
            .replace(/b|r/gi, '100%')
            .replace(/(\d+)%/gi, function(m, d) {
                return points.size()[type] * (d / 100);
            });

        return parseFloat(res, 10) || 0;
    }

    _getLeftTop(element) {
        return {
            left: parseFloat(dom.getStyle(element, 'left')) || 0,
            top: parseFloat(dom.getStyle(element, 'top')) || 0,
        };
    }

    _normalizeElement(element, isPinFixed) {
        const result = {
                element: element,
                x: 0,
                y: 0,
            },
            isViewport = element === VIEWPORT,
            docElement = document.documentElement;

        result.offset = () => {
            if (isPinFixed) {
                return {
                    left: 0,
                    top: 0,
                };
            } else if (isViewport) {
                return {
                    left: getPageX(),
                    top: getPageY(),
                };
            } else {
                return this._getElementOffset(element);
            }
        };

        result.size = () => {
            if (isViewport) {
                return {
                    width: docElement.clientWidth,
                    height: docElement.clientHeight,
                };
            } else {
                return {
                    width: element.offsetWidth,
                    height: element.offsetHeight,
                };
            }
        };

        return result;
    }

    _getElementOffset(element) {
        const rect = element.getBoundingClientRect();
        const docElement = document.documentElement;
        const body = document.body;
        const docClientLeft = docElement.clientLeft || body.clientLeft || 0;
        const docClientTop = docElement.clientTop || body.clientTop || 0;

        return {
            left: rect.left + (getPageX() - docClientLeft),
            top: rect.top + (getPageY() - docClientTop),
        };
    }

    // According to the location of the overflow to calculate the desired positioning
    _getExpectedAlign() {
        const align = this.isRtl
            ? this._replaceAlignDir(this.align, /l|r/g, { l: 'r', r: 'l' })
            : this.align;
        const expectedAlign = [align];
        if (this.needAdjust) {
            if (/t|b/g.test(align)) {
                expectedAlign.push(
                    this._replaceAlignDir(align, /t|b/g, { t: 'b', b: 't' })
                );
            }
            if (/l|r/g.test(align)) {
                expectedAlign.push(
                    this._replaceAlignDir(align, /l|r/g, { l: 'r', r: 'l' })
                );
            }
            if (/c/g.test(align)) {
                expectedAlign.push(
                    this._replaceAlignDir(align, /c(?= |$)/g, { c: 'l' })
                );
                expectedAlign.push(
                    this._replaceAlignDir(align, /c(?= |$)/g, { c: 'r' })
                );
            }
            expectedAlign.push(
                this._replaceAlignDir(align, /l|r|t|b/g, {
                    l: 'r',
                    r: 'l',
                    t: 'b',
                    b: 't',
                })
            );
        }
        return expectedAlign;
    }

    // Transform align order.
    _replaceAlignDir(align, regExp, map) {
        return align.replace(regExp, res => {
            return map[res];
        });
    }

    // Are the right sides of the pin and base aligned?
    _isRightAligned(align) {
        const [pinAlign, baseAlign] = align.split(' ');
        return pinAlign[1] === 'r' && pinAlign[1] === baseAlign[1];
    }

    // Are the bottoms of the pin and base aligned?
    _isBottomAligned(align) {
        const [pinAlign, baseAlign] = align.split(' ');
        return pinAlign[0] === 'b' && pinAlign[0] === baseAlign[0];
    }

    // Detecting element is in the window， we want to adjust position later.
    _isInViewport(element, align) {
        const viewportSize = _getViewportSize();
        const elementRect = _getElementRect(element);

        // https://github.com/alibaba-fusion/next/issues/853
        // Equality causes issues in Chrome when pin element is off screen to right or bottom.
        // If it is not supposed to align with the bottom or right, then subtract 1 to use strict less than.
        const viewportWidth = this._isRightAligned(align)
            ? viewportSize.width
            : viewportSize.width - 1;
        const viewportHeight = this._isBottomAligned(align)
            ? viewportSize.height
            : viewportSize.height - 1;

        // Avoid animate problem that use offsetWidth instead of getBoundingClientRect.
        return (
            elementRect.left >= 0 &&
            elementRect.left + element.offsetWidth <= viewportWidth &&
            elementRect.top >= 0 &&
            elementRect.top + element.offsetHeight <= viewportHeight
        );
    }
    // 在这里做RTL判断 top-left 定位转化为等效的 top-right定位
    _setPinElementPostion(pinElement, postion, offset = [0, 0]) {
        const { top, left } = postion;
        if (!this.isRtl) {
            dom.setStyle(pinElement, {
                left: `${left + offset[0]}px`,
                top: `${top + offset[1]}px`,
            });
            return;
        }

        // transfer {left,top} equaly to {right,top}
        const pinElementParentOffset = this._getParentOffset(pinElement);
        const { width: offsetParentWidth } = _getElementRect(
            pinElementParentOffset.offsetParent
        );
        const { width } = _getElementRect(pinElement);
        const right = offsetParentWidth - (left + width);
        dom.setStyle(pinElement, {
            left: 'auto',
            right: `${right + offset[0]}px`,
            top: `${top + offset[1]}px`,
        });
    }
}
