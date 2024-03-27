import ConfigProvider from '../config-provider';
import { assignSubComponent } from '../util/component';
import type { ButtonProps, GroupProps } from './types';
import Button from './view/button';
import Group from './view/group';

const WithSubButton = assignSubComponent(Button, { Group });

export type { ButtonProps, GroupProps };

export default ConfigProvider.config(WithSubButton, {
    transform: /* istanbul ignore next */ (props, deprecated) => {
        if ('shape' in props) {
            deprecated('shape', 'text | warning | ghost', 'Button');

            const { shape, type, ...others } = props;

            let newType = type;
            if (
                (type as string) === 'light' ||
                (type as string) === 'dark' ||
                (type === 'secondary' && shape === 'warning')
            ) {
                newType = 'normal';
            }

            let ghost: ButtonProps['ghost'];
            if (shape === 'ghost') {
                ghost = (
                    {
                        primary: 'dark',
                        secondary: 'dark',
                        normal: 'light',
                        dark: 'dark',
                        light: 'light',
                    } as const
                )[type || Button.defaultProps.type];
            }

            const text = shape === 'text';
            const warning = shape === 'warning';

            return { type: newType, ghost, text, warning, ...others };
        }

        return props;
    },
});
