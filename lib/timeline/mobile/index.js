"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// @ts-expect-error Timeline 在 meet 中没有
var meet_react_1 = require("@alifd/meet-react");
var index_1 = tslib_1.__importDefault(require("../index"));
var Timeline = meet_react_1.Timeline ? meet_react_1.Timeline : index_1.default;
exports.default = Timeline;
