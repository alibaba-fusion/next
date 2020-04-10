'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _util = require('../util');

var _field = require('../field');

var _field2 = _interopRequireDefault(_field);

var _responsiveGrid = require('../responsive-grid');

var _responsiveGrid2 = _interopRequireDefault(_responsiveGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function pickerDefined(obj) {
    var newObj = {};
    Object.keys(obj).forEach(function (i) {
        if (typeof obj[i] !== 'undefined') {
            newObj[i] = obj[i];
        }
    });
    return newObj;
}

function preventDefault(e) {
    e.preventDefault();
}
var getNewChildren = function getNewChildren(children, props) {
    var size = props.size,
        device = props.device,
        labelAlign = props.labelAlign,
        labelTextAlign = props.labelTextAlign,
        labelCol = props.labelCol,
        wrapperCol = props.wrapperCol,
        responsive = props.responsive;


    return _react2.default.Children.map(children, function (child) {
        if (_util.obj.isReactFragment(child)) {
            return getNewChildren(child.props.children, props);
        }

        if (child && typeof child.type === 'function' && child.type._typeMark === 'form_item') {
            var childrenProps = {
                labelCol: child.props.labelCol ? child.props.labelCol : labelCol,
                wrapperCol: child.props.wrapperCol ? child.props.wrapperCol : wrapperCol,
                labelAlign: child.props.labelAlign ? child.props.labelAlign : device === 'phone' ? 'top' : labelAlign,
                labelTextAlign: child.props.labelTextAlign ? child.props.labelTextAlign : labelTextAlign,
                size: child.props.size ? child.props.size : size,
                responsive: responsive
            };
            return _react2.default.cloneElement(child, pickerDefined(childrenProps));
        }
        return child;
    });
};

/** Form */
var Form = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(Form, _React$Component);

    function Form(props) {
        (0, _classCallCheck3.default)(this, Form);

        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

        _this.onChange = function (name, value) {
            _this.props.onChange(_this._formField.getValues(), {
                name: name,
                value: value,
                field: _this._formField
            });
        };

        _this._formField = null;
        if (props.field !== false) {
            var options = (0, _extends3.default)({}, props.fieldOptions, {
                onChange: _this.onChange
            });

            if (props.field) {
                _this._formField = props.field;
                var onChange = _this._formField.options.onChange;
                options.onChange = _util.func.makeChain(onChange, _this.onChange);
                _this._formField.setOptions && _this._formField.setOptions(options);
            } else {
                if ('value' in props) {
                    options.values = props.value;
                }
                _this._formField = new _field2.default(_this, options);
            }

            props.saveField(_this._formField);
        }
        return _this;
    }

    Form.prototype.getChildContext = function getChildContext() {
        return {
            _formField: this.props.field ? this.props.field : this._formField,
            _formSize: this.props.size,
            _formPreview: this.props.isPreview,
            _formFullWidth: this.props.fullWidth,
            _formLabelForErrorMessage: this.props.useLabelForErrorMessage
        };
    };

    Form.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        var props = this.props;

        if (this._formField) {
            if ('value' in props && props.value !== prevProps.value) {
                this._formField.setValues(props.value);
            }
            if ('error' in props && props.error !== prevProps.error) {
                this._formField.setValues(props.error);
            }
        }
    };

    Form.prototype.render = function render() {
        var _classNames;

        var _props = this.props,
            className = _props.className,
            inline = _props.inline,
            size = _props.size,
            device = _props.device,
            labelAlign = _props.labelAlign,
            labelTextAlign = _props.labelTextAlign,
            onSubmit = _props.onSubmit,
            children = _props.children,
            labelCol = _props.labelCol,
            wrapperCol = _props.wrapperCol,
            style = _props.style,
            prefix = _props.prefix,
            rtl = _props.rtl,
            Tag = _props.component,
            responsive = _props.responsive;


        var formClassName = (0, _classnames2.default)((_classNames = {}, _classNames[prefix + 'form'] = true, _classNames[prefix + 'inline'] = inline, _classNames['' + prefix + size] = size, _classNames[prefix + 'form-responsive-grid'] = responsive, _classNames[className] = !!className, _classNames));

        var newChildren = getNewChildren(children, this.props);

        return _react2.default.createElement(
            Tag,
            (0, _extends3.default)({
                role: 'grid'
            }, _util.obj.pickOthers(Form.propTypes, this.props), {
                className: formClassName,
                style: style,
                dir: rtl ? 'rtl' : undefined,
                onSubmit: onSubmit
            }),
            responsive ? _react2.default.createElement(
                _responsiveGrid2.default,
                null,
                newChildren
            ) : newChildren
        );
    };

    return Form;
}(_react2.default.Component), _class.propTypes = {
    /**
     * 样式前缀
     */
    prefix: _propTypes2.default.string,
    /**
     * 内联表单
     */
    inline: _propTypes2.default.bool,
    /**
     * 单个 Item 的 size 自定义，优先级高于 Form 的 size, 并且当组件与 Item 一起使用时，组件自身设置 size 属性无效。
     * @enumdesc 大, 中, 小
     */
    size: _propTypes2.default.oneOf(['large', 'medium', 'small']),
    /**
     * 单个 Item 中表单类组件宽度是否是100%
     */
    fullWidth: _propTypes2.default.bool,
    /**
     * 标签的位置
     * @enumdesc 上, 左, 内
     */
    labelAlign: _propTypes2.default.oneOf(['top', 'left', 'inset']),
    /**
     * 标签的左右对齐方式
     * @enumdesc 左, 右
     */
    labelTextAlign: _propTypes2.default.oneOf(['left', 'right']),
    /**
     * field 实例, 传 false 会禁用 field
     */
    field: _propTypes2.default.any,
    /**
     * 保存 Form 自动生成的 field 对象
     */
    saveField: _propTypes2.default.func,
    /**
     * 控制第一级 Item 的 labelCol
     */
    labelCol: _propTypes2.default.object,
    /**
     * 控制第一级 Item 的 wrapperCol
     */
    wrapperCol: _propTypes2.default.object,
    /**
     * form内有 `htmlType="submit"` 的元素的时候会触发
     */
    onSubmit: _propTypes2.default.func,
    /**
     * 子元素
     */
    children: _propTypes2.default.any,
    /**
     * 扩展class
     */
    className: _propTypes2.default.string,
    /**
     * 自定义内联样式
     */
    style: _propTypes2.default.object,
    /**
     * 表单数值
     */
    value: _propTypes2.default.object,
    /**
     * 表单变化回调
     * @param {Object} values 表单数据
     * @param {Object} item 详细
     * @param {String} item.name 变化的组件名
     * @param {String} item.value 变化的数据
     * @param {Object} item.field field 实例
     */
    onChange: _propTypes2.default.func,
    /**
     * 设置标签类型
     */
    component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    fieldOptions: _propTypes2.default.object,
    rtl: _propTypes2.default.bool,
    /**
     * 预设屏幕宽度
     */
    device: _propTypes2.default.oneOf(['phone', 'tablet', 'desktop']),
    /**
     * 是否开启内置的响应式布局 （使用ResponsiveGrid）
     */
    responsive: _propTypes2.default.bool,
    /**
     * 是否开启预览态
     */
    isPreview: _propTypes2.default.bool,
    /**
     * 是否使用 label 替换校验信息的 name 字段
     */
    useLabelForErrorMessage: _propTypes2.default.bool
}, _class.defaultProps = {
    prefix: 'next-',
    onSubmit: preventDefault,
    size: 'medium',
    labelAlign: 'left',
    onChange: _util.func.noop,
    component: 'form',
    saveField: _util.func.noop,
    device: 'desktop'
}, _class.childContextTypes = {
    _formField: _propTypes2.default.object,
    _formSize: _propTypes2.default.string,
    _formPreview: _propTypes2.default.bool,
    _formFullWidth: _propTypes2.default.bool,
    _formLabelForErrorMessage: _propTypes2.default.bool
}, _temp);
Form.displayName = 'Form';
exports.default = Form;
module.exports = exports['default'];