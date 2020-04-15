'use strict';

exports.__esModule = true;
exports.default = undefined;

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

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _body = require('../base/body');

var _body2 = _interopRequireDefault(_body);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/prefer-stateless-function */
var VirtualBody = (_temp2 = _class = function (_React$Component) {
    (0, _inherits3.default)(VirtualBody, _React$Component);

    function VirtualBody() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, VirtualBody);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.tableRef = function (table) {
            _this.tableNode = table;
        }, _this.virtualScrollRef = function (virtualScroll) {
            _this.virtualScrollNode = virtualScroll;
        }, _this.onScroll = function (current) {
            // for fixed
            _this.context.onFixedScrollSync(current);
            // for lock
            _this.context.onLockBodyScroll(current);
            // for virtual
            _this.context.onVirtualScroll();
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    VirtualBody.prototype.componentDidMount = function componentDidMount() {
        var bodyNode = (0, _reactDom.findDOMNode)(this);
        // // for fixed
        this.context.getNode('body', bodyNode);
        // for virtual
        this.context.getBodyNode(bodyNode, this.context.lockType);
        // for lock
        this.context.getLockNode('body', bodyNode, this.context.lockType);
    };

    VirtualBody.prototype.render = function render() {
        var _props = this.props,
            prefix = _props.prefix,
            className = _props.className,
            colGroup = _props.colGroup,
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'className', 'colGroup']);
        var _context = this.context,
            maxBodyHeight = _context.maxBodyHeight,
            bodyHeight = _context.bodyHeight,
            innerTop = _context.innerTop;


        return _react2.default.createElement(
            'div',
            {
                style: { maxHeight: maxBodyHeight },
                className: className,
                onScroll: this.onScroll
            },
            _react2.default.createElement(
                'div',
                {
                    style: {
                        height: bodyHeight,
                        overflow: 'hidden',
                        position: 'relative'
                    },
                    ref: this.virtualScrollRef
                },
                _react2.default.createElement(
                    'div',
                    {
                        style: {
                            height: '100%',
                            position: 'relative',
                            transform: 'translateY(' + innerTop + 'px)'
                        }
                    },
                    _react2.default.createElement(
                        'table',
                        { ref: this.tableRef },
                        colGroup,
                        _react2.default.createElement(_body2.default, (0, _extends3.default)({}, others, { prefix: prefix }))
                    )
                )
            )
        );
    };

    return VirtualBody;
}(_react2.default.Component), _class.propTypes = {
    children: _propTypes2.default.any,
    prefix: _propTypes2.default.string,
    className: _propTypes2.default.string,
    colGroup: _propTypes2.default.any
}, _class.contextTypes = {
    maxBodyHeight: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    onBodyScroll: _propTypes2.default.func,
    onFixedScrollSync: _propTypes2.default.func,
    onVirtualScroll: _propTypes2.default.func,
    onLockBodyScroll: _propTypes2.default.func,
    bodyHeight: _propTypes2.default.number,
    innerTop: _propTypes2.default.number,
    getNode: _propTypes2.default.func,
    getBodyNode: _propTypes2.default.func,
    getLockNode: _propTypes2.default.func,
    lockType: _propTypes2.default.oneOf(['left', 'right'])
}, _temp2);
VirtualBody.displayName = 'VirtualBody';
exports.default = VirtualBody;
module.exports = exports['default'];