import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { obj, func } from '../util';
import Field from '../field';

function pickerDefined(obj) {
    const newObj = {};
    Object.keys(obj).forEach(i => {
        if (typeof obj[i] !== 'undefined') {
            newObj[i] = obj[i];
        }
    });
    return newObj;
}

function preventDefault(e) {
    e.preventDefault();
}

/** Form */
export default class Form extends React.Component {
    static propTypes = {
        /**
         * 样式前缀
         */
        prefix: PropTypes.string,
        /**
         * 内联表单
         */
        inline: PropTypes.bool,
        /**
         * 单个 Item 的 size 自定义，优先级高于 Form 的 size, 并且当组件与 Item 一起使用时，组件自身设置 size 属性无效。
         * @enumdesc 大, 中, 小
         */
        size: PropTypes.oneOf(['large', 'medium', 'small']),
        /**
         * 标签的位置
         * @enumdesc 上, 左, 内
         */
        labelAlign: PropTypes.oneOf(['top', 'left', 'inset']),
        /**
         * 标签的左右对齐方式
         * @enumdesc 左, 右
         */
        labelTextAlign: PropTypes.oneOf(['left', 'right']),
        /**
         * 经 `new Field(this)` 初始化后，直接传给 Form 即可 用到表单校验则不可忽略此项
         */
        field: PropTypes.any,
        /**
         * 保存 Form 自动生成的 field 对象
         */
        saveField: PropTypes.func,
        /**
         * 控制第一级 Item 的 labelCol
         */
        labelCol: PropTypes.object,
        /**
         * 控制第一级 Item 的 wrapperCol
         */
        wrapperCol: PropTypes.object,
        /**
         * form内有 `htmlType="submit"` 的元素的时候会触发
         */
        onSubmit: PropTypes.func,
        /**
         * 子元素
         */
        children: PropTypes.any,
        /**
         * 扩展class
         */
        className: PropTypes.string,
        /**
         * 自定义内联样式
         */
        style: PropTypes.object,
        /**
         * 表单数值
         */
        value: PropTypes.object,
        /**
         * 表单变化回调
         * @param {Object} values 表单数据
         * @param {Object} item 详细
         * @param {String} item.name 变化的组件名
         * @param {String} item.value 变化的数据
         * @param {Object} item.field field 实例
         */
        onChange: PropTypes.func,
        /**
         * 设置标签类型
         */
        component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        fieldOptions: PropTypes.object,
        rtl: PropTypes.bool,
        /**
         * 预设屏幕宽度
         */
        device: PropTypes.oneOf(['phone', 'tablet', 'desktop']),
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
    };

    static childContextTypes = {
        _formField: PropTypes.object,
        _formSize: PropTypes.string,
    };

    constructor(props) {
        super(props);
        const options = {
            ...props.fieldOptions,
            onChange: this.onChange,
        };

        if (props.field) {
            this._formField = props.field;
            const onChange = this._formField.options.onChange;
            options.onChange = func.makeChain(onChange, this.onChange);
            this._formField.setOptions && this._formField.setOptions(options);
        } else {
            if ('value' in props) {
                options.values = props.value;
            }
            this._formField = new Field(this, options);
        }

        props.saveField(this._formField);
    }

    getChildContext() {
        return {
            _formField: this.props.field ? this.props.field : this._formField,
            _formSize: this.props.size,
        };
    }

    componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this._formField.setValues(nextProps.value);
        }
        if ('error' in nextProps) {
            this._formField.setErrors(nextProps.error);
        }
    }

    onChange = (name, value) => {
        this.props.onChange(this._formField.getValues(), {
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
            labelAlign,
            labelTextAlign,
            onSubmit,
            children,
            labelCol,
            wrapperCol,
            style,
            prefix,
            rtl,
            component: Tag,
        } = this.props;

        const formClassName = classNames({
            [`${prefix}form`]: true,
            [`${prefix}inline`]: inline, // 内联
            [`${prefix}${size}`]: size,
            [className]: !!className,
        });

        return (
            <Tag
                role="grid"
                {...obj.pickOthers(Form.propTypes, this.props)}
                className={formClassName}
                style={style}
                dir={rtl ? 'rtl' : undefined}
                onSubmit={onSubmit}
            >
                {React.Children.map(children, child => {
                    if (
                        child &&
                        typeof child.type === 'function' &&
                        child.type._typeMark === 'form_item'
                    ) {
                        const childrenProps = {
                            labelCol: child.props.labelCol
                                ? child.props.labelCol
                                : labelCol,
                            wrapperCol: child.props.wrapperCol
                                ? child.props.wrapperCol
                                : wrapperCol,
                            labelAlign: child.props.labelAlign
                                ? child.props.labelAlign
                                : device === 'phone'
                                ? 'top'
                                : labelAlign,
                            labelTextAlign: child.props.labelTextAlign
                                ? child.props.labelTextAlign
                                : labelTextAlign,
                            size: child.props.size ? child.props.size : size,
                        };
                        return React.cloneElement(
                            child,
                            pickerDefined(childrenProps)
                        );
                    }
                    return child;
                })}
            </Tag>
        );
    }
}
