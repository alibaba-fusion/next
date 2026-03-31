"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var Error = /** @class */ (function (_super) {
    tslib_1.__extends(Error, _super);
    function Error() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this.itemRender = function (errors) {
            return errors.length ? errors : null;
        };
        return _this;
    }
    Error.prototype.render = function () {
        var _a;
        var _b = this.props, children = _b.children, name = _b.name, prefix = _b.prefix, style = _b.style, className = _b.className, _field = _b.field, preferMarginToDisplayHelp = _b.preferMarginToDisplayHelp, others = tslib_1.__rest(_b, ["children", "name", "prefix", "style", "className", "field", "preferMarginToDisplayHelp"]);
        if (children && typeof children !== 'function') {
            return (react_1.default.createElement("div", { className: "".concat(prefix, "form-item-help") },
                children,
                !!preferMarginToDisplayHelp && (react_1.default.createElement("div", { className: "".concat(prefix, "form-item-help-margin-offset") }))));
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
        var cls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "form-item-help")] = true,
            _a[className] = className,
            _a));
        return (react_1.default.createElement("div", tslib_1.__assign({}, others, { className: cls, style: style, role: "alert" }),
            result,
            !!preferMarginToDisplayHelp && (react_1.default.createElement("div", { className: "".concat(prefix, "form-item-help-margin-offset") }))));
    };
    Error.displayName = 'Error';
    Error.propTypes = {
        name: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.array]),
        field: prop_types_1.default.object,
        style: prop_types_1.default.object,
        className: prop_types_1.default.string,
        children: prop_types_1.default.oneOfType([prop_types_1.default.node, prop_types_1.default.func]),
        prefix: prop_types_1.default.string,
        preferMarginToDisplayHelp: prop_types_1.default.bool,
    };
    Error.defaultProps = {
        prefix: 'next-',
        preferMarginToDisplayHelp: false,
    };
    Error.contextTypes = {
        _formField: prop_types_1.default.object,
    };
    Error._typeMark = 'form_error';
    return Error;
}(react_1.Component));
exports.default = config_provider_1.default.config(Error);
