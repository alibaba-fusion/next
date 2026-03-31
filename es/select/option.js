import { __extends } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
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
        value: PropTypes.any.isRequired,
        disabled: PropTypes.bool,
        children: PropTypes.any,
    };
    Option._typeMark = 'next_select_option';
    Option.displayName = 'Option';
    return Option;
}(React.Component));
export default Option;
