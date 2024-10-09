import ConfigProvider from '../config-provider';
import Form from './form';
import Item from './item';
import Submit from './submit';
import Reset from './reset';
import Error from './error';
import type { FormProps, ItemProps, SubmitProps, ResetProps, ErrorProps } from './types';
import { assignSubComponent } from '../util/component';

export type { FormProps, ItemProps, SubmitProps, ResetProps, ErrorProps };

const FormWithSub = assignSubComponent(Form, {
    Item: ConfigProvider.config(Item, {
        transform: (props, deprecated) => {
            if ('validateStatus' in props) {
                deprecated('validateStatus', 'validateState', 'Form.Item');

                const { validateStatus, ...others } = props;
                props = { validateState: validateStatus, ...others };
            }

            return props;
        },
    }),
    Submit,
    Reset,
    Error,
});
export default ConfigProvider.config(FormWithSub, {
    transform: (props, deprecated) => {
        if ('direction' in props) {
            deprecated('direction', 'inline', 'Form');
            const { direction, ...others } = props;
            if (direction === 'hoz') {
                props = { inline: true, ...others };
            }
        }

        return props;
    },
});
