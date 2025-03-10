"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var button_1 = tslib_1.__importDefault(require("../button"));
var util_1 = require("../util");
var Submit = /** @class */ (function (_super) {
    tslib_1.__extends(Submit, _super);
    function Submit() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this.handleClick = function () {
            var _a = _this.props, onClick = _a.onClick, validate = _a.validate;
            var field = _this.context._formField || _this.props.field;
            if (!field) {
                onClick();
                return;
            }
            if (validate === true) {
                field.validate(function (errors) {
                    onClick(field.getValues(), errors, field);
                });
            }
            else if (Array.isArray(validate)) {
                field.validate(validate, function (errors) {
                    onClick(field.getValues(), errors, field);
                });
            }
            else {
                onClick(field.getValues(), null, field);
            }
        };
        return _this;
    }
    Submit.prototype.render = function () {
        var children = this.props.children;
        return (react_1.default.createElement(button_1.default, tslib_1.__assign({}, util_1.obj.pickOthers(Submit.propTypes, this.props), { onClick: this.handleClick }), children));
    };
    Submit.displayName = 'Submit';
    Submit.propTypes = {
        onClick: prop_types_1.default.func,
        validate: prop_types_1.default.oneOfType([prop_types_1.default.bool, prop_types_1.default.array]),
        field: prop_types_1.default.object,
        children: prop_types_1.default.node,
    };
    Submit.defaultProps = {
        onClick: util_1.func.noop,
    };
    Submit.contextTypes = {
        _formField: prop_types_1.default.object,
    };
    return Submit;
}(react_1.default.Component));
exports.default = Submit;
