import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { TrackProps } from '../types';
export default class Track extends Component<TrackProps> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        trackStyle: PropTypes.Requireable<object>;
    };
    static defaultProps: {
        prefix: string;
    };
    render(): React.JSX.Element;
}
