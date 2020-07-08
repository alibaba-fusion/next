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

exports.default = fixed;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _util = require('../util');

var _header = require('./fixed/header');

var _header2 = _interopRequireDefault(_header);

var _body = require('./fixed/body');

var _body2 = _interopRequireDefault(_body);

var _wrapper = require('./fixed/wrapper');

var _wrapper2 = _interopRequireDefault(_wrapper);

var _util2 = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fixed(BaseComponent) {
    var _class, _temp2;

    /** Table */
    var FixedTable = (_temp2 = _class = function (_React$Component) {
        (0, _inherits3.default)(FixedTable, _React$Component);

        function FixedTable() {
            var _temp, _this, _ret;

            (0, _classCallCheck3.default)(this, FixedTable);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {}, _this.getNode = function (type, node, lockType) {
                lockType = lockType ? lockType.charAt(0).toUpperCase() + lockType.substr(1) : '';
                _this['' + type + lockType + 'Node'] = node;
            }, _this.onFixedScrollSync = function () {
                var current = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                if (current.currentTarget !== current.target) {
                    return;
                }
                var target = current.target,
                    headerNode = _this.headerNode,
                    bodyNode = _this.bodyNode;

                var scrollLeft = target.scrollLeft;

                if (target === bodyNode) {
                    if (headerNode && scrollLeft !== headerNode.scrollLeft) {
                        headerNode.scrollLeft = scrollLeft;
                    }
                } else if (target === headerNode) {
                    if (bodyNode && scrollLeft !== bodyNode.scrollLeft) {
                        bodyNode.scrollLeft = scrollLeft;
                    }
                }
            }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
        }

        FixedTable.prototype.getChildContext = function getChildContext() {
            return {
                fixedHeader: this.props.fixedHeader,
                maxBodyHeight: this.props.maxBodyHeight,
                onFixedScrollSync: this.onFixedScrollSync,
                getNode: this.getNode
            };
        };

        FixedTable.prototype.componentDidMount = function componentDidMount() {
            this.adjustFixedHeaderSize();
        };

        FixedTable.prototype.componentDidUpdate = function componentDidUpdate() {
            this.adjustFixedHeaderSize();
        };

        // for fixed header scroll left


        FixedTable.prototype.adjustFixedHeaderSize = function adjustFixedHeaderSize() {
            var _props = this.props,
                hasHeader = _props.hasHeader,
                rtl = _props.rtl;

            var paddingName = rtl ? 'paddingLeft' : 'paddingRight';
            var marginName = rtl ? 'marginLeft' : 'marginRight';
            var body = this.bodyNode;

            if (hasHeader && !this.props.lockType && body) {
                var _style;

                var scrollBarSize = +_util.dom.scrollbar().width || 0;
                var hasVerScroll = body.scrollHeight > body.clientHeight,
                    hasHozScroll = body.scrollWidth > body.clientWidth;
                var style = (_style = {}, _style[paddingName] = scrollBarSize, _style[marginName] = scrollBarSize, _style);

                if (!hasVerScroll) {
                    style[paddingName] = 0;
                    style[marginName] = 0;
                }

                if (+scrollBarSize) {
                    style.marginBottom = -scrollBarSize;
                    if (hasHozScroll) {
                        style.paddingBottom = scrollBarSize;
                    } else {
                        style.paddingBottom = scrollBarSize;
                        style[marginName] = 0;
                    }
                }

                _util.dom.setStyle(this.headerNode, style);
            }
        };

        FixedTable.prototype.render = function render() {
            /* eslint-disable no-unused-vars, prefer-const */
            var _props2 = this.props,
                components = _props2.components,
                className = _props2.className,
                prefix = _props2.prefix,
                fixedHeader = _props2.fixedHeader,
                lockType = _props2.lockType,
                dataSource = _props2.dataSource,
                maxBodyHeight = _props2.maxBodyHeight,
                others = (0, _objectWithoutProperties3.default)(_props2, ['components', 'className', 'prefix', 'fixedHeader', 'lockType', 'dataSource', 'maxBodyHeight']);

            if (fixedHeader) {
                var _classnames;

                components = (0, _extends3.default)({}, components);
                if (!components.Header) {
                    components.Header = _header2.default;
                }
                if (!components.Body) {
                    components.Body = _body2.default;
                }
                if (!components.Wrapper) {
                    components.Wrapper = _wrapper2.default;
                }
                className = (0, _classnames3.default)((_classnames = {}, _classnames[prefix + 'table-fixed'] = true, _classnames[prefix + 'table-wrap-empty'] = !dataSource.length, _classnames[className] = className, _classnames));
            }

            return _react2.default.createElement(BaseComponent, (0, _extends3.default)({}, others, {
                dataSource: dataSource,
                lockType: lockType,
                components: components,
                className: className,
                prefix: prefix
            }));
        };

        return FixedTable;
    }(_react2.default.Component), _class.FixedHeader = _header2.default, _class.FixedBody = _body2.default, _class.FixedWrapper = _wrapper2.default, _class.propTypes = (0, _extends3.default)({
        /**
         * 是否具有表头
         */
        hasHeader: _propTypes2.default.bool,
        /**
         * 表头是否固定，该属性配合maxBodyHeight使用，当内容区域的高度超过maxBodyHeight的时候，在内容区域会出现滚动条
         */
        fixedHeader: _propTypes2.default.bool,
        /**
         * 最大内容区域的高度,在`fixedHeader`为`true`的时候,超过这个高度会出现滚动条
         */
        maxBodyHeight: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
    }, BaseComponent.propTypes), _class.defaultProps = (0, _extends3.default)({}, BaseComponent.defaultProps, {
        hasHeader: true,
        fixedHeader: false,
        maxBodyHeight: 200,
        components: {},
        refs: {},
        prefix: 'next-'
    }), _class.childContextTypes = {
        fixedHeader: _propTypes2.default.bool,
        getNode: _propTypes2.default.func,
        onFixedScrollSync: _propTypes2.default.func,
        maxBodyHeight: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
    }, _temp2);
    FixedTable.displayName = 'FixedTable';

    (0, _util2.statics)(FixedTable, BaseComponent);
    return FixedTable;
}
module.exports = exports['default'];