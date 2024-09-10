import React from 'react';
import PropTypes from 'prop-types';
import Base from './base';
import type { TextAreaProps } from './types';
/**
 * Input.TextArea
 * @order 2
 */
export default class TextArea extends Base<TextAreaProps> {
    static displayName: string;
    static getDerivedStateFromProps: (
        nextProps: import('./types').BaseProps,
        prevState: import('./types').BaseState
    ) => {
        value: string | number;
    } | null;
    static propTypes: {
        hasBorder: PropTypes.Requireable<boolean>;
        state: PropTypes.Requireable<string>;
        autoHeight: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
        rows: PropTypes.Requireable<number>;
        isPreview: PropTypes.Requireable<boolean>;
        renderPreview: PropTypes.Requireable<(...args: any[]) => any>;
        locale: PropTypes.Requireable<object>;
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
    static defaultProps: TextAreaProps;
    helpRef: HTMLTextAreaElement;
    nextFrameActionId: number;
    constructor(props: TextAreaProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: TextAreaProps): void;
    _getMinMaxHeight(
        {
            minRows,
            maxRows,
        }: {
            minRows?: string | number;
            maxRows?: string | number;
        },
        value?: string | number | null
    ):
        | {
              minHeight?: undefined;
              maxHeight?: undefined;
              height?: undefined;
              overflowY?: undefined;
          }
        | {
              minHeight: number;
              maxHeight: number;
              height: number;
              overflowY: 'hidden' | undefined;
          };
    _getHeight(value: string | number): number;
    _resizeTextArea: (value: string | number) => void;
    ieHack(value: string | number): string | number;
    /**
     * value.length !== maxLength  in ie/safari(mac) while value has `Enter`
     * about maxLength compute: `Enter` was considered to be one char(\\n) in chrome , but two chars(\\r\\n) in ie/safari(mac).
     * so while value has `Enter`, we should let display length + 1
     */
    getValueLength(value: string): number;
    saveTextAreaRef(textArea: HTMLTextAreaElement): void;
    saveHelpRef(ref: HTMLTextAreaElement): void;
    renderClear(): React.JSX.Element | null;
    renderControl(): React.JSX.Element | null;
    render(): React.JSX.Element;
}
