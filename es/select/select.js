import { __assign, __extends, __read, __spreadArray } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { func, obj, KEYCODE, env, str } from '../util';
import Tag from '../tag';
import Input from '../input';
import Icon from '../icon';
import zhCN from '../locale/zh-cn';
import Base from './base';
import { isNull, getValueDataSource, valueToSelectKey } from './util';
var bindCtx = func.bindCtx, noop = func.noop;
var isIE9 = env.ieVersion === 9;
/**
 * Select
 */
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select(props) {
        var _this = _super.call(this, props) || this;
        /**
         * 1. fix flash while click <label/>
         * 2. fix onBlur while has clear
         * @returns
         */
        _this.handleWrapClick = function (e) {
            // ignore click on input to choose text
            if (e.target.nodeName !== 'INPUT') {
                e.preventDefault();
            }
            _this.focusInput();
        };
        _this.handleArrowClick = function (e) {
            e.preventDefault();
            _this.focusInput();
            // because of can not close Popup by click Input while hasSearch.
            // so when Popup open and hasSearch, we should close Popup intentionally
            _this.state.visible && _this.hasSearch() && _this.setVisible(false);
        };
        _this.handleClear = function (e) {
            e.stopPropagation();
            _this.selectAllYet = false;
            _this.handleChange(undefined, 'clear');
        };
        // because dataSource maybe updated while select a item, so we should cache choosen value's item
        _this.valueDataSource = {
            valueDS: [], // [{value,label}]
            mapValueDS: {}, // {value: {value,label}}
        };
        var searchValue = 'searchValue' in props ? props.searchValue : '';
        _this.dataStore.setOptions({
            key: searchValue,
            addonKey: props.mode === 'tag', // tag 模式手动输入的数据
        });
        Object.assign(_this.state, {
            searchValue: searchValue,
            dataSource: _this.setDataSource(props),
        });
        // 根据 value 和计算后的 dataSource，更新 value 对应的详细数据 valueDataSource
        if (typeof _this.state.value !== 'undefined') {
            _this.valueDataSource = getValueDataSource(_this.state.value, _this.valueDataSource.mapValueDS, _this.dataStore.getMapDS());
        }
        bindCtx(_this, [
            'handleMenuSelect',
            'handleItemClick',
            'handleSearch',
            'handleSearchKeyDown',
            'handleSelectAll',
            'maxTagPlaceholder',
        ]);
        return _this;
    }
    Select.getDerivedStateFromProps = function (nextProps, prevState) {
        var state = {};
        if ('value' in nextProps && nextProps.value !== prevState.value) {
            Object.assign(state, {
                value: nextProps.value,
            });
        }
        if ('highlightKey' in nextProps && nextProps.highlightKey !== prevState.highlightKey) {
            Object.assign(state, {
                highlightKey: nextProps.highlightKey,
            });
        }
        else if ('value' in nextProps &&
            nextProps.value !== prevState.value &&
            nextProps.mode === 'single') {
            Object.assign(state, {
                highlightKey: nextProps.value,
            });
        }
        if ('searchValue' in nextProps && nextProps.searchValue !== prevState.searchValue) {
            var searchValue = nextProps.searchValue;
            Object.assign(state, {
                searchValue: searchValue === undefined || searchValue === null ? '' : searchValue,
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
    Select.prototype.componentDidUpdate = function (prevProps, prevState) {
        var props = this.props;
        if ('searchValue' in props && this.state.searchValue !== prevState.searchValue) {
            this.dataStore.setOptions({ key: this.state.searchValue });
        }
        if (props.mode !== prevProps.mode) {
            this.dataStore.setOptions({
                addonKey: props.mode === 'tag',
            });
        }
        if (props.mode !== prevProps.mode) {
            this.dataStore.setOptions({
                addonKey: props.mode === 'tag',
            });
        }
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
        if (prevProps.children !== props.children || prevProps.dataSource !== props.dataSource) {
            this.setState({
                dataSource: this.setDataSource(props),
            });
            if (!props.popupContent) {
                this.setFirstHightLightKeyForMenu(this.state.searchValue);
            }
        }
        if ('value' in props) {
            this.valueDataSource = getValueDataSource(props.value, this.valueDataSource.mapValueDS, this.dataStore.getMapDS());
            this.updateSelectAllYet(this.valueDataSource.value);
        }
        else if ('defaultValue' in props &&
            props.defaultValue === this.valueDataSource.value &&
            (props.children !== prevProps.children || props.dataSource !== prevProps.dataSource)) {
            // has defaultValue and value not changed and dataSource changed
            // fix: set defaultValue first, then update dataSource.
            this.valueDataSource = getValueDataSource(props.defaultValue, this.valueDataSource.mapValueDS, this.dataStore.getMapDS());
        }
        if (prevProps.label !== this.props.label ||
            prevState.value !== this.state.value ||
            props.searchValue !== this.state.searchValue) {
            this.syncWidth();
        }
    };
    Select.prototype.componentDidMount = function () {
        if (isIE9) {
            this.ie9Hack();
        }
        _super.prototype.componentDidMount.call(this);
    };
    // ie9 下 table-cell 布局不支持宽度超出隐藏
    Select.prototype.ie9Hack = function () {
        try {
            var width = this.selectDOM
                .currentStyle.width;
            this.setState({
                fixWidth: width !== 'auto',
            });
        }
        catch (e) {
            //
        }
    };
    Select.prototype.useDetailValue = function () {
        var _a = this.props, popupContent = _a.popupContent, useDetailValue = _a.useDetailValue, dataSource = _a.dataSource;
        return useDetailValue || (!!popupContent && !dataSource);
    };
    Select.prototype.hasSearch = function () {
        var _a = this.props, showSearch = _a.showSearch, mode = _a.mode;
        return showSearch || mode === 'tag';
    };
    Select.prototype.getTagSize = function () {
        var _a = this.props, size = _a.size, adjustTagSize = _a.adjustTagSize;
        if (adjustTagSize) {
            return size;
        }
        return size === 'large' ? 'medium' : 'small';
    };
    /**
     * Menu.Item onSelect
     */
    Select.prototype.handleMenuSelect = function (keys, item) {
        var _a = this.props, mode = _a.mode, readOnly = _a.readOnly, disabled = _a.disabled;
        if (readOnly || disabled) {
            return false;
        }
        var isSingle = mode === 'single';
        if (isSingle) {
            // 单选
            return this.handleSingleSelect(keys[0], 'itemClick');
        }
        else {
            // 正常多选
            return this.handleMultipleSelect(keys, 'itemClick', item.props && item.props._key);
        }
    };
    Select.prototype.handleItemClick = function (key) {
        if (!this.props.popupAutoFocus) {
            this.focusInput();
        }
        // key is string type here, fix https://github.com/alibaba-fusion/next/issues/4004
        if (this.props.mode === 'single' && key === String(this.state.value)) {
            this.setVisible(false, 'itemClick');
        }
    };
    /**
     * 单选模式
     */
    Select.prototype.handleSingleSelect = function (key, triggerType) {
        // TODO: 这里 cacheValue=false 有问题，dataSource 更新的时候就应该处理
        var cacheValue = this.props.cacheValue;
        // get data only from dataStore while cacheValue=false
        var itemObj = getValueDataSource(key, cacheValue ? this.valueDataSource.mapValueDS : {}, this.dataStore.getMapDS());
        this.valueDataSource = itemObj;
        this.setVisible(false, triggerType);
        // 应在 return 之前传出 highlightKey
        this.setState({
            highlightKey: key,
        });
        if (this.useDetailValue()) {
            return this.handleChange(itemObj.valueDS, triggerType);
        }
        else {
            this.handleChange(itemObj.value, triggerType, itemObj.valueDS);
        }
        // 清空搜索
        if (!('searchValue' in this.props) && this.state.searchValue) {
            this.handleSearchClear(triggerType);
        }
    };
    /**
     * 多选模式 multiple/tag
     */
    Select.prototype.handleMultipleSelect = function (keys, triggerType, key, keepSearchValue) {
        var _this = this;
        var itemObj = getValueDataSource(keys, this.valueDataSource.mapValueDS, this.dataStore.getMapDS());
        var _a = this.props, cacheValue = _a.cacheValue, mode = _a.mode, hiddenSelected = _a.hiddenSelected, autoClearSearchValue = _a.autoClearSearchValue;
        // cache those value maybe not exists in dataSource
        if (cacheValue || mode === 'tag') {
            this.valueDataSource = itemObj;
        }
        if (hiddenSelected) {
            this.setVisible(false, triggerType);
        }
        // 因为搜索后会设置 hightLight 为第一个 item，menu 渲染会自动滚动到 hightLight 的元素上面。
        // 所以设置 hightLight 为当前选中项避免滚动
        key &&
            this.state.visible &&
            this.setState({
                highlightKey: key,
            });
        if (this.useDetailValue()) {
            this.handleChange(itemObj.valueDS, triggerType);
        }
        else {
            this.handleChange(itemObj.value, triggerType, itemObj.valueDS);
        }
        this.updateSelectAllYet(itemObj.value);
        // 清空搜索
        if (!('searchValue' in this.props) &&
            this.state.searchValue &&
            !keepSearchValue &&
            !(mode && ['multiple', 'tag'].includes(mode) && !autoClearSearchValue)) {
            // 因为 SearchValue 被 clear 后会重新渲染 Menu，所以在 Overlay 检测 safeNode 的时候 e.target 可能会找不到导致弹窗关闭
            setTimeout(function () {
                _this.handleSearchClear(triggerType);
            });
        }
    };
    Select.prototype.updateSelectAllYet = function (value) {
        var _this = this;
        // multiple mode
        // is current state select all or not
        this.selectAllYet = false;
        if (this.props.hasSelectAll && Array.isArray(value)) {
            var selectAllValues = this.dataStore.getEnableDS().map(function (item) { return item.value; });
            if (selectAllValues.length <= value.length) {
                this.selectAllYet = true;
                selectAllValues.forEach(function (val) {
                    if (value.indexOf(val) === -1) {
                        _this.selectAllYet = false;
                        return;
                    }
                });
            }
        }
    };
    Select.prototype.handleSearchValue = function (value) {
        if (this.state.searchValue === value) {
            return;
        }
        var filterLocal = this.props.filterLocal;
        if (filterLocal) {
            if (!('searchValue' in this.props)) {
                this.setState({
                    searchValue: value,
                    dataSource: this.dataStore.updateByKey(value),
                });
                this.setFirstHightLightKeyForMenu(value);
            }
        }
        else if (!('searchValue' in this.props)) {
            this.setState({
                searchValue: value,
            });
        }
    };
    /**
     * Handle search input change event
     */
    Select.prototype.handleSearch = function (value, e) {
        this.handleSearchValue(value);
        // inputing should trigger popup open
        if (!this.state.visible && value) {
            this.setVisible(true);
        }
        this.props.onSearch(value, e);
    };
    Select.prototype.handleSearchClear = function (triggerType) {
        this.handleSearchValue('');
        this.props.onSearchClear(triggerType);
    };
    // 搜索框 keyDown 事件
    Select.prototype.handleSearchKeyDown = function (e) {
        var _a = this.props, popupContent = _a.popupContent, onKeyDown = _a.onKeyDown, showSearch = _a.showSearch, mode = _a.mode, hasClear = _a.hasClear, onToggleHighlightItem = _a.onToggleHighlightItem, readOnly = _a.readOnly, disabled = _a.disabled;
        var hasSearch = this.hasSearch();
        if (popupContent) {
            // 搜索的时候不阻止冒泡会无法输入
            if (hasSearch && e.keyCode === KEYCODE.SPACE) {
                e.stopPropagation();
            }
            return onKeyDown(e);
        }
        var proxy = 'search';
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
                if (readOnly || disabled) {
                    break;
                }
                this.chooseHighlightItem(proxy, e);
                break;
            case KEYCODE.ESC:
                e.preventDefault();
                this.state.visible && this.setVisible(false, 'keyDown');
                break;
            case KEYCODE.SPACE:
                e.stopPropagation();
                !hasSearch && e.preventDefault();
                break;
            case KEYCODE.BACKSPACE:
                if (readOnly || disabled) {
                    break;
                }
                if ((mode === 'multiple' && showSearch) || mode === 'tag') {
                    // 在多选并且有搜索的情况下，删除最后一个 tag
                    var valueDS = this.valueDataSource.valueDS;
                    if (valueDS &&
                        valueDS.length &&
                        !valueDS[valueDS.length - 1].disabled) {
                        this.handleDeleteTag(e);
                    }
                }
                else if (mode === 'single' && hasClear && !this.state.visible) {
                    // 单选、非展开、并且可清除的情况，允许按删除键清除
                    this.handleClear(e);
                }
                break;
            default:
                break;
        }
        onKeyDown(e);
    };
    Select.prototype.chooseMultipleItem = function (key) {
        var value = this.state.value || [];
        var keys = value.map(function (v) {
            return valueToSelectKey(v);
        });
        var keepSearchValue = false;
        var index = keys.map(function (v) { return "".concat(v); }).indexOf(key);
        if (index > -1) {
            // unselect
            keys.splice(index, 1);
            keepSearchValue = true; // 回车反选保留搜索值
        }
        else {
            // select
            keys.push(key);
        }
        this.handleMultipleSelect(keys, 'enter', null, keepSearchValue);
    };
    // 回车 选择高亮的 item
    Select.prototype.chooseHighlightItem = function (proxy, e) {
        var mode = this.props.mode;
        if (!this.state.visible) {
            // input tag by itself
            if (mode === 'tag' && this.state.searchValue) {
                this.chooseMultipleItem(this.state.searchValue);
            }
            return false;
        }
        var highlightKey = this.state.highlightKey;
        // 没有高亮选项 或者 没有可选菜单
        if (highlightKey === null || !this.dataStore.getMenuDS().length) {
            return;
        }
        if (mode === 'single') {
            this.handleSingleSelect(highlightKey, 'enter');
        }
        else {
            this.chooseMultipleItem(highlightKey);
            // 阻止事件冒泡到最外层，让 Popup 监听到触发弹层关闭
            e && e.stopPropagation();
        }
    };
    /**
     * Handle Tag close event
     * @returns false  return false to prevent auto close
     * ----
     * It MUST be multiple mode, needn't additional judgement
     */
    Select.prototype.handleTagClose = function (item) {
        var readOnly = this.props.readOnly;
        if (readOnly)
            return false;
        var stateValue = this.state.value;
        if (this.useDetailValue()) {
            var value = stateValue.filter(function (v) {
                return item.value !== v.value;
            });
            this.handleChange(value, 'tag');
        }
        else {
            // filter out current item, and then call handleMenuSelect
            var value = stateValue.filter(function (v) {
                return item.value !== v;
            });
            this.handleMultipleSelect(value, 'tag');
        }
        this.props.onRemove(item);
        // prevent tag close
        return false;
    };
    /**
     * Handle BACKSPACE key event
     * @param e - keyDown event
     * ---
     * It MUST be multiple mode
     */
    Select.prototype.handleDeleteTag = function (e) {
        var value = this.state.value;
        var searchValue = this.state.searchValue;
        if (searchValue || !value || !value.length) {
            return false;
        }
        e.preventDefault();
        var nextValues = value.slice(0, value.length - 1);
        // 手动调用 handleMenuSelect 时直接传入原生的 value，可以减少 toString 的操作
        if (this.useDetailValue()) {
            this.handleChange(nextValues, 'tag');
        }
        else {
            this.handleMultipleSelect(nextValues, 'tag');
        }
    };
    /**
     * Handle SelectAll span click event
     * @param e - click event
     */
    Select.prototype.handleSelectAll = function (e) {
        e && e.preventDefault();
        var nextValues;
        if (this.selectAllYet) {
            nextValues = [];
        }
        else {
            nextValues = __spreadArray(__spreadArray([], __read((this.state.value || []).map(function (item) {
                if (typeof item === 'object' && item !== null) {
                    return item.value;
                }
                return item;
            })), false), __read(this.dataStore.getEnableDS().map(function (item) { return item.value; })), false);
        }
        // 去重
        nextValues = Array.from(new Set(nextValues));
        // 直接传 values，减少 toString 操作
        this.handleMultipleSelect(nextValues, 'selectAll');
    };
    Select.prototype.handleVisibleChange = function (visible, type) {
        this.setVisible(visible, type);
    };
    Select.prototype.afterClose = function () {
        // 关闭的时候清空搜索值
        if (this.hasSearch()) {
            this.handleSearchClear('popupClose');
        }
    };
    Select.prototype.maxTagPlaceholder = function (selectedValues, totalValues) {
        var locale = this.props.locale;
        return "".concat(str.template(locale.maxTagPlaceholder, {
            selected: selectedValues.length,
            total: totalValues.length,
        }));
    };
    /**
     * 如果用户是自定义的弹层，则直接以 value 为准，不再校验 dataSource
     * TODO: 2.0 中 value 接受 string/object\{value,label\} 两种类型的数据，自动做识别，可以避免用户去转换，也和 date-picker 对齐
     * 此外 onChange 第一个参数根据 api 来控制类型是 [string] 还是 [object\{value,label\}]
     */
    Select.prototype.renderValues = function () {
        var _this = this;
        var _a = this.props, prefix = _a.prefix, mode = _a.mode, valueRender = _a.valueRender, fillProps = _a.fillProps, disabled = _a.disabled, maxTagCount = _a.maxTagCount, maxTagPlaceholder = _a.maxTagPlaceholder, tagInline = _a.tagInline, tagClosable = _a.tagClosable;
        var tagSize = this.getTagSize();
        var value = this.state.value;
        if (isNull(value)) {
            return null;
        }
        // get detail value
        if (!this.useDetailValue()) {
            if (value === this.valueDataSource.value) {
                value = this.valueDataSource.valueDS;
            }
            else {
                value = getValueDataSource(value, this.valueDataSource.mapValueDS, this.dataStore.getMapDS()).valueDS;
            }
        }
        if (mode === 'single') {
            if (!value) {
                return null;
            }
            var retvalue = fillProps && typeof value === 'object' && fillProps in value
                ? value[fillProps]
                : valueRender(value);
            // 0 => '0'
            return typeof retvalue === 'number' ? retvalue.toString() : retvalue;
        }
        else if (value) {
            var detailedValueArr = value;
            var limitedCountValue = detailedValueArr;
            var maxTagPlaceholderEl = void 0;
            var totalValue = this.dataStore.getFlattenDS();
            var holder = 'maxTagPlaceholder' in this.props ? maxTagPlaceholder : this.maxTagPlaceholder;
            if (maxTagCount !== undefined && detailedValueArr.length > maxTagCount && !tagInline) {
                limitedCountValue = limitedCountValue.slice(0, maxTagCount);
                maxTagPlaceholderEl = (React.createElement(Tag, { key: "_count", type: "primary", size: tagSize, animation: false }, holder(detailedValueArr, totalValue)));
            }
            if (detailedValueArr.length > 0 && tagInline) {
                maxTagPlaceholderEl = (React.createElement("div", { className: "".concat(prefix, "select-tag-compact"), key: "_count" }, holder(detailedValueArr, totalValue)));
            }
            detailedValueArr = limitedCountValue;
            if (!Array.isArray(detailedValueArr)) {
                detailedValueArr = [detailedValueArr];
            }
            var selectedValueNodes = detailedValueArr.map(function (v) {
                if (!v) {
                    return null;
                }
                var labelNode = fillProps ? v[fillProps] : valueRender(v);
                return (React.createElement(Tag, { key: v.value, disabled: disabled || v.disabled, type: "primary", size: tagSize, animation: false, onClose: _this.handleTagClose.bind(_this, v), closable: tagClosable, color: v.color }, labelNode));
            });
            if (maxTagPlaceholderEl) {
                if (tagInline) {
                    selectedValueNodes.unshift(maxTagPlaceholderEl);
                }
                else {
                    selectedValueNodes.push(maxTagPlaceholderEl);
                }
            }
            return selectedValueNodes;
        }
        return null;
    };
    Select.prototype.hasClear = function () {
        var _a = this.props, hasClear = _a.hasClear, readOnly = _a.readOnly, disabled = _a.disabled, showSearch = _a.showSearch;
        var _b = this.state, value = _b.value, visible = _b.visible;
        return (typeof value !== 'undefined' &&
            value !== null &&
            (Array.isArray(value) ? value.length > 0 : true) &&
            hasClear &&
            !readOnly &&
            !disabled &&
            !(showSearch && visible));
    };
    /**
     * render arrow
     */
    Select.prototype.renderExtraNode = function () {
        var _a = this.props, hasArrow = _a.hasArrow, hasClear = _a.hasClear, prefix = _a.prefix;
        var ret = [];
        if (hasArrow) {
            ret.push(React.createElement("span", { key: "arrow", "aria-hidden": true, onClick: this.handleArrowClick, className: "".concat(prefix, "select-arrow") },
                React.createElement(Icon, { type: "arrow-down", className: "".concat(prefix, "select-symbol-fold") })));
        }
        // do not use this.hasClear() here, to make sure clear btn always exists, can not influenced by apis like `disabled` `readOnly`
        if (hasClear) {
            ret.push(React.createElement("span", { key: "clear", "aria-hidden": true, onClick: this.handleClear, className: "".concat(prefix, "select-clear") },
                React.createElement(Icon, { type: "delete-filling" })));
        }
        return ret;
    };
    /**
     * 选择器
     * @override
     */
    Select.prototype.renderSelect = function () {
        var _a;
        var _this = this;
        var _b = this.props, prefix = _b.prefix, showSearch = _b.showSearch, placeholder = _b.placeholder, mode = _b.mode, size = _b.size, className = _b.className, style = _b.style, readOnly = _b.readOnly, disabled = _b.disabled, hasBorder = _b.hasBorder, label = _b.label, locale = _b.locale, state = _b.state, onBlur = _b.onBlur, onFocus = _b.onFocus, onMouseEnter = _b.onMouseEnter, onMouseLeave = _b.onMouseLeave, rtl = _b.rtl;
        var others = obj.pickOthers(Select.propTypes, this.props);
        // select 不是输入框，应过滤掉 addonTextAfter
        if ('addonTextAfter' in others) {
            delete others.addonTextAfter;
        }
        var othersData = obj.pickAttrsWith(others, 'data-');
        var visible = this.state.visible;
        var isSingle = mode === 'single';
        var hasSearch = this.hasSearch();
        var valueNodes = this.renderValues();
        // compatible with selectPlaceHolder. TODO: removed in 2.0 version
        var _placeholder = placeholder || locale.selectPlaceholder || locale.selectPlaceHolder;
        if (valueNodes && valueNodes.length) {
            _placeholder = undefined;
        }
        // 弹窗展开时将当前的值作为 placeholder，这个功能的前提是 valueNode 必须是一个字符串
        if (showSearch && visible && isSingle && typeof valueNodes === 'string') {
            _placeholder = valueNodes;
        }
        // 下拉箭头
        var extra = this.renderExtraNode();
        var triggerClazz = classNames([
            "".concat(prefix, "select"),
            "".concat(prefix, "select-trigger"),
            "".concat(prefix, "select-").concat(mode),
            "".concat(prefix).concat(size),
            className,
        ], (_a = {},
            _a["".concat(prefix, "active")] = visible,
            _a["".concat(prefix, "inactive")] = !visible,
            _a["".concat(prefix, "no-search")] = !hasSearch,
            _a["".concat(prefix, "has-search")] = hasSearch,
            _a["".concat(prefix, "select-in-ie")] = isIE9,
            _a["".concat(prefix, "select-in-ie-fixwidth")] = this.state.fixWidth,
            _a["".concat(prefix, "has-clear")] = this.hasClear(),
            _a));
        return (React.createElement("span", __assign({}, othersData, { className: triggerClazz, style: style, dir: rtl ? 'rtl' : undefined, ref: this.saveSelectRef, onClick: this.handleWrapClick, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, onMouseDown: this.handleWrapClick }),
            React.createElement(Input, __assign({ "aria-label": "select" }, obj.pickOthers(othersData, others), { role: "combobox", tabIndex: 0, "aria-expanded": this.state.visible ? 'true' : 'false', "aria-disabled": disabled, state: state, label: label, extra: extra, value: this.state.searchValue, size: size, readOnly: !this.hasSearch() || readOnly, disabled: disabled, placeholder: _placeholder, hasBorder: hasBorder, hasClear: false, htmlSize: "1", inputRender: function (inputEl) {
                    return _this.renderSearchInput(valueNodes, _placeholder, inputEl);
                }, onChange: this.handleSearch, onKeyDown: this.handleSearchKeyDown, onFocus: onFocus, onBlur: onBlur, className: "".concat(prefix, "select-inner"), ref: this.saveInputRef })),
            React.createElement("span", { className: "".concat(prefix, "sr-only"), "aria-live": "polite" }, this.state.srReader)));
    };
    Select.prototype.renderSearchInput = function (valueNodes, placeholder, inputEl) {
        var _a;
        var _b = this.props, prefix = _b.prefix, mode = _b.mode, tagInline = _b.tagInline;
        var isSingle = mode === 'single';
        var mirrorText = this.state.searchValue;
        var cls = classNames((_a = {},
            _a["".concat(prefix, "select-values")] = true,
            _a["".concat(prefix, "input-text-field")] = true,
            _a["".concat(prefix, "select-compact")] = !isSingle && tagInline,
            _a));
        var title = typeof valueNodes === 'string' ? valueNodes : '';
        var searchInput = [
            isSingle && valueNodes ? (React.createElement("em", { title: title, key: "select-value" }, valueNodes)) : (valueNodes),
        ];
        var triggerSearch = (React.createElement("span", { key: "trigger-search", className: "".concat(prefix, "select-trigger-search") },
            inputEl,
            React.createElement("span", { "aria-hidden": true },
                React.createElement("span", null, mirrorText || placeholder),
                React.createElement("span", { style: { display: 'inline-block', width: 1 } }, "\u00A0"))));
        if (!isSingle && tagInline) {
            searchInput.unshift(triggerSearch);
        }
        else {
            searchInput.push(triggerSearch);
        }
        return React.createElement("span", { className: cls }, searchInput);
    };
    /**
     * 渲染弹层的 header 内容
     * @override
     */
    Select.prototype.renderMenuHeader = function () {
        var _a, _b;
        var _c = this.props, prefix = _c.prefix, hasSelectAll = _c.hasSelectAll, mode = _c.mode, locale = _c.locale, menuProps = _c.menuProps;
        if (menuProps && 'header' in menuProps) {
            return menuProps.header;
        }
        var sourceCount = this.dataStore.getEnableDS().length;
        // 多选模式下才有全选
        if (!hasSelectAll || mode === 'single' || !sourceCount) {
            return null;
        }
        var text = typeof hasSelectAll === 'boolean' ? locale.selectAll : hasSelectAll;
        var selectAllYet = this.selectAllYet;
        var cls = classNames((_a = {},
            _a["".concat(prefix, "select-all")] = true,
            _a["".concat(prefix, "selected")] = selectAllYet,
            _a));
        var clsInner = classNames((_b = {},
            _b["".concat(prefix, "select-all-inner")] = true,
            _b));
        // remove style={{'lineHeight': 'unset'}} in next Y
        // remove style={{'display': 'none'}} in next Y
        return (React.createElement("div", { key: "all", onClick: this.handleSelectAll, className: cls, style: { lineHeight: 'unset' } },
            selectAllYet ? (React.createElement(Icon, { className: "".concat(prefix, "menu-icon-selected"), style: { display: 'none' }, type: "select" })) : null,
            React.createElement("span", { className: clsInner }, text)));
    };
    Select.prototype.render = function () {
        var mode = this.props.mode;
        var props = __assign({}, this.props);
        // forbid to close Popup by click Input while hasSearch
        if (this.hasSearch()) {
            props.canCloseByTrigger = false;
        }
        if (mode === 'single') {
            props.cache = true;
        }
        return _super.prototype.render.call(this, props);
    };
    Select.propTypes = __assign(__assign({}, Base.propTypes), { mode: PropTypes.oneOf(['single', 'multiple', 'tag']), value: PropTypes.any, defaultValue: PropTypes.any, onChange: PropTypes.func, dataSource: PropTypes.arrayOf(PropTypes.oneOfType([
            PropTypes.shape({
                value: PropTypes.any,
                label: PropTypes.any,
                disabled: PropTypes.bool,
                children: PropTypes.array,
            }),
            PropTypes.bool,
            PropTypes.number,
            PropTypes.string,
        ])), hasBorder: PropTypes.bool, hasArrow: PropTypes.bool, showSearch: PropTypes.bool, onSearch: PropTypes.func, onSearchClear: PropTypes.func, hasSelectAll: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]), fillProps: PropTypes.string, useDetailValue: PropTypes.bool, cacheValue: PropTypes.bool, valueRender: PropTypes.func, itemRender: PropTypes.func, notFoundContent: PropTypes.node, style: PropTypes.object, searchValue: PropTypes.string, tagInline: PropTypes.bool, tagClosable: PropTypes.bool, adjustTagSize: PropTypes.bool, maxTagCount: PropTypes.number, maxTagPlaceholder: PropTypes.func, hiddenSelected: PropTypes.bool, onRemove: PropTypes.func, onFocus: PropTypes.func, onBlur: PropTypes.func, onMouseEnter: PropTypes.func, onMouseLeave: PropTypes.func, onKeyDown: PropTypes.func, locale: PropTypes.object, popupAutoFocus: PropTypes.bool, showDataSourceChildren: PropTypes.bool, autoClearSearchValue: PropTypes.bool });
    Select.defaultProps = __assign(__assign({}, Base.defaultProps), { locale: zhCN.Select, mode: 'single', showSearch: false, cacheValue: true, tagInline: false, adjustTagSize: false, onSearch: noop, onSearchClear: noop, hasArrow: true, onRemove: noop, 
        // highlightFirstItem: true,
        valueRender: function (item) {
            return item && (item.label || item.value);
        }, onKeyDown: noop, onFocus: noop, onBlur: noop, onMouseEnter: noop, onMouseLeave: noop, popupAutoFocus: false, tagClosable: true, autoClearSearchValue: true });
    Select.displayName = 'Select';
    return Select;
}(Base));
export default polyfill(Select);
