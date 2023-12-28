import { __extends } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable react/prefer-stateless-function */
var FixedWrapper = /** @class */ (function (_super) {
    __extends(FixedWrapper, _super);
    function FixedWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FixedWrapper.prototype.render = function () {
        var _a = this.props, children = _a.children, wrapperContent = _a.wrapperContent, prefix = _a.prefix;
        return (React.createElement("div", { className: "".concat(prefix, "table-inner") },
            children,
            wrapperContent));
    };
    FixedWrapper.propTypes = {
        children: PropTypes.any,
        prefix: PropTypes.string,
        colGroup: PropTypes.any,
        wrapperContent: PropTypes.any,
    };
    return FixedWrapper;
}(React.Component));
export default FixedWrapper;
