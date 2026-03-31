import React from 'react';
import PropTypes from 'prop-types';
import { type ProgressWithDefaultProps } from './progress';
type ProgressLineProps = Omit<ProgressWithDefaultProps, 'shape'>;
export default class Line extends React.PureComponent<ProgressLineProps> {
    static propTypes: {
        size: PropTypes.Requireable<string>;
        percent: PropTypes.Requireable<number>;
        state: PropTypes.Requireable<string>;
        progressive: PropTypes.Requireable<boolean>;
        hasBorder: PropTypes.Requireable<boolean>;
        textRender: PropTypes.Requireable<(...args: any[]) => any>;
        color: PropTypes.Requireable<string>;
        backgroundColor: PropTypes.Requireable<string>;
        rtl: PropTypes.Requireable<boolean>;
        prefix: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<NonNullable<string | object | null | undefined>>;
    };
    render(): React.JSX.Element;
}
export {};
