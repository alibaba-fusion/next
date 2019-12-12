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

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _animate = require('../animate');

var _animate2 = _interopRequireDefault(_animate);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * badge sup component
 */

// util::getDigitArray
var getDigitArray = function getDigitArray(num) {
    return num.toString().split('').reverse().map(function (i) {
        return parseInt(i, 10);
    });
};

var Sup = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Sup, _Component);

    // 单排可滚动的数字列表
    Sup.renderDigit = function renderDigit(prefix, digit, key) {
        var children = [];
        for (var i = 0; i < 30; i++) {
            children.push(_react2.default.createElement(
                'span',
                { key: i },
                i % 10
            ));
        }

        return _react2.default.createElement(
            'span',
            { className: prefix + 'badge-scroll-number-only', key: key },
            children
        );
    };

    // 可滚动数字组


    Sup.renderNumber = function renderNumber(prefix, count) {
        return getDigitArray(count).map(function (digit, i) {
            return Sup.renderDigit(prefix, digit, i);
        }).reverse();
    };

    function Sup(props) {
        (0, _classCallCheck3.default)(this, Sup);

        // render 时， 上一次的渲染数字 和 当前渲染的数字
        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

        _this.state = {
            lastCount: 0,
            currentCount: props.count
        };
        return _this;
    }

    Sup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
        if ('count' in nextProps) {
            return {
                lastCount: prevState.currentCount,
                currentCount: nextProps.count
            };
        }

        return null;
    };

    Sup.prototype.componentDidMount = function componentDidMount() {
        this.computeStyle(true);
    };

    Sup.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        var _this2 = this;

        if (prevProps.count !== this.props.count) {
            this.computeStyle(false);

            // NOTE why called `computeStyle` again after 300ms ?
            setTimeout(function () {
                _this2.computeStyle(true, true);
            }, 300);
        }
    };

    Sup.prototype.computeStyle = function computeStyle(removeTransition, revert) {
        var _this3 = this;

        var _props = this.props,
            prefix = _props.prefix,
            count = _props.count,
            overflowCount = _props.overflowCount;
        var lastCount = this.state.lastCount;


        if (count < 0) {
            return;
        }
        var supNode = this.refs.sup;

        if (supNode && _util.dom.hasClass(supNode, prefix + 'badge-count')) {
            var scrollNums = supNode.querySelectorAll('.' + prefix + 'badge-scroll-number-only');

            if (scrollNums.length) {
                var height = window.getComputedStyle(supNode).height;

                scrollNums = [].slice.call(scrollNums, 0).reverse();

                getDigitArray(count).forEach(function (digit, i) {
                    var position = _this3.getPositionByDigit(digit, i, revert);
                    var transformTo = -position * parseInt(height, 10);

                    removeTransition = removeTransition || typeof getDigitArray(lastCount)[i] === 'undefined' || lastCount > overflowCount || lastCount <= 0;

                    var scrollStyle = _util.support.animation ? {
                        transition: removeTransition ? 'none' : 'transform .3s cubic-bezier(.645, .045, .355, 1), -webkit-transform .3s cubic-bezier(.645, .045, .355, 1)',
                        WebkitTransform: 'translateY(' + transformTo + 'px)',
                        transform: 'translateY(' + transformTo + 'px)',
                        height: height,
                        lineHeight: height
                    } : {
                        top: transformTo + 'px',
                        height: height,
                        lineHeight: height
                    };

                    Object.keys(scrollStyle).forEach(function (key) {
                        scrollNums[i].style[key] = scrollStyle[key];
                    });
                });
            }
        }
    };

    Sup.prototype.getPositionByDigit = function getPositionByDigit(digit, i, revert) {
        var lastCount = this.state.lastCount;

        if (revert) {
            return 10 + digit;
        }
        var lastDigit = getDigitArray(lastCount)[i] || 0;

        if (this.props.count > lastCount) {
            return (digit >= lastDigit ? 10 : 20) + digit;
        }

        if (digit <= lastDigit) {
            return 10 + digit;
        }

        return digit;
    };

    Sup.prototype.render = function render() {
        var _classNames;

        var _props2 = this.props,
            prefix = _props2.prefix,
            count = _props2.count,
            showZero = _props2.showZero,
            overflowCount = _props2.overflowCount,
            dot = _props2.dot,
            style = _props2.style,
            content = _props2.content;


        var supClasses = (0, _classnames2.default)(prefix + 'badge-scroll-number', (_classNames = {}, _classNames[prefix + 'badge-count'] = !!count || count === 0 && showZero, _classNames[prefix + 'badge-dot'] = dot, _classNames[prefix + 'badge-custom'] = !!content, _classNames));

        var children = null;
        var show = dot || count > 0 || count === 0 && showZero || content;

        if (count > 0 || count === 0 && showZero) {
            var realCount = overflowCount > 0 && count > overflowCount ? overflowCount + '+' : count;

            children = isNaN(realCount) ? realCount : Sup.renderNumber(prefix, count);
        } else if (content) {
            children = content;
        }

        var animation = {
            appear: 'zoomIn',
            enter: 'zoomIn',
            leave: 'zoomOut'
        };

        var wrapper = _util.support.animation ? _react2.default.createElement(_animate2.default, { animation: animation }) : _react2.default.createElement('span', null);
        var element = show ? _react2.default.createElement(
            'sup',
            { ref: 'sup', className: supClasses, style: style },
            children
        ) : null;

        return _react2.default.cloneElement(wrapper, {}, element);
    };

    return Sup;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    count: _propTypes2.default.number,
    showZero: _propTypes2.default.bool,
    overflowCount: _propTypes2.default.number,
    content: _propTypes2.default.node,
    dot: _propTypes2.default.bool,
    style: _propTypes2.default.object
}, _class.defaultProps = {
    prefix: 'next-',
    count: 0,
    showZero: false,
    overflowCount: 99,
    dot: false
}, _temp);
Sup.displayName = 'Sup';
exports.default = (0, _reactLifecyclesCompat.polyfill)(Sup);
module.exports = exports['default'];