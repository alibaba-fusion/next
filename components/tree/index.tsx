import ConfigProvider from '../config-provider';
import Tree from './view/tree';
import TreeNode from './view/tree-node';

const WithSubTree = Tree as typeof Tree & {
    Node: typeof TreeNode;
};

WithSubTree.Node = TreeNode;

export default ConfigProvider.config(WithSubTree, {
    exportNames: ['setFocusKey'],
});
