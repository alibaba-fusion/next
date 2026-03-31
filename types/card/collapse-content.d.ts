import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { CardCollapseContentProps } from './types';
export interface CardCollapseContentState {
    needMore: boolean;
    expand: boolean;
    contentHeight: string | number;
}
declare class CardCollapseContent extends Component<
    CardCollapseContentProps,
    CardCollapseContentState
> {
    static displayName: string;
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        /**
         * 内容区域的固定高度
         */
        contentHeight: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        locale: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    static defaultProps: {
        prefix: string;
        contentHeight: number;
        locale: Partial<{
            expand: string;
            fold: string;
        }> & {
            momentLocale?: string | undefined;
        };
    };
    content: HTMLDivElement;
    footer: HTMLDivElement;
    constructor(props: CardCollapseContentProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    handleToggle: () => void;
    _setNeedMore(): void;
    _setContentHeight(): void;
    _getNodeChildrenHeight(node?: HTMLDivElement): number;
    _contentRefHandler: (ref: HTMLDivElement) => void;
    saveFooter: (ref: HTMLDivElement) => void;
    render(): React.JSX.Element;
}
declare const _default: import('../config-provider/types').ConfiguredComponentClass<
    CardCollapseContentProps & import('../config-provider/types').ComponentCommonProps,
    CardCollapseContent,
    {}
>;
export default _default;
