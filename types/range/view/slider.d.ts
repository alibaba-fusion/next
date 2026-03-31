import React from 'react';
import PropTypes from 'prop-types';
import type { RangeSliderProps } from '../types';
declare function Slider({
    prefix,
    hasMovingClass,
    min,
    max,
    value,
    onKeyDown,
    rtl,
}: RangeSliderProps): React.JSX.Element;
declare namespace Slider {
    var propTypes: {
        min: PropTypes.Requireable<number>;
        max: PropTypes.Requireable<number>;
        value: PropTypes.Requireable<number>;
        prefix: PropTypes.Requireable<string>;
        hasMovingClass: PropTypes.Requireable<boolean>;
        rtl: PropTypes.Requireable<boolean>;
    };
    var defaultProps: {
        prefix: string;
        min: number;
        max: number;
        value: number;
        hasMovingClass: boolean;
        rtl: boolean;
    };
    var displayName: string;
}
export default Slider;
