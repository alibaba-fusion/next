"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var list_1 = tslib_1.__importDefault(require("./list"));
var item_1 = tslib_1.__importDefault(require("./item"));
var component_1 = require("../util/component");
var ListWithItem = (0, component_1.assignSubComponent)(list_1.default, { Item: item_1.default });
exports.default = ListWithItem;
