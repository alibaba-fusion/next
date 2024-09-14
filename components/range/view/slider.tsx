import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { getPercent } from '../utils';
import type { RangeSliderProps } from '../types';

function _getProps(min: number, max: number, value: number, rtl: RangeSliderProps['rtl']) {
    return {
        style: {
            left: rtl ? `${100 - getPercent(min, max, value)}%` : `${getPercent(min, max, value)}%`,
            zIndex: 100,
        },
        'aria-valuenow': value,
        'aria-valuetext': value,
        'aria-valuemin': min,
        'aria-valuemax': max,
    };
}

function Slider({ prefix, hasMovingClass, min, max, value, onKeyDown, rtl }: RangeSliderProps) {
    const classes = classNames({
        [`${prefix}range-slider`]: true,
        [`${prefix}range-slider-moving`]: hasMovingClass,
    });
    return (
        // @ts-expect-error aria-valuetext 应该是一个 string 类型
        <div
            className={classes}
            onKeyDown={onKeyDown}
            role="slider"
            tabIndex={0}
            {..._getProps(min, max, value, rtl)}
            aria-valuenow={value}
        >
            <div className={`${prefix}range-slider-inner`} />
        </div>
    );
}

Slider.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.number,
    prefix: PropTypes.string,
    hasMovingClass: PropTypes.bool,
    rtl: PropTypes.bool,
};

Slider.defaultProps = {
    prefix: 'next-',
    min: 0,
    max: 100,
    value: 0,
    hasMovingClass: false,
    rtl: false,
};

export default Slider;
