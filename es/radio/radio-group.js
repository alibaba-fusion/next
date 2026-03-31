import { __assign, __extends } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import ConfigProvider from '../config-provider';
import { obj, func, focus } from '../util';
import Radio from './radio';
var makeChain = func.makeChain;
var focusRef = focus.focusRef;
var pickOthers = obj.pickOthers;
var RadioGroup = /** @class */ (function (_super) {
    __extends(RadioGroup, _super);
    function RadioGroup(props) {
        var _this = _super.call(this, props) || this;
        _this.saveRadioRef = function (el, index) {
            if (el && typeof el.getInstance === 'function') {
                var radio = el.getInstance();
                _this.radioRefs[index] = radio;
            }
        };
        var value = '';
        if ('value' in props) {
            value = props.value;
        }
        else if ('defaultValue' in props) {
            value = props.defaultValue;
        }
        // The reference for the first Radio and for the selected Radio.
        _this.radioRefs = [];
        _this.hasFocus = false;
        _this.state = { value: value };
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }
    RadioGroup.getDerivedStateFromProps = function (props, state) {
        if ('value' in props && props.value !== state.value) {
            return {
                value: props.value,
            };
        }
        return null;
    };
    RadioGroup.prototype.getChildContext = function () {
        var disabled = this.props.disabled;
        return {
            __group__: true,
            isButton: this.props.shape === 'button',
            onChange: this.onChange,
            selectedValue: this.state.value,
            disabled: disabled,
        };
    };
    RadioGroup.prototype.onChange = function (currentValue, e) {
        if (!('value' in this.props)) {
            this.setState({ value: currentValue });
        }
        if (currentValue !== this.state.value) {
            this.props.onChange(currentValue, e);
        }
    };
    RadioGroup.prototype.focus = function () {
        if (!this.hasFocus) {
            var availableRef = this.radioRefs.filter(function (ref) {
                if (ref) {
                    return !ref.props.disabled;
                }
                return false;
            });
            var radioRef = availableRef.find(function (ref) {
                if (ref) {
                    return ref.props.checked;
                }
                return false;
            });
            if (radioRef) {
                focusRef(radioRef);
            }
            else if (availableRef.length > 0) {
                focusRef(availableRef[0]);
            }
        }
    };
    RadioGroup.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this.props, rtl = _b.rtl, className = _b.className, disabled = _b.disabled, shape = _b.shape, size = _b.size, style = _b.style, prefix = _b.prefix, direction = _b.direction, component = _b.component, isPreview = _b.isPreview, renderPreview = _b.renderPreview;
        var others = pickOthers(RadioGroup.propTypes, this.props);
        if (rtl) {
            others.dir = 'rtl';
        }
        var children;
        var previewed = {};
        this.radioRefs = [];
        if (this.props.children) {
            children = React.Children.map(this.props.children, function (child, index) {
                if (!React.isValidElement(child)) {
                    return child;
                }
                var checked = _this.state.value === child.props.value;
                if (checked) {
                    previewed.label = child.props.children;
                    previewed.value = child.props.value;
                }
                var tabIndex = (index === 0 && !_this.state.value) || checked ? 0 : -1;
                var childrtl = child.props.rtl === undefined ? rtl : child.props.rtl;
                if (child.type && child.type.displayName === 'Config(Radio)') {
                    return React.cloneElement(child, {
                        checked: checked,
                        tabIndex: tabIndex,
                        rtl: childrtl,
                        ref: function (e) {
                            _this.saveRadioRef(e, index);
                        },
                    });
                }
                return React.cloneElement(child, {
                    checked: checked,
                    rtl: childrtl,
                    ref: function (e) {
                        _this.saveRadioRef(e, index);
                    },
                });
            });
        }
        else {
            children = this.props.dataSource.map(function (item, index) {
                var option;
                if (typeof item !== 'object') {
                    option = {
                        label: item,
                        value: item,
                        disabled: disabled,
                    };
                }
                else {
                    option = item;
                }
                var checked = _this.state.value === option.value;
                if (checked) {
                    previewed.label = option.label;
                    previewed.value = option.value;
                }
                return (React.createElement(Radio, { key: index, tabIndex: (index === 0 && !_this.state.value) || checked ? 0 : -1, value: option.value, checked: checked, label: option.label, disabled: disabled || option.disabled, ref: function (e) {
                        _this.saveRadioRef(e, index);
                    } }));
            });
        }
        if (isPreview) {
            var previewCls = classnames(className, "".concat(prefix, "form-preview"));
            if ('renderPreview' in this.props) {
                return (React.createElement("div", __assign({}, others, { className: previewCls }), renderPreview(previewed, this.props)));
            }
            return (React.createElement("p", __assign({}, others, { className: previewCls }), previewed.label));
        }
        var isButtonShape = shape === 'button';
        var cls = classnames(className, (_a = {},
            _a["".concat(prefix, "radio-group")] = true,
            _a["".concat(prefix, "radio-group-").concat(direction)] = !isButtonShape,
            _a["".concat(prefix, "radio-button")] = isButtonShape,
            _a["".concat(prefix, "radio-button-").concat(size)] = isButtonShape,
            _a.disabled = disabled,
            _a));
        var TagName = component;
        return (React.createElement(TagName, __assign({}, others, { "aria-disabled": disabled, role: "radiogroup", className: cls, style: style, onFocus: makeChain(function () {
                this.hasFocus = true;
            }.bind(this), this.props.onFocus), onBlur: makeChain(function () {
                this.hasFocus = false;
            }.bind(this), this.props.onBlur) }), children));
    };
    RadioGroup.propTypes = __assign(__assign({}, ConfigProvider.propTypes), { prefix: PropTypes.string, className: PropTypes.string, style: PropTypes.object, name: PropTypes.string, value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]), defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]), component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]), onChange: PropTypes.func, disabled: PropTypes.bool, shape: PropTypes.oneOf(['normal', 'button']), size: PropTypes.oneOf(['large', 'medium', 'small']), dataSource: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.string),
            PropTypes.arrayOf(PropTypes.object),
        ]), children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]), direction: PropTypes.oneOf(['hoz', 'ver']), isPreview: PropTypes.bool, renderPreview: PropTypes.func });
    RadioGroup.defaultProps = {
        dataSource: [],
        size: 'medium',
        onChange: function () { },
        prefix: 'next-',
        component: 'div',
        direction: 'hoz',
        isPreview: false,
    };
    RadioGroup.childContextTypes = {
        onChange: PropTypes.func,
        __group__: PropTypes.bool,
        isButton: PropTypes.bool,
        selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
        disabled: PropTypes.bool,
    };
    RadioGroup.displayName = 'RadioGroup';
    return RadioGroup;
}(Component));
export default polyfill(RadioGroup);
