'use strict';

exports.__esModule = true;

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

var _reactLifecyclesCompat = require('react-lifecycles-compat');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Tab.Item */
var TabItem = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(TabItem, _React$Component);

    function TabItem() {
        (0, _classCallCheck3.default)(this, TabItem);
        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
    }

    TabItem.prototype.render = function render() {
        var _classnames;

        var _props = this.props,
            prefix = _props.prefix,
            active = _props.active,
            lazyLoad = _props.lazyLoad,
            unmountInactiveTabs = _props.unmountInactiveTabs,
            children = _props.children;


        this._actived = this._actived || active;
        if (lazyLoad && !this._actived) {
            return null;
        }

        if (unmountInactiveTabs && !active) {
            return null;
        }

        var cls = (0, _classnames3.default)((_classnames = {}, _classnames[prefix + 'tabs-tabpane'] = true, _classnames['' + (active ? 'active' : 'hidden')] = true, _classnames));

        return _react2.default.createElement(
            'div',
            {
                role: 'tabpanel',
                'aria-hidden': active ? 'false' : 'true',
                className: cls
            },
            children
        );
    };

    return TabItem;
}(_react2.default.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    /**
     * 选项卡标题
     */
    title: _propTypes2.default.node,
    /**
     * 单个选项卡是否可关闭
     */
    closeable: _propTypes2.default.bool,
    /**
     * 选项卡是否被禁用
     */
    disabled: _propTypes2.default.bool,
    active: _propTypes2.default.bool,
    lazyLoad: _propTypes2.default.bool,
    unmountInactiveTabs: _propTypes2.default.bool,
    children: _propTypes2.default.any
}, _class.defaultProps = {
    prefix: 'next-',
    closeable: false
}, _temp);
TabItem.displayName = 'TabItem';
exports.default = (0, _reactLifecyclesCompat.polyfill)(TabItem);
module.exports = exports['default'];