import type React from 'react';
import type { CommonProps } from '../util';
import type { PopupProps } from '../overlay';
import type { MenuProps } from '../menu';
import type { InputProps } from '../input';

export interface ReactElementWithTypeMark extends React.ReactElement {
    type: React.ReactElement['type'] & { _typeMark?: string };
}

interface HTMLAttributesWeak
    extends Omit<
        React.HTMLAttributes<HTMLElement>,
        'defaultValue' | 'onChange' | 'onBlur' | 'onFocus' | 'onKeyDown'
    > {}

/**
 * @api
 */
export interface ObjectItem {
    value?: string | number | boolean | null | undefined;
    label?: string | number | boolean;
    color?: string;
    disabled?: boolean;
    children?: DataSourceItem[];
    title?: string;
    __isAddon?: boolean;
    [propName: string]: unknown;
}

export interface NormalizedObjectItem extends ObjectItem {
    children?: NormalizedObjectItem[];
}

/**
 * @deprecated use ObjectItem instead
 */
export type item = ObjectItem;

/**
 * @api
 */
export type DataSourceItem = ObjectItem | string | boolean | number | null | undefined;

/**
 * @api
 */
export type VisibleChangeType =
    | 'itemClick'
    | 'enter'
    | 'esc'
    | 'keyDown'
    | 'selectAll'
    | 'update'
    | 'change'
    | 'tag';

/**
 * @api
 */
export type HighlightChangeType = 'up' | 'down' | 'autoFirstItem' | 'highlightKeyToNull';

export interface AutoCompleteProps
    extends HTMLAttributesWeak,
        Omit<InputProps, 'onChange' | 'value'>,
        CommonProps {
    /**
     * 选择器尺寸
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * 当前值，用于受控模式
     */
    value?: string | number | null;

    /**
     * 初始化的默认值
     */
    defaultValue?: string | number;

    /**
     * 没有值的时候的占位符
     */
    placeholder?: string;

    /**
     * 下拉菜单是否与选择器对齐
     */
    autoWidth?: boolean;

    /**
     * 自定义内联 label
     */
    label?: React.ReactNode;

    /**
     * 是否有清除按钮（单选模式有效）
     */
    hasClear?: boolean;

    /**
     * 校验状态
     */
    state?: 'error' | 'loading' | 'success' | 'warning';

    /**
     * 是否只读，只读模式下可以展开弹层但不能选
     */
    readOnly?: boolean;

    /**
     * 是否禁用选择器
     */
    disabled?: boolean;

    /**
     * 当前弹层是否显示
     */
    visible?: boolean;

    /**
     * 弹层初始化是否显示
     */
    defaultVisible?: boolean;

    /**
     * 弹层显示或隐藏时触发的回调
     */
    onVisibleChange?: (visible: boolean, type?: VisibleChangeType) => void;

    /**
     * 弹层挂载的容器节点
     */
    popupContainer?: string | HTMLElement | ((target: HTMLElement) => HTMLElement);

    /**
     * 弹层的 className
     */
    popupClassName?: string;

    /**
     * 弹层的内联样式
     */
    popupStyle?: React.CSSProperties;

    /**
     * 添加到弹层上的属性
     */
    popupProps?: PopupProps;

    /**
     * 自定义弹层的内容
     */
    popupContent?: React.ReactNode;

    /**
     * 是否跟随滚动
     */
    followTrigger?: boolean;

    /**
     * 是否使用本地过滤，在数据源为远程的时候需要关闭此项
     */
    filterLocal?: boolean;

    /**
     * 本地过滤方法，返回一个 Boolean 值确定是否保留
     */
    filter?: (key: string | number, item: ObjectItem) => boolean;

    /**
     * 键盘上下键切换菜单高亮选项的回调
     */
    onToggleHighlightItem?: (highlightKey: unknown, ...args: unknown[]) => void;

    /**
     * 是否开启虚拟滚动模式
     */
    useVirtual?: boolean;

    /**
     * 传入的数据源，可以动态渲染子项
     */
    dataSource?: Array<DataSourceItem>;

    /**
     * 渲染 MenuItem 内容的方法
     */
    itemRender?: (item: item) => React.ReactNode;

    /**
     * Select 发生改变时触发的回调
     */
    onChange?: (value: string, actionType: string, item?: ObjectItem) => void;

    onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;

    /**
     * 填充到选择框里的值的 key，默认是 value
     */
    fillProps?: string;

    /**
     * 自动高亮第一个选项
     */
    autoHighlightFirstItem?: boolean;

    /**
     * 高亮 key
     */
    highlightKey?: string;

    /**
     *  默认高亮 key
     */
    defaultHighlightKey?: string;
    onFocus?: InputProps['onFocus'];
    children?: ReactElementWithTypeMark | ReactElementWithTypeMark[];
    highlightHolder?: boolean;
}

export interface OptionGroupProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 设置分组的文案
     */
    label?: React.ReactNode;
}

export interface OptionProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 选项值
     */
    value: string | number | boolean | null | undefined;

    /**
     * 是否禁用
     */
    disabled?: boolean;
}

export interface SelectProps
    extends HTMLAttributesWeak,
        Omit<InputProps, 'value' | 'defaultValue' | 'renderPreview' | 'onChange'>,
        CommonProps {
    /**
     * 选择器尺寸
     */
    size?: 'small' | 'medium' | 'large';

    children?: ReactElementWithTypeMark | ReactElementWithTypeMark[];

    /**
     * name
     */
    name?: string;

    /**
     * 当前值，用于受控模式
     */
    value?: DataSourceItem | DataSourceItem[];

    /**
     * 初始的默认值
     */
    defaultValue?: DataSourceItem | DataSourceItem[];

    /**
     * 没有值的时候的占位符
     */
    placeholder?: string;

    /**
     * 下拉菜单是否与选择器对齐
     */
    autoWidth?: boolean;

    /**
     * 自定义内联 label
     */
    label?: React.ReactNode;

    /**
     * 是否有清除按钮（单选模式有效）
     */
    hasClear?: boolean;

    /**
     * 校验状态
     */
    state?: 'error' | 'loading' | 'success' | 'warning';

    /**
     * 是否只读，只读模式下可以展开弹层但不能选
     */
    readOnly?: boolean;

    /**
     * 是否禁用选择器
     */
    disabled?: boolean;

    /**
     * 当前弹层是否显示
     */
    visible?: boolean;

    /**
     * 弹层初始化是否显示
     */
    defaultVisible?: boolean;

    /**
     * 弹层显示或隐藏时触发的回调
     */
    onVisibleChange?: (visible: boolean, type?: VisibleChangeType) => void;

    /**
     * 弹层挂载的容器节点
     */
    popupContainer?: string | HTMLElement | ((target: HTMLElement) => HTMLElement);

    /**
     * 弹层的 className
     */
    popupClassName?: string;

    /**
     * 弹层的内联样式
     */
    popupStyle?: React.CSSProperties;

    /**
     * 添加到弹层上的属性
     */
    popupProps?: PopupProps;

    /**
     * 是否跟随滚动
     */
    followTrigger?: boolean;

    /**
     * 自定义弹层的内容
     */
    popupContent?: React.ReactNode;
    menuProps?: MenuProps;

    /**
     * 是否使用本地过滤，在数据源为远程的时候需要关闭此项
     */
    filterLocal?: boolean;

    /**
     * 本地过滤方法，返回一个 Boolean 值确定是否保留
     */
    filter?: (key: string | number, item: ObjectItem) => boolean;

    /**
     * 键盘上下键切换菜单高亮选项的回调
     */
    onToggleHighlightItem?: (highlightKey?: unknown, type?: HighlightChangeType) => void;

    /**
     * 是否开启虚拟滚动模式
     */
    useVirtual?: boolean;

    /**
     * 传入的数据源，可以动态渲染子项，详见 [dataSource 的使用](#dataSource 的使用)
     */
    dataSource?: Array<DataSourceItem>;

    /**
     * 渲染 MenuItem 内容的方法
     */
    itemRender?: (item: item, searchValue: string | undefined) => React.ReactNode;

    /**
     * 选择器模式
     */
    mode?: 'single' | 'multiple' | 'tag';

    /**
     * 弹层内容为空的文案
     */
    notFoundContent?: React.ReactNode;

    /**
     * Select 发生改变时触发的回调
     */
    onChange?: (
        value: DataSourceItem | DataSourceItem[],
        actionType: string,
        item?: ObjectItem | ObjectItem[]
    ) => void;

    /**
     * 是否有边框
     */
    hasBorder?: boolean;

    /**
     * 是否有下拉箭头
     */
    hasArrow?: boolean;

    /**
     * 展开后是否能搜索（tag 模式下固定为 true）
     */
    showSearch?: boolean;

    /**
     * 当搜索框值变化时回调
     */
    onSearch?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;

    /**
     * 当搜索框值被清空时候的回调
     */
    onSearchClear?: (actionType?: string) => void;

    /**
     * 多选模式下是否有全选功能
     */
    hasSelectAll?: boolean | string;

    /**
     * 填充到选择框里的值的 key
     */
    fillProps?: string;

    /**
     * onChange 返回的 value 使用 dataSource 的对象
     */
    useDetailValue?: boolean;

    /**
     * dataSource 变化的时是否保留已选的内容
     */
    cacheValue?: boolean;

    /**
     * 渲染 Select 展现内容的方法
     */
    valueRender?: (item: ObjectItem, props?: SelectProps) => React.ReactNode;

    /**
     * 受控搜索值，一般不需要设置
     */
    searchValue?: string;
    /**
     * 是否一行显示，仅在 mode 为 multiple 的时候生效
     */
    tagInline?: boolean;
    /**
     * 最多显示多少个 tag
     */
    maxTagCount?: number;
    /**
     * tag 尺寸是否和 select 尺寸保持一致，仅在 multiple/tag 模式下有用
     */
    adjustTagSize?: boolean;
    /**
     * 隐藏多余 tag 时显示的内容，在 maxTagCount 生效时起作用
     * @param selectedValues - 当前已选中的元素
     * @param totalValues - 总待选元素
     */
    maxTagPlaceholder?: (
        selectedValues: ObjectItem[],
        totalValues: ObjectItem[]
    ) => React.ReactNode | HTMLElement;

    /**
     * 选择后是否立即隐藏菜单 (mode=multiple/tag 模式生效)
     */
    hiddenSelected?: boolean;
    /**
     * 是否展示 dataSource 中 children
     */
    showDataSourceChildren?: boolean;
    /**
     * tag 删除回调
     */
    onRemove?: (item: ObjectItem) => void;

    /**
     * 焦点事件
     */
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;

    /**
     * 失去焦点事件
     */
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
    isPreview?: boolean;
    renderPreview?: (
        values: DataSourceItem | DataSourceItem[],
        props?: SelectProps
    ) => React.ReactNode;
    /**
     * 自动高亮第一个选项
     */
    autoHighlightFirstItem?: boolean;

    /**
     * 高亮 key
     */
    highlightKey?: string;

    /**
     *  默认高亮 key
     */
    defaultHighlightKey?: string | null;

    /**
     * 展开下拉菜单时是否自动焦点到弹层
     */
    popupAutoFocus?: boolean;

    /**
     * drawer 组件使用此属性 将 Select 的弹出模式换成 Drawer
     */
    popupComponent?: React.FunctionComponent | React.ComponentClass | string;
    tagClosable?: boolean;
    /**
     * @deprecated use onSearch & showSearch instead
     */
    onInputUpdate?: SelectProps['onSearch'];
}

