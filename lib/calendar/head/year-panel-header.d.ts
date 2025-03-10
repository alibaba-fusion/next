import React from 'react';
import { type Moment } from 'moment';
import { type YearPanelHeaderProps } from '../types';
declare class YearPanelHeader extends React.PureComponent<YearPanelHeaderProps> {
    getDecadeLabel: (date: Moment) => string;
    render(): React.JSX.Element;
}
export default YearPanelHeader;
