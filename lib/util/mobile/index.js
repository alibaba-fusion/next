"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// @ts-expect-error fixme: meet-react does not export Util but Utils
var meet_react_1 = require("@alifd/meet-react");
var NextUtil = tslib_1.__importStar(require("../index"));
var Util = meet_react_1.Util ? meet_react_1.Util : NextUtil;
exports.default = Util;
