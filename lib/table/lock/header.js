"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_dom_1 = require("react-dom");
var prop_types_1 = require("prop-types");
var header_1 = require("../fixed/header");
var LockHeader = /** @class */ (function (_super) {
    tslib_1.__extends(LockHeader, _super);
    function LockHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LockHeader.prototype.componentDidMount = function () {
        var _a = this.context, getNode = _a.getNode, getLockNode = _a.getLockNode;
        getNode && getNode('header', (0, react_dom_1.findDOMNode)(this), this.context.lockType);
        getLockNode && getLockNode('header', (0, react_dom_1.findDOMNode)(this), this.context.lockType);
    };
    LockHeader.propTypes = tslib_1.__assign({}, header_1.default.propTypes);
    LockHeader.contextTypes = tslib_1.__assign(tslib_1.__assign({}, header_1.default.contextTypes), { getLockNode: prop_types_1.default.func, lockType: prop_types_1.default.oneOf(['left', 'right']) });
    return LockHeader;
}(header_1.default));
exports.default = LockHeader;
