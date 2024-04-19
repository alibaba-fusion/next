import PT from 'prop-types';
import type { ConfigType } from 'dayjs';
import { CALENDAR_SHAPE, CALENDAR_MODE, DATE_PANEL_MODE } from './constant';
import { datejs } from '../util';

const error = (propName: string, ComponentName: string) =>
    new Error(`Invalid prop ${propName} supplied to ${ComponentName}. Validation failed.`);

const SharedPT = {
    shape: PT.oneOf(Object.values(CALENDAR_SHAPE)),
    mode: PT.oneOf(Object.values(CALENDAR_MODE)),
    panelMode: PT.oneOf(Object.values(DATE_PANEL_MODE)),
    // 日期类型：
    //  @string: 2020-11-11
    //  @date: 日期对象
    //  @moment: moment 对象
    //  @dayjs: dayjs 对象
    date(props: Record<string, unknown>, propName: string, componentName: string) {
        if (propName in props && !datejs(props[propName] as ConfigType).isValid()) {
            return error(propName, componentName);
        }
        return null;
    },
};

export default SharedPT;
