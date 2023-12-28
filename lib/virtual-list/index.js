"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_provider_1 = require("../config-provider");
var virtual_list_1 = require("./virtual-list");
exports.default = config_provider_1.default.config(virtual_list_1.default);
