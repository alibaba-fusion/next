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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _text = require('./text');

var _text2 = _interopRequireDefault(_text);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Tag) {
    var _class, _temp;

    /**
     * Typography.Title
     * @description 分为 H1, H2, H3, H4, H5, H6 不同的组件，表示不同层级，继承 Typography.Text API
     * @order 1
     */
    var Title = (_temp = _class = function (_Component) {
        (0, _inherits3.default)(Title, _Component);

        function Title() {
            (0, _classCallCheck3.default)(this, Title);
            return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
        }

        Title.prototype.render = function render() {
            var _props = this.props,
                prefix = _props.prefix,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'className']);

            return _react2.default.createElement(_text2.default, (0, _extends3.default)({}, others, {
                component: Tag,
                className: (className || '') + ' ' + prefix + 'typography-title'
            }));
        };

        return Title;
    }(_react.Component), _class.propTypes = {
        prefix: _propTypes2.default.string
    }, _class.defaultProps = {
        prefix: 'next-'
    }, _temp);
    Title.displayName = 'Title';


    Title.displayName = Tag.toUpperCase();
    return _configProvider2.default.config(Title);
};

module.exports = exports['default'];