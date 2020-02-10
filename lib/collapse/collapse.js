'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _util = require('../util');

var _panel = require('./panel');

var _panel2 = _interopRequireDefault(_panel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Collapse */
var Collapse = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(Collapse, _React$Component);

    function Collapse(props) {
        (0, _classCallCheck3.default)(this, Collapse);

        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

        var expandedKeys = void 0;
        if ('expandedKeys' in props) {
            expandedKeys = props.expandedKeys;
        } else {
            expandedKeys = props.defaultExpandedKeys;
        }

        _this.state = {
            expandedKeys: typeof expandedKeys === 'undefined' ? [] : expandedKeys
        };
        return _this;
    }

    Collapse.getDerivedStateFromProps = function getDerivedStateFromProps(props) {
        if ('expandedKeys' in props) {
            return {
                expandedKeys: typeof props.expandedKeys === 'undefined' ? [] : props.expandedKeys
            };
        }
        return null;
    };

    Collapse.prototype.onItemClick = function onItemClick(key) {
        var expandedKeys = this.state.expandedKeys;
        if (this.props.accordion) {
            expandedKeys = String(expandedKeys[0]) === String(key) ? [] : [key];
        } else {
            expandedKeys = [].concat(expandedKeys);
            var stringKey = String(key);
            var index = expandedKeys.findIndex(function (k) {
                return String(k) === stringKey;
            });
            var isExpanded = index > -1;
            if (isExpanded) {
                expandedKeys.splice(index, 1);
            } else {
                expandedKeys.push(key);
            }
        }
        this.setExpandedKey(expandedKeys);
    };

    Collapse.prototype.genratePanelId = function genratePanelId(itemId, index) {
        var collapseId = this.props.id;

        var id = void 0;
        if (itemId) {
            // 优先用 item自带的id
            id = itemId;
        } else if (collapseId) {
            // 其次用 collapseId 和 index 生成id
            id = collapseId + '-panel-' + index;
        }
        return id;
    };

    Collapse.prototype.getProps = function getProps(item, index, key) {
        var _this2 = this;

        var expandedKeys = this.state.expandedKeys;
        var title = item.title;

        var disabled = this.props.disabled;

        if (!disabled) {
            disabled = item.disabled;
        }

        var isExpanded = false;

        if (this.props.accordion) {
            isExpanded = String(expandedKeys[0]) === String(key);
        } else {
            isExpanded = expandedKeys.some(function (expandedKey) {
                if (expandedKey === null || expandedKey === undefined || key === null || key === undefined) {
                    return false;
                }

                if (expandedKey === key || expandedKey.toString() === key.toString()) {
                    return true;
                }
                return false;
            });
        }

        var id = this.genratePanelId(item.id, index);
        return {
            key: key,
            title: title,
            isExpanded: isExpanded,
            disabled: disabled,
            id: id,
            onClick: disabled ? null : function () {
                _this2.onItemClick(key);
                if ('onClick' in item) {
                    item.onClick(key);
                }
            }
        };
    };

    Collapse.prototype.getItemsByDataSource = function getItemsByDataSource() {
        var _this3 = this;

        var props = this.props;
        var dataSource = props.dataSource;
        // 是否有dataSource.item传入过key

        var hasKeys = dataSource.some(function (item) {
            return 'key' in item;
        });

        return dataSource.map(function (item, index) {
            // 传入过key就用item.key 没传入则统一使用index为key
            var key = hasKeys ? item.key : '' + index;
            return _react2.default.createElement(
                _panel2.default,
                (0, _extends3.default)({}, _this3.getProps(item, index, key), { key: key }),
                item.content
            );
        });
    };

    Collapse.prototype.getItemsByChildren = function getItemsByChildren() {
        var _this4 = this;

        // 是否有child传入过key
        var allKeys = _react2.default.Children.map(this.props.children, function (child) {
            return child && child.key;
        });
        var hasKeys = Boolean(allKeys.length);

        return _react2.default.Children.map(this.props.children, function (child, index) {
            if (child && typeof child.type === 'function' && child.type.isNextPanel) {
                // 传入过key就用child.key 没传入则统一使用index为key
                var key = hasKeys ? child.key : '' + index;
                return _react2.default.cloneElement(child, _this4.getProps(child.props, index, key));
            } else {
                return child;
            }
        });
    };

    Collapse.prototype.setExpandedKey = function setExpandedKey(expandedKeys) {
        if (!('expandedKeys' in this.props)) {
            this.setState({ expandedKeys: expandedKeys });
        }
        this.props.onExpand(this.props.accordion ? expandedKeys[0] : expandedKeys);
    };

    Collapse.prototype.render = function render() {
        var _classNames;

        var _props = this.props,
            prefix = _props.prefix,
            className = _props.className,
            style = _props.style,
            disabled = _props.disabled,
            dataSource = _props.dataSource,
            id = _props.id,
            rtl = _props.rtl;

        var collapseClassName = (0, _classnames2.default)((_classNames = {}, _classNames[prefix + 'collapse'] = true, _classNames[prefix + 'collapse-disabled'] = disabled, _classNames[className] = Boolean(className), _classNames));

        var others = _util.obj.pickOthers(Collapse.propTypes, this.props);
        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({
                id: id,
                className: collapseClassName,
                style: style
            }, others, {
                role: 'presentation',
                dir: rtl ? 'rtl' : undefined
            }),
            dataSource ? this.getItemsByDataSource() : this.getItemsByChildren()
        );
    };

    return Collapse;
}(_react2.default.Component), _class.propTypes = {
    /**
     * 样式前缀
     */
    prefix: _propTypes2.default.string,
    /**
     * 组件接受行内样式
     */
    style: _propTypes2.default.object,
    /**
     * 使用数据模型构建
     */
    dataSource: _propTypes2.default.array,
    /**
     * 默认展开keys
     */
    defaultExpandedKeys: _propTypes2.default.array,
    /**
     * 受控展开keys
     */
    expandedKeys: _propTypes2.default.array,
    /**
     * 展开状态发升变化时候的回调
     */
    onExpand: _propTypes2.default.func,
    /**
     * 所有禁用
     */
    disabled: _propTypes2.default.bool,
    /**
     * 扩展class
     */
    className: _propTypes2.default.string,
    /**
     * 手风琴模式，一次只能打开一个
     */
    accordion: _propTypes2.default.bool,
    children: _propTypes2.default.node,
    id: _propTypes2.default.string,
    rtl: _propTypes2.default.bool
}, _class.defaultProps = {
    accordion: false,
    prefix: 'next-',
    onExpand: _util.func.noop
}, _class.contextTypes = {
    prefix: _propTypes2.default.string
}, _temp);
Collapse.displayName = 'Collapse';
exports.default = (0, _reactLifecyclesCompat.polyfill)(_configProvider2.default.config(Collapse));
module.exports = exports['default'];