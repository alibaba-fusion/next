"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classnames_1 = require("classnames");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
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
exports.default = Track;
