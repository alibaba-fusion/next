import ConfigProvider from '../config-provider';
import TreeNode from '../tree/view/tree-node';
import { assignSubComponent } from '../util/component';
import TreeSelect from './tree-select';
import type { DeprecatedTreeSelectProps } from './types';

export type { TreeSelectProps } from './types';

const WithTreeSelectNode = assignSubComponent(TreeSelect, { Node: TreeNode });

export default ConfigProvider.config(WithTreeSelectNode, {
    transform: (props, deprecated) => {
        if ('shape' in props) {
            deprecated('shape', 'hasBorder', 'TreeSelect');
            const { shape, ...others } = props;
            props = { hasBorder: shape !== 'arrow-only', ...others };
        }

        if ('container' in props) {
            deprecated('container', 'popupContainer', 'TreeSelect');
            const { container, ...others } = props as DeprecatedTreeSelectProps;
            props = { popupContainer: container, ...others };
        }

        return props;
    },
});
