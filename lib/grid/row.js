'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends4 = require('babel-runtime/helpers/extends');

var _extends5 = _interopRequireDefault(_extends4);

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

/**
 * Grid.Row
 * @order 1
 */
var Row = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Row, _Component);

    function Row() {
        (0, _classCallCheck3.default)(this, Row);
        return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
    }

    Row.prototype.render = function render() {
        var _extends2, _extends3;

        /* eslint-disable no-unused-vars */
        var _props = this.props,
            prefix = _props.prefix,
            pure = _props.pure,
            wrap = _props.wrap,
            fixed = _props.fixed,
            gutter = _props.gutter,
            fixedWidth = _props.fixedWidth,
            align = _props.align,
            justify = _props.justify,
            hidden = _props.hidden,
            className = _props.className,
            Tag = _props.component,
            children = _props.children,
            rtl = _props.rtl,
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'pure', 'wrap', 'fixed', 'gutter', 'fixedWidth', 'align', 'justify', 'hidden', 'className', 'component', 'children', 'rtl']);
        /* eslint-enable no-unused-vars */

        var hiddenClassObj = void 0;
        if (hidden === true) {
            var _hiddenClassObj;

            hiddenClassObj = (_hiddenClassObj = {}, _hiddenClassObj[prefix + 'row-hidden'] = true, _hiddenClassObj);
        } else if (typeof hidden === 'string') {
            var _hiddenClassObj2;

            hiddenClassObj = (_hiddenClassObj2 = {}, _hiddenClassObj2[prefix + 'row-' + hidden + '-hidden'] = !!hidden, _hiddenClassObj2);
        } else if (Array.isArray(hidden)) {
            hiddenClassObj = hidden.reduce(function (ret, point) {
                ret[prefix + 'row-' + point + '-hidden'] = !!point;
                return ret;
            }, {});
        }

        var newClassName = (0, _classnames2.default)((0, _extends5.default)((_extends2 = {}, _extends2[prefix + 'row'] = true, _extends2[prefix + 'row-wrap'] = wrap, _extends2[prefix + 'row-fixed'] = fixed, _extends2[prefix + 'row-fixed-' + fixedWidth] = !!fixedWidth, _extends2[prefix + 'row-justify-' + justify] = !!justify, _extends2[prefix + 'row-align-' + align] = !!align, _extends2), hiddenClassObj, (_extends3 = {}, _extends3[className] = !!className, _extends3)));

        var newChildren = children;
        var gutterNumber = parseInt(gutter, 10);
        if (gutterNumber !== 0) {
            var halfGutterString = gutterNumber / 2 + 'px';
            others.style = (0, _extends5.default)({
                marginLeft: '-' + halfGutterString,
                marginRight: '-' + halfGutterString
            }, others.style || {});
            newChildren = _react.Children.map(children, function (child) {
                if (child && child.type && typeof child.type === 'function' && child.type.isNextCol) {
                    var newChild = (0, _react.cloneElement)(child, {
                        style: (0, _extends5.default)({
                            paddingLeft: halfGutterString,
                            paddingRight: halfGutterString
                        }, child.style || {})
                    });
                    return newChild;
                }

                return child;
            });
        }

        return _react2.default.createElement(
            Tag,
            (0, _extends5.default)({
                dir: rtl ? 'rtl' : 'ltr',
                role: 'row',
                className: newClassName
            }, others),
            newChildren
        );
    };

    return Row;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    pure: _propTypes2.default.bool,
    rtl: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object,
    /**
     * 行内容
     */
    children: _propTypes2.default.node,
    /**
     * 列间隔
     */
    gutter: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    /**
     * 列在行中宽度溢出后是否换行
     */
    wrap: _propTypes2.default.bool,
    /**
     * 行在某一断点下宽度是否保持不变（默认行宽度随视口变化而变化）
     */
    fixed: _propTypes2.default.bool,
    /**
     * 固定行的宽度为某一断点的宽度，不受视口影响而变动
     * @enumdesc 320px, 480px, 720px, 990px, 1200px, 1500px
     */
    fixedWidth: _propTypes2.default.oneOf(['xxs', 'xs', 's', 'm', 'l', 'xl']),
    /**
     * （不支持IE9浏览器）多列垂直方向对齐方式
     * @enumdesc 顶部对齐, 居中对齐, 底部对齐, 按第一行文字基线对齐, 未设置高度或设为 auto，将占满整个容器的高度
     */
    align: _propTypes2.default.oneOf(['top', 'center', 'bottom', 'baseline', 'stretch']),
    /**
     * （不支持IE9浏览器）行内具有多余空间时的布局方式
     * @enumdesc 左对齐, 居中对齐, 右对齐, 两端对齐，列之间间距相等, 每列具有相同的左右间距，行两端间距是列间距的二分之一
     */
    justify: _propTypes2.default.oneOf(['start', 'center', 'end', 'space-between', 'space-around']),
    /**
     * 行在不同断点下的显示与隐藏<br><br>**可选值**:<br>true(在所有断点下隐藏)<br>false(在所有断点下显示)<br>'xs'(在 xs 断点下隐藏）<br>['xxs', 'xs', 's', 'm', 'l', 'xl'](在 xxs, xs, s, m, l, xl 断点下隐藏）
     */
    hidden: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string, _propTypes2.default.array]),
    /**
     * 指定以何种元素渲染该节点
     * - 默认为 'div'
     */
    component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func])
}, _class.defaultProps = {
    prefix: 'next-',
    pure: false,
    fixed: false,
    gutter: 0,
    wrap: false,
    component: 'div'
}, _temp);
Row.displayName = 'Row';
exports.default = Row;
module.exports = exports['default'];