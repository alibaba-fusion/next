"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
/* eslint-disable react/prefer-stateless-function */
var FixedWrapper = /** @class */ (function (_super) {
    tslib_1.__extends(FixedWrapper, _super);
    function FixedWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FixedWrapper.prototype.render = function () {
        var _a = this.props, children = _a.children, wrapperContent = _a.wrapperContent, prefix = _a.prefix;
        return (react_1.default.createElement("div", { className: "".concat(prefix, "table-inner") },
            children,
            wrapperContent));
    };
    FixedWrapper.propTypes = {
        children: prop_types_1.default.any,
        prefix: prop_types_1.default.string,
        colGroup: prop_types_1.default.any,
        wrapperContent: prop_types_1.default.any,
    };
    return FixedWrapper;
}(react_1.default.Component));
exports.default = FixedWrapper;
