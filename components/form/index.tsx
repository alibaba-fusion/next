import ConfigProvider from '../config-provider';
import Form from './form';
import Item from './item';
import Submit from './submit';
import Reset from './reset';
import Error from './error';
import type { FormProps, ItemProps, SubmitProps, ResetProps, ErrorProps } from './types';

// @ts-expect-error Form没有Item属性，所以报错
Form.Item = ConfigProvider.config(Item, {
    transform: /* istanbul ignore next */ (props, deprecated) => {
        if ('validateStatus' in props) {
            deprecated('validateStatus', 'validateState', 'Form.Item');

            const { validateStatus, ...others } = props;
            props = { validateState: validateStatus, ...others };
        }

        return props;
    },
});
// @ts-expect-error Form没有Submit属性，所以报错
Form.Submit = Submit;
// @ts-expect-error Form没有Reset属性，所以报错
Form.Reset = Reset;
// @ts-expect-error Form没有Error属性，所以报错
Form.Error = Error;

export type { FormProps, ItemProps, SubmitProps, ResetProps, ErrorProps };

export default ConfigProvider.config(
    Form as typeof Form & {
        Item: typeof Item;
        Submit: typeof Submit;
        Reset: typeof Reset;
        Error: typeof Error;
    },
    {
        transform: /* istanbul ignore next */ (props, deprecated) => {
            if ('direction' in props) {
                deprecated('direction', 'inline', 'Form');
                const { direction, ...others } = props;
                if (direction === 'hoz') {
                    props = { inline: true, ...others };
                }
            }

            return props;
        },
    }
);
