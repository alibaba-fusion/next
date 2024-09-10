import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { ListProps } from './types';
/**
 * List
 */
declare class List extends Component<ListProps> {
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
        locale: Partial<{
            empty: string;
        }> & {
            momentLocale?: string | undefined;
        };
        renderItem: (item: object) => object;
        loading: boolean;
    };
    static displayName: string;
    render(): React.JSX.Element;
}
declare const _default: import('../config-provider/types').ConfiguredComponentClass<
    ListProps & import('../config-provider/types').ComponentCommonProps,
    List,
    {}
>;
export default _default;
