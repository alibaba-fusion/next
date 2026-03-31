"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var meet_react_1 = require("@alifd/meet-react");
var index_1 = tslib_1.__importDefault(require("../index"));
var component_1 = require("../../util/component");
var MeetIconWithSub = (0, component_1.assignSubComponent)(meet_react_1.Icon, {
    createFromIconfontCN: index_1.default.createFromIconfontCN,
});
exports.default = MeetIconWithSub;
