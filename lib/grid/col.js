"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var util_1 = require("../util");
var breakPoints = ['xxs', 'xs', 's', 'm', 'l', 'xl'];
/**
 * Grid.Col
 * @order 2
 */
var Col = /** @class */ (function (_super) {
    tslib_1.__extends(Col, _super);
    function Col() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Col.prototype.render = function () {
        var _a, _b, _c, _d;
        var _this = this;
        var _e = this.props, prefix = _e.prefix, pure = _e.pure, span = _e.span, offset = _e.offset, fixedSpan = _e.fixedSpan, fixedOffset = _e.fixedOffset, hidden = _e.hidden, align = _e.align, xxs = _e.xxs, xs = _e.xs, s = _e.s, m = _e.m, l = _e.l, xl = _e.xl, component = _e.component, className = _e.className, children = _e.children, rtl = _e.rtl, others = tslib_1.__rest(_e, ["prefix", "pure", "span", "offset", "fixedSpan", "fixedOffset", "hidden", "align", "xxs", "xs", "s", "m", "l", "xl", "component", "className", "children", "rtl"]);
        var domOtherProps = util_1.obj.pickOthers(Col.propTypes, others);
        var Tag = component;
        var pointClassObj = breakPoints.reduce(function (ret, point) {
            var pointProps = {};
            var pointValue = _this.props[point];
            if (typeof pointValue === 'object' && pointValue !== null) {
                pointProps = pointValue;
            }
            else {
                pointProps.span = pointValue;
            }
            ret["".concat(prefix, "col-").concat(point, "-").concat(pointProps.span)] = !!pointProps.span;
            ret["".concat(prefix, "col-").concat(point, "-offset-").concat(pointProps.offset)] = !!pointProps.offset;
            return ret;
        }, {});
        var hiddenClassObj = {};
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
        var classes = (0, classnames_1.default)(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign((_c = {}, _c["".concat(prefix, "col")] = true, _c["".concat(prefix, "col-").concat(span)] = !!span, _c["".concat(prefix, "col-fixed-").concat(fixedSpan)] = !!fixedSpan, _c["".concat(prefix, "col-offset-").concat(offset)] = !!offset, _c["".concat(prefix, "col-offset-fixed-").concat(fixedOffset)] = !!fixedOffset, _c["".concat(prefix, "col-").concat(align)] = !!align, _c), pointClassObj), hiddenClassObj), (_d = {}, _d[className] = !!className, _d)));
        return (react_1.default.createElement(Tag, tslib_1.__assign({ dir: rtl ? 'rtl' : 'ltr', role: "gridcell", className: classes }, domOtherProps), children));
    };
    Col.isNextCol = true;
    Col.propTypes = tslib_1.__assign(tslib_1.__assign({}, config_provider_1.default.propTypes), { prefix: prop_types_1.default.string, pure: prop_types_1.default.bool, rtl: prop_types_1.default.bool, className: prop_types_1.default.string, 
        /**
         * 列内容
         */
        children: prop_types_1.default.node, 
        /**
         * 列宽度<br><br>**可选值**:<br>1, 2, 3, ..., 22, 23, 24
         */
        span: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]), 
        /**
         * 固定列宽度，宽度值为20 * 栅格数<br><br>**可选值**:<br>1, 2, 3, ..., 28, 29, 30
         */
        fixedSpan: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]), 
        /**
         * （不支持IE9浏览器）列偏移<br><br>**可选值**:<br>1, 2, 3, ..., 22, 23, 24
         */
        offset: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]), 
        /**
         * （不支持IE9浏览器）固定列偏移，宽度值为20 * 栅格数<br><br>**可选值**:<br>1, 2, 3, ..., 28, 29, 30
         */
        fixedOffset: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]), 
        /**
         * （不支持IE9浏览器）多列垂直方向对齐方式，可覆盖Row的align属性
         */
        align: prop_types_1.default.oneOf(['top', 'center', 'bottom', 'baseline', 'stretch']), 
        /**
         * 列在不同断点下的显示与隐藏<br><br>**可选值**:<br>true(在所有断点下隐藏)<br>false(在所有断点下显示)<br>'xs'(在 xs 断点下隐藏）<br>['xxs', 'xs', 's', 'm', 'l', 'xl'](在 xxs, xs, s, m, l, xl 断点下隐藏）
         */
        hidden: prop_types_1.default.oneOfType([prop_types_1.default.bool, prop_types_1.default.string, prop_types_1.default.array]), xxs: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number, prop_types_1.default.object]), xs: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number, prop_types_1.default.object]), s: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number, prop_types_1.default.object]), m: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number, prop_types_1.default.object]), l: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number, prop_types_1.default.object]), xl: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number, prop_types_1.default.object]), component: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.func]) });
    Col.defaultProps = {
        prefix: 'next-',
        pure: false,
        component: 'div',
    };
    return Col;
}(react_1.Component));
exports.default = Col;
