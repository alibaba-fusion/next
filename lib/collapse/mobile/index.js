"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// @ts-expect-error FIXME: Module '"@alifd/meet-react"' has no exported member 'Collapse'.
var meet_react_1 = require("@alifd/meet-react");
var index_1 = tslib_1.__importDefault(require("../index"));
var Collapse = meet_react_1.Collapse ? meet_react_1.Collapse : index_1.default;
exports.default = Collapse;
