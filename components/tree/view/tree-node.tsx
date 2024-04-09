import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import cx from 'classnames';
import Icon from '../../icon';
import Checkbox from '../../checkbox';
import Animate from '../../animate';
import { func, obj, KEYCODE } from '../../util';
import TreeNodeInput from './tree-node-input';
import TreeNodeIndent from './tree-node-indent';
import type { NodeProps, NodeState } from '../types';

const { Expand } = Animate;
const { bindCtx } = func;
const { isPromise, pickOthers, pickAttrsWith } = obj;
const isRoot = (pos: string) => /^0-(\d)+$/.test(pos);

/**
 * Tree.Node
 */
export class TreeNode extends Component<NodeProps, NodeState> {
    static propTypes = {
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        _key: PropTypes.string,
        className: PropTypes.string,
        children: PropTypes.node,
        label: PropTypes.node,
        /**
         * 单独设置是否支持选中，覆盖 Tree 的 selectable
         */
        selectable: PropTypes.bool,
        /**
         * 单独设置是否出现复选框，覆盖 Tree 的 checkable
         */
        checkable: PropTypes.bool,
        /**
         * 单独设置是否支持编辑，覆盖 Tree 的 editable
         */
        editable: PropTypes.bool,
        /**
         * 单独设置是否支持拖拽，覆盖 Tree 的 draggable
         */
        draggable: PropTypes.bool,
        /**
         * 是否禁止节点响应
         */
        disabled: PropTypes.bool,
        /**
         * 是否禁止勾选节点复选框
         */
        checkboxDisabled: PropTypes.bool,
        /**
         * 是否是叶子节点，设置loadData时生效
         */
        isLeaf: PropTypes.bool,
        root: PropTypes.object,
        eventKey: PropTypes.string,
        pos: PropTypes.string,
        expanded: PropTypes.bool,
        selected: PropTypes.bool,
        checked: PropTypes.bool,
        indeterminate: PropTypes.bool,
        dragOver: PropTypes.bool,
        dragOverGapTop: PropTypes.bool,
        dragOverGapBottom: PropTypes.bool,
        parentNode: PropTypes.object,
        onKeyDown: PropTypes.func,
        size: PropTypes.number,
        posinset: PropTypes.number,
        // 是否是最后一个子节点，数组类型，包含对祖先节点的判断
        isLastChild: PropTypes.arrayOf(PropTypes.bool),
        /**
         * 自定义图标，可以使用 Icon 的 type，也可以使用组件 `<Icon type="icon type" />`
         * @version 1.21
         */
        icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    };

    static defaultProps = {
        prefix: 'next-',
        label: '---',
        rtl: false,
        disabled: false,
        checkboxDisabled: false,
        size: 1,
        posinset: 1,
    };

    itemLabelWrapperNode: HTMLDivElement;
    labelWrapperEl: HTMLDivElement;
    nodeEl: HTMLDivElement;

    constructor(props: NodeProps) {
        super(props);

        this.state = {
            editing: false,
            loading: false,
            label: props.label,
        };

        bindCtx(this, [
            'handleExpand',
            'handleSelect',
            'handleCheck',
            'handleEditStart',
            'handleEditFinish',
            'handleRightClick',
            'handleDragStart',
            'handleDragEnter',
            'handleDragOver',
            'handleDragLeave',
            'handleDragEnd',
            'handleDrop',
            'handleInputKeyDown',
            'handleKeyDown',
        ]);
    }

    static getDerivedStateFromProps(props: NodeProps) {
        if ('label' in props) {
            return {
                label: props.label,
            };
        }

        return null;
    }

    componentDidMount() {
        this.itemLabelWrapperNode = findDOMNode(this.labelWrapperEl) as HTMLDivElement;
        this.setFocus();
    }

    componentDidUpdate() {
        this.setFocus();
    }

    focusable() {
        const { root, disabled } = this.props;
        const { focusable } = root!.props;
        return focusable && !disabled;
    }

    getFocused() {
        const { _key, root } = this.props;
        const { focusedKey } = root!.state;
        return focusedKey === _key;
    }

    setFocus() {
        const focused = this.getFocused();
        if (focused && this.focusable()) {
            this.itemLabelWrapperNode.focus({ preventScroll: true });
        }
    }

