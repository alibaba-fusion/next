import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { PopupItemProps } from './types';
/**
 * Nav.PopupItem
 * @remarks 继承自 `Menu.PopupItem` 的能力请查看 `Menu.PopupItem` 文档
 */
declare class PopupItem extends Component<PopupItemProps> {
    static menuChildType: string;
    static propTypes: {
        className: PropTypes.Requireable<string>;
        icon: PropTypes.Requireable<NonNullable<PropTypes.ReactNodeLike>>;
        label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    static contextTypes: {
        prefix: PropTypes.Requireable<string>;
        iconOnly: PropTypes.Requireable<boolean>;
        iconOnlyWidth: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        hasArrow: PropTypes.Requireable<boolean>;
    };
    render(): React.JSX.Element;
}
export default PopupItem;
