"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// @ts-expect-error meet-react not export Cascader
var meet_react_1 = require("@alifd/meet-react");
var index_1 = tslib_1.__importDefault(require("../index"));
var Cascader = meet_react_1.Cascader ? meet_react_1.Cascader : index_1.default;
exports.default = Cascader;
