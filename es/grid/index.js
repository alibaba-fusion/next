import { __assign, __rest } from "tslib";
import ConfigProvider from '../config-provider';
import Row from './row';
import Col from './col';
var Grid = {
    Row: ConfigProvider.config(Row, {
        transform: /* istanbul ignore next */ function (props, deprecated) {
            if ('type' in props) {
                deprecated('type', 'fixed | wrap | gutter', 'Row');
                var type = props.type, others = __rest(props, ["type"]);
                var types = Array.isArray(type) ? type : [type];
                var fixed = void 0;
                if (types.indexOf('fixed') > -1) {
                    fixed = true;
                }
                var wrap = void 0;
                if (types.indexOf('wrap') > -1) {
                    wrap = true;
                }
                props = __assign({ fixed: fixed, wrap: wrap }, others);
            }
            return props;
        },
    }),
    Col: ConfigProvider.config(Col),
};
export default Grid;
