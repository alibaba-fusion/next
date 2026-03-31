"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// @ts-expect-error Animate 在 meet-react 中没有导出
var meet_react_1 = require("@alifd/meet-react");
var index_1 = tslib_1.__importDefault(require("../index"));
var Animate = meet_react_1.Animate ? meet_react_1.Animate : index_1.default;
exports.default = Animate;
