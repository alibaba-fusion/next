'use strict';

exports.__esModule = true;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _util = require('../../util');

var _configProvider = require('../../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _zhCn = require('../../locale/zh-cn');

var _zhCn2 = _interopRequireDefault(_zhCn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Timeline */
var Timeline = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Timeline, _Component);

    function Timeline(props, context) {
        (0, _classCallCheck3.default)(this, Timeline);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props, context));

        _this.state = {
            fold: props.fold
        };
        return _this;
    }

    Timeline.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
        var innerUpdate = prevState.innerUpdate,
            fold = prevState.fold;


        if (innerUpdate) {
            return {
                fold: fold,
                innerUpdate: false
            };
        }

        if ('fold' in nextProps) {
            return {
                fold: nextProps.fold
            };
        }

        return null;
    };

    Timeline.prototype.toggleFold = function toggleFold(folderIndex, total) {
        var fold = this.state.fold.map(function (item) {
            return (0, _extends3.default)({}, item);
        });

        if (folderIndex) {
            for (var i = 0; i < fold.length; i++) {
                var _fold$i = fold[i],
                    foldArea = _fold$i.foldArea,
                    foldShow = _fold$i.foldShow;


                if (foldArea[1] && folderIndex === foldArea[1] || !foldArea[1] && folderIndex === total - 1) {
                    fold[i].foldShow = !foldShow;
                }
            }

            this.setState({ fold: fold, innerUpdate: true });
        }
    };

    Timeline.prototype.render = function render() {
        var _this2 = this,
            _classNames;

        var _props = this.props,
            prefix = _props.prefix,
            rtl = _props.rtl,
            className = _props.className,
            children = _props.children,
            locale = _props.locale,
            animation = _props.animation,
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'rtl', 'className', 'children', 'locale', 'animation']);
        var fold = this.state.fold;

        // 修改子节点属性

        var childrenCount = _react2.default.Children.count(children);
        var cloneChildren = _react.Children.map(children, function (child, i) {
            var folderIndex = null;
            var foldNodeShow = false;

            fold.forEach(function (item) {
                var foldArea = item.foldArea,
                    foldShow = item.foldShow;


                if (foldArea[0] && i >= foldArea[0] && (i <= foldArea[1] || !foldArea[1])) {
                    folderIndex = foldArea[1] || childrenCount - 1;
                    foldNodeShow = foldShow;
                }
            });

            return _react2.default.cloneElement(child, {
                prefix: prefix,
                locale: locale,
                total: childrenCount,
                index: i,
                folderIndex: folderIndex,
                foldShow: foldNodeShow,
                toggleFold: folderIndex === i ? _this2.toggleFold.bind(_this2, folderIndex, childrenCount) : function () {},
                animation: animation
            });
        });

        var timelineCls = (0, _classnames2.default)((_classNames = {}, _classNames[prefix + 'timeline'] = true, _classNames), className);

        if (rtl) {
            others.dir = 'rtl';
        }

        return _react2.default.createElement(
            'ul',
            (0, _extends3.default)({}, _util.obj.pickOthers(Timeline.propTypes, others), {
                className: timelineCls
            }),
            cloneChildren
        );
    };

    return Timeline;
}(_react.Component), _class.propTypes = (0, _extends3.default)({}, _configProvider2.default.propTypes, {
    /**
     * 样式的品牌前缀
     */
    prefix: _propTypes2.default.string,
    rtl: _propTypes2.default.bool,
    /**
     * 自定义折叠选项 示例`[{foldArea: [startIndex, endIndex], foldShow: boolean}]`
     */
    fold: _propTypes2.default.array,
    /**
     * 自定义类名
     */
    className: _propTypes2.default.string,
    children: _propTypes2.default.any,
    locale: _propTypes2.default.object,
    animation: _propTypes2.default.bool
}), _class.defaultProps = {
    prefix: 'next-',
    rtl: false,
    fold: [],
    locale: _zhCn2.default.Timeline,
    animation: true
}, _temp);
Timeline.displayName = 'Timeline';
exports.default = _configProvider2.default.config((0, _reactLifecyclesCompat.polyfill)(Timeline));
module.exports = exports['default'];