import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Line from './progress-line';
import Circle from './progress-circle';
import type { ProgressProps } from '../types';
import { type ClassPropsWithDefault } from '../../util';

export type ProgressWithDefaultProps = ClassPropsWithDefault<
    ProgressProps,
    typeof Progress.defaultProps
>;
/**
 * Progress
 */
export default class Progress extends Component<ProgressProps> {
    static propTypes = {
        prefix: PropTypes.string,
        shape: PropTypes.oneOf(['circle', 'line']),
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        percent: PropTypes.number,
        state: PropTypes.oneOf(['normal', 'success', 'error']),
        progressive: PropTypes.bool,
        hasBorder: PropTypes.bool,
        textRender: PropTypes.func,
        color: PropTypes.string,
        backgroundColor: PropTypes.string,
        rtl: PropTypes.bool,
    };

    static defaultProps = {
        prefix: 'next-',
        shape: 'line',
        state: 'normal',
        size: 'medium',
        percent: 0,
        progressive: false,
        hasBorder: false,
        textRender: (percent: number) => `${Math.floor(percent)}%`,
    };

    static displayName = 'Progress';

    static contextTypes = {
        prefix: PropTypes.string,
    };
    readonly props: ProgressWithDefaultProps;
    render() {
        const { shape, hasBorder, ...others } = this.props;
        return shape === 'circle' ? (
            <Circle {...others} />
        ) : (
            <Line {...others} hasBorder={hasBorder} />
        );
    }
}
