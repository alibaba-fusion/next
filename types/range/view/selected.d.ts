import React from 'react';
import PropTypes from 'prop-types';
import type { RangeSelectedProps } from '../types';
export default class Selected extends React.Component<RangeSelectedProps> {
    static displayName: string;
    static propTypes: {
        min: PropTypes.Requireable<number>;
        max: PropTypes.Requireable<number>;
        slider: PropTypes.Requireable<string>;
        value: PropTypes.Requireable<
            NonNullable<number | (number | null | undefined)[] | null | undefined>
        >;
        prefix: PropTypes.Requireable<string>;
        reverse: PropTypes.Requireable<boolean>;
        rtl: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        prefix: string;
        slider: string;
        min: number;
        max: number;
        value: number;
        reverse: boolean;
        rtl: boolean;
    };
    _getStyle(): {
        width: string;
        left: string;
    };
    _getStyleLeft(): {
        width: string;
        left: number;
    };
    _getStyleRight(): {
        width: string;
        left: string;
    };
    render(): React.JSX.Element;
}
