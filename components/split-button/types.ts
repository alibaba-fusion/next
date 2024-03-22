import React from 'react';
import { CommonProps } from '../util';
import Menu, { type MenuProps } from '../menu';
import type { ButtonProps } from '../button';
import type { PopupProps } from '../overlay';

/**
 * @api SplitButton
 */
export interface SplitButtonProps extends Omit<ButtonProps, 'onSelect'>, CommonProps {
    /**
     * 主按钮的文案
     * @en Text in button
     */
    label?: React.ReactNode;

    /**
     * 按钮的类型
     * @en Typeo of button
     * @defaultValue 'normal'
     */
    type?: 'normal' | 'primary' | 'secondary';

    /**
     * 按钮组的尺寸
     * @en Size of button
     * @defaultValue 'medium'
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * 设置标签类型
     * @en The html tag to be rendered
     */
    component?: 'button' | 'a';

    /**
     * 是否为幽灵按钮
     * @en Setting ghost button
     */
    ghost?: 'light' | 'dark' | false | true;

    /**
     * 是否禁用
     * @en Is disabled
     */
    disabled?: boolean;

    /**
     * 默认激活的菜单项（用法同 Menu 非受控）
     * @en The keys of default selected items, as Menu
     */
    defaultSelectedKeys?: string[];

    /**
     * 激活的菜单项（用法同 Menu 受控）
     * @en The keys of selected items
     */
    selectedKeys?: string[];

    /**
     * 菜单的选择模式
     * @en The select mode of menu
     */
    selectMode?: 'single' | 'multiple';

    /**
     * 选择菜单项时的回调，参考 Menu
     * @en Callback when select the menu，see Menu
     */
    onSelect?: MenuProps['onSelect'];

    /**
     * 点击菜单项时的回调，参考 Menu
     * @en Callback when click the menu，see Menu
     */
    onItemClick?: MenuProps['onItemClick'];

    /**
     * 触发按钮的属性（支持 Button 的所有属性透传）
     * @en The props of trigger element
     */
    triggerProps?: ButtonProps;

    /**
     * 弹层菜单的宽度是否与按钮组一致
     * @en Whether the popup width is the same as the button
     * @defaultValue true
     */
    autoWidth?: boolean;

    /**
     * 弹层是否显示
     * @en Visible state of the popup
     */
    visible?: boolean;

    /**
     * 弹层默认是否显示
     * @en Default visible state of the popup
     */
    defaultVisible?: boolean;

    /**
     * 弹层显示状态变化时的回调函数
     * @en Callback when visible state change
     * @param visible - 弹层显示状态
     * @param type - 触发弹层显示或隐藏的来源 menuSelect 表示由menu触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发
     */
    onVisibleChange?: (visible: boolean, type: 'menuSelect' | 'fromTrigger' | 'docClick') => void;

    /**
     * 弹层的触发方式
     * @en Trigger type of popup
     * @defaultValue 'click'
     */
    popupTriggerType?: 'click' | 'hover';

    /**
     * 弹层对齐方式, 详情见 Overlay align
     * @en Align of popup, @see Overlay doc for detail
     */
    popupAlign?: string;

    /**
     * 弹层自定义样式
     * @en Custom style of popup
     */
    popupStyle?: React.CSSProperties;

    /**
     * 弹层自定义样式类
     * @en Custom className of popup
     */
    popupClassName?: string;

    /**
     * 透传给弹层的属性
     * @en The props of popup
     */
    popupProps?: PopupProps;

    /**
     * 弹层容器，如果是函数需要返回 ref，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点
     * @en The container of popup
     */
    popupContainer?: PopupProps['container'];

    /**
     * 是否跟随滚动
     * @en follow Trigger or not
     */
    followTrigger?: boolean;

    /**
     * 透传给 Menu 的属性
     * @en The props of menu
     */
    menuProps?: MenuProps & { ref?: (ins: React.ComponentRef<typeof Menu>) => void };

    /**
     * 透传给 左侧按钮 的属性
     * @en The props of left button
     */
    leftButtonProps?: ButtonProps;
}
