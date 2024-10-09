import React, { Children, Component, type ReactElement, type ReactNode, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Grid from '../grid';
import RGrid from '../responsive-grid';
import { obj } from '../util';
import Error from './error';
import { getFieldInitCfg } from './enhance';
import type { ChildExtraProperties, ItemContext, ItemProps } from './types';

const { Row, Col } = Grid;
const { Cell } = RGrid;

const { isNil } = obj;

export default class Item extends Component<ItemProps> {
    static propTypes = {
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        label: PropTypes.node,
        labelCol: PropTypes.object,
        wrapperCol: PropTypes.object,
        help: PropTypes.node,
        name: PropTypes.string,
        extra: PropTypes.node,
        validateState: PropTypes.oneOf(['error', 'success', 'loading', 'warning']),
        hasFeedback: PropTypes.bool, //TODO: hasFeedback => validateStatus=[error,success,loading]
        style: PropTypes.object,
        id: PropTypes.string,
        children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
        size: PropTypes.oneOf(['large', 'small', 'medium']),
        fullWidth: PropTypes.bool,
        labelAlign: PropTypes.oneOf(['top', 'left', 'inset']),
        labelTextAlign: PropTypes.oneOf(['left', 'right']),
        className: PropTypes.string,
        required: PropTypes.bool,
        asterisk: PropTypes.bool,
        requiredMessage: PropTypes.string,
        requiredTrigger: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        min: PropTypes.number,
        max: PropTypes.number,
        minmaxMessage: PropTypes.string,
        minmaxTrigger: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        minLength: PropTypes.number,
        maxLength: PropTypes.number,
        minmaxLengthMessage: PropTypes.string,
        minmaxLengthTrigger: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        length: PropTypes.number,
        lengthMessage: PropTypes.string,
        lengthTrigger: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        pattern: PropTypes.any,
        patternMessage: PropTypes.string,
        patternTrigger: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        format: PropTypes.oneOf(['number', 'email', 'url', 'tel']),
        formatMessage: PropTypes.string,
        formatTrigger: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        validator: PropTypes.func,
        validatorTrigger: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        autoValidate: PropTypes.bool,
        device: PropTypes.oneOf(['phone', 'tablet', 'desktop']),
        responsive: PropTypes.bool,
        colSpan: PropTypes.number,
        labelWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        isPreview: PropTypes.bool,
        renderPreview: PropTypes.func,
        errorMessageName: PropTypes.string,
        useLabelForErrorMessage: PropTypes.bool,
        preferMarginToDisplayHelp: PropTypes.bool,
        colon: PropTypes.bool,
        disabled: PropTypes.bool,
        valueName: PropTypes.string,
    };

    static defaultProps = {
        prefix: 'next-',
        hasFeedback: false,
        labelWidth: 100,
    };

    static contextTypes = {
        _formField: PropTypes.object,
        _formSize: PropTypes.oneOf(['large', 'small', 'medium']),
        _formDisabled: PropTypes.bool,
        _formPreview: PropTypes.bool,
        _formFullWidth: PropTypes.bool,
        _formLabelForErrorMessage: PropTypes.bool,
        _formMarginToDisplayHelp: PropTypes.bool,
    };

    static _typeMark = 'form_item';

    readonly context: ItemContext;
    /**
     * 从子元素里面提取表单组件。TODO: 2.x 中改为只获取一个元素
     */
    getNames(children: ReactNode) {
        const { name } = this.props;
        const childrenList = Children.toArray(children);
        const nameList = childrenList
            .filter((c: ReactElement) => {
                return c.props && ('name' in c.props || 'data-meta' in c.props);
            })
            .map((c: ReactElement) => {
                return c.props.name || c.props.id;
            });

        if (nameList.length) {
            return nameList;
        } else if (name) {
            return [name];
        }

        return [];
    }

    getHelper(children: ReactNode) {
        const { help, preferMarginToDisplayHelp } = this.props;
        const { _formField, _formMarginToDisplayHelp } = this.context;

        const useMargin =
            typeof preferMarginToDisplayHelp !== 'undefined'
                ? preferMarginToDisplayHelp
                : _formMarginToDisplayHelp;

        return (
            <Error
                name={help === undefined ? this.getNames(children) : undefined}
                field={_formField}
                preferMarginToDisplayHelp={useMargin}
            >
                {help}
            </Error>
        );
    }

    getState(children: ReactNode) {
        const { validateState } = this.props;
        if (validateState) {
            return validateState;
        }

        if (this.context._formField) {
            const { getState } = this.context._formField;
            const names = this.getNames(children);
            if (!names.length) {
                return '';
            }

            // get first name
            return getState(names[0]);
        }

        return undefined;
    }

    getSize() {
        return this.props.size || this.context._formSize;
    }

    getDisabled() {
        return 'disabled' in this.props ? this.props.disabled : this.context._formDisabled;
    }

    getIsPreview() {
        return 'isPreview' in this.props ? this.props.isPreview : this.context._formPreview;
    }

    getFullWidth() {
        return isNil(this.props.fullWidth) ? !!this.context._formFullWidth : this.props.fullWidth;
    }

    getLabelForErrorMessage() {
        const { errorMessageName, label, useLabelForErrorMessage } = this.props;

        if (errorMessageName) {
            return errorMessageName;
        }

        if (!label || typeof label !== 'string') {
            return null;
        }

        const newLabel = label.replace(':', '').replace('：', '');

        const labelForErrorMessage =
            useLabelForErrorMessage !== undefined
                ? useLabelForErrorMessage
                : this.context._formLabelForErrorMessage;
        if (labelForErrorMessage && newLabel) {
            return newLabel;
        }

        return null;
    }

    getItemLabel(children: ReactNode) {
        const {
            id,
            required,
            asterisk = required,
            label,
            labelCol,
            wrapperCol,
            prefix,
            responsive,
            labelWidth,
            labelTextAlign,
            colon,
        } = this.props;

        const labelAlign = this.getLabelAlign(this.props.labelAlign, this.props.device);

        if (!label) {
            return null;
        }

        const ele = (
            // @ts-expect-error label 上不存在 required，所以会有 TS 报错
            <label htmlFor={id || this.getNames(children)[0]} required={asterisk} key="label">
                {label}
            </label>
        );

        const cls = classNames({
            [`${prefix}form-item-label`]: true,
            'has-colon': colon,
            [`${prefix}left`]: labelTextAlign === 'left',
        });

        if (responsive && labelWidth && labelAlign !== 'top') {
            return (
                <div className={cls} style={{ width: labelWidth }}>
                    {ele}
                </div>
            );
        }

        if ((wrapperCol || labelCol) && labelAlign !== 'top') {
            return (
                <Col {...labelCol} className={cls}>
                    {ele}
                </Col>
            );
        }

        return <div className={cls}>{ele}</div>;
    }

    getItemWrapper(children: ReactNode) {
        const { hasFeedback, labelCol, wrapperCol, extra, prefix, renderPreview, name } =
            this.props;

        const labelAlign = this.getLabelAlign(this.props.labelAlign, this.props.device);

        const state = this.getState(children);

        const isPreview = this.getIsPreview();
        const childrenProps: {
            size: string;
            isPreview?: boolean;
            renderPreview?: (values: unknown) => unknown;
            state?: string;
            label?: ReactNode;
            disabled?: boolean;
        } = {
            size: this.getSize(),
        };

        if (isPreview) {
            childrenProps.isPreview = true;
        }

        if ('renderPreview' in this.props && typeof renderPreview === 'function') {
            childrenProps.renderPreview = renderPreview;
        }

        if (state && (state === 'error' || hasFeedback)) {
            childrenProps.state = state;
        }

        if (labelAlign === 'inset') {
            childrenProps.label = this.getItemLabel(children);
        }

        if (this.getDisabled()) {
            childrenProps.disabled = true;
        }

        const labelForErrorMessage = this.getLabelForErrorMessage();

        const ele = Children.map(children, (child: ReactElement & ChildExtraProperties, idx) => {
            if (
                child &&
                ['function', 'object'].indexOf(typeof child.type) > -1 &&
                child.type._typeMark !== 'form_item' &&
                child.type._typeMark !== 'form_error'
            ) {
                let extraProps = childrenProps;
                // 自己直接使用 field.init 会在 props 上面留下 data-meta
                // name 挪到 FormItem 上面，默认把第一个元素当做 Form 组件
                if (
                    this.context._formField &&
                    !('data-meta' in child.props) &&
                    ('name' in child.props || (name && idx === 0)) //TODO：1.x 为了不 BR, 2.x 中把优先级调换下，优先取 FormItem 的 name
                ) {
                    const initName =
                        'name' in child.props && child.props.name ? child.props.name : name;
                    extraProps = this.context._formField.init(
                        initName,
                        {
                            ...getFieldInitCfg(
                                this.props,
                                child.type.displayName!,
                                labelForErrorMessage
                            ),
                            props: { ...child.props, ref: child.ref },
                        },
                        childrenProps
                    );
                } else {
                    extraProps = Object.assign({}, child.props, extraProps);
                }

                return cloneElement(child, extraProps);
            }

            return child;
        });

        const help = this.getHelper(children);

        if ((wrapperCol || labelCol) && labelAlign !== 'top') {
            return (
                <Col {...wrapperCol} className={`${prefix}form-item-control`} key="item">
                    {ele} {help} {extra}
                </Col>
            );
        }

        return (
            <div className={`${prefix}form-item-control`}>
                {ele} {help} {extra}
            </div>
        );
    }

    getLabelAlign(labelAlign: ItemProps['labelAlign'], device: ItemProps['device']) {
        if (device === 'phone') {
            return 'top';
        }

        return labelAlign;
    }

    render() {
        const { className, style, prefix, wrapperCol, labelCol, responsive, children } = this.props;

        const labelAlign = this.getLabelAlign(this.props.labelAlign, this.props.device);

        let childrenNode = children;
        if (typeof children === 'function' && this.context._formField) {
            childrenNode = children(this.context._formField.getValues());
        }

        const state = this.getState(childrenNode);
        const size = this.getSize();
        const fullWidth = this.getFullWidth();
        const isPreview = this.getIsPreview();

        const itemClassName = classNames({
            [`${prefix}form-item`]: true,
            [`${prefix}${labelAlign}`]: labelAlign,
            [`has-${state}`]: !!state,
            [`${prefix}${size}`]: !!size,
            [`${prefix}form-item-fullwidth`]: fullWidth,
            [`${className}`]: !!className,
            [`${prefix}form-preview`]: isPreview,
        });

        // 垂直模式并且左对齐才用到
        const Tag = responsive
            ? Cell
            : (wrapperCol || labelCol) && labelAlign !== 'top'
              ? Row
              : 'div';
        const label = labelAlign === 'inset' ? null : this.getItemLabel(childrenNode);

        return (
            <Tag
                {...obj.pickOthers(Item.propTypes, this.props)}
                className={itemClassName}
                style={style}
            >
                {label}
                {this.getItemWrapper(childrenNode)}
            </Tag>
        );
    }
}
