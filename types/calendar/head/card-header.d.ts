import React from 'react';
import PropTypes from 'prop-types';
import type { CalendarMode, CardHeaderProps } from '../types';
declare class CardHeader extends React.Component<CardHeaderProps> {
    static propTypes: {
        yearRange: PropTypes.Requireable<(number | null | undefined)[]>;
        yearRangeOffset: PropTypes.Requireable<number>;
        locale: PropTypes.Requireable<object>;
    };
    static defaultProps: {
        yearRangeOffset: number;
    };
    selectContainerHandler: (target: HTMLElement) => HTMLElement;
    getYearSelect(year: number): React.JSX.Element;
    getMonthSelect(month: number): React.JSX.Element;
    onYearChange: (year: number) => void;
    changeVisibleMonth: (month: number) => void;
    onModePanelChange: (mode: CalendarMode) => void;
    render(): React.JSX.Element;
}
declare const _default: import('../../config-provider/types').ConfiguredComponentClass<
    CardHeaderProps & import('../../config-provider/types').ComponentCommonProps,
    CardHeader,
    {}
>;
export default _default;
