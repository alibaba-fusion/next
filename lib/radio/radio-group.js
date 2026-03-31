"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var util_1 = require("../util");
var radio_1 = tslib_1.__importDefault(require("./radio"));
var makeChain = util_1.func.makeChain;
var focusRef = util_1.focus.focusRef;
var pickOthers = util_1.obj.pickOthers;
var RadioGroup = /** @class */ (function (_super) {
    tslib_1.__extends(RadioGroup, _super);
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
            children = react_1.default.Children.map(this.props.children, function (child, index) {
                if (!react_1.default.isValidElement(child)) {
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
                    return react_1.default.cloneElement(child, {
                        checked: checked,
                        tabIndex: tabIndex,
                        rtl: childrtl,
                        ref: function (e) {
                            _this.saveRadioRef(e, index);
                        },
                    });
                }
                return react_1.default.cloneElement(child, {
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
                return (react_1.default.createElement(radio_1.default, { key: index, tabIndex: (index === 0 && !_this.state.value) || checked ? 0 : -1, value: option.value, checked: checked, label: option.label, disabled: disabled || option.disabled, ref: function (e) {
                        _this.saveRadioRef(e, index);
                    } }));
            });
        }
        if (isPreview) {
            var previewCls = (0, classnames_1.default)(className, "".concat(prefix, "form-preview"));
            if ('renderPreview' in this.props) {
                return (react_1.default.createElement("div", tslib_1.__assign({}, others, { className: previewCls }), renderPreview(previewed, this.props)));
            }
            return (react_1.default.createElement("p", tslib_1.__assign({}, others, { className: previewCls }), previewed.label));
        }
        var isButtonShape = shape === 'button';
        var cls = (0, classnames_1.default)(className, (_a = {},
            _a["".concat(prefix, "radio-group")] = true,
            _a["".concat(prefix, "radio-group-").concat(direction)] = !isButtonShape,
            _a["".concat(prefix, "radio-button")] = isButtonShape,
            _a["".concat(prefix, "radio-button-").concat(size)] = isButtonShape,
            _a.disabled = disabled,
            _a));
        var TagName = component;
        return (react_1.default.createElement(TagName, tslib_1.__assign({}, others, { "aria-disabled": disabled, role: "radiogroup", className: cls, style: style, onFocus: makeChain(function () {
                this.hasFocus = true;
            }.bind(this), this.props.onFocus), onBlur: makeChain(function () {
                this.hasFocus = false;
            }.bind(this), this.props.onBlur) }), children));
    };
    RadioGroup.propTypes = tslib_1.__assign(tslib_1.__assign({}, config_provider_1.default.propTypes), { prefix: prop_types_1.default.string, className: prop_types_1.default.string, style: prop_types_1.default.object, name: prop_types_1.default.string, value: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number, prop_types_1.default.bool]), defaultValue: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number, prop_types_1.default.bool]), component: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.func]), onChange: prop_types_1.default.func, disabled: prop_types_1.default.bool, shape: prop_types_1.default.oneOf(['normal', 'button']), size: prop_types_1.default.oneOf(['large', 'medium', 'small']), dataSource: prop_types_1.default.oneOfType([
            prop_types_1.default.arrayOf(prop_types_1.default.string),
            prop_types_1.default.arrayOf(prop_types_1.default.object),
        ]), children: prop_types_1.default.oneOfType([prop_types_1.default.arrayOf(prop_types_1.default.element), prop_types_1.default.element]), direction: prop_types_1.default.oneOf(['hoz', 'ver']), isPreview: prop_types_1.default.bool, renderPreview: prop_types_1.default.func });
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
        onChange: prop_types_1.default.func,
        __group__: prop_types_1.default.bool,
        isButton: prop_types_1.default.bool,
        selectedValue: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number, prop_types_1.default.bool]),
        disabled: prop_types_1.default.bool,
    };
    RadioGroup.displayName = 'RadioGroup';
    return RadioGroup;
}(react_1.Component));
exports.default = (0, react_lifecycles_compat_1.polyfill)(RadioGroup);
