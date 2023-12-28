"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_provider_1 = require("../config-provider");
var timeline_1 = require("./view/timeline");
var timeline_item_1 = require("./view/timeline-item");
timeline_1.default.Item = config_provider_1.default.config(timeline_item_1.default, {});
exports.default = config_provider_1.default.config(timeline_1.default, {});
