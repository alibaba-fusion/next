"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// @ts-expect-error meet 未导出 Notification
var meet_react_1 = require("@alifd/meet-react");
var index_1 = tslib_1.__importDefault(require("../index"));
var Notification = meet_react_1.Notification ? meet_react_1.Notification : index_1.default;
exports.default = Notification;
