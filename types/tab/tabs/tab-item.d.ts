import React from 'react';
import PropTypes from 'prop-types';
import type { TabItemProps, ItemProps } from '../types';
/** Tab.Item */
declare class TabItem extends React.Component<ItemProps> {
    static displayName: string;
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        title: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        closeable: PropTypes.Requireable<boolean>;
        disabled: PropTypes.Requireable<boolean>;
        active: PropTypes.Requireable<boolean>;
        lazyLoad: PropTypes.Requireable<boolean>;
        unmountInactiveTabs: PropTypes.Requireable<boolean>;
        children: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        prefix: string;
        closeable: boolean;
    };
    _actived: boolean;
    readonly props: TabItemProps;
    render(): React.JSX.Element | null;
}
declare const _default: typeof TabItem;
export default _default;
