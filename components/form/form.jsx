import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { obj, func } from '../util';
import Field from '../field';
import RGrid from '../responsive-grid';

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
const getNewChildren = (children, props) => {
    const { size, device, labelAlign, labelTextAlign, labelCol, wrapperCol, responsive, colon } = props;

    return React.Children.map(children, child => {
        if (obj.isReactFragment(child)) {
            return getNewChildren(child.props.children, props);
        }

        if (child && ['function', 'object'].indexOf(typeof child.type) > -1 && child.type._typeMark === 'form_item') {
            const childrenProps = {
                labelCol: child.props.labelCol ? child.props.labelCol : labelCol,
                wrapperCol: child.props.wrapperCol ? child.props.wrapperCol : wrapperCol,
                labelAlign: child.props.labelAlign ? child.props.labelAlign : device === 'phone' ? 'top' : labelAlign,
                labelTextAlign: child.props.labelTextAlign ? child.props.labelTextAlign : labelTextAlign,
                colon: 'colon' in child.props ? child.props.colon : colon,
                size: child.props.size ? child.props.size : size,
                responsive: responsive,
            };
            return React.cloneElement(child, pickerDefined(childrenProps));
        }
        return child;
    });
};

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
         * 单个 Item 中表单类组件宽度是否是100%
         */
        fullWidth: PropTypes.bool,
        /**
         * 标签的位置, 如果不设置 labelCol 和 wrapperCol 那么默认是标签在上
         * @enumdesc 上, 左, 内
         */
        labelAlign: PropTypes.oneOf(['top', 'left', 'inset']),
        /**
         * 标签的左右对齐方式
         * @enumdesc 左, 右
         */
        labelTextAlign: PropTypes.oneOf(['left', 'right']),
        /**
         * field 实例, 传 false 会禁用 field
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
        /**
         * 是否开启内置的响应式布局 （使用ResponsiveGrid）
         * @version 1.19
         */
        responsive: PropTypes.bool,
        /**
         * 是否开启预览态
         * @version 1.19
         */
        isPreview: PropTypes.bool,
        /**
         * 是否使用 label 替换校验信息的 name 字段
         * @version 1.20
         */
        useLabelForErrorMessage: PropTypes.bool,
        /**
         * 倾向使用 item 的 margin 空间来展示 help
         * @default false
         * @version 1.26.37
         */
        preferMarginToDisplayHelp: PropTypes.bool,
        /**
         * 表示是否显示 label 后面的冒号
         * @version 1.22
         */
        colon: PropTypes.bool,
        /**
         * 是否禁用表单
         */
        disabled: PropTypes.bool,
        // 在 responsive模式下，透传给 ResponsiveGrid的， 表示 每个 cell 之间的间距， [bottom&top, right&left]
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

    static childContextTypes = {
        _formField: PropTypes.object,
        _formSize: PropTypes.string,
        _formDisabled: PropTypes.bool,
        _formPreview: PropTypes.bool,
        _formFullWidth: PropTypes.bool,
        _formLabelForErrorMessage: PropTypes.bool,
        _formMarginToDisplayHelp: PropTypes.bool,
    };

    constructor(props) {
        super(props);

        this._formField = null;
        if (props.field !== false) {
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

            if (props.locale && props.locale.Validate) {
                this._formField.setOptions({ messages: props.locale.Validate });
            }

            props.saveField(this._formField);
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

    componentDidUpdate(prevProps) {
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
            isPreview,
            component: Tag,
            responsive,
            gap,
            colon,
        } = this.props;

        const formClassName = classNames({
            [`${prefix}form`]: true,
            [`${prefix}inline`]: inline, // 内联
            [`${prefix}${size}`]: size,
            [`${prefix}form-responsive-grid`]: responsive,
            [`${prefix}form-preview`]: isPreview,
            [className]: !!className,
        });

        const newChildren = getNewChildren(children, this.props);

        return (
            <Tag
                role="grid"
                {...obj.pickOthers(Form.propTypes, this.props)}
                className={formClassName}
                style={style}
                dir={rtl ? 'rtl' : undefined}
                onSubmit={onSubmit}
            >
                {responsive ? <RGrid gap={gap} device={device}>{newChildren}</RGrid> : newChildren}
            </Tag>
        );
    }
}
