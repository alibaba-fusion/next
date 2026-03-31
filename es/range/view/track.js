import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
var Track = function (_a) {
    var _b;
    var prefix = _a.prefix;
    var classes = classNames((_b = {},
        _b["".concat(prefix, "range-track")] = true,
        _b));
    return React.createElement("div", { className: classes });
};
Track.propTypes = {
    prefix: PropTypes.string,
};
Track.defaultProps = {
    prefix: 'next-',
};
Track.displayName = 'Track';
export default Track;