export interface BaseProps
    extends CommonProps,
        Pick<
            SelectProps,
            | 'size'
            | 'autoWidth'
            | 'onChange'
            | 'onVisibleChange'
            | 'onToggleHighlightItem'
            | 'popupProps'
            | 'filterLocal'
            | 'filter'
            | 'itemRender'
            | 'autoHighlightFirstItem'
            | 'showDataSourceChildren'
            | 'defaultHighlightKey'
            | 'highlightKey'
            | 'mode'
            | 'defaultValue'
            | 'defaultVisible'
            | 'value'
            | 'visible'
            | 'dataSource'
            | 'children'
            | 'label'
            | 'popupStyle'
            | 'disabled'
            | 'popupAutoFocus'
            | 'popupContent'
            | 'menuProps'
            | 'notFoundContent'
            | 'useVirtual'
            | 'popupComponent'
            | 'popupContainer'
            | 'popupClassName'
            | 'followTrigger'
            | 'isPreview'
            | 'style'
            | 'className'
            | 'valueRender'
            | 'fillProps'
        > {
    canCloseByTrigger?: boolean;
    cache?: boolean;
    onChange?: (...rest: any[]) => void;
    renderPreview?: (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        values: any,
        props?: SelectProps
    ) => React.ReactNode;
}

export interface DataStoreOptions {
    filter?: BaseProps['filter'];
    filterLocal?: BaseProps['filterLocal'];
    showDataSourceChildren?: BaseProps['showDataSourceChildren'];
    addonKey?: boolean;
    key?: string | number | null;
}
