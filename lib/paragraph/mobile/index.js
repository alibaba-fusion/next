"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// @ts-expect-error meet-react does not export Paragraph
var meet_react_1 = require("@alifd/meet-react");
var index_1 = tslib_1.__importDefault(require("../index"));
var Paragraph = meet_react_1.Paragraph ? meet_react_1.Paragraph : index_1.default;
exports.default = Paragraph;
