"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// @ts-expect-error meet-react 未导出Shell组件
var meet_react_1 = require("@alifd/meet-react");
var index_1 = tslib_1.__importDefault(require("../index"));
var Shell = meet_react_1.Shell ? meet_react_1.Shell : index_1.default;
exports.default = Shell;
