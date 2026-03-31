import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { ItemProps } from './types';
/**
 * Nav.Item
 * @remarks 继承自 `Menu.Item` 的能力请查看 `Menu.Item` 文档
 */
declare class Item extends Component<ItemProps> {
    static menuChildType: string;
    static propTypes: {
        /**
         * 自定义图标，可以使用 Icon 的 type，也可以使用组件 `<Icon type="icon type" />`
         */
        icon: PropTypes.Requireable<NonNullable<PropTypes.ReactNodeLike>>;
        /**
         * 导航内容
         */
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        parentMode: PropTypes.Requireable<string>;
    };
    static contextTypes: {
        prefix: PropTypes.Requireable<string>;
        iconOnly: PropTypes.Requireable<boolean>;
        iconOnlyWidth: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        iconTextOnly: PropTypes.Requireable<boolean>;
        hasTooltip: PropTypes.Requireable<boolean>;
    };
    render(): React.JSX.Element;
}
export default Item;
