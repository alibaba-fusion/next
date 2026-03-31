"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var icon_font_1 = tslib_1.__importDefault(require("./icon-font"));
var icon_1 = tslib_1.__importDefault(require("./icon"));
var component_1 = require("../util/component");
var IconWithSub = (0, component_1.assignSubComponent)(icon_1.default, {
    createFromIconfontCN: icon_font_1.default,
});
exports.default = config_provider_1.default.config(IconWithSub);
