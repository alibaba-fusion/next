import { __assign, __rest } from "tslib";
import ConfigProvider from '../config-provider';
import Slider from './slider';
export default ConfigProvider.config(Slider, {
    exportNames: ['resize'],
    transform: function (props, deprecated) {
        if ('fade' in props) {
            deprecated('fade', 'animation', 'Slider');
            var fade = props.fade, others = __rest(props, ["fade"]);
            if (fade) {
                props = __assign({ animation: 'fade' }, others);
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
            var arrowPos = props.arrowPos, others = __rest(props, ["arrowPos"]);
            props = __assign({ arrowPosition: arrowPos }, others);
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
            var initialSlide = props.initialSlide, others = __rest(props, ["initialSlide"]);
            props = __assign({ defaultActiveIndex: initialSlide }, others);
        }
        if ('slickGoTo' in props) {
            deprecated('slickGoTo', 'activeIndex', 'Slider');
            var slickGoTo = props.slickGoTo, others = __rest(props, ["slickGoTo"]);
            props = __assign({ activeIndex: slickGoTo }, others);
        }
        if ('afterChange' in props) {
            deprecated('afterChange', 'onChange', 'Slider');
            var afterChange = props.afterChange, others = __rest(props, ["afterChange"]);
            props = __assign({ onChange: afterChange }, others);
        }
        if ('beforeChange' in props) {
            deprecated('beforeChange', 'onBeforeChange', 'Slider');
            var beforeChange = props.beforeChange, others = __rest(props, ["beforeChange"]);
            props = __assign({ onBeforeChange: beforeChange }, others);
        }
        return props;
    },
});
