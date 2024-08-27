import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { GroupProps } from './types';
/**
 * Nav.Group
 * @remarks 继承自 `Menu.Group` 的能力请查看 `Menu.Group` 文档
 */
declare class Group extends Component<GroupProps> {
    static menuChildType: string;
    static propTypes: {
        /**
         * 自定义类名
         */
        className: PropTypes.Requireable<string>;
        /**
         * 标签内容
         */
        label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /**
         * 导航项和子导航
         */
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    static contextTypes: {
        prefix: PropTypes.Requireable<string>;
        iconOnly: PropTypes.Requireable<boolean>;
    };
    render(): React.JSX.Element;
}
export default Group;
