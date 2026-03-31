import { __extends } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
/**
 * Select.OptionGroup
 */
var OptionGroup = /** @class */ (function (_super) {
    __extends(OptionGroup, _super);
    function OptionGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OptionGroup.prototype.render = function () {
        return this.props.children;
    };
    OptionGroup.propTypes = {
        label: PropTypes.node,
        children: PropTypes.any,
    };
    OptionGroup._typeMark = 'next_select_option_group';
    OptionGroup.displayName = 'OptionGroup';
    return OptionGroup;
}(React.Component));
export default OptionGroup;
