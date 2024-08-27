import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { ListItemProps } from './types';
/**
 * List.Item
 */
declare class ListItem extends Component<ListItemProps> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        /**
         * 列表元素的标题
         */
        title: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /**
         * 列表元素的描述内容
         */
        description: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /**
         * 列表元素的头像 / 图标 / 图片内容
         */
        media: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /**
         * 额外内容
         */
        extra: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        className: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        prefix: string;
    };
    render(): React.JSX.Element;
}
export type { ListItem };
declare const _default: import('../config-provider/types').ConfiguredComponentClass<
    ListItemProps & import('../config-provider/types').ComponentCommonProps,
    ListItem,
    {}
>;
export default _default;
