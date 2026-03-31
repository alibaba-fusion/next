import React, { Component, type MouseEvent, type KeyboardEvent, type ReactNode } from 'react';
import PropTypes from 'prop-types';
import { type ClassPropsWithDefault } from '../../util';
import type { ChildItemPropsInMenu, ItemProps as NormalItemProps } from '../types';
export type ItemProps = Omit<NormalItemProps, 'onSelect' | 'inlineIndent'>;
export type ItemWithDefaultsProps = ClassPropsWithDefault<ItemProps, typeof Item.defaultProps>;
export type ItemInMenuProps = ChildItemPropsInMenu<ItemWithDefaultsProps>;
export default class Item extends Component<ItemProps> {
    static propTypes: {
        _key: PropTypes.Requireable<string>;
        level: PropTypes.Requireable<number>;
        inlineLevel: PropTypes.Requireable<number>;
        groupIndent: PropTypes.Requireable<number>;
        root: PropTypes.Requireable<object>;
        menu: PropTypes.Requireable<any>;
        parent: PropTypes.Requireable<object>;
        parentMode: PropTypes.Requireable<string>;
        type: PropTypes.Requireable<string>;
        component: PropTypes.Requireable<string>;
        disabled: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        onKeyDown: PropTypes.Requireable<(...args: any[]) => any>;
        needIndent: PropTypes.Requireable<boolean>;
        replaceClassName: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        component: string;
        groupIndent: number;
        replaceClassName: boolean;
        needIndent: boolean;
    };
    readonly props: ItemWithDefaultsProps;
    itemNode: HTMLElement;
    menuNode: HTMLElement | undefined | null;
    lastFocusedKey: string | undefined | null;
    constructor(props: ItemProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    focusable(): boolean;
    getFocused(): boolean;
    setFocus(): void;
    handleClick(e: MouseEvent | KeyboardEvent): void;
    handleKeyDown(e: KeyboardEvent): void;
    getTitle(children: ReactNode): string | undefined;
    render(): React.JSX.Element;
}
