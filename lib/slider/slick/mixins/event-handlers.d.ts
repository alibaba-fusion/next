import type { TouchEvent, MouseEvent } from 'react';
import type { InnerSliderProps, InnerSliderState, OptionProps } from '../../types';
import type { MixinThisType as HelpersMixinThisType } from './helpers';
type MixinThisType = {
    props: InnerSliderProps;
    state: InnerSliderState;
    list?: HTMLDivElement;
    track?: HTMLDivElement;
    changeSlide(options: OptionProps): void;
    setState(state: InnerSliderState): void;
    getNavigableIndexes(): number[];
    getSlideCount(): number;
    checkNavigable(index: number): number;
} & HelpersMixinThisType;
declare const EventHandlers: {
    changeSlide(this: MixinThisType, options: OptionProps): void;
    keyHandler(this: MixinThisType, e: KeyboardEvent): void;
    selectHandler(this: MixinThisType, options: OptionProps): void;
    swipeStart(this: MixinThisType, e: MouseEvent | TouchEvent): void;
    swipeMove(this: MixinThisType, e: MouseEvent | TouchEvent): void;
    getNavigableIndexes(this: MixinThisType): number[];
    checkNavigable(this: MixinThisType, index: number): number;
    getSlideCount(this: MixinThisType): number;
    swipeEnd(this: MixinThisType, e: MouseEvent | TouchEvent): void;
    onInnerSliderEnter(this: MixinThisType): void;
    onInnerSliderLeave(this: MixinThisType): void;
};
export default EventHandlers;
