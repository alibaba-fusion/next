"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var icon_1 = require("../icon");
var util_1 = require("../util");
var zh_cn_1 = require("../locale/zh-cn");
var noop = util_1.func.noop, bindCtx = util_1.func.bindCtx;
var ENTER = util_1.KEYCODE.ENTER, LEFT = util_1.KEYCODE.LEFT, UP = util_1.KEYCODE.UP, RIGHT = util_1.KEYCODE.RIGHT, DOWN = util_1.KEYCODE.DOWN;
var supportKeys = [ENTER, LEFT, UP, RIGHT, DOWN];
// 评分组件的大小与icon的大小映射关系
var ICON_SIZE_MAP = {
    small: 'xs',
    medium: 'small',
    large: 'medium',
};
/** Rating */
var Rating = /** @class */ (function (_super) {
    tslib_1.__extends(Rating, _super);
    function Rating(props) {
        var _this = _super.call(this, props) || this;
        _this.saveRef = function (ref, i) {
            _this["refs-rating-icon-".concat(i)] = ref;
        };
        _this.state = {
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
    Rating.getDerivedStateFromProps = function (nextProps, prevState) {
        var state = {};
        if ('value' in nextProps) {
            state.value = nextProps.value || 0;
        }
        if ('disabled' in nextProps ||
            'readOnly' in nextProps ||
            'isPreview' in nextProps ||
            'renderPreview' in nextProps) {
            state.disabled =
                nextProps.disabled || nextProps.readOnly || (nextProps.isPreview && !('renderPreview' in nextProps));
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
        var others = util_1.obj.pickOthers(Rating.propTypes, this.props);
        var _e = this.state, hoverValue = _e.hoverValue, clicked = _e.clicked;
        var underlay = [], overlay = [];
        var enableA11y = !!id;
        // 获得Value
        var value = Rating.currentValue(0, count, hoverValue, this.state.value);
        // icon的sizeMap
        var sizeMap = ICON_SIZE_MAP[size];
        var _loop_1 = function (i) {
            var _f;
            var isCurrent = Math.ceil(value - 1) === i;
            var iconCls = (0, classnames_1.default)((_f = {
                    hover: hoverValue > 0 && isCurrent,
                    clicked: clicked && isCurrent
                },
                _f["".concat(prefix, "rating-symbol-icon")] = !iconType,
                _f));
            var iconNode = iconType ? (react_1.default.createElement(icon_1.default, { type: iconType, size: sizeMap, className: iconCls })) : (react_1.default.createElement(icon_1.default, { type: "favorites-filling", size: sizeMap, className: iconCls }));
            var saveRefs = function (ref) {
                _this.saveRef(ref, i);
            };
            underlay.push(react_1.default.createElement("span", { ref: saveRefs, key: "underlay-".concat(i), className: "".concat(prefix, "rating-icon") }, iconNode));
            if (enableA11y) {
                overlay.push(react_1.default.createElement("input", { id: "".concat(id, "-").concat(prefix, "star").concat(i + 1), key: "input-".concat(i), className: "".concat(prefix, "sr-only"), "aria-checked": i + 1 === parseInt(hoverValue), checked: i + 1 === parseInt(hoverValue), onChange: this_1.handleChecked.bind(this_1, i + 1), type: "radio", name: "rating" }));
            }
            overlay.push(react_1.default.createElement("label", { key: "overlay-".concat(i), htmlFor: enableA11y ? "".concat(id, "-").concat(prefix, "star").concat(i + 1) : null, className: "".concat(prefix, "rating-icon") },
                iconNode,
                enableA11y ? react_1.default.createElement("span", { className: "".concat(prefix, "sr-only") }, readAs(i + 1)) : null));
        };
        var this_1 = this;
        for (var i = 0; i < count; i++) {
            _loop_1(i);
        }
        var ratingCls = (0, classnames_1.default)(["".concat(prefix, "rating"), "".concat(prefix, "rating-").concat(size)], (_a = {},
            _a["".concat(prefix, "rating-grade-low")] = value <= count * 0.4,
            _a["".concat(prefix, "rating-grade-high")] = value > count * 0.4,
            _a["".concat(prefix, "rating-stroke-mode")] = strokeMode,
            _a.hover = hoverValue > 0,
            _a), className);
        var baseCls = (0, classnames_1.default)("".concat(prefix, "rating-base"), (_b = {},
            _b["".concat(prefix, "rating-base-disabled")] = disabled,
            _b));
        var previewCls = (0, classnames_1.default)((_c = {},
            _c["".concat(prefix, "form-preview")] = true,
            _c[className] = !!className,
            _c));
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
        if (isPreview && 'renderPreview' in this.props) {
            return (react_1.default.createElement("div", tslib_1.__assign({ id: id }, others, { className: previewCls }), renderPreview(value, this.props)));
        }
        return (react_1.default.createElement("div", tslib_1.__assign({ id: id }, others, { className: ratingCls, onKeyDown: this.onKeyDown, tabIndex: "0", role: "group", "aria-label": locale.description }),
            react_1.default.createElement("div", tslib_1.__assign({ className: baseCls }, finalProps),
                react_1.default.createElement("div", { className: "".concat(prefix, "rating-underlay"), ref: function (n) { return (_this.underlayNode = n); }, "aria-hidden": true }, underlay),
                react_1.default.createElement("div", { className: "".concat(prefix, "rating-overlay"), style: overlayStyle, onClick: function (e) { return e.preventDefault(); } }, overlay)),
            showGrade ? (react_1.default.createElement("div", { className: "".concat(prefix, "rating-info"), style: infoStyle }, readAs(value))) : null));
    };
    Rating.propTypes = {
        prefix: prop_types_1.default.string,
        /**
         * 默认值
         */
        defaultValue: prop_types_1.default.number,
        /**
         * 值
         */
        value: prop_types_1.default.number,
        /**
         * 评分的总数
         */
        count: prop_types_1.default.number,
        /**
         * 是否显示 grade
         */
        showGrade: prop_types_1.default.bool,
        /**
         * 尺寸
         */
        size: prop_types_1.default.oneOf(['small', 'medium', 'large']),
        /**
         * 是否允许半星评分
         */
        allowHalf: prop_types_1.default.bool,
        /**
         * 是否允许再次点击后清除
         */
        allowClear: prop_types_1.default.bool,
        /**
         * 用户点击评分时触发的回调
         * @param {Number} value 评分值
         */
        onChange: prop_types_1.default.func,
        /**
         * 用户hover评分时触发的回调
         * @param {Number} value 评分值
         */
        onHoverChange: prop_types_1.default.func,
        /**
         * 是否禁用
         */
        disabled: prop_types_1.default.bool,
        /**
         * 评分文案生成方法，传入id支持无障碍时，读屏软件可读
         */
        readAs: prop_types_1.default.func,
        // 实验属性: 自定义评分icon
        iconType: prop_types_1.default.string,
        // 实验属性: 开启 `-webkit-text-stroke` 显示边框颜色，在IE中无效
        strokeMode: prop_types_1.default.bool,
        className: prop_types_1.default.string,
        id: prop_types_1.default.string,
        rtl: prop_types_1.default.bool,
        /**
         * 自定义国际化文案对象
         */
        locale: prop_types_1.default.object,
        /**
         * 是否为预览态
         */
        isPreview: prop_types_1.default.bool,
        /**
         * 预览态模式下渲染的内容
         * @param {number} value 评分值
         */
        renderPreview: prop_types_1.default.func,
        /**
         * 是否为只读态，效果上同 disabeld
         */
        readOnly: prop_types_1.default.bool,
    };
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
        locale: zh_cn_1.default.Rating,
    };
    return Rating;
}(react_1.Component));
exports.default = (0, react_lifecycles_compat_1.polyfill)(Rating);
