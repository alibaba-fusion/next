import React from 'react';
import PropTypes from 'prop-types';
import type { RangeMarkProps } from '../types';
export default class Mark extends React.Component<RangeMarkProps> {
    static displayName: string;
    static propTypes: {
        min: PropTypes.Requireable<number>;
        max: PropTypes.Requireable<number>;
        value: PropTypes.Requireable<NonNullable<number | (number | null | undefined)[] | null | undefined>>;
        prefix: PropTypes.Requireable<string>;
        marks: PropTypes.Requireable<object>;
        marksPosition: PropTypes.Requireable<string>;
        rtl: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        prefix: string;
        min: number;
        max: number;
        value: number;
        marksPosition: string;
        rtl: boolean;
    };
    _renderItems(): React.ReactNode[];
    render(): React.JSX.Element;
}
