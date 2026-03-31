"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var calendar_1 = tslib_1.__importDefault(require("./calendar"));
exports.default = config_provider_1.default.config(calendar_1.default);
