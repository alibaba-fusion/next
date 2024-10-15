import ConfigProvider from '../config-provider';
import Range from './view/range';

export type { RangeProps, RangeValueType } from './types';

export default ConfigProvider.config(Range, {
    transform: (props, deprecated) => {
        if ('hasTips' in props) {
            deprecated('hasTips', 'hasTip', 'Range');

            const { hasTips, ...others } = props;
            props = { hasTip: hasTips, ...others };
        }

        if ('tipFormatter' in props) {
            deprecated('tipFormatter', 'tipRender', 'Range');

            const { tipFormatter, ...others } = props;
            props = { tipRender: tipFormatter, ...others };
        }

        return props;
    },
});
