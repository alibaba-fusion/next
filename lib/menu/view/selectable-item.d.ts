import React, { Component, type KeyboardEvent, type MouseEvent } from 'react';
import PropTypes from 'prop-types';
import { type ClassPropsWithDefault } from '../../util';
import type { ChildItemPropsInMenu, ItemProps } from '../types';
export type ItemWithDefaultsProps = ClassPropsWithDefault<ItemProps, typeof SelectableItem.defaultProps>;
export type ItemInMenuProps = ChildItemPropsInMenu<ItemWithDefaultsProps>;
export default class SelectableItem extends Component<ItemProps> {
    static menuChildType: string;
    static propTypes: {
        _key: PropTypes.Requireable<string>;
        root: PropTypes.Requireable<object>;
        selected: PropTypes.Requireable<boolean>;
        onSelect: PropTypes.Requireable<(...args: any[]) => any>;
        inlineIndent: PropTypes.Requireable<number>;
        disabled: PropTypes.Requireable<boolean>;
        helper: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        className: PropTypes.Requireable<string>;
        onKeyDown: PropTypes.Requireable<(...args: any[]) => any>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        needIndent: PropTypes.Requireable<boolean>;
        hasSelectedIcon: PropTypes.Requireable<boolean>;
        isSelectIconRight: PropTypes.Requireable<boolean>;
        icons: PropTypes.Requireable<object>;
    };
    static defaultProps: {
        disabled: boolean;
        needIndent: boolean;
        icons: {};
    };
    readonly props: ItemWithDefaultsProps;
    constructor(props: ItemProps);
    getSelected(): boolean;
    handleSelect(e: MouseEvent | KeyboardEvent): void;
    handleKeyDown(e: KeyboardEvent): void;
    handleClick(e: MouseEvent): void;
    renderSelectedIcon(selected: boolean): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
    render(): React.JSX.Element;
}
