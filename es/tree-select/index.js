import { __assign, __rest } from "tslib";
import ConfigProvider from '../config-provider';
import TreeSelect from './tree-select';
export default ConfigProvider.config(TreeSelect, {
    transform: /* istanbul ignore next */ function (props, deprecated) {
        if ('shape' in props) {
            deprecated('shape', 'hasBorder', 'TreeSelect');
            var shape = props.shape, others = __rest(props, ["shape"]);
            props = __assign({ hasBorder: shape !== 'arrow-only' }, others);
        }
        if ('container' in props) {
            deprecated('container', 'popupContainer', 'TreeSelect');
            var container = props.container, others = __rest(props, ["container"]);
            props = __assign({ popupContainer: container }, others);
        }
        return props;
    },
});
