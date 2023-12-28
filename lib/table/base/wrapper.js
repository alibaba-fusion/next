"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
/* eslint-disable react/prefer-stateless-function */
var Wrapper = /** @class */ (function (_super) {
    tslib_1.__extends(Wrapper, _super);
    function Wrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Wrapper.prototype.render = function () {
        var _a = this.props, colGroup = _a.colGroup, children = _a.children, tableWidth = _a.tableWidth, Tag = _a.component;
        return (react_1.default.createElement(Tag, { role: "table", style: { width: tableWidth } },
            colGroup,
            children));
    };
    Wrapper.propTypes = {
        tableWidth: prop_types_1.default.number,
    };
    return Wrapper;
}(react_1.Component));
exports.default = Wrapper;
Wrapper.defaultProps = {
    component: 'table',
};
Wrapper.propTypes = {
    children: prop_types_1.default.any,
    prefix: prop_types_1.default.string,
    colGroup: prop_types_1.default.any,
    component: prop_types_1.default.string,
};
