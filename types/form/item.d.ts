import React, { Component, type ReactNode } from 'react';
import PropTypes from 'prop-types';
import type { ItemContext, ItemProps } from './types';
export default class Item extends Component<ItemProps> {
    static displayName: string;
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        rtl: PropTypes.Requireable<boolean>;
        label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        labelCol: PropTypes.Requireable<object>;
        wrapperCol: PropTypes.Requireable<object>;
        help: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        name: PropTypes.Requireable<string>;
        extra: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        validateState: PropTypes.Requireable<string>;
        hasFeedback: PropTypes.Requireable<boolean>;
        style: PropTypes.Requireable<object>;
        id: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<
            NonNullable<((...args: any[]) => any) | PropTypes.ReactNodeLike>
        >;
        size: PropTypes.Requireable<string>;
        fullWidth: PropTypes.Requireable<boolean>;
        labelAlign: PropTypes.Requireable<string>;
        labelTextAlign: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        required: PropTypes.Requireable<boolean>;
        asterisk: PropTypes.Requireable<boolean>;
        requiredMessage: PropTypes.Requireable<string>;
        requiredTrigger: PropTypes.Requireable<NonNullable<string | any[] | null | undefined>>;
        min: PropTypes.Requireable<number>;
        max: PropTypes.Requireable<number>;
        minmaxMessage: PropTypes.Requireable<string>;
        minmaxTrigger: PropTypes.Requireable<NonNullable<string | any[] | null | undefined>>;
        minLength: PropTypes.Requireable<number>;
        maxLength: PropTypes.Requireable<number>;
        minmaxLengthMessage: PropTypes.Requireable<string>;
        minmaxLengthTrigger: PropTypes.Requireable<NonNullable<string | any[] | null | undefined>>;
        length: PropTypes.Requireable<number>;
        lengthMessage: PropTypes.Requireable<string>;
        lengthTrigger: PropTypes.Requireable<NonNullable<string | any[] | null | undefined>>;
        pattern: PropTypes.Requireable<any>;
        patternMessage: PropTypes.Requireable<string>;
        patternTrigger: PropTypes.Requireable<NonNullable<string | any[] | null | undefined>>;
        format: PropTypes.Requireable<string>;
        formatMessage: PropTypes.Requireable<string>;
        formatTrigger: PropTypes.Requireable<NonNullable<string | any[] | null | undefined>>;
        validator: PropTypes.Requireable<(...args: any[]) => any>;
        validatorTrigger: PropTypes.Requireable<NonNullable<string | any[] | null | undefined>>;
        autoValidate: PropTypes.Requireable<boolean>;
        device: PropTypes.Requireable<string>;
        responsive: PropTypes.Requireable<boolean>;
        colSpan: PropTypes.Requireable<number>;
        labelWidth: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        isPreview: PropTypes.Requireable<boolean>;
        renderPreview: PropTypes.Requireable<(...args: any[]) => any>;
        errorMessageName: PropTypes.Requireable<string>;
        useLabelForErrorMessage: PropTypes.Requireable<boolean>;
        preferMarginToDisplayHelp: PropTypes.Requireable<boolean>;
        colon: PropTypes.Requireable<boolean>;
        disabled: PropTypes.Requireable<boolean>;
        valueName: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        prefix: string;
        hasFeedback: boolean;
        labelWidth: number;
    };
    static contextTypes: {
        _formField: PropTypes.Requireable<object>;
        _formSize: PropTypes.Requireable<string>;
        _formDisabled: PropTypes.Requireable<boolean>;
        _formPreview: PropTypes.Requireable<boolean>;
        _formFullWidth: PropTypes.Requireable<boolean>;
        _formLabelForErrorMessage: PropTypes.Requireable<boolean>;
        _formMarginToDisplayHelp: PropTypes.Requireable<boolean>;
    };
    static _typeMark: string;
    readonly context: ItemContext;
    /**
     * 从子元素里面提取表单组件。TODO: 2.x 中改为只获取一个元素
     */
    getNames(children: ReactNode): any[];
    getHelper(children: ReactNode): React.JSX.Element;
    getState(children: ReactNode): 'warning' | import('@alifd/field').FieldState | undefined;
    getSize(): 'small' | 'medium' | 'large';
    getDisabled(): boolean | undefined;
    getIsPreview(): boolean | undefined;
    getFullWidth(): boolean;
    getLabelForErrorMessage(): string | null;
    getItemLabel(children: ReactNode): React.JSX.Element | null;
    getItemWrapper(children: ReactNode): React.JSX.Element;
    getLabelAlign(
        labelAlign: ItemProps['labelAlign'],
        device: ItemProps['device']
    ): 'left' | 'top' | 'inset' | undefined;
    render(): React.JSX.Element;
}
