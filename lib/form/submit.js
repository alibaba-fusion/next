"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var button_1 = require("../button");
var util_1 = require("../util");
/**
 * Form.Submit
 * @description 继承 Button API
 * @order 2
 */
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
    Submit.propTypes = {
        /**
         * 点击提交后触发
         * @param {Object} value 数据
         * @param {Object} errors 错误数据
         * @param {class} field 实例
         */
        onClick: prop_types_1.default.func,
        /**
         * 是否校验/需要校验的 name 数组
         */
        validate: prop_types_1.default.oneOfType([prop_types_1.default.bool, prop_types_1.default.array]),
        /**
         * 自定义 field (在 Form 内不需要设置)
         */
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
