import React, { Component, type MouseEvent, type KeyboardEvent, type ReactNode } from 'react';
import PropTypes from 'prop-types';
import { type ClassPropsWithDefault } from '../../util';
import type { ChildPropsInMenu, SubMenuProps } from '../types';
export type SubMenuWithDefaultsProps = ClassPropsWithDefault<
    SubMenuProps,
    typeof SubMenu.defaultProps
>;
export type SubMenuInMenuProps = ChildPropsInMenu<SubMenuWithDefaultsProps>;
export default class SubMenu extends Component<SubMenuProps> {
    static menuChildType: string;
    static propTypes: {
        _key: PropTypes.Requireable<string>;
        root: PropTypes.Requireable<object>;
        level: PropTypes.Requireable<number>;
        inlineLevel: PropTypes.Requireable<number>;
        groupIndent: PropTypes.Requireable<number>;
        label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        selectable: PropTypes.Requireable<boolean>;
        mode: PropTypes.Requireable<string>;
        noIcon: PropTypes.Requireable<boolean>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        onMouseEnter: PropTypes.Requireable<(...args: any[]) => any>;
        onMouseLeave: PropTypes.Requireable<(...args: any[]) => any>;
        subMenuContentClassName: PropTypes.Requireable<string>;
        triggerType: PropTypes.Requireable<string>;
        align: PropTypes.Requireable<string>;
        parentMode: PropTypes.Requireable<string>;
        parent: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        groupIndent: number;
        noIcon: boolean;
        selectable: boolean;
    };
    readonly props: SubMenuWithDefaultsProps;
    itemNode: HTMLElement;
    constructor(props: SubMenuProps);
    componentDidMount(): void;
    afterLeave(): void;
    getOpen(): boolean;
    handleMouseEnter(e: MouseEvent): void;
    handleMouseLeave(e: MouseEvent): void;
    handleClick(e: MouseEvent | KeyboardEvent): void;
    handleOpen(open: boolean, triggerType?: string, e?: Event): void;
    passParentToChildren(children: ReactNode): {}[] | null | undefined;
    renderInline(): React.JSX.Element;
    renderPopup(): React.JSX.Element;
    render(): React.JSX.Element;
}
