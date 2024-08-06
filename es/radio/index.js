import { __assign, __rest } from "tslib";
import Radio from './radio';
import RadioGroup from './radio-group';
import ConfigProvider from '../config-provider';
import { assignSubComponent } from '../util/component';
var RadioWithSub = assignSubComponent(Radio, {
    Group: ConfigProvider.config(RadioGroup, {
        transform: function (props, deprecated) {
            if ('itemDirection' in props) {
                deprecated('itemDirection', 'direction', 'Radio');
                var itemDirection = props.itemDirection, others = __rest(props, ["itemDirection"]);
                props = __assign({ direction: itemDirection }, others);
            }
            return props;
        },
    }),
});
export default RadioWithSub;
