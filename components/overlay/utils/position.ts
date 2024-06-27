import { type ReactElement } from 'react';
import { dom } from '../../util';
import findNode from './find-node';
import type { PositionProps, PointsType } from '../types';

const VIEWPORT = 'viewport' as const;

// IE8 not support pageXOffset
const getPageX = () => window.pageXOffset || document.documentElement.scrollLeft;
const getPageY = () => window.pageYOffset || document.documentElement.scrollTop;

/**
 * @internal get element size
 */
function _getSize(element: SVGElement | HTMLElement) {
    // element like `svg` do not have offsetWidth and offsetHeight prop
    // then getBoundingClientRect
    if ('offsetWidth' in element && 'offsetHeight' in element) {
        return {
            width: element.offsetWidth,
            height: element.offsetHeight,
        };
    } else {
        const { width, height } = element.getBoundingClientRect();

        return {
            width,
            height,
        };
    }
}

/**
 * @internal get element rect
 */
function _getElementRect(elem: HTMLElement, container?: HTMLElement | ReactElement) {
    let offsetTop = 0,
        offsetLeft = 0,
        scrollTop = 0,
        scrollLeft = 0;

    const { width, height } = _getSize(elem);

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

        elem = elem.offsetParent as HTMLElement;
    } while (elem !== null && elem !== container);

    // if container is body or invalid, treat as window, use client width & height
    const treatAsWindow = !container || container === document.body;

    return {
        top:
            offsetTop -
            scrollTop -
            (treatAsWindow ? document.documentElement.scrollTop || document.body.scrollTop : 0),
        left:
            offsetLeft -
            scrollLeft -
            (treatAsWindow ? document.documentElement.scrollLeft || document.body.scrollLeft : 0),
        width,
        height,
    };
}

/**
 * @internal get viewport size
 */
function _getViewportSize(container: HTMLElement | SVGElement) {
    if (!container || container === document.body) {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
        };
    }

    const { width, height } = container.getBoundingClientRect();

    return {
        width,
        height,
    };
}

const getContainer = ({ container, baseElement }: PositionProps) => {
    // SSR下会有副作用
    if (typeof document === 'undefined') {
        return container;
    }

    let calcContainer = findNode(container, baseElement) as HTMLElement;

    if (!calcContainer) {
        calcContainer = document.body;
    }

    while (dom.getStyle(calcContainer, 'position') === 'static') {
        if (!calcContainer || calcContainer === document.body) {
            return document.body;
        }
        calcContainer = calcContainer.parentNode as HTMLElement;
    }

    return calcContainer;
};

export default class Position {
    pinElement: HTMLElement | 'viewport' | undefined;
    baseElement: HTMLElement | 'viewport' | undefined;
    pinFollowBaseElementWhenFixed: boolean | undefined;
    container: HTMLElement;
    autoFit: boolean;
    align: string | boolean;
    offset: Array<number>;
    needAdjust: boolean;
    isRtl: boolean;
    constructor(props: PositionProps) {
        this.pinElement = props.pinElement;
        this.baseElement = props.baseElement;
        this.pinFollowBaseElementWhenFixed = props.pinFollowBaseElementWhenFixed;
        this.container = getContainer(props) as HTMLElement;
        this.autoFit = props.autoFit || false;
        this.align = props.align || 'tl tl';
        this.offset = props.offset || [0, 0];
        this.needAdjust = props.needAdjust || false;
        this.isRtl = props.isRtl || false;
    }

    static VIEWPORT = VIEWPORT;

    static place = (props: PositionProps) => new Position(props).setPosition();

