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

var _grid = require('../grid');

var _grid2 = _interopRequireDefault(_grid);

var _responsiveGrid = require('../responsive-grid');

var _responsiveGrid2 = _interopRequireDefault(_responsiveGrid);

var _util = require('../util');

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

var _enhance = require('./enhance');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = _grid2.default.Row,
    Col = _grid2.default.Col;
var Cell = _responsiveGrid2.default.Cell;
var isNil = _util.obj.isNil;

/** Form.Item
 *  @description 手动传递了 wrapCol labelCol 会使用 Grid 辅助布局; labelAlign='top' 会强制禁用 Grid
 *  @order 1
 */

var Item = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(Item, _React$Component);

    function Item() {
        (0, _classCallCheck3.default)(this, Item);
        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
    }

    /**
     * 从子元素里面提取表单组件
     */
    Item.prototype.getNames = function getNames() {
        var children = _react2.default.Children.toArray(this.props.children);
        return children.filter(function (c) {
            return c.props && ('name' in c.props || 'data-meta' in c.props);
        }).map(function (c) {
            return c.props.name || c.props.id;
        });
    };

    Item.prototype.getHelper = function getHelper() {
        var help = this.props.help;
        var _formField = this.context._formField;

        return _react2.default.createElement(
            _error2.default,
            {
                name: help === undefined ? this.getNames() : undefined,
                field: _formField
            },
            help
        );
    };

    Item.prototype.getState = function getState() {
        var validateState = this.props.validateState;

        if (validateState) {
            return validateState;
        }

        if (this.context._formField) {
            var getState = this.context._formField.getState;

            var names = this.getNames();
            if (!names.length) {
                return '';
            }

            // get first name
            return getState(names[0]);
        }

        return undefined;
    };

    Item.prototype.getSize = function getSize() {
        return this.props.size || this.context._formSize;
    };

    Item.prototype.getIsPreview = function getIsPreview() {
        return 'isPreview' in this.props ? this.props.isPreview : this.context._formPreview;
    };

    Item.prototype.getFullWidth = function getFullWidth() {
        return isNil(this.props.fullWidth) ? !!this.context._formFullWidth : this.props.fullWidth;
    };

    Item.prototype.getLabelForErrorMessage = function getLabelForErrorMessage() {
        var label = this.props.label;

        if (!label || typeof label !== 'string') {
            return null;
        }

        label = label.replace(':', '').replace('：', '');

        var labelForErrorMessage = 'useLabelForErrorMessage' in this.props ? this.props.useLabelForErrorMessage : this.context._formLabelForErrorMessage;
        if (labelForErrorMessage && label) {
            return label;
        }

        return null;
    };

    Item.prototype.getItemLabel = function getItemLabel() {
        var _classNames;

        var _props = this.props,
            id = _props.id,
            required = _props.required,
            _props$asterisk = _props.asterisk,
            asterisk = _props$asterisk === undefined ? required : _props$asterisk,
            label = _props.label,
            labelCol = _props.labelCol,
            wrapperCol = _props.wrapperCol,
            prefix = _props.prefix,
            responsive = _props.responsive,
            labelWidth = _props.labelWidth,
            labelTextAlign = _props.labelTextAlign;


        var labelAlign = this.getLabelAlign(this.props.labelAlign, this.props.device);

        if (!label) {
            return null;
        }

        var ele = _react2.default.createElement(
            'label',
            {
                htmlFor: id || this.getNames()[0],
                required: asterisk,
                key: 'label'
            },
            label
        );

        var cls = (0, _classnames2.default)((_classNames = {}, _classNames[prefix + 'form-item-label'] = true, _classNames[prefix + 'left'] = labelTextAlign === 'left', _classNames));

        if (responsive && labelWidth && labelAlign !== 'top') {
            return _react2.default.createElement(
                'div',
                { className: cls, style: { width: labelWidth } },
                ele
            );
        }

        if ((wrapperCol || labelCol) && labelAlign !== 'top') {
            return _react2.default.createElement(
                Col,
                (0, _extends3.default)({}, labelCol, { className: cls }),
                ele
            );
        }

        return _react2.default.createElement(
            'div',
            { className: cls },
            ele
        );
    };

    Item.prototype.getItemWrapper = function getItemWrapper() {
        var _this2 = this;

        var _props2 = this.props,
            hasFeedback = _props2.hasFeedback,
            labelCol = _props2.labelCol,
            wrapperCol = _props2.wrapperCol,
            children = _props2.children,
            extra = _props2.extra,
            prefix = _props2.prefix,
            renderPreview = _props2.renderPreview;


        var labelAlign = this.getLabelAlign(this.props.labelAlign, this.props.device);

        var state = this.getState();

        var isPreview = this.getIsPreview();
        var childrenProps = {
            size: this.getSize()
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
            childrenProps.label = this.getItemLabel();
        }

        var childrenNode = children;
        if (typeof children === 'function' && this.context._formField) {
            childrenNode = children(this.context._formField.getValues());
        }

        var labelForErrorMessage = this.getLabelForErrorMessage();

        var ele = _react2.default.Children.map(childrenNode, function (child) {
            if (child && typeof child.type === 'function' && child.type._typeMark !== 'form_item' && child.type._typeMark !== 'form_error') {
                var extraProps = childrenProps;
                if (_this2.context._formField && 'name' in child.props && !('data-meta' in child.props)) {
                    extraProps = _this2.context._formField.init(child.props.name, (0, _extends3.default)({}, (0, _enhance.getFieldInitCfg)(_this2.props, child.type.displayName, labelForErrorMessage), {
                        props: (0, _extends3.default)({}, child.props, { ref: child.ref })
                    }), childrenProps);
                } else {
                    extraProps = (0, _extends3.default)({}, child.props, extraProps);
                }

                return _react2.default.cloneElement(child, extraProps);
            }

            return child;
        });

        var help = this.getHelper();

        if ((wrapperCol || labelCol) && labelAlign !== 'top') {
            return _react2.default.createElement(
                Col,
                (0, _extends3.default)({}, wrapperCol, {
                    className: prefix + 'form-item-control',
                    key: 'item'
                }),
                ele,
                ' ',
                help,
                ' ',
                extra
            );
        }

        return _react2.default.createElement(
            'div',
            { className: prefix + 'form-item-control' },
            ele,
            ' ',
            help,
            ' ',
            extra
        );
    };

    Item.prototype.getLabelAlign = function getLabelAlign(labelAlign, device) {
        if (device === 'phone') {
            return 'top';
        }

        return labelAlign;
    };

    Item.prototype.render = function render() {
        var _classNames2;

        var _props3 = this.props,
            className = _props3.className,
            style = _props3.style,
            prefix = _props3.prefix,
            wrapperCol = _props3.wrapperCol,
            labelCol = _props3.labelCol,
            responsive = _props3.responsive;


        var labelAlign = this.getLabelAlign(this.props.labelAlign, this.props.device);

        var state = this.getState();
        var size = this.getSize();
        var fullWidth = this.getFullWidth();

        var itemClassName = (0, _classnames2.default)((_classNames2 = {}, _classNames2[prefix + 'form-item'] = true, _classNames2['' + prefix + labelAlign] = labelAlign, _classNames2['has-' + state] = !!state, _classNames2['' + prefix + size] = !!size, _classNames2[prefix + 'form-item-fullwidth'] = fullWidth, _classNames2['' + className] = !!className, _classNames2));

        // 垂直模式并且左对齐才用到
        var Tag = responsive ? Cell : (wrapperCol || labelCol) && labelAlign !== 'top' ? Row : 'div';
        var label = labelAlign === 'inset' ? null : this.getItemLabel();

        return _react2.default.createElement(
            Tag,
            (0, _extends3.default)({}, _util.obj.pickOthers(Item.propTypes, this.props), {
                className: itemClassName,
                style: style
            }),
            label,
            this.getItemWrapper()
        );
    };

    return Item;
}(_react2.default.Component), _class.propTypes = {
    /**
     * 样式前缀
     */
    prefix: _propTypes2.default.string,
    rtl: _propTypes2.default.bool,
    /**
     * label 标签的文本
     */
    label: _propTypes2.default.node,
    /**
     * label 标签布局，通 `<Col>` 组件，设置 span offset 值，如 {span: 8, offset: 16}，该项仅在垂直表单有效
     */
    labelCol: _propTypes2.default.object,
    /**
     * 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol
     */
    wrapperCol: _propTypes2.default.object,
    /**
     * 自定义提示信息，如不设置，则会根据校验规则自动生成.
     */
    help: _propTypes2.default.node,
    /**
     * 额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。 位于错误信息后面
     */
    extra: _propTypes2.default.node,
    /**
     * 校验状态，如不设置，则会根据校验规则自动生成
     * @enumdesc 失败, 成功, 校验中, 警告
     */
    validateState: _propTypes2.default.oneOf(['error', 'success', 'loading', 'warning']),
    /**
     * 配合 validateState 属性使用，是否展示 success/loading 的校验状态图标, 目前只有Input支持
     */
    hasFeedback: _propTypes2.default.bool, //TODO: hasFeedback => validateStatus=[error,success,loading]
    /**
     * 自定义内联样式
     */
    style: _propTypes2.default.object,
    id: _propTypes2.default.string,
    /**
     * node 或者 function(values)
     */
    children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
    /**
     * 单个 Item 的 size 自定义，优先级高于 Form 的 size, 并且当组件与 Item 一起使用时，组件自身设置 size 属性无效。
     */
    size: _propTypes2.default.oneOf(['large', 'small', 'medium']),
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
     * 扩展class
     */
    className: _propTypes2.default.string,
    /**
     * [表单校验] 不能为空
     */
    required: _propTypes2.default.bool,
    /**
     * required 的星号是否显示
     */
    asterisk: _propTypes2.default.bool,
    /**
     * required 自定义错误信息
     */
    requiredMessage: _propTypes2.default.string,
    /**
     * required 自定义触发方式
     */
    requiredTrigger: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
    /**
     * [表单校验] 最小值
     */
    min: _propTypes2.default.number,
    /**
     * [表单校验] 最大值
     */
    max: _propTypes2.default.number,
    /**
     * min/max 自定义错误信息
     */
    minmaxMessage: _propTypes2.default.string,
    /**
     * min/max 自定义触发方式
     */
    minmaxTrigger: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
    /**
     * [表单校验] 字符串最小长度 / 数组最小个数
     */
    minLength: _propTypes2.default.number,
    /**
     * [表单校验] 字符串最大长度 / 数组最大个数
     */
    maxLength: _propTypes2.default.number,
    /**
     * minLength/maxLength 自定义错误信息
     */
    minmaxLengthMessage: _propTypes2.default.string,
    /**
     * minLength/maxLength 自定义触发方式
     */
    minmaxLengthTrigger: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
    /**
     * [表单校验] 字符串精确长度 / 数组精确个数
     */
    length: _propTypes2.default.number,
    /**
     * length 自定义错误信息
     */
    lengthMessage: _propTypes2.default.string,
    /**
     * length 自定义触发方式
     */
    lengthTrigger: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
    /**
     * 正则校验
     */
    pattern: _propTypes2.default.any,
    /**
     * pattern 自定义错误信息
     */
    patternMessage: _propTypes2.default.string,
    /**
     * pattern 自定义触发方式
     */
    patternTrigger: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
    /**
     * [表单校验] 四种常用的 pattern
     */
    format: _propTypes2.default.oneOf(['number', 'email', 'url', 'tel']),
    /**
     * format 自定义错误信息
     */
    formatMessage: _propTypes2.default.string,
    /**
     * format 自定义触发方式
     */
    formatTrigger: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
    /**
     * [表单校验] 自定义校验函数
     */
    validator: _propTypes2.default.func,
    /**
     * validator 自定义触发方式
     */
    validatorTrigger: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
    /**
     * 是否修改数据时自动触发校验
     */
    autoValidate: _propTypes2.default.bool,
    /**
     * 预设屏幕宽度
     */
    device: _propTypes2.default.oneOf(['phone', 'tablet', 'desktop']),
    responsive: _propTypes2.default.bool,
    /**
     * 在响应式布局模式下，表单项占多少列
     */
    colSpan: _propTypes2.default.number,
    /**
     * 在响应式布局下，且label在左边时，label的宽度是多少
     */
    labelWidth: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    /**
     * 是否开启预览态
     */
    isPreview: _propTypes2.default.bool,
    /**
     * 预览态模式下渲染的内容
     * @param {any} value 根据包裹的组件的 value 类型而决定
     */
    renderPreview: _propTypes2.default.func,
    /**
     * 是否使用 label 替换校验信息的 name 字段
     */
    useLabelForErrorMessage: _propTypes2.default.bool
}, _class.defaultProps = {
    prefix: 'next-',
    hasFeedback: false,
    labelWidth: 100
}, _class.contextTypes = {
    _formField: _propTypes2.default.object,
    _formSize: _propTypes2.default.oneOf(['large', 'small', 'medium']),
    _formPreview: _propTypes2.default.bool,
    _formFullWidth: _propTypes2.default.bool,
    _formLabelForErrorMessage: _propTypes2.default.bool
}, _class._typeMark = 'form_item', _temp);
Item.displayName = 'Item';
exports.default = Item;
module.exports = exports['default'];