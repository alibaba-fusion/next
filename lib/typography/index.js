"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var text_1 = tslib_1.__importDefault(require("./text"));
var paragraph_1 = tslib_1.__importDefault(require("./paragraph"));
var typography_1 = tslib_1.__importDefault(require("./typography"));
var title_1 = tslib_1.__importDefault(require("./title"));
var component_1 = require("../util/component");
var WithSubTypography = (0, component_1.assignSubComponent)(typography_1.default, {
    Text: text_1.default,
    Paragraph: paragraph_1.default,
    H1: (0, title_1.default)('h1'),
    H2: (0, title_1.default)('h2'),
    H3: (0, title_1.default)('h3'),
    H4: (0, title_1.default)('h4'),
    H5: (0, title_1.default)('h5'),
    H6: (0, title_1.default)('h6'),
});
exports.default = WithSubTypography;