    setPosition() {
        const pinElement = this.pinElement;
        const baseElement = this.baseElement;
        const pinFollowBaseElementWhenFixed = this.pinFollowBaseElementWhenFixed;
        const expectedAlign = this._getExpectedAlign();
        let isPinFixed, isBaseFixed, firstPositionResult;
        if (pinElement === VIEWPORT) {
            return;
        }
        if (dom.getStyle(pinElement!, 'position') !== 'fixed') {
            dom.setStyle(pinElement!, 'position', 'absolute');
            isPinFixed = false;
        } else {
            isPinFixed = true;
        }
        if (baseElement === VIEWPORT || dom.getStyle(baseElement!, 'position') !== 'fixed') {
            isBaseFixed = false;
        } else {
            isBaseFixed = true;
        }

        // 根据期望的定位
        for (let i = 0; i < expectedAlign.length; i++) {
            const align = expectedAlign[i];
            const pinElementPoints = this._normalizePosition(
                pinElement!,
                align.split(' ')[0],
                isPinFixed
            );
            const baseElementPoints = this._normalizePosition(
                baseElement!,
                align.split(' ')[1],
                // 忽略元素位置，发生在类似dialog的场景下
                isPinFixed && !pinFollowBaseElementWhenFixed
            );

            const pinElementParentOffset = this._getParentOffset(pinElement!);
            const pinElementParentScrollOffset = this._getParentScrollOffset(pinElement!);

            const baseElementOffset =
                isPinFixed && isBaseFixed
                    ? // @ts-expect-error _getLeftTop 不支持"viewport" 需要对baseElement做非"viewport"处理
                      this._getLeftTop(baseElement!)
                    : // 在 pin 是 fixed 布局，并且又需要根据 base 计算位置时，计算 base 的 offset 需要忽略页面滚动
                      baseElementPoints.offset(isPinFixed && pinFollowBaseElementWhenFixed!);
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

            // 此处若真实改变元素位置可能为导致布局发生变化，从而导致 container 发生 resize，进而重复触发 postion 和 componentUpdate，导致崩溃
            // 需要根据新的 left、top 进行模拟计算 isInViewport
            const xOffset = Math.round(
                left + this.offset[0] - (dom.getStyle(pinElement!, 'left') as number)
            );
            const yOffset = Math.round(
                top + this.offset[1] - (dom.getStyle(pinElement!, 'top') as number)
            );

            if (this._isInViewport(pinElement!, align, [xOffset, yOffset])) {
                // 如果在视区内，则设置 pin 位置，并中断 postion 返回设置的位置
                this._setPinElementPostion(pinElement!, { left, top }, this.offset);
                return align;
            } else if (!firstPositionResult) {
                if (this.needAdjust && !this.autoFit) {
                    const { right } = this._getViewportOffset(pinElement!, align);
                    firstPositionResult = {
                        left: right < 0 ? left + right : left,
                        top,
                    };
                } else {
                    firstPositionResult = { left, top };
                }
            }
        }

        // This will only execute if `pinElement` could not be placed entirely in the Viewport
        const inViewportLeft = this._makeElementInViewport(
            pinElement!,
            firstPositionResult!.left,
            'Left',
            isPinFixed
        );
        const inViewportTop = this._makeElementInViewport(
            pinElement!,
            firstPositionResult!.top,
            'Top',
            isPinFixed
        );

        this._setPinElementPostion(
            pinElement!,
            { left: inViewportLeft, top: inViewportTop },
            this._calPinOffset(expectedAlign[0])
        );

        return expectedAlign[0];
    }

    _calPinOffset = (align: string) => {
        const offset = [...this.offset];

        if (this.autoFit && align && this.container && this.container !== document.body) {
            const baseElementRect = _getElementRect(
                // @ts-expect-error _getElementRect baseElement不支持"viewport" 需要对baseElement做非"viewport"处理
                this.baseElement,
                this.container
            );
            // @ts-expect-error _getElementRect pinElement不支持"viewport" 需要对pinElement做非"viewport"处理
            const pinElementRect = _getElementRect(this.pinElement, this.container);
            const viewportSize = _getViewportSize(this.container);
            const pinAlign = align.split(' ')[0];
            const y = pinAlign.charAt(0);

            if (
                pinElementRect.top < 0 ||
                pinElementRect.top + pinElementRect.height > viewportSize.height
            ) {
                offset[1] = -baseElementRect.top - (y === 't' ? baseElementRect.height : 0);
            }
        }
        return offset;
    };

