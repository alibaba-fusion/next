"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var input_1 = tslib_1.__importDefault(require("./input"));
var password_1 = tslib_1.__importDefault(require("./password"));
var textarea_1 = tslib_1.__importDefault(require("./textarea"));
var group_1 = tslib_1.__importDefault(require("./group"));
var component_1 = require("../util/component");
var InputWithSub = (0, component_1.assignSubComponent)(input_1.default, {
    Password: config_provider_1.default.config(password_1.default, {
        exportNames: ['getInputNode', 'focus'],
        transform: function (props, deprecated) {
            if ('hasLimitHint' in props) {
                deprecated('hasLimitHint', 'showLimitHint', 'Input');
                var hasLimitHint = props.hasLimitHint, others = tslib_1.__rest(props, ["hasLimitHint"]);
                props = tslib_1.__assign({ showLimitHint: hasLimitHint }, others);
            }
            return props;
        },
    }),
    TextArea: config_provider_1.default.config(textarea_1.default, {
        exportNames: ['getInputNode', 'focus'],
        transform: function (props, deprecated) {
            if ('hasLimitHint' in props) {
                deprecated('hasLimitHint', 'showLimitHint', 'Input');
                var hasLimitHint = props.hasLimitHint, others = tslib_1.__rest(props, ["hasLimitHint"]);
                props = tslib_1.__assign({ showLimitHint: hasLimitHint }, others);
            }
            return props;
        },
    }),
    Group: group_1.default,
});
exports.default = config_provider_1.default.config(InputWithSub, {
    exportNames: ['getInputNode', 'focus'],
    transform: function (props, deprecated) {
        if ('hasLimitHint' in props) {
            deprecated('hasLimitHint', 'showLimitHint', 'Input');
            var hasLimitHint = props.hasLimitHint, others = tslib_1.__rest(props, ["hasLimitHint"]);
            props = tslib_1.__assign({ showLimitHint: hasLimitHint }, others);
        }
        return props;
    },
});
