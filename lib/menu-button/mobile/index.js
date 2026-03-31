"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// @ts-expect-error meet 中没有 MenuButton
var meet_react_1 = require("@alifd/meet-react");
var index_1 = tslib_1.__importDefault(require("../index"));
var MenuButton = meet_react_1.MenuButton ? meet_react_1.MenuButton : index_1.default;
exports.default = MenuButton;
