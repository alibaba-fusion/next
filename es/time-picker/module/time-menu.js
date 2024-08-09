import { __extends, __read, __spreadArray } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { checkMomentObj } from '../utils';
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
    __extends(TimeMenu, _super);
    function TimeMenu() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
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
                var itemCls = classnames((_b = {},
                    _b["".concat(prefix, "time-picker-menu-item")] = true,
                    _b["".concat(prefix, "disabled")] = isDisabled,
                    _b["".concat(prefix, "selected")] = value === activeIndex,
                    _b));
                var onClick = isDisabled ? noop : function () { return onSelect(value, mode); };
                return (React.createElement("li", { role: "option", "aria-selected": String(value === activeIndex), key: value, 
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
        var menuTitle = title ? (React.createElement("div", { className: "".concat(prefix, "time-picker-menu-title") }, title)) : null;
        return (React.createElement("div", { className: "".concat(prefix, "time-picker-menu") },
            menuTitle,
            React.createElement("ul", { role: "listbox", className: "".concat(prefix, "time-picker-menu-").concat(mode), ref: this._menuRefHandler }, this.createMenuItems(list))));
    };
    TimeMenu.propTypes = {
        prefix: PropTypes.string,
        title: PropTypes.node,
        mode: PropTypes.oneOf(['hour', 'minute', 'second']),
        step: PropTypes.number,
        activeIndex: PropTypes.number,
        value: checkMomentObj,
        disabledItems: PropTypes.func,
        renderTimeMenuItems: PropTypes.func,
        onSelect: PropTypes.func,
        disabled: PropTypes.bool,
    };
    TimeMenu.defaultProps = {
        step: 1,
        disabledItems: function () { return false; },
        renderTimeMenuItems: function (list) { return list; },
        onSelect: function () { },
        disabled: false,
    };
    return TimeMenu;
}(React.Component));
export default TimeMenu;
