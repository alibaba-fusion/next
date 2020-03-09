'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabContent = (_temp = _class = function (_PureComponent) {
    (0, _inherits3.default)(TabContent, _PureComponent);

    function TabContent() {
        (0, _classCallCheck3.default)(this, TabContent);
        return (0, _possibleConstructorReturn3.default)(this, _PureComponent.apply(this, arguments));
    }

    TabContent.prototype.render = function render() {
        var _classnames;

        var _props = this.props,
            prefix = _props.prefix,
            activeKey = _props.activeKey,
            lazyLoad = _props.lazyLoad,
            unmountInactiveTabs = _props.unmountInactiveTabs,
            children = _props.children,
            className = _props.className,
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'activeKey', 'lazyLoad', 'unmountInactiveTabs', 'children', 'className']);

        var formatChildren = [];
        _react2.default.Children.forEach(children, function (child) {
            /* eslint-disable eqeqeq */
            var active = activeKey == child.key;
            formatChildren.push(_react2.default.cloneElement(child, {
                prefix: prefix,
                active: active,
                lazyLoad: lazyLoad,
                unmountInactiveTabs: unmountInactiveTabs
            }));
        });

        var classNames = (0, _classnames3.default)((_classnames = {}, _classnames[prefix + 'tabs-content'] = true, _classnames), className);

        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({}, others, { className: classNames }),
            formatChildren
        );
    };

    return TabContent;
}(_react.PureComponent), _class.propTypes = {
    prefix: _propTypes2.default.string,
    activeKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    lazyLoad: _propTypes2.default.bool,
    children: _propTypes2.default.any
}, _temp);
exports.default = TabContent;
module.exports = exports['default'];