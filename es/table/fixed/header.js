import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import HeaderComponent from '../base/header';

/* eslint-disable react/prefer-stateless-function */
var FixedHeader = (_temp = _class = function (_React$Component) {
    _inherits(FixedHeader, _React$Component);

    function FixedHeader() {
        _classCallCheck(this, FixedHeader);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    FixedHeader.prototype.componentDidMount = function componentDidMount() {
        this.context.getNode('header', findDOMNode(this));
    };

    FixedHeader.prototype.render = function render() {
        var _props = this.props,
            prefix = _props.prefix,
            className = _props.className,
            colGroup = _props.colGroup,
            others = _objectWithoutProperties(_props, ['prefix', 'className', 'colGroup']);

        return React.createElement(
            'div',
            { className: className },
            React.createElement(
                'div',
                { className: prefix + 'table-header-inner' },
                React.createElement(
                    'table',
                    null,
                    colGroup,
                    React.createElement(HeaderComponent, _extends({}, others, { prefix: prefix }))
                )
            )
        );
    };

    return FixedHeader;
}(React.Component), _class.propTypes = {
    children: PropTypes.any,
    prefix: PropTypes.string,
    className: PropTypes.string,
    colGroup: PropTypes.any
}, _class.contextTypes = {
    getNode: PropTypes.func,
    lockType: PropTypes.oneOf(['left', 'right'])
}, _temp);
FixedHeader.displayName = 'FixedHeader';
export { FixedHeader as default };