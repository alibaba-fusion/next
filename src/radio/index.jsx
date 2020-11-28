import Radio from './radio';
import RadioGroup from './radio-group';
import ConfigProvider from '../config-provider';

Radio.Group = RadioGroup;

export default ConfigProvider.config(Radio, {
    transform: /* istanbul ignore next */ (props, deprecated) => {
        if ('itemDirection' in props) {
            deprecated('itemDirection', 'direction', 'Radio');
            const { itemDirection, ...others } = props;

            props = { direction: itemDirection, ...others };
        }

        return props;
    },
});
