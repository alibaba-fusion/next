import type { PositionProps, PointsType } from '../types';
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
    constructor(props: PositionProps);
    static VIEWPORT: 'viewport';
    static place: (props: PositionProps) => string | undefined;
    setPosition(): string | undefined;
    _calPinOffset: (align: string) => number[];
    _getParentOffset(element: HTMLElement): {
        top: number;
        left: number;
        offsetParent?: HTMLElement | undefined;
    };
    _getParentScrollOffset: (elem: HTMLElement) => {
        top: number;
        left: number;
    };
    _makeElementInViewport(
        pinElement: HTMLElement,
        number: number,
        type: string,
        isPinFixed: boolean
    ): number;
    _normalizePosition(
        element: HTMLElement | 'viewport',
        align: string,
        ignoreElementOffset: boolean
    ): PointsType;
    _normalizeXY(points: PointsType, align: string): PointsType;
    _xyConverter(align: string, points: PointsType, type: 'width' | 'height'): number;
    _getLeftTop(element: HTMLElement): {
        left: number;
        top: number;
    };
    _normalizeElement(element: HTMLElement | 'viewport', ignoreElementOffset: boolean): PointsType;
    _getElementOffset(
        element: HTMLElement,
        ignoreScroll?: boolean
    ): {
        left: number;
        top: number;
    };
    _getExpectedAlign(): string[];
    _replaceAlignDir(align: string, regExp: RegExp, map: Record<string, string>): string;
    _isRightAligned(align: string): boolean;
    _isBottomAligned(align: string): boolean;
    _isInViewport(element: HTMLElement, align: string, adjustOffset?: number[]): boolean;
    _getViewportOffset(
        element: HTMLElement,
        align: string
    ): {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    _setPinElementPostion(
        pinElement: HTMLElement,
        postion: {
            top: number;
            left: number;
        },
        offset?: Array<number>
    ): void;
}
