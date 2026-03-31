import type * as React from 'react';
import type Menu from '../menu';
import type { CommonProps } from '../util';
import type { ButtonProps } from '../button';
import type { PopupProps } from '../overlay';
type MenuProps = React.ComponentPropsWithRef<typeof Menu>;
/**
 * @api MenuButton
 */
export interface MenuButtonProps extends Omit<ButtonProps, 'onSelect'>, CommonProps {
    /**
     * 按钮上的文本内容
     * @en The text in button
     */
    label?: React.ReactNode;
    /**
     * 弹层是否与按钮宽度相同
     * @en If popup width equals to button width
     * @defaultValue true
     */
    autoWidth?: boolean;
    /**
     * 弹层触发方式
     * @en Trigger type of popup
     * @defaultValue 'click'
     */
    popupTriggerType?: 'click' | 'hover';
    /**
     * 弹层容器
     * @en Container of popup
     */
    popupContainer?: string | HTMLElement | ((target: HTMLElement) => HTMLElement);
    /**
     * 弹层展开状态
     * @en Visible state of popup
     */
    visible?: boolean;
    /**
     * 弹层默认是否展开
     * @en Default visible state of popup
     */
    defaultVisible?: boolean;
    /**
     * 弹层在显示和隐藏触发的事件
     * @en Callback when visible state changes
     */
    onVisibleChange?: (visible: boolean, type: string) => void;
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
     * 弹层属性透传
     * @en Props of popup
     */
    popupProps?: PopupProps;
    /**
     * 菜单是否跟随滚动
     * @en follow Trigger or not
     */
    followTrigger?: boolean;
    /**
     * 默认激活的菜单项（用法同 Menu 非受控）
     * @en Default selected items, as Menu
     * @defaultValue []
     */
    defaultSelectedKeys?: Array<string>;
    /**
     * 激活的菜单项（用法同 Menu 受控）
     * @en Selected items, as Menu
     */
    selectedKeys?: string | Array<string>;
    /**
     * 菜单的选择模式，同 Menu
     * @en Select mode of menu, see Menu
     */
    selectMode?: 'single' | 'multiple';
    /**
     * 点击菜单项后的回调，同 Menu
     * @en Callback when click the menu item, see Menu
     * @param key - 点击的菜单项的 key 值 - key of clicked menu item
     * @param item - 点击的菜单项对象 - clicked menu item instance
     * @param event - 事件对象 - Event object
     */
    onItemClick?: MenuProps['onItemClick'];
    /**
     * 选择菜单后的回调，同 Menu
     * @en Callback when select the menu, see Menu
     * @param selectedKeys - 选中的所有菜单项的值 - keys of selected menu items
     * @param item - 选中或取消选中的菜单项 - current operation menu item
     * @param extra - 选中时的额外参数 - extra params
     */
    onSelect?: MenuProps['onSelect'];
    /**
     * 菜单属性透传
     * @en Props of menu
     */
    menuProps?: MenuProps;
}
export interface MenuButtonState {
    selectedKeys: MenuButtonProps['selectedKeys'];
    visible: boolean | undefined;
}
export {};
