import Checkbox from './checkbox';
import Group from './checkbox-group';
import ConfigProvider from '../config-provider';

Checkbox.Group = ConfigProvider.config(Group, {
    transform: /* istanbul ignore next */ (props, deprecated) => {
        if ('itemDirection' in props) {
            deprecated('itemDirection', 'direction', 'Checkbox');
            const { itemDirection, ...others } = props;

            props = { direction: itemDirection, ...others };
        }

        return props;
    },
});

export type { CheckboxProps, GroupProps } from './types';

export default Checkbox;
