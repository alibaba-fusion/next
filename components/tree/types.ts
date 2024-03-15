import type React from 'react';
import type { CommonProps } from '../util';
import type { VirtualListProps } from '../virtual-list';
import type { Tree } from './view/tree';
import type { TreeNode } from './view/tree-node';

export type Key = string;
export type KeyEntities = Record<Key, DataNode>;
export type IconType = string | React.ReactNode;
export type NodeInstance = InstanceType<typeof TreeNode>;

export interface BasicDataNode {
    checkable?: boolean;
    disabled?: boolean;
    checkboxDisabled?: boolean;
    icon?: IconType;
    isLeaf?: boolean;
    selectable?: boolean;
    draggable?: boolean;
    editable?: boolean;

    className?: string;
    style?: React.CSSProperties;
}

export type FieldDataNode<T, ChildFieldName extends string = 'children'> = BasicDataNode &
    T &
    Partial<Record<ChildFieldName, FieldDataNode<T, ChildFieldName>[]>>;

export type DataNode = FieldDataNode<{
    key: Key;
    label?: React.ReactNode;
    illegalFlag?: boolean;
    node?: NodeElement;
    size?: number;
    posinset?: number;
    children?: DataNode[] | NodeElement;
    pos?: string;
    level?: number;
    isLastChild?: boolean[];
}>;

export type TreeDataNode = FieldDataNode<{
    key: Key;
    label?: React.ReactNode;
}>;

/**
 * @api Tree.Node
 */
export interface NodeProps extends CommonProps {
    /**
     * 树节点
     * @en chidren
     */
    children?: React.ReactNode;

    /**
     * 节点文本内容
     * @en Label of the node
     * @defaultValue '---'
     */
    label?: React.ReactNode;

    /**
     * 单独设置是否支持选中，覆盖 Tree 的 selectable
     * @en Whether the node is selectable or not (overrides Tree's selectable)
     */
    selectable?: boolean;

    /**
     * 单独设置是否出现复选框，覆盖 Tree 的 checkable
     * @en Whether the node has a checkbox or not (overrides Tree's checkable)
     */
    checkable?: boolean;

    /**
     * 单独设置是否支持编辑，覆盖 Tree 的 editable
     * @en Whether the node is editable or not (overrides Tree's editable)
     */
    editable?: boolean;

    /**
     * 单独设置是否支持拖拽，覆盖 Tree 的 draggable
     * @en Whether the node is draggable or not (overrides Tree's draggable)
     */
    draggable?: boolean;

    /**
     * 是否禁止节点响应
     * @en Whether the node is disabled or not
     * @defaultValue false
     */
    disabled?: boolean;

    /**
     * 是否禁止勾选节点复选框
     * @en Whether the checkbox is disabled or not
     * @defaultValue false
     */
    checkboxDisabled?: boolean;

    /**
     * 是否是叶子节点，设置loadData时生效
     * @en Whether the node is a leaf node or not
     */
    isLeaf?: boolean;

    /**
     * 点击文本是否可以勾选
     * @en Whether the node can be checked by clicking the text
     * @skip
     */
    clickToCheck?: boolean;

    /**
     * 无障碍化属性：aria-setsize
     * @en The number of items in the set of the list that the user is currently accessing
     * @skip
     */
    size?: number;

    /**
     * 无障碍化属性：aria-posinset
     * @en The position or index of the item in the list that the user is currently accessing
     * @skip
     */
    posinset?: number;

    /**
     * 父组件实例
     * @en Parent component instance
     * @skip
     */
    root?: Tree & { props: TreeProps };

    /**
     * eventKey
     * @en eventKey
     * @skip
     */
    eventKey?: string;

    /**
     * pos
     * @en pos
     * @skip
     */
    pos?: string;

    /**
     * expanded
     * @en expanded
     * @skip
     */
    expanded?: boolean;

    /**
     * selected
     * @en selected
     * @skip
     */
    selected?: boolean;

    /**
     * checked
     * @en checked
     * @skip
     */
    checked?: boolean;

    /**
     * indeterminate
     * @en indeterminate
     * @skip
     */
    indeterminate?: boolean;

    /**
     * dragOver
     * @en drayOver
     * @skip
     */
    dragOver?: boolean;

    /**
     * dragOverGapTop
     * @en drayOverGapTop
     * @skip
     */
    dragOverGapTop?: boolean;

    /**
     * dragOverGapBottom
     * @en drayOverGapBottom
     * @skip
     */
    dragOverGapBottom?: boolean;

    /**
     * _key
     * @en _key
     * @skip
     */
    _key?: string;

    /**
     * level
     * @en level
     * @skip
     */
    level?: number;

    /**
     * isLastChild
     * @en isLastChild
     * @skip
     */
    isLastChild?: boolean[];

    /**
     * 自定义图标，可以使用 Icon 的 type，也可以使用组件 `<Icon type="icon type" />`
     * @en Custom Icon
     * @skip
     */
    icon?: IconType;

    /**
     * onKeyDown
     * @en onKeyDown
     * @skip
     */
    onKeyDown?: (event: React.KeyboardEvent) => void;

    /**
     * className
     * @en className
     * @skip
     */
    className?: string;

    /**
     * key
     * @en key
     * @skip
     */
    key?: Key;

    /**
     * style
     * @en style
     * @skip
     */
    style?: React.CSSProperties;
}

export type NodeElement = React.ReactElement<NodeProps>;

export interface NodeState {
    label: NodeProps['label'];
    loading: boolean;
    editing: boolean;
}

export interface TreeState<TreeDataType extends DataNode | BasicDataNode = DataNode> {
    _k2n: KeyEntities;
    _p2n: KeyEntities;
    _keyList: string[];
    dataSource: TreeDataType[];
    willReceiveProps: boolean;
    expandedKeys: string[];
    selectedKeys: string[];
    checkedKeys: string[];
    indeterminateKeys: string[];
    focusedKey: string | null | undefined;
    dragOverNodeKey?: string | null | undefined;
}

type HTMLAttributesWeak = Omit<
    React.HTMLAttributes<HTMLElement>,
    | 'onDragEnd'
    | 'onDragEnter'
    | 'onDragLeave'
    | 'onDragOver'
    | 'onDragStart'
    | 'onDrop'
    | 'onSelect'
>;
/**
 * @api Tree
 */
export interface TreeProps<
    TreeDataType extends BasicDataNode = FieldDataNode<{
        key: Key;
        label?: React.ReactNode;
    }>,
