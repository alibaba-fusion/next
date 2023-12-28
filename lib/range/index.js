"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var config_provider_1 = require("../config-provider");
var range_1 = require("./view/range");
exports.default = config_provider_1.default.config(range_1.default, {
    transform: /* istanbul ignore next */ function (props, deprecated) {
        if ('hasTips' in props) {
            deprecated('hasTips', 'hasTip', 'Range');
            var hasTips = props.hasTips, others = tslib_1.__rest(props, ["hasTips"]);
            props = tslib_1.__assign({ hasTip: hasTips }, others);
        }
        if ('tipFormatter' in props) {
            deprecated('tipFormatter', 'tipRender', 'Range');
            var tipFormatter = props.tipFormatter, others = tslib_1.__rest(props, ["tipFormatter"]);
            props = tslib_1.__assign({ tipRender: tipFormatter }, others);
        }
        return props;
    },
});
