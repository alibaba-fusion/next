"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var checkbox_1 = require("./checkbox");
var checkbox_group_1 = require("./checkbox-group");
var config_provider_1 = require("../config-provider");
checkbox_1.default.Group = config_provider_1.default.config(checkbox_group_1.default, {
    transform: /* istanbul ignore next */ function (props, deprecated) {
        if ('itemDirection' in props) {
            deprecated('itemDirection', 'direction', 'Checkbox');
            var itemDirection = props.itemDirection, others = tslib_1.__rest(props, ["itemDirection"]);
            props = tslib_1.__assign({ direction: itemDirection }, others);
        }
        return props;
    },
});
exports.default = checkbox_1.default;
