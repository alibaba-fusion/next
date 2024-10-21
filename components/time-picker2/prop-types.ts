import PT from 'prop-types';
import type { ConfigType } from 'dayjs';

import { TIME_PICKER_TYPE, TIME_INPUT_TYPE } from './constant';
import { datejs } from '../util';

export const error = (propName: string, ComponentName: string) =>
    new Error(`Invalid prop ${propName} supplied to ${ComponentName}. Validation failed.`);

function checkType(type: string | string[]) {
    return (props: Record<string, unknown>, propName: string, componentName: string) => {
        let value = props[propName];
        if (value) {
            if (!Array.isArray(value)) {
                value = [value];
            }

            if (!Array.isArray(type)) {
                type = [type];
            }

            if (!(value as unknown[]).every(v => type.includes(typeof v))) {
                throw error(propName, componentName);
            }
        }
    };
}

const SharedPT = {
    date(props: Record<string, unknown>, propName: string, componentName: string) {
        if (propName in props && !datejs(props.propName as ConfigType).isValid()) {
            throw error(propName, componentName);
        }
    },
    value(props: Record<string, unknown>, propName: string, componentName: string) {
        if (props[propName]) {
            let value = props[propName];

            if (props.type === TIME_PICKER_TYPE.RANGE && !Array.isArray(value)) {
                throw error(propName, componentName);
            } else if (!Array.isArray(value)) {
                value = [value];
            }

            if (
                !(value as unknown[]).every(
                    v => !v || datejs(v as ConfigType).isValid() || typeof v === 'string'
                )
            ) {
                throw error(propName, componentName);
            }
        }
    },
    format: checkType(['string', 'function']),
    inputValue: checkType('string'),
    placeholder: checkType('string'),
    readOnly: checkType('boolean'),
    disabled: checkType('boolean'),

    render: PT.oneOfType([PT.node, PT.func]),
    type: PT.oneOf(Object.values(TIME_PICKER_TYPE)),
    inputType: PT.oneOf(Object.values(TIME_INPUT_TYPE)),
    size: PT.oneOf(['small', 'medium', 'large']),
};

export default SharedPT;
