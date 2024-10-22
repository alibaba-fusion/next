"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var slider_1 = tslib_1.__importDefault(require("./slider"));
exports.default = config_provider_1.default.config(slider_1.default, {
    exportNames: ['resize'],
    transform: function (props, deprecated) {
        if ('fade' in props) {
            deprecated('fade', 'animation', 'Slider');
            var fade = props.fade, others = tslib_1.__rest(props, ["fade"]);
            if (fade) {
                props = tslib_1.__assign({ animation: 'fade' }, others);
            }
            else {
                props = others;
            }
        }
        if ('arrowPos' in props) {
            if (props.arrowPos === 'inline') {
                deprecated('arrowPos=inline', 'arrowPosition=inner', 'Slider');
                props.arrowPos = 'inner';
            }
            else {
                deprecated('arrowPos', 'arrowPosition', 'Slider');
            }
            var arrowPos = props.arrowPos, others = tslib_1.__rest(props, ["arrowPos"]);
            props = tslib_1.__assign({ arrowPosition: arrowPos }, others);
        }
        ['arrowDirection', 'dotsDirection', 'slideDirection'].forEach(function (propName) {
            // @ts-expect-error horizontal 已被废弃，此处为兼容逻辑
            if (props[propName] === 'horizontal') {
                deprecated("".concat(propName, "=horizontal"), "".concat(propName, "=hoz"), 'Slider');
                props[propName] = 'hoz';
                // @ts-expect-error vertical 已被废弃，此处为兼容逻辑
            }
            else if (props[propName] === 'vertical') {
                deprecated("".concat(propName, "=vertical"), "".concat(propName, "=ver"), 'Slider');
                props[propName] = 'ver';
            }
        });
        if ('initialSlide' in props) {
            deprecated('initialSlide', 'defaultActiveIndex', 'Slider');
            var initialSlide = props.initialSlide, others = tslib_1.__rest(props, ["initialSlide"]);
            props = tslib_1.__assign({ defaultActiveIndex: initialSlide }, others);
        }
        if ('slickGoTo' in props) {
            deprecated('slickGoTo', 'activeIndex', 'Slider');
            var slickGoTo = props.slickGoTo, others = tslib_1.__rest(props, ["slickGoTo"]);
            props = tslib_1.__assign({ activeIndex: slickGoTo }, others);
        }
        if ('afterChange' in props) {
            deprecated('afterChange', 'onChange', 'Slider');
            var afterChange = props.afterChange, others = tslib_1.__rest(props, ["afterChange"]);
            props = tslib_1.__assign({ onChange: afterChange }, others);
        }
        if ('beforeChange' in props) {
            deprecated('beforeChange', 'onBeforeChange', 'Slider');
            var beforeChange = props.beforeChange, others = tslib_1.__rest(props, ["beforeChange"]);
            props = tslib_1.__assign({ onBeforeChange: beforeChange }, others);
        }
        return props;
    },
});
