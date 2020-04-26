import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';

export default function withContext(Radio) {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
        _inherits(WrappedComp, _React$Component);

        function WrappedComp() {
            _classCallCheck(this, WrappedComp);

            return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
        }

        WrappedComp.prototype.render = function render() {
            return React.createElement(Radio, _extends({}, this.props, { context: this.context }));
        };

        return WrappedComp;
    }(React.Component), _class.contextTypes = {
        onChange: PropTypes.func,
        __group__: PropTypes.bool,
        isButton: PropTypes.bool,
        selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
        disabled: PropTypes.bool
    }, _temp;
}