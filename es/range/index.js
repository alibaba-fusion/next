import { __assign, __rest } from "tslib";
import ConfigProvider from '../config-provider';
import Range from './view/range';
export default ConfigProvider.config(Range, {
    transform: function (props, deprecated) {
        if ('hasTips' in props) {
            deprecated('hasTips', 'hasTip', 'Range');
            var hasTips = props.hasTips, others = __rest(props, ["hasTips"]);
            props = __assign({ hasTip: hasTips }, others);
        }
        if ('tipFormatter' in props) {
            deprecated('tipFormatter', 'tipRender', 'Range');
            var tipFormatter = props.tipFormatter, others = __rest(props, ["tipFormatter"]);
            props = __assign({ tipRender: tipFormatter }, others);
        }
        return props;
    },
});
