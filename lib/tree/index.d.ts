/// <reference types="react" />
export type { TreeProps, DataNode, NodeInstance } from './types';
declare const _default: import("../config-provider/types").ConfiguredComponentClass<import("./types").TreeProps<import("./types").FieldDataNode<{
    key: string;
    label?: import("react").ReactNode;
}, "children">> & import("../config-provider/types").ComponentCommonProps, import("./view/tree").Tree, Pick<import("./view/tree").Tree, "setFocusKey">> & {
    Node: typeof import("./view/tree-node").TreeNode;
};
export default _default;
