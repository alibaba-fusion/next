"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var prop_types_1 = require("prop-types");
var body_1 = require("../base/body");
/* eslint-disable react/prefer-stateless-function */
var FixedBody = /** @class */ (function (_super) {
    tslib_1.__extends(FixedBody, _super);
    function FixedBody() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this.onBodyScroll = function (event) {
            var onFixedScrollSync = _this.context.onFixedScrollSync;
            // sync scroll left to header
            onFixedScrollSync && onFixedScrollSync(event);
            // sync scroll top/left to lock columns
            if ('onLockScroll' in _this.props && typeof _this.props.onLockScroll === 'function') {
                _this.props.onLockScroll(event);
            }
        };
        return _this;
    }
    FixedBody.prototype.componentDidMount = function () {
        var getNode = this.context.getNode;
        getNode && getNode('body', (0, react_dom_1.findDOMNode)(this));
    };
    FixedBody.prototype.render = function () {
        /*eslint-disable no-unused-vars */
        var _a = this.props, className = _a.className, colGroup = _a.colGroup, onLockScroll = _a.onLockScroll, tableWidth = _a.tableWidth, others = tslib_1.__rest(_a, ["className", "colGroup", "onLockScroll", "tableWidth"]);
        var _b = this.context, maxBodyHeight = _b.maxBodyHeight, fixedHeader = _b.fixedHeader;
        var style = {};
        if (fixedHeader) {
            style.maxHeight = maxBodyHeight;
            style.position = 'relative';
        }
        return (react_1.default.createElement("div", { style: style, className: className, onScroll: this.onBodyScroll },
            react_1.default.createElement("table", { style: { width: tableWidth } },
                colGroup,
                react_1.default.createElement(body_1.default, tslib_1.__assign({}, others, { colGroup: colGroup })))));
    };
    FixedBody.propTypes = {
        children: prop_types_1.default.any,
        prefix: prop_types_1.default.string,
        className: prop_types_1.default.string,
        colGroup: prop_types_1.default.any,
        onLockScroll: prop_types_1.default.func,
        tableWidth: prop_types_1.default.number,
    };
    FixedBody.contextTypes = {
        fixedHeader: prop_types_1.default.bool,
        maxBodyHeight: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.string]),
        onFixedScrollSync: prop_types_1.default.func,
        getNode: prop_types_1.default.func,
    };
    return FixedBody;
}(react_1.default.Component));
exports.default = FixedBody;
