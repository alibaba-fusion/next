import React from 'react';
import type { CommonProps } from '../util';
import type { PopupProps } from '../overlay';
import type { ButtonProps } from '../button';
import type { AutoCompleteProps, SelectProps } from '../select';
type HTMLAttributesWeak = Omit<React.HTMLAttributes<HTMLElement>, 'defaultValue' | 'onChange'>;
/**
 * @api Search
 */
export interface SearchProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 大小
     * @defaultValue 'medium'
     */
    size?: 'large' | 'medium';
    /**
     * 搜索框数值
     */
    value?: string | number;
    /**
     * 搜索框默认值
     */
    defaultValue?: string;
    /**
     * 默认提示
     * @en default hint
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
     * 是否显示清除按钮
     * @en show clear button
     */
    hasClear?: boolean;
    /**
     * 校验状态
     */
    state?: 'error' | 'loading';
    /**
     * 是否只读，只读模式下可以展开弹层但不能选
     */
    readOnly?: boolean;
    /**
     * 是否禁用
     * @en disabled or not
     */
    disabled?: boolean;
    /**
     * 自定义渲染的的下拉框
     * @en is popupContent displayed
     */
    visible?: boolean;
    /**
     * 弹层初始化是否显示
     */
    defaultVisible?: boolean;
    /**
     * 弹层显示或隐藏时触发的回调
     */
    onVisibleChange?: (visible: boolean) => void;
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
     * 自定义渲染的的下拉框
     * @en custom popup content
     */
    popupContent?: React.ReactNode;
    /**
     * 是否使用本地过滤，在数据源为远程的时候需要关闭此项
     */
    filterLocal?: boolean;
    /**
     * 选择器
     * @en filter
     */
    filter?: SelectProps['dataSource'];
    /**
     * 是否开启虚拟滚动模式
     */
    useVirtual?: boolean;
    /**
     * 搜索框下拉联想列表
     * @en dropdown menu dataSource
     */
    dataSource?: AutoCompleteProps['dataSource'];
    /**
     * 渲染 MenuItem 内容的方法
     */
    itemRender?: AutoCompleteProps['itemRender'];
    /**
     * 输入关键字时的回掉
     * @en callback when value changes
     */
    onChange?: AutoCompleteProps['onChange'];
    /**
     * 填充到选择框里的值的 key，默认是 value
     * @en the key of the value filled in the selection box, the default is value
     */
    fillProps?: string;
    /**
     * 样式前缀
     */
    prefix?: string;
    /**
     * 形状
     * @en shape
     * @defaultValue 'normal'
     */
    shape?: 'normal' | 'simple';
    /**
     * 类型
     * @defaultValue 'normal'
     */
    type?: 'primary' | 'secondary' | 'normal' | 'dark';
    /**
     * 点击搜索按钮触发的回调
     * @en callback when search button clicked
     */
    onSearch?: (value: string, filterValue?: string) => void;
    /**
     * 选择器默认值
     * @en defaultFilterValue
     */
    defaultFilterValue?: string;
    /**
     * 选择器值
     * @en filterValue
     */
    filterValue?: string;
    /**
     * 选择器发生变化时回调
     * @en callback when filter changes
     */
    onFilterChange?: (filter: string) => void;
    /**
     * button 的内容
     * @en searchText
     */
    searchText?: React.ReactNode;
    /**
     * 自定义样式
     * @skip
     */
    style?: React.CSSProperties;
    /**
     * 样式名称
     * @skip
     */
    className?: string;
    /**
     * 选择器的props
     * @en filterProps
     */
    filterProps?: SelectProps;
    /**
     * 按钮的额外属性
     * @en props for Button
     */
    buttonProps?: ButtonProps;
    /**
     * 是否显示搜索按钮
     * @en show find button
     */
    hasIcon?: boolean;
    /**
     * 可配置的icons，包括 search 等
     * @en configurable icons, including search, etc
     */
    icons?: {
        search?: React.ReactNode;
    };
    /**
     * 是否跟随滚动
     * @en follow Trigger or not
     */
    followTrigger?: boolean;
    /**
     * 是否自动高亮第一个元素
     * @en whether to automatically highlight the first element
     */
    autoHighlightFirstItem?: boolean;
    /**
     * 键盘上下键切换菜单高亮选项的回调
     * @en callback for keyboard up and down keys to switch menu highlighted options
     */
    onToggleHighlightItem?: AutoCompleteProps['onToggleHighlightItem'];
    /**
     * @skip
     */
    onBlur?: AutoCompleteProps['onBlur'];
    /**
     * @skip
     */
    onFocus?: AutoCompleteProps['onFocus'];
    /**
     * @skip
     */
    onInputFocus?: AutoCompleteProps['onFocus'];
    /**
     * @skip
     */
    overlayVisible?: boolean;
    /**
     * @deprecated Use "popupContent" instead
     * @skip
     */
    combox?: unknown;
}
export {};
