"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
/**
 * Grid.Row
 * @order 1
 */
var Row = /** @class */ (function (_super) {
    tslib_1.__extends(Row, _super);
    function Row() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Row.prototype.render = function () {
        var _a, _b, _c, _d;
        /* eslint-disable no-unused-vars */
        var _e = this.props, prefix = _e.prefix, pure = _e.pure, wrap = _e.wrap, fixed = _e.fixed, gutter = _e.gutter, fixedWidth = _e.fixedWidth, align = _e.align, justify = _e.justify, hidden = _e.hidden, className = _e.className, Tag = _e.component, children = _e.children, rtl = _e.rtl, others = tslib_1.__rest(_e, ["prefix", "pure", "wrap", "fixed", "gutter", "fixedWidth", "align", "justify", "hidden", "className", "component", "children", "rtl"]);
        /* eslint-enable no-unused-vars */
        var hiddenClassObj;
        if (hidden === true) {
            hiddenClassObj = (_a = {}, _a["".concat(prefix, "row-hidden")] = true, _a);
        }
        else if (typeof hidden === 'string') {
            hiddenClassObj = (_b = {}, _b["".concat(prefix, "row-").concat(hidden, "-hidden")] = !!hidden, _b);
        }
        else if (Array.isArray(hidden)) {
            hiddenClassObj = hidden.reduce(function (ret, point) {
                ret["".concat(prefix, "row-").concat(point, "-hidden")] = !!point;
                return ret;
            }, {});
        }
        var newClassName = (0, classnames_1.default)(tslib_1.__assign(tslib_1.__assign((_c = {}, _c["".concat(prefix, "row")] = true, _c["".concat(prefix, "row-wrap")] = wrap, _c["".concat(prefix, "row-fixed")] = fixed, _c["".concat(prefix, "row-fixed-").concat(fixedWidth)] = !!fixedWidth, _c["".concat(prefix, "row-justify-").concat(justify)] = !!justify, _c["".concat(prefix, "row-align-").concat(align)] = !!align, _c), hiddenClassObj), (_d = {}, _d[className] = !!className, _d)));
        var newChildren = children;
        var gutterNumber = parseInt(gutter, 10);
        if (gutterNumber !== 0) {
            var halfGutterString_1 = "".concat(gutterNumber / 2, "px");
            others.style = tslib_1.__assign({ marginLeft: "-".concat(halfGutterString_1), marginRight: "-".concat(halfGutterString_1) }, (others.style || {}));
            newChildren = react_1.Children.map(children, function (child) {
                if (child && child.type && typeof child.type === 'function' && child.type.isNextCol) {
                    var newChild = (0, react_1.cloneElement)(child, {
                        style: tslib_1.__assign({ paddingLeft: halfGutterString_1, paddingRight: halfGutterString_1 }, (child.style || {})),
                    });
                    return newChild;
                }
                return child;
            });
        }
        return (react_1.default.createElement(Tag, tslib_1.__assign({ dir: rtl ? 'rtl' : 'ltr', role: "row", className: newClassName }, others), newChildren));
    };
    Row.propTypes = {
        prefix: prop_types_1.default.string,
        pure: prop_types_1.default.bool,
        rtl: prop_types_1.default.bool,
        className: prop_types_1.default.string,
        style: prop_types_1.default.object,
        /**
         * 行内容
         */
        children: prop_types_1.default.node,
        /**
         * 列间隔
         */
        gutter: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
        /**
         * 列在行中宽度溢出后是否换行
         */
        wrap: prop_types_1.default.bool,
        /**
         * 行在某一断点下宽度是否保持不变（默认行宽度随视口变化而变化）
         */
        fixed: prop_types_1.default.bool,
        /**
         * 固定行的宽度为某一断点的宽度，不受视口影响而变动
         * @enumdesc 320px, 480px, 720px, 990px, 1200px, 1500px
         */
        fixedWidth: prop_types_1.default.oneOf(['xxs', 'xs', 's', 'm', 'l', 'xl']),
        /**
         * （不支持IE9浏览器）多列垂直方向对齐方式
         * @enumdesc 顶部对齐, 居中对齐, 底部对齐, 按第一行文字基线对齐, 未设置高度或设为 auto，将占满整个容器的高度
         */
        align: prop_types_1.default.oneOf(['top', 'center', 'bottom', 'baseline', 'stretch']),
        /**
         * （不支持IE9浏览器）行内具有多余空间时的布局方式
         * @enumdesc 左对齐, 居中对齐, 右对齐, 两端对齐，列之间间距相等, 每列具有相同的左右间距，行两端间距是列间距的二分之一
         */
        justify: prop_types_1.default.oneOf(['start', 'center', 'end', 'space-between', 'space-around']),
        /**
         * 行在不同断点下的显示与隐藏<br><br>**可选值**:<br>true(在所有断点下隐藏)<br>false(在所有断点下显示)<br>'xs'(在 xs 断点下隐藏）<br>['xxs', 'xs', 's', 'm', 'l', 'xl'](在 xxs, xs, s, m, l, xl 断点下隐藏）
         */
        hidden: prop_types_1.default.oneOfType([prop_types_1.default.bool, prop_types_1.default.string, prop_types_1.default.array]),
        /**
         * 指定以何种元素渲染该节点
         * - 默认为 'div'
         */
        component: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.func]),
    };
    Row.defaultProps = {
        prefix: 'next-',
        pure: false,
        fixed: false,
        gutter: 0,
        wrap: false,
        component: 'div',
    };
    return Row;
}(react_1.Component));
exports.default = Row;
