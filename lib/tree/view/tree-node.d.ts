import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { NodeProps, NodeState } from '../types';
declare const pickAttrsWith: typeof import("../../util/object").pickAttrsWith;
/**
 * Tree.Node
 */
export declare class TreeNode extends Component<NodeProps, NodeState> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        rtl: PropTypes.Requireable<boolean>;
        _key: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /**
         * 单独设置是否支持选中，覆盖 Tree 的 selectable
         */
        selectable: PropTypes.Requireable<boolean>;
        /**
         * 单独设置是否出现复选框，覆盖 Tree 的 checkable
         */
        checkable: PropTypes.Requireable<boolean>;
        /**
         * 单独设置是否支持编辑，覆盖 Tree 的 editable
         */
        editable: PropTypes.Requireable<boolean>;
        /**
         * 单独设置是否支持拖拽，覆盖 Tree 的 draggable
         */
        draggable: PropTypes.Requireable<boolean>;
        /**
         * 是否禁止节点响应
         */
        disabled: PropTypes.Requireable<boolean>;
        /**
         * 是否禁止勾选节点复选框
         */
        checkboxDisabled: PropTypes.Requireable<boolean>;
        /**
         * 是否是叶子节点，设置loadData时生效
         */
        isLeaf: PropTypes.Requireable<boolean>;
        root: PropTypes.Requireable<object>;
        eventKey: PropTypes.Requireable<string>;
        pos: PropTypes.Requireable<string>;
        expanded: PropTypes.Requireable<boolean>;
        selected: PropTypes.Requireable<boolean>;
        checked: PropTypes.Requireable<boolean>;
        indeterminate: PropTypes.Requireable<boolean>;
        dragOver: PropTypes.Requireable<boolean>;
        dragOverGapTop: PropTypes.Requireable<boolean>;
        dragOverGapBottom: PropTypes.Requireable<boolean>;
        parentNode: PropTypes.Requireable<object>;
        onKeyDown: PropTypes.Requireable<(...args: any[]) => any>;
        size: PropTypes.Requireable<number>;
        posinset: PropTypes.Requireable<number>;
        isLastChild: PropTypes.Requireable<(boolean | null | undefined)[]>;
        /**
         * 自定义图标，可以使用 Icon 的 type，也可以使用组件 `<Icon type="icon type" />`
         * @version 1.21
         */
        icon: PropTypes.Requireable<NonNullable<PropTypes.ReactNodeLike>>;
    };
    static defaultProps: {
        prefix: string;
        label: string;
        rtl: boolean;
        disabled: boolean;
        checkboxDisabled: boolean;
        size: number;
        posinset: number;
    };
    itemLabelWrapperNode: HTMLDivElement;
    labelWrapperEl: HTMLDivElement;
    nodeEl: HTMLDivElement;
    constructor(props: NodeProps);
    static getDerivedStateFromProps(props: NodeProps): {
        label: React.ReactNode;
    } | null;
    componentDidMount(): void;
    componentDidUpdate(): void;
    focusable(): boolean | "" | undefined;
    getFocused(): boolean;
    setFocus(): void;
    handleExpand(e: React.MouseEvent<HTMLSpanElement>): Promise<void> | undefined;
    setLoading(loading: boolean): void;
    handleSelect(e: React.MouseEvent): void;
    handleCheck(): void;
    handleEditStart(e: React.MouseEvent): void;
    handleEditFinish(e: React.FocusEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>): void;
    handleRightClick(e: React.MouseEvent): void;
    handleDragStart(e: React.MouseEvent): void;
    handleDragEnter(e: React.MouseEvent): void;
    handleDragOver(e: React.MouseEvent): void;
    handleDragLeave(e: React.MouseEvent): void;
    handleDragEnd(e: React.MouseEvent): void;
    handleDrop(e: React.MouseEvent): void;
    handleInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void;
    handleKeyDown(e: React.KeyboardEvent): void;
    addCallbacks(props: {
        onClick?: (e: React.MouseEvent) => void;
        onDoubleClick?: (e: React.MouseEvent) => void;
        onContextMenu?: (e: React.MouseEvent) => void;
        onDragStart?: (e: React.DragEvent) => void;
        onDragEnd?: (e: React.DragEvent) => void;
        onKeyDown?: (e: React.KeyboardEvent) => void;
        draggable?: boolean;
        className?: string;
        style?: React.CSSProperties | undefined;
        tabIndex?: number;
    } & ReturnType<typeof pickAttrsWith<typeof this.props>>): void;
    renderSwitcher(showLine: boolean): React.JSX.Element;
    renderNoopSwitcher(showLine: boolean): React.JSX.Element;
    renderRightAngle(showLine: boolean): React.JSX.Element | null;
    renderCheckbox(): React.JSX.Element;
    renderLabel(): React.JSX.Element;
    renderInput(): React.JSX.Element;
    renderChildTree(): false | "" | 0 | React.JSX.Element | null | undefined;
    addAnimationIfNeeded(node: React.JSX.Element): React.JSX.Element;
    saveRef: (ref: HTMLDivElement) => void;
    saveLabelWrapperRef: (ref: HTMLDivElement) => void;
    render(): React.JSX.Element;
}
declare const _default: typeof TreeNode;
export default _default;
