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
            var _a = props, type = _a.type, others = tslib_1.__rest(_a, ["type"]);
            props = tslib_1.__assign({ shape: type }, others);
        }
        var _b = props, direction = _b.direction, labelPlacement = _b.labelPlacement;
        if (direction === 'vertical') {
            deprecated('direction="vertical"', 'direction="ver"', 'Step');
            props = tslib_1.__assign(tslib_1.__assign({}, props), { direction: 'ver' });
        }
        if (direction === 'horizontal') {
            deprecated('direction="horizontal"', 'direction="hoz"', 'Step');
            props = tslib_1.__assign(tslib_1.__assign({}, props), { direction: 'hoz' });
        }
        if (labelPlacement === 'vertical') {
            deprecated('labelPlacement="vertical"', 'labelPlacement="ver"', 'Step');
            props = tslib_1.__assign(tslib_1.__assign({}, props), { labelPlacement: 'ver' });
        }
        if (labelPlacement === 'horizontal') {
            deprecated('labelPlacement="horizontal"', 'labelPlacement="hoz"', 'Step');
            props = tslib_1.__assign(tslib_1.__assign({}, props), { labelPlacement: 'hoz' });
        }
        return props;
    },
});