    _getParentOffset(element: HTMLElement) {
        const parent = (element.offsetParent as HTMLElement) || document.documentElement;
        let offset: { top: number; left: number; offsetParent?: HTMLElement };
        if (parent === document.body && dom.getStyle(parent, 'position')! === 'static') {
            offset = {
                top: 0,
                left: 0,
            };
        } else {
            offset = this._getElementOffset(parent);
        }

        // @ts-expect-error parseFloat 不支持第二个参数
        offset.top += parseFloat(dom.getStyle(parent, 'border-top-width') as string, 10);
        // @ts-expect-error parseFloat 不支持第二个参数
        offset.left += parseFloat(dom.getStyle(parent, 'border-left-width') as string, 10);
        offset.offsetParent = parent;
        return offset;
    }

    _getParentScrollOffset = function (elem: HTMLElement) {
        let top = 0;
        let left = 0;

        if (elem && elem.offsetParent && elem.offsetParent !== document.body) {
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

    _makeElementInViewport(
        pinElement: HTMLElement,
        number: number,
        type: string,
        isPinFixed: boolean
    ) {
        // pinElement.offsetParent is never body because wrapper has position: absolute
        // refactored to make code clearer. Revert if wrapper style changes.
        let result = number;
        const docElement = document.documentElement;
        const offsetParent = pinElement.offsetParent || document.documentElement;

        if (result < 0) {
            if (isPinFixed) {
                result = 0;
            } else if (
                offsetParent === document.body &&
                dom.getStyle(offsetParent as HTMLElement, 'position') === 'static'
            ) {
                // Only when div's offsetParent is document.body, we set new position result.
                result = Math.max(
                    docElement[`scroll${type}` as 'scrollLeft' | 'scrollTop'],
                    document.body[`scroll${type}` as 'scrollLeft' | 'scrollTop']
                );
            }
        }
        return result;
    }

    // 这里的第三个参数真实含义为：是否为fixed布局，并且像dialog一样，不跟随trigger元素
    _normalizePosition(
        element: HTMLElement | 'viewport',
        align: string,
        ignoreElementOffset: boolean
    ) {
        const points = this._normalizeElement(element, ignoreElementOffset);
        this._normalizeXY(points, align);

        return points;
    }

    _normalizeXY(points: PointsType, align: string) {
        const x = align.split('')[1];
        const y = align.split('')[0];

        points.x = this._xyConverter(x, points, 'width');
        points.y = this._xyConverter(y, points, 'height');

        return points;
    }

    _xyConverter(align: string, points: PointsType, type: 'width' | 'height') {
        const res = align
            .replace(/t|l/gi, '0%')
            .replace(/c/gi, '50%')
            .replace(/b|r/gi, '100%')
            .replace(/(\d+)%/gi, function (m: string, d: number): string {
                // @ts-expect-error  返回值需要转换为string，目前是number
                return points.size()[type] * (d / 100);
            });
        // @ts-expect-error parseFloat 不支持第二个参数
        return parseFloat(res, 10) || 0;
    }

    _getLeftTop(element: HTMLElement) {
        return {
            // @ts-expect-error parseFloat 不支持第二个参数
            left: parseFloat(dom.getStyle(element, 'left')) || 0,
            // @ts-expect-error parseFloat 不支持第二个参数
            top: parseFloat(dom.getStyle(element, 'top')) || 0,
        };
    }

    _normalizeElement(element: HTMLElement | 'viewport', ignoreElementOffset: boolean) {
        const result = {
                element: element,
                x: 0,
                y: 0,
            } as PointsType,
            isViewport = element === VIEWPORT,
            docElement = document.documentElement;

        result.offset = (ignoreScroll: boolean) => {
            // 这里是关键，第二个参数的含义以ing该是：是否为 fixed 布局，并且像 dialog 一样，不跟随 trigger 元素
            if (ignoreElementOffset) {
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
                return this._getElementOffset(element, ignoreScroll);
            }
        };

        result.size = () => {
            if (isViewport) {
                return {
                    width: docElement.clientWidth,
                    height: docElement.clientHeight,
                };
            } else {
                return _getSize(element);
            }
        };

        return result;
    }

    // ignoreScroll 在 pin 元素为 fixed 的时候生效，此时需要忽略页面滚动
    // 对 fixed 模式下 subNav 弹层的计算很重要，只有在这种情况下，才同时需要元素的相对位置，又不关心页面滚动
    _getElementOffset(element: HTMLElement, ignoreScroll?: boolean) {
        const rect = element.getBoundingClientRect();
        const docElement = document.documentElement;
        const body = document.body;
        const docClientLeft = docElement.clientLeft || body.clientLeft || 0;
        const docClientTop = docElement.clientTop || body.clientTop || 0;

        return {
            left: rect.left + (ignoreScroll ? 0 : getPageX()) - docClientLeft,
            top: rect.top + (ignoreScroll ? 0 : getPageY()) - docClientTop,
        };
    }

    // According to the location of the overflow to calculate the desired positioning
    _getExpectedAlign() {
        // @ts-expect-error align这里需要确定是string，不能是boolean
        const align: string = this.isRtl
            ? // @ts-expect-error align这里需要确定是string，不能是boolean
              this._replaceAlignDir(this.align, /l|r/g, { l: 'r', r: 'l' })
            : this.align;
        const expectedAlign = [align];
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
    _replaceAlignDir(align: string, regExp: RegExp, map: Record<string, string>) {
        return align.replace(regExp, (res: string) => {
            return map[res];
        });
    }

    // Are the right sides of the pin and base aligned?
    _isRightAligned(align: string) {
        const [pinAlign, baseAlign] = align.split(' ');
        return pinAlign[1] === 'r' && pinAlign[1] === baseAlign[1];
    }

    // Are the bottoms of the pin and base aligned?
    _isBottomAligned(align: string) {
        const [pinAlign, baseAlign] = align.split(' ');
        return pinAlign[0] === 'b' && pinAlign[0] === baseAlign[0];
    }

    // Detecting element is in the window， we want to adjust position later.
    _isInViewport(element: HTMLElement, align: string, adjustOffset: number[] = []) {
        const viewportSize = _getViewportSize(this.container);
        const elementRect = _getElementRect(element, this.container);
        const [xOffset = 0, yOffset = 0] = adjustOffset;
        const left = elementRect.left + xOffset;
        const top = elementRect.top + yOffset;
        const elementSize = _getSize(element);

        // https://github.com/alibaba-fusion/next/issues/853
        // Equality causes issues in Chrome when pin element is off screen to right or bottom.
        // If it is not supposed to align with the bottom or right, then subtract 1 to use strict less than.
        const viewportWidth = this._isRightAligned(align)
            ? viewportSize.width
            : viewportSize.width - 1;
        const viewportHeight = this._isBottomAligned(align)
            ? viewportSize.height
            : viewportSize.height - 1;

        // 临时方案，在 select + table 的场景下，不需要关注横向上是否在可视区域内
        // 在 balloon 场景下需要关注
        if (this.autoFit) {
            return top >= 0 && top + element.offsetHeight <= viewportHeight;
        }

        // Avoid animate problem that use offsetWidth instead of getBoundingClientRect.
        return (
            left >= 0 &&
            left + elementSize.width <= viewportWidth &&
            top >= 0 &&
            top + elementSize.height <= viewportHeight
        );
    }

    _getViewportOffset(element: HTMLElement, align: string) {
        const viewportSize = _getViewportSize(this.container);
        const elementRect = _getElementRect(element, this.container);
        const elementSize = _getSize(element);

        const viewportWidth = this._isRightAligned(align)
            ? viewportSize.width
            : viewportSize.width - 1;
        const viewportHeight = this._isBottomAligned(align)
            ? viewportSize.height
            : viewportSize.height - 1;

        return {
            top: elementRect.top,
            right: viewportWidth - (elementRect.left + elementSize.width),
            bottom: viewportHeight - (elementRect.top + elementSize.height),
            left: elementRect.left,
        };
    }

    // 在这里做RTL判断 top-left 定位转化为等效的 top-right定位
    _setPinElementPostion(
        pinElement: HTMLElement,
        postion: { top: number; left: number },
        offset: Array<number> = [0, 0]
    ) {
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
        const { width: offsetParentWidth } = _getElementRect(pinElementParentOffset.offsetParent!);
        const { width } = _getElementRect(pinElement);
        const right = offsetParentWidth - (left + width);
        dom.setStyle(pinElement, {
            left: 'auto',
            right: `${right + offset[0]}px`,
            top: `${top + offset[1]}px`,
        });
    }
}
