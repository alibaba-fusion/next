"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var component_1 = require("../util/component");
var timeline_1 = tslib_1.__importDefault(require("./view/timeline"));
var timeline_item_1 = tslib_1.__importDefault(require("./view/timeline-item"));
var TimelineWithItem = (0, component_1.assignSubComponent)(timeline_1.default, {
    Item: timeline_item_1.default,
});
exports.default = TimelineWithItem;
