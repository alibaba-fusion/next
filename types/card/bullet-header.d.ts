import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { CardBulletHeaderProps } from './types';
declare class CardBulletHeader extends Component<CardBulletHeaderProps> {
    static displayName: string;
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        title: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        subTitle: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        showTitleBullet: PropTypes.Requireable<boolean>;
        extra: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    static defaultProps: {
        prefix: string;
        showTitleBullet: boolean;
    };
    render(): React.JSX.Element | null;
}
declare const _default: import('../config-provider/types').ConfiguredComponentClass<
    CardBulletHeaderProps & import('../config-provider/types').ComponentCommonProps,
    CardBulletHeader,
    {}
>;
export default _default;
