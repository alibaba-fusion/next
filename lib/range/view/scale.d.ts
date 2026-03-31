import React from 'react';
import PropTypes from 'prop-types';
import type { RangeScaleProps } from '../types';
export default class Scale extends React.Component<RangeScaleProps> {
    static displayName: string;
    static propTypes: {
        min: PropTypes.Requireable<number>;
        max: PropTypes.Requireable<number>;
        value: PropTypes.Requireable<NonNullable<number | (number | null | undefined)[] | null | undefined>>;
        prefix: PropTypes.Requireable<string>;
        scales: PropTypes.Requireable<(number | null | undefined)[]>;
        rtl: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        prefix: string;
        min: number;
        max: number;
        value: number;
        rtl: boolean;
    };
    _renderItems(): React.ReactNode[];
    render(): React.JSX.Element;
}
