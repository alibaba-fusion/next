import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {getPercent} from '../utils';

function _getStyle(min, max, value) {
    return {
        left: `${getPercent(min, max, value)}%`,
        zIndex: 100
    };
}

function Slider({prefix, hasMovingClass, min, max, value}) {

    const classes = classNames({
        [`${prefix}range-slider`]: true,
        [`${prefix}range-slider-moving`]: hasMovingClass
    });
    return (
        <div className={classes} style={_getStyle(min, max, value)}>
            <div className={`${prefix}range-slider-inner`}></div>
        </div>
    );
}

Slider.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.number,
    prefix: PropTypes.string,
    hasMovingClass: PropTypes.bool
};

Slider.defaultProps = {
    prefix: 'next-',
    min: 0,
    max: 100,
    value: 0,
    hasMovingClass: false
};

export default Slider;
