import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React from 'react';
import PropTypes from 'prop-types';
import Affix from '../../affix';

/* eslint-disable react/prefer-stateless-function*/
var StickHeader = (_temp = _class = function (_React$Component) {
    _inherits(StickHeader, _React$Component);

    function StickHeader() {
        _classCallCheck(this, StickHeader);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    StickHeader.prototype.render = function render() {
        var _context = this.context,
            Header = _context.Header,
            offsetTop = _context.offsetTop,
            affixProps = _context.affixProps;

        return React.createElement(
            Affix,
            _extends({}, affixProps, { offsetTop: offsetTop }),
            React.createElement(Header, this.props)
        );
    };

    return StickHeader;
}(React.Component), _class.contextTypes = {
    Header: PropTypes.any,
    offsetTop: PropTypes.number,
    affixProps: PropTypes.object
}, _temp);
StickHeader.displayName = 'StickHeader';
export { StickHeader as default };