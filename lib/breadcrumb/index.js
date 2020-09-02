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

var _class, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Breadcrumb
 */
var Breadcrumb = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Breadcrumb, _Component);

    function Breadcrumb(props) {
        (0, _classCallCheck3.default)(this, Breadcrumb);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

        _initialiseProps.call(_this);

        _this.state = {
            maxNode: props.maxNode === 'auto' ? 100 : props.maxNode
        };
        return _this;
    }

    Breadcrumb.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
        if (state.prevMaxNode === props.maxNode) {
            return {};
        }

        return {
            prevMaxNode: props.maxNode,
            maxNode: props.maxNode === 'auto' ? 100 : props.maxNode
        };
    };

    Breadcrumb.prototype.componentDidMount = function componentDidMount() {
        this.computeMaxNode();
        _util.events.on(window, 'resize', this.computeMaxNode);
    };

    Breadcrumb.prototype.componentDidUpdate = function componentDidUpdate() {
        this.computeMaxNode();
    };

    Breadcrumb.prototype.componentWillUnmount = function componentWillUnmount() {
        _util.events.off(window, 'resize', this.computeMaxNode);
    };

    Breadcrumb.prototype.render = function render() {
        var _props = this.props,
            prefix = _props.prefix,
            rtl = _props.rtl,
            className = _props.className,
            children = _props.children,
            component = _props.component,
            maxNodeProp = _props.maxNode,
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'rtl', 'className', 'children', 'component', 'maxNode']);


        var separator = this.props.separator || _react2.default.createElement(_icon2.default, {
            type: 'arrow-right',
            className: prefix + 'breadcrumb-icon-sep'
        });

        var maxNode = this.state.maxNode;


        var items = void 0;
        var length = _react.Children.count(children);

        if (maxNode > 1 && length > maxNode) {
            var breakpointer = length - maxNode + 1;
            items = [];

            _react.Children.forEach(children, function (item, i) {
                var ariaProps = {};

                if (i === length - 1) {
                    ariaProps['aria-current'] = 'page';
                }

                if (i && i === breakpointer) {
                    items.push(_react2.default.cloneElement(item, (0, _extends3.default)({
                        separator: separator,
                        prefix: prefix,
                        key: i,
                        activated: i === length - 1
                    }, ariaProps, {
                        className: prefix + 'breadcrumb-text-ellipsis'
                    }), '...'));
                } else if (!i || i > breakpointer) {
                    items.push(_react2.default.cloneElement(item, (0, _extends3.default)({
                        separator: separator,
                        prefix: prefix,
                        key: i
                    }, ariaProps, {
                        activated: i === length - 1
                    })));
                }
            });
        } else {
            items = _react.Children.map(children, function (item, i) {
                var ariaProps = {};

                if (i === length - 1) {
                    ariaProps['aria-current'] = 'page';
                }

                return _react2.default.cloneElement(item, (0, _extends3.default)({
                    separator: separator,
                    prefix: prefix,
                    activated: i === length - 1
                }, ariaProps, {
                    key: i
                }));
            });
        }

        if (rtl) {
            others.dir = 'rtl';
        }

        var BreadcrumbComponent = component;

        delete others.maxNode;

        return _react2.default.createElement(
            BreadcrumbComponent,
            (0, _extends3.default)({
                'aria-label': 'Breadcrumb',
                className: className
            }, others, {
                style: (0, _extends3.default)({ position: 'relative' }, others.style || {})
            }),
            _react2.default.createElement(
                'ul',
                { className: prefix + 'breadcrumb' },
                items
            ),
            maxNodeProp === 'auto' ? _react2.default.createElement(
                'ul',
                {
                    style: {
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        visibility: 'hidden'
                    },
                    ref: this.saveBreadcrumbRef,
                    className: prefix + 'breadcrumb'
                },
                _react.Children.map(children, function (item, i) {
                    return _react2.default.cloneElement(item, {
                        separator: separator,
                        prefix: prefix,
                        activated: i === length - 1,
                        key: i
                    });
                })
            ) : null
        );
    };

    return Breadcrumb;
}(_react.Component), _class.Item = _item2.default, _class.propTypes = {
    /**
     * 样式类名的品牌前缀
     */
    prefix: _propTypes2.default.string,
    rtl: _propTypes2.default.bool,
    /*eslint-disable*/
    /**
     * 面包屑子节点，需传入 Breadcrumb.Item
     */
    children: function children(props, propName) {
        _react.Children.forEach(props[propName], function (child) {
            if (!(child && typeof child.type === 'function' && child.type._typeMark === 'breadcrumb_item')) {
                throw new Error("Breadcrumb's children must be Breadcrumb.Item!");
            }
        });
    },
    /*eslint-enable*/
    /**
     * 面包屑最多显示个数，超出部分会被隐藏, 设置为 auto 会自动根据父元素的宽度适配。
     */
    maxNode: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.oneOf(['auto'])]),
    /**
     * 分隔符，可以是文本或 Icon
     */
    separator: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.string]),
    /**
     * 设置标签类型
     */
    component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    className: _propTypes2.default.any
}, _class.defaultProps = {
    prefix: 'next-',
    maxNode: 100,
    component: 'nav'
}, _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.computeMaxNode = function () {
        // 计算最大node节点，无法获取到 ... 节点的宽度，目前会有 nodeWidth - ellipsisNodeWidth 的误差
        if (_this2.props.maxNode !== 'auto' || !_this2.breadcrumbEl) return;
        var scrollWidth = _this2.breadcrumbEl.scrollWidth;
        var rect = _this2.breadcrumbEl.getBoundingClientRect();

        if (scrollWidth <= rect.width) return;
        var maxNode = _this2.breadcrumbEl.children.length;
        var index = 1;
        var fullWidth = scrollWidth;

        while (index < _this2.breadcrumbEl.children.length - 1) {
            var el = _this2.breadcrumbEl.children[index];
            maxNode--;
            fullWidth -= el.getBoundingClientRect().width;
            if (fullWidth <= rect.width) {
                break;
            }
            index++;
        }

        maxNode = Math.max(3, maxNode);

        if (maxNode !== _this2.state.maxNode) {
            _this2.setState({
                maxNode: maxNode
            });
        }
    };

    this.saveBreadcrumbRef = function (ref) {
        _this2.breadcrumbEl = ref;
    };
}, _temp);
Breadcrumb.displayName = 'Breadcrumb';
exports.default = _configProvider2.default.config((0, _reactLifecyclesCompat.polyfill)(Breadcrumb));
module.exports = exports['default'];