import React, { Component, type ComponentRef, type ReactElement, type ReactNode } from 'react';
import PropTypes from 'prop-types';
import { type PopupProps } from '../../overlay';
import { type ClassPropsWithDefault } from '../../util';
import type { ChildItemPropsInMenu, ItemProps, PopupItemProps } from '../types';
declare const Popup: typeof import('../../overlay').Popup;
export type PopupItemWithDefaultsProps = ClassPropsWithDefault<
    PopupItemProps,
    typeof PopupItem.defaultProps
>;
export type PopupItemInMenuProps = ChildItemPropsInMenu<PopupItemWithDefaultsProps>;
export default class PopupItem extends Component<PopupItemProps> {
    static menuChildType: string;
    static propTypes: {
        _key: PropTypes.Requireable<string>;
        root: PropTypes.Requireable<object>;
        level: PropTypes.Requireable<number>;
        hasSubMenu: PropTypes.Requireable<boolean>;
        noIcon: PropTypes.Requireable<boolean>;
        rtl: PropTypes.Requireable<boolean>;
        selectable: PropTypes.Requireable<boolean>;
        /**
         * 标签内容
         */
        label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /**
         * 自定义弹层内容
         */
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        className: PropTypes.Requireable<string>;
        /**
         * 子菜单打开的触发行为
         */
        triggerType: PropTypes.Requireable<string>;
        align: PropTypes.Requireable<string>;
        autoWidth: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        selectable: boolean;
        noIcon: boolean;
    };
    popup: ComponentRef<typeof Popup> | null;
    popupProps: PopupProps;
    popupNode: HTMLElement;
    readonly props: PopupItemWithDefaultsProps;
    constructor(props: PopupItemProps);
    getPopup(ref: ComponentRef<typeof Popup> | null): void;
    getOpen(): boolean;
    getPopupProps(): PopupProps;
    handleOpen: NonNullable<PopupProps['onVisibleChange']>;
    handlePopupOpen(): null | undefined;
    handlePopupClose(): void;
    renderItem(
        selectable: boolean | undefined,
        children: ReactNode,
        others: ItemProps
    ): React.JSX.Element;
    renderPopup(
        trigger: ReactElement,
        triggerType: PopupProps['triggerType'],
        positionProps: PopupProps,
        children: ReactNode
    ): React.JSX.Element;
    render(): React.JSX.Element;
}
export {};
