"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var prop_types_1 = require("prop-types");
var header_1 = require("../base/header");
/* eslint-disable react/prefer-stateless-function */
var FixedHeader = /** @class */ (function (_super) {
    tslib_1.__extends(FixedHeader, _super);
    function FixedHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FixedHeader.prototype.componentDidMount = function () {
        this.context.getNode('header', (0, react_dom_1.findDOMNode)(this));
    };
    // 这里的 style={{overflow: 'unset'}} 可以删掉，只是为了解决用户js升级但是样式没升级的情况
    // 这里的 style={{position: 'absolute', right: 0}} 也可以删掉，是为了兼容用户js升级但是样式没升级的情况
    FixedHeader.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, className = _a.className, colGroup = _a.colGroup, tableWidth = _a.tableWidth, others = tslib_1.__rest(_a, ["prefix", "className", "colGroup", "tableWidth"]);
        var _b = this.context, onFixedScrollSync = _b.onFixedScrollSync, lockType = _b.lockType;
        return (react_1.default.createElement("div", { className: className, onScroll: onFixedScrollSync },
            react_1.default.createElement("div", { className: "".concat(prefix, "table-header-inner"), style: { overflow: 'unset' } },
                react_1.default.createElement("table", { style: { width: tableWidth } },
                    colGroup,
                    react_1.default.createElement(header_1.default, tslib_1.__assign({}, others, { prefix: prefix })))),
            !lockType && (react_1.default.createElement("div", { className: "".concat(prefix, "table-header-fixer"), style: { position: 'absolute', right: 0 } }))));
    };
    FixedHeader.propTypes = {
        children: prop_types_1.default.any,
        prefix: prop_types_1.default.string,
        className: prop_types_1.default.string,
        colGroup: prop_types_1.default.any,
        tableWidth: prop_types_1.default.number,
    };
    FixedHeader.contextTypes = {
        getNode: prop_types_1.default.func,
        onFixedScrollSync: prop_types_1.default.func,
        lockType: prop_types_1.default.oneOf(['left', 'right']),
    };
    return FixedHeader;
}(react_1.default.Component));
exports.default = FixedHeader;
