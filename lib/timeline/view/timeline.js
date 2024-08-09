"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var util_1 = require("../../util");
var config_provider_1 = tslib_1.__importDefault(require("../../config-provider"));
var zh_cn_1 = tslib_1.__importDefault(require("../../locale/zh-cn"));
/** Timeline */
var Timeline = /** @class */ (function (_super) {
    tslib_1.__extends(Timeline, _super);
    function Timeline(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            fold: props.fold,
        };
        return _this;
    }
    Timeline.getDerivedStateFromProps = function (nextProps, prevState) {
        var innerUpdate = prevState.innerUpdate, fold = prevState.fold;
        if (innerUpdate) {
            return {
                fold: fold,
                innerUpdate: false,
            };
        }
        if ('fold' in nextProps) {
            return {
                fold: nextProps.fold,
            };
        }
        return null;
    };
    Timeline.prototype.toggleFold = function (folderIndex, total) {
        var fold = this.state.fold.map(function (item) { return (tslib_1.__assign({}, item)); });
        if (folderIndex) {
            for (var i = 0; i < fold.length; i++) {
                var _a = fold[i], foldArea = _a.foldArea, foldShow = _a.foldShow;
                if ((foldArea[1] && folderIndex === foldArea[1]) ||
                    (!foldArea[1] && folderIndex === total - 1)) {
                    fold[i].foldShow = !foldShow;
                }
            }
            this.setState({ fold: fold, innerUpdate: true });
        }
    };
    Timeline.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this.props, prefix = _b.prefix, rtl = _b.rtl, className = _b.className, children = _b.children, locale = _b.locale, animation = _b.animation, mode = _b.mode, others = tslib_1.__rest(_b, ["prefix", "rtl", "className", "children", "locale", "animation", "mode"]);
        var fold = this.state.fold;
        // 修改子节点属性
        var childrenCount = react_1.default.Children.count(children);
        var isAlternateMode = mode === 'alternate';
        var getPositionCls = function (idx) {
            if (isAlternateMode) {
                return idx % 2 === 0
                    ? "".concat(prefix, "timeline-item-left")
                    : "".concat(prefix, "timeline-item-right");
            }
            return "".concat(prefix, "timeline-item-left");
        };
        var cloneChildren = react_1.Children.map(children, function (child, i) {
            var folderIndex = null;
            var foldNodeShow = false;
            fold.forEach(function (item) {
                var foldArea = item.foldArea, foldShow = item.foldShow;
                if (foldArea[0] && i >= foldArea[0] && (i <= foldArea[1] || !foldArea[1])) {
                    folderIndex = foldArea[1] || childrenCount - 1;
                    foldNodeShow = foldShow;
                }
            });
            return react_1.default.cloneElement(child, {
                prefix: prefix,
                locale: locale,
                total: childrenCount,
                className: getPositionCls(i),
                index: i,
                folderIndex: folderIndex,
                foldShow: foldNodeShow,
                toggleFold: folderIndex === i
                    ? _this.toggleFold.bind(_this, folderIndex, childrenCount)
                    : function () { },
                animation: animation,
            });
        });
        var timelineCls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "timeline")] = true,
            _a["".concat(prefix, "alternate")] = isAlternateMode,
            _a), className);
        if (rtl) {
            others.dir = 'rtl';
        }
        return (react_1.default.createElement("ul", tslib_1.__assign({}, util_1.obj.pickOthers(Timeline.propTypes, others), { className: timelineCls }), cloneChildren));
    };
    Timeline.displayName = 'Timeline';
    Timeline.propTypes = tslib_1.__assign(tslib_1.__assign({}, config_provider_1.default.propTypes), { prefix: prop_types_1.default.string, rtl: prop_types_1.default.bool, fold: prop_types_1.default.array, className: prop_types_1.default.string, children: prop_types_1.default.any, locale: prop_types_1.default.object, animation: prop_types_1.default.bool, mode: prop_types_1.default.oneOf(['left', 'alternate']) });
    Timeline.defaultProps = {
        prefix: 'next-',
        rtl: false,
        fold: [],
        locale: zh_cn_1.default.Timeline,
        animation: true,
        mode: 'left',
    };
    return Timeline;
}(react_1.Component));
exports.default = config_provider_1.default.config((0, react_lifecycles_compat_1.polyfill)(Timeline));
