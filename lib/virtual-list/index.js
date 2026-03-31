"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var virtual_list_1 = tslib_1.__importDefault(require("./virtual-list"));
exports.default = config_provider_1.default.config(virtual_list_1.default);
