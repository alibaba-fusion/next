import { __assign, __rest } from "tslib";
import ConfigProvider from '../config-provider';
import CascaderSelect from './cascader-select';
export default ConfigProvider.config(CascaderSelect, {
    exportNames: ['focus'],
    transform: function (props, deprecated) {
        if ('shape' in props) {
            deprecated('shape', 'hasBorder', 'CascaderSelect');
            var shape = props.shape, hasBorder = props.hasBorder, others = __rest(props, ["shape", "hasBorder"]);
            props = __assign({ hasBorder: hasBorder !== null && hasBorder !== void 0 ? hasBorder : shape !== 'arrow-only' }, others);
        }
        if ('container' in props) {
            deprecated('container', 'popupContainer', 'CascaderSelect');
            var container = props.container, others = __rest(props, ["container"]);
            props = __assign({ popupContainer: container }, others);
        }
        if ('expandTrigger' in props) {
            deprecated('expandTrigger', 'expandTriggerType', 'CascaderSelect');
            var expandTrigger = props.expandTrigger, expandTriggerType = props.expandTriggerType, others = __rest(props, ["expandTrigger", "expandTriggerType"]);
            props = __assign({ expandTriggerType: expandTriggerType !== null && expandTriggerType !== void 0 ? expandTriggerType : expandTrigger }, others);
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
