"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_provider_1 = require("../config-provider");
var calendar_1 = require("./calendar");
exports.default = config_provider_1.default.config(calendar_1.default);
