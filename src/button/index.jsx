import ConfigProvider from '../config-provider';
import Button from './view/button';
import ButtonGroup from './view/group';

Button.Group = ButtonGroup;

export default ConfigProvider.config(Button, {
    transform: /* istanbul ignore next */ (props, deprecated) => {
        const { type, text, warning } = props;
        if (warning) {
            if (text) {
                deprecated(
                    `<Button ${type ? `type="${type}"` : ''} warning text/>`,
                    `<Button type="warning" model="text" />`,
                    'Button'
                );
            } else {
                deprecated(
                    `<Button ${type ? `type="${type}"` : ''} warning/>`,
                    `<Button type="warning" model="${{ primary: 'outline', secondary: 'solid', normal: 'solid' }[
                        type
                    ] || 'solid'}" />`,
                    'Button'
                );
            }
        } else if (text) {
            deprecated(
                `<Button ${type ? `type="${type}"` : ''} text/>`,
                `<Button type="${{ primary: 'primary', secondary: 'primary', normal: 'normal' }[type] ||
                    'normal'}" model="text" />`,
                'Button'
            );
        } else {
            type === 'secondary' &&
                deprecated('<Button type="secondary" />', '<Button type="primary" model="outline" />', 'Button');
        }

        if ('ghost' in props) {
            deprecated('ghost', 'type="inverse"', 'Button');
        }

        if ('shape' in props) {
            const { shape, type, ...others } = props;
            deprecated(
                'shape',
                `${{ text: 'model=text', warning: 'type=warning', ghost: 'type=inverse' }[shape]}`,
                'Button'
            );

            let newType = type;
            if (type === 'light' || type === 'dark' || (type === 'secondary' && shape === 'warning')) {
                newType = 'normal';
            }

            let ghost;
            if (shape === 'ghost') {
                ghost = {
                    primary: 'dark',
                    secondary: 'dark',
                    normal: 'light',
                    dark: 'dark',
                    light: 'light',
                }[type || Button.defaultProps.type];
            }

            const text = shape === 'text';
            const warning = shape === 'warning';

            props = { type: newType, ghost, text, warning, ...others };
        }

        if ('type' in props) {
            const { type, model, ...others } = props;

            let newType = type;
            let newModel = model;
            if (type === 'secondary') {
                [newType, newModel] =
                    'text' in props || newModel === 'text' ? [type, 'text'] : ['primary', newModel || 'outline'];
            }

            props = { type: newType, model: newModel, ...others };
        }

        if ('warning' in props) {
            const { type, model, warning, ...others } = props;

            let newType = type;
            let newModel = model;
            if (warning) {
                newModel =
                    newModel ||
                    {
                        normal: 'solid',
                        primary: 'outline',
                        warning: 'solid',
                        inverse: 'solid',
                    }[type || Button.defaultProps.type];
                newType = 'warning';
            }

            props = { type: newType, model: newModel, ...others };
        }

        if ('text' in props) {
            const { model, text, ...others } = props;

            let newModel = model;
            if (text) {
                newModel = 'text';
            }

            props = { model: newModel, ...others };
        }

        return props;
    },
});
