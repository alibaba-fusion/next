import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { CardMediaProps } from './types';
declare class CardMedia extends Component<CardMediaProps> {
    static displayName: string;
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        /**
         * 设置标签类型
         */
        component: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        /**
         * 背景图片地址
         */
        image: PropTypes.Requireable<string>;
        /**
         * 媒体源文件地址
         */
        src: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        prefix: string;
        component: string;
        style: {};
    };
    render(): React.JSX.Element;
}
declare const _default: import('../config-provider/types').ConfiguredComponentClass<
    CardMediaProps & import('../config-provider/types').ComponentCommonProps,
    CardMedia,
    {}
>;
export default _default;
