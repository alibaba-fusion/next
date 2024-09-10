import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { CardActionsProps } from './types';
declare class CardActions extends Component<CardActionsProps> {
    static displayName: string;
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
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
    CardActionsProps & import('../config-provider/types').ComponentCommonProps,
    CardActions,
    {}
>;
export default _default;
