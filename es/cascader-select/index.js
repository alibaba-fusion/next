import { __assign, __rest } from "tslib";
import ConfigProvider from '../config-provider';
import CascaderSelect from './cascader-select';
export default ConfigProvider.config(CascaderSelect, {
    transform: /* istanbul ignore next */ function (props, deprecated) {
        if ('shape' in props) {
            deprecated('shape', 'hasBorder', 'CascaderSelect');
            var shape = props.shape, others = __rest(props, ["shape"]);
            props = __assign({ hasBorder: shape !== 'arrow-only' }, others);
        }
        if ('container' in props) {
            deprecated('container', 'popupContainer', 'CascaderSelect');
            var container = props.container, others = __rest(props, ["container"]);
            props = __assign({ popupContainer: container }, others);
        }
        if ('expandTrigger' in props) {
            deprecated('expandTrigger', 'expandTriggerType', 'CascaderSelect');
            var expandTrigger = props.expandTrigger, others = __rest(props, ["expandTrigger"]);
            props = __assign({ expandTriggerType: expandTrigger }, others);
        }
        if ('showItemCount' in props) {
            deprecated('showItemCount', 'listStyle | listClassName', 'CascaderSelect');
        }
        if ('labelWidth' in props) {
            deprecated('labelWidth', 'listStyle | listClassName', 'CascaderSelect');
        }
        return props;
    },
});
