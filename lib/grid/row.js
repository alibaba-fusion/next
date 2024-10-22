"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var util_1 = require("../util");
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
        var _e = this.props, prefix = _e.prefix, pure = _e.pure, wrap = _e.wrap, fixed = _e.fixed, gutter = _e.gutter, fixedWidth = _e.fixedWidth, align = _e.align, justify = _e.justify, hidden = _e.hidden, className = _e.className, style = _e.style, component = _e.component, children = _e.children, rtl = _e.rtl, others = tslib_1.__rest(_e, ["prefix", "pure", "wrap", "fixed", "gutter", "fixedWidth", "align", "justify", "hidden", "className", "style", "component", "children", "rtl"]);
        var domOtherProps = util_1.obj.pickOthers(Row.propTypes, others);
        var Tag = component;
        var hiddenClassObj = {};
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
        var newStyle = style;
        var gutterNumber = parseInt(gutter.toString(), 10);
        if (gutterNumber !== 0) {
            var halfGutterString_1 = "".concat(gutterNumber / 2, "px");
            newStyle = tslib_1.__assign({ marginLeft: "-".concat(halfGutterString_1), marginRight: "-".concat(halfGutterString_1) }, newStyle);
            newChildren = react_1.Children.map(children, function (child) {
                if (child &&
                    child.type &&
                    typeof child.type === 'function' &&
                    child.type.isNextCol) {
                    var newChild = (0, react_1.cloneElement)(child, {
                        style: tslib_1.__assign({ paddingLeft: halfGutterString_1, paddingRight: halfGutterString_1 }, (child.props.style || {})),
                    });
                    return newChild;
                }
                return child;
            });
        }
        return (react_1.default.createElement(Tag, tslib_1.__assign({ dir: rtl ? 'rtl' : 'ltr', role: "row", className: newClassName, style: newStyle }, domOtherProps), newChildren));
    };
    Row.propTypes = tslib_1.__assign(tslib_1.__assign({}, config_provider_1.default.propTypes), { prefix: prop_types_1.default.string, pure: prop_types_1.default.bool, rtl: prop_types_1.default.bool, className: prop_types_1.default.string, style: prop_types_1.default.object, 
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
        fixed: prop_types_1.default.bool, fixedWidth: prop_types_1.default.oneOf(['xxs', 'xs', 's', 'm', 'l', 'xl']), align: prop_types_1.default.oneOf(['top', 'center', 'bottom', 'baseline', 'stretch']), justify: prop_types_1.default.oneOf(['start', 'center', 'end', 'space-between', 'space-around']), hidden: prop_types_1.default.oneOfType([prop_types_1.default.bool, prop_types_1.default.string, prop_types_1.default.array]), component: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.func]) });
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