> extends HTMLAttributesWeak,
        CommonProps {
    /**
     * 树节点
     * @en chidren of the tree component
     */
    children?: React.ReactNode;

    /**
     * 数据源，该属性优先级高于 children
     * @en Data source of the tree component
     */
    dataSource?: TreeDataType[];

    /**
     * 是否显示树的线
     * @en Show line or not
     * @defaultValue false
     */
    showLine?: boolean;

    /**
     * 是否支持选中节点
     * @en Selectable nodes or not
     * @defaultValue false
     */
    selectable?: boolean;

    /**
     * （用于受控）当前选中节点 key 的数组
     * @en Selected keys array (controlled)
     */
    selectedKeys?: string[];

    /**
     * （用于非受控）默认选中节点 key 的数组
     * @en Default selected keys array
     * @defaultValue []
     */
    defaultSelectedKeys?: string[];

    /**
     * 选中或取消选中节点时触发的回调函数
     * @en Callback function when selected or unselected a node
     * @defaultValue () =\> \{\}
     * @param selectedKeys - 选中节点key的数组 - Array of selected keys
     * @param extra - 额外参数 - Extra parameters
     * @returns 空 - void
     */
    onSelect?: (
        selectedKeys: string[],
        extra: {
            selectedNodes: Array<NodeInstance>;
            node: NodeInstance;
            selected: boolean;
            event: React.KeyboardEvent | React.MouseEvent;
        }
    ) => void;

    /**
     * 是否支持多选
     * @en Multiple selectable
     * @defaultValue false
     */
    multiple?: boolean;

    /**
     * 是否支持勾选节点的复选框
     * @en Checkable nodes or not
     * @defaultValue false
     */
    checkable?: boolean;

    /**
     * （用于受控）当前勾选复选框节点 key 的数组或 `{checked: Array, indeterminate: Array}` 的对象
     * @en Checked keys array or `{checked: Array, indeterminate: Array}` object (controlled)
     */
    checkedKeys?:
        | {
              checked: string[];
              indeterminate: string[];
          }
        | string[];
    /**
     * （用于非受控）默认勾选复选框节点 key 的数组
     * @en Default checked keys array (uncontrolled)
     * @defaultValue []
     */
    defaultCheckedKeys?:
        | {
              checked: string[];
              indeterminate: string[];
          }
        | string[];

    /**
     * 勾选节点复选框是否完全受控（父子节点选中状态不再关联）
     * @en Whether the checkbox is fully controlled (parent-child node selection status is no longer associated)
     * @defaultValue false
     */
    checkStrictly?: boolean;

    /**
     * 定义选中时回填的方式
     * @en Define how to fill the checked state when selected
     * @defaultValue 'all'
     */
    checkedStrategy?: 'all' | 'parent' | 'child';

    /**
     * 勾选或取消勾选复选框时触发的回调函数
     * @en Callback function when checked or unchecked a checkbox
     * @defaultValue () =\> \{\}
     * @param checkedKeys - 勾选复选框节点key的数组 - Array of checked keys
     * @param extra - 额外参数 - Extra parameters
     * @returns 空 - void
     */
    onCheck?: (
        checkedKeys: string[],
        extra: {
            checkedNodes: Array<NodeInstance>;
            checkedNodesPositions: Array<NodeInstance>;
            indeterminateKeys: string[];
            node: NodeInstance;
            checked: boolean;
            key: Key;
        }
    ) => void;

    /**
     * （用于受控）当前展开的节点 key 的数组
     * @en Expanded keys array (controlled)
     */
    expandedKeys?: string[];

    /**
     * （用于非受控）默认展开的节点 key 的数组
     * @en Default expanded keys array (uncontrolled)
     * @defaultValue []
     */
    defaultExpandedKeys?: string[];

    /**
     * 是否默认展开所有节点
     * @en Whether to expand all nodes by default
     * @defaultValue false
     */
    defaultExpandAll?: boolean;

    /**
     * 是否自动展开父节点
     * @en Whether to automatically expand parent nodes
     * @defaultValue true
     */
    autoExpandParent?: boolean;

    /**
     * 展开或收起节点时触发的回调函数
     * @en Callback function when expanded or collapsed a node
     * @defaultValue () =\> \{\}
     * @param expandedKeys - 展开节点key的数组 - Array of expanded keys
     * @param extra - 额外参数 - Extra parameters
     * @returns 空 - void
     */
    onExpand?: (
        expandedKeys: string[],
        extra: {
            node: NodeInstance;
            expanded: boolean;
        }
    ) => void;

    /**
     * 是否支持编辑节点内容
     * @en Editable nodes or not
     * @defaultValue false
     */
    editable?: boolean;

    /**
     * 编辑节点内容完成时触发的回调函数
     * @en Callback function when edit finish
     * @defaultValue () =\> \{\}
     * @param key - 编辑节点 key - Node key
     * @param label - 编辑节点完成时节点的文本 - Node label
     * @param node - 当前编辑的节点 - Node instance
     * @returns 空 - void
     */
    onEditFinish?: (key: Key, label: string, node: NodeInstance) => void;

    /**
     * 是否支持拖拽节点
     * @en Draggable nodes or not
     * @defaultValue false
     */
    draggable?: boolean;

    /**
     * 开始拖拽节点时触发的回调函数
     * @en Callback function when drag start
     * @defaultValue () =\> \{\}
     * @param info - 额外参数 - Extra parameters
     * @returns 空 - void
     *
     */
    onDragStart?: (info: {
        event: React.MouseEvent;
        node: NodeInstance;
        expandedKeys: string[];
    }) => void;

    /**
     * 拖拽节点进入目标节点时触发的回调函数
     * @en Callback function when drag enter
     * @defaultValue () =\> \{\}
     * @param info - 额外参数 - Extra parameters
     * @returns 空 - void
     */
    onDragEnter?: (info: {
        event: React.MouseEvent;
        node: NodeInstance;
        expandedKeys: Array<string>;
    }) => void;

    /**
     * 拖拽节点在目标节点上移动的时候触发的回调函数
     * @en Callback function when drag over
     * @defaultValue () =\> \{\}
     * @param info - 额外参数 - Extra parameters
     * @returns 空 - void
     */
    onDragOver?: (info: { event: React.MouseEvent; node: NodeInstance }) => void;

    /**
     * 拖拽节点离开目标节点时触发的回调函数
     * @en Callback function when drag leave
     * @defaultValue () =\> \{\}
     * @param info - 额外参数 - Extra parameters
     * @returns 空 - void
     */
    onDragLeave?: (info: { event: React.MouseEvent; node: NodeInstance }) => void;

    /**
     * 拖拽节点拖拽结束时触发的回调函数
     * @en Callback function when drag end
     * @defaultValue () =\> \{\}
     * @param info - 额外参数 - Extra parameters
     * @returns 空 - void
     */
    onDragEnd?: (info: { event: React.MouseEvent; node: NodeInstance }) => void;

    /**
     * 拖拽节点放入目标节点内或前后触发的回调函数
     * @en Callback function when drop
     * @defaultValue () =\> \{\}
     * @param info - 额外参数 - Extra parameters
     * @returns 空 - void
     */
    onDrop?: (info: {
        event: React.MouseEvent;
        node: NodeInstance;
        dragNode: NodeInstance;
        dragNodesKeys: Array<string>;
        dropPosition: number;
    }) => void;

    /**
     * 节点是否可被作为拖拽的目标节点
     * @en Whether the node can be a target node for drag
     * @defaultValue () =\> \{\}
     * @param info - 额外参数 - Extra parameters
     * @returns 是否可以被当作目标节点 - Whether can be a target node
     */
    canDrop?: (info: {
        event?: React.MouseEvent;
        node: NodeInstance;
        dragNode: NodeInstance;
        dragNodesKeys: Array<string>;
        dropPosition: number;
    }) => boolean;

    /**
     * 异步加载数据的函数
     * @en Asynchronous load data function
     * @param node - 被点击展开的节点 - Node instance
     */
    loadData?: (node: NodeInstance) => Promise<unknown>;

    /**
     * 按需筛选高亮节点
     * @en Highlight the node
     * @param node - 待筛选的节点 - Node instance
     * @returns 是否被筛选中 - Whether is filtered
     */
    filterTreeNode?: (node: NodeInstance) => boolean;

    /**
     * 右键点击节点时触发的回调函数
     * @en Callback function when right click a node
     * @defaultValue () =\> \{\}
     * @param info - 额外参数 - Extra parameters
     * @returns 空 - void
     */
    onRightClick?: (info: { event: React.MouseEvent; node: NodeInstance }) => void;

    /**
     * 设置节点是否占满剩余空间，一般用于统一在各节点右侧添加元素(借助 flex 实现，暂时只支持 ie10+)
     * @en Whether the node occupies the remaining space
     * @defaultValue false
     */
    isLabelBlock?: boolean;

    /**
     * 设置节点是否占满一行
     * @en Whether the node occupies a line
     * @defaultValue false
     */
    isNodeBlock?: boolean | Record<string, unknown>;

    /**
     * 是否开启展开收起动画
     * @en Whether to open the animation
     * @defaultValue true
     */
    animation?: boolean;

    /**
     * 当前获得焦点的子菜单或菜单项 key 值
     * @en Current focused submenu or menu item key
     */
    focusedKey?: Key;
    /**
     * 渲染子节点
     * @en Render child nodes
     * @param nodes - 所有的子节点 - All child nodes
     * @returns 子节点 - Child nodes
     */
    renderChildNodes?: (nodes: NodeElement[]) => React.ReactNode;
    /**
     * 渲染单个子节点
     * @en Render a single child node
     * @param node - 节点数据 - Node data
     * @returns 返回节点 - Return node
     * @version 1.25
     */
    labelRender?: (node: Record<string, unknown>) => React.ReactNode;
    /**
     * 是否是不可变数据
     * @en Whether it is immutable data
     * @defaultValue false
     * @version 1.23
     */
    immutable?: boolean;

    /**
     * 是否开启虚拟滚动
     * @en Whether to open virtual scrolling
     * @defaultValue false
     */
    useVirtual?: boolean;

    /**
     * VirtualList透传参数
     * @skip
     */
    virtualListProps?: VirtualListProps;
    /**
     * 点击文本是否可以勾选
     * @defaultValue false
     * @skip
     */
    clickToCheck?: boolean;

    /**
     * focusable
     * @en focusable
     * @skip
     */
    focusable?: string;

    /**
     * 自定义样式
     * @en Custom style
     * @skip
     */
    style?: React.CSSProperties;

    /**
     * onItemKeyDown
     * @en onItemkeyDown
     * @skip
     */
    onItemKeyDown?: (
        key: string | null | undefined,
        item: NodeInstance,
        e: React.KeyboardEvent
    ) => void;

    /**
     * onItemFocus
     * @en onItemFocus
     * @skip
     */
    onItemFocus?: (key: string | null | undefined, e: React.KeyboardEvent) => void;

    /**
     * onBlur
     * @en onBlur
     * @skip
     */
    onBlur?: (e: React.FocusEvent) => void;

    /**
     * autoFocus
     * @skip
     */
    autoFocus?: boolean;

    /**
     * className
     * @skip
     */
    className?: string;

    /**
     * dir
     * @skip
     */
    dir?: string;
}
