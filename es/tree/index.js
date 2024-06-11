import ConfigProvider from '../config-provider';
import { assignSubComponent } from '../util/component';
import Tree from './view/tree';
import TreeNode from './view/tree-node';
var WithSubTree = assignSubComponent(Tree, { Node: TreeNode });
export default ConfigProvider.config(WithSubTree, {
    exportNames: ['setFocusKey'],
});
