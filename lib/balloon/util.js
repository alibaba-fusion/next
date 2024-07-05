'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.getDisabledCompatibleTrigger = getDisabledCompatibleTrigger;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getDisabledCompatibleTrigger(element) {
    if (element.type.displayName === 'Config(Button)' && element.props.disabled) {
        var displayStyle = element.props.style && element.props.style.display ? element.props.style.display : 'inline-block';
        var child = _react2.default.cloneElement(element, {
            style: (0, _extends3.default)({}, element.props.style, {
                pointerEvents: 'none'
            })
        });
        return (
            // eslint-disable-next-line
            _react2.default.createElement(
                'span',
                { style: { display: displayStyle, cursor: 'not-allowed' } },
                child
            )
        );
    }
    return element;
}