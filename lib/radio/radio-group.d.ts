import React, { Component, type ChangeEvent } from 'react';
import PropTypes from 'prop-types';
import type { GroupProps, RadioValue } from './types';
export interface GroupState {
    value: RadioValue | undefined;
}
declare class RadioGroup extends Component<GroupProps, GroupState> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        name: PropTypes.Requireable<string>;
        value: PropTypes.Requireable<NonNullable<string | number | boolean | null | undefined>>;
        defaultValue: PropTypes.Requireable<NonNullable<string | number | boolean | null | undefined>>;
        component: PropTypes.Requireable<NonNullable<string | ((...args: any[]) => any) | null | undefined>>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        disabled: PropTypes.Requireable<boolean>;
        shape: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<string>;
        dataSource: PropTypes.Requireable<NonNullable<(string | null | undefined)[] | (object | null | undefined)[] | null | undefined>>;
        children: PropTypes.Requireable<NonNullable<PropTypes.ReactElementLike | (PropTypes.ReactElementLike | null | undefined)[] | null | undefined>>;
        direction: PropTypes.Requireable<string>;
        isPreview: PropTypes.Requireable<boolean>;
        renderPreview: PropTypes.Requireable<(...args: any[]) => any>;
        locale: PropTypes.Requireable<object>;
        defaultPropsConfig: PropTypes.Requireable<object>;
        errorBoundary: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
        pure: PropTypes.Requireable<boolean>;
        warning: PropTypes.Requireable<boolean>;
        rtl: PropTypes.Requireable<boolean>;
        device: PropTypes.Requireable<string>;
        popupContainer: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        dataSource: never[];
        size: string;
        onChange: () => void;
        prefix: string;
        component: string;
        direction: string;
        isPreview: boolean;
    };
    static childContextTypes: {
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        __group__: PropTypes.Requireable<boolean>;
        isButton: PropTypes.Requireable<boolean>;
        selectedValue: PropTypes.Requireable<NonNullable<string | number | boolean | null | undefined>>;
        disabled: PropTypes.Requireable<boolean>;
    };
    static displayName: string;
    radioRefs: unknown[];
    hasFocus: boolean;
    constructor(props: GroupProps);
    static getDerivedStateFromProps(props: GroupProps, state: GroupState): {
        value: RadioValue | undefined;
    } | null;
    getChildContext(): {
        __group__: boolean;
        isButton: boolean;
        onChange: (currentValue: RadioValue, e: React.ChangeEvent<HTMLInputElement>) => void;
        selectedValue: RadioValue | undefined;
        disabled: boolean | undefined;
    };
    onChange(currentValue: RadioValue, e: ChangeEvent<HTMLInputElement>): void;
    focus(): void;
    saveRadioRef: (el: unknown, index: number) => void;
    render(): React.JSX.Element;
}
export type { RadioGroup };
declare const _default: typeof RadioGroup;
export default _default;
