import { __assign, __rest } from "tslib";
import Checkbox from './checkbox';
import Group from './checkbox-group';
import ConfigProvider from '../config-provider';
import { assignSubComponent } from '../util/component';
var CheckboxWithGroup = assignSubComponent(Checkbox, {
    Group: ConfigProvider.config(Group, {
        transform: /* istanbul ignore next */ function (props, deprecated) {
            if ('itemDirection' in props) {
                deprecated('itemDirection', 'direction', 'Checkbox');
                var itemDirection = props.itemDirection, others = __rest(props, ["itemDirection"]);
                props = __assign({ direction: itemDirection }, others);
            }
            return props;
        },
    }),
});
export default CheckboxWithGroup;
