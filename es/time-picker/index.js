import { __assign, __rest } from "tslib";
import ConfigProvider from '../config-provider';
import TimePicker from './time-picker';
export default ConfigProvider.config(TimePicker, {
    transform: function (props, deprecated) {
        if ('defaultOpen' in props) {
            deprecated('defaultOpen', 'defaultVisible', 'TimePicker');
            var defaultOpen = props.defaultOpen, others = __rest(props, ["defaultOpen"]);
            props = __assign({ defaultVisible: defaultOpen }, others);
        }
        if ('open' in props) {
            deprecated('open', 'visible', 'TimePicker');
            var open_1 = props.open, others = __rest(props, ["open"]);
            props = __assign({ visible: open_1 }, others);
        }
        if ('onOpenChange' in props) {
            deprecated('onOpenChange', 'onVisibleChange', 'TimePicker');
            var onOpenChange = props.onOpenChange, others = __rest(props, ["onOpenChange"]);
            props = __assign({ onVisibleChange: onOpenChange }, others);
        }
        return props;
    },
});
