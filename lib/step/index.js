"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var config_provider_1 = require("../config-provider");
var step_1 = require("./view/step");
var step_item_1 = require("./view/step-item");
step_1.default.Item = step_item_1.default;
exports.default = config_provider_1.default.config(step_1.default, {
    transform: /* istanbul ignore next */ function (props, deprecated) {
        if ('type' in props) {
            deprecated('type', 'shape', 'Step');
            var type = props.type, direction = props.direction, labelPlacement = props.labelPlacement, others = tslib_1.__rest(props, ["type", "direction", "labelPlacement"]);
            direction = direction === 'vertical' ? 'ver' : direction === 'horizontal' ? 'hoz' : direction;
            labelPlacement =
                labelPlacement === 'vertical' ? 'ver' : labelPlacement === 'horizontal' ? 'hoz' : labelPlacement;
            props = tslib_1.__assign({ shape: type, direction: direction, labelPlacement: labelPlacement }, others);
        }
        return props;
    },
});
