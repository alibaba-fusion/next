import * as React from 'react';
import { CommonProps } from '../util';

type HTMLAttributesWeak = Omit<React.HTMLAttributes<HTMLElement>, 'onClick' | 'type' | 'onChange'>;

export type TagType = 'normal' | 'primary' | 'secondary';

export type Size = 'small' | 'medium' | 'large';

export type CloseArea = 'tag' | 'tail';

/**
 * @api Closeable
 * 类型定义用于 Closeable 标签
 */
export interface CloseableProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 是否禁用标签
     * @en Whether the tag is disabled
     */
    disabled?: boolean;

    /**
     * 额外的CSS类名
     * @en Additional CSS class name
     */
    className?: string;

    /**
     * closeable 标签的 onClose 响应区域, "tag": 标签体, "tail"(默认): 关闭按钮
     * @remarks 标签, 尾部icon
     * @en The area which triggers onClose event for closeable tag, "tag": tag body, "tail"(default): close icon
     */
    closeArea?: CloseArea;

    /**
     * 点击关闭按钮时的回调
     * @param from - 事件来源, "tag": 标签体点击, "tail": 关闭按钮点击
     * @returns true则关闭, false阻止关闭
     * @en Callback when the close button is clicked
     */
    onClose?:
        | ((from: CloseArea) => boolean)
        | ((from: CloseArea, node: HTMLElement | null) => boolean);
    /**
     * 标签关闭后执行的回调
     * @en Callback after the tag is closed
     */
    afterClose?: (node: HTMLElement | null) => void;

    /**
     * 点击回调
     * @en Callback when the tag is clicked
     */
    onClick?: (e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void;

    /**
     * 标签的类型。
     * @en The type of the tag
     */
    type?: TagType;

    /**
     * 标签的尺寸（large 尺寸为兼容表单场景 large = medium）
     * @remarks 小, 中, 大
     * @en The size of the tag (large size is compatible with form scenario where large = medium)
     */
    size?: Size;

    /**
     * 标签的内容。
     * @en The content of the tag
     */
    children?: React.ReactNode;

    /**
     * 是否启用右到左语言布局。
     * @en Whether to enable right-to-left language layout
     */
    rtl?: boolean;
}

/**
 * @api Selectable组件的状态定义
 * Selectable 组件的状态属性定义。
 */
export interface SelectableState {
    /**
     * 标识标签是否被选中。
     * @defaultValue false
     * @en Indicates whether the tag is selected.
     */
    checked: boolean;
}

/**
 * @api Selectable
 * Selectable 组件的属性定义。
 */
export interface SelectableProps extends CloseableProps {
    /**
     * 标签是否被选中，受控用法。
     * @en Whether the tag is checked, controlled usage.
     * @defaultValue false
     */
    checked?: boolean;

    /**
     * 标签是否默认被选中，非受控用法。
     * @en Whether the tag is checked by default, uncontrolled usage.
     * @defaultValue false
     */
    defaultChecked?: boolean;

    /**
     * 选中状态变化时触发的事件。
     * @en Callback fired when the checked state changes.
     */
    onChange?: (
        checked: boolean,
        e: React.ChangeEvent<HTMLElement> | React.MouseEvent<HTMLDivElement>
    ) => void;
}

/**
 * @api TagGroup
 * TagGroup 组件的属性定义。
 */
export interface TagGroupProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 按钮类名前缀，用于自定义样式
     * @en Button class name prefix, used for custom styles
     */
    prefix?: string;

    /**
     * 额外的CSS类名，可以用于添加自定义样式类
     * @en Additional CSS class name, can be used to add custom style classes
     */
    className?: string; // 在TypeScript中，我们一般使用string类型来代表CSS类名

    /**
     * 按钮的子元素，通常是按钮上显示的文本或图标等内容
     * @en Children of the button, usually the text or icons displayed on the button
     */
    children?: React.ReactNode;

    /**
     * 是否启用从右到左的文本方向，用于支持RTL语言布局
     * @en Whether to enable right-to-left text direction, used to support RTL language layout
     */
    rtl?: boolean;
}

/**
 * @api Tag
 * Tag 组件的属性定义。
 */
export interface TagProps extends CloseableProps {
    /**
     * 标签类名前缀,提供给二次开发者用
     * @en Tag class name prefix for secondary developers
     * @defaultValue 'next-'
     */
    prefix?: string;

    /**
     * 标签颜色, 目前支持：blue、green、orange、red、turquoise、yellow和hex颜色值
     * @en Tag color, currently supports: blue, green, orange, red, turquoise, yellow, and hex color values
     * @remarks `color keywords`作为Tag组件的保留字，请勿直接使用。生效版本：1.19.0以上
     */
    color?: string;

    /**
     * 是否开启动效
     * @en Whether to enable animation
     * @defaultValue false
     */
    animation?: boolean;

    /**
     * 标签出现动画结束后执行的回调
     * @en Callback after the animation of the tag appears
     */
    afterAppear?: (node: HTMLElement) => void;

    /**
     * 是否可关闭
     * @en Whether the tag is closable
     * @defaultValue false
     */
    closable?: boolean;

    /**
     * 形状
     * @skip
     * @en Shape of the tag
     * @remarks 默认, 可关闭, 可选择
     * @defaultValue 'default'
     */
    _shape?: 'default' | 'closable' | 'checkable';
}

/**
 * @api Tag组件的状态定义
 * State definition for Tag component.
 */
export interface TagState {
    /**
     * 控制Tag的可见性
     * @en Controls the visibility of the tag
     * @defaultValue true
     */
    visible: boolean;
}
