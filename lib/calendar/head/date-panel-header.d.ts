import React from 'react';
import { type DatePanelHeaderProps } from '../types';
declare class DatePanelHeader extends React.PureComponent<DatePanelHeaderProps> {
    static defaultProps: {
        yearRangeOffset: number;
    };
    selectContainerHandler: (target: HTMLElement) => ParentNode | null;
    onYearChange: (year: number) => void;
    changeVisibleMonth: (month: number) => void;
    render(): React.JSX.Element;
}
export default DatePanelHeader;
