import React, { Component, type KeyboardEvent } from 'react';
import PropTypes from 'prop-types';
import type { ItemProps, ItemState } from './types';
export default class CascaderMenuItem extends Component<ItemProps, ItemState> {
    static menuChildType: string;
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        disabled: PropTypes.Requireable<boolean>;
        selected: PropTypes.Requireable<boolean>;
        onSelect: PropTypes.Requireable<(...args: any[]) => any>;
        expanded: PropTypes.Requireable<boolean>;
        canExpand: PropTypes.Requireable<boolean>;
        menu: PropTypes.Requireable<any>;
        expandTriggerType: PropTypes.Requireable<string>;
        onExpand: PropTypes.Requireable<(...args: any[]) => any>;
        onFold: PropTypes.Requireable<(...args: any[]) => any>;
        checkable: PropTypes.Requireable<boolean>;
        checked: PropTypes.Requireable<boolean>;
        indeterminate: PropTypes.Requireable<boolean>;
        checkboxDisabled: PropTypes.Requireable<boolean>;
        onCheck: PropTypes.Requireable<(...args: any[]) => any>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    constructor(props: ItemProps);
    addLoading(): void;
    removeLoading(): void;
    setLoadingIfNeed(p?: Promise<unknown> | void): void;
    handleExpand(focusedFirstChild: boolean): void;
    handleClick(): void;
    handleMouseEnter(): void;
    handleKeyDown(e: KeyboardEvent): void;
    render(): React.JSX.Element;
}
