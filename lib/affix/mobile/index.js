"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// @ts-expect-error meet-react does not export Affix
var meet_react_1 = require("@alifd/meet-react");
var index_1 = tslib_1.__importDefault(require("../index"));
var Affix = meet_react_1.Affix ? meet_react_1.Affix : index_1.default;
exports.default = Affix;
