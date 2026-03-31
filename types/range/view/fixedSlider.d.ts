import React from 'react';
import PropTypes from 'prop-types';
import { events } from '../../util';
import type { RangeFixedSliderProps, RangeFixedSliderState } from '../types';
export default class FixedSlider extends React.Component<
    RangeFixedSliderProps,
    RangeFixedSliderState
> {
    static displayName: string;
    static propTypes: {
        hasTip: PropTypes.Requireable<boolean>;
        tooltipVisible: PropTypes.Requireable<boolean>;
        onTooltipVisibleChange: PropTypes.Requireable<(...args: any[]) => any>;
        tooltipAnimation: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
        value: PropTypes.Requireable<
            NonNullable<number | (number | null | undefined)[] | null | undefined>
        >;
        tipRender: PropTypes.Requireable<(...args: any[]) => any>;
        disabled: PropTypes.Requireable<boolean>;
        hasMovingClass: PropTypes.Requireable<boolean>;
        rtl: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        disabled: boolean;
        hasTip: boolean;
        onChange: () => void;
        onProcess: () => void;
        tipRender: (value: number | string) => string | number;
        reverse: boolean;
        rtl: boolean;
    };
    keyState: 'down' | 'enter' | '';
    _onMouseUpListener: ReturnType<typeof events.on> | null;
    constructor(props: RangeFixedSliderProps);
    _onMouseEnter(): void;
    _onMouseLeave(): void;
    _onMouseDown(): void;
    _onMouseUp(): void;
    _addDocumentEvents(): void;
    _removeDocumentEvents(): void;
    render(): React.JSX.Element;
}
