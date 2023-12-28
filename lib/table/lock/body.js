"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var prop_types_1 = require("prop-types");
var body_1 = require("../fixed/body");
/* eslint-disable react/prefer-stateless-function */
var LockBody = /** @class */ (function (_super) {
    tslib_1.__extends(LockBody, _super);
    function LockBody() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this.onBodyScroll = function (event) {
            _this.context.onLockBodyScroll(event);
        };
        return _this;
    }
    LockBody.prototype.componentDidMount = function () {
        this.context.getLockNode('body', (0, react_dom_1.findDOMNode)(this), this.context.lockType);
    };
    LockBody.prototype.render = function () {
        var event = {
            onLockScroll: this.onBodyScroll,
        };
        return react_1.default.createElement(body_1.default, tslib_1.__assign({}, this.props, event));
    };
    LockBody.propTypes = tslib_1.__assign({}, body_1.default.propTypes);
    LockBody.contextTypes = tslib_1.__assign(tslib_1.__assign({}, body_1.default.contextTypes), { getLockNode: prop_types_1.default.func, onLockBodyScroll: prop_types_1.default.func, lockType: prop_types_1.default.oneOf(['left', 'right']) });
    return LockBody;
}(react_1.default.Component));
exports.default = LockBody;
