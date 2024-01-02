"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-expect-error meet-react does not export Loading
var meet_react_1 = require("@alifd/meet-react");
var index_1 = require("../index");
var Loading = meet_react_1.Loading ? meet_react_1.Loading : index_1.default;
exports.default = Loading;
