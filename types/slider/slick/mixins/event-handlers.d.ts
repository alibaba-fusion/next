import type { TouchEvent, MouseEvent } from 'react';
import type { OptionProps } from '../../types';
declare const EventHandlers: {
    changeSlide(options: OptionProps): void;
    keyHandler(e: KeyboardEvent): void;
    selectHandler(options: OptionProps): void;
    swipeStart(e: MouseEvent | TouchEvent): void;
    swipeMove(e: MouseEvent | TouchEvent): void;
    getNavigableIndexes(): number[];
    checkNavigable(index: number): number;
    getSlideCount(): any;
    swipeEnd(e: MouseEvent | TouchEvent): void;
    onInnerSliderEnter(): void;
    onInnerSliderLeave(): void;
};
export default EventHandlers;
