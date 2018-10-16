'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _mixinUiState = require('../mixin-ui-state');

var _mixinUiState2 = _interopRequireDefault(_mixinUiState);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

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

    function Checkbox(props, context) {
        (0, _classCallCheck3.default)(this, Checkbox);

        var _this = (0, _possibleConstructorReturn3.default)(this, _UIState.call(this, props));

        var checked = void 0,
            indeterminate = void 0;
        if (context.__group__) {
            indeterminate = false;
            checked = isChecked(context.selectedValue, props.value);
        } else {
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
        }

        _this.state = {
            checked: checked,
            indeterminate: indeterminate
        };

        _this.disabled = props.disabled || context.__group__ && 'disabled' in context && context.disabled;
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    Checkbox.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
        if (nextContext.__group__) {
            if ('selectedValue' in nextContext) {
                this.setState({
                    checked: isChecked(nextContext.selectedValue, nextProps.value)
                });
            }
            this.disabled = nextProps.disabled || 'disabled' in nextContext && nextContext.disabled;
        } else {
            if ('checked' in nextProps) {
                this.setState({
                    checked: nextProps.checked
                });
            }
            if ('indeterminate' in nextProps) {
                this.setState({
                    indeterminate: nextProps.indeterminate
                });
            }
            this.disabled = nextProps.disabled;
        }
    };

    Checkbox.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState, nextContext) {
        var shallowEqual = _util.obj.shallowEqual;

        return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState) || !shallowEqual(this.context, nextContext);
    };

    Checkbox.prototype.onChange = function onChange(e) {
        var checked = e.target.checked;
        var value = this.props.value;
        if (this.disabled) {
            return;
        }
        if (this.context.__group__) {
            this.context.onChange(value, e);
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
        var _classnames;

        var _props = this.props,
            id = _props.id,
            className = _props.className,
            children = _props.children,
            style = _props.style,
            label = _props.label,
            onMouseEnter = _props.onMouseEnter,
            onMouseLeave = _props.onMouseLeave,
            otherProps = (0, _objectWithoutProperties3.default)(_props, ['id', 'className', 'children', 'style', 'label', 'onMouseEnter', 'onMouseLeave']);

        var checked = !!this.state.checked;
        var disabled = this.disabled;
        var indeterminate = !!this.state.indeterminate;
        var prefix = this.context.prefix || this.props.prefix;

        var others = _util.obj.pickOthers(Checkbox.propTypes, otherProps);
        var othersData = _util.obj.pickAttrsWith(others, 'data-');

        var childInput = _react2.default.createElement('input', (0, _extends3.default)({}, _util.obj.pickOthers(Checkbox.propTypes, otherProps), {
            id: id,
            disabled: disabled,
            checked: checked,
            type: 'checkbox',
            onChange: this.onChange,
            'aria-checked': indeterminate ? 'mixed' : checked,
            className: prefix + 'checkbox-input'
        }));

        // disabe 无状态操作
        if (!disabled) {
            childInput = this.getStateElement(childInput);
        }
        var cls = (0, _classnames3.default)((_classnames = {}, _classnames[prefix + 'checkbox-wrapper'] = true, _classnames[className] = !!className, _classnames.checked = checked, _classnames.disabled = disabled, _classnames.indeterminate = indeterminate, _classnames[this.getStateClassName()] = true, _classnames));
        var labelCls = prefix + 'checkbox-label';
        var type = indeterminate ? 'semi-select' : 'select';

        return _react2.default.createElement(
            'label',
            (0, _extends3.default)({}, othersData, {
                className: cls,
                style: style,
                onMouseEnter: onMouseEnter,
                onMouseLeave: onMouseLeave
            }),
            _react2.default.createElement(
                'span',
                { className: prefix + 'checkbox' },
                _react2.default.createElement(
                    'span',
                    { className: prefix + 'checkbox-inner' },
                    _react2.default.createElement(_icon2.default, { type: type, size: 'xs', className: indeterminate ? 'zoomIn' : '' })
                ),
                childInput
            ),
            [label, children].map(function (item, i) {
                return item ? _react2.default.createElement(
                    'span',
                    { key: i, className: labelCls },
                    item
                ) : null;
            })
        );
    };

    return Checkbox;
}(_mixinUiState2.default), _class.displayName = 'Checkbox', _class.propTypes = {
    /**
     * 样式类名的品牌前缀
     */
    prefix: _propTypes2.default.string,
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
    label: _propTypes2.default.string,
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
    onMouseLeave: _propTypes2.default.func
}, _class.defaultProps = {
    defaultChecked: false,
    defaultIndeterminate: false,
    onChange: noop,
    onMouseEnter: noop,
    onMouseLeave: noop,
    prefix: 'next-'
}, _class.contextTypes = {
    onChange: _propTypes2.default.func,
    __group__: _propTypes2.default.bool,
    selectedValue: _propTypes2.default.array,
    disabled: _propTypes2.default.bool,
    prefix: _propTypes2.default.string
}, _temp);
exports.default = _configProvider2.default.config(Checkbox);
module.exports = exports['default'];