'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames3 = require('classnames');

var _classnames4 = _interopRequireDefault(_classnames3);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _mixinUiState = require('../mixin-ui-state');

var _mixinUiState2 = _interopRequireDefault(_mixinUiState);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _withContext = require('./with-context');

var _withContext2 = _interopRequireDefault(_withContext);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = _util.func.noop;
function isChecked(selectedValue, value) {
    return selectedValue.indexOf(value) > -1;
}
/**
 * Checkbox
 * @order 1
 */
var Checkbox = (_temp = _class = function (_UIState) {
    (0, _inherits3.default)(Checkbox, _UIState);

    function Checkbox(props) {
        (0, _classCallCheck3.default)(this, Checkbox);

        var _this = (0, _possibleConstructorReturn3.default)(this, _UIState.call(this, props));

        var context = props.context;

        var checked = void 0,
            indeterminate = void 0;

        if ('checked' in props) {
            checked = props.checked;
        } else {
            checked = props.defaultChecked;
        }

        if ('indeterminate' in props) {
            indeterminate = props.indeterminate;
        } else {
            indeterminate = props.defaultIndeterminate;
        }
        if (context.__group__) {
            checked = isChecked(context.selectedValue, props.value);
        }
        _this.state = {
            checked: checked,
            indeterminate: indeterminate
        };

        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    Checkbox.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
        var nextContext = nextProps.context;

        var state = {};
        if (nextContext.__group__) {
            if ('selectedValue' in nextContext) {
                state.checked = isChecked(nextContext.selectedValue, nextProps.value);
            }
        } else if ('checked' in nextProps) {
            state.checked = nextProps.checked;
        }

        if ('indeterminate' in nextProps) {
            state.indeterminate = nextProps.indeterminate;
        }

        return state;
    };

    Checkbox.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState, nextContext) {
        var shallowEqual = _util.obj.shallowEqual;

        return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState) || !shallowEqual(this.context, nextContext);
    };

    Checkbox.prototype.onChange = function onChange(e) {
        var _props = this.props,
            context = _props.context,
            value = _props.value;

        var checked = e.target.checked;

        if (this.disabled) {
            return;
        }
        if (context.__group__) {
            context.onChange(value, e);
        } else {
            if (!('checked' in this.props)) {
                this.setState({
                    checked: checked
                });
            }

            if (!('indeterminate' in this.props)) {
                this.setState({
                    indeterminate: false
                });
            }
            this.props.onChange(checked, e);
        }
    };

    Checkbox.prototype.render = function render() {
        var _classnames, _classnames2;

        /* eslint-disable no-unused-vars */
        var _props2 = this.props,
            id = _props2.id,
            className = _props2.className,
            children = _props2.children,
            style = _props2.style,
            label = _props2.label,
            onMouseEnter = _props2.onMouseEnter,
            onMouseLeave = _props2.onMouseLeave,
            rtl = _props2.rtl,
            isPreview = _props2.isPreview,
            renderPreview = _props2.renderPreview,
            context = _props2.context,
            value = _props2.value,
            name = _props2.name,
            otherProps = (0, _objectWithoutProperties3.default)(_props2, ['id', 'className', 'children', 'style', 'label', 'onMouseEnter', 'onMouseLeave', 'rtl', 'isPreview', 'renderPreview', 'context', 'value', 'name']);

        var checked = !!this.state.checked;
        var disabled = this.disabled;
        var indeterminate = !!this.state.indeterminate;
        var prefix = context.prefix || this.props.prefix;

        var others = _util.obj.pickOthers(Checkbox.propTypes, otherProps);
        var othersData = _util.obj.pickAttrsWith(others, 'data-');
        if (otherProps.title) {
            othersData.title = otherProps.title;
        }

        var childInput = _react2.default.createElement('input', (0, _extends3.default)({}, _util.obj.pickOthers(Checkbox.propTypes, otherProps), {
            id: id,
            value: value,
            name: name,
            disabled: disabled,
            checked: checked,
            type: 'checkbox',
            onChange: this.onChange,
            'aria-checked': indeterminate ? 'mixed' : checked,
            className: prefix + 'checkbox-input'
        }));

        // disable 无状态操作
        if (!disabled) {
            childInput = this.getStateElement(childInput);
        }
        var cls = (0, _classnames4.default)((_classnames = {}, _classnames[prefix + 'checkbox-wrapper'] = true, _classnames[className] = !!className, _classnames.checked = checked, _classnames.disabled = disabled, _classnames.indeterminate = indeterminate, _classnames[this.getStateClassName()] = true, _classnames));
        var labelCls = prefix + 'checkbox-label';
        var type = indeterminate ? 'semi-select' : 'select';

        if (isPreview) {
            var previewCls = (0, _classnames4.default)(className, prefix + 'form-preview');
            if ('renderPreview' in this.props) {
                return _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({
                        id: id,
                        dir: rtl ? 'rtl' : undefined
                    }, othersData, {
                        className: previewCls
                    }),
                    renderPreview(checked, this.props)
                );
            }

            return _react2.default.createElement(
                'p',
                (0, _extends3.default)({
                    id: id,
                    dir: rtl ? 'rtl' : undefined
                }, othersData, {
                    className: previewCls
                }),
                checked && (children || label || this.state.value)
            );
        }

        var iconCls = (0, _classnames4.default)((_classnames2 = {
            zoomIn: indeterminate
        }, _classnames2[prefix + 'checkbox-semi-select-icon'] = indeterminate, _classnames2[prefix + 'checkbox-select-icon'] = !indeterminate, _classnames2));

        return _react2.default.createElement(
            'label',
            (0, _extends3.default)({}, othersData, {
                className: cls,
                style: style,
                dir: rtl ? 'rtl' : undefined,
                onMouseEnter: onMouseEnter,
                onMouseLeave: onMouseLeave
            }),
            _react2.default.createElement(
                'span',
                { className: prefix + 'checkbox' },
                _react2.default.createElement(
                    'span',
                    { className: prefix + 'checkbox-inner' },
                    _react2.default.createElement(_icon2.default, { type: type, size: 'xs', className: iconCls })
                ),
                childInput
            ),
            [label, children].map(function (item, i) {
                return [undefined, null].indexOf(item) === -1 ? _react2.default.createElement(
                    'span',
                    { key: i, className: labelCls },
                    item
                ) : null;
            })
        );
    };

    (0, _createClass3.default)(Checkbox, [{
        key: 'disabled',
        get: function get() {
            var props = this.props;
            var context = props.context;


            return props.disabled || 'disabled' in context && context.disabled;
        }
    }]);
    return Checkbox;
}(_mixinUiState2.default), _class.displayName = 'Checkbox', _class.propTypes = (0, _extends3.default)({}, _configProvider2.default.propTypes, {
    prefix: _propTypes2.default.string,
    rtl: _propTypes2.default.bool,
    /**
     * 自定义类名
     */
    className: _propTypes2.default.string,
    /**
     * checkbox id, 挂载在input上
     */
    id: _propTypes2.default.string,
    /**
     * 自定义内敛样式
     */
    style: _propTypes2.default.object,
    /**
     * 选中状态
     */
    checked: _propTypes2.default.bool,
    /**
     * 默认选中状态
     */
    defaultChecked: _propTypes2.default.bool,
    /**
     * 禁用
     */
    disabled: _propTypes2.default.bool,
    /**
     * 通过属性配置label，
     */
    label: _propTypes2.default.node,
    /**
     * Checkbox 的中间状态，只会影响到 Checkbox 的样式，并不影响其 checked 属性
     */
    indeterminate: _propTypes2.default.bool,
    /**
     *  Checkbox 的默认中间态，只会影响到 Checkbox 的样式，并不影响其 checked 属性
     */
    defaultIndeterminate: _propTypes2.default.bool,
    /**
     * 状态变化时触发的事件
     * @param {Boolean} checked 是否选中
     * @param {Event} e Dom 事件对象
     */
    onChange: _propTypes2.default.func,
    /**
     * 鼠标进入enter事件
     * @param {Event} e Dom 事件对象
     */
    onMouseEnter: _propTypes2.default.func,
    /**
     * 鼠标离开Leave事件
     * @param {Event} e Dom 事件对象
     */
    onMouseLeave: _propTypes2.default.func,
    /**
     * checkbox 的value
     */
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    /**
     * name
     */
    name: _propTypes2.default.string,
    /**
     * 是否为预览态
     */
    isPreview: _propTypes2.default.bool,
    /**
     * 预览态模式下渲染的内容
     * @param {number} value 评分值
     */
    renderPreview: _propTypes2.default.func
}), _class.defaultProps = {
    defaultChecked: false,
    defaultIndeterminate: false,
    onChange: noop,
    onMouseEnter: noop,
    onMouseLeave: noop,
    prefix: 'next-',
    isPreview: false
}, _temp);
exports.default = _configProvider2.default.config((0, _withContext2.default)((0, _reactLifecyclesCompat.polyfill)(Checkbox)));
module.exports = exports['default'];