import { __assign, __extends } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import Icon from '../icon';
import ConfigProvider from '../config-provider';
import { func, KEYCODE, obj } from '../util';
import zhCN from '../locale/zh-cn';
var noop = func.noop, bindCtx = func.bindCtx;
var ENTER = KEYCODE.ENTER, LEFT = KEYCODE.LEFT, UP = KEYCODE.UP, RIGHT = KEYCODE.RIGHT, DOWN = KEYCODE.DOWN;
var supportKeys = [ENTER, LEFT, UP, RIGHT, DOWN];
// 评分组件的大小与 icon 的大小映射关系
var ICON_SIZE_MAP = {
    small: 'xs',
    medium: 'small',
    large: 'medium',
};
var Rating = /** @class */ (function (_super) {
    __extends(Rating, _super);
    function Rating(props) {
        var _this = _super.call(this, props) || this;
        _this.underlayNode = null;
        _this.saveRef = function (ref, i) {
            _this["refs-rating-icon-".concat(i)] = ref;
        };
        _this.state = {
            // @ts-expect-error FIXME 这里没有像 getDerivedStateFromProps 内那样处理 props.value 为 undefined 时的情况，先标记
            value: 'value' in props ? props.value : props.defaultValue,
            hoverValue: 0,
            cleanedValue: null,
            iconSpace: 0,
            iconSize: 0,
            clicked: false, // 标记组件是否被点击过
        };
        _this.timer = null;
        bindCtx(_this, ['handleClick', 'handleHover', 'handleLeave', 'onKeyDown']);
        return _this;
    }
    Rating.currentValue = function (min, max, hoverValue, stateValue) {
        var value = hoverValue ? hoverValue : stateValue;
        value = value >= max ? max : value;
        value = value <= min ? min : value;
        return value || 0;
    };
    Rating.getDerivedStateFromProps = function (nextProps) {
        var state = {};
        if ('value' in nextProps) {
            state.value = nextProps.value || 0;
        }
        if ('disabled' in nextProps ||
            'readOnly' in nextProps ||
            'isPreview' in nextProps ||
            'renderPreview' in nextProps) {
            state.disabled =
                nextProps.disabled ||
                    nextProps.readOnly ||
                    (nextProps.isPreview && !('renderPreview' in nextProps));
        }
        return state;
    };
    Rating.prototype.componentDidMount = function () {
        this.getRenderResult();
    };
    Rating.prototype.componentWillUnmount = function () {
        this.clearTimer();
    };
    // 清除延时
    Rating.prototype.clearTimer = function () {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    };
    Rating.prototype.getRenderResult = function () {
        var count = this.props.count;
        var _a = this.state, iconSpace = _a.iconSpace, iconSize = _a.iconSize;
        var icon = this['refs-rating-icon-0'];
        if (icon && this.underlayNode) {
            var newIconSize = icon.offsetWidth;
            var newIconSpace = (this.underlayNode.offsetWidth - count * newIconSize) / (count + 1);
            if (newIconSize !== iconSize || newIconSpace !== iconSpace) {
                this.setState({
                    iconSpace: newIconSpace,
                    iconSize: newIconSize,
                });
            }
        }
    };
    Rating.prototype.getValue = function (e) {
        // 如定位不准，优先纠正定位
        this.getRenderResult();
        var _a = this.props, allowHalf = _a.allowHalf, count = _a.count, rtl = _a.rtl;
        var _b = this.state, iconSpace = _b.iconSpace, iconSize = _b.iconSize;
        var pos = e.pageX - this.underlayNode.getBoundingClientRect().left;
        var fullNum = Math.floor(pos / (iconSpace + iconSize));
        var surplusNum = (pos - fullNum * (iconSpace + iconSize) - iconSpace) / iconSize;
        var value = Number(fullNum) + Number(surplusNum.toFixed(1));
        if (value >= count) {
            value = count;
        }
        else if (allowHalf) {
            var floorValue = Math.floor(value);
            if (rtl) {
                value = value - 0.5 >= floorValue ? floorValue + 1.5 : floorValue + 1;
            }
            else {
                value = value - 0.5 >= floorValue ? floorValue + 1 : floorValue + 0.5;
            }
        }
        else {
            value = Math.floor(value) + 1;
        }
        return rtl ? count - value + 1 : value;
    };
    Rating.prototype.handleHover = function (e) {
        var _this = this;
        if (this.state.disabled) {
            return;
        }
        var value = this.getValue(e);
        var onHoverChange = this.props.onHoverChange;
        var cleanedValue = this.state.cleanedValue;
        if (cleanedValue !== value) {
            this.clearTimer();
            this.timer = setTimeout(function () {
                _this.setState({ hoverValue: value, cleanedValue: null }, function () {
                    onHoverChange(value);
                });
            }, 0);
        }
    };
    Rating.prototype.handleLeave = function () {
        var onHoverChange = this.props.onHoverChange;
        if (this.state.disabled) {
            return;
        }
        this.clearTimer();
        this.setState({
            hoverValue: 0,
            cleanedValue: null,
        });
        onHoverChange(undefined);
    };
    Rating.prototype.onKeyDown = function (e) {
        if (this.state.disabled) {
            return;
        }
        var _a = this.props, onKeyDown = _a.onKeyDown, count = _a.count;
        var disabled = this.state.disabled;
        if (disabled || supportKeys.indexOf(e.keyCode) < 0) {
            return !onKeyDown || onKeyDown(e);
        }
        var _b = this.state, hoverValue = _b.hoverValue, value = _b.value;
        var changingValue = hoverValue;
        if (changingValue === 0) {
            changingValue = value;
        }
        switch (e.keyCode) {
            case DOWN:
            case RIGHT:
                if (changingValue < count) {
                    changingValue += 1;
                }
                else {
                    changingValue = 1;
                }
                this.handleChecked(changingValue);
                break;
            case UP:
            case LEFT:
                if (changingValue > 1) {
                    changingValue -= 1;
                }
                else {
                    changingValue = count;
                }
                this.handleChecked(changingValue);
                break;
            case ENTER:
                this.props.onChange(changingValue);
                this.setState({
                    value: changingValue,
                    hoverValue: changingValue,
                });
                break;
        }
        return !onKeyDown || onKeyDown(e);
    };
    Rating.prototype.handleChecked = function (index) {
        if (this.state.disabled) {
            return;
        }
        this.setState({ hoverValue: index });
    };
    Rating.prototype.handleClick = function (e) {
        var _this = this;
        if (this.state.disabled) {
            return;
        }
        var allowClear = this.props.allowClear;
        var value = this.state.value;
        var newValue = this.getValue(e);
        var isReset = false;
        if (allowClear) {
            isReset = newValue === value;
        }
        this.handleLeave();
        if (newValue < 0) {
            return;
        }
        if (!('value' in this.props)) {
            this.setState({ value: isReset ? 0 : newValue, clicked: true });
        }
        if (newValue !== value || isReset) {
            this.props.onChange(isReset ? 0 : newValue);
        }
        setTimeout(function () {
            _this.setState({ clicked: false });
        }, 100);
        this.setState({
            cleanedValue: isReset ? newValue : null,
        });
    };
    Rating.prototype.getOverlayWidth = function () {
        var _a = this.state, hoverValue = _a.hoverValue, iconSpace = _a.iconSpace, iconSize = _a.iconSize;
        if (!iconSpace || !iconSize) {
            return 'auto';
        }
        var value = Rating.currentValue(0, this.props.count, hoverValue, this.state.value);
        var floorValue = Math.floor(value);
        return iconSize * value + (floorValue + 1) * iconSpace;
    };
    Rating.prototype.getInfoLeft = function () {
        var _a = this.state, value = _a.value, hoverValue = _a.hoverValue, iconSpace = _a.iconSpace, iconSize = _a.iconSize;
        var infoValue = hoverValue || value;
        var ceilValue = Math.ceil(infoValue);
        return iconSize * (ceilValue - 1) + ceilValue * iconSpace;
    };
    Rating.prototype.render = function () {
        var _a, _b, _c;
        var _this = this;
        var _d = this.props, id = _d.id, prefix = _d.prefix, className = _d.className, showGrade = _d.showGrade, count = _d.count, size = _d.size, iconType = _d.iconType, strokeMode = _d.strokeMode, readAs = _d.readAs, rtl = _d.rtl, isPreview = _d.isPreview, renderPreview = _d.renderPreview, locale = _d.locale;
        var disabled = this.state.disabled;
        var others = obj.pickOthers(Rating.propTypes, this.props);
        var _e = this.state, hoverValue = _e.hoverValue, clicked = _e.clicked;
        var underlay = [], overlay = [];
        var enableA11y = !!id;
        // 获得 Value
        var value = Rating.currentValue(0, count, hoverValue, this.state.value);
        // icon 的 sizeMap
        var sizeMap = ICON_SIZE_MAP[size];
        var _loop_1 = function (i) {
            var _f;
            var isCurrent = Math.ceil(value - 1) === i;
            var iconCls = classNames((_f = {
                    hover: hoverValue > 0 && isCurrent,
                    clicked: clicked && isCurrent
                },
                _f["".concat(prefix, "rating-symbol-icon")] = !iconType,
                _f));
            var iconNode = iconType ? (React.createElement(Icon, { type: iconType, size: sizeMap, className: iconCls })) : (React.createElement(Icon, { type: "favorites-filling", size: sizeMap, className: iconCls }));
            var saveRefs = function (ref) {
                _this.saveRef(ref, i);
            };
            underlay.push(React.createElement("span", { ref: saveRefs, key: "underlay-".concat(i), className: "".concat(prefix, "rating-icon") }, iconNode));
            if (enableA11y) {
                overlay.push(React.createElement("input", { id: "".concat(id, "-").concat(prefix, "star").concat(i + 1), key: "input-".concat(i), className: "".concat(prefix, "sr-only"), "aria-checked": i + 1 === parseInt(hoverValue), 
                    // @ts-expect-error FIXME parseInt require number arg
                    checked: i + 1 === parseInt(hoverValue), onChange: this_1.handleChecked.bind(this_1, i + 1), type: "radio", name: "rating" }));
            }
            overlay.push(React.createElement("label", { key: "overlay-".concat(i), htmlFor: enableA11y ? "".concat(id, "-").concat(prefix, "star").concat(i + 1) : undefined, className: "".concat(prefix, "rating-icon") },
                iconNode,
                enableA11y ? (React.createElement("span", { className: "".concat(prefix, "sr-only") }, readAs(i + 1))) : null));
        };
        var this_1 = this;
        for (var i = 0; i < count; i++) {
            _loop_1(i);
        }
        var ratingCls = classNames(["".concat(prefix, "rating"), "".concat(prefix, "rating-").concat(size)], (_a = {},
            _a["".concat(prefix, "rating-grade-low")] = value <= count * 0.4,
            _a["".concat(prefix, "rating-grade-high")] = value > count * 0.4,
            _a["".concat(prefix, "rating-stroke-mode")] = strokeMode,
            _a.hover = hoverValue > 0,
            _a), className);
        var baseCls = classNames("".concat(prefix, "rating-base"), (_b = {},
            _b["".concat(prefix, "rating-base-disabled")] = disabled,
            _b));
        var previewCls = classNames((_c = {},
            _c["".concat(prefix, "form-preview")] = true,
            _c), className);
        var overlayStyle = {
            width: this.getOverlayWidth(),
        };
        var infoStyle = {
            left: this.getInfoLeft(),
            display: hoverValue ? 'block' : 'none',
        };
        var finalProps = disabled
            ? {}
            : {
                onClick: this.handleClick,
                onMouseOver: this.handleHover,
                onMouseMove: this.handleHover,
                onMouseLeave: this.handleLeave,
            };
        if (rtl) {
            others.dir = 'rtl';
        }
        if (isPreview && typeof renderPreview === 'function') {
            return (React.createElement("div", __assign({ id: id }, others, { className: previewCls }), renderPreview(value, this.props)));
        }
        return (React.createElement("div", __assign({ id: id }, others, { className: ratingCls, onKeyDown: this.onKeyDown, tabIndex: 0, role: "group", "aria-label": locale.description }),
            React.createElement("div", __assign({ className: baseCls }, finalProps),
                React.createElement("div", { className: "".concat(prefix, "rating-underlay"), ref: function (n) { return (_this.underlayNode = n); }, "aria-hidden": true }, underlay),
                React.createElement("div", { className: "".concat(prefix, "rating-overlay"), style: overlayStyle, onClick: function (e) { return e.preventDefault(); } }, overlay)),
            showGrade ? (React.createElement("div", { className: "".concat(prefix, "rating-info"), style: infoStyle }, readAs(value))) : null));
    };
    Rating.propTypes = __assign(__assign({}, ConfigProvider.propTypes), { prefix: PropTypes.string, defaultValue: PropTypes.number, value: PropTypes.number, count: PropTypes.number, showGrade: PropTypes.bool, size: PropTypes.oneOf(['small', 'medium', 'large']), allowHalf: PropTypes.bool, allowClear: PropTypes.bool, onChange: PropTypes.func, onHoverChange: PropTypes.func, disabled: PropTypes.bool, readAs: PropTypes.func, iconType: PropTypes.string, strokeMode: PropTypes.bool, className: PropTypes.string, id: PropTypes.string, rtl: PropTypes.bool, locale: PropTypes.object, isPreview: PropTypes.bool, renderPreview: PropTypes.func, readOnly: PropTypes.bool });
    Rating.defaultProps = {
        prefix: 'next-',
        size: 'medium',
        disabled: false,
        readOnly: false,
        isPreview: false,
        count: 5,
        showGrade: false,
        defaultValue: 0,
        readAs: function (val) { return val; },
        allowHalf: false,
        allowClear: false,
        onChange: noop,
        onHoverChange: noop,
        locale: zhCN.Rating,
    };
    Rating.displayName = 'Rating';
    return Rating;
}(Component));
export default polyfill(Rating);
