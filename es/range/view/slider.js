import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { getPercent } from '../utils';

function _getStyle(min, max, value) {
    return {
        left: getPercent(min, max, value) + '%',
        zIndex: 100
    };
}

function Slider(_ref) {
    var _classNames;

    var prefix = _ref.prefix,
        hasMovingClass = _ref.hasMovingClass,
        min = _ref.min,
        max = _ref.max,
        value = _ref.value;


    var classes = classNames((_classNames = {}, _classNames[prefix + 'range-slider'] = true, _classNames[prefix + 'range-slider-moving'] = hasMovingClass, _classNames));
    return React.createElement(
        'div',
        { className: classes, style: _getStyle(min, max, value) },
        React.createElement('div', { className: prefix + 'range-slider-inner' })
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