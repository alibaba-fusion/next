import React, { Children, Component, type ReactElement, type ReactNode, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { obj, func, type ClassPropsWithDefault } from '../util';
import NextField, { type FieldOption } from '../field';
import RGrid from '../responsive-grid';
import type { ChildExtraProperties, FormProps, RemoveUndefined } from './types';

export type FormWithDefaultProps = ClassPropsWithDefault<FormProps, typeof Form.defaultProps>;

function pickerDefined(obj: Record<string, unknown>) {
    const newObj: RemoveUndefined<typeof obj> = {};
    Object.keys(obj).forEach(i => {
        if (typeof obj[i] !== 'undefined') {
            newObj[i] = obj[i];
        }
    });
    return newObj;
}

function preventDefault(e: Event) {
    e.preventDefault();
}

const getNewChildren: (children: ReactNode, props: FormProps) => ReactNode = (
    children: ReactNode,
    props: FormProps
) => {
    const { size, device, labelAlign, labelTextAlign, labelCol, wrapperCol, responsive, colon } =
        props;

    return Children.map(children, (child: ReactElement & ChildExtraProperties) => {
        if (obj.isReactFragmentElement(child)) {
            return getNewChildren(child.props.children, props);
        }

        if (
            child &&
            ['function', 'object'].indexOf(typeof child.type) > -1 &&
            child.type._typeMark === 'form_item'
        ) {
            const childrenProps = {
                labelCol: child.props.labelCol ? child.props.labelCol : labelCol,
                wrapperCol: child.props.wrapperCol ? child.props.wrapperCol : wrapperCol,
                labelAlign: child.props.labelAlign
                    ? child.props.labelAlign
                    : device === 'phone'
                      ? 'top'
                      : labelAlign,
                labelTextAlign: child.props.labelTextAlign
                    ? child.props.labelTextAlign
                    : labelTextAlign,
                colon: 'colon' in child.props ? child.props.colon : colon,
                size: child.props.size ? child.props.size : size,
                responsive: responsive,
            };
            return cloneElement(child, pickerDefined(childrenProps));
        }
        return child;
    });
};

/** Form */
export default class Form extends Component<FormProps> {
    static displayName = 'Form';
    static propTypes = {
        prefix: PropTypes.string,
        inline: PropTypes.bool,
        size: PropTypes.oneOf(['large', 'medium', 'small']),
        fullWidth: PropTypes.bool,
        labelAlign: PropTypes.oneOf(['top', 'left', 'inset']),
        labelTextAlign: PropTypes.oneOf(['left', 'right']),
        field: PropTypes.any,
        saveField: PropTypes.func,
        labelCol: PropTypes.object,
        wrapperCol: PropTypes.object,
        onSubmit: PropTypes.func,
        children: PropTypes.any,
        className: PropTypes.string,
        style: PropTypes.object,
        value: PropTypes.object,
        onChange: PropTypes.func,
        component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        fieldOptions: PropTypes.object,
        rtl: PropTypes.bool,
        device: PropTypes.oneOf(['phone', 'tablet', 'desktop']),
        responsive: PropTypes.bool,
        isPreview: PropTypes.bool,
        useLabelForErrorMessage: PropTypes.bool,
        preferMarginToDisplayHelp: PropTypes.bool,
        colon: PropTypes.bool,
        disabled: PropTypes.bool,
        // 在 responsive 模式下，透传给 ResponsiveGrid 的，表示 每个 cell 之间的间距， [bottom&top, right&left]
        gap: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
    };

    static defaultProps = {
        prefix: 'next-',
        onSubmit: preventDefault,
        size: 'medium',
        labelAlign: 'left',
        onChange: func.noop,
        component: 'form',
        saveField: func.noop,
        device: 'desktop',
        colon: false,
        disabled: false,
        preferMarginToDisplayHelp: false,
    };

    readonly props: FormWithDefaultProps;

    static childContextTypes = {
        _formField: PropTypes.object,
        _formSize: PropTypes.string,
        _formDisabled: PropTypes.bool,
        _formPreview: PropTypes.bool,
        _formFullWidth: PropTypes.bool,
        _formLabelForErrorMessage: PropTypes.bool,
        _formMarginToDisplayHelp: PropTypes.bool,
    };

    _formField: NextField | null;
    constructor(props: FormProps) {
        super(props);

        this._formField = null;
        if (props.field !== false) {
            const options: FieldOption = {
                ...props.fieldOptions,
                onChange: this.onChange,
            };

            if (props.field) {
                this._formField = props.field;
                const onChange = this._formField.options.onChange;
                options.onChange = func.makeChain(onChange, this.onChange);
                this._formField!.setOptions && this._formField.setOptions(options);
            } else {
                if ('value' in props) {
                    options.values = props.value;
                }

                this._formField = new NextField(this, options);
            }

            if (props.locale && props.locale.Validate) {
                this._formField.setOptions({ messages: props.locale.Validate });
            }

            props.saveField!(this._formField);
        }
    }

    getChildContext() {
        return {
            _formField: this.props.field ? this.props.field : this._formField,
            _formSize: this.props.size,
            _formDisabled: this.props.disabled,
            _formPreview: this.props.isPreview,
            _formFullWidth: this.props.fullWidth,
            _formLabelForErrorMessage: this.props.useLabelForErrorMessage,
            _formMarginToDisplayHelp: this.props.preferMarginToDisplayHelp,
        };
    }

    componentDidUpdate(prevProps: FormProps) {
        const props = this.props;

        if (this._formField) {
            if ('value' in props && props.value !== prevProps.value) {
                this._formField.setValues(props.value);
            }
            if ('error' in props && props.error !== prevProps.error) {
                this._formField.setValues(props.error);
            }
        }
    }

    onChange = (name: string, value: string) => {
        this.props.onChange!(this._formField!.getValues(), {
            name,
            value,
            field: this._formField,
        });
    };

    render() {
        const {
            className,
            inline,
            size,
            device,
            onSubmit,
            children,
            style,
            prefix,
            rtl,
            isPreview,
            component: Tag,
            responsive,
            gap,
        } = this.props;

        const formClassName = classNames({
            [`${prefix}form`]: true,
            [`${prefix}inline`]: inline, // 内联
            [`${prefix}${size}`]: size,
            [`${prefix}form-responsive-grid`]: responsive,
            [`${prefix}form-preview`]: isPreview,
            [className!]: !!className,
        });

        const newChildren = getNewChildren(children, this.props);

        return (
            <Tag
                role="form"
                {...obj.pickOthers(Form.propTypes, this.props)}
                className={formClassName}
                style={style}
                dir={rtl ? 'rtl' : undefined}
                onSubmit={onSubmit}
            >
                {responsive ? (
                    <RGrid gap={gap} device={device}>
                        {newChildren}
                    </RGrid>
                ) : (
                    newChildren
                )}
            </Tag>
        );
    }
}
