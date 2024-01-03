import PT from 'prop-types';
import { CALENDAR_SHAPE, CALENDAR_MODE, DATE_PANEL_MODE } from './constant';
import { datejs } from '../util';

const error = (propName, ComponentName) =>
    new Error(`Invalid prop ${propName} supplied to ${ComponentName}. Validation failed.`);

const SharedPT = {
    shape: PT.oneOf(Object.values(CALENDAR_SHAPE)),
    mode: PT.oneOf(Object.values(CALENDAR_MODE)),
    panelMode: PT.oneOf(Object.values(DATE_PANEL_MODE)),
    // 日期类型：
    //  @string: 2020-11-11
    //  @date: 日期对象
    //  @moment: moment对象
    //  @dayjs: dayjs对象
    date(props, propName, componentName) {
        if (propName in props && !datejs(props.propName).isValid()) {
            throw error(propName, componentName);
        }
    },
};

export default SharedPT;
