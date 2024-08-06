import { __read, __spreadArray } from "tslib";
import ConfigProvider from '../config-provider';
import Dropdown from './dropdown';
export default ConfigProvider.config(Dropdown, {
    transform: function (props, deprecated) {
        if ('triggerType' in props) {
            var triggerType = Array.isArray(props.triggerType)
                ? __spreadArray([], __read(props.triggerType), false) : [props.triggerType];
            if (triggerType.indexOf('focus') > -1) {
                deprecated('triggerType[focus]', 'triggerType[hover, click]', 'Balloon');
            }
        }
        return props;
    },
});
