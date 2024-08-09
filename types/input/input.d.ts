import React, { type ReactNode, type KeyboardEvent } from 'react';
import PropTypes from 'prop-types';
import Base from './base';
import type { InputProps } from './types';
/** Input */
declare class Input<P extends InputProps = InputProps> extends Base<P> {
    static displayName: string;
    static getDerivedStateFromProps: (
        nextProps: import('./types').BaseProps,
        prevState: import('./types').BaseState
    ) => {
        value: string | number;
    } | null;
    static propTypes: {
        label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        hasClear: PropTypes.Requireable<boolean>;
        hasBorder: PropTypes.Requireable<boolean>;
        state: PropTypes.Requireable<string>;
        onPressEnter: PropTypes.Requireable<(...args: any[]) => any>;
        htmlType: PropTypes.Requireable<string>;
        htmlSize: PropTypes.Requireable<string>;
        hint: PropTypes.Requireable<NonNullable<PropTypes.ReactNodeLike>>;
        innerBefore: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        innerAfter: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        addonBefore: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        addonAfter: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        addonTextBefore: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        addonTextAfter: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        autoComplete: PropTypes.Requireable<string>;
        autoFocus: PropTypes.Requireable<boolean>;
        inputRender: PropTypes.Requireable<(...args: any[]) => any>;
        extra: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        innerBeforeClassName: PropTypes.Requireable<string>;
        innerAfterClassName: PropTypes.Requireable<string>;
        isPreview: PropTypes.Requireable<boolean>;
        renderPreview: PropTypes.Requireable<(...args: any[]) => any>;
        hoverShowClear: PropTypes.Requireable<boolean>;
        value: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        defaultValue: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        onKeyDown: PropTypes.Requireable<(...args: any[]) => any>;
        disabled: PropTypes.Requireable<boolean>;
        maxLength: PropTypes.Requireable<number>;
        showLimitHint: PropTypes.Requireable<boolean>;
        cutString: PropTypes.Requireable<boolean>;
        readOnly: PropTypes.Requireable<boolean>;
        trim: PropTypes.Requireable<boolean>;
        placeholder: PropTypes.Requireable<string>;
        onFocus: PropTypes.Requireable<(...args: any[]) => any>;
        onBlur: PropTypes.Requireable<(...args: any[]) => any>;
        getValueLength: PropTypes.Requireable<(...args: any[]) => any>;
        inputStyle: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        name: PropTypes.Requireable<string>;
        rtl: PropTypes.Requireable<boolean>;
        locale: PropTypes.Requireable<object>;
        size: PropTypes.Requireable<string>;
        composition: PropTypes.Requireable<boolean>;
        onCompositionStart: PropTypes.Requireable<(...args: any[]) => any>;
        onCompositionEnd: PropTypes.Requireable<(...args: any[]) => any>;
        prefix: PropTypes.Requireable<string>;
        defaultPropsConfig: PropTypes.Requireable<object>;
        errorBoundary: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
        pure: PropTypes.Requireable<boolean>;
        warning: PropTypes.Requireable<boolean>;
        device: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<any>;
        popupContainer: PropTypes.Requireable<any>;
    };
    static defaultProps: InputProps;
    constructor(props: P);
    getValueLength(value: string | number): number;
    renderControl(): React.JSX.Element | null;
    renderLabel(): React.JSX.Element | null;
    renderInner(inner: ReactNode, cls: string): React.JSX.Element | null;
    handleKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
    render(): React.JSX.Element;
}
export default Input;
