import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const Track = ({ prefix }: { prefix: string }) => {
    const classes = classNames({
        [`${prefix}range-track`]: true,
    });
    return <div className={classes} />;
};

Track.propTypes = {
    prefix: PropTypes.string,
};

Track.defaultProps = {
    prefix: 'next-',
};

Track.displayName = 'Track';

export default Track;
