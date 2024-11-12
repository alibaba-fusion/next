import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { CardDividerProps } from './types';
declare class CardDivider extends Component<CardDividerProps> {
    static displayName: string;
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        /**
         * 设置标签类型
         */
        component: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        /**
         * 分割线是否向内缩进
         */
        inset: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        prefix: string;
        component: string;
    };
    render(): React.JSX.Element;
}
declare const _default: import('../config-provider/types').ConfiguredComponentClass<
    CardDividerProps & import('../config-provider/types').ComponentCommonProps,
    CardDivider,
    {}
>;
export default _default;
