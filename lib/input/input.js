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

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _util = require('../util');

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

var _group = require('./group');

var _group2 = _interopRequireDefault(_group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// preventDefault here can stop onBlur to keep focus state
function preventDefault(e) {
    e.preventDefault();
}

/** Input */
var Input = (_temp = _class = function (_Base) {
    (0, _inherits3.default)(Input, _Base);

    function Input(props) {
        (0, _classCallCheck3.default)(this, Input);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Base.call(this, props));

        _this.handleKeyDown = function (e) {
            if (e.keyCode === 13) {
                _this.props.onPressEnter(e);
            }

            _this.onKeyDown(e);
        };

        _this.handleKeyDownFromClear = function (e) {
            if (e.keyCode === 13) {
                _this.onClear(e);
            }
        };

        var value = void 0;
        if ('value' in props) {
            value = props.value;
        } else {
            value = props.defaultValue;
        }

        _this.state = {
            value: typeof value === 'undefined' ? '' : value
        };
        return _this;
    }

    // `Enter` was considered to be two chars in chrome , but one char in ie.
    // so we make all `Enter` to be two chars


    Input.prototype.getValueLength = function getValueLength(value) {
        var nv = '' + value;
        var strLen = this.props.getValueLength(nv);
        if (typeof strLen !== 'number') {
            strLen = nv.length;
        }

        return strLen;
    };

    Input.prototype.renderControl = function renderControl() {
        var _props = this.props,
            hasClear = _props.hasClear,
            readOnly = _props.readOnly,
            state = _props.state,
            prefix = _props.prefix,
            hint = _props.hint,
            extra = _props.extra,
            locale = _props.locale;


        var lenWrap = this.renderLength();

        var stateWrap = null;
        if (state === 'success') {
            stateWrap = _react2.default.createElement(_icon2.default, { type: 'success-filling', className: prefix + 'input-success-icon' });
        } else if (state === 'loading') {
            stateWrap = _react2.default.createElement(_icon2.default, { type: 'loading', className: prefix + 'input-loading-icon' });
        } else if (state === 'warning') {
            stateWrap = _react2.default.createElement(_icon2.default, { type: 'warning', className: prefix + 'input-warning-icon' });
        }

        var clearWrap = null;
        var showClear = hasClear && !readOnly && !!('' + this.state.value);

        if (hint || showClear) {
            var hintIcon = null;
            if (hint) {
                if (typeof hint === 'string') {
                    hintIcon = _react2.default.createElement(_icon2.default, { type: hint, className: prefix + 'input-hint' });
                } else if ((0, _react.isValidElement)(hint)) {
                    hintIcon = (0, _react.cloneElement)(hint, {
                        className: (0, _classnames2.default)(hint.props.className, prefix + 'input-hint')
                    });
                } else {
                    hintIcon = hint;
                }
            } else {
                hintIcon = _react2.default.createElement(_icon2.default, {
                    type: 'delete-filling',
                    role: 'button',
                    tabIndex: '0',
                    className: prefix + 'input-hint ' + prefix + 'input-clear-icon',
                    'aria-label': locale.clear,
                    onClick: this.onClear.bind(this),
                    onMouseDown: preventDefault,
                    onKeyDown: this.handleKeyDownFromClear
                });
            }

            clearWrap = _react2.default.createElement(
                'span',
                { className: prefix + 'input-hint-wrap' },
                hasClear && hint ? _react2.default.createElement(_icon2.default, {
                    type: 'delete-filling',
                    role: 'button',
                    tabIndex: '0',
                    className: prefix + 'input-clear ' + prefix + 'input-clear-icon',
                    'aria-label': locale.clear,
                    onClick: this.onClear.bind(this),
                    onMouseDown: preventDefault,
                    onKeyDown: this.handleKeyDownFromClear
                }) : null,
                hintIcon
            );
        }

        if (state === 'loading') {
            clearWrap = null;
        }

        return clearWrap || lenWrap || stateWrap || extra ? _react2.default.createElement(
            'span',
            { className: prefix + 'input-control' },
            clearWrap,
            lenWrap,
            stateWrap,
            extra
        ) : null;
    };

    Input.prototype.renderLabel = function renderLabel() {
        var _props2 = this.props,
            label = _props2.label,
            prefix = _props2.prefix,
            id = _props2.id;

        return label ? _react2.default.createElement(
            'label',
            { className: prefix + 'input-label', htmlFor: id },
            label
        ) : null;
    };

    Input.prototype.renderInner = function renderInner(inner, cls) {
        return inner ? _react2.default.createElement(
            'span',
            { className: cls },
            inner
        ) : null;
    };

    Input.prototype.onClear = function onClear(e) {
        if (this.props.disabled) {
            return;
        }

        // 非受控模式清空内部数据
        if (!('value' in this.props)) {
            this.setState({
                value: ''
            });
        }
        this.props.onChange('', e, 'clear');
        this.focus();
    };

    Input.prototype.render = function render() {
        var _classNames, _classNames2, _classNames3, _classNames4, _classNames5, _classNames6, _classNames7;

        var _props3 = this.props,
            size = _props3.size,
            htmlType = _props3.htmlType,
            htmlSize = _props3.htmlSize,
            autoComplete = _props3.autoComplete,
            autoFocus = _props3.autoFocus,
            disabled = _props3.disabled,
            style = _props3.style,
            innerBefore = _props3.innerBefore,
            innerAfter = _props3.innerAfter,
            innerBeforeClassName = _props3.innerBeforeClassName,
            innerAfterClassName = _props3.innerAfterClassName,
            className = _props3.className,
            hasBorder = _props3.hasBorder,
            prefix = _props3.prefix,
            isPreview = _props3.isPreview,
            renderPreview = _props3.renderPreview,
            addonBefore = _props3.addonBefore,
            addonAfter = _props3.addonAfter,
            addonTextBefore = _props3.addonTextBefore,
            addonTextAfter = _props3.addonTextAfter,
            inputRender = _props3.inputRender,
            rtl = _props3.rtl;


        var hasAddon = addonBefore || addonAfter || addonTextBefore || addonTextAfter;
        var cls = (0, _classnames2.default)(this.getClass(), (_classNames = {}, _classNames['' + prefix + size] = true, _classNames[prefix + 'hidden'] = this.props.htmlType === 'hidden', _classNames[prefix + 'noborder'] = !hasBorder || this.props.htmlType === 'file', _classNames[prefix + 'input-group-auto-width'] = hasAddon, _classNames[prefix + 'disabled'] = disabled, _classNames[className] = !!className && !hasAddon, _classNames));

        var innerCls = prefix + 'input-inner';
        var innerBeforeCls = (0, _classnames2.default)((_classNames2 = {}, _classNames2[innerCls] = true, _classNames2[prefix + 'before'] = true, _classNames2[innerBeforeClassName] = innerBeforeClassName, _classNames2));
        var innerAfterCls = (0, _classnames2.default)((_classNames3 = {}, _classNames3[innerCls] = true, _classNames3[prefix + 'after'] = true, _classNames3[innerAfterClassName] = innerAfterClassName, _classNames3));
        var previewCls = (0, _classnames2.default)((_classNames4 = {}, _classNames4[prefix + 'form-preview'] = true, _classNames4[className] = !!className, _classNames4));

        var props = this.getProps();
        // custom data attributes are assigned to the top parent node
        // data-类自定义数据属性分配到顶层node节点
        var dataProps = _util.obj.pickAttrsWith(this.props, 'data-');
        // Custom props are transparently transmitted to the core input node by default
        // 自定义属性默认透传到核心node节点：input
        var others = _util.obj.pickOthers((0, _extends3.default)({}, dataProps, Input.propTypes), this.props);

        if (isPreview) {
            var value = props.value;
            var label = this.props.label;

            if (typeof renderPreview === 'function') {
                return _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({}, others, { className: previewCls }),
                    renderPreview(value, this.props)
                );
            }
            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, others, { className: previewCls }),
                addonBefore || addonTextBefore,
                label,
                innerBefore,
                value,
                innerAfter,
                addonAfter || addonTextAfter
            );
        }

        var inputEl = _react2.default.createElement('input', (0, _extends3.default)({}, others, props, {
            height: '100%',
            type: htmlType,
            size: htmlSize,
            autoFocus: autoFocus,
            autoComplete: autoComplete,
            onKeyDown: this.handleKeyDown,
            ref: this.saveRef
        }));

        var inputWrap = _react2.default.createElement(
            'span',
            (0, _extends3.default)({}, dataProps, { dir: rtl ? 'rtl' : undefined, className: cls, style: hasAddon ? undefined : style }),
            this.renderLabel(),
            this.renderInner(innerBefore, innerBeforeCls),
            inputRender(inputEl),
            this.renderInner(innerAfter, innerAfterCls),
            this.renderControl()
        );

        var groupCls = (0, _classnames2.default)((_classNames5 = {}, _classNames5[prefix + 'input-group-text'] = true, _classNames5['' + prefix + size] = !!size, _classNames5[prefix + 'disabled'] = disabled, _classNames5));

        var addonBeforeCls = (0, _classnames2.default)((_classNames6 = {}, _classNames6[groupCls] = addonTextBefore, _classNames6));
        var addonAfterCls = (0, _classnames2.default)((_classNames7 = {}, _classNames7[groupCls] = addonTextAfter, _classNames7));

        if (hasAddon) {
            return _react2.default.createElement(
                _group2.default,
                (0, _extends3.default)({}, dataProps, {
                    className: className,
                    style: style,
                    disabled: disabled,
                    addonBefore: addonBefore || addonTextBefore,
                    addonBeforeClassName: addonBeforeCls,
                    addonAfter: addonAfter || addonTextAfter,
                    addonAfterClassName: addonAfterCls
                }),
                inputWrap
            );
        }

        return inputWrap;
    };

    return Input;
}(_base2.default), _class.getDerivedStateFromProps = _base2.default.getDerivedStateFromProps, _class.propTypes = (0, _extends3.default)({}, _base2.default.propTypes, {
    /**
     * label
     */
    label: _propTypes2.default.node,
    /**
     * 是否出现clear按钮
     */
    hasClear: _propTypes2.default.bool,
    /**
     * 是否有边框
     */
    hasBorder: _propTypes2.default.bool,
    /**
     * 状态
     * @enumdesc 错误, 校验中, 成功, 警告
     */
    state: _propTypes2.default.oneOf(['error', 'loading', 'success', 'warning']),
    /**
     * 按下回车的回调
     */
    onPressEnter: _propTypes2.default.func,

    onClear: _propTypes2.default.func,
    /**
     * 原生type
     */
    htmlType: _propTypes2.default.string,
    htmlSize: _propTypes2.default.string,
    /**
     * 水印 (Icon的type类型，和hasClear占用一个地方)
     */
    hint: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
    /**
     * 文字前附加内容
     */
    innerBefore: _propTypes2.default.node,
    /**
     * 文字后附加内容
     */
    innerAfter: _propTypes2.default.node,
    /**
     * 输入框前附加内容
     */
    addonBefore: _propTypes2.default.node,
    /**
     * 输入框后附加内容
     */
    addonAfter: _propTypes2.default.node,
    /**
     * 输入框前附加文字
     */
    addonTextBefore: _propTypes2.default.node,
    /**
     * 输入框后附加文字
     */
    addonTextAfter: _propTypes2.default.node,
    /**
     * (原生input支持)
     */
    autoComplete: _propTypes2.default.string,
    /**
     * 自动聚焦(原生input支持)
     */
    autoFocus: _propTypes2.default.bool,
    inputRender: _propTypes2.default.func,
    extra: _propTypes2.default.node,
    innerBeforeClassName: _propTypes2.default.string,
    innerAfterClassName: _propTypes2.default.string,
    /**
     * 是否为预览态
     */
    isPreview: _propTypes2.default.bool,
    /**
     * 预览态模式下渲染的内容
     * @param {number} value 评分值
     */
    renderPreview: _propTypes2.default.func
}), _class.defaultProps = (0, _extends3.default)({}, _base2.default.defaultProps, {
    autoComplete: 'off',
    hasBorder: true,
    isPreview: false,
    onPressEnter: _util.func.noop,
    inputRender: function inputRender(el) {
        return el;
    }
}), _temp);
exports.default = Input;
module.exports = exports['default'];