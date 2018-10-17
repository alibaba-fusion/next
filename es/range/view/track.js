import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

var Track = (_temp = _class = function (_React$Component) {
    _inherits(Track, _React$Component);

    function Track() {
        _classCallCheck(this, Track);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    Track.prototype.render = function render() {
        var _classNames;

        var prefix = this.props.prefix;

        var classes = classNames((_classNames = {}, _classNames[prefix + 'range-track'] = true, _classNames));

        return React.createElement('div', { className: classes });
    };

    return Track;
}(React.Component), _class.propTypes = {
    prefix: PropTypes.string
}, _class.defaultProps = {
    prefix: 'next-'
}, _temp);
Track.displayName = 'Track';
export { Track as default };