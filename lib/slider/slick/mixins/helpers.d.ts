import type { InnerSliderProps, InnerSliderState } from '../../types';
export type MixinThisType = {
    props: InnerSliderProps;
    state: InnerSliderState;
    list?: HTMLDivElement;
    track?: HTMLDivElement;
    animationEndCallback: number | undefined;
    hasMounted: boolean;
    getWidth(elem: Element): number;
    getHeight(elem: Element): number;
    setState(state: InnerSliderState, cb?: () => void): void;
    autoPlay(): void;
    initialize(props: InnerSliderProps): void;
    canGoNext(opts: InnerSliderProps): boolean;
    slideHandler(index: number): void;
    play(): false | void;
    pause(): void;
    swipeDirection(touchObject: InnerSliderState['touchObject']): 'left' | 'right' | 'vertical' | 'down' | 'up';
};
declare const helpers: {
    initialize(this: MixinThisType, props: InnerSliderProps): void;
    update(this: MixinThisType, props: InnerSliderProps): void;
    getWidth(elem: Element): number;
    getHeight(elem: Element): number;
    adaptHeight(this: MixinThisType): void;
    canGoNext(opts: InnerSliderProps & InnerSliderState): boolean;
    slideHandler(this: MixinThisType, index: number): void;
    arrowHoverHandler(this: MixinThisType, msg?: string): void;
    swipeDirection(touchObject: {
        startX?: number;
        startY?: number;
        curX?: number;
        curY?: number;
    }): "left" | "right" | "vertical" | "down" | "up";
    play(this: MixinThisType): false | undefined;
    autoPlay(this: MixinThisType): void;
    pause(this: MixinThisType): void;
};
export default helpers;
