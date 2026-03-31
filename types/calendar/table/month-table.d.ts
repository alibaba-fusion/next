import React, { PureComponent } from 'react';
import { type Moment } from 'moment';
import { type MonthTableProps } from '../types';
declare class MonthTable extends PureComponent<MonthTableProps> {
    onMonthCellClick(date: Moment): void;
    render(): React.JSX.Element;
}
export default MonthTable;
