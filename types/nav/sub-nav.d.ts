import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { SubNavProps } from './types';
/**
 * Nav.SubNav
 * @remarks 继承自 `Menu.SubMenu` 的能力请查看 `Menu.SubMenu` 文档
 */
declare class SubNav extends Component<SubNavProps> {
    static menuChildType: string;
    static propTypes: {
        className: PropTypes.Requireable<string>;
        icon: PropTypes.Requireable<NonNullable<PropTypes.ReactNodeLike>>;
        label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        selectable: PropTypes.Requireable<boolean>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        noIcon: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        selectable: boolean;
    };
    static contextTypes: {
        prefix: PropTypes.Requireable<string>;
        mode: PropTypes.Requireable<string>;
        iconOnly: PropTypes.Requireable<boolean>;
        iconOnlyWidth: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        hasArrow: PropTypes.Requireable<boolean>;
    };
    render(): React.JSX.Element;
}
export default SubNav;
