import { __assign, __extends } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import Text from './text';
/**
 * Typography
 */
var Typography = /** @class */ (function (_super) {
    __extends(Typography, _super);
    function Typography() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Typography.prototype.render = function () {
        return React.createElement(Text, __assign({}, this.props));
    };
    Typography.propTypes = {
        component: PropTypes.elementType,
    };
    Typography.defaultProps = {
        component: 'article',
    };
    return Typography;
}(React.Component));
export default Typography;
