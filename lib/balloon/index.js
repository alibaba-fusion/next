"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var balloon_1 = tslib_1.__importDefault(require("./balloon"));
var tooltip_1 = tslib_1.__importDefault(require("./tooltip"));
var inner_1 = tslib_1.__importDefault(require("./inner"));
var component_1 = require("../util/component");
var BalloonWithSub = (0, component_1.assignSubComponent)(balloon_1.default, {
    Tooltip: config_provider_1.default.config(tooltip_1.default, {
        transform: function (props, deprecated) {
            if ('text' in props) {
                deprecated('text', 'children', 'Tooltip');
                var text = props.text, others = tslib_1.__rest(props, ["text"]);
                props = tslib_1.__assign({ children: text }, others);
            }
            return props;
        },
    }),
    Inner: inner_1.default,
});
exports.default = config_provider_1.default.config(BalloonWithSub, {
    transform: function (props, deprecated) {
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
