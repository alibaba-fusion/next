import type React from 'react';
import type { CascaderProps, CascaderDataItem, Extra } from '../cascader';
import type { CommonProps } from '../util';
import type { Popup } from '../overlay';
import type { SelectProps, VisibleChangeType } from '../select';

interface HTMLAttributesWeak
    extends Omit<
        React.HTMLAttributes<HTMLElement>,
        'defaultValue' | 'onChange' | 'onSelect' | 'onFocus' | 'onBlur'
    > {}

export interface CascaderSelectDataItem extends CascaderDataItem {
    pos: string;
}

export type CascaderSelectVisibleChangeType = VisibleChangeType | 'keyboard' | 'fromCascader';

export interface DeprecatedProps {
    /**
     * @deprecated use `popupContainer` instead
     */
    container?: CascaderSelectProps['popupContainer'];
    /**
     * @deprecated use `hasBorder` instead
     */
    shape?: string;
    /**
     * @deprecated use `expandTriggerType` instead
     */
    expandTrigger?: CascaderSelectProps['expandTriggerType'];
}

type PickCascaderKeys =
    | 'dataSource'
    | 'useVirtual'
    | 'multiple'
    | 'canOnlyCheckLeaf'
    | 'checkStrictly'
    | 'resultRender'
    | 'expandedValue'
    | 'defaultExpandedValue'
    | 'expandTriggerType'
    | 'onExpand'
    | 'listStyle'
    | 'listClassName'
    | 'loadData'
    | 'itemRender'
    | 'immutable';

/**
 * @api CascaderSelect
 * @remarks
 * 继承 Cascader, Select 的部分属性，支持透传给 Cascader 的属性有 dataSource, useVirtual, multiple, canOnlyCheckLeaf,
 * checkStrictly, resultRender, expandedValue, defaultExpandedValue, expandTriggerType, onExpand, listStyle,
 * listClassName, loadData, itemRender, immutable。支持透传给 Select 的包括除上面传给 Cascader 和下方单独列出的属性以外的其他全部属性。
 * -
 * inherits partial props from Cascader, support passing props to Cascader: dataSource, useVirtual, multiple, canOnlyCheckLeaf,
 * checkStrictly, resultRender, expandedValue, defaultExpandedValue, expandTriggerType, onExpand, listStyle, listClassName, loadData, i
 * temRender, immutable. Support passing props to Select: other Select props except those listed above and those listed below.
 */
export interface CascaderSelectProps
    extends Pick<CascaderProps, PickCascaderKeys>,
        Omit<
            SelectProps,
            PickCascaderKeys | 'locale' | 'onChange' | 'renderPreview' | 'menuProps' | 'filter'
        >,
        HTMLAttributesWeak,
        CommonProps,
        DeprecatedProps {
    /**
     * 选择框大小
     * @en size
     * @defaultValue 'medium'
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * @deprecated use Form.Item name instead
     * @skip
     */
    name?: string;
    /**
     * 是否禁用
     * @en disabled
     * @defaultValue false
     */
    disabled?: boolean;

    /**
     * 是否有下拉箭头
     * @en hasArrow
     * @defaultValue true
     */
    hasArrow?: boolean;

    /**
     * 是否有边框
     * @en hasBorder
     * @defaultValue true
     */
    hasBorder?: boolean;

    /**
     * 是否有清除按钮
     * @en hasClear
     * @defaultValue false
     */
    hasClear?: boolean;

    /**
     * 是否只读，只读模式下可以展开弹层但不能选
     * @en readOnly, popup layer can be expanded but cannot be selected in read-only mode
     */
    readOnly?: boolean;

    /**
     *（非受控）默认值
     * @en default value(not controlled)
     */
    defaultValue?: string | Array<string>;

    /**
     *（受控）当前值
     * @en current value(controlled)
     */
    value?: string | Array<string>;

    /**
     * 选中值改变时触发的回调函数
     * @en callback when selected value changes
     */
    onChange?: (
        value: string | Array<string> | null,
        data: CascaderDataItem | Array<CascaderDataItem> | null,
        extra?: Extra
    ) => void;

    /**
     * 是否选中即发生改变，该属性仅在单选模式下有效
     * @en whether to call onChange as soon as selected, this property only works in single selection mode
     * @defaultValue false
     */
    changeOnSelect?: boolean;

    /**
     * 选择框单选时展示结果的自定义渲染函数
     * @en custom render function of selected result
     */
    displayRender?: (
        label: Array<React.ReactNode>,
        data?: CascaderSelectDataItem
    ) => React.ReactNode;

    /**
     * 是否显示搜索框
     * @en show search box
     * @defaultValue false
     */
    showSearch?: boolean;

    /**
     * 自定义搜索函数
     * @en custom search function
     */
    filter?: (searchValue: string, path: CascaderSelectDataItem[]) => boolean;

    /**
     * 当搜索框值变化时回调
     * @en callback when search value changes
     */
    onSearch?: (value: string) => void;

    /**
     * 搜索结果列表是否和选择框等宽
     * @en whether the search result list is the same width as the selection box
     * @defaultValue true
     */
    resultAutoWidth?: boolean;

    /**
     * 无数据时显示内容
     * @en content when no data
     */
    notFoundContent?: React.ReactNode;

    /**
     * 自定义下拉框头部
     * @en custom dropdown header
     */
    header?: React.ReactNode;

    /**
     * 自定义下拉框底部
     * @en custom dropdown footer
     */
    footer?: React.ReactNode;

    /**
     * 初始下拉框是否显示
     * @en visible by default
     * @defaultValue false
     */
    defaultVisible?: boolean;

    /**
     * 当前下拉框是否显示
     * @en current visible
     */
    visible?: boolean;

    /**
     * 下拉框显示或关闭时触发事件的回调函数
     */
    onVisibleChange?: (visible: boolean, type?: CascaderSelectVisibleChangeType) => void;

    /**
     * 透传到 Popup 的属性对象
     * @en props object passed to Popup
     */
    popupProps?: React.ComponentPropsWithRef<typeof Popup>;

    /**
     * 是否为预览态
     * @en whether it is in preview mode
     * @defaultValue false
     */
    isPreview?: boolean;

    /**
     * 自定义预览态
     * @en custom preview
     */
    renderPreview?: (
        value: CascaderSelectDataItem | CascaderSelectDataItem[],
        props: CascaderSelectProps
    ) => React.ReactNode;
    /**
     * 是否支持树形勾选
     * @en whether to support tree check
     * @skip
     */
    treeCheckable?: boolean;
    /**
     * 透传到 Cascader 的属性对象
     * @en props object passed to Cascader
     */
    menuProps?: Omit<CascaderProps, 'onSelect' | 'onChange'>;
}

export interface CascaderSelectState {
    value: string[];
    searchValue: string;
    visible: boolean;
}
