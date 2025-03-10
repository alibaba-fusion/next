import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { ProgressProps } from '../types';
import { type ClassPropsWithDefault } from '../../util';
export type ProgressWithDefaultProps = ClassPropsWithDefault<ProgressProps, typeof Progress.defaultProps>;
/**
 * Progress
 */
export default class Progress extends Component<ProgressProps> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        shape: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<string>;
        percent: PropTypes.Requireable<number>;
        state: PropTypes.Requireable<string>;
        progressive: PropTypes.Requireable<boolean>;
        hasBorder: PropTypes.Requireable<boolean>;
        textRender: PropTypes.Requireable<(...args: any[]) => any>;
        color: PropTypes.Requireable<string>;
        backgroundColor: PropTypes.Requireable<string>;
        rtl: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        prefix: string;
        shape: string;
        state: string;
        size: string;
        percent: number;
        progressive: boolean;
        hasBorder: boolean;
        textRender: (percent: number) => string;
    };
    static displayName: string;
    static contextTypes: {
        prefix: PropTypes.Requireable<string>;
    };
    readonly props: ProgressWithDefaultProps;
    render(): React.JSX.Element;
}
