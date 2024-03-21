import type React from 'react';
import type { CommonProps } from '../util';
import type { Locale } from '../locale/types';

export type HTMLAttributesWeak = Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'onClick' | 'type' | 'onChange'
>;

/**
 * @api
 * @example
 * - tag: 标签体
 * - tail: 关闭按钮
 */
export type CloseArea = 'tag' | 'tail';

export type TagLocale = Locale['Tag'];

/**
 * @api Tag
 */
export interface TagCurrentProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 标签的类型
     * @en Type of tag
     * @defaultValue 'normal'
     */
    type?: 'normal' | 'primary';

    /**
     * 标签的尺寸
     * @en The size of the tag
     * @remarks
     * large 在表单场景的表现与 medium 相同
     * -
     * 'large' behavior like 'medium' in form
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * 标签颜色，目前支持：blue、green、orange、red、turquoise、yellow 和 hex 颜色值
     * @en Tag color, currently supports: blue, green, orange, red, turquoise, yellow, and hex color values
     * @version 1.19.0
     */
    color?: string;

    /**
     * 是否开启动效
     * @en Enable animation or not
     * @defaultValue false
     */
    animation?: boolean;

    /**
     * 标签出现动画结束后执行的回调
     * @en Callback after the animation of the tag appears
     */
    afterAppear?: (node: HTMLElement) => void;

    /**
     * 点击回调
     * @en Callback when it is clicked
     */
    onClick?: (
        event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>
    ) => void;

    /**
     * 形状
     * @defaultValue 'default'
     * @remarks 内部属性，请使用`Tag.Closable` 或 `Tag.Selectable`替代
     * @skip
     */
    _shape?: 'default' | 'closable' | 'checkable';

    /**
     * @skip
     * @remarks 内部属性，请使用 `Tag.Closable` 替代
     */
    closable?: boolean;

    /**
     * 标签是否被禁用
     * @defaultValue false
     * @skip
     */
    disabled?: boolean;

    /**
     * @deprecated Use `Tag.Closable` instead
     * @skip
     */
    closeArea?: CloseArea;

    /**
     * @deprecated Use `Tag.Closable` instead
     * @skip
     */
    onClose?: (from: CloseArea, node?: HTMLElement | null) => boolean | void;

    /**
     * @deprecated Use `Tag.Closable` instead
     * @skip
     */
    afterClose?: (node: HTMLElement | null) => void;

    /**
     * Tag 的文案对象
     * @skip
     */
    locale?: TagLocale;
}

/**
 * Never used legacy props
 */
export interface TagLegacyProps extends Omit<TagCurrentProps, 'type' | 'onSelect'> {
    /**
     * @deprecated Never used
     */
    shape: 'selectable' | 'deletable' | 'link' | 'readonly' | 'interactive';
    /**
     * @deprecated Use type='normal' instead
     */
    type: 'secondary';
    /**
     * @deprecated Use 'onClose' at `Tag.Closeable` instead
     */
    closed?: (from: CloseArea, node?: HTMLElement | null) => boolean | void;
    /**
     * @deprecated Use 'checked' at `Tag.Selectable` instead
     */
    selected?: boolean;
    /**
     * @deprecated Use 'defaultChecked' at `Tag.Selectable` instead
     */
    defaultSelected?: boolean;
    /**
     * @deprecated Use 'onChange' at `Tag.Selectable` instead
     */
    onSelect?: (
        checked: boolean,
        e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>
    ) => void;
}

export type TagProps = TagCurrentProps | TagLegacyProps;

export type TagGroupProps = React.HTMLAttributes<HTMLElement> & CommonProps;

/**
 * @api Tag.Closeable
 * @order 1
 * @remarks 继承 Tag 的所有属性 - Extends all props of `Tag`
 */
export interface CloseableProps extends TagCurrentProps {
    /**
     * closeable 标签的 onClose 响应区域
     * @en The area which triggers onClose event for closeable tag
     * @defaultValue 'tail'
     * @example
     * - tag: 标签体
     * - tail: 关闭按钮
     */
    closeArea?: CloseArea;

    /**
     * 点击关闭按钮时的回调
     * @en Callback when closeArea is clicked
     * @param from - 事件来源 - clicked place
     * @param node - 标签节点 - Tag dom node
     * @returns true 则关闭，false 阻止关闭 - true to close tag, false to prevent the close action
     */
    onClose?: (from: CloseArea, node: HTMLDivElement) => boolean | void;

    /**
     * 标签关闭后执行的回调
     * @en Callback when tag has been closed
     */
    afterClose?: (node: HTMLElement | null) => void;
}

/**
 * @api Tag.Selectable
 * @order 2
 * @remarks 继承 Tag 的所有属性 - Extends all props of `Tag`
 */
export interface SelectableProps extends TagCurrentProps {
    /**
     * 标签是否被选中，受控用法
     * @en Whether the tag is checked, controlled usage
     */
    checked?: boolean;

    /**
     * 标签是否默认被选中，非受控用法。
     * @en Whether the tag is checked by default, uncontrolled usage
     */
    defaultChecked?: boolean;

    /**
     * 选中状态变化时触发的事件
     * @en Callback when the checked state changes
     */
    onChange?: (
        checked: boolean,
        e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>
    ) => void;
}

export type TagRealProps = CloseableProps & { disabled?: boolean };
