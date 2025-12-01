import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
var Error = /** @class */ (function (_super) {
    __extends(Error, _super);
    function Error() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.itemRender = function (errors) {
            return errors.length ? errors : null;
        };
        return _this;
    }
    Error.prototype.render = function () {
        var _a;
        var _b = this.props, children = _b.children, name = _b.name, prefix = _b.prefix, style = _b.style, className = _b.className, _field = _b.field, preferMarginToDisplayHelp = _b.preferMarginToDisplayHelp, others = __rest(_b, ["children", "name", "prefix", "style", "className", "field", "preferMarginToDisplayHelp"]);
        if (children && typeof children !== 'function') {
            return (React.createElement("div", { className: "".concat(prefix, "form-item-help") },
                children,
                !!preferMarginToDisplayHelp && (React.createElement("div", { className: "".concat(prefix, "form-item-help-margin-offset") }))));
        }
        var field = this.context._formField || _field;
        if (!field || !name) {
            return null;
        }
        var isSingle = typeof name === 'string';
        var names = isSingle ? [name] : name;
        var errorArr = [];
        if (names.length) {
            var errors_1 = field.getErrors(names);
            Object.keys(errors_1).forEach(function (key) {
                if (errors_1[key]) {
                    errorArr.push(errors_1[key]);
                }
            });
        }
        var result = null;
        if (typeof children === 'function') {
            result = children(errorArr, isSingle ? field.getState(name) : undefined);
        }
        else {
            result = this.itemRender(errorArr);
        }
        if (!result) {
            return null;
        }
        var cls = classNames((_a = {},
            _a["".concat(prefix, "form-item-help")] = true,
            _a[className] = className,
            _a));
        return (React.createElement("div", __assign({}, others, { className: cls, style: style, role: "alert" }),
            result,
            !!preferMarginToDisplayHelp && (React.createElement("div", { className: "".concat(prefix, "form-item-help-margin-offset") }))));
    };
    Error.displayName = 'Error';
    Error.propTypes = {
        name: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        field: PropTypes.object,
        style: PropTypes.object,
        className: PropTypes.string,
        children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
        prefix: PropTypes.string,
        preferMarginToDisplayHelp: PropTypes.bool,
    };
    Error.defaultProps = {
        prefix: 'next-',
        preferMarginToDisplayHelp: false,
    };
    Error.contextTypes = {
        _formField: PropTypes.object,
    };
    Error._typeMark = 'form_error';
    return Error;
}(Component));
export default ConfigProvider.config(Error);
