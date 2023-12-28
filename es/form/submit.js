import { __assign, __extends, __read, __spreadArray } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import { func, obj } from '../util';
/**
 * Form.Submit
 * @description 继承 Button API
 * @order 2
 */
var Submit = /** @class */ (function (_super) {
    __extends(Submit, _super);
    function Submit() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
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
        return (React.createElement(Button, __assign({}, obj.pickOthers(Submit.propTypes, this.props), { onClick: this.handleClick }), children));
    };
    Submit.propTypes = {
        /**
         * 点击提交后触发
         * @param {Object} value 数据
         * @param {Object} errors 错误数据
         * @param {class} field 实例
         */
        onClick: PropTypes.func,
        /**
         * 是否校验/需要校验的 name 数组
         */
        validate: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
        /**
         * 自定义 field (在 Form 内不需要设置)
         */
        field: PropTypes.object,
        children: PropTypes.node,
    };
    Submit.defaultProps = {
        onClick: func.noop,
    };
    Submit.contextTypes = {
        _formField: PropTypes.object,
    };
    return Submit;
}(React.Component));
export default Submit;
