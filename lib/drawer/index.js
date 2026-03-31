"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var drawer_1 = tslib_1.__importDefault(require("./drawer"));
var drawer_v2_1 = tslib_1.__importDefault(require("./drawer-v2"));
var inner_1 = tslib_1.__importDefault(require("./inner"));
var show_1 = require("./show");
var Drawer = /** @class */ (function (_super) {
    tslib_1.__extends(Drawer, _super);
    function Drawer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Drawer.prototype.render = function () {
        var _a = this.props, v2 = _a.v2, others = tslib_1.__rest(_a, ["v2"]);
        if (v2) {
            return react_1.default.createElement(drawer_v2_1.default, tslib_1.__assign({}, others));
        }
        else {
            return react_1.default.createElement(drawer_1.default, tslib_1.__assign({}, others));
        }
    };
    return Drawer;
}(react_1.default.Component));
Drawer.Inner = inner_1.default;
Drawer.show = show_1.show;
Drawer.withContext = show_1.withContext;
exports.default = config_provider_1.default.config(Drawer);
