import type { InnerSliderProps } from '../../types';
declare const helpers: {
    initialize(props: InnerSliderProps): void;
    update(props: InnerSliderProps): void;
    getWidth(elem: Element): number;
    getHeight(elem: Element): number;
    adaptHeight(): void;
    canGoNext(opts: InnerSliderProps): boolean;
    slideHandler(index: number): void;
    arrowHoverHandler(msg?: string): void;
    swipeDirection(touchObject: {
        startX: number;
        startY: number;
        curX: number;
        curY: number;
    }): 'left' | 'right' | 'vertical' | 'down' | 'up';
    play(): false | undefined;
    autoPlay(): void;
    pause(): void;
};
export default helpers;
