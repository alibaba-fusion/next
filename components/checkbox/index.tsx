import Checkbox from './checkbox';
import Group from './checkbox-group';
import ConfigProvider from '../config-provider';
import { assignSubComponent } from '../util/component';

const CheckboxWithGroup = assignSubComponent(Checkbox, {
    Group: ConfigProvider.config(Group, {
        transform: /* istanbul ignore next */ (props, deprecated) => {
            if ('itemDirection' in props) {
                deprecated('itemDirection', 'direction', 'Checkbox');
                const { itemDirection, ...others } = props;

                props = { direction: itemDirection, ...others };
            }

            return props;
        },
    }),
});

export type { CheckboxProps, GroupProps, CheckboxData, ValueItem } from './types';

export default CheckboxWithGroup;
