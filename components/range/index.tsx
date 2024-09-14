import ConfigProvider from '../config-provider';
import Range from './view/range';
import type { RangeProps, RangeValueType } from './types';

export type { RangeProps, RangeValueType };

export default ConfigProvider.config(Range, {
    transform: /* istanbul ignore next */ (props, deprecated) => {
        if ('hasTips' in props) {
            deprecated('hasTips', 'hasTip', 'Range');

            const { hasTips, ...others } = props;
            props = { hasTip: hasTips as boolean, ...others };
        }

        if ('tipFormatter' in props) {
            deprecated('tipFormatter', 'tipRender', 'Range');

            const { tipFormatter, ...others } = props;
            props = { tipRender: tipFormatter as RangeProps['tipRender'], ...others };
        }

        return props;
    },
});
