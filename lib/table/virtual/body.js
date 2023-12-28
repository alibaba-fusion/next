"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var prop_types_1 = require("prop-types");
var body_1 = require("../base/body");
/* eslint-disable react/prefer-stateless-function */
var VirtualBody = /** @class */ (function (_super) {
    tslib_1.__extends(VirtualBody, _super);
    function VirtualBody() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this.tableRef = function (table) {
            _this.tableNode = table;
        };
        _this.virtualScrollRef = function (virtualScroll) {
            _this.virtualScrollNode = virtualScroll;
        };
        _this.onScroll = function (current) {
            // for fixed
            _this.context.onFixedScrollSync(current);
            // for lock
            _this.context.onLockBodyScroll(current);
            // for virtual
            _this.context.onVirtualScroll();
        };
        return _this;
    }
    VirtualBody.prototype.componentDidMount = function () {
        var bodyNode = (0, react_dom_1.findDOMNode)(this);
        // // for fixed
        this.context.getNode('body', bodyNode);
        // for virtual
        this.context.getBodyNode(bodyNode, this.context.lockType);
        // for lock
        this.context.getLockNode('body', bodyNode, this.context.lockType);
    };
    VirtualBody.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, className = _a.className, colGroup = _a.colGroup, tableWidth = _a.tableWidth, others = tslib_1.__rest(_a, ["prefix", "className", "colGroup", "tableWidth"]);
        var _b = this.context, maxBodyHeight = _b.maxBodyHeight, bodyHeight = _b.bodyHeight, innerTop = _b.innerTop;
        var style = {
            width: tableWidth,
        };
        var wrapperStyle = {
            position: 'relative',
        };
        // todo 2.0 ，这里最好自己画滚动条
        if (bodyHeight > maxBodyHeight) {
            wrapperStyle.height = bodyHeight;
        }
        return (react_1.default.createElement("div", { style: { maxHeight: maxBodyHeight }, className: className, onScroll: this.onScroll },
            react_1.default.createElement("div", { style: wrapperStyle, ref: this.virtualScrollRef },
                react_1.default.createElement("div", { style: {
                        position: 'relative',
                        transform: "translateY(".concat(innerTop, "px)"),
                        willChange: 'transform',
                    } },
                    react_1.default.createElement("table", { ref: this.tableRef, style: style },
                        colGroup,
                        react_1.default.createElement(body_1.default, tslib_1.__assign({}, others, { prefix: prefix })))))));
    };
    VirtualBody.propTypes = {
        children: prop_types_1.default.any,
        prefix: prop_types_1.default.string,
        className: prop_types_1.default.string,
        colGroup: prop_types_1.default.any,
        tableWidth: prop_types_1.default.number,
    };
    VirtualBody.contextTypes = {
        maxBodyHeight: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.string]),
        onBodyScroll: prop_types_1.default.func,
        onFixedScrollSync: prop_types_1.default.func,
        onVirtualScroll: prop_types_1.default.func,
        onLockBodyScroll: prop_types_1.default.func,
        bodyHeight: prop_types_1.default.number,
        innerTop: prop_types_1.default.number,
        getNode: prop_types_1.default.func,
        getBodyNode: prop_types_1.default.func,
        getLockNode: prop_types_1.default.func,
        lockType: prop_types_1.default.oneOf(['left', 'right']),
    };
    return VirtualBody;
}(react_1.default.Component));
exports.default = VirtualBody;
