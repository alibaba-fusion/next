"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var radio_1 = require("./radio");
var radio_group_1 = require("./radio-group");
var config_provider_1 = require("../config-provider");
radio_1.default.Group = config_provider_1.default.config(radio_group_1.default, {
    transform: /* istanbul ignore next */ function (props, deprecated) {
        if ('itemDirection' in props) {
            deprecated('itemDirection', 'direction', 'Radio');
            var itemDirection = props.itemDirection, others = tslib_1.__rest(props, ["itemDirection"]);
            props = tslib_1.__assign({ direction: itemDirection }, others);
        }
        return props;
    },
});
exports.default = radio_1.default;
