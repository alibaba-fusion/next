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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _util = require('../../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getHeight = function getHeight(el) {
    return _util.dom.getStyle(el, 'height');
};
var setHeight = function setHeight(el, height) {
    return _util.dom.setStyle(el, 'height', height);
};

/** Step */
var Step = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Step, _Component);

    Step.getDerivedStateFromProps = function getDerivedStateFromProps(newProps) {
        if ('current' in newProps) {
            return {
                current: newProps.current
            };
        }
    };

    function Step(props, context) {
        (0, _classCallCheck3.default)(this, Step);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props, context));

        _this._stepRefHandler = function (ref) {
            _this.step = ref;
        };

        _this.state = {
            parentWidth: 'auto',
            parentHeight: 'auto',
            currentfocus: 0
        };
        _this.resize = _this.resize.bind(_this);
        return _this;
    }

    Step.prototype.componentDidMount = function componentDidMount() {
        /* istanbul ignore if */
        if (!_util.support.flex) {
            this.resize();
            _util.events.on(window, 'resize', this.resize);
        }
        this.adjustHeight();
    };

    Step.prototype.componentDidUpdate = function componentDidUpdate() {
        this.adjustHeight();
    };

    Step.prototype.componentWillUnmount = function componentWillUnmount() {
        /* istanbul ignore if */
        if (!_util.support.flex) {
            _util.events.off(window, 'resize', this.resize);
        }
    };

    Step.prototype.adjustHeight = function adjustHeight() {
        var _props = this.props,
            shape = _props.shape,
            direction = _props.direction,
            prefix = _props.prefix,
            labelPlacement = _props.labelPlacement;

        if (shape !== 'arrow' && (direction === 'horizontal' || direction === 'hoz') && (labelPlacement === 'vertical' || labelPlacement === 'ver')) {
            var step = _reactDom2.default.findDOMNode(this.step);
            var height = Array.prototype.slice.call(step.getElementsByClassName(prefix + 'step-item')).reduce(function (ret, re) {
                var itemHeight = getHeight(re.getElementsByClassName(prefix + 'step-item-container')[0]) + getHeight(re.getElementsByClassName(prefix + 'step-item-body')[0]);
                return Math.max(itemHeight, ret);
            }, 0);
            setHeight(step, height);
        }
    };

    Step.prototype.resize = function resize() {
        if (this.step) {
            this.setState({
                parentWidth: this.step.offsetWidth || 0,
                parentHeight: this.step.offsetHeight || 0
            });
        }
    };

    // set dir key for aria handle
    // handleKeyDown = e => {
    //     const { shape, children } = this.props;
    //     const { length: max } = children;
    //     let { currentfocus } = this.state;
    //     const initPosition = currentfocus;
    //     switch (e.keyCode) {
    //         case KEYCODE.RIGHT:
    //         case KEYCODE.DOWN:
    //             currentfocus++;
    //             break;
    //         case KEYCODE.LEFT:
    //         case KEYCODE.UP:
    //             currentfocus--;
    //             break;
    //         default:
    //             break;
    //     }
    //     currentfocus =
    //         currentfocus >= max ? 0 : currentfocus < 0 ? max - 1 : currentfocus;
    //     this.setState({ currentfocus }, () => {
    //         const child = this.step.children[currentfocus];
    //         if (!child) return;
    //         const focusItem =
    //             shape === 'arrow'
    //                 ? child
    //                 : child.querySelector('.next-step-item-body');
    //         focusItem && focusItem.focus();
    //     });
    //     if (initPosition !== currentfocus) {
    //         e.preventDefault();
    //     }
    // };

    Step.prototype._getValidChildren = function _getValidChildren(children) {
        var result = [];
        _react2.default.Children.forEach(children, function (child) {
            if (_react2.default.isValidElement(child)) {
                result.push(child);
            }
        });
        return result;
    };

    Step.prototype.render = function render() {
        var _classNames;

        // eslint-disable-next-line
        var _props2 = this.props,
            className = _props2.className,
            current = _props2.current,
            labelPlacement = _props2.labelPlacement,
            shape = _props2.shape,
            readOnly = _props2.readOnly,
            animation = _props2.animation,
            itemRender = _props2.itemRender,
            rtl = _props2.rtl,
            others = (0, _objectWithoutProperties3.default)(_props2, ['className', 'current', 'labelPlacement', 'shape', 'readOnly', 'animation', 'itemRender', 'rtl']);
        var _props3 = this.props,
            prefix = _props3.prefix,
            direction = _props3.direction,
            children = _props3.children;

        prefix = this.context.prefix || prefix;
        var _state = this.state,
            parentWidth = _state.parentWidth,
            parentHeight = _state.parentHeight;

        // type不同对应的direction不同

        direction = shape === 'arrow' ? 'hoz' : direction;

        // children去除null
        children = this._getValidChildren(children);

        // 修改子节点属性
        var cloneChildren = _react.Children.map(children, function (child, index) {
            var status = index < current ? 'finish' : index === current ? 'process' : 'wait';

            return _react2.default.cloneElement(child, {
                prefix: prefix,
                key: index,
                index: index,
                total: children.length,
                status: child.props.status || status,
                shape: shape,
                direction: direction,
                labelPlacement: labelPlacement,
                parentWidth: parentWidth,
                parentHeight: parentHeight,
                readOnly: readOnly,
                animation: animation,
                tabIndex: 0,
                // tabIndex: this.state.currentfocus === index ? '0' : '-1',
                'aria-current': status === 'process' ? 'step' : null,
                itemRender: child.props.itemRender ? child.props.itemRender : itemRender // 优先使用Item的itemRender
            });
        });

        var _direction = direction === 'ver' || direction === 'vertical' ? 'vertical' : 'horizontal';
        var _labelPlacement = labelPlacement === 'ver' || labelPlacement === 'vertical' ? 'vertical' : 'horizontal';
        var stepCls = (0, _classnames2.default)((_classNames = {}, _classNames[prefix + 'step'] = true, _classNames[prefix + 'step-' + shape] = shape, _classNames[prefix + 'step-' + _direction] = _direction, _classNames[prefix + 'step-label-' + _labelPlacement] = _labelPlacement, _classNames[className] = className, _classNames));

        if (rtl) {
            others.dir = 'rtl';
        }

        // others.onKeyDown = makeChain(this.handleKeyDown, others.onKeyDown);

        return _react2.default.createElement(
            'ol',
            (0, _extends3.default)({}, others, { className: stepCls, ref: this._stepRefHandler }),
            cloneChildren
        );
    };

    return Step;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    rtl: _propTypes2.default.bool,
    /**
     * 当前步骤
     */
    current: _propTypes2.default.number,
    /**
     * 展示方向
     */
    direction: _propTypes2.default.oneOf(['hoz', 'ver']),
    /**
     * 横向布局时( direction 为 hoz )的内容排列
     */
    labelPlacement: _propTypes2.default.oneOf(['hoz', 'ver']),
    /**
     * 类型
     */
    shape: _propTypes2.default.oneOf(['circle', 'arrow', 'dot']),
    /**
     * 是否只读模式
     */
    readOnly: _propTypes2.default.bool,
    /**
     * 是否开启动效
     */
    animation: _propTypes2.default.bool,
    /**
     * 自定义样式名
     */
    className: _propTypes2.default.string,
    /**
     * StepItem 的自定义渲染
     * @param {Number} index   节点索引
     * @param {String} status  节点状态
     * @returns {Node} 节点的渲染结果
     */
    itemRender: _propTypes2.default.func
}, _class.defaultProps = {
    prefix: 'next-',
    current: 0,
    direction: 'hoz',
    labelPlacement: 'ver',
    shape: 'circle',
    animation: true,
    itemRender: null
}, _class.contextTypes = {
    prefix: _propTypes2.default.string
}, _temp);
Step.displayName = 'Step';
exports.default = (0, _reactLifecyclesCompat.polyfill)(Step);
module.exports = exports['default'];