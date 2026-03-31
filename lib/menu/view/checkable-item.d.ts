import React, { Component, type KeyboardEvent, type MouseEvent } from 'react';
import PropTypes from 'prop-types';
import { type ClassPropsWithDefault } from '../../util';
import type { CheckableItemProps, ChildItemPropsInMenu } from '../types';
export type CheckableItemWithDefaultsProps = ClassPropsWithDefault<CheckableItemProps, typeof CheckableItem.defaultProps>;
export type CheckableItemInMenuProps = ChildItemPropsInMenu<CheckableItemWithDefaultsProps>;
export default class CheckableItem extends Component<CheckableItemProps> {
    static propTypes: {
        _key: PropTypes.Requireable<string>;
        root: PropTypes.Requireable<object>;
        disabled: PropTypes.Requireable<boolean>;
        inlineIndent: PropTypes.Requireable<number>;
        checked: PropTypes.Requireable<boolean>;
        indeterminate: PropTypes.Requireable<boolean>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        checkType: PropTypes.Requireable<string>;
        checkDisabled: PropTypes.Requireable<boolean>;
        helper: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        onKeyDown: PropTypes.Requireable<(...args: any[]) => any>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        id: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        disabled: boolean;
        checked: boolean;
        indeterminate: boolean;
        checkType: string;
        checkDisabled: boolean;
        onChange: {};
    };
    readonly props: CheckableItemWithDefaultsProps;
    id: string;
    constructor(props: CheckableItemProps);
    stopPropagation(e: MouseEvent): void;
    handleCheck(e: MouseEvent | KeyboardEvent): void;
    handleKeyDown(e: KeyboardEvent): void;
    handleClick(e: MouseEvent | KeyboardEvent): void;
    renderCheck(): React.JSX.Element;
    render(): React.JSX.Element;
}
