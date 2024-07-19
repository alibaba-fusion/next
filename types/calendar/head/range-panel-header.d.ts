import React from 'react';
import { type Moment } from 'moment';
import { type RangePanelHeaderProps } from '../types';
declare class RangePanelHeader extends React.PureComponent<RangePanelHeaderProps> {
    static defaultProps: {
        yearRangeOffset: number;
    };
    selectContainerHandler: (target: HTMLElement) => HTMLElement;
    onYearChange: (visibleMonth: Moment, year: number, tag: 'start' | 'end') => void;
    changeVisibleMonth: (visibleMonth: Moment, month: number, tag: 'start' | 'end') => void;
    render(): React.JSX.Element;
}
export default RangePanelHeader;
