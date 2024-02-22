import React, { Component, type LegacyRef, type ReactNodeArray } from 'react';
import PropTypes from 'prop-types';
import Menu, { type MenuProps } from '../menu';
import VirtualList from '../virtual-list';
import type { CascaderMenuProps } from './types';
export default class CascaderMenu extends Component<CascaderMenuProps> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        useVirtual: PropTypes.Requireable<boolean>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    virtualEl: VirtualList | null;
    menuEl: HTMLDivElement;
    componentDidMount(): void;
    scrollToSelectedItem(): void;
    renderMenu(items: ReactNodeArray, ref: LegacyRef<Menu> | undefined, props: MenuProps): React.JSX.Element;
    saveMenuRef: (ref: HTMLDivElement) => void;
    saveVirtualRef: (ref: VirtualList) => void;
    render(): React.JSX.Element;
}
