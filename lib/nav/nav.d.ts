import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import type { NavProps } from './types';
type MenuInstance = InstanceType<typeof Menu>;
/**
 * Nav
 * @remarks 继承自 `Menu` 的能力请查看 `Menu` 文档
 */
declare class Nav extends Component<NavProps> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        pure: PropTypes.Requireable<boolean>;
        rtl: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        type: PropTypes.Requireable<string>;
        direction: PropTypes.Requireable<string>;
        hozAlign: PropTypes.Requireable<string>;
        activeDirection: PropTypes.Requireable<string | null>;
        mode: PropTypes.Requireable<string>;
        triggerType: PropTypes.Requireable<string>;
        inlineIndent: PropTypes.Requireable<number>;
        defaultOpenAll: PropTypes.Requireable<boolean>;
        openMode: PropTypes.Requireable<string>;
        selectedKeys: PropTypes.Requireable<NonNullable<string | any[] | null | undefined>>;
        defaultSelectedKeys: PropTypes.Requireable<NonNullable<string | any[] | null | undefined>>;
        onSelect: PropTypes.Requireable<(...args: any[]) => any>;
        popupAlign: PropTypes.Requireable<string>;
        popupClassName: PropTypes.Requireable<string>;
        iconOnly: PropTypes.Requireable<boolean>;
        iconOnlyWidth: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        iconTextOnly: PropTypes.Requireable<boolean>;
        hasArrow: PropTypes.Requireable<boolean>;
        hasTooltip: PropTypes.Requireable<boolean>;
        header: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        footer: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        embeddable: PropTypes.Requireable<boolean>;
        popupProps: PropTypes.Requireable<object>;
    };
    static defaultProps: {
        prefix: string;
        pure: boolean;
        type: string;
        direction: string;
        hozAlign: string;
        mode: string;
        triggerType: string;
        inlineIndent: number;
        defaultOpenAll: boolean;
        openMode: string;
        defaultSelectedKeys: never[];
        popupAlign: string;
        hasTooltip: boolean;
        embeddable: boolean;
        hasArrow: boolean;
        popupProps: {};
    };
    static childContextTypes: {
        prefix: PropTypes.Requireable<string>;
        mode: PropTypes.Requireable<string>;
        iconOnly: PropTypes.Requireable<boolean>;
        iconOnlyWidth: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        iconTextOnly: PropTypes.Requireable<boolean>;
        hasTooltip: PropTypes.Requireable<boolean>;
        hasArrow: PropTypes.Requireable<boolean>;
    };
    static contextTypes: {
        isCollapse: PropTypes.Requireable<boolean>;
    };
    static displayName: string;
    menu: MenuInstance | null;
    getChildContext(): {
        prefix: string | undefined;
        mode: "inline" | "popup" | undefined;
        iconOnly: any;
        iconOnlyWidth: string | number | undefined;
        iconTextOnly: boolean | undefined;
        hasTooltip: boolean | undefined;
        hasArrow: boolean | undefined;
    };
    getMenuRef: React.LegacyRef<MenuInstance>;
    render(): React.JSX.Element;
}
declare const _default: import("../config-provider/types").ConfiguredComponentClass<NavProps & import("../config-provider/types").ComponentCommonProps, Nav, {}>;
export default _default;
