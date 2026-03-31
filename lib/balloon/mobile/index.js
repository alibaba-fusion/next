"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// @ts-expect-error 此处报错没有找到组件
var meet_react_1 = require("@alifd/meet-react");
var index_1 = tslib_1.__importDefault(require("../index"));
var Balloon = meet_react_1.Balloon ? meet_react_1.Balloon : index_1.default;
exports.default = Balloon;
