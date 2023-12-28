import { __assign, __extends, __rest } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
var breakPoints = ['xxs', 'xs', 's', 'm', 'l', 'xl'];
/**
 * Grid.Col
 * @order 2
 */
var Col = /** @class */ (function (_super) {
    __extends(Col, _super);
    function Col() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Col.prototype.render = function () {
        var _a, _b, _c, _d;
        var _this = this;
        /* eslint-disable no-unused-vars */
        var _e = this.props, prefix = _e.prefix, pure = _e.pure, span = _e.span, offset = _e.offset, fixedSpan = _e.fixedSpan, fixedOffset = _e.fixedOffset, hidden = _e.hidden, align = _e.align, xxs = _e.xxs, xs = _e.xs, s = _e.s, m = _e.m, l = _e.l, xl = _e.xl, Tag = _e.component, className = _e.className, children = _e.children, rtl = _e.rtl, others = __rest(_e, ["prefix", "pure", "span", "offset", "fixedSpan", "fixedOffset", "hidden", "align", "xxs", "xs", "s", "m", "l", "xl", "component", "className", "children", "rtl"]);
        /* eslint-enable no-unused-vars */
        var pointClassObj = breakPoints.reduce(function (ret, point) {
            var pointProps = {};
            if (typeof _this.props[point] === 'object') {
                pointProps = _this.props[point];
            }
            else {
                pointProps.span = _this.props[point];
            }
            ret["".concat(prefix, "col-").concat(point, "-").concat(pointProps.span)] = !!pointProps.span;
            ret["".concat(prefix, "col-").concat(point, "-offset-").concat(pointProps.offset)] = !!pointProps.offset;
            return ret;
        }, {});
        var hiddenClassObj;
        if (hidden === true) {
            hiddenClassObj = (_a = {}, _a["".concat(prefix, "col-hidden")] = true, _a);
        }
        else if (typeof hidden === 'string') {
            hiddenClassObj = (_b = {}, _b["".concat(prefix, "col-").concat(hidden, "-hidden")] = !!hidden, _b);
        }
        else if (Array.isArray(hidden)) {
            hiddenClassObj = hidden.reduce(function (ret, point) {
                ret["".concat(prefix, "col-").concat(point, "-hidden")] = !!point;
                return ret;
            }, {});
        }
        var classes = cx(__assign(__assign(__assign((_c = {}, _c["".concat(prefix, "col")] = true, _c["".concat(prefix, "col-").concat(span)] = !!span, _c["".concat(prefix, "col-fixed-").concat(fixedSpan)] = !!fixedSpan, _c["".concat(prefix, "col-offset-").concat(offset)] = !!offset, _c["".concat(prefix, "col-offset-fixed-").concat(fixedOffset)] = !!fixedOffset, _c["".concat(prefix, "col-").concat(align)] = !!align, _c), pointClassObj), hiddenClassObj), (_d = {}, _d[className] = className, _d)));
        return (React.createElement(Tag, __assign({ dir: rtl ? 'rtl' : 'ltr', role: "gridcell", className: classes }, others), children));
    };
    Col.isNextCol = true;
    Col.propTypes = {
        prefix: PropTypes.string,
        pure: PropTypes.bool,
        rtl: PropTypes.bool,
        className: PropTypes.string,
        /**
         * 列内容
         */
        children: PropTypes.node,
        /**
         * 列宽度<br><br>**可选值**:<br>1, 2, 3, ..., 22, 23, 24
         */
        span: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        /**
         * 固定列宽度，宽度值为20 * 栅格数<br><br>**可选值**:<br>1, 2, 3, ..., 28, 29, 30
         */
        fixedSpan: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        /**
         * （不支持IE9浏览器）列偏移<br><br>**可选值**:<br>1, 2, 3, ..., 22, 23, 24
         */
        offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        /**
         * （不支持IE9浏览器）固定列偏移，宽度值为20 * 栅格数<br><br>**可选值**:<br>1, 2, 3, ..., 28, 29, 30
         */
        fixedOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        /**
         * （不支持IE9浏览器）多列垂直方向对齐方式，可覆盖Row的align属性
         */
        align: PropTypes.oneOf(['top', 'center', 'bottom', 'baseline', 'stretch']),
        /**
         * 列在不同断点下的显示与隐藏<br><br>**可选值**:<br>true(在所有断点下隐藏)<br>false(在所有断点下显示)<br>'xs'(在 xs 断点下隐藏）<br>['xxs', 'xs', 's', 'm', 'l', 'xl'](在 xxs, xs, s, m, l, xl 断点下隐藏）
         */
        hidden: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.array]),
        /**
         * >=320px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象
         */
        xxs: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
        /**
         * >=480px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象
         */
        xs: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
        /**
         * >=720px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象
         */
        s: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
        /**
         * >=990px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象
         */
        m: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
        /**
         * >=1200px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象
         */
        l: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
        /**
         * >=1500px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象
         */
        xl: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
        /**
         * 指定以何种元素渲染该节点，默认为 'div'
         */
        component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    };
    Col.defaultProps = {
        prefix: 'next-',
        pure: false,
        component: 'div',
    };
    return Col;
}(Component));
export default Col;
