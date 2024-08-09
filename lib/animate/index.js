"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var component_1 = require("../util/component");
var animate_1 = tslib_1.__importDefault(require("./animate"));
var expand_1 = tslib_1.__importDefault(require("./expand"));
var overlay_animate_1 = tslib_1.__importDefault(require("./overlay-animate"));
var AnimateWithSubComponent = (0, component_1.assignSubComponent)(animate_1.default, { Expand: expand_1.default, OverlayAnimate: overlay_animate_1.default });
exports.default = AnimateWithSubComponent;
