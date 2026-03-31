import React from 'react';
import PropTypes from 'prop-types';
import type { CollapseProps, DataItem, KeyType } from './types';
/** Collapse */
declare class Collapse extends React.Component<
    CollapseProps,
    {
        expandedKeys: KeyType[];
    }
> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        dataSource: PropTypes.Requireable<any[]>;
        defaultExpandedKeys: PropTypes.Requireable<any[]>;
        expandedKeys: PropTypes.Requireable<any[]>;
        onExpand: PropTypes.Requireable<(...args: any[]) => any>;
        disabled: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        accordion: PropTypes.Requireable<boolean>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        id: PropTypes.Requireable<string>;
        rtl: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        accordion: boolean;
        prefix: string;
        onExpand: () => void;
    };
    static contextTypes: {
        prefix: PropTypes.Requireable<string>;
    };
    constructor(props: CollapseProps);
    static getDerivedStateFromProps(props: CollapseProps): {
        expandedKeys: KeyType[];
    } | null;
    onItemClick(key: KeyType): void;
    genratePanelId(itemId: string | undefined, index: number): string | undefined;
    getProps(
        item: DataItem,
        index: number,
        key: KeyType
    ): {
        key: KeyType;
        title: React.ReactNode;
        isExpanded: boolean;
        disabled: boolean | undefined;
        id: string | undefined;
        onClick: (() => void) | null;
    };
    getItemsByDataSource(): React.JSX.Element[];
    getItemsByChildren():
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>[]
        | null
        | undefined;
    setExpandedKey(expandedKeys: KeyType[]): void;
    render(): React.JSX.Element;
}
declare const _default: import('../config-provider/types').ConfiguredComponentClass<
    CollapseProps & import('../config-provider/types').ComponentCommonProps,
    Collapse,
    {}
>;
export default _default;
