import * as PT from 'prop-types';
import { DATE_PICKER_TYPE, DATE_INPUT_TYPE, DATE_PICKER_MODE } from './constant';
import { datejs } from '../util';

export const error = (propName, ComponentName) =>
    new Error(`Invalid prop ${propName} supplied to ${ComponentName}. Validation failed.`);

const SharedPT = {
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

    value(props, propName, componentName) {
        let value = props[propName];
        if (propName in props) {
            if (props.type === DATE_PICKER_TYPE.RANGE && !Array.isArray(value)) {
                throw error(propName, componentName);
            } else {
                value = [value];
            }

            if (!value.every(v => datejs(v).isValid())) {
                throw error(propName, componentName);
            }
        }
    },
    mode: PT.oneOf(Object.values(DATE_PICKER_MODE)),
    type: PT.oneOf(Object.values(DATE_PICKER_TYPE)),
    inputType: PT.oneOf(Object.values(DATE_INPUT_TYPE)),
};

export default SharedPT;
