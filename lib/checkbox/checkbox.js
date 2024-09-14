"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var PropTypes = tslib_1.__importStar(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var mixin_ui_state_1 = tslib_1.__importDefault(require("../mixin-ui-state"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var icon_1 = tslib_1.__importDefault(require("../icon"));
var with_context_1 = tslib_1.__importDefault(require("./with-context"));
var util_1 = require("../util");
var noop = util_1.func.noop;
function isChecked(selectedValue, value) {
    return selectedValue.indexOf(value) > -1;
}
/**
 * Checkbox
 * @order 1
 */
var Checkbox = /** @class */ (function (_super) {
    tslib_1.__extends(Checkbox, _super);
    function Checkbox(props) {
        var _this = _super.call(this, props) || this;
        var context = props.context;
        var checked, indeterminate;
        if ('checked' in props) {
            checked = props.checked;
        }
        else {
            checked = props.defaultChecked;
        }
        if ('indeterminate' in props) {
            indeterminate = props.indeterminate;
        }
        else {
            indeterminate = props.defaultIndeterminate;
        }
        if (context.__group__) {
            checked = isChecked(context.selectedValue, props.value);
        }
        _this.state = {
            checked: checked,
            indeterminate: indeterminate,
        };
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }
    Checkbox.getDerivedStateFromProps = function (nextProps) {
        var nextContext = nextProps.context;
        var state = {};
        if (nextContext.__group__) {
            if ('selectedValue' in nextContext) {
                state.checked = isChecked(nextContext.selectedValue, nextProps.value);
            }
        }
        else if ('checked' in nextProps) {
            state.checked = nextProps.checked;
        }
        if ('indeterminate' in nextProps) {
            state.indeterminate = nextProps.indeterminate;
        }
        return state;
    };
    Object.defineProperty(Checkbox.prototype, "disabled", {
        get: function () {
            var props = this.props;
            var context = props.context;
            return props.disabled || ('disabled' in context && context.disabled);
        },
        enumerable: false,
        configurable: true
    });
    Checkbox.prototype.shouldComponentUpdate = function (nextProps, nextState, nextContext) {
        var shallowEqual = util_1.obj.shallowEqual;
        return (!shallowEqual(this.props, nextProps) ||
            !shallowEqual(this.state, nextState) ||
            !shallowEqual(this.context, nextContext));
    };
    Checkbox.prototype.onChange = function (event) {
        var _a, _b;
        var _c = this.props, context = _c.context, value = _c.value;
        var checked = event.target.checked;
        if (this.disabled) {
            return;
        }
        if (context.__group__) {
            context.onChange(value, event);
        }
        else {
            if (!('checked' in this.props)) {
                this.setState({
                    checked: checked,
                });
            }
            if (!('indeterminate' in this.props)) {
                this.setState({
                    indeterminate: false,
                });
            }
            (_b = (_a = this.props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, checked, event);
        }
    };
    Checkbox.prototype.render = function () {
        var _a, _b;
        /* eslint-disable no-unused-vars */
        var _c = this.props, id = _c.id, className = _c.className, children = _c.children, style = _c.style, label = _c.label, onMouseEnter = _c.onMouseEnter, onMouseLeave = _c.onMouseLeave, rtl = _c.rtl, isPreview = _c.isPreview, renderPreview = _c.renderPreview, context = _c.context, value = _c.value, name = _c.name, otherProps = tslib_1.__rest(_c, ["id", "className", "children", "style", "label", "onMouseEnter", "onMouseLeave", "rtl", "isPreview", "renderPreview", "context", "value", "name"]);
        var checked = !!this.state.checked;
        var disabled = this.disabled;
        var indeterminate = !!this.state.indeterminate;
        var prefix = context.prefix || this.props.prefix;
        var others = util_1.obj.pickOthers(Checkbox.propTypes, otherProps);
        var othersData = util_1.obj.pickAttrsWith(others, 'data-');
        if (otherProps.title) {
            othersData.title = otherProps.title;
        }
        var childInput = (React.createElement("input", tslib_1.__assign({}, util_1.obj.pickOthers(Checkbox.propTypes, otherProps), { id: id, value: value, name: name, disabled: disabled, checked: checked, type: "checkbox", onChange: this.onChange, "aria-checked": indeterminate ? 'mixed' : checked, className: "".concat(prefix, "checkbox-input") })));
        // disable 无状态操作
        if (!disabled) {
            childInput = this.getStateElement(childInput);
        }
        var cls = (0, classnames_1.default)(className, (_a = {},
            _a["".concat(prefix, "checkbox-wrapper")] = true,
            _a.checked = checked,
            _a.disabled = disabled,
            _a.indeterminate = indeterminate,
            _a[this.getStateClassName()] = true,
            _a));
        var labelCls = "".concat(prefix, "checkbox-label");
        var type = indeterminate ? 'semi-select' : 'select';
        if (isPreview) {
            var previewCls = (0, classnames_1.default)(className, "".concat(prefix, "form-preview"));
            if ('renderPreview' in this.props) {
                return (React.createElement("div", tslib_1.__assign({ id: id, dir: rtl ? 'rtl' : undefined }, othersData, { className: previewCls }), renderPreview === null || renderPreview === void 0 ? void 0 : renderPreview(checked, this.props)));
            }
            return (React.createElement("p", tslib_1.__assign({ id: id, dir: rtl ? 'rtl' : undefined }, othersData, { className: previewCls }), checked && (children || label || this.state.value)));
        }
        var iconCls = (0, classnames_1.default)((_b = {
                zoomIn: indeterminate
            },
            _b["".concat(prefix, "checkbox-semi-select-icon")] = indeterminate,
            _b["".concat(prefix, "checkbox-select-icon")] = !indeterminate,
            _b));
        return (React.createElement("label", tslib_1.__assign({}, othersData, { className: cls, style: style, dir: rtl ? 'rtl' : undefined, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave }),
            React.createElement("span", { className: "".concat(prefix, "checkbox") },
                React.createElement("span", { className: "".concat(prefix, "checkbox-inner") },
                    React.createElement(icon_1.default, { type: type, size: "xs", className: iconCls })),
                childInput),
            [label, children].map(function (item, i) {
                return item !== undefined && item !== null ? (React.createElement("span", { key: i, className: labelCls }, item)) : null;
            })));
    };
    Checkbox.displayName = 'Checkbox';
    Checkbox.propTypes = tslib_1.__assign(tslib_1.__assign({}, config_provider_1.default.propTypes), { prefix: PropTypes.string, rtl: PropTypes.bool, className: PropTypes.string, id: PropTypes.string, style: PropTypes.object, checked: PropTypes.bool, defaultChecked: PropTypes.bool, disabled: PropTypes.bool, label: PropTypes.node, indeterminate: PropTypes.bool, defaultIndeterminate: PropTypes.bool, onChange: PropTypes.func, onMouseEnter: PropTypes.func, onMouseLeave: PropTypes.func, value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]), name: PropTypes.string, isPreview: PropTypes.bool, renderPreview: PropTypes.func });
    Checkbox.defaultProps = {
        defaultChecked: false,
        defaultIndeterminate: false,
        onChange: noop,
        onMouseEnter: noop,
        onMouseLeave: noop,
        prefix: 'next-',
        isPreview: false,
    };
    return Checkbox;
}(mixin_ui_state_1.default));
exports.default = config_provider_1.default.config((0, with_context_1.default)((0, react_lifecycles_compat_1.polyfill)(Checkbox)));
