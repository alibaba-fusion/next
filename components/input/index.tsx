import ConfigProvider from '../config-provider';
import Input from './input';
import Password from './password';
import TextArea from './textarea';
import Group from './group';
import { assignSubComponent } from '../util/component';

export type { InputProps, PasswordProps, TextAreaProps, GroupProps } from './types';

const InputWithSub = assignSubComponent(Input, {
    Password: ConfigProvider.config(Password, {
        exportNames: ['getInputNode', 'focus'],
        transform: (props, deprecated) => {
            if ('hasLimitHint' in props) {
                deprecated('hasLimitHint', 'showLimitHint', 'Input');
                const { hasLimitHint, ...others } = props;

                props = { showLimitHint: hasLimitHint, ...others };
            }

            return props;
        },
    }),
    TextArea: ConfigProvider.config(TextArea, {
        exportNames: ['getInputNode', 'focus'],
        transform: (props, deprecated) => {
            if ('hasLimitHint' in props) {
                deprecated('hasLimitHint', 'showLimitHint', 'Input');
                const { hasLimitHint, ...others } = props;

                props = { showLimitHint: hasLimitHint, ...others };
            }

            return props;
        },
    }),
    Group,
});

export default ConfigProvider.config(InputWithSub, {
    exportNames: ['getInputNode', 'focus'],
    transform: (props, deprecated) => {
        if ('hasLimitHint' in props) {
            deprecated('hasLimitHint', 'showLimitHint', 'Input');
            const { hasLimitHint, ...others } = props;

            props = { showLimitHint: hasLimitHint, ...others };
        }

        return props;
    },
});
