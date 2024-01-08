import * as React from 'react';
import { MenuProps } from '../menu';
import { CommonProps } from '../util';
import { ButtonProps } from '../button';
import { PopupProps } from '../overlay';

/**
 * @api MenuButton
 */
export interface MenuButtonProps extends Omit<ButtonProps, 'onSelect'>, CommonProps {
    /**
     * 按钮上的文本内容
     * @en Text content on the button
     * @defaultValue undefined
     */
    label?: React.ReactNode;
    /**
     * 弹层是否与按钮宽度相同
     * @en Whether the popup layer is the same width as the button
     * @defaultValue true
     */
    autoWidth?: boolean;
    /**
     * 弹层触发方式
     * @en Popup trigger method
     * @defaultValue 'click'
     */
    popupTriggerType?: 'click' | 'hover';
    /**
     * 弹层容器
     * @en Popup container
     * @defaultValue undefined
     */
    popupContainer?: string | HTMLElement | ((target: HTMLElement) => HTMLElement);
    /**
     * 弹层展开状态
     * @en Popup expansion status
     * @defaultValue undefined
     */
    visible?: boolean;
    /**
     * 弹层默认是否展开
     * @en Whether or not the popup window expands by default
     * @defaultValue undefined
     */
    defaultVisible?: boolean;
    /**
     * 弹层在显示和隐藏触发的事件
     * @en Events triggered by the popup when it is shown and hidden
     * @defaultValue function.noop
     */
    onVisibleChange?: (visible: boolean, type: string) => void;
    /**
     * 弹层自定义样式
     * @en Popup customization styles
     * @defaultValue undefined
     */
    popupStyle?: React.CSSProperties;
    /**
     * 弹层自定义样式类
     * @en Popup custom style class name
     * @defaultValue undefined
     */
    popupClassName?: string;
    /**
     * 弹层属性透传
     * @en Popup attribute passthrough
     * @defaultValue undefined
     */
    popupProps?: PopupProps;
    /**
     * 菜单是否跟随滚动
     * @en Whether the menu follows the scroll
     * @defaultValue undefined
     */
    followTrigger?: boolean;
    /**
     * 默认激活的菜单项（用法同 Menu 非受控）
     * @en Default activated menu item (same usage as Menu uncontrolled)
     * @defaultValue []
     */
    defaultSelectedKeys?: Array<string>;
    /**
     * 激活的菜单项（用法同 Menu 受控）
     * @en Activated menu items (used as Menu controlled)
     * @defaultValue undefined
     */
    selectedKeys?: string | Array<string>;
    /**
     * 菜单的选择模式，同 Menu
     * @en Menu selection mode, same as Menu
     * @defaultValue undefined
     */
    selectMode?: 'single' | 'multiple';
    /**
     * 点击菜单项后的回调，同 Menu
     * @en The callback after clicking a menu item is the same as Menu
     * @defaultValue function.noop
     */
    onItemClick?: (key: string, item: object, event: React.MouseEvent<HTMLElement>) => void;
    /**
     * 选择菜单后的回调，同 Menu
     * @en Callback after menu selection, same as Menu
     * @defaultValue function.noop
     */
    onSelect?: (selectedKeys: Array<string>, item: object, extra: object) => void;
    /**
     * 菜单属性透传
     * @en Menu attribute passthrough
     * @defaultValue undefined
     */
    menuProps?: MenuProps;
}

export interface MenuButtonState {
    selectedKeys?: Array<string>;
    visible?: boolean;
}
