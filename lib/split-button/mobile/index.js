"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// @ts-expect-error meet-react does not export SplitButton
var meet_react_1 = require("@alifd/meet-react");
var index_1 = tslib_1.__importDefault(require("../index"));
var SplitButton = meet_react_1.SplitButton ? meet_react_1.SplitButton : index_1.default;
exports.default = SplitButton;
