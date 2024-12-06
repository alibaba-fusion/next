import React, { type KeyboardEvent, type MouseEvent } from 'react';
import PropTypes from 'prop-types';
import type { SwitchProps, SwitchState } from './types';
declare class Switch extends React.Component<SwitchProps, SwitchState> {
    static displayName: string;
    static propTypes: {
        name: PropTypes.Requireable<string>;
        prefix: PropTypes.Requireable<string>;
        rtl: PropTypes.Requireable<boolean>;
        pure: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        checkedChildren: PropTypes.Requireable<any>;
        unCheckedChildren: PropTypes.Requireable<any>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        checked: PropTypes.Requireable<boolean>;
        defaultChecked: PropTypes.Requireable<boolean>;
        disabled: PropTypes.Requireable<boolean>;
        loading: PropTypes.Requireable<boolean>;
        size: PropTypes.Requireable<string>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        onKeyDown: PropTypes.Requireable<(...args: any[]) => any>;
        isPreview: PropTypes.Requireable<boolean>;
        renderPreview: PropTypes.Requireable<(...args: any[]) => any>;
        autoWidth: PropTypes.Requireable<boolean>;
        locale: PropTypes.Requireable<object>;
        defaultPropsConfig: PropTypes.Requireable<object>;
        errorBoundary: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
        warning: PropTypes.Requireable<boolean>;
        device: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<any>;
        popupContainer: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        prefix: string;
        size: string;
        disabled: boolean;
        defaultChecked: boolean;
        isPreview: boolean;
        loading: boolean;
        readOnly: boolean;
        autoWidth: boolean;
        onChange: () => void;
        locale: Partial<{
            on: string;
            off: string;
        }> & {
            momentLocale?: string | undefined;
        };
    };
    static getDerivedStateFromProps(
        props: SwitchProps,
        state: SwitchState
    ): {
        checked: boolean;
    } | null;
    readonly props: SwitchProps & Required<Pick<SwitchProps, keyof typeof Switch.defaultProps>>;
    constructor(props: SwitchProps);
    onChange(ev: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>): void;
    onKeyDown(e: KeyboardEvent<HTMLDivElement>): void;
    render(): React.JSX.Element;
}
export type { SwitchProps, SwitchLocale } from './types';
declare const _default: import('../config-provider/types').ConfiguredComponentClass<
    SwitchProps & import('../config-provider/types').ComponentCommonProps,
    Switch,
    {}
>;
export default _default;
