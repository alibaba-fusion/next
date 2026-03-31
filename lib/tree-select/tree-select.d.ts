import React, { type ReactNode, Component } from 'react';
import PropTypes from 'prop-types';
import Select, { type DataSourceItem, type ObjectItem } from '../select';
import Tree from '../tree';
import type { Key, TreeSelectProps, TreeSelectState, KeyEntities, DataNode } from './types';
import type { NodeElement } from '../tree/types';
/**
 * TreeSelect
 */
declare class TreeSelect extends Component<TreeSelectProps, TreeSelectState> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        pure: PropTypes.Requireable<boolean>;
        locale: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        size: PropTypes.Requireable<string>;
        placeholder: PropTypes.Requireable<string>;
        disabled: PropTypes.Requireable<boolean>;
        hasArrow: PropTypes.Requireable<boolean>;
        hasBorder: PropTypes.Requireable<boolean>;
        hasClear: PropTypes.Requireable<boolean>;
        label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        readOnly: PropTypes.Requireable<boolean>;
        autoWidth: PropTypes.Requireable<boolean>;
        dataSource: PropTypes.Requireable<(object | null | undefined)[]>;
        preserveNonExistentValue: PropTypes.Requireable<boolean>;
        value: PropTypes.Requireable<NonNullable<string | object | null | undefined>>;
        defaultValue: PropTypes.Requireable<NonNullable<string | object | null | undefined>>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        tagInline: PropTypes.Requireable<boolean>;
        maxTagPlaceholder: PropTypes.Requireable<(...args: any[]) => any>;
        autoClearSearch: PropTypes.Requireable<boolean>;
        showSearch: PropTypes.Requireable<boolean>;
        filterLocal: PropTypes.Requireable<boolean>;
        onSearch: PropTypes.Requireable<(...args: any[]) => any>;
        onSearchClear: PropTypes.Requireable<(...args: any[]) => any>;
        notFoundContent: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        multiple: PropTypes.Requireable<boolean>;
        treeCheckable: PropTypes.Requireable<boolean>;
        treeCheckStrictly: PropTypes.Requireable<boolean>;
        treeCheckedStrategy: PropTypes.Requireable<string>;
        treeDefaultExpandAll: PropTypes.Requireable<boolean>;
        treeDefaultExpandedKeys: PropTypes.Requireable<(string | null | undefined)[]>;
        treeLoadData: PropTypes.Requireable<(...args: any[]) => any>;
        treeProps: PropTypes.Requireable<object>;
        defaultVisible: PropTypes.Requireable<boolean>;
        visible: PropTypes.Requireable<boolean>;
        onVisibleChange: PropTypes.Requireable<(...args: any[]) => any>;
        popupStyle: PropTypes.Requireable<object>;
        popupClassName: PropTypes.Requireable<string>;
        popupContainer: PropTypes.Requireable<any>;
        popupProps: PropTypes.Requireable<object>;
        followTrigger: PropTypes.Requireable<boolean>;
        isPreview: PropTypes.Requireable<boolean>;
        renderPreview: PropTypes.Requireable<(...args: any[]) => any>;
        useVirtual: PropTypes.Requireable<boolean>;
        immutable: PropTypes.Requireable<boolean>;
        clickToCheck: PropTypes.Requireable<boolean>;
        valueRender: PropTypes.Requireable<(...args: any[]) => any>;
        useDetailValue: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        prefix: string;
        pure: boolean;
        locale: Partial<{
            maxTagPlaceholder: string;
            shortMaxTagPlaceholder: string;
        }> & {
            momentLocale?: string | undefined;
        };
        size: string;
        disabled: boolean;
        hasArrow: boolean;
        hasBorder: boolean;
        hasClear: boolean;
        autoWidth: boolean;
        defaultValue: null;
        onChange: () => void;
        tagInline: boolean;
        autoClearSearch: boolean;
        showSearch: boolean;
        filterLocal: boolean;
        onSearch: () => void;
        onSearchClear: () => void;
        notFoundContent: string;
        multiple: boolean;
        treeCheckable: boolean;
        treeCheckStrictly: boolean;
        treeCheckedStrategy: string;
        treeDefaultExpandAll: boolean;
        treeDefaultExpandedKeys: never[];
        treeProps: {};
        defaultVisible: boolean;
        onVisibleChange: () => void;
        useVirtual: boolean;
        /**
         * TODO
         * 目前 select/cascade select 是默认支持的，在 2.x 版本中 tree-select 也将默认支持
         */
        preserveNonExistentValue: boolean;
        clickToCheck: boolean;
    };
    static displayName: string;
    tree: InstanceType<typeof Tree>;
    select: InstanceType<typeof Select>;
    constructor(props: TreeSelectProps, context?: unknown);
    static getDerivedStateFromProps(props: TreeSelectProps, state: TreeSelectState): {
        _k2n: KeyEntities;
        _p2n: KeyEntities;
        _v2n: KeyEntities;
        visible?: boolean | undefined;
        value?: (string | number | boolean | null | undefined)[] | undefined;
        searchedValue?: string | undefined;
        expandedKeys?: string[] | undefined;
        searchedKeys?: string[] | undefined;
        retainedKeys?: string[] | undefined;
        autoExpandParent?: boolean | undefined;
        mapValueDS?: Record<string, ObjectItem> | undefined;
    };
    getKeysByValue(value: TreeSelectState['value']): string[];
    getValueByKeys(keys: Key[]): (string | number | boolean | null | undefined)[];
    getFullItemPath(item: TreeSelectState['_k2n'][Key]): DataNode[];
    getValueForSelect(value: TreeSelectState['value']): any[];
    getData(value: TreeSelectState['value'], forSelect?: boolean): ObjectItem[];
    getNonExistentValues(): (string | number | boolean | null | undefined)[];
    getNonExistentValueKeys(): any[];
    saveTreeRef(ref: InstanceType<typeof Tree>): void;
    saveSelectRef(ref: InstanceType<typeof Select>): void;
    handleVisibleChange(visible: boolean, type?: string): void;
    triggerOnChange(value: ObjectItem[] | DataSourceItem[] | ObjectItem['value'] | null, data: ObjectItem[] | ObjectItem | null): void;
    handleSelect(selectedKeys: Key[], extra: {
        selected: boolean;
    }): void;
    handleCheck(checkedKeys: Key[]): void;
    handleRemove(removedItem: ObjectItem): void;
    handleSearch(searchedValue: string): void;
    handleSearchClear(triggerType: string): void;
    handleExpand(expandedKeys: Key[]): void;
    handleKeyDown(e: React.KeyboardEvent<HTMLElement>): void;
    handleChange(value: DataSourceItem[] | DataSourceItem, triggerType: string): void;
    searchNodes(children: ReactNode): NodeElement[];
    createNodesByData(data: TreeSelectProps['dataSource'], searching?: boolean): NodeElement[];
    renderPopupContent(): React.JSX.Element;
    renderPreview(data: ObjectItem[] | ObjectItem, others: Omit<typeof this.props, keyof typeof TreeSelect.propTypes>): React.JSX.Element;
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
    renderMaxTagPlaceholder(value: ObjectItem[], totalValue: ObjectItem[]): React.ReactNode;
    render(): React.JSX.Element;
}
declare const _default: typeof TreeSelect;
export default _default;
