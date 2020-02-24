'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scrollTo(element, to, duration) {
    var requestAnimationFrame = window.requestAnimationFrame || function requestAnimationFrameTimeout() {
        return setTimeout(arguments.length <= 0 ? undefined : arguments[0], 10);
    };

    if (duration <= 0) {
        element.scrollTop = to;
        return;
    }

    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    requestAnimationFrame(function () {
        element.scrollTop = element.scrollTop + perTick;

        if (element.scrollTop === to) {
            return;
        }

        scrollTo(element, to, duration - 10);
    });
}

var noop = function noop() {};

var TimeMenu = (_temp2 = _class = function (_React$Component) {
    (0, _inherits3.default)(TimeMenu, _React$Component);

    function TimeMenu() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, TimeMenu);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._menuRefHandler = function (ref) {
            _this.menu = ref;
        }, _this.createMenuItems = function (list) {
            var _this$props = _this.props,
                prefix = _this$props.prefix,
                mode = _this$props.mode,
                disabled = _this$props.disabled,
                disabledItems = _this$props.disabledItems,
                activeIndex = _this$props.activeIndex,
                onSelect = _this$props.onSelect,
                renderTimeMenuItems = _this$props.renderTimeMenuItems,
                timeValue = _this$props.value;

            list = renderTimeMenuItems(list, mode, timeValue) || list;

            return list.map(function (_ref) {
                var _classnames;

                var label = _ref.label,
                    value = _ref.value;

                var isDisabled = disabled || disabledItems(value);
                var itemCls = (0, _classnames3.default)((_classnames = {}, _classnames[prefix + 'time-picker-menu-item'] = true, _classnames[prefix + 'disabled'] = isDisabled, _classnames[prefix + 'selected'] = value === activeIndex, _classnames));
                var onClick = isDisabled ? noop : function () {
                    return onSelect(value, mode);
                };
                return _react2.default.createElement(
                    'li',
                    {
                        role: 'option',
                        'aria-selected': String(value === activeIndex),
                        key: value,
                        title: value,
                        className: itemCls,
                        onClick: onClick
                    },
                    label
                );
            });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    TimeMenu.prototype.componentDidMount = function componentDidMount() {
        this.scrollToSelected(0);
    };

    TimeMenu.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        if (prevProps.activeIndex !== this.props.activeIndex) {
            this.scrollToSelected(120);
        }
    };

    TimeMenu.prototype.scrollToSelected = function scrollToSelected() {
        var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var _props = this.props,
            activeIndex = _props.activeIndex,
            step = _props.step;

        var targetIndex = Math.floor((activeIndex || 0) / step);
        var firstItem = this.menu.children[targetIndex];
        var offsetTo = firstItem.offsetTop;
        scrollTo(this.menu, offsetTo, duration);
    };

    TimeMenu.prototype.render = function render() {
        var _props2 = this.props,
            prefix = _props2.prefix,
            title = _props2.title,
            mode = _props2.mode,
            step = _props2.step;

        var total = mode === 'hour' ? 24 : 60;
        var list = [];
        for (var i = 0; i < total; i++) {
            if (i % step === 0) {
                list.push({
                    label: i,
                    value: i
                });
            }
        }

        var menuTitle = title ? _react2.default.createElement(
            'div',
            { className: prefix + 'time-picker-menu-title' },
            title
        ) : null;

        return _react2.default.createElement(
            'div',
            { className: prefix + 'time-picker-menu' },
            menuTitle,
            _react2.default.createElement(
                'ul',
                {
                    role: 'listbox',
                    className: prefix + 'time-picker-menu-' + mode,
                    ref: this._menuRefHandler
                },
                this.createMenuItems(list)
            )
        );
    };

    return TimeMenu;
}(_react2.default.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    title: _propTypes2.default.node,
    mode: _propTypes2.default.oneOf(['hour', 'minute', 'second']),
    step: _propTypes2.default.number,
    activeIndex: _propTypes2.default.number,
    value: _utils.checkMomentObj,
    disabledItems: _propTypes2.default.func,
    renderTimeMenuItems: _propTypes2.default.func,
    onSelect: _propTypes2.default.func,
    disabled: _propTypes2.default.bool
}, _class.defaultProps = {
    step: 1,
    disabledItems: function disabledItems() {
        return false;
    },
    renderTimeMenuItems: function renderTimeMenuItems(list) {
        return list;
    },
    onSelect: function onSelect() {},
    disabled: false
}, _temp2);
TimeMenu.displayName = 'TimeMenu';
exports.default = TimeMenu;
module.exports = exports['default'];