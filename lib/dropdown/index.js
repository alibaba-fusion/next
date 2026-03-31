"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var dropdown_1 = tslib_1.__importDefault(require("./dropdown"));
exports.default = config_provider_1.default.config(dropdown_1.default, {
    transform: function (props, deprecated) {
        if ('triggerType' in props) {
            var triggerType = Array.isArray(props.triggerType)
                ? tslib_1.__spreadArray([], tslib_1.__read(props.triggerType), false) : [props.triggerType];
            if (triggerType.indexOf('focus') > -1) {
                deprecated('triggerType[focus]', 'triggerType[hover, click]', 'Balloon');
            }
        }
        return props;
    },
});
