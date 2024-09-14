"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var utils_1 = require("../utils");
function scrollTo(element, to, duration) {
    var requestAnimationFrame = window.requestAnimationFrame ||
        function requestAnimationFrameTimeout() {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            return setTimeout(params[0], 10);
        };
    if (duration <= 0) {
        element.scrollTop = to;
        return;
    }
    var difference = to - element.scrollTop;
    var perTick = (difference / duration) * 10;
    requestAnimationFrame(function () {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) {
            return;
        }
        scrollTo(element, to, duration - 10);
    });
}
var noop = function () { };
var TimeMenu = /** @class */ (function (_super) {
    tslib_1.__extends(TimeMenu, _super);
    function TimeMenu() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this._menuRefHandler = function (ref) {
            _this.menu = ref;
        };
        _this.createMenuItems = function (list) {
            var _a = _this.props, prefix = _a.prefix, mode = _a.mode, disabled = _a.disabled, disabledItems = _a.disabledItems, activeIndex = _a.activeIndex, onSelect = _a.onSelect, renderTimeMenuItems = _a.renderTimeMenuItems, timeValue = _a.value;
            list = renderTimeMenuItems(list, mode, timeValue) || list;
            return list.map(function (_a) {
                var _b;
                var label = _a.label, value = _a.value;
                var isDisabled = disabled || disabledItems(value);
                var itemCls = (0, classnames_1.default)((_b = {},
                    _b["".concat(prefix, "time-picker-menu-item")] = true,
                    _b["".concat(prefix, "disabled")] = isDisabled,
                    _b["".concat(prefix, "selected")] = value === activeIndex,
                    _b));
                var onClick = isDisabled ? noop : function () { return onSelect(value, mode); };
                return (react_1.default.createElement("li", { role: "option", "aria-selected": String(value === activeIndex), key: value, 
                    /* @ts-expect-error value 应转为 string */
                    title: value, className: itemCls, onClick: onClick }, label));
            });
        };
        return _this;
    }
    TimeMenu.prototype.componentDidMount = function () {
        this.scrollToSelected(0);
    };
    TimeMenu.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.activeIndex !== this.props.activeIndex) {
            this.scrollToSelected(120);
        }
    };
    TimeMenu.prototype.scrollToSelected = function (duration) {
        if (duration === void 0) { duration = 0; }
        var _a = this.props, activeIndex = _a.activeIndex, step = _a.step;
        var targetIndex = Math.floor((activeIndex || 0) / step);
        var firstItem = this.menu.children[targetIndex];
        var offsetTo = firstItem.offsetTop;
        scrollTo(this.menu, offsetTo, duration);
    };
    TimeMenu.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, title = _a.title, mode = _a.mode, step = _a.step;
        var total = mode === 'hour' ? 24 : 60;
        var list = [];
        for (var i = 0; i < total; i++) {
            if (i % step === 0) {
                list.push({
                    label: i,
                    value: i,
                });
            }
        }
        var menuTitle = title ? (react_1.default.createElement("div", { className: "".concat(prefix, "time-picker-menu-title") }, title)) : null;
        return (react_1.default.createElement("div", { className: "".concat(prefix, "time-picker-menu") },
            menuTitle,
            react_1.default.createElement("ul", { role: "listbox", className: "".concat(prefix, "time-picker-menu-").concat(mode), ref: this._menuRefHandler }, this.createMenuItems(list))));
    };
    TimeMenu.propTypes = {
        prefix: prop_types_1.default.string,
        title: prop_types_1.default.node,
        mode: prop_types_1.default.oneOf(['hour', 'minute', 'second']),
        step: prop_types_1.default.number,
        activeIndex: prop_types_1.default.number,
        value: utils_1.checkMomentObj,
        disabledItems: prop_types_1.default.func,
        renderTimeMenuItems: prop_types_1.default.func,
        onSelect: prop_types_1.default.func,
        disabled: prop_types_1.default.bool,
    };
    TimeMenu.defaultProps = {
        step: 1,
        disabledItems: function () { return false; },
        renderTimeMenuItems: function (list) { return list; },
        onSelect: function () { },
        disabled: false,
    };
    return TimeMenu;
}(react_1.default.Component));
exports.default = TimeMenu;
