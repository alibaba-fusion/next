import React, {
    type ChangeEvent,
    type CompositionEvent,
    type FocusEvent,
    type KeyboardEvent,
} from 'react';
import PropTypes from 'prop-types';
import type { BaseProps, BaseState, GeneralHTMLInputElement } from './types';
declare class Base<
    P extends BaseProps = BaseProps,
    S extends BaseState = BaseState,
> extends React.Component<P, S> {
    static propTypes: {
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
        htmlType: PropTypes.Requireable<string>;
        name: PropTypes.Requireable<string>;
        rtl: PropTypes.Requireable<boolean>;
        state: PropTypes.Requireable<string>;
        locale: PropTypes.Requireable<object>;
        isPreview: PropTypes.Requireable<boolean>;
        renderPreview: PropTypes.Requireable<(...args: any[]) => any>;
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
    static defaultProps: Omit<BaseProps, 'state'>;
    inputRef: HTMLInputElement | HTMLTextAreaElement;
    static getDerivedStateFromProps(
        nextProps: BaseProps,
        prevState: BaseState
    ): {
        value: string | number;
    } | null;
    ieHack(value: number | string): number | string;
    handleCompositionStart: (e: CompositionEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleCompositionEnd: (e: CompositionEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onChange(e: ChangeEvent<HTMLInputElement>): void;
    /**
     * abstract
     */
    getValueLength(value: string | number | null): number;
    onKeyDown(e: KeyboardEvent<HTMLInputElement>): void;
    onFocus(e: FocusEvent<HTMLInputElement>): void;
    onBlur(e: FocusEvent<HTMLInputElement>): void;
    handleKeyDownFromClear: (e: KeyboardEvent<HTMLInputElement>) => void;
    onClear(e: KeyboardEvent<HTMLInputElement>): void;
    renderLength(): React.JSX.Element | null;
    getClass(): string;
    getProps(): {
        style?: React.CSSProperties | undefined;
        onChange?: ((e: ChangeEvent<GeneralHTMLInputElement>) => void) | undefined;
        onBlur?: ((e: FocusEvent<GeneralHTMLInputElement>) => void) | undefined;
        onFocus?: ((e: FocusEvent<GeneralHTMLInputElement>) => void) | undefined;
        'aria-disabled'?: boolean | undefined;
    } & Pick<
        BaseProps,
        | 'name'
        | 'disabled'
        | 'placeholder'
        | 'maxLength'
        | 'onCompositionEnd'
        | 'onCompositionStart'
        | 'readOnly'
    > &
        Pick<BaseState, 'value'>;
    saveRef: (input: HTMLInputElement) => void;
    getInputNode(): HTMLInputElement | HTMLTextAreaElement;
    focus(start?: number, end?: number, preventScroll?: boolean): void;
}
declare const _default: typeof Base;
export default _default;
