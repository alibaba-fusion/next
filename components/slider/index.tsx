import ConfigProvider from '../config-provider';
import Slider from './slider';

export default ConfigProvider.config(Slider, {
    exportNames: ['resize'],
    transform: (props, deprecated) => {
        if ('fade' in props) {
            deprecated('fade', 'animation', 'Slider');

            const { fade, ...others } = props;
            if (fade) {
                props = { animation: 'fade', ...others };
            } else {
                props = others;
            }
        }
        if ('arrowPos' in props) {
            if (props.arrowPos === 'inline') {
                deprecated('arrowPos=inline', 'arrowPosition=inner', 'Slider');

                props.arrowPos = 'inner';
            } else {
                deprecated('arrowPos', 'arrowPosition', 'Slider');
            }
            const { arrowPos, ...others } = props;
            props = { arrowPosition: arrowPos, ...others };
        }
        (['arrowDirection', 'dotsDirection', 'slideDirection'] as const).forEach(propName => {
            // @ts-expect-error horizontal 已被废弃，此处为兼容逻辑
            if (props[propName] === 'horizontal') {
                deprecated(`${propName}=horizontal`, `${propName}=hoz`, 'Slider');
                props[propName] = 'hoz';
                // @ts-expect-error vertical 已被废弃，此处为兼容逻辑
            } else if (props[propName] === 'vertical') {
                deprecated(`${propName}=vertical`, `${propName}=ver`, 'Slider');
                props[propName] = 'ver';
            }
        });
        if ('initialSlide' in props) {
            deprecated('initialSlide', 'defaultActiveIndex', 'Slider');

            const { initialSlide, ...others } = props;
            props = { defaultActiveIndex: initialSlide, ...others };
        }
        if ('slickGoTo' in props) {
            deprecated('slickGoTo', 'activeIndex', 'Slider');

            const { slickGoTo, ...others } = props;
            props = { activeIndex: slickGoTo, ...others };
        }
        if ('afterChange' in props) {
            deprecated('afterChange', 'onChange', 'Slider');

            const { afterChange, ...others } = props;
            props = { onChange: afterChange, ...others };
        }

        if ('beforeChange' in props) {
            deprecated('beforeChange', 'onBeforeChange', 'Slider');

            const { beforeChange, ...others } = props;
            props = { onBeforeChange: beforeChange, ...others };
        }

        return props;
    },
});
