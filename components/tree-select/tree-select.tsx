import React, { type ReactNode, Component, Children, isValidElement, cloneElement } from 'react';
import { polyfill } from 'react-lifecycles-compat';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select, { type DataSourceItem, type ObjectItem } from '../select';
import Tree, { type NodeInstance, type TreeProps } from '../tree';
import {
    normalizeToArray,
    getAllCheckedKeys,
    filterChildKey,
    filterParentKey,
    isDescendantOrSelf,
} from '../tree/view/util';
import { func, obj, KEYCODE, str } from '../util';
import zhCN from '../locale/zh-cn';
import { getValueDataSource, valueToSelectKey } from '../select/util';
import type {
    Key,
    TreeSelectProps,
    TreeSelectState,
    KeyEntities,
    TreeSelectDataItem,
    DataNode,
} from './types';
import type { NodeElement } from '../tree/types';

const noop = () => {};
const { Node: TreeNode } = Tree;
const { bindCtx } = func;
const POS_REGEXP = /^\d+(-\d+){1,}$/;

const flatDataSource = (props: TreeSelectProps) => {
    const _k2n: KeyEntities = {};
    const _p2n: KeyEntities = {};
    const _v2n: KeyEntities = {};

    if ('dataSource' in props) {
        const loop = (data: TreeSelectDataItem[], prefix = '0') =>
            data.map((item: TreeSelectDataItem, index) => {
                const { value, children } = item;
                const pos = `${prefix}-${index}`;
                const key = (item.key as Key) || pos;

                const newItem = { ...item, key, pos } as DataNode;
                if (children && children.length) {
                    newItem.children = loop(children, pos);
                }

                // When null and undefined are used as keys of an object, they will be converted to the string type
                _k2n[key] = _p2n[pos] = _v2n[value as string] = newItem;
                return newItem;
            });

        loop(props.dataSource!);
    } else if ('children' in props) {
        const loop = (children: ReactNode, prefix = '0') =>
            Children.map(children, (node, index) => {
                if (!isValidElement(node)) {
                    return;
                }

                const { value, children } = node.props;
                const pos = `${prefix}-${index}`;
                const key = node.key || pos;
                const newItem = { ...node.props, key, pos };
                if (children && Children.count(children)) {
                    newItem.children = loop(children, pos);
                }

                _k2n[key] = _p2n[pos] = _v2n[value] = newItem;
                return newItem;
            });
        loop(props.children);
    }

    return { _k2n, _p2n, _v2n };
};

const isSearched = (label: ReactNode, searchedValue: string) => {
    let labelString = '';

    searchedValue = String(searchedValue);

    const loop = (arg: ReactNode) => {
        if (isValidElement(arg) && arg.props.children) {
            Children.forEach(arg.props.children, loop);
        } else {
            labelString += arg;
        }
    };
    loop(label);

    if (
        labelString.length >= searchedValue.length &&
        labelString.toLowerCase().indexOf(searchedValue.toLowerCase()) > -1
    ) {
        return true;
    }

    return false;
};

const getSearchKeys = (searchedValue: string, _k2n: KeyEntities, _p2n: KeyEntities) => {
    const searchedKeys: Key[] = [];
    const retainedKeys: Key[] = [];
    Object.keys(_k2n).forEach(k => {
        const { label, pos } = _k2n[k];

        if (isSearched(label, searchedValue)) {
            searchedKeys.push(k);
            const posArr = pos!.split('-');
            posArr.forEach((n: string, i: number) => {
                if (i > 0) {
                    const p = posArr.slice(0, i + 1).join('-');
                    const kk = _p2n[p].key as Key;
                    if (retainedKeys.indexOf(kk) === -1) {
                        retainedKeys.push(kk);
                    }
                }
            });
        }
    });

    return { searchedKeys, retainedKeys };
};

/**
 * TreeSelect
 */
