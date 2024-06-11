import React, {
    Component,
    type KeyboardEvent,
    type DetailedHTMLProps,
    type HTMLAttributes,
} from 'react';
import PropTypes from 'prop-types';
import Select from '../select';
import Cascader, { type CascaderDataItem, type Extra } from '../cascader';
import { type ClassPropsWithDefault } from '../util';
import type {
    CascaderSelectDataItem,
    CascaderSelectProps,
    CascaderSelectState,
    CascaderSelectVisibleChangeType,
} from './types';
import type { Popup } from '../overlay';
export type CascaderSelectPropsWithDefault = ClassPropsWithDefault<
    CascaderSelectProps,
    typeof CascaderSelect.defaultProps
>;
/**
 * CascaderSelect
 */
declare class CascaderSelect extends Component<CascaderSelectProps, CascaderSelectState> {
    static displayName: string;
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        pure: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<string>;
        placeholder: PropTypes.Requireable<string>;
        disabled: PropTypes.Requireable<boolean>;
        hasArrow: PropTypes.Requireable<boolean>;
        hasBorder: PropTypes.Requireable<boolean>;
        hasClear: PropTypes.Requireable<boolean>;
        label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        readOnly: PropTypes.Requireable<boolean>;
        dataSource: PropTypes.Requireable<(object | null | undefined)[]>;
        defaultValue: PropTypes.Requireable<
            NonNullable<string | (string | null | undefined)[] | null | undefined>
        >;
        value: PropTypes.Requireable<
            NonNullable<string | (string | null | undefined)[] | null | undefined>
        >;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        defaultExpandedValue: PropTypes.Requireable<(string | null | undefined)[]>;
        expandedValue: PropTypes.Requireable<(string | null | undefined)[]>;
        expandTriggerType: PropTypes.Requireable<string>;
        onExpand: PropTypes.Requireable<(...args: any[]) => any>;
        useVirtual: PropTypes.Requireable<boolean>;
        multiple: PropTypes.Requireable<boolean>;
        changeOnSelect: PropTypes.Requireable<boolean>;
        canOnlyCheckLeaf: PropTypes.Requireable<boolean>;
        checkStrictly: PropTypes.Requireable<boolean>;
        listStyle: PropTypes.Requireable<object>;
        listClassName: PropTypes.Requireable<string>;
        displayRender: PropTypes.Requireable<(...args: any[]) => any>;
        itemRender: PropTypes.Requireable<(...args: any[]) => any>;
        showSearch: PropTypes.Requireable<boolean>;
        filter: PropTypes.Requireable<(...args: any[]) => any>;
        onSearch: PropTypes.Requireable<(...args: any[]) => any>;
        resultRender: PropTypes.Requireable<(...args: any[]) => any>;
        resultAutoWidth: PropTypes.Requireable<boolean>;
        notFoundContent: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        locale: PropTypes.Requireable<object>;
        loadData: PropTypes.Requireable<(...args: any[]) => any>;
        header: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        footer: PropTypes.Requireable<PropTypes.ReactNodeLike>;
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
        immutable: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        prefix: string;
        pure: boolean;
        size: string;
        disabled: boolean;
        hasArrow: boolean;
        hasBorder: boolean;
        hasClear: boolean;
        dataSource: never[];
        defaultValue: null;
        expandTriggerType: string;
        onExpand: () => void;
        useVirtual: boolean;
        multiple: boolean;
        changeOnSelect: boolean;
        canOnlyCheckLeaf: boolean;
        checkStrictly: boolean;
        showSearch: boolean;
        filter: (
            searchValue: string,
            path: Array<{
                label: string;
                value: string;
            }>
        ) => boolean;
        resultRender: (
            searchValue: string,
            path: Array<{
                label: string;
                value: string;
            }>
        ) => React.JSX.Element;
        resultAutoWidth: boolean;
        defaultVisible: boolean;
        onVisibleChange: () => void;
        popupProps: {};
        immutable: boolean;
        locale: Partial<{
            selectPlaceholder: string;
            autoCompletePlaceholder: string;
            notFoundContent: string;
            maxTagPlaceholder: string;
            selectAll: string;
            selectPlaceHolder?: string | undefined;
            autoCompletePlaceHolder?: string | undefined;
        }> & {
            momentLocale?: string | undefined;
        };
    };
    readonly props: CascaderSelectPropsWithDefault;
    _valueDataCache: Record<string, CascaderSelectDataItem>;
    _v2n: Record<string, CascaderSelectDataItem>;
    _p2n: Record<string, CascaderSelectDataItem>;
    select: InstanceType<typeof Select>;
    cascader: InstanceType<typeof Cascader>;
    popup: InstanceType<typeof Popup>;
    cascaderHeight: string | number;
    constructor(props: CascaderSelectProps);
    static getDerivedStateFromProps(
        props: CascaderSelectPropsWithDefault
    ): Partial<CascaderSelectState>;
    /**
     * 使组件获得焦点
     * @public
     */
    focus(): void;
    updateCache(dataSource: CascaderDataItem[]): void;
    flatValue(value: string[]): string[];
    isDescendantOrSelf(
        currentPos: string | undefined | null,
        targetPos: string | undefined | null
    ): boolean;
    getValue(pos: string): string | null;
    getPos(value: string): string | null;
    getData(value: string[]): CascaderSelectDataItem[];
    getLabelPath(data: CascaderSelectDataItem): React.ReactNode[];
    getSingleData(value: string | string[]): CascaderSelectDataItem | null;
    getMultipleData(value: string[]): CascaderSelectDataItem[] | null;
    getIndeterminate(value: string[]): string[];
    saveSelectRef(ref: InstanceType<typeof Select>): void;
    saveCascaderRef(ref: InstanceType<typeof Cascader>): void;
    completeValue(value: string[]): string[];
    isLeaf(data: CascaderSelectDataItem): boolean;
    handleVisibleChange(visible: boolean, type?: CascaderSelectVisibleChangeType): void;
    handleKeyDown(e: KeyboardEvent<HTMLElement>): void;
    getPopup(ref: InstanceType<typeof Popup>): void;
    handleAfterOpen(): void;
    handleSelect(value: unknown, data: CascaderSelectDataItem): void;
    /**
     * 刷新值数据缓存，删除无效值
     * @param curValue - 当前值
     */
    refreshValueDataCache: (curValue: string | string[]) => void;
    handleChange(value: string[], data: CascaderSelectDataItem[], extra: Extra): void;
    handleClear(): void;
    handleRemove(currentData: CascaderSelectDataItem): void;
    handleSearch(searchValue: string): void;
    getPath(pos: string): CascaderSelectDataItem[];
    filterItems(): CascaderSelectDataItem[][];
    renderNotFound(): React.JSX.Element;
    renderCascader(): React.JSX.Element;
    renderPopupContent(): React.JSX.Element;
    renderPreview(
        others: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
    ): React.JSX.Element;
    render(): React.JSX.Element;
}
declare const _default: typeof CascaderSelect;
export default _default;
