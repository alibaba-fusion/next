import React, { type ReactNode, Component } from 'react';
import PropTypes from 'prop-types';
import type { ItemProps } from './types';
/**
 * Breadcrumb.Item
 */
declare class Item extends Component<ItemProps> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        rtl: PropTypes.Requireable<boolean>;
        link: PropTypes.Requireable<string>;
        activated: PropTypes.Requireable<boolean>;
        separator: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        className: PropTypes.Requireable<any>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        prefix: string;
    };
    static _typeMark: string;
    static Separator({ prefix, children }: {
        prefix?: string;
        children: ReactNode;
    }): React.JSX.Element;
    render(): React.JSX.Element;
}
declare const _default: import("../config-provider/types").ConfiguredComponentClass<ItemProps & import("../config-provider/types").ComponentCommonProps, Item, {}> & {
    _typeMark: string;
    Separator: typeof Item.Separator;
};
export default _default;
