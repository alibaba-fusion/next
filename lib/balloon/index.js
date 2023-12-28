"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var config_provider_1 = require("../config-provider");
var balloon_1 = require("./balloon");
var tooltip_1 = require("./tooltip");
var inner_1 = require("./inner");
balloon_1.default.Tooltip = config_provider_1.default.config(tooltip_1.default, {
    transform: /* istanbul ignore next */ function (props, deprecated) {
        if ('text' in props) {
            deprecated('text', 'children', 'Tooltip');
            var text = props.text, others = tslib_1.__rest(props, ["text"]);
            props = tslib_1.__assign({ children: text }, others);
        }
        return props;
    },
});
balloon_1.default.Inner = inner_1.default;
exports.default = config_provider_1.default.config(balloon_1.default, {
    transform: /* istanbul ignore next */ function (props, deprecated) {
        if (props.alignment) {
            deprecated('alignment', 'alignEdge', 'Balloon');
            var alignment = props.alignment, others = tslib_1.__rest(props, ["alignment"]);
            props = tslib_1.__assign({ alignEdge: alignment === 'edge' }, others);
        }
        if (props.onCloseClick) {
            deprecated('onCloseClick', 'onVisibleChange(visible, [type = "closeClick"])', 'Balloon');
            var onCloseClick_1 = props.onCloseClick, onVisibleChange_1 = props.onVisibleChange, others = tslib_1.__rest(props, ["onCloseClick", "onVisibleChange"]);
            var newOnVisibleChange = function (visible, type) {
                if (type === 'closeClick') {
                    onCloseClick_1();
                }
                if (onVisibleChange_1) {
                    onVisibleChange_1(visible, type);
                }
            };
            props = tslib_1.__assign({ onVisibleChange: newOnVisibleChange }, others);
        }
        return props;
    },
});
