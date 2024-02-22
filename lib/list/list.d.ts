import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListProps } from './types';
/**
 * List
 */
declare class List<DataItem = unknown> extends Component<ListProps<DataItem>> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        rtl: PropTypes.Requireable<boolean>;
        header: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        footer: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        size: PropTypes.Requireable<string>;
        divider: PropTypes.Requireable<boolean>;
        dataSource: PropTypes.Requireable<any[]>;
        renderItem: PropTypes.Requireable<(...args: any[]) => any>;
        loading: PropTypes.Requireable<boolean>;
        loadingComponent: PropTypes.Requireable<(...args: any[]) => any>;
        emptyContent: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        className: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<any>;
        locale: PropTypes.Requireable<object>;
    };
    static defaultProps: {
        rtl: boolean;
        size: string;
        divider: boolean;
        prefix: string;
        locale: {
            empty: string;
        };
        renderItem: (item: object) => object;
        loading: boolean;
    };
    render(): React.JSX.Element;
}
export type { List };
declare const _default: import("../config-provider/types").ConfiguredComponentClass<ListProps<unknown> & import("../config-provider/types").ComponentCommonProps, List<unknown>, {}>;
export default _default;
