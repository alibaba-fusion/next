"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var react_1 = tslib_1.__importDefault(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var Track = function (_a) {
    var _b;
    var prefix = _a.prefix;
    var classes = (0, classnames_1.default)((_b = {},
        _b["".concat(prefix, "range-track")] = true,
        _b));
    return react_1.default.createElement("div", { className: classes });
};
Track.propTypes = {
    prefix: prop_types_1.default.string,
};
Track.defaultProps = {
    prefix: 'next-',
};
Track.displayName = 'Track';
exports.default = Track;
