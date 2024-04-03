"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var component_1 = require("../util/component");
var collapse_1 = tslib_1.__importDefault(require("./collapse"));
var panel_1 = tslib_1.__importDefault(require("./panel"));
var CollapseWithPanel = (0, component_1.assignSubComponent)(collapse_1.default, { Panel: panel_1.default });
exports.default = CollapseWithPanel;
