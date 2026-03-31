import { __assign, __rest } from "tslib";
import ConfigProvider from '../config-provider';
import { assignSubComponent } from '../util/component';
import Button from './view/button';
import Group from './view/group';
var WithSubButton = assignSubComponent(Button, { Group: Group });
export default ConfigProvider.config(WithSubButton, {
    transform: /* istanbul ignore next */ function (props, deprecated) {
        if ('shape' in props) {
            deprecated('shape', 'text | warning | ghost', 'Button');
            var shape = props.shape, type = props.type, others = __rest(props, ["shape", "type"]);
            var newType = type;
            if (type === 'light' ||
                type === 'dark' ||
                (type === 'secondary' && shape === 'warning')) {
                newType = 'normal';
            }
            var ghost = void 0;
            if (shape === 'ghost') {
                ghost = {
                    primary: 'dark',
                    secondary: 'dark',
                    normal: 'light',
                    dark: 'dark',
                    light: 'light',
                }[type || Button.defaultProps.type];
            }
            var text = shape === 'text';
            var warning = shape === 'warning';
            return __assign({ type: newType, ghost: ghost, text: text, warning: warning }, others);
        }
        return props;
    },
});
