"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// @ts-expect-error meet-react does not export Overlay
var meet_react_1 = require("@alifd/meet-react");
var index_1 = tslib_1.__importDefault(require("../index"));
var Overlay = meet_react_1.Overlay ? meet_react_1.Overlay : index_1.default;
exports.default = Overlay;
