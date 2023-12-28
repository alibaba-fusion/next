import { __assign, __rest } from "tslib";
import Radio from './radio';
import RadioGroup from './radio-group';
import ConfigProvider from '../config-provider';
Radio.Group = ConfigProvider.config(RadioGroup, {
    transform: /* istanbul ignore next */ function (props, deprecated) {
        if ('itemDirection' in props) {
            deprecated('itemDirection', 'direction', 'Radio');
            var itemDirection = props.itemDirection, others = __rest(props, ["itemDirection"]);
            props = __assign({ direction: itemDirection }, others);
        }
        return props;
    },
});
export default Radio;
