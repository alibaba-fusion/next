import { __assign, __extends, __read, __spreadArray } from "tslib";
import * as React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { obj } from '../util';
import Checkbox from './checkbox';
var pickOthers = obj.pickOthers;
/** Checkbox.Group */
var CheckboxGroup = /** @class */ (function (_super) {
    __extends(CheckboxGroup, _super);
    function CheckboxGroup(props) {
        var _this = _super.call(this, props) || this;
        var value = [];
        if ('value' in props) {
            value = props.value;
        }
        else if ('defaultValue' in props) {
            value = props.defaultValue;
        }
        if (!Array.isArray(value)) {
            if (value === null || value === undefined) {
                value = [];
            }
            else {
                value = [value];
            }
        }
        _this.state = {
            value: __spreadArray([], __read(value), false),
        };
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }
    CheckboxGroup.prototype.getChildContext = function () {
        return {
            __group__: true,
            onChange: this.onChange,
            selectedValue: this.state.value,
            disabled: this.props.disabled,
        };
    };
    CheckboxGroup.getDerivedStateFromProps = function (nextProps) {
        if ('value' in nextProps) {
            var value = nextProps.value;
            if (!Array.isArray(value)) {
                if (value === null || value === undefined) {
                    value = [];
                }
                else {
                    value = [value];
                }
            }
            return { value: value };
        }
        return null;
    };
    CheckboxGroup.prototype.onChange = function (currentValue, event) {
        var _a, _b;
        var value = this.state.value;
        var index = value.indexOf(currentValue);
        var valTemp = __spreadArray([], __read(value), false);
        if (index === -1) {
            valTemp.push(currentValue);
        }
        else {
            valTemp.splice(index, 1);
        }
        if (!('value' in this.props)) {
            this.setState({ value: valTemp });
        }
        (_b = (_a = this.props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, valTemp, event);
    };
    CheckboxGroup.prototype.render = function () {
        var _a;
        var _this = this;
        var _b;
        var _c = this.props, className = _c.className, style = _c.style, prefix = _c.prefix, disabled = _c.disabled, direction = _c.direction, rtl = _c.rtl, isPreview = _c.isPreview, renderPreview = _c.renderPreview;
        var others = pickOthers(CheckboxGroup.propTypes, this.props);
        // 如果内嵌标签跟 dataSource 同时存在，以内嵌标签为主
        var children;
        var previewed = [];
        if (this.props.children) {
            children = React.Children.map(this.props.children, function (child) {
                var _a, _b, _c, _d;
                if (!React.isValidElement(child)) {
                    return child;
                }
                var checked = _this.state.value && _this.state.value.indexOf((_a = child.props) === null || _a === void 0 ? void 0 : _a.value) > -1;
                if (checked) {
                    previewed.push({
                        label: (_b = child.props) === null || _b === void 0 ? void 0 : _b.children,
                        value: (_c = child.props) === null || _c === void 0 ? void 0 : _c.value,
                    });
                }
                return React.cloneElement(child, ((_d = child.props) === null || _d === void 0 ? void 0 : _d.rtl) === undefined ? { rtl: rtl } : {});
            });
        }
        else {
            children = (_b = this.props.dataSource) === null || _b === void 0 ? void 0 : _b.map(function (item, index) {
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
                var checked = _this.state.value && _this.state.value.indexOf(option.value) > -1;
                if (checked) {
                    previewed.push({
                        label: option.label,
                        value: option.value,
                    });
                }
                return (React.createElement(Checkbox, { key: index, value: option.value, checked: checked, rtl: rtl, disabled: disabled || option.disabled, label: option.label }));
            });
        }
        if (isPreview) {
            var previewCls = classnames(className, "".concat(prefix, "form-preview"));
            if ('renderPreview' in this.props) {
                return (React.createElement("div", __assign({}, others, { dir: rtl ? 'rtl' : undefined, className: previewCls }), renderPreview === null || renderPreview === void 0 ? void 0 : renderPreview(previewed, this.props)));
            }
            return (React.createElement("p", __assign({}, others, { dir: rtl ? 'rtl' : undefined, className: previewCls }), previewed.map(function (item) { return item.label; }).join(', ')));
        }
        var cls = classnames(className, (_a = {},
            _a["".concat(prefix, "checkbox-group")] = true,
            _a["".concat(prefix, "checkbox-group-").concat(direction)] = true,
            _a.disabled = disabled,
            _a));
        return (React.createElement("span", __assign({ dir: rtl ? 'rtl' : undefined }, others, { className: cls, style: style }), children));
    };
    CheckboxGroup.displayName = 'CheckboxGroup';
    CheckboxGroup.propTypes = {
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        className: PropTypes.string,
        style: PropTypes.object,
        disabled: PropTypes.bool,
        dataSource: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.string),
            PropTypes.arrayOf(PropTypes.object),
        ]),
        value: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.string,
            PropTypes.number,
            PropTypes.bool,
        ]),
        defaultValue: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.string,
            PropTypes.number,
            PropTypes.bool,
        ]),
        children: PropTypes.arrayOf(PropTypes.element),
        onChange: PropTypes.func,
        direction: PropTypes.oneOf(['hoz', 'ver']),
        isPreview: PropTypes.bool,
        renderPreview: PropTypes.func,
    };
    CheckboxGroup.defaultProps = {
        dataSource: [],
        onChange: function () { },
        prefix: 'next-',
        direction: 'hoz',
        isPreview: false,
    };
    CheckboxGroup.childContextTypes = {
        onChange: PropTypes.func,
        __group__: PropTypes.bool,
        selectedValue: PropTypes.array,
        disabled: PropTypes.bool,
    };
    return CheckboxGroup;
}(React.Component));
export default polyfill(CheckboxGroup);
