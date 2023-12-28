"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var config_provider_1 = require("../config-provider");
var input_1 = require("./input");
var password_1 = require("./password");
var textarea_1 = require("./textarea");
var group_1 = require("./group");
input_1.default.Password = config_provider_1.default.config(password_1.default, {
    exportNames: ['getInputNode', 'focus'],
    transform: /* istanbul ignore next */ function (props, deprecated) {
        if ('hasLimitHint' in props) {
            deprecated('hasLimitHint', 'showLimitHint', 'Input');
            var hasLimitHint = props.hasLimitHint, others = tslib_1.__rest(props, ["hasLimitHint"]);
            props = tslib_1.__assign({ showLimitHint: hasLimitHint }, others);
        }
        return props;
    },
});
input_1.default.TextArea = config_provider_1.default.config(textarea_1.default, {
    exportNames: ['getInputNode', 'focus'],
    transform: /* istanbul ignore next */ function (props, deprecated) {
        if ('hasLimitHint' in props) {
            deprecated('hasLimitHint', 'showLimitHint', 'Input');
            var hasLimitHint = props.hasLimitHint, others = tslib_1.__rest(props, ["hasLimitHint"]);
            props = tslib_1.__assign({ showLimitHint: hasLimitHint }, others);
        }
        return props;
    },
});
input_1.default.Group = group_1.default;
// 用来自动生成文档的工具底层依赖的 react-docgen，无法解析生成 HOC 的方法中存在第二个参数的情况
// 所以不能在 input.jsx／textarea.jsx 中生成 HOC
exports.default = config_provider_1.default.config(input_1.default, {
    exportNames: ['getInputNode', 'focus'],
    transform: /* istanbul ignore next */ function (props, deprecated) {
        if ('hasLimitHint' in props) {
            deprecated('hasLimitHint', 'showLimitHint', 'Input');
            var hasLimitHint = props.hasLimitHint, others = tslib_1.__rest(props, ["hasLimitHint"]);
            props = tslib_1.__assign({ showLimitHint: hasLimitHint }, others);
        }
        return props;
    },
});
