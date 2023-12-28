"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var prop_types_1 = require("prop-types");
var body_1 = require("../base/body");
var ListBody = /** @class */ (function (_super) {
    tslib_1.__extends(ListBody, _super);
    function ListBody() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this.onScroll = function (e) {
            var onFixedScrollSync = _this.context.onFixedScrollSync;
            onFixedScrollSync && onFixedScrollSync(e);
        };
        return _this;
    }
    ListBody.prototype.componentDidMount = function () {
        var getNode = this.context.getNode;
        getNode && getNode('body', (0, react_dom_1.findDOMNode)(this));
    };
    ListBody.prototype.render = function () {
        return react_1.default.createElement(body_1.default, tslib_1.__assign({ component: "div", onScroll: this.onScroll }, this.props));
    };
    ListBody.contextTypes = {
        getNode: prop_types_1.default.func,
        onFixedScrollSync: prop_types_1.default.func,
    };
    return ListBody;
}(react_1.default.Component));
exports.default = ListBody;
