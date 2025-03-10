import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { type ClassPropsWithDefault } from '../util';
import NextField from '../field';
import type { FormProps } from './types';
export type FormWithDefaultProps = ClassPropsWithDefault<FormProps, typeof Form.defaultProps>;
declare function preventDefault(e: Event): void;
/** Form */
export default class Form extends Component<FormProps> {
    static displayName: string;
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        inline: PropTypes.Requireable<boolean>;
        size: PropTypes.Requireable<string>;
        fullWidth: PropTypes.Requireable<boolean>;
        labelAlign: PropTypes.Requireable<string>;
        labelTextAlign: PropTypes.Requireable<string>;
        field: PropTypes.Requireable<any>;
        saveField: PropTypes.Requireable<(...args: any[]) => any>;
        labelCol: PropTypes.Requireable<object>;
        wrapperCol: PropTypes.Requireable<object>;
        onSubmit: PropTypes.Requireable<(...args: any[]) => any>;
        children: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        value: PropTypes.Requireable<object>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        component: PropTypes.Requireable<
            NonNullable<string | ((...args: any[]) => any) | null | undefined>
        >;
        fieldOptions: PropTypes.Requireable<object>;
        rtl: PropTypes.Requireable<boolean>;
        device: PropTypes.Requireable<string>;
        responsive: PropTypes.Requireable<boolean>;
        isPreview: PropTypes.Requireable<boolean>;
        useLabelForErrorMessage: PropTypes.Requireable<boolean>;
        preferMarginToDisplayHelp: PropTypes.Requireable<boolean>;
        colon: PropTypes.Requireable<boolean>;
        disabled: PropTypes.Requireable<boolean>;
        gap: PropTypes.Requireable<
            NonNullable<number | (number | null | undefined)[] | null | undefined>
        >;
    };
    static defaultProps: {
        prefix: string;
        onSubmit: typeof preventDefault;
        size: string;
        labelAlign: string;
        onChange: () => void;
        component: string;
        saveField: () => void;
        device: string;
        colon: boolean;
        disabled: boolean;
        preferMarginToDisplayHelp: boolean;
    };
    readonly props: FormWithDefaultProps;
    static childContextTypes: {
        _formField: PropTypes.Requireable<object>;
        _formSize: PropTypes.Requireable<string>;
        _formDisabled: PropTypes.Requireable<boolean>;
        _formPreview: PropTypes.Requireable<boolean>;
        _formFullWidth: PropTypes.Requireable<boolean>;
        _formLabelForErrorMessage: PropTypes.Requireable<boolean>;
        _formMarginToDisplayHelp: PropTypes.Requireable<boolean>;
    };
    _formField: NextField | null;
    constructor(props: FormProps);
    getChildContext(): {
        _formField: NextField | null;
        _formSize: 'small' | 'medium' | 'large';
        _formDisabled: boolean;
        _formPreview: boolean | undefined;
        _formFullWidth: boolean | undefined;
        _formLabelForErrorMessage: boolean | undefined;
        _formMarginToDisplayHelp: boolean;
    };
    componentDidUpdate(prevProps: FormProps): void;
    onChange: (name: string, value: string) => void;
    render(): React.JSX.Element;
}
export {};
