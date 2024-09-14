import { __assign, __extends } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { func, obj, KEYCODE } from '../util';
import Input from '../input';
import Base from './base';
var bindCtx = func.bindCtx, noop = func.noop;
/**
 * Select.AutoComplete
 */
var AutoComplete = /** @class */ (function (_super) {
    __extends(AutoComplete, _super);
    function AutoComplete(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (value, proxy, item) {
            var _a = _this.props, disabled = _a.disabled, readOnly = _a.readOnly, filterLocal = _a.filterLocal;
            if (disabled || readOnly) {
                return false;
            }
            var actionType = typeof proxy === 'string' ? proxy : 'change';
            _this.isInputing = actionType === 'change';
            if (filterLocal) {
                _this.setState({
                    dataSource: _this.dataStore.updateByKey(value),
                });
                _this.shouldControlPopup(_this.props, actionType);
                _this.setFirstHightLightKeyForMenu(value);
            }
            // 非受控模式清空内部数据
            if (!('value' in _this.props)) {
                _this.setState({
                    value: value,
                });
            }
            // 不自动高亮的情况下，highlightKey 根据 value 精确值走，也就是被选中元素自动高亮，这样也不会影响不在选项内的用户搜索操作
            if (!_this.props.autoHighlightFirstItem) {
                _this.setState({
                    highlightKey: value,
                });
            }
            _this.props.onChange(value, actionType, item);
            if (actionType === 'itemClick' || actionType === 'enter') {
                // 点击 item 的时候不会触发关闭，需要手动关闭，其它类型比如 keyDown 等都会有其它事件句柄处理
                _this.setVisible(false, actionType);
            }
        };
        _this.isAutoComplete = true;
        _this.isInputing = false;
        _this.dataStore.setOptions({ key: _this.state.value });
        Object.assign(_this.state, {
            dataSource: _this.setDataSource(props),
        });
        bindCtx(_this, ['handleTriggerKeyDown', 'handleMenuSelect', 'handleItemClick']);
        return _this;
    }
    AutoComplete.getDerivedStateFromProps = function (nextProps, prevState) {
        var state = {};
        if ('value' in nextProps && nextProps.value !== prevState.value) {
            Object.assign(state, {
                value: nextProps.value,
            });
        }
        if ('visible' in nextProps && nextProps.visible !== prevState.visible) {
            Object.assign(state, {
                visible: nextProps.visible,
            });
        }
        if (Object.keys(state).length) {
            return state;
        }
        return null;
    };
    AutoComplete.prototype.componentDidUpdate = function (prevProps) {
        var props = this.props;
        if (props.filter !== prevProps.filter) {
            this.dataStore.setOptions({
                filter: props.filter,
            });
        }
        if (props.filterLocal !== prevProps.filterLocal) {
            this.dataStore.setOptions({
                filterLocal: props.filterLocal,
            });
        }
        var dataSource;
        if (prevProps.children !== props.children || prevProps.dataSource !== props.dataSource) {
            dataSource = this.setDataSource(props);
        }
        if ('value' in props) {
            if (prevProps.value !== props.value) {
                dataSource = this.dataStore.updateByKey(props.value);
            }
        }
        if (dataSource) {
            this.setState({
                dataSource: dataSource,
            });
            // remote dataSource and focused
            // 因为 autoComplete 没有下拉数据不展示，搜索并且有数据了需要自动展示下拉
            if (!props.filterLocal && this.isInputing) {
                this.shouldControlPopup(props, 'update');
            }
            if (!props.filterLocal && !props.popupContent) {
                this.setFirstHightLightKeyForMenu();
            }
        }
    };
    AutoComplete.prototype.shouldControlPopup = function (props, type) {
        if (props === void 0) { props = this.props; }
        var hasPopup = props.popupContent || this.dataStore.getMenuDS().length;
        if (hasPopup) {
            this.setVisible(true, type);
        }
        else {
            this.setVisible(false, type);
        }
    };
    AutoComplete.prototype.handleMenuSelect = function (keys) {
        var key = keys[0];
        var mapDS = this.dataStore.getMapDS();
        if (key in mapDS) {
            var item = mapDS[key];
            this.handleSelectEvent(key, item, 'itemClick');
        }
    };
    AutoComplete.prototype.handleItemClick = function () {
        this.setVisible(false, 'itemClick');
    };
    AutoComplete.prototype.handleSelectEvent = function (key, item, triggerType) {
        var value = (item && item[this.props.fillProps]) || key;
        if (triggerType === 'itemClick' || triggerType === 'enter') {
            // 点击 item 的时候不会触发关闭，需要手动关闭，其它类型比如 keyDown 等都会有其它事件句柄处理
            this.setVisible(false, triggerType);
        }
        this.handleChange(value, triggerType, item);
    };
    AutoComplete.prototype.handleVisibleChange = function (visible, type) {
        if (!('visible' in this.props) &&
            visible &&
            !this.props.popupContent &&
            !this.dataStore.getMenuDS().length) {
            return;
        }
        this.setVisible(visible, type);
    };
    AutoComplete.prototype.beforeClose = function () {
        this.isInputing = false;
    };
    /**
     * Handle trigger keydown event
     */
    AutoComplete.prototype.handleTriggerKeyDown = function (e) {
        var _a = this.props, popupContent = _a.popupContent, onToggleHighlightItem = _a.onToggleHighlightItem, onKeyDown = _a.onKeyDown;
        if (popupContent) {
            e.stopPropagation(); // stopPropagation can make use onChange trigger while typing space('') in Input
            return onKeyDown(e);
        }
        switch (e.keyCode) {
            case KEYCODE.UP:
                e.preventDefault();
                onToggleHighlightItem(this.toggleHighlightItem(-1), 'up');
                break;
            case KEYCODE.DOWN:
                e.preventDefault();
                onToggleHighlightItem(this.toggleHighlightItem(1), 'down');
                break;
            case KEYCODE.ENTER:
                e.preventDefault();
                this.chooseHighlightItem();
                break;
            case KEYCODE.SPACE:
                // stopPropagation can make use onChange triggerd while typing space('') in Input
                e.stopPropagation();
                break;
            case KEYCODE.ESC:
                e.preventDefault();
                this.state.visible && this.setVisible(false, 'esc');
                break;
            default:
                break;
        }
        onKeyDown(e);
    };
    // 回车 选择高亮的 item
    AutoComplete.prototype.chooseHighlightItem = function () {
        if (!this.state.visible) {
            return false;
        }
        var highlightKey = this.state.highlightKey;
        var highlightItem = this.dataStore.getEnableDS().find(function (item) {
            return highlightKey === "".concat(item.value);
        });
        if (highlightItem) {
            this.handleSelectEvent(highlightKey, highlightItem, 'enter');
        }
    };
    AutoComplete.prototype.hasClear = function () {
        var _a = this.props, hasClear = _a.hasClear, readOnly = _a.readOnly, disabled = _a.disabled;
        var value = this.state.value;
        return value && hasClear && !readOnly && !disabled;
    };
    /**
     * 选择器
     * @override
     * @param props -
     */
    AutoComplete.prototype.renderSelect = function (props) {
        var _a;
        if (props === void 0) { props = this.props; }
        var placeholder = props.placeholder, size = props.size, prefix = props.prefix, className = props.className, style = props.style, label = props.label, readOnly = props.readOnly, disabled = props.disabled, highlightHolder = props.highlightHolder, locale = props.locale, hasClear = props.hasClear, state = props.state, rtl = props.rtl;
        var others = obj.pickOthers(AutoComplete.propTypes, props);
        var othersData = obj.pickAttrsWith(others, 'data-');
        var value = this.state.value;
        var visible = this.state.visible;
        // // 下拉箭头
        // const arrowNode = this.renderArrowNode(props, () => {
        //     this.focusInput();
        //     this.setVisible(!this.state.visible);
        // });
        // trigger className
        var triggerClazz = classNames([
            "".concat(prefix, "select"),
            "".concat(prefix, "select-auto-complete"),
            "".concat(prefix, "size-").concat(size),
            className,
        ], (_a = {},
            _a["".concat(prefix, "active")] = visible,
            _a["".concat(prefix, "disabled")] = disabled,
            _a));
        // highlightKey into placeholder
        // compatible with selectPlaceHolder. TODO: removed in 2.0 version
        var _placeholder = placeholder || locale.autoCompletePlaceholder || locale.autoCompletePlaceHolder;
        if (highlightHolder && visible) {
            _placeholder = this.state.highlightKey || _placeholder;
        }
        // Input props
        var _inputProps = __assign(__assign({}, obj.pickOthers(othersData, others)), { state: state, ref: this.saveInputRef, hasClear: hasClear, value: value, size: size, disabled: disabled, readOnly: readOnly, placeholder: _placeholder, label: label, 
            // extra: arrowNode,
            onChange: this.handleChange, onKeyDown: this.handleTriggerKeyDown });
        return (React.createElement("span", __assign({}, othersData, { className: triggerClazz, style: style, dir: rtl ? 'rtl' : undefined, ref: this.saveSelectRef, onClick: this.focusInput }),
            React.createElement(Input, __assign({ role: "combobox", "aria-autocomplete": "list", "aria-disabled": disabled, "aria-expanded": this.state.visible ? 'true' : 'false' }, _inputProps)),
            React.createElement("span", { className: "".concat(prefix, "sr-only"), "aria-live": "polite" }, this.state.srReader)));
    };
    AutoComplete.prototype.render = function () {
        var _this = this;
        if (this.hasClear()) {
            // clear 按钮点击后，会在 dom 结构中被删除掉，需要将其额外设置为安全节点，防止触发弹层的显示或隐藏
            var safeNode = this.props.popupProps.safeNode || [];
            var safeNodes = Array.isArray(safeNode) ? safeNode : [safeNode];
            //@ts-expect-error 确实没有 clearNode，后续应该做删除处理
            safeNodes.push(function () { return _this.clearNode; });
            this.props.popupProps.safeNode = safeNodes;
        }
        return _super.prototype.render.call(this, Object.assign({}, this.props, { canCloseByTrigger: false }));
    };
    AutoComplete.propTypes = __assign(__assign({}, Base.propTypes), { value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), onChange: PropTypes.func, dataSource: PropTypes.arrayOf(PropTypes.oneOfType([
            PropTypes.shape({
                value: PropTypes.string,
                label: PropTypes.any,
                disabled: PropTypes.bool,
                children: PropTypes.array,
            }),
            PropTypes.string,
        ])), fillProps: PropTypes.string, itemRender: PropTypes.func, onKeyDown: PropTypes.func, highlightHolder: PropTypes.bool, style: PropTypes.object });
    AutoComplete.defaultProps = __assign(__assign({}, Base.defaultProps), { onKeyDown: noop, fillProps: 'value' });
    return AutoComplete;
}(Base));
export default polyfill(AutoComplete);
