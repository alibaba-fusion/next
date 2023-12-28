import { __assign, __rest } from "tslib";
import ConfigProvider from '../config-provider';
import Form from './form';
import Item from './item';
import Submit from './submit';
import Reset from './reset';
import Error from './error';
Form.Item = ConfigProvider.config(Item, {
    transform: /* istanbul ignore next */ function (props, deprecated) {
        if ('validateStatus' in props) {
            deprecated('validateStatus', 'validateState', 'Form.Item');
            var validateStatus = props.validateStatus, others = __rest(props, ["validateStatus"]);
            props = __assign({ validateState: validateStatus }, others);
        }
        return props;
    },
});
Form.Submit = Submit;
Form.Reset = Reset;
Form.Error = Error;
export default ConfigProvider.config(Form, {
    transform: /* istanbul ignore next */ function (props, deprecated) {
        if ('direction' in props) {
            deprecated('direction', 'inline', 'Form');
            var direction = props.direction, others = __rest(props, ["direction"]);
            if (direction === 'hoz') {
                props = __assign({ inline: true }, others);
            }
        }
        return props;
    },
});
