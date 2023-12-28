import { __assign, __extends, __read, __spreadArray } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import { func, obj } from '../util';
/**
 * Form.Reset
 * @description 继承 Button API
 * @order 3
 */
var Reset = /** @class */ (function (_super) {
    __extends(Reset, _super);
    function Reset() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
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
        return (React.createElement(Button, __assign({}, obj.pickOthers(Reset.propTypes, this.props), { onClick: this.handleClick }), children));
    };
    Reset.propTypes = {
        /**
         * 自定义重置的字段
         */
        names: PropTypes.array,
        /**
         * 点击提交后触发
         */
        onClick: PropTypes.func,
        /**
         * 返回默认值
         */
        toDefault: PropTypes.bool,
        /**
         * 自定义 field (在 Form 内不需要设置)
         */
        field: PropTypes.object,
        children: PropTypes.node,
    };
    Reset.defaultProps = {
        onClick: func.noop,
    };
    Reset.contextTypes = {
        _formField: PropTypes.object,
    };
    return Reset;
}(React.Component));
export default Reset;
