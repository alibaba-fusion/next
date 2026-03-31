"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var rating_1 = tslib_1.__importDefault(require("./rating"));
exports.default = config_provider_1.default.config(rating_1.default, {
    transform: function (props, deprecated) {
        if ('type' in props) {
            deprecated('type', 'showGrade', 'Rating');
            var type = props.type, others = tslib_1.__rest(props, ["type"]);
            props = tslib_1.__assign({ showGrade: type === 'grade' }, others);
        }
        var disabled = props.disabled, readOnly = props.readOnly;
        props.disabled = disabled || readOnly;
        return props;
    },
});
