"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_provider_1 = require("../config-provider");
var icon_font_1 = require("./icon-font");
var icon_1 = require("./icon");
icon_1.default.createFromIconfontCN = icon_font_1.default;
exports.default = config_provider_1.default.config(icon_1.default);
