import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import {getPercent} from '../utils';

export default class Selected extends React.Component {
    static propTypes = {
        min: PropTypes.number,
        max: PropTypes.number,
        slider: PropTypes.string,
        value: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.arrayOf(PropTypes.number)
        ]),
        prefix: PropTypes.string,
        reverse: PropTypes.bool
    }

    static defaultProps = {
        prefix: 'next-',
        slider: 'single',
        min: 0,
        max: 100,
        value: 0,
        reverse: false
    }

    _getStyle() {
        const {min, max, reverse} = this.props;
        let {value} = this.props;

        if (!Array.isArray(value)) {
            value = [min, value];
        }
        const width = (value[1] - value[0]) * 100 / (max - min);

        let style = {
            width: `${width}%`,
            left: `${getPercent(min, max, value[0])}%`
        };
        if (reverse) {
            style = {
                width: `${100 - width}%`,
                left: `${getPercent(min, max, value[0]) + width}%`
            };
        }
        return style;
    }

    _getStyleLeft() {
        const {min, max} = this.props;
        let {value} = this.props;

        if (!Array.isArray(value)) {
            value = [min, value];
        }

        const style = {
            width: `${getPercent(min, max, value[0])}%`,
            left: 0
        };
        return style;
    }

    _getStyleRight() {
        const {min, max} = this.props;
        let {value} = this.props;

        if (!Array.isArray(value)) {
            value = [min, value];
        }
        const width = (value[1] - value[0]) * 100 / (max - min);

        const style = {
            width: `${100 - getPercent(min, max, value[0]) - width}%`,
            left: `${getPercent(min, max, value[0]) + width}%`
        };
        return style;
    }

    render() {
        const {prefix, slider, reverse} = this.props;
        const classes = classNames({
            [`${prefix}range-selected`]: true
        });
        let SeletedComps = <div className={classes} style={this._getStyle()}></div>;

        if (slider === 'double' && reverse) {
            SeletedComps = (<div>
                <div className={classes} style={this._getStyleLeft()}></div>
                <div className={classes} style={this._getStyleRight()}></div>
            </div>
            );
        }

        return (
            SeletedComps
        );
    }
}
