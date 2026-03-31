import React, { type ChangeEvent } from 'react';
import PropTypes from 'prop-types';
import UIState, { type UIStateState } from '../mixin-ui-state';
import type { RadioContext, RadioWithContextProps } from './types';
interface RadioState extends UIStateState {
    checked?: boolean;
}
declare class Radio extends UIState<RadioWithContextProps, RadioState> {
    static displayName: string;
    static propTypes: {
        className: PropTypes.Requireable<string>;
        id: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        checked: PropTypes.Requireable<boolean>;
        defaultChecked: PropTypes.Requireable<boolean>;
        label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        onMouseEnter: PropTypes.Requireable<(...args: any[]) => any>;
        onMouseLeave: PropTypes.Requireable<(...args: any[]) => any>;
        disabled: PropTypes.Requireable<boolean>;
        value: PropTypes.Requireable<NonNullable<string | number | boolean | null | undefined>>;
        name: PropTypes.Requireable<string>;
        isPreview: PropTypes.Requireable<boolean>;
        renderPreview: PropTypes.Requireable<(...args: any[]) => any>;
        prefix: PropTypes.Requireable<string>;
        locale: PropTypes.Requireable<object>;
        defaultPropsConfig: PropTypes.Requireable<object>;
        errorBoundary: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
        pure: PropTypes.Requireable<boolean>;
        warning: PropTypes.Requireable<boolean>;
        rtl: PropTypes.Requireable<boolean>;
        device: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<any>;
        popupContainer: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        onChange: () => void;
        onMouseLeave: () => void;
        onMouseEnter: () => void;
        tabIndex: number;
        prefix: string;
        isPreview: boolean;
    };
    static contextTypes: {
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        __group__: PropTypes.Requireable<boolean>;
        isButton: PropTypes.Requireable<boolean>;
        selectedValue: PropTypes.Requireable<
            NonNullable<string | number | boolean | null | undefined>
        >;
        disabled: PropTypes.Requireable<boolean>;
    };
    static getDerivedStateFromProps(nextProps: RadioWithContextProps): {
        checked: boolean | undefined;
    } | null;
    radioRef: HTMLInputElement | null;
    constructor(props: RadioWithContextProps);
    get disabled(): boolean | undefined;
    shouldComponentUpdate(
        nextProps: RadioWithContextProps,
        nextState: RadioState,
        nextContext: RadioContext
    ): boolean;
    componentDidUpdate(): void;
    onChange(e: ChangeEvent<HTMLInputElement>): void;
    focus(): void;
    render(): React.JSX.Element;
}
export type { Radio };
declare const _default: import('../config-provider/types').ConfiguredComponentClass<
    import('./types').RadioProps & import('../config-provider/types').ComponentCommonProps,
    import('./types').WrappedRadio,
    {}
>;
export default _default;
