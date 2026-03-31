"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var number_picker_1 = tslib_1.__importDefault(require("./number-picker"));
var util_1 = require("../util");
exports.default = config_provider_1.default.config(number_picker_1.default, {
    transform: /* istanbul ignore next */ function (/* istanbul ignore next */ props) {
        if ('onDisabled' in props && typeof props.onDisabled === 'function') {
            util_1.log.warning('[NumberPicker]: onDisabled is deleted!');
        }
        if ('state' in props && props.state === 'success') {
            delete props.state;
        }
        return props;
    },
    exportNames: ['getInputNode'],
});
