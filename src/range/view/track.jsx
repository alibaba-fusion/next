import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

export default class Track extends React.Component {
    static propTypes = {
        prefix: PropTypes.string
    }

    static defaultProps = {
        prefix: 'next-'
    }

    render() {
        const {prefix} = this.props;
        const classes = classNames({
            [`${prefix}range-track`]: true
        });

        return (
            <div className={classes}></div>
        );
    }
}
