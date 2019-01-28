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

var _classnames4 = require('classnames');

var _classnames5 = _interopRequireDefault(_classnames4);

var _mixinUiState = require('../mixin-ui-state');

var _mixinUiState2 = _interopRequireDefault(_mixinUiState);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeChain = _util.func.makeChain,
    noop = _util.func.noop;
/**
 * Radio
 * @order 1
 */

var Radio = (_temp = _class = function (_UIState) {
    (0, _inherits3.default)(Radio, _UIState);

    function Radio(props, context) {
        (0, _classCallCheck3.default)(this, Radio);

        var _this = (0, _possibleConstructorReturn3.default)(this, _UIState.call(this, props));

        var checked = void 0;
        if (context.__group__) {
            checked = context.selectedValue === props.value;
        } else if ('checked' in props) {
            checked = props.checked;
        } else {
            checked = props.defaultChecked;
        }

        _this.state = { checked: checked };

        _this.onChange = _this.onChange.bind(_this);
        _this.disabled = props.disabled || context.__group__ && 'disabled' in context && context.disabled;

        return _this;
    }

    Radio.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
        if (nextContext.__group__) {
            var selectedValue = nextContext.selectedValue;

            if ('selectedValue' in nextContext) {
                this.setState({
                    checked: selectedValue === nextProps.value
                });
            }
        } else if ('checked' in nextProps) {
            this.setState({
                checked: nextProps.checked
            });
        }

        this.disabled = nextProps.disabled || nextContext.__group__ && 'disabled' in nextContext && nextContext.disabled;

        // when disabled, reset UIState
        if (this.disabled) {
            // only class has an impact, no effect on visual
            this.resetUIState();
        }
    };

    Radio.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState, nextContext) {
        var shallowEqual = _util.obj.shallowEqual;

        return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState) || !shallowEqual(this.nextContext, nextContext);
    };

    Radio.prototype.onChange = function onChange(e) {
        var checked = e.target.checked;
        var value = this.props.value;

        if (this.context.__group__) {
            this.context.onChange(value, e);
        } else if (this.state.checked !== checked) {
            if (!('checked' in this.props)) {
                this.setState({
                    checked: checked
                });
            }
            this.props.onChange(checked, e);
        }
    };

    Radio.prototype.render = function render() {
        var _classnames, _classnames2, _classnames3;

        /* eslint-disable no-unused-vars */
        var _props = this.props,
            id = _props.id,
            className = _props.className,
            children = _props.children,
            style = _props.style,
            label = _props.label,
            onMouseEnter = _props.onMouseEnter,
            onMouseLeave = _props.onMouseLeave,
            tabIndex = _props.tabIndex,
            rtl = _props.rtl,
            name = _props.name,
            otherProps = (0, _objectWithoutProperties3.default)(_props, ['id', 'className', 'children', 'style', 'label', 'onMouseEnter', 'onMouseLeave', 'tabIndex', 'rtl', 'name']);

        var checked = !!this.state.checked;
        var disabled = this.disabled;
        var isButton = this.context.isButton;
        var prefix = this.context.prefix || this.props.prefix;

        var others = _util.obj.pickOthers(Radio.propTypes, otherProps);
        var othersData = _util.obj.pickAttrsWith(others, 'data-');

        var input = _react2.default.createElement('input', (0, _extends3.default)({}, _util.obj.pickOthers(othersData, others), {
            name: name,
            id: id,
            disabled: disabled,
            checked: checked,
            type: 'radio',
            onChange: this.onChange,
            'aria-checked': checked,
            className: prefix + 'radio-input'
        }));

        // disabled do not hove focus state
        if (!disabled) {
            input = this.getStateElement(input);
        }

        var cls = (0, _classnames5.default)((_classnames = {}, _classnames[prefix + 'radio'] = true, _classnames.checked = checked, _classnames.disabled = disabled, _classnames[this.getStateClassName()] = true, _classnames));
        var clsInner = (0, _classnames5.default)((_classnames2 = {}, _classnames2[prefix + 'radio-inner'] = true, _classnames2.press = checked, _classnames2.unpress = !checked, _classnames2));
        var clsWrapper = (0, _classnames5.default)((_classnames3 = {}, _classnames3[prefix + 'radio-wrapper'] = true, _classnames3[className] = !!className, _classnames3.checked = checked, _classnames3.disabled = disabled, _classnames3[this.getStateClassName()] = true, _classnames3));
        var childrenCls = prefix + 'radio-label';

        var radioComp = !isButton ? _react2.default.createElement(
            'span',
            { className: cls },
            _react2.default.createElement('span', { className: clsInner }),
            input
        ) : _react2.default.createElement(
            'span',
            { className: prefix + 'radio-single-input' },
            input
        );

        return _react2.default.createElement(
            'label',
            (0, _extends3.default)({}, othersData, {
                role: 'radio',
                dir: rtl ? 'rtl' : 'ltr',
                style: style,
                tabIndex: tabIndex,
                'aria-checked': checked,
                'aria-disabled': disabled,
                className: clsWrapper,
                onMouseEnter: disabled ? onMouseEnter : makeChain(this._onUIMouseEnter, onMouseEnter),
                onMouseLeave: disabled ? onMouseLeave : makeChain(this._onUIMouseLeave, onMouseLeave)
            }),
            radioComp,
            [children, label].map(function (d, i) {
                return d !== undefined ? _react2.default.createElement(
                    'span',
                    { key: i, className: childrenCls },
                    d
                ) : null;
            })
        );
    };

    return Radio;
}(_mixinUiState2.default), _class.displayName = 'Radio', _class.propTypes = {
    prefix: _propTypes2.default.string,
    rtl: _propTypes2.default.bool,
    /**
     * 自定义类名
     */
    className: _propTypes2.default.string,
    /**
     * 组件input的id
     */
    id: _propTypes2.default.string,
    /**
     * 自定义内敛样式
     */
    style: _propTypes2.default.object,
    /**
     * 设置radio是否选中
     */
    checked: _propTypes2.default.bool,
    /**
     * 设置radio是否默认选中
     */
    defaultChecked: _propTypes2.default.bool,
    /**
     * 通过属性配置label
     */
    label: _propTypes2.default.node,
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
     * 鼠标离开事件
     * @param {Event} e Dom 事件对象
     */
    onMouseLeave: _propTypes2.default.func,
    /**
     * radio是否被禁用
     */
    disabled: _propTypes2.default.bool,
    /**
     * radio 的value
     */
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.bool]),
    /**
     * name
     */
    name: _propTypes2.default.string
}, _class.defaultProps = {
    onChange: noop,
    onMouseLeave: noop,
    onMouseEnter: noop,
    tabIndex: 0,
    prefix: 'next-'
}, _class.contextTypes = {
    onChange: _propTypes2.default.func,
    __group__: _propTypes2.default.bool,
    isButton: _propTypes2.default.bool,
    selectedValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.bool]),
    disabled: _propTypes2.default.bool
}, _temp);
exports.default = _configProvider2.default.config(Radio);
module.exports = exports['default'];