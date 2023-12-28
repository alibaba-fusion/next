import { __extends } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
/* istanbul ignore file */
/**
 * Select.Option
 */
var Option = /** @class */ (function (_super) {
    __extends(Option, _super);
    function Option() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Option.prototype.render = function () {
        return this.props.children;
    };
    Option.propTypes = {
        /**
         * 选项值
         */
        value: PropTypes.any.isRequired,
        /**
         * 是否禁用
         */
        disabled: PropTypes.bool,
        children: PropTypes.any,
    };
    Option._typeMark = 'next_select_option';
    return Option;
}(React.Component));
export default Option;
