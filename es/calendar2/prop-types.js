import PT from 'prop-types';
import { CALENDAR_SHAPE, CALENDAR_MODE, DATE_PANEL_MODE } from './constant';
import { datejs } from '../util';
var error = function (propName, ComponentName) {
    return new Error("Invalid prop ".concat(propName, " supplied to ").concat(ComponentName, ". Validation failed."));
};
var SharedPT = {
    shape: PT.oneOf(Object.values(CALENDAR_SHAPE)),
    mode: PT.oneOf(Object.values(CALENDAR_MODE)),
    panelMode: PT.oneOf(Object.values(DATE_PANEL_MODE)),
    // 日期类型：
    //  @string: 2020-11-11
    //  @date: 日期对象
    //  @moment: moment 对象
    //  @dayjs: dayjs 对象
    date: function (props, propName, componentName) {
        if (propName in props && !datejs(props[propName]).isValid()) {
            return error(propName, componentName);
        }
        return null;
    },
};
export default SharedPT;
