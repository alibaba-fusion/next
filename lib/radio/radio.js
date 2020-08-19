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

var _classnames4 = require('classnames');

var _classnames5 = _interopRequireDefault(_classnames4);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _mixinUiState = require('../mixin-ui-state');

var _mixinUiState2 = _interopRequireDefault(_mixinUiState);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _withContext = require('./with-context');

var _withContext2 = _interopRequireDefault(_withContext);

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

    function Radio(props) {
        (0, _classCallCheck3.default)(this, Radio);

        var _this = (0, _possibleConstructorReturn3.default)(this, _UIState.call(this, props));

        var context = props.context;

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
        return _this;
    }

    Radio.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
        var nextContext = nextProps.context;


        if (nextContext.__group__ && 'selectedValue' in nextContext) {
            return {
                checked: nextContext.selectedValue === nextProps.value
            };
        } else if ('checked' in nextProps) {
            return {
                checked: nextProps.checked
            };
        }

        return null;
    };

    Radio.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState, nextContext) {
        var shallowEqual = _util.obj.shallowEqual;

        return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState) || !shallowEqual(this.context, nextContext);
    };

    Radio.prototype.componentDidUpdate = function componentDidUpdate() {
        // when disabled, reset UIState
        if (this.disabled) {
            // only class has an impact, no effect on visual
            this.resetUIState();
        }
    };

    Radio.prototype.onChange = function onChange(e) {
        var checked = e.target.checked;
        var _props = this.props,
            context = _props.context,
            value = _props.value;


        if (context.__group__) {
            context.onChange(value, e);
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
        var _props2 = this.props,
            id = _props2.id,
            className = _props2.className,
            children = _props2.children,
            style = _props2.style,
            label = _props2.label,
            onMouseEnter = _props2.onMouseEnter,
            onMouseLeave = _props2.onMouseLeave,
            tabIndex = _props2.tabIndex,
            rtl = _props2.rtl,
            name = _props2.name,
            isPreview = _props2.isPreview,
            renderPreview = _props2.renderPreview,
            value = _props2.value,
            context = _props2.context,
            otherProps = (0, _objectWithoutProperties3.default)(_props2, ['id', 'className', 'children', 'style', 'label', 'onMouseEnter', 'onMouseLeave', 'tabIndex', 'rtl', 'name', 'isPreview', 'renderPreview', 'value', 'context']);

        var checked = !!this.state.checked;
        var disabled = this.disabled;
        var isButton = context.isButton;
        var prefix = context.prefix || this.props.prefix;

        var others = _util.obj.pickOthers(Radio.propTypes, otherProps);
        var othersData = _util.obj.pickAttrsWith(others, 'data-');

        if (isPreview) {
            var previewCls = (0, _classnames5.default)(className, prefix + 'form-preview');

            if ('renderPreview' in this.props) {
                return _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({
                        id: id,
                        dir: rtl ? 'rtl' : 'ltr'
                    }, others, {
                        className: previewCls
                    }),
                    renderPreview(checked, this.props)
                );
            }

            return _react2.default.createElement(
                'p',
                (0, _extends3.default)({
                    id: id,
                    dir: rtl ? 'rtl' : 'ltr'
                }, others, {
                    className: previewCls
                }),
                checked && (children || label || value)
            );
        }

        var input = _react2.default.createElement('input', (0, _extends3.default)({}, _util.obj.pickOthers(othersData, others), {
            name: name,
            id: id,
            tabIndex: tabIndex,
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
                dir: rtl ? 'rtl' : 'ltr',
                style: style,
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

    (0, _createClass3.default)(Radio, [{
        key: 'disabled',
        get: function get() {
            var props = this.props;
            var context = props.context;


            var disabled = props.disabled || context.__group__ && 'disabled' in context && context.disabled;

            return disabled;
        }
    }]);
    return Radio;
}(_mixinUiState2.default), _class.displayName = 'Radio', _class.propTypes = (0, _extends3.default)({}, _configProvider2.default.propTypes, {
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
    onChange: noop,
    onMouseLeave: noop,
    onMouseEnter: noop,
    tabIndex: 0,
    prefix: 'next-',
    isPreview: false
}, _class.contextTypes = {
    onChange: _propTypes2.default.func,
    __group__: _propTypes2.default.bool,
    isButton: _propTypes2.default.bool,
    selectedValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.bool]),
    disabled: _propTypes2.default.bool
}, _temp);
exports.default = _configProvider2.default.config((0, _withContext2.default)((0, _reactLifecyclesCompat.polyfill)(Radio)));
module.exports = exports['default'];