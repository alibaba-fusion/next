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

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _configProvider = require('../../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _animate = require('../../animate');

var _animate2 = _interopRequireDefault(_animate);

var _icon = require('../../icon');

var _icon2 = _interopRequireDefault(_icon);

var _button = require('../../button');

var _button2 = _interopRequireDefault(_button);

var _util = require('../../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Expand = _animate2.default.Expand;
/** Timeline.Item */

var TimelineItem = (_temp2 = _class = function (_Component) {
    (0, _inherits3.default)(TimelineItem, _Component);

    function TimelineItem() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, TimelineItem);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.beforeEnter = function () {
            _this['timeline-item'].style['min-height'] = 'auto';
        }, _this.beforeLeave = function () {
            _this['timeline-item'].style['min-height'] = '48px'; // timeleft 节点最小高度
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    TimelineItem.prototype.toggleFold = function toggleFold(folderIndex) {
        this.props.toggleFold(folderIndex);
    };

    TimelineItem.prototype.render = function render() {
        var _classNames,
            _classNames2,
            _classNames3,
            _classNames4,
            _this2 = this;

        var _props = this.props,
            prefix = _props.prefix,
            className = _props.className,
            state = _props.state,
            icon = _props.icon,
            dot = _props.dot,
            time = _props.time,
            title = _props.title,
            timeLeft = _props.timeLeft,
            content = _props.content,
            index = _props.index,
            total = _props.total,
            folderIndex = _props.folderIndex,
            foldShow = _props.foldShow,
            locale = _props.locale,
            animation = _props.animation,
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'className', 'state', 'icon', 'dot', 'time', 'title', 'timeLeft', 'content', 'index', 'total', 'folderIndex', 'foldShow', 'locale', 'animation']);

        var finalItemNode = dot ? dot : icon ? _react2.default.createElement(
            'span',
            { className: prefix + 'timeline-item-icon' },
            _react2.default.createElement(_icon2.default, { type: icon, size: 'xs' })
        ) : _react2.default.createElement('span', { className: prefix + 'timeline-item-dot' });
        var itemCls = (0, _classnames2.default)((_classNames = {}, _classNames[prefix + 'timeline-item'] = true, _classNames[prefix + 'timeline-item-first'] = index === 0, _classNames[prefix + 'timeline-item-last'] = index === total - 1, _classNames[prefix + 'timeline-item-' + state] = state, _classNames[prefix + 'timeline-item-folded'] = folderIndex, _classNames[prefix + 'timeline-item-unfolded'] = foldShow, _classNames[prefix + 'timeline-item-has-left-content'] = timeLeft, _classNames[className] = className, _classNames));
        var folderCls = (0, _classnames2.default)((_classNames2 = {}, _classNames2[prefix + 'timeline-item-folder'] = true, _classNames2[prefix + 'timeline-item-has-left-content'] = timeLeft, _classNames2));
        var itemNodeCls = (0, _classnames2.default)((_classNames3 = {}, _classNames3[prefix + 'timeline-item-node'] = true, _classNames3[prefix + 'timeline-item-node-custom'] = dot, _classNames3));
        var dotTailCls = (0, _classnames2.default)((_classNames4 = {}, _classNames4[prefix + 'timeline-item-dot-tail'] = true, _classNames4[prefix + 'timeline-item-dot-tail-solid'] = foldShow, _classNames4[prefix + 'timeline-hide'] = index === total - 1 && foldShow, _classNames4));

        var buttonProps = {
            text: true,
            size: 'small',
            type: 'primary',
            onClick: this.toggleFold.bind(this, folderIndex, total)
        };
        var timelineNode = folderIndex && foldShow || !folderIndex ? _react2.default.createElement(
            'div',
            (0, _extends3.default)({}, _util.obj.pickOthers(TimelineItem.propTypes, others), {
                className: itemCls,
                ref: function ref(e) {
                    _this2['timeline-item'] = e;
                }
            }),
            _react2.default.createElement(
                'div',
                { className: prefix + 'timeline-item-left-content' },
                _react2.default.createElement(
                    'p',
                    { className: prefix + 'timeline-item-body' },
                    timeLeft
                )
            ),
            _react2.default.createElement(
                'div',
                { className: prefix + 'timeline-item-timeline' },
                _react2.default.createElement(
                    'div',
                    { className: prefix + 'timeline-item-tail' },
                    _react2.default.createElement('i', null)
                ),
                _react2.default.createElement(
                    'div',
                    { className: itemNodeCls },
                    finalItemNode
                )
            ),
            _react2.default.createElement(
                'div',
                { className: prefix + 'timeline-item-content' },
                _react2.default.createElement(
                    'div',
                    { className: prefix + 'timeline-item-title' },
                    title
                ),
                _react2.default.createElement(
                    'div',
                    { className: prefix + 'timeline-item-body' },
                    content
                ),
                _react2.default.createElement(
                    'div',
                    { className: prefix + 'timeline-item-time' },
                    time
                )
            )
        ) : null;
        return _react2.default.createElement(
            'li',
            { tabIndex: '0' },
            animation && folderIndex ? _react2.default.createElement(
                Expand,
                {
                    animationAppear: false,
                    beforeEnter: this.beforeEnter,
                    beforeLeave: this.beforeEnter,
                    afterEnter: this.beforeLeave
                },
                timelineNode
            ) : timelineNode,
            folderIndex === index ? _react2.default.createElement(
                'div',
                { className: folderCls },
                _react2.default.createElement('div', { className: dotTailCls }),
                foldShow ? _react2.default.createElement(
                    _button2.default,
                    buttonProps,
                    locale.fold,
                    _react2.default.createElement(_icon2.default, { type: 'arrow-up' })
                ) : _react2.default.createElement(
                    _button2.default,
                    buttonProps,
                    locale.expand,
                    _react2.default.createElement(_icon2.default, { type: 'arrow-down' })
                )
            ) : null
        );
    };

    return TimelineItem;
}(_react.Component), _class.propTypes = (0, _extends3.default)({}, _configProvider2.default.propTypes, {
    prefix: _propTypes2.default.string,
    index: _propTypes2.default.number,
    total: _propTypes2.default.number,
    folderIndex: _propTypes2.default.number,
    foldShow: _propTypes2.default.bool,
    /**
     * 节点状态
     */
    state: _propTypes2.default.oneOf(['done', 'process', 'error', 'success']),
    /**
     * 图标
     */
    icon: _propTypes2.default.string,
    /**
     * 自定义时间轴节点
     */
    dot: _propTypes2.default.node,
    /**
     * 格式化后的时间
     */
    time: _propTypes2.default.node,
    /**
     * 标题
     */
    title: _propTypes2.default.node,
    /**
     * 左侧时间
     */
    timeLeft: _propTypes2.default.node,
    /**
     * 右侧内容
     */
    content: _propTypes2.default.node,
    toggleFold: _propTypes2.default.func,
    className: _propTypes2.default.string,
    locale: _propTypes2.default.object,
    /**
     * 动画
     */
    animation: _propTypes2.default.bool
}), _class.defaultProps = {
    prefix: 'next-',
    state: 'done',
    toggleFold: function toggleFold() {},
    animation: true
}, _temp2);
TimelineItem.displayName = 'TimelineItem';
exports.default = TimelineItem;
module.exports = exports['default'];