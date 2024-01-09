import ConfigProvider from '../config-provider';
import type { RowProps, ColProps } from './types';
import Row from './row';
import Col from './col';

const Grid = {
    Row: ConfigProvider.config(Row, {
        transform: /* istanbul ignore next */ (props, deprecated) => {
            if ('type' in props) {
                deprecated('type', 'fixed | wrap | gutter', 'Row');

                const { type, ...others } = props;
                const types = Array.isArray(type) ? type : [type];
                let fixed;
                if (types.indexOf('fixed') > -1) {
                    fixed = true;
                }
                let wrap;
                if (types.indexOf('wrap') > -1) {
                    wrap = true;
                }
                props = { fixed, wrap, ...others };
            }

            return props;
        },
    }),
    Col: ConfigProvider.config(Col),
};

export { RowProps, ColProps };

export default Grid;
