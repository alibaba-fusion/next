import Radio from './radio';
import RadioGroup from './radio-group';
import ConfigProvider from '../config-provider';
import { assignSubComponent } from '../util/component';

const RadioWithSub = assignSubComponent(Radio, {
    Group: ConfigProvider.config(RadioGroup, {
        transform: (props, deprecated) => {
            if ('itemDirection' in props) {
                deprecated('itemDirection', 'direction', 'Radio');
                const { itemDirection, ...others } = props;

                props = { direction: itemDirection, ...others };
            }

            return props;
        },
    }),
});

export type { RadioProps, GroupProps, RadioValue, RadioValueItem } from './types';

export default RadioWithSub;
