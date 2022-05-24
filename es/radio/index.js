import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import Radio from './radio';
import RadioGroup from './radio-group';
import ConfigProvider from '../config-provider';

Radio.Group = ConfigProvider.config(RadioGroup, {
    transform: /* istanbul ignore next */function transform(props, deprecated) {
        if ('itemDirection' in props) {
            deprecated('itemDirection', 'direction', 'Radio');

            var _props = props,
                itemDirection = _props.itemDirection,
                others = _objectWithoutProperties(_props, ['itemDirection']);

            props = _extends({ direction: itemDirection }, others);
        }

        return props;
    }
});

export default Radio;