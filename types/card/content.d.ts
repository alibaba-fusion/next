import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { CardContentProps } from './types';
declare class CardContent extends Component<CardContentProps> {
    static displayName: string;
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
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
declare const _default: import('../config-provider/types').ConfiguredComponentClass<
    CardContentProps & import('../config-provider/types').ComponentCommonProps,
    CardContent,
    {}
>;
export default _default;
