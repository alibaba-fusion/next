import React, { type ChangeEvent, type ReactElement, type KeyboardEvent, type UIEvent, type MouseEvent, type ReactNode } from 'react';
import PropTypes from 'prop-types';
import Base, { type BaseState } from './base';
import type { DataSourceItem, ObjectItem, SelectProps, VisibleChangeType } from './types';
/**
 * 无障碍化注意事项：
 * 1. Select 无搜索情况下，不应该让 Input 可 focus，此时外层 wrap 必须可 focus，并且需要相应 focus 事件让外边框发生变化
 *
 * TODO: hightLight 后续改造注意点
 * 1. hightLight 跟随点击变化 (fixed) 2. 弹窗打开时根据 是否高亮第一个选项的 api 开关设置是否 hightLight 第一项
 */
export interface SelectState extends BaseState {
    fixWidth?: boolean;
}
/**
 * Select
 */
declare class Select extends Base<SelectProps, SelectState> {
    static propTypes: {
        mode: PropTypes.Requireable<string>;
        value: PropTypes.Requireable<any>;
        defaultValue: PropTypes.Requireable<any>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        dataSource: PropTypes.Requireable<(NonNullable<string | number | boolean | PropTypes.InferProps<{
            value: PropTypes.Requireable<any>;
            label: PropTypes.Requireable<any>;
            disabled: PropTypes.Requireable<boolean>;
            children: PropTypes.Requireable<any[]>;
        }> | null | undefined> | null | undefined)[]>;
        hasBorder: PropTypes.Requireable<boolean>;
        hasArrow: PropTypes.Requireable<boolean>;
        showSearch: PropTypes.Requireable<boolean>;
        onSearch: PropTypes.Requireable<(...args: any[]) => any>;
        onSearchClear: PropTypes.Requireable<(...args: any[]) => any>;
        hasSelectAll: PropTypes.Requireable<NonNullable<string | boolean | null | undefined>>;
        fillProps: PropTypes.Requireable<string>;
        useDetailValue: PropTypes.Requireable<boolean>;
        cacheValue: PropTypes.Requireable<boolean>;
        valueRender: PropTypes.Requireable<(...args: any[]) => any>;
        itemRender: PropTypes.Requireable<(...args: any[]) => any>;
        notFoundContent: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        style: PropTypes.Requireable<object>;
        searchValue: PropTypes.Requireable<string>;
        tagInline: PropTypes.Requireable<boolean>;
        tagClosable: PropTypes.Requireable<boolean>;
        adjustTagSize: PropTypes.Requireable<boolean>;
        maxTagCount: PropTypes.Requireable<number>;
        maxTagPlaceholder: PropTypes.Requireable<(...args: any[]) => any>;
        hiddenSelected: PropTypes.Requireable<boolean>;
        onRemove: PropTypes.Requireable<(...args: any[]) => any>;
        onFocus: PropTypes.Requireable<(...args: any[]) => any>;
        onBlur: PropTypes.Requireable<(...args: any[]) => any>;
        onMouseEnter: PropTypes.Requireable<(...args: any[]) => any>;
        onMouseLeave: PropTypes.Requireable<(...args: any[]) => any>;
        onKeyDown: PropTypes.Requireable<(...args: any[]) => any>;
        locale: PropTypes.Requireable<object>;
        popupAutoFocus: PropTypes.Requireable<boolean>;
        showDataSourceChildren: PropTypes.Requireable<boolean>;
        autoClearSearchValue: PropTypes.Requireable<boolean>;
        prefix: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<string>;
        placeholder: PropTypes.Requireable<string>;
        autoWidth: PropTypes.Requireable<boolean>;
        label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        hasClear: PropTypes.Requireable<boolean>;
        state: PropTypes.Requireable<string>;
        readOnly: PropTypes.Requireable<boolean>;
        disabled: PropTypes.Requireable<boolean>;
        visible: PropTypes.Requireable<boolean>;
        defaultVisible: PropTypes.Requireable<boolean>;
        onVisibleChange: PropTypes.Requireable<(...args: any[]) => any>;
        popupContainer: PropTypes.Requireable<any>;
        popupClassName: PropTypes.Requireable<any>;
        popupStyle: PropTypes.Requireable<object>;
        popupProps: PropTypes.Requireable<object>;
        followTrigger: PropTypes.Requireable<boolean>;
        popupContent: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        menuProps: PropTypes.Requireable<object>;
        filterLocal: PropTypes.Requireable<boolean>;
        filter: PropTypes.Requireable<(...args: any[]) => any>;
        defaultHighlightKey: PropTypes.Requireable<string>;
        highlightKey: PropTypes.Requireable<string>;
        onToggleHighlightItem: PropTypes.Requireable<(...args: any[]) => any>;
        autoHighlightFirstItem: PropTypes.Requireable<boolean>;
        useVirtual: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<any>;
        children: PropTypes.Requireable<any>;
        rtl: PropTypes.Requireable<boolean>;
        popupComponent: PropTypes.Requireable<any>;
        isPreview: PropTypes.Requireable<boolean>;
        renderPreview: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: SelectProps;
    static displayName: string;
    selectAllYet: boolean;
    constructor(props: SelectProps);
    static getDerivedStateFromProps(nextProps: SelectProps, prevState: BaseState): {} | null;
    componentDidUpdate(prevProps: SelectProps, prevState: BaseState): void;
    componentDidMount(): void;
    ie9Hack(): void;
    useDetailValue(): boolean;
    hasSearch(): boolean;
    getTagSize(): "small" | "medium" | "large" | undefined;
    /**
     * Menu.Item onSelect
     */
    handleMenuSelect(keys: string[], item: {
        props: {
            _key: string;
        };
    }): false | void;
    handleItemClick(key: string): void;
    /**
     * 单选模式
     */
    handleSingleSelect(key: string, triggerType: VisibleChangeType): void;
    /**
     * 多选模式 multiple/tag
     */
    handleMultipleSelect(keys: DataSourceItem[] | undefined, triggerType: VisibleChangeType, key?: string | null, keepSearchValue?: boolean): void;
    updateSelectAllYet(value?: unknown): void;
    handleSearchValue(value: string): void;
    /**
     * Handle search input change event
     */
    handleSearch(value: string, e: ChangeEvent<HTMLInputElement>): void;
    handleSearchClear(triggerType?: string): void;
    handleSearchKeyDown(e: KeyboardEvent<HTMLElement>): void;
    chooseMultipleItem(key: string): void;
    chooseHighlightItem(proxy: unknown, e: UIEvent<HTMLElement>): false | undefined;
    /**
     * Handle Tag close event
     * @returns false  return false to prevent auto close
     * ----
     * It MUST be multiple mode, needn't additional judgement
     */
    handleTagClose(item: ObjectItem): boolean;
    /**
     * Handle BACKSPACE key event
     * @param e - keyDown event
     * ---
     * It MUST be multiple mode
     */
    handleDeleteTag(e: UIEvent<HTMLElement>): false | undefined;
    /**
     * Handle SelectAll span click event
     * @param e - click event
     */
    handleSelectAll(e: UIEvent<HTMLElement>): void;
    handleVisibleChange(visible: boolean, type: VisibleChangeType): void;
    afterClose(): void;
    maxTagPlaceholder(selectedValues: ObjectItem[], totalValues: ObjectItem[]): string;
    /**
     * 如果用户是自定义的弹层，则直接以 value 为准，不再校验 dataSource
     * TODO: 2.0 中 value 接受 string/object\{value,label\} 两种类型的数据，自动做识别，可以避免用户去转换，也和 date-picker 对齐
     * 此外 onChange 第一个参数根据 api 来控制类型是 [string] 还是 [object\{value,label\}]
     */
    renderValues(): ReactNode;
    /**
     * 1. fix flash while click <label/>
     * 2. fix onBlur while has clear
     * @returns
     */
    handleWrapClick: (e: MouseEvent<HTMLElement>) => void;
    handleArrowClick: (e: UIEvent<HTMLElement>) => void;
    handleClear: (e: UIEvent<HTMLElement>) => void;
    hasClear(): boolean | undefined;
    /**
     * render arrow
     */
    renderExtraNode(): React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
    /**
     * 选择器
     * @override
     */
    renderSelect(): React.JSX.Element;
    renderSearchInput(valueNodes: ReactNode, placeholder: string | undefined, inputEl: ReactElement): React.JSX.Element;
    /**
     * 渲染弹层的 header 内容
     * @override
     */
    renderMenuHeader(): React.ReactNode;
    render(): React.JSX.Element;
}
declare const _default: typeof Select;
export default _default;
