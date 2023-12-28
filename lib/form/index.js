"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var config_provider_1 = require("../config-provider");
var form_1 = require("./form");
var item_1 = require("./item");
var submit_1 = require("./submit");
var reset_1 = require("./reset");
var error_1 = require("./error");
form_1.default.Item = config_provider_1.default.config(item_1.default, {
    transform: /* istanbul ignore next */ function (props, deprecated) {
        if ('validateStatus' in props) {
            deprecated('validateStatus', 'validateState', 'Form.Item');
            var validateStatus = props.validateStatus, others = tslib_1.__rest(props, ["validateStatus"]);
            props = tslib_1.__assign({ validateState: validateStatus }, others);
        }
        return props;
    },
});
form_1.default.Submit = submit_1.default;
form_1.default.Reset = reset_1.default;
form_1.default.Error = error_1.default;
exports.default = config_provider_1.default.config(form_1.default, {
    transform: /* istanbul ignore next */ function (props, deprecated) {
        if ('direction' in props) {
            deprecated('direction', 'inline', 'Form');
            var direction = props.direction, others = tslib_1.__rest(props, ["direction"]);
            if (direction === 'hoz') {
                props = tslib_1.__assign({ inline: true }, others);
            }
        }
        return props;
    },
});
