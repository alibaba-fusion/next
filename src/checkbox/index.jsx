import Checkbox from './checkbox';
import Group from './checkbox-group';
import ConfigProvider from '../config-provider';

Checkbox.Group = Group;

export default ConfigProvider.config(Checkbox, {
    transform: /* istanbul ignore next */ (props, deprecated) => {
        if ('itemDirection' in props) {
            deprecated('itemDirection', 'direction', 'Checkbox');
            const { itemDirection, ...others } = props;

            props = { direction: itemDirection, ...others };
        }

        return props;
    },
});
