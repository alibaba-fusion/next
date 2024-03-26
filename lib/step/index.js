"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var step_1 = tslib_1.__importDefault(require("./view/step"));
var step_item_1 = tslib_1.__importDefault(require("./view/step-item"));
var component_1 = require("../util/component");
var WithStepItem = (0, component_1.assignSubComponent)(step_1.default, { Item: step_item_1.default });
exports.default = config_provider_1.default.config(WithStepItem, {
    transform: function (props, deprecated) {
        if ('type' in props) {
            deprecated('type', 'shape', 'Step');
            var _a = props, type = _a.type, direction = _a.direction, labelPlacement = _a.labelPlacement, others = tslib_1.__rest(_a, ["type", "direction", "labelPlacement"]);
            var resolvedDirection = direction === 'vertical' ? 'ver' : direction === 'horizontal' ? 'hoz' : direction;
            var resolvedLabelPlacement = labelPlacement === 'vertical'
                ? 'ver'
                : labelPlacement === 'horizontal'
                    ? 'hoz'
                    : labelPlacement;
            props = tslib_1.__assign({ shape: type, direction: resolvedDirection, labelPlacement: resolvedLabelPlacement }, others);
        }
        return props;
    },
});
