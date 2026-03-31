import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import type { DropdownProps, DropdownState } from './types';
export default class Dropdown extends Component<DropdownProps, DropdownState> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        pure: PropTypes.Requireable<boolean>;
        rtl: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        visible: PropTypes.Requireable<boolean>;
        defaultVisible: PropTypes.Requireable<boolean>;
        onVisibleChange: PropTypes.Requireable<(...args: any[]) => any>;
        trigger: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        triggerType: PropTypes.Requireable<NonNullable<string | any[] | null | undefined>>;
        disabled: PropTypes.Requireable<boolean>;
        align: PropTypes.Requireable<string>;
        offset: PropTypes.Requireable<any[]>;
        delay: PropTypes.Requireable<number>;
        autoFocus: PropTypes.Requireable<boolean>;
        hasMask: PropTypes.Requireable<boolean>;
        autoClose: PropTypes.Requireable<boolean>;
        cache: PropTypes.Requireable<boolean>;
        animation: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
    };
    static defaultProps: {
        prefix: string;
        pure: boolean;
        defaultVisible: boolean;
        autoClose: boolean;
        onVisibleChange: () => void;
        triggerType: string;
        disabled: boolean;
        align: string;
        offset: number[];
        delay: number;
        hasMask: boolean;
        cache: boolean;
        onPosition: () => void;
    };
    static displayName: string;
    constructor(props: DropdownProps);
    static getDerivedStateFromProps(nextProps: DropdownProps): Partial<DropdownState>;
    getVisible(
        props?: Readonly<DropdownProps> &
            Readonly<{
                children?: React.ReactNode;
            }>
    ): boolean | undefined;
    onMenuClick(): void;
    onVisibleChange(visible: boolean, from: string): void;
    onTriggerKeyDown(): void;
    render(): React.JSX.Element;
}