    handleExpand(e: React.MouseEvent<HTMLSpanElement>) {
        const { root, expanded, eventKey } = this.props;

        if (root!.props.isNodeBlock) {
            e.stopPropagation();
        }

        const { loading } = this.state;
        if (loading) {
            return;
        }

        const returnValue = root!.handleExpand(!expanded, eventKey!, this);
        if (isPromise(returnValue)) {
            this.setLoading(true);
            return returnValue.then(
                () => {
                    this.setLoading(false);
                },
                () => {
                    this.setLoading(false);
                }
            );
        }
    }

    setLoading(loading: boolean) {
        this.setState({ loading });
    }

    handleSelect(e: React.MouseEvent) {
        e.preventDefault();
        const { root, selected, eventKey } = this.props;
        root!.handleSelect(!selected, eventKey!, this, e);

        const checkable =
            typeof this.props.checkable !== 'undefined'
                ? this.props.checkable
                : root!.props.checkable;
        const clickToCheck =
            typeof this.props.clickToCheck !== 'undefined'
                ? this.props.clickToCheck
                : root!.props.clickToCheck;
        clickToCheck && checkable && this.handleCheck();
    }

    handleCheck() {
        const { root, checked, eventKey } = this.props;
        root!.handleCheck(!checked, eventKey!, this);
    }

    handleEditStart(e: React.MouseEvent) {
        e.preventDefault();

        this.setState({
            editing: true,
        });
    }

    handleEditFinish(
        e: React.FocusEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>
    ) {
        const target = e.target as HTMLInputElement;
        const label = target.value;

        this.setState({
            editing: false,
        });

        const { root, eventKey } = this.props;
        root!.props.onEditFinish!(eventKey!, label, this);
    }

    handleRightClick(e: React.MouseEvent) {
        this.props.root!.props.onRightClick!({
            event: e,
            node: this,
        });
    }

    handleDragStart(e: React.MouseEvent) {
        e.stopPropagation();

        this.props.root!.handleDragStart(e, this);
    }

    handleDragEnter(e: React.MouseEvent) {
        e.preventDefault();
        e.stopPropagation();

        this.props.root!.handleDragEnter(e, this);
    }

    handleDragOver(e: React.MouseEvent) {
        if (this.props.root!.canDrop(this)) {
            e.preventDefault();

            this.props.root!.handleDragOver(e, this);
        }
        e.stopPropagation();
    }

    handleDragLeave(e: React.MouseEvent) {
        e.stopPropagation();

        this.props.root!.handleDragLeave(e, this);
    }

    handleDragEnd(e: React.MouseEvent) {
        e.stopPropagation();

        this.props.root!.handleDragEnd(e, this);
    }

    handleDrop(e: React.MouseEvent) {
        e.preventDefault();
        e.stopPropagation();

        this.props.root!.handleDrop(e, this);
    }

    handleInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.keyCode === KEYCODE.ENTER) {
            this.handleEditFinish(e);
        }
        e.stopPropagation();
    }

    handleKeyDown(e: React.KeyboardEvent) {
        const { _key, root, disabled } = this.props;
        if (disabled) {
            return;
        }

        if (this.focusable()) {
            root!.handleItemKeyDown(_key!, this, e);
        }

        this.props.onKeyDown && this.props.onKeyDown(e);
    }

    addCallbacks(
        props: {
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
        } & ReturnType<typeof pickAttrsWith<typeof this.props>>
    ) {
        const { disabled, root } = this.props;
        const checkable =
            typeof this.props.checkable !== 'undefined'
                ? this.props.checkable
                : root!.props.checkable;
        const clickToCheck =
            typeof this.props.clickToCheck !== 'undefined'
                ? this.props.clickToCheck
                : root!.props.clickToCheck;
        if (!disabled) {
            const selectable =
                typeof this.props.selectable !== 'undefined'
                    ? this.props.selectable
                    : root!.props.selectable;
            if (selectable) {
                props.onClick = this.handleSelect;
            } else if (clickToCheck && checkable) {
                props.onClick = this.handleCheck;
            }

            const editable =
                typeof this.props.editable !== 'undefined'
                    ? this.props.editable
                    : root!.props.editable;
            if (editable) {
                props.onDoubleClick = this.handleEditStart;
            }
            const draggable =
                typeof this.props.draggable !== 'undefined'
                    ? this.props.draggable
                    : root!.props.draggable;
            if (draggable) {
                props.draggable = true;
                props.onDragStart = this.handleDragStart;
                props.onDragEnd = this.handleDragEnd;
            }
            props.onContextMenu = this.handleRightClick;
        }
    }

    renderSwitcher(showLine: boolean) {
        const { prefix, disabled, expanded, root } = this.props;
        const { loadData } = root!.props;
        const { loading } = this.state;

        const lineState = showLine ? 'line' : 'noline';
        const className = cx({
            [`${prefix}tree-switcher`]: true,
            [`${prefix}${lineState}`]: !loading,
            [`${prefix}close`]: !loading && !showLine && !expanded,
            [`${prefix}disabled`]: disabled,
            [`${prefix}loading`]: loading,
            [`${prefix}loading-${lineState}`]: loading,
        });
        const iconType =
            loadData && loading
                ? 'loading'
                : showLine
                  ? expanded
                      ? 'minus'
                      : 'add'
                  : 'arrow-down';
        const iconCls = cx({
            [`${prefix}tree-switcher-icon`]: true,
            [`${prefix}tree-fold-icon`]: iconType === 'arrow-down',
            [`${prefix}tree-switcher-fold-icon`]: showLine && !expanded,
            [`${prefix}tree-switcher-unfold-icon`]: showLine && expanded,
        });

        return (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <span className={className} onClick={disabled ? undefined : this.handleExpand}>
                {this.renderRightAngle(showLine)}
                <Icon className={iconCls} type={iconType} />
            </span>
        );
    }

    renderNoopSwitcher(showLine: boolean) {
        const { prefix, pos } = this.props;

        const lineState = showLine ? 'line' : 'noline';
        const className = cx({
            [`${prefix}tree-switcher`]: true,
            [`${prefix}noop-${lineState}`]: true,
            [`${prefix}noop-line-noroot`]: showLine && !isRoot(pos!),
        });

        return <span className={className}>{this.renderRightAngle(showLine)}</span>;
    }

    renderRightAngle(showLine: boolean) {
        const { prefix, pos } = this.props;

        return showLine && !isRoot(pos!) ? <span className={`${prefix}tree-right-angle`} /> : null;
    }

    renderCheckbox() {
        const { checked, indeterminate, disabled, checkboxDisabled } = this.props;
        const { label } = this.state;

        return (
            // @ts-expect-error aria-label should be undefined instead of null
            <Checkbox
                aria-label={typeof label === 'string' ? label : null}
                checked={checked}
                tabIndex={-1}
                indeterminate={indeterminate}
                disabled={disabled || checkboxDisabled}
                // don't use onChange, fix https://github.com/alibaba-fusion/next/issues/3850
                onClick={this.handleCheck}
            />
        );
    }

    renderLabel() {
        const { prefix, root, disabled, icon, _key } = this.props;
        const { isNodeBlock } = root!.props;
        const { label } = this.state;
        const selectable =
            typeof this.props.selectable !== 'undefined'
                ? this.props.selectable
                : root!.props.selectable;
        const labelProps = {
            className: cx({
                [`${prefix}tree-node-label`]: true,
                [`${prefix}tree-node-label-selectable`]: selectable && !disabled,
            }),
        };
        const labelWrapperProps = {
            onKeyDown: this.handleKeyDown,
            // @ts-expect-error should covert to number
            tabIndex: (root!.tabbableKey === _key ? '0' : '-1') as number,
        };
        if (!isNodeBlock) {
            this.addCallbacks(labelProps);
        }

        const iconEl = typeof icon === 'string' ? <Icon type={icon} /> : icon;

        return (
            <div
                className={`${prefix}tree-node-label-wrapper`}
                ref={this.saveLabelWrapperRef}
                {...labelWrapperProps}
            >
                <div {...labelProps}>
                    {iconEl}
                    {label}
                </div>
            </div>
        );
    }

    renderInput() {
        const { prefix } = this.props;
        const { label } = this.state;
        return (
            <div className={`${prefix}tree-node-label-wrapper`} ref={this.saveLabelWrapperRef}>
                <TreeNodeInput
                    prefix={prefix}
                    defaultValue={label}
                    onBlur={this.handleEditFinish}
                    onKeyDown={this.handleInputKeyDown}
                />
            </div>
        );
    }

    renderChildTree() {
        const { prefix, children } = this.props;

        return (
            children &&
            this.addAnimationIfNeeded(
                <ul role="group" className={`${prefix}tree-child-tree`}>
                    {children}
                </ul>
            )
        );
    }

    addAnimationIfNeeded(node: React.JSX.Element) {
        const { root } = this.props;

        return root && root.props.animation ? (
            <Expand animationAppear={false}>{node}</Expand>
        ) : (
            node
        );
    }

    saveRef = (ref: HTMLDivElement) => {
        this.nodeEl = ref;
    };

    saveLabelWrapperRef = (ref: HTMLDivElement) => {
        this.labelWrapperEl = ref;
    };

    render() {
        const {
            prefix,
            rtl,
            className,
            isLeaf,
            level,
            root,
            selected,
            checked,
            disabled,
            dragOver,
            dragOverGapTop,
            dragOverGapBottom,
            _key,
            size,
            posinset,
            children,
            expanded,
            isLastChild,
        } = this.props;
        const { isNodeBlock, showLine, draggable: rootDraggable, filterTreeNode } = root!.props;
        const { label } = this.state;

        const ARIA_PREFIX = 'aria-';
        const ariaProps = pickAttrsWith(this.props, ARIA_PREFIX);
        const others: Record<string, unknown> = pickOthers(
            Object.keys(TreeNode.propTypes),
            this.props
        );

        const hasRenderChildNodes = root && root.props.renderChildNodes;
        const shouldShouldLine = !isNodeBlock && showLine && !hasRenderChildNodes;
        const useVirtual = root && root.props.useVirtual;

        // remove aria keys
        Object.keys(others).forEach(key => {
            if (key.match(ARIA_PREFIX)) {
                delete others[key];
            }
        });

        if (rootDraggable) {
            others.onDragEnter = this.handleDragEnter;
            others.onDragOver = this.handleDragOver;
            others.onDragLeave = this.handleDragLeave;
            others.onDrop = this.handleDrop;
        }
        const newClassName = cx({
            [`${prefix}tree-node`]: true,
            [`${prefix}filtered`]: !!filterTreeNode && !!root!.filterTreeNode(this),
            [className!]: !!className,
        });
        const checkable =
            typeof this.props.checkable !== 'undefined'
                ? this.props.checkable
                : root!.props.checkable;
        const innerClassName = cx({
            [`${prefix}tree-node-inner`]: true,
            [`${prefix}selected`]: selected,
            [`${prefix}disabled`]: disabled,
            [`${prefix}drag-over`]: dragOver,
            [`${prefix}drag-over-gap-top`]: dragOverGapTop,
            [`${prefix}drag-over-gap-bottom`]: dragOverGapBottom,
        });

        const defaultPaddingLeft =
            typeof isNodeBlock === 'object'
                ? // @ts-expect-error should convert 0 to '0'
                  parseInt((isNodeBlock.defaultPaddingLeft as string) || 0)
                : 0;
        const paddingLeftProp = rtl ? 'paddingRight' : 'paddingLeft';

        const indent =
            // @ts-expect-error should convert 24 to '24'
            typeof isNodeBlock === 'object' ? parseInt((isNodeBlock.indent as string) || 24) : 24;
        const innerStyle = isNodeBlock
            ? {
                  [paddingLeftProp]: `${(useVirtual ? 0 : indent * (level! - 1)) + defaultPaddingLeft}px`,
              }
            : (null as unknown as undefined);

        const innerProps = {
            className: innerClassName,
            style: innerStyle,
            onKeyDown: this.handleKeyDown,
            ...ariaProps,
        };

        if (isNodeBlock) {
            this.addCallbacks(innerProps);
        }

        const { editing } = this.state;

        // @ts-expect-error should convert to number type
        innerProps.tabIndex = root.tabbableKey === _key ? '0' : '-1';

        if (rtl) {
            others.dir = 'rtl';
        }

        return this.addAnimationIfNeeded(
            <li role="presentation" className={newClassName} {...others}>
                <div
                    ref={this.saveRef}
                    role="treeitem"
                    aria-selected={selected}
                    aria-disabled={disabled}
                    aria-checked={checked}
                    aria-expanded={!isLeaf}
                    aria-label={typeof label === 'string' ? label : (null as unknown as undefined)}
                    aria-level={level}
                    aria-posinset={posinset}
                    aria-setsize={size}
                    {...innerProps}
                >
                    {useVirtual && !hasRenderChildNodes && (
                        <TreeNodeIndent
                            prefix={prefix}
                            level={level!}
                            isLastChild={isLastChild}
                            showLine={shouldShouldLine}
                        />
                    )}
                    {isLeaf
                        ? this.renderNoopSwitcher(shouldShouldLine!)
                        : this.renderSwitcher(shouldShouldLine!)}
                    {checkable ? this.renderCheckbox() : null}
                    {editing ? this.renderInput() : this.renderLabel()}
                </div>
                {expanded && (hasRenderChildNodes ? children : this.renderChildTree())}
            </li>
        );
    }
}

export default polyfill(TreeNode);
