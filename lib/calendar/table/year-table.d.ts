import React from 'react';
import { type Moment } from 'moment';
import { type YearTableProps } from '../types';
declare class YearTable extends React.PureComponent<YearTableProps> {
    onYearCellClick(date: Moment): void;
    render(): React.JSX.Element;
}
export default YearTable;
