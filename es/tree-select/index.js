import { __assign, __rest } from "tslib";
import ConfigProvider from '../config-provider';
import TreeNode from '../tree/view/tree-node';
import { assignSubComponent } from '../util/component';
import TreeSelect from './tree-select';
var WithTreeSelectNode = assignSubComponent(TreeSelect, { Node: TreeNode });
export default ConfigProvider.config(WithTreeSelectNode, {
    transform: function (props, deprecated) {
        if ('shape' in props) {
            deprecated('shape', 'hasBorder', 'TreeSelect');
            var shape = props.shape, others = __rest(props, ["shape"]);
            props = __assign({ hasBorder: shape !== 'arrow-only' }, others);
        }
        if ('container' in props) {
            deprecated('container', 'popupContainer', 'TreeSelect');
            var _a = props, container = _a.container, others = __rest(_a, ["container"]);
            props = __assign({ popupContainer: container }, others);
        }
        return props;
    },
});
