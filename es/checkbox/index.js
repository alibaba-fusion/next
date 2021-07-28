import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import Checkbox from './checkbox';
import Group from './checkbox-group';
import ConfigProvider from '../config-provider';

Checkbox.Group = ConfigProvider.config(Group, {
    transform: /* istanbul ignore next */function transform(props, deprecated) {
        if ('itemDirection' in props) {
            deprecated('itemDirection', 'direction', 'Checkbox');

            var _props = props,
                itemDirection = _props.itemDirection,
                others = _objectWithoutProperties(_props, ['itemDirection']);

            props = _extends({ direction: itemDirection }, others);
        }

        return props;
    }
});

export default Checkbox;