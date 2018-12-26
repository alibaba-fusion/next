import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { getPercent } from '../utils';

var Selected = (_temp = _class = function (_React$Component) {
    _inherits(Selected, _React$Component);

    function Selected() {
        _classCallCheck(this, Selected);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    Selected.prototype._getStyle = function _getStyle() {
        var _props = this.props,
            min = _props.min,
            max = _props.max,
            reverse = _props.reverse;
        var value = this.props.value;


        if (!Array.isArray(value)) {
            value = [min, value];
        }
        var width = (value[1] - value[0]) * 100 / (max - min);

        var style = {
            width: width + '%',
            left: getPercent(min, max, value[0]) + '%'
        };
        if (reverse) {
            style = {
                width: 100 - width + '%',
                left: getPercent(min, max, value[0]) + width + '%'
            };
        }
        return style;
    };

    Selected.prototype._getStyleLeft = function _getStyleLeft() {
        var _props2 = this.props,
            min = _props2.min,
            max = _props2.max;
        var value = this.props.value;


        if (!Array.isArray(value)) {
            value = [min, value];
        }

        var style = {
            width: getPercent(min, max, value[0]) + '%',
            left: 0
        };
        return style;
    };

    Selected.prototype._getStyleRight = function _getStyleRight() {
        var _props3 = this.props,
            min = _props3.min,
            max = _props3.max;
        var value = this.props.value;


        if (!Array.isArray(value)) {
            value = [min, value];
        }
        var width = (value[1] - value[0]) * 100 / (max - min);

        var style = {
            width: 100 - getPercent(min, max, value[0]) - width + '%',
            left: getPercent(min, max, value[0]) + width + '%'
        };
        return style;
    };

    Selected.prototype.render = function render() {
        var _classNames;

        var _props4 = this.props,
            prefix = _props4.prefix,
            slider = _props4.slider,
            reverse = _props4.reverse;

        var classes = classNames((_classNames = {}, _classNames[prefix + 'range-selected'] = true, _classNames));
        var SeletedComps = React.createElement('div', { className: classes, style: this._getStyle() });

        if (slider === 'double' && reverse) {
            SeletedComps = React.createElement(
                'div',
                null,
                React.createElement('div', { className: classes, style: this._getStyleLeft() }),
                React.createElement('div', { className: classes, style: this._getStyleRight() })
            );
        }

        return SeletedComps;
    };

    return Selected;
}(React.Component), _class.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    slider: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
    prefix: PropTypes.string,
    reverse: PropTypes.bool
}, _class.defaultProps = {
    prefix: 'next-',
    slider: 'single',
    min: 0,
    max: 100,
    value: 0,
    reverse: false
}, _temp);
Selected.displayName = 'Selected';
export { Selected as default };