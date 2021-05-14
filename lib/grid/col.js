'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends4 = require('babel-runtime/helpers/extends');

var _extends5 = _interopRequireDefault(_extends4);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var breakPoints = ['xxs', 'xs', 's', 'm', 'l', 'xl'];

/**
 * Grid.Col
 * @order 2
 */
var Col = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Col, _Component);

    function Col() {
        (0, _classCallCheck3.default)(this, Col);
        return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
    }

    Col.prototype.render = function render() {
        var _this2 = this,
            _extends2,
            _extends3;

        /* eslint-disable no-unused-vars */
        var _props = this.props,
            prefix = _props.prefix,
            pure = _props.pure,
            span = _props.span,
            offset = _props.offset,
            fixedSpan = _props.fixedSpan,
            fixedOffset = _props.fixedOffset,
            hidden = _props.hidden,
            align = _props.align,
            xxs = _props.xxs,
            xs = _props.xs,
            s = _props.s,
            m = _props.m,
            l = _props.l,
            xl = _props.xl,
            Tag = _props.component,
            className = _props.className,
            children = _props.children,
            rtl = _props.rtl,
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'pure', 'span', 'offset', 'fixedSpan', 'fixedOffset', 'hidden', 'align', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'component', 'className', 'children', 'rtl']);
        /* eslint-enable no-unused-vars */

        var pointClassObj = breakPoints.reduce(function (ret, point) {
            var pointProps = {};
            if ((0, _typeof3.default)(_this2.props[point]) === 'object') {
                pointProps = _this2.props[point];
            } else {
                pointProps.span = _this2.props[point];
            }

            ret[prefix + 'col-' + point + '-' + pointProps.span] = !!pointProps.span;
            ret[prefix + 'col-' + point + '-offset-' + pointProps.offset] = !!pointProps.offset;

            return ret;
        }, {});

        var hiddenClassObj = void 0;
        if (hidden === true) {
            var _hiddenClassObj;

            hiddenClassObj = (_hiddenClassObj = {}, _hiddenClassObj[prefix + 'col-hidden'] = true, _hiddenClassObj);
        } else if (typeof hidden === 'string') {
            var _hiddenClassObj2;

            hiddenClassObj = (_hiddenClassObj2 = {}, _hiddenClassObj2[prefix + 'col-' + hidden + '-hidden'] = !!hidden, _hiddenClassObj2);
        } else if (Array.isArray(hidden)) {
            hiddenClassObj = hidden.reduce(function (ret, point) {
                ret[prefix + 'col-' + point + '-hidden'] = !!point;
                return ret;
            }, {});
        }

        var classes = (0, _classnames2.default)((0, _extends5.default)((_extends2 = {}, _extends2[prefix + 'col'] = true, _extends2[prefix + 'col-' + span] = !!span, _extends2[prefix + 'col-fixed-' + fixedSpan] = !!fixedSpan, _extends2[prefix + 'col-offset-' + offset] = !!offset, _extends2[prefix + 'col-offset-fixed-' + fixedOffset] = !!fixedOffset, _extends2[prefix + 'col-' + align] = !!align, _extends2), pointClassObj, hiddenClassObj, (_extends3 = {}, _extends3[className] = className, _extends3)));

        return _react2.default.createElement(
            Tag,
            (0, _extends5.default)({
                dir: rtl ? 'rtl' : 'ltr',
                role: 'gridcell',
                className: classes
            }, others),
            children
        );
    };

    return Col;
}(_react.Component), _class.isNextCol = true, _class.propTypes = {
    prefix: _propTypes2.default.string,
    pure: _propTypes2.default.bool,
    rtl: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    /**
     * 列内容
     */
    children: _propTypes2.default.node,
    /**
     * 列宽度<br><br>**可选值**:<br>1, 2, 3, ..., 22, 23, 24
     */
    span: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    /**
     * 固定列宽度，宽度值为20 * 栅格数<br><br>**可选值**:<br>1, 2, 3, ..., 28, 29, 30
     */
    fixedSpan: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    /**
     * （不支持IE9浏览器）列偏移<br><br>**可选值**:<br>1, 2, 3, ..., 22, 23, 24
     */
    offset: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    /**
     * （不支持IE9浏览器）固定列偏移，宽度值为20 * 栅格数<br><br>**可选值**:<br>1, 2, 3, ..., 28, 29, 30
     */
    fixedOffset: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    /**
     * （不支持IE9浏览器）多列垂直方向对齐方式，可覆盖Row的align属性
     */
    align: _propTypes2.default.oneOf(['top', 'center', 'bottom', 'baseline', 'stretch']),
    /**
     * 列在不同断点下的显示与隐藏<br><br>**可选值**:<br>true(在所有断点下隐藏)<br>false(在所有断点下显示)<br>'xs'(在 xs 断点下隐藏）<br>['xxs', 'xs', 's', 'm', 'l', 'xl'](在 xxs, xs, s, m, l, xl 断点下隐藏）
     */
    hidden: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string, _propTypes2.default.array]),
    /**
     * >=320px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象
     */
    xxs: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.object]),
    /**
     * >=480px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象
     */
    xs: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.object]),
    /**
     * >=720px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象
     */
    s: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.object]),
    /**
     * >=990px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象
     */
    m: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.object]),
    /**
     * >=1200px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象
     */
    l: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.object]),
    /**
     * >=1500px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象
     */
    xl: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.object]),
    /**
     * 指定以何种元素渲染该节点，默认为 'div'
     */
    component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func])
}, _class.defaultProps = {
    prefix: 'next-',
    pure: false,
    component: 'div'
}, _temp);
Col.displayName = 'Col';
exports.default = Col;
module.exports = exports['default'];