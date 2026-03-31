import * as React from 'react';
import * as PropTypes from 'prop-types';
import Menu, { type MenuProps } from '../menu';
import type { MenuButtonProps, MenuButtonState } from './types';
/**
 * MenuButton
 */
declare class MenuButton extends React.Component<MenuButtonProps, MenuButtonState> {
    static Item: typeof import('../menu/view/selectable-item').default;
    static Group: typeof import('../menu/view/group').default;
    static Divider: typeof import('../menu/view/divider').default;
    static displayName: string;
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        autoWidth: PropTypes.Requireable<boolean>;
        popupTriggerType: PropTypes.Requireable<string>;
        popupContainer: PropTypes.Requireable<any>;
        visible: PropTypes.Requireable<boolean>;
        defaultVisible: PropTypes.Requireable<boolean>;
        onVisibleChange: PropTypes.Requireable<(...args: any[]) => any>;
        popupStyle: PropTypes.Requireable<object>;
        popupClassName: PropTypes.Requireable<string>;
        popupProps: PropTypes.Requireable<object>;
        followTrigger: PropTypes.Requireable<boolean>;
        defaultSelectedKeys: PropTypes.Requireable<any[]>;
        selectedKeys: PropTypes.Requireable<any[]>;
        selectMode: PropTypes.Requireable<string>;
        onItemClick: PropTypes.Requireable<(...args: any[]) => any>;
        onSelect: PropTypes.Requireable<(...args: any[]) => any>;
        menuProps: PropTypes.Requireable<object>;
        style: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        prefix: string;
        autoWidth: boolean;
        popupTriggerType: string;
        onVisibleChange: () => void;
        onItemClick: () => void;
        onSelect: () => void;
        defaultSelectedKeys: never[];
        menuProps: {};
    };
    menu: HTMLElement | undefined;
    constructor(props: MenuButtonProps);
    static getDerivedStateFromProps(props: MenuButtonProps): Partial<MenuButtonState>;
    clickMenuItem: MenuProps['onItemClick'];
    selectMenu: MenuProps['onSelect'];
    onPopupOpen: () => void;
    onPopupVisibleChange: (visible: boolean, type: string) => void;
    _menuRefHandler: (ref: React.ComponentRef<typeof Menu> | null) => void;
    render(): React.JSX.Element;
}
export type { MenuButtonProps };
declare const _default: import('../config-provider/types').ConfiguredComponentClass<
    MenuButtonProps & import('../config-provider/types').ComponentCommonProps,
    MenuButton,
    {}
> & {
    Group: typeof import('../menu/view/group').default;
    Item: typeof import('../menu/view/selectable-item').default;
    Divider: typeof import('../menu/view/divider').default;
};
export default _default;