class TreeSelect extends Component<TreeSelectProps, TreeSelectState> {
    static propTypes = {
        prefix: PropTypes.string,
        pure: PropTypes.bool,
        locale: PropTypes.object,
        className: PropTypes.string,
        children: PropTypes.node,
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        placeholder: PropTypes.string,
        disabled: PropTypes.bool,
        hasArrow: PropTypes.bool,
        hasBorder: PropTypes.bool,
        hasClear: PropTypes.bool,
        label: PropTypes.node,
        readOnly: PropTypes.bool,
        autoWidth: PropTypes.bool,
        dataSource: PropTypes.arrayOf(PropTypes.object),
        preserveNonExistentValue: PropTypes.bool,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object,
            PropTypes.arrayOf(PropTypes.any),
        ]),
        defaultValue: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object,
            PropTypes.arrayOf(PropTypes.any),
        ]),
        onChange: PropTypes.func,
        tagInline: PropTypes.bool,
        maxTagPlaceholder: PropTypes.func,
        autoClearSearch: PropTypes.bool,
        showSearch: PropTypes.bool,
        filterLocal: PropTypes.bool,
        onSearch: PropTypes.func,
        onSearchClear: PropTypes.func,
        notFoundContent: PropTypes.node,
        multiple: PropTypes.bool,
        treeCheckable: PropTypes.bool,
        treeCheckStrictly: PropTypes.bool,
        treeCheckedStrategy: PropTypes.oneOf(['all', 'parent', 'child']),
        treeDefaultExpandAll: PropTypes.bool,
        treeDefaultExpandedKeys: PropTypes.arrayOf(PropTypes.string),
        treeLoadData: PropTypes.func,
        treeProps: PropTypes.object,
        defaultVisible: PropTypes.bool,
        visible: PropTypes.bool,
        onVisibleChange: PropTypes.func,
        popupStyle: PropTypes.object,
        popupClassName: PropTypes.string,
        popupContainer: PropTypes.any,
        popupProps: PropTypes.object,
        followTrigger: PropTypes.bool,
        isPreview: PropTypes.bool,
        renderPreview: PropTypes.func,
        useVirtual: PropTypes.bool,
        immutable: PropTypes.bool,
        clickToCheck: PropTypes.bool,
        valueRender: PropTypes.func,
        useDetailValue: PropTypes.bool,
    };

    static defaultProps = {
        prefix: 'next-',
        pure: false,
        locale: zhCN.TreeSelect,
        size: 'medium',
        disabled: false,
        hasArrow: true,
        hasBorder: true,
        hasClear: false,
        autoWidth: true,
        defaultValue: null,
        onChange: noop,
        tagInline: false,
        autoClearSearch: true,
        showSearch: false,
        filterLocal: true,
        onSearch: noop,
        onSearchClear: noop,
        notFoundContent: 'Not Found',
        multiple: false,
        treeCheckable: false,
        treeCheckStrictly: false,
        treeCheckedStrategy: 'parent',
        treeDefaultExpandAll: false,
        treeDefaultExpandedKeys: [],
        treeProps: {},
        defaultVisible: false,
        onVisibleChange: noop,
        useVirtual: false,
        /**
         * TODO
         * 目前 select/cascade select 是默认支持的，在 2.x 版本中 tree-select 也将默认支持
         */
        preserveNonExistentValue: false,
        clickToCheck: false,
    };

    static displayName = 'TreeSelect';

    tree: InstanceType<typeof Tree>;
    select: InstanceType<typeof Select>;

    constructor(props: TreeSelectProps, context?: unknown) {
        super(props, context);

        const { defaultVisible, visible, defaultValue, value } = props;

        this.state = {
            visible: typeof visible === 'undefined' ? defaultVisible : visible,
            value: normalizeToArray(
                typeof value === 'undefined' ? defaultValue : value
            ) as TreeSelectState['value'],
            searchedValue: '',
            expandedKeys: [],
            searchedKeys: [],
            retainedKeys: [],
            autoExpandParent: false,
            // map of value => item, includes value not exist in dataSource
            mapValueDS: {},
            ...flatDataSource(props),
        };

        // init value/mapValueDS when defaultValue is not undefined
        if (this.state.value !== undefined) {
            // @ts-expect-error Since `this.state` cannot be reassigned, use `@ts-expect-error` temporarily
            this.state.mapValueDS = getValueDataSource(
                this.state.value,
                this.state.mapValueDS
            ).mapValueDS;
            // @ts-expect-error Since `this.state` cannot be reassigned, use `@ts-expect-error` temporarily
            this.state.value = this.state.value.map(v => {
                return valueToSelectKey(v);
            });
        }

        bindCtx(this, [
            'handleSelect',
            'handleCheck',
            'handleSearch',
            'handleSearchClear',
            'handleVisibleChange',
            'handleChange',
            'handleRemove',
            'handleExpand',
            'handleKeyDown',
            'saveTreeRef',
            'saveSelectRef',
            'renderMaxTagPlaceholder',
        ]);
    }

    static getDerivedStateFromProps(props: TreeSelectProps, state: TreeSelectState) {
        const st = {} as Partial<TreeSelectState>;

        if ('value' in props) {
            const valueArray = normalizeToArray(props.value);
            // convert value to string[]
            st.value = valueArray.map(v => {
                return valueToSelectKey(v);
            });
            // re-calculate map
            st.mapValueDS = getValueDataSource(props.value, state.mapValueDS).mapValueDS;
        }
        if ('visible' in props) {
            st.visible = props.visible;
        }

        const { _k2n, _p2n, _v2n } = flatDataSource(props);

        if (props.showSearch && state.searchedValue) {
            const { searchedKeys, retainedKeys } = getSearchKeys(state.searchedValue, _k2n, _p2n);
            st.searchedKeys = searchedKeys;
            st.retainedKeys = retainedKeys;
        }

        return {
            ...st,
            _k2n,
            _p2n,
            _v2n,
        };
    }

    getKeysByValue(value: TreeSelectState['value']) {
        return value.reduce((ret, v) => {
            const k = this.state._v2n[v as string] && this.state._v2n[v as string].key;
            if (k) {
                ret.push(k);
            }
            return ret;
        }, [] as string[]);
    }

    getValueByKeys(keys: Key[]) {
        return keys.map(k => this.state._k2n[k].value);
    }

    getFullItemPath(item: TreeSelectState['_k2n'][Key]) {
        if (!item) {
            return [];
        }
        const pos = item.pos;
        if (typeof pos === 'string' && POS_REGEXP.test(pos)) {
            const { _p2n } = this.state;
            const posArr = pos.split('-');
            const fullPosArr = posArr.map((_, i) => posArr.slice(0, i + 1).join('-')).slice(1);
            const itemArr = fullPosArr.map(pos => _p2n[pos]);
            return itemArr;
        }
        return [item];
    }

    getValueForSelect(value: TreeSelectState['value']) {
        const { treeCheckedStrategy } = this.props;
        const nonExistentValueKeys = this.getNonExistentValueKeys();

        let keys = this.getKeysByValue(value);

        keys = getAllCheckedKeys(keys, this.state._k2n, this.state._p2n);

        switch (treeCheckedStrategy) {
            case 'parent':
                keys = filterChildKey(keys, this.state._k2n, this.state._p2n);
                break;
            case 'child':
                keys = filterParentKey(keys, this.state._k2n, this.state._p2n);
                break;
            default:
                break;
        }

        const values = this.getValueByKeys(keys);

        return [...values, ...nonExistentValueKeys];
    }

    getData(value: TreeSelectState['value'], forSelect?: boolean) {
        const { preserveNonExistentValue } = this.props;
        const { mapValueDS } = this.state;

        const ret = (value as DataSourceItem[]).reduce((ret: ObjectItem[], v: Key) => {
            const k = this.state._v2n[v] && this.state._v2n[v].key;
            if (k) {
                const { label, pos, disabled, checkboxDisabled, children, ...rests } =
                    this.state._k2n[k];
                const d = {
                    ...rests,
                    value: v,
                    label,
                    pos,
                } as ObjectItem;
                if (forSelect) {
                    d.disabled = disabled || checkboxDisabled;
                } else {
                    d.key = k;
                }
                ret.push(d);
            } else if (preserveNonExistentValue) {
                // 需要保留 dataSource 中不存在的 value
                const item = mapValueDS[v];
                if (item) {
                    ret.push(item);
                }
            }
            return ret;
        }, []);

        return ret;
    }

    getNonExistentValues() {
        const { preserveNonExistentValue } = this.props;
        const { value } = this.state;

        if (!preserveNonExistentValue) {
            return [];
        }
        const nonExistentValues = value.filter((v: Key) => !this.state._v2n[v]);
        return nonExistentValues;
    }

    getNonExistentValueKeys() {
        const nonExistentValues = this.getNonExistentValues();
        return nonExistentValues.map(v => {
            if (typeof v === 'object' && v!.hasOwnProperty('value')) {
                // @ts-expect-error v must not be object
                return v!.value;
            }
            return v;
        });
    }

    saveTreeRef(ref: InstanceType<typeof Tree>) {
        this.tree = ref;
    }

    saveSelectRef(ref: InstanceType<typeof Select>) {
        this.select = ref;
    }

    handleVisibleChange(visible: boolean, type?: string) {
        if (!('visible' in this.props)) {
            this.setState({
                visible,
            });
        }

        if (['fromTree', 'keyboard'].indexOf(type!) !== -1 && !visible) {
            this.select.focusInput();
        }

        this.props.onVisibleChange!(visible, type!);
    }

    triggerOnChange(
        value: ObjectItem[] | DataSourceItem[] | ObjectItem['value'] | null,
        data: ObjectItem[] | ObjectItem | null
    ) {
        const { useDetailValue, onChange } = this.props;
        onChange!(useDetailValue ? data : value, data);
    }

    handleSelect(selectedKeys: Key[], extra: { selected: boolean }) {
        const { multiple, autoClearSearch } = this.props;
        const { selected } = extra;

        if (multiple || selected) {
            const selectedValue = this.getValueByKeys(selectedKeys);
            const nonExistentValues = this.getNonExistentValues();
            const value = [...nonExistentValues, ...selectedValue];

            if (!('value' in this.props)) {
                this.setState({
                    value,
                });
            }
            if (!multiple) {
                this.handleVisibleChange(false, 'fromTree');
            }

            const data = this.getData(value);
            const selectedData = this.getData(selectedValue);
            // 单选情况下，不返回 nonExistentValue，直接返回当前选择值，避免无法改选的问题
            multiple
                ? this.triggerOnChange(value, data)
                : this.triggerOnChange(selectedValue[0], selectedData[0]);

            // clear search value manually
            if (autoClearSearch) {
                this.select.handleSearchClear('select');
            }
        } else {
            this.handleVisibleChange(false, 'fromTree');
        }
    }

    handleCheck(checkedKeys: Key[]) {
        const { autoClearSearch } = this.props;

        let value = this.getValueByKeys(checkedKeys);
        const nonExistentValues = this.getNonExistentValues();
        value = [...nonExistentValues, ...value];

        if (!('value' in this.props)) {
            this.setState({
                value,
            });
        }

        this.triggerOnChange(value, this.getData(value));

        // clear search value manually
        if (autoClearSearch) {
            this.select.handleSearchClear('select');
        }
    }

    handleRemove(removedItem: ObjectItem) {
        const { value: removedValue } = removedItem;
        const { treeCheckable, treeCheckStrictly, treeCheckedStrategy } = this.props;

        let value;
        if (
            // there's linkage relationship among nodes
            treeCheckable &&
            !treeCheckStrictly &&
            ['parent', 'all'].indexOf(treeCheckedStrategy!) !== -1 &&
            // value exits in datasource
            this.state._v2n[removedValue as string]
        ) {
            const removedPos = this.state._v2n[removedValue as string].pos;
            value = this.state.value.filter((v: string) => {
                const p = this.state._v2n[v].pos;
                return !isDescendantOrSelf(removedPos!, p!);
            });

            const nums = removedPos!.split('-');
            for (let i = nums.length; i > 2; i--) {
                const parentPos = nums.slice(0, i - 1).join('-');
                const parentValue = this.state._p2n[parentPos].value;
                const parentIndex = value.indexOf(parentValue);
                if (parentIndex > -1) {
                    value.splice(parentIndex, 1);
                } else {
                    break;
                }
            }
        } else {
            value = this.state.value.filter(v => v !== removedValue);
        }

        if (!('value' in this.props)) {
            this.setState({
                value,
            });
        }

        const data = this.getData(value);
        this.triggerOnChange(value, data);
    }

    handleSearch(searchedValue: string) {
        const { _k2n, _p2n } = this.state;
        const { searchedKeys, retainedKeys } = getSearchKeys(searchedValue, _k2n, _p2n);

        this.setState({
            searchedValue,
            expandedKeys: searchedKeys,
            searchedKeys,
            retainedKeys,
            autoExpandParent: true,
        });

        this.props.onSearch!(searchedValue);
    }

    handleSearchClear(triggerType: string) {
        this.setState({
            searchedValue: '',
            expandedKeys: [],
        });
        this.props.onSearchClear!(triggerType);
    }

    handleExpand(expandedKeys: Key[]) {
        this.setState({
            expandedKeys,
            autoExpandParent: false,
        });
    }

    handleKeyDown(e: React.KeyboardEvent<HTMLElement>) {
        const { onKeyDown } = this.props;
        const { visible } = this.state;

        if (onKeyDown) {
            onKeyDown(e);
        }

        if (!visible) {
            return;
        }

        switch (e.keyCode) {
            case KEYCODE.UP:
            case KEYCODE.DOWN:
                this.tree.setFocusKey();
                e.preventDefault();
                break;
            default:
                break;
        }
    }

    handleChange(value: DataSourceItem[] | DataSourceItem, triggerType: string) {
        if (this.props.hasClear && triggerType === 'clear') {
            if (!('value' in this.props)) {
                this.setState({
                    value: [],
                });
            }

            this.triggerOnChange(null, null);
        }
    }

    searchNodes(children: ReactNode) {
        const { searchedKeys, retainedKeys } = this.state;

        const loop = (children: ReactNode) => {
            const retainedNodes: NodeElement[] = [];
            Children.forEach(children, (child: NodeElement) => {
                if (searchedKeys.indexOf(child.key!) > -1) {
                    retainedNodes.push(child);
                } else if (retainedKeys.indexOf(child.key!) > -1) {
                    const retainedNode = child.props.children
                        ? cloneElement(child, {}, loop(child.props.children))
                        : child;
                    retainedNodes.push(retainedNode);
                } else {
                    const hideNode = cloneElement(child, {
                        style: { display: 'none' },
                    });
                    retainedNodes.push(hideNode);
                }
            });
            return retainedNodes;
        };

        return loop(children);
    }

    createNodesByData(data: TreeSelectProps['dataSource'], searching?: boolean) {
        const { searchedKeys, retainedKeys } = this.state;

        const loop = (
            data: TreeSelectProps['dataSource'],
            isParentMatched?: boolean,
            prefix = '0'
        ) => {
            const retainedNodes: NodeElement[] = [];

            data!.forEach((item, index) => {
                const { children, ...others } = item as TreeSelectDataItem;
                const pos = `${prefix}-${index}`;
                const key = this.state._p2n[pos].key;
                const addNode = (isParentMatched?: boolean, hide?: boolean) => {
                    if (hide) {
                        others.style = { display: 'none' };
                    }

                    retainedNodes.push(
                        <TreeNode {...others} key={key}>
                            {children && children.length
                                ? loop(children, isParentMatched, pos)
                                : null}
                        </TreeNode>
                    );
                };

                if (searching) {
                    if (searchedKeys.indexOf(key!) > -1 || isParentMatched) {
                        addNode(true);
                    } else if (retainedKeys.indexOf(key!) > -1) {
                        addNode(false);
                    } else {
                        addNode(false, true);
                    }
                } else {
                    addNode();
                }
            });

            return retainedNodes;
        };

        return loop(data, false);
    }

    /*eslint-disable max-statements*/
    renderPopupContent() {
        const prefix = this.props.prefix;
        const treeSelectPrefix = `${prefix}tree-select-`;

        if (!this.state.visible) {
            return <div className={`${treeSelectPrefix}dropdown`} />;
        }

        const {
            multiple,
            treeCheckable,
            treeCheckStrictly,
            treeCheckedStrategy,
            treeDefaultExpandAll,
            treeDefaultExpandedKeys,
            treeLoadData,
            treeProps: customTreeProps = {},
            showSearch,
            filterLocal,
            dataSource,
            children,
            readOnly,
            notFoundContent,
            useVirtual,
            clickToCheck,
        } = this.props;

        const { value, searchedValue, expandedKeys, autoExpandParent, searchedKeys } = this.state;

        const treeProps = {
            multiple,
            ref: this.saveTreeRef,
            loadData: treeLoadData,
            defaultExpandAll: treeDefaultExpandAll,
            defaultExpandedKeys: treeDefaultExpandedKeys,
            useVirtual,
            isNodeBlock: true,
            clickToCheck,
        } as TreeProps;

        // 使用虚拟滚动 设置默认高度
        if (useVirtual) {
            customTreeProps.style = {
                maxHeight: '260px',
                overflow: 'auto',
                boxSizing: 'border-box',
                ...customTreeProps.style,
            };
        }

        const keys = this.getKeysByValue(value);
        if (treeCheckable) {
            treeProps.checkable = treeCheckable;
            treeProps.checkStrictly = treeCheckStrictly;
            treeProps.checkedStrategy = treeCheckStrictly ? 'all' : treeCheckedStrategy;
            treeProps.checkedKeys = keys;
            treeProps.selectable = !clickToCheck;
            if (!readOnly) {
                treeProps.onCheck = this.handleCheck;
            }
        } else {
            treeProps.selectedKeys = keys;
            if (!readOnly) {
                treeProps.onSelect = this.handleSelect as TreeProps['onSelect'];
            }
        }

        let notFound = false;
        let newChildren;
        if (filterLocal && showSearch && searchedValue) {
            treeProps.expandedKeys = expandedKeys;
            treeProps.autoExpandParent = autoExpandParent;
            treeProps.onExpand = this.handleExpand;
            treeProps.filterTreeNode = (node: NodeInstance) => {
                return searchedKeys.indexOf(node.props.eventKey!) > -1;
            };

            if (searchedKeys.length) {
                newChildren = dataSource
                    ? this.createNodesByData(dataSource, true)
                    : this.searchNodes(children);
            } else {
                notFound = true;
            }
        } else {
            // eslint-disable-next-line
            if (dataSource) {
                if (dataSource.length) {
                    newChildren = this.createNodesByData(dataSource);
                } else {
                    notFound = true;
                }
            } else {
                // eslint-disable-next-line
                if (Children.count(children)) {
                    newChildren = children;
                } else {
                    notFound = true;
                }
            }
        }
        const contentClass = `${treeSelectPrefix}dropdown-content`;

        return (
            <div className={`${treeSelectPrefix}dropdown`}>
                {notFound ? (
                    <div className={`${treeSelectPrefix}not-found contentClass`}>
                        {notFoundContent}
                    </div>
                ) : (
                    <Tree {...treeProps} {...customTreeProps} className={contentClass}>
                        {newChildren}
                    </Tree>
                )}
            </div>
        );
    }

    renderPreview(
        data: ObjectItem[] | ObjectItem,
        others: Omit<typeof this.props, keyof typeof TreeSelect.propTypes>
    ) {
        const { prefix, className, renderPreview } = this.props;

        const previewCls = classNames(className, `${prefix}form-preview`);
        const items = data && !Array.isArray(data) ? [data] : data;

        if (typeof renderPreview === 'function') {
            return (
                <div {...others} className={previewCls}>
                    {renderPreview(items, this.props)}
                </div>
            );
        }

        return (
            <p {...others} className={previewCls}>
                {items && items.map(({ label }) => label).join(', ')}
            </p>
        );
    }

    /**
     * TreeSelect 无法直接使用 Select 的 maxTagPlaceholder 逻辑
     * Select 的 totalValue 是所有 leaf 节点，TreeSelect 的 totalValue 受 treeCheckedStrategy 和 treeCheckStrictly 影响
     *
     * treeCheckStrictly = true: totalValue 为所有节点
     *
     * treeCheckStrictly = false: 根据 treeCheckedStrategy 判断
     *   treeCheckedStrategy = 'all': totalValue 为所有节点
     *   treeCheckedStrategy = 'parent': totalValue 无意义，不返回
     *   treeCheckedStrategy = 'child': totalValue 为所有 leaf 节点
     */
    renderMaxTagPlaceholder(value: ObjectItem[], totalValue: ObjectItem[]) {
        // 这里的 totalValue 为所有 leaf 节点
        const { treeCheckStrictly, maxTagPlaceholder, treeCheckedStrategy, locale } = this.props;
        const { _v2n } = this.state;

        let treeSelectTotalValue: ObjectItem[] | undefined = totalValue; // all the leaf nodes

        // calculate total value
        if (treeCheckStrictly) {
            // all the nodes
            treeSelectTotalValue = obj.values(_v2n);
        } else if (treeCheckedStrategy === 'all') {
            // all
            treeSelectTotalValue = obj.values(_v2n);
        } else if (treeCheckedStrategy === 'parent') {
            // totalValue is pointless when treeCheckedStrategy = 'parent'
            treeSelectTotalValue = undefined;
        }

        // custom render function
        if (maxTagPlaceholder) {
            return maxTagPlaceholder(value, treeSelectTotalValue);
        }

        // default render function
        if (treeCheckedStrategy === 'parent') {
            // don't show totalValue when treeCheckedStrategy = 'parent'
            return `${str.template(locale!.shortMaxTagPlaceholder, {
                selected: value.length,
            })}`;
        }
        return `${str.template(locale!.maxTagPlaceholder, {
            selected: value.length,
            total: treeSelectTotalValue!.length,
        })}`;
    }

    render() {
        const {
            prefix,
            size,
            placeholder,
            disabled,
            hasArrow,
            hasBorder,
            hasClear,
            label,
            readOnly,
            autoWidth,
            popupStyle,
            popupClassName,
            showSearch,
            multiple,
            treeCheckable,
            treeCheckStrictly,
            className,
            popupContainer,
            popupProps,
            followTrigger,
            isPreview,
            dataSource,
            tagInline,
            valueRender,
        } = this.props;
        const others = obj.pickOthers(Object.keys(TreeSelect.propTypes), this.props);
        const { value, visible } = this.state;

        const valueRenderProps =
            typeof valueRender === 'function'
                ? {
                      valueRender: (item: TreeSelectState['_k2n'][Key]) => {
                          return valueRender(item, this.getFullItemPath(item));
                      },
                  }
                : undefined;

        // if (non-leaf 节点可选 & 父子节点选中状态需要联动)，需要额外计算父子节点间的联动关系
        const valueForSelect =
            treeCheckable && !treeCheckStrictly ? this.getValueForSelect(value) : value;

        let data: ObjectItem[] | ObjectItem = this.getData(valueForSelect, true);
        if (!multiple && !treeCheckable) {
            data = data[0];
        }

        if (isPreview) {
            return this.renderPreview(data, others);
        }

        return (
            <Select
                prefix={prefix}
                className={className}
                size={size}
                hasBorder={hasBorder}
                hasArrow={hasArrow}
                hasClear={hasClear}
                placeholder={placeholder}
                disabled={disabled}
                autoWidth={autoWidth}
                label={label}
                readOnly={readOnly}
                ref={this.saveSelectRef}
                dataSource={dataSource}
                value={data}
                onChange={this.handleChange}
                visible={visible}
                onVisibleChange={this.handleVisibleChange}
                showSearch={showSearch}
                onSearch={this.handleSearch}
                onSearchClear={this.handleSearchClear}
                popupContainer={popupContainer}
                popupStyle={popupStyle}
                popupClassName={popupClassName}
                popupProps={popupProps}
                followTrigger={followTrigger}
                tagInline={tagInline}
                maxTagPlaceholder={this.renderMaxTagPlaceholder}
                {...valueRenderProps}
                {...others}
                onRemove={this.handleRemove}
                onKeyDown={this.handleKeyDown}
                popupContent={this.renderPopupContent()}
                mode={treeCheckable || multiple ? 'multiple' : 'single'}
            />
        );
    }
}

export default polyfill(TreeSelect);
