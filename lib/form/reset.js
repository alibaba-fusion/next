"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var button_1 = tslib_1.__importDefault(require("../button"));
var util_1 = require("../util");
var Reset = /** @class */ (function (_super) {
    tslib_1.__extends(Reset, _super);
    function Reset() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this.handleClick = function () {
            var _a = _this.props, names = _a.names, toDefault = _a.toDefault, onClick = _a.onClick;
            var field = _this.context._formField || _this.props.field;
            if (!field) {
                onClick();
                return;
            }
            if (toDefault) {
                field.resetToDefault(names);
            }
            else {
                field.reset(names);
            }
            onClick();
        };
        return _this;
    }
    Reset.prototype.render = function () {
        var children = this.props.children;
        return (react_1.default.createElement(button_1.default, tslib_1.__assign({}, util_1.obj.pickOthers(Reset.propTypes, this.props), { onClick: this.handleClick }), children));
    };
    Reset.displayName = 'Reset';
    Reset.propTypes = {
        names: prop_types_1.default.array,
        onClick: prop_types_1.default.func,
        toDefault: prop_types_1.default.bool,
        field: prop_types_1.default.object,
        children: prop_types_1.default.node,
    };
    Reset.defaultProps = {
        onClick: util_1.func.noop,
    };
    Reset.contextTypes = {
        _formField: prop_types_1.default.object,
    };
    return Reset;
}(react_1.default.Component));
exports.default = Reset;
