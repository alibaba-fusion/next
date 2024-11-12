import React, { type MouseEvent, Component } from 'react';
import PropTypes from 'prop-types';
import type { DotsProps, OptionProps } from '../types';
export default class Dots extends Component<DotsProps> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        currentSlide: PropTypes.Requireable<number>;
        changeSlide: PropTypes.Requireable<(...args: any[]) => any>;
        dotsClass: PropTypes.Requireable<string>;
        slideCount: PropTypes.Requireable<number>;
        slidesToScroll: PropTypes.Requireable<number>;
        dotsDirection: PropTypes.Requireable<string>;
        dotsRender: PropTypes.Requireable<(...args: any[]) => any>;
        triggerType: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        changeSlide: () => void;
    };
    handleChangeSlide(options: OptionProps, e: MouseEvent<HTMLElement>): void;
    render(): React.JSX.Element;
}
