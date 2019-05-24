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

exports.default = create;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _overlay = require('../../overlay');

var _overlay2 = _interopRequireDefault(_overlay);

var _util = require('../../util');

var _configProvider = require('../../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _menu = require('./menu');

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bindCtx = _util.func.bindCtx;
var getContextProps = _configProvider2.default.getContextProps;

var Menu = _configProvider2.default.config(_menu2.default);

var menuInstance = void 0;

var ContextMenu = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(ContextMenu, _Component);

    function ContextMenu(props) {
        (0, _classCallCheck3.default)(this, ContextMenu);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

        _this.state = {
            visible: true
        };

        bindCtx(_this, ['handleOverlayClose', 'handleOverlayOpen', 'handleItemClick', 'getOverlay']);
        return _this;
    }

    ContextMenu.prototype.getOverlay = function getOverlay(ref) {
        this.overlay = ref;
    };

    ContextMenu.prototype.close = function close() {
        this.setState({
            visible: false
        });
        menuInstance = null;
    };

    ContextMenu.prototype.handleOverlayClose = function handleOverlayClose(triggerType, e) {
        var clickedPopupMenu = triggerType === 'docClick' && this.popupNodes.some(function (node) {
            return node.contains(e.target);
        });
        if (!clickedPopupMenu) {
            this.close();
            var overlayProps = this.props.overlayProps;

            if (overlayProps && overlayProps.onRequestClose) {
                for (var _len = arguments.length, others = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                    others[_key - 2] = arguments[_key];
                }

                overlayProps.onRequestClose.apply(overlayProps, [triggerType, e].concat(others));
            }
        }
    };

    ContextMenu.prototype.handleOverlayOpen = function handleOverlayOpen() {
        this.popupNodes = this.overlay.getInstance().getContent().getInstance().popupNodes;
        var overlayProps = this.props.overlayProps;

        if (overlayProps && overlayProps.onOpen) {
            overlayProps.onOpen();
        }
    };

    ContextMenu.prototype.handleItemClick = function handleItemClick() {
        var _props;

        this.close();

        this.props.onItemClick && (_props = this.props).onItemClick.apply(_props, arguments);
    };

    ContextMenu.prototype.render = function render() {
        var _cx, _cx2;

        var _props2 = this.props,
            className = _props2.className,
            popupClassName = _props2.popupClassName,
            target = _props2.target,
            align = _props2.align,
            offset = _props2.offset,
            afterClose = _props2.afterClose,
            _props2$overlayProps = _props2.overlayProps,
            overlayProps = _props2$overlayProps === undefined ? {} : _props2$overlayProps,
            others = (0, _objectWithoutProperties3.default)(_props2, ['className', 'popupClassName', 'target', 'align', 'offset', 'afterClose', 'overlayProps']);

        var contextProps = getContextProps(this.props);
        var prefix = contextProps.prefix;
        var visible = this.state.visible;


        var newOverlayProps = (0, _extends3.default)({}, contextProps, overlayProps, {
            target: target,
            align: align,
            offset: offset,
            afterClose: afterClose,
            visible: visible,
            onRequestClose: this.handleOverlayClose,
            onOpen: this.handleOverlayOpen,
            ref: this.getOverlay
        });
        var menuProps = (0, _extends3.default)({}, contextProps, {
            triggerType: 'hover'
        }, others, {
            className: (0, _classnames2.default)((_cx = {}, _cx[prefix + 'context'] = true, _cx[className] = !!className, _cx)),
            popupClassName: (0, _classnames2.default)((_cx2 = {}, _cx2[prefix + 'context'] = true, _cx2[popupClassName] = !!popupClassName, _cx2)),
            onItemClick: this.handleItemClick
        });

        newOverlayProps.rtl = false;

        return _react2.default.createElement(
            _overlay2.default,
            newOverlayProps,
            _react2.default.createElement(Menu, menuProps)
        );
    };

    return ContextMenu;
}(_react.Component), _class.propTypes = {
    className: _propTypes2.default.string,
    popupClassName: _propTypes2.default.string,
    target: _propTypes2.default.any,
    align: _propTypes2.default.string,
    offset: _propTypes2.default.array,
    overlayProps: _propTypes2.default.object,
    afterClose: _propTypes2.default.func,
    mode: _propTypes2.default.oneOf(['inline', 'popup']),
    onOpen: _propTypes2.default.func,
    onItemClick: _propTypes2.default.func
}, _class.defaultProps = {
    prefix: 'next-',
    align: 'tl tl',
    mode: 'popup'
}, _temp);

/**
 * 创建上下文菜单
 * @exportName create
 * @param {Object} props 属性对象
 */

ContextMenu.displayName = 'ContextMenu';
function create(props) {
    if (menuInstance) {
        menuInstance.destroy();
    }

    /* eslint-disable no-unused-vars */
    var afterClose = props.afterClose,
        others = (0, _objectWithoutProperties3.default)(props, ['afterClose']);
    /* eslint-enable no-unused-vars */

    var div = document.createElement('div');
    document.body.appendChild(div);

    var closeChain = function closeChain() {
        (0, _reactDom.unmountComponentAtNode)(div);
        document.body.removeChild(div);

        afterClose && afterClose();
    };

    var newContext = _configProvider2.default.getContext();

    var menu = void 0;
    (0, _reactDom.render)(_react2.default.createElement(
        _configProvider2.default,
        newContext,
        _react2.default.createElement(ContextMenu, (0, _extends3.default)({
            ref: function ref(_ref) {
                menu = _ref;
            },
            afterClose: closeChain
        }, others))
    ), div);

    menuInstance = {
        destroy: function destroy() {
            if (menu) {
                menu.close();
            }
        }
    };

    return menuInstance;
}
module.exports = exports['default'];