import { __assign, __rest } from "tslib";
import ConfigProvider from '../config-provider';
import Input from './input';
import Password from './password';
import TextArea from './textarea';
import Group from './group';
import { assignSubComponent } from '../util/component';
var InputWithSub = assignSubComponent(Input, {
    Password: ConfigProvider.config(Password, {
        exportNames: ['getInputNode', 'focus'],
        transform: function (props, deprecated) {
            if ('hasLimitHint' in props) {
                deprecated('hasLimitHint', 'showLimitHint', 'Input');
                var hasLimitHint = props.hasLimitHint, others = __rest(props, ["hasLimitHint"]);
                props = __assign({ showLimitHint: hasLimitHint }, others);
            }
            return props;
        },
    }),
    TextArea: ConfigProvider.config(TextArea, {
        exportNames: ['getInputNode', 'focus'],
        transform: function (props, deprecated) {
            if ('hasLimitHint' in props) {
                deprecated('hasLimitHint', 'showLimitHint', 'Input');
                var hasLimitHint = props.hasLimitHint, others = __rest(props, ["hasLimitHint"]);
                props = __assign({ showLimitHint: hasLimitHint }, others);
            }
            return props;
        },
    }),
    Group: Group,
});
export default ConfigProvider.config(InputWithSub, {
    exportNames: ['getInputNode', 'focus'],
    transform: function (props, deprecated) {
        if ('hasLimitHint' in props) {
            deprecated('hasLimitHint', 'showLimitHint', 'Input');
            var hasLimitHint = props.hasLimitHint, others = __rest(props, ["hasLimitHint"]);
            props = __assign({ showLimitHint: hasLimitHint }, others);
        }
        return props;
    },
});
