import React, { Component, type MouseEvent } from 'react';
import PropTypes from 'prop-types';
import type { OptionProps, ArrowProps } from '../types';
export default class Arrow extends Component<ArrowProps> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        rtl: PropTypes.Requireable<boolean>;
        type: PropTypes.Validator<string>;
        centerMode: PropTypes.Requireable<boolean>;
        currentSlide: PropTypes.Requireable<number>;
        infinite: PropTypes.Requireable<boolean>;
        clickHandler: PropTypes.Requireable<(...args: any[]) => any>;
        slideCount: PropTypes.Requireable<number>;
        slidesToShow: PropTypes.Requireable<number>;
        arrow: PropTypes.Requireable<PropTypes.ReactElementLike>;
        arrowSize: PropTypes.Requireable<string>;
        arrowPosition: PropTypes.Requireable<string>;
        arrowDirection: PropTypes.Requireable<string>;
        onMouseEnter: PropTypes.Requireable<(...args: any[]) => any>;
        onMouseLeave: PropTypes.Requireable<(...args: any[]) => any>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    static defaultProps: {
        onMouseEnter: () => void;
        onMouseLeave: () => void;
    };
    static ARROW_ICON_TYPES: {
        hoz: {
            prev: string;
            next: string;
        };
        ver: {
            prev: string;
            next: string;
        };
    };
    static isDisabled(props: ArrowProps): boolean;
    handleClick(options: OptionProps, e: MouseEvent<HTMLElement>): void;
    render(): React.JSX.Element;
}
