import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { CardHeaderProps } from './types';
declare class CardHeader extends Component<CardHeaderProps> {
    static displayName: string;
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        /**
         * 卡片的标题
         */
        title: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /**
         * 卡片的副标题
         */
        subTitle: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /**
         * 标题区域的用户自定义内容
         */
        extra: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /**
         * 设置标签类型
         */
        component: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        className: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        prefix: string;
        component: string;
    };
    render(): React.JSX.Element;
}
declare const _default: import("../config-provider/types").ConfiguredComponentClass<CardHeaderProps & import("../config-provider/types").ComponentCommonProps, CardHeader, {}>;
export default _default;
