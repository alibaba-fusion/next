"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var util_1 = require("../util");
var sup_1 = tslib_1.__importDefault(require("./sup"));
/**
 * Badge
 */
var Badge = /** @class */ (function (_super) {
    tslib_1.__extends(Badge, _super);
    function Badge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Badge.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, dot = _b.dot, className = _b.className, children = _b.children, content = _b.content, style = _b.style, rtl = _b.rtl, originCount = _b.count, showZero = _b.showZero, originOverflowCount = _b.overflowCount;
        var count = parseInt(originCount, 10);
        var overflowCount = parseInt(originOverflowCount, 10);
        var others = util_1.obj.pickOthers(Badge.propTypes, this.props);
        // 如果是数字，则添加默认的 title
        if (count || (count === 0 && showZero)) {
            others.title = others.title || "".concat(count);
        }
        var classes = (0, classnames_1.default)("".concat(prefix, "badge"), (_a = {},
            _a["".concat(prefix, "badge-not-a-wrapper")] = !children,
            _a), className);
        return (react_1.default.createElement("span", tslib_1.__assign({ dir: rtl ? 'rtl' : undefined, className: classes }, others),
            children,
            react_1.default.createElement(sup_1.default, { prefix: prefix, content: content, count: count, showZero: showZero, overflowCount: overflowCount, dot: dot, style: style })));
    };
    Badge.propTypes = {
        // 样式类名的品牌前缀
        prefix: prop_types_1.default.string,
        rtl: prop_types_1.default.bool,
        // 自定义类名
        className: prop_types_1.default.string,
        // 自定义内联样式
        style: prop_types_1.default.object,
        /**
         * 徽标依托的内容，一般显示在其右上方
         */
        children: prop_types_1.default.node,
        /**
         * 展示的数字，大于 `overflowCount` 时显示为 `${overflowCount}+`，为 `0` 时默认隐藏
         */
        count: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.string]),
        /**
         * 当`count`为`0`时，是否显示 count
         * @version 1.16
         */
        showZero: prop_types_1.default.bool,
        /**
         * 自定义徽标中的内容
         */
        content: prop_types_1.default.node,
        /**
         * 展示的封顶的数字
         */
        overflowCount: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.string]),
        /**
         * 不展示数字，只展示一个小红点
         */
        dot: prop_types_1.default.bool,
    };
    Badge.defaultProps = {
        prefix: 'next-',
        count: 0,
        showZero: false,
        overflowCount: 99,
        dot: false,
    };
    return Badge;
}(react_1.Component));
exports.default = config_provider_1.default.config(Badge);
