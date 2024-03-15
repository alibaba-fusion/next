import ConfigProvider from '../config-provider';
import { assignSubComponent } from '../util/component';
import Tree from './view/tree';
import TreeNode from './view/tree-node';

export type { TreeProps, DataNode, NodeInstance } from './types';

const WithSubTree = assignSubComponent(Tree, { Node: TreeNode });

export default ConfigProvider.config(WithSubTree, {
    exportNames: ['setFocusKey'],
});
