import { __assign, __extends, __read, __spreadArray } from "tslib";
import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import classNames from 'classnames';
import Select from '../select';
import Cascader from '../cascader';
import Menu from '../menu';
import { func, obj, dom, KEYCODE } from '../util';
import zhCN from '../locale/zh-cn';
import Overlay from '../overlay';
var Popup = Overlay.Popup;
var bindCtx = func.bindCtx;
var pickOthers = obj.pickOthers;
var getStyle = dom.getStyle;
var normalizeValue = function (value) {
    if (value) {
        if (Array.isArray(value)) {
            return value;
        }
        return [value];
    }
    return [];
};
/**
 * CascaderSelect
 */
var CascaderSelect = /** @class */ (function (_super) {
    __extends(CascaderSelect, _super);
    function CascaderSelect(props) {
        var _this = _super.call(this, props) || this;
        /**
         * 刷新值数据缓存，删除无效值
         * @param curValue - 当前值
         */
        _this.refreshValueDataCache = function (curValue) {
            if (curValue) {
                var valueArr_1 = Array.isArray(curValue) ? curValue : [curValue];
                valueArr_1.length &&
                    Object.keys(_this._valueDataCache).forEach(function (v) {
                        if (!valueArr_1.includes(v)) {
                            delete _this._valueDataCache[v];
                        }
                    });
            }
            else {
                _this._valueDataCache = {};
            }
        };
        _this.state = {
            value: normalizeValue('value' in props ? props.value : props.defaultValue),
            searchValue: '',
            visible: typeof props.visible === 'undefined' ? props.defaultVisible : props.visible,
        };
        // 缓存选中值数据
        _this._valueDataCache = {};
        bindCtx(_this, [
            'handleVisibleChange',
            'handleAfterOpen',
            'handleSelect',
            'handleChange',
            'handleClear',
            'handleRemove',
            'handleSearch',
            'getPopup',
            'saveSelectRef',
            'saveCascaderRef',
            'handleKeyDown',
        ]);
        return _this;
    }
    CascaderSelect.getDerivedStateFromProps = function (props) {
        var st = {};
        if ('value' in props) {
            st.value = normalizeValue(props.value);
        }
        if ('visible' in props) {
            st.visible = props.visible;
        }
        return st;
    };
    /**
     * 使组件获得焦点
     * @public
     */
    CascaderSelect.prototype.focus = function () {
        this.select && this.select.focusInput();
    };
    CascaderSelect.prototype.updateCache = function (dataSource) {
        var _this = this;
        this._v2n = {};
        this._p2n = {};
        var loop = function (data, prefix) {
            if (prefix === void 0) { prefix = '0'; }
            return data.forEach(function (item, index) {
                var value = item.value, children = item.children;
                var pos = "".concat(prefix, "-").concat(index);
                _this._v2n[value] = _this._p2n[pos] = __assign(__assign({}, item), { pos: pos });
                if (children && children.length) {
                    loop(children, pos);
                }
            });
        };
        loop(dataSource);
    };
    CascaderSelect.prototype.flatValue = function (value) {
        var _this = this;
        var getDepth = function (v) {
            var pos = _this.getPos(v);
            if (!pos) {
                return 0;
            }
            return pos.split('-').length;
        };
        var newValue = value.slice(0).sort(function (prev, next) {
            return getDepth(prev) - getDepth(next);
        });
        for (var i = 0; i < newValue.length; i++) {
            for (var j = 0; j < newValue.length; j++) {
                if (i !== j &&
                    this.isDescendantOrSelf(this.getPos(newValue[i]), this.getPos(newValue[j]))) {
                    newValue.splice(j, 1);
                    j--;
                }
            }
        }
        return newValue;
    };
    CascaderSelect.prototype.isDescendantOrSelf = function (currentPos, targetPos) {
        if (!currentPos || !targetPos) {
            return false;
        }
        var currentNums = currentPos.split('-');
        var targetNums = targetPos.split('-');
        return (currentNums.length <= targetNums.length &&
            currentNums.every(function (num, index) {
                return num === targetNums[index];
            }));
    };
    CascaderSelect.prototype.getValue = function (pos) {
        return this._p2n[pos] ? this._p2n[pos].value : null;
    };
    CascaderSelect.prototype.getPos = function (value) {
        return this._v2n[value] ? this._v2n[value].pos : null;
    };
    CascaderSelect.prototype.getData = function (value) {
        var _this = this;
        return value.map(function (v) { return _this._v2n[v] || _this._valueDataCache[v]; });
    };
    CascaderSelect.prototype.getLabelPath = function (data) {
        var _this = this;
        var nums = data.pos.split('-');
        return nums.slice(1).reduce(function (ret, num, index) {
            var p = nums.slice(0, index + 2).join('-');
            ret.push(_this._p2n[p].label);
            return ret;
        }, []);
    };
    CascaderSelect.prototype.getSingleData = function (value) {
        if (!value.length) {
            return null;
        }
        if (Array.isArray(value))
            value = value[0];
        var data = this._v2n[value];
        if (data) {
            var labelPath = this.getLabelPath(data);
            var displayRender = this.props.displayRender || (function (labels) { return labels.join(' / '); });
            data = __assign(__assign({}, data), { label: displayRender(labelPath, data) });
            this._valueDataCache[value] = data;
            this.refreshValueDataCache(value);
        }
        else {
            data = this._valueDataCache[value];
        }
        return (data || {
            value: value,
        });
    };
    CascaderSelect.prototype.getMultipleData = function (value) {
        var _this = this;
        if (!value.length) {
            return null;
        }
        var _a = this.props, checkStrictly = _a.checkStrictly, canOnlyCheckLeaf = _a.canOnlyCheckLeaf, displayRender = _a.displayRender;
        var flatValue = checkStrictly || canOnlyCheckLeaf ? value : this.flatValue(value);
        var data = flatValue.map(function (v) {
            var item = _this._v2n[v];
            if (item) {
                _this._valueDataCache[v] = item;
            }
            else {
                item = _this._valueDataCache[v];
            }
            return item || { value: v };
        });
        if (displayRender) {
            data = data.map(function (item) {
                if (!item.pos || !(item.value in _this._v2n)) {
                    return item;
                }
                var labelPath = _this.getLabelPath(item);
                var newItem = __assign(__assign({}, item), { label: displayRender(labelPath, item) });
                _this._valueDataCache[item.value] = newItem;
                return newItem;
            });
        }
        return data;
    };
    CascaderSelect.prototype.getIndeterminate = function (value) {
        var _this = this;
        var indeterminate = [];
        var positions = value.map(this.getPos.bind(this));
        positions.forEach(function (pos) {
            if (!pos) {
                return false;
            }
            var nums = pos.split('-');
            for (var i = nums.length; i > 2; i--) {
                var parentPos = nums.slice(0, i - 1).join('-');
                var parentValue = _this.getValue(parentPos);
                if (indeterminate.indexOf(parentValue) === -1) {
                    indeterminate.push(parentValue);
                }
            }
        });
        return indeterminate;
    };
    CascaderSelect.prototype.saveSelectRef = function (ref) {
        this.select = ref;
    };
    CascaderSelect.prototype.saveCascaderRef = function (ref) {
        this.cascader = ref;
    };
    CascaderSelect.prototype.completeValue = function (value) {
        var newValue = [];
        var flatValue = this.flatValue(value).reverse();
        var ps = Object.keys(this._p2n);
        for (var i = 0; i < ps.length; i++) {
            for (var j = 0; j < flatValue.length; j++) {
                var v = flatValue[j];
                if (this.isDescendantOrSelf(this.getPos(v), ps[i])) {
                    newValue.push(this.getValue(ps[i]));
                    ps.splice(i, 1);
                    i--;
                    break;
                }
            }
        }
        return newValue;
    };
    CascaderSelect.prototype.isLeaf = function (data) {
        return !((data.children && data.children.length) ||
            (!!this.props.loadData && !data.isLeaf));
    };
    CascaderSelect.prototype.handleVisibleChange = function (visible, type) {
        var _this = this;
        var searchValue = this.state.searchValue;
        if (!('visible' in this.props)) {
            this.setState({
                visible: visible,
            });
        }
        if (!visible && searchValue) {
            this.setState({
                searchValue: '',
            });
        }
        if (['fromCascader', 'keyboard'].indexOf(type) !== -1 && !visible) {
            // 这里需要延迟下，showSearch 的情况下通过手动设置 menuProps={{focusable: true}} 回车 focus 会有延迟
            setTimeout(function () { return _this.select.focusInput(); }, 0);
        }
        this.props.onVisibleChange(visible, type);
    };
    CascaderSelect.prototype.handleKeyDown = function (e) {
        var onKeyDown = this.props.onKeyDown;
        var visible = this.state.visible;
        if (onKeyDown) {
            onKeyDown(e);
        }
        if (!visible) {
            switch (e.keyCode) {
                case KEYCODE.UP:
                case KEYCODE.DOWN: {
                    e.preventDefault();
                    this.handleVisibleChange(true, 'keyboard');
                    break;
                }
                // no default
            }
            return;
        }
        switch (e.keyCode) {
            case KEYCODE.UP:
            case KEYCODE.DOWN:
                this.cascader.setFocusValue();
                e.preventDefault();
                break;
            default:
                break;
        }
    };
    CascaderSelect.prototype.getPopup = function (ref) {
        this.popup = ref;
        if (typeof this.props.popupProps.ref === 'function') {
            this.props.popupProps.ref(ref);
        }
    };
    CascaderSelect.prototype.handleAfterOpen = function () {
        if (!this.popup) {
            return;
        }
        var _a = this.props, prefix = _a.prefix, popupProps = _a.popupProps;
        var _b = popupProps.v2, v2 = _b === void 0 ? false : _b;
        if (!v2) {
            var dropDownNode = this.popup.getInstance().overlay.getInstance().getContentNode();
            var cascaderNode = dropDownNode.querySelector(".".concat(prefix, "cascader"));
            if (cascaderNode) {
                this.cascaderHeight = getStyle(cascaderNode, 'height');
            }
        }
        if (typeof popupProps.afterOpen === 'function') {
            popupProps.afterOpen();
        }
    };
    CascaderSelect.prototype.handleSelect = function (value, data) {
        var _a = this.props, multiple = _a.multiple, changeOnSelect = _a.changeOnSelect;
        var _b = this.state, visible = _b.visible, searchValue = _b.searchValue;
        if (!multiple && (!changeOnSelect || this.isLeaf(data) || !!searchValue)) {
            this.handleVisibleChange(!visible, 'fromCascader');
        }
    };
    CascaderSelect.prototype.handleChange = function (value, data, extra) {
        var _this = this;
        var _a = this.props, multiple = _a.multiple, onChange = _a.onChange, autoClearSearchValue = _a.autoClearSearchValue;
        var _b = this.state, searchValue = _b.searchValue, stateValue = _b.value;
        var st = {};
        if (multiple && stateValue && Array.isArray(stateValue)) {
            var noExistedValues_1 = stateValue.filter(function (v) { return !_this._v2n[v]; });
            if (noExistedValues_1.length > 0) {
                value = value.filter(function (v) {
                    return !(noExistedValues_1.indexOf(v) >= 0);
                });
            }
            value = __spreadArray(__spreadArray([], __read(noExistedValues_1), false), __read(value), false);
            // onChange 中的 data 参数也应该保留不存在的 value 的数据
            // 在 dataSource 异步加载的情况下，会出现 value 重复的现象，需要去重
            data = __spreadArray(__spreadArray([], __read(noExistedValues_1.map(function (v) { return _this._valueDataCache[v]; }).filter(function (v) { return v; })), false), __read(data), false).filter(function (current, index, arr) {
                return index === arr.indexOf(current);
            });
            // 更新缓存
            this.refreshValueDataCache(value);
        }
        if (!('value' in this.props)) {
            st.value = value;
        }
        if (searchValue && ((multiple && autoClearSearchValue) || !multiple)) {
            st.searchValue = '';
        }
        if (Object.keys(st).length) {
            this.setState(st);
        }
        if (onChange) {
            onChange(value, data, extra);
        }
        if (searchValue && this.select) {
            this.select.handleSearchClear();
        }
    };
    CascaderSelect.prototype.handleClear = function () {
        // 单选时点击清空按钮
        var _a = this.props, hasClear = _a.hasClear, multiple = _a.multiple, treeCheckable = _a.treeCheckable;
        if (hasClear && (!multiple || !treeCheckable)) {
            if (!('value' in this.props)) {
                this.setState({
                    value: [],
                });
            }
            this.props.onChange(null, null);
        }
    };
    CascaderSelect.prototype.handleRemove = function (currentData) {
        var currentValue = currentData.value;
        var value;
        var _a = this.props, multiple = _a.multiple, checkStrictly = _a.checkStrictly, onChange = _a.onChange;
        if (multiple) {
            value = __spreadArray([], __read(this.state.value), false);
            value.splice(value.indexOf(currentValue), 1);
            if (this.props.onChange) {
                var data = this.getData(value);
                var checked = false;
                if (checkStrictly) {
                    this.props.onChange(value, data, {
                        checked: checked,
                        currentData: currentData,
                        checkedData: data,
                    });
                }
                else {
                    var checkedValue = this.completeValue(value);
                    var checkedData = this.getData(checkedValue);
                    var indeterminateValue = this.getIndeterminate(value);
                    var indeterminateData = this.getData(indeterminateValue);
                    this.props.onChange(value, data, {
                        checked: checked,
                        currentData: currentData,
                        checkedData: checkedData,
                        indeterminateData: indeterminateData,
                    });
                }
            }
        }
        else {
            value = [];
            onChange(null, null);
        }
        if (!('value' in this.props)) {
            this.setState({
                value: value,
            });
        }
        this.refreshValueDataCache(value);
    };
    CascaderSelect.prototype.handleSearch = function (searchValue) {
        this.setState({
            searchValue: searchValue,
        });
        this.props.onSearch && this.props.onSearch(searchValue);
    };
    CascaderSelect.prototype.getPath = function (pos) {
        var items = [];
        var nums = pos.split('-');
        // @ts-expect-error nums 应该是一个数组，这里可能是想表达 nums 的长度为 2？
        if (nums === 2) {
            items.push(this._p2n[pos]);
        }
        else {
            for (var i = 1; i < nums.length; i++) {
                var p = nums.slice(0, i + 1).join('-');
                items.push(this._p2n[p]);
            }
        }
        return items;
    };
    CascaderSelect.prototype.filterItems = function () {
        var _this = this;
        var _a = this.props, multiple = _a.multiple, changeOnSelect = _a.changeOnSelect, canOnlyCheckLeaf = _a.canOnlyCheckLeaf, filter = _a.filter;
        var searchValue = this.state.searchValue;
        var items = Object.keys(this._p2n).map(function (p) { return _this._p2n[p]; });
        if ((!multiple && !changeOnSelect) || (multiple && canOnlyCheckLeaf)) {
            items = items.filter(function (item) { return !item.children || !item.children.length; });
        }
        return items.map(function (item) { return _this.getPath(item.pos); }).filter(function (path) { return filter(searchValue, path); });
    };
    CascaderSelect.prototype.renderNotFound = function () {
        var _a = this.props, prefix = _a.prefix, notFoundContent = _a.notFoundContent, locale = _a.locale;
        return (React.createElement(Menu, { className: "".concat(prefix, "cascader-select-not-found") },
            React.createElement(Menu.Item, null, notFoundContent || locale.notFoundContent)));
    };
    CascaderSelect.prototype.renderCascader = function () {
        var dataSource = this.props.dataSource;
        if (dataSource.length === 0) {
            return this.renderNotFound();
        }
        var searchValue = this.state.searchValue;
        var filteredPaths = [];
        if (searchValue) {
            filteredPaths = this.filterItems();
            if (filteredPaths.length === 0) {
                return this.renderNotFound();
            }
        }
        var _a = this.props, multiple = _a.multiple, useVirtual = _a.useVirtual, changeOnSelect = _a.changeOnSelect, checkStrictly = _a.checkStrictly, canOnlyCheckLeaf = _a.canOnlyCheckLeaf, defaultExpandedValue = _a.defaultExpandedValue, expandTriggerType = _a.expandTriggerType, onExpand = _a.onExpand, listStyle = _a.listStyle, listClassName = _a.listClassName, loadData = _a.loadData, showSearch = _a.showSearch, resultRender = _a.resultRender, readOnly = _a.readOnly, itemRender = _a.itemRender, immutable = _a.immutable, _b = _a.menuProps, menuProps = _b === void 0 ? {} : _b;
        var value = this.state.value;
        var props = {
            dataSource: dataSource,
            value: value,
            multiple: multiple,
            useVirtual: useVirtual,
            canOnlySelectLeaf: !changeOnSelect,
            checkStrictly: checkStrictly,
            canOnlyCheckLeaf: canOnlyCheckLeaf,
            defaultExpandedValue: defaultExpandedValue,
            expandTriggerType: expandTriggerType,
            ref: this.saveCascaderRef,
            onExpand: onExpand,
            listStyle: listStyle,
            listClassName: listClassName,
            loadData: loadData,
            itemRender: itemRender,
            immutable: immutable,
        };
        if ('expandedValue' in this.props) {
            props.expandedValue = this.props.expandedValue;
        }
        if (!readOnly) {
            props.onChange = this.handleChange;
            props.onSelect = this.handleSelect;
        }
        if (showSearch) {
            props.searchValue = searchValue;
            props.filteredPaths = filteredPaths;
            props.resultRender = resultRender;
            props.filteredListStyle = { height: this.cascaderHeight };
        }
        return React.createElement(Cascader, __assign({}, props, menuProps));
    };
    CascaderSelect.prototype.renderPopupContent = function () {
        var _a = this.props, prefix = _a.prefix, header = _a.header, footer = _a.footer;
        return (React.createElement("div", { className: "".concat(prefix, "cascader-select-dropdown") },
            header,
            this.renderCascader(),
            footer));
    };
    CascaderSelect.prototype.renderPreview = function (others) {
        var _a = this.props, prefix = _a.prefix, multiple = _a.multiple, className = _a.className, renderPreview = _a.renderPreview;
        var value = this.state.value;
        var previewCls = classNames(className, "".concat(prefix, "form-preview"));
        var items = (multiple ? this.getMultipleData(value) : this.getSingleData(value)) || [];
        if (!Array.isArray(items)) {
            items = [items];
        }
        if (typeof renderPreview === 'function') {
            return (React.createElement("div", __assign({}, others, { className: previewCls }), renderPreview(items, this.props)));
        }
        return (React.createElement("p", __assign({}, others, { className: previewCls }), items.map(function (_a) {
            var label = _a.label;
            return label;
        }).join(', ')));
    };
    CascaderSelect.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, size = _a.size, hasArrow = _a.hasArrow, hasBorder = _a.hasBorder, hasClear = _a.hasClear, label = _a.label, readOnly = _a.readOnly, placeholder = _a.placeholder, dataSource = _a.dataSource, disabled = _a.disabled, multiple = _a.multiple, className = _a.className, showSearch = _a.showSearch, popupStyle = _a.popupStyle, popupClassName = _a.popupClassName, popupContainer = _a.popupContainer, popupProps = _a.popupProps, followTrigger = _a.followTrigger, isPreview = _a.isPreview, resultAutoWidth = _a.resultAutoWidth;
        var _b = this.state, value = _b.value, searchValue = _b.searchValue, visible = _b.visible;
        var others = pickOthers(CascaderSelect.propTypes, this.props);
        // mode 应与 multiple api 保持一致
        if (multiple && 'mode' in others && others.mode !== 'multiple') {
            delete others.mode;
        }
        this.updateCache(dataSource);
        if (isPreview) {
            return this.renderPreview(others);
        }
        var popupContent = this.renderPopupContent();
        var props = {
            prefix: prefix,
            className: className,
            size: size,
            placeholder: placeholder,
            disabled: disabled,
            hasArrow: hasArrow,
            hasBorder: hasBorder,
            hasClear: hasClear,
            label: label,
            readOnly: readOnly,
            ref: this.saveSelectRef,
            autoWidth: false,
            mode: multiple ? 'multiple' : 'single',
            value: multiple ? this.getMultipleData(value) : this.getSingleData(value),
            onChange: this.handleClear,
            onRemove: this.handleRemove,
            visible: visible,
            onVisibleChange: this.handleVisibleChange,
            showSearch: showSearch,
            onSearch: this.handleSearch,
            onKeyDown: this.handleKeyDown,
            popupContent: popupContent,
            popupStyle: popupStyle,
            popupClassName: popupClassName,
            popupContainer: popupContainer,
            popupProps: popupProps,
            followTrigger: followTrigger,
        };
        if (!multiple) {
            // 单选模式 select 会强制 cache=true，会导致菜单展开状态的初始化不执行
            // 若用户没有手动设置 cache true，这里重置为 false
            if (!popupProps || !popupProps.cache) {
                props.popupProps = __assign(__assign({}, popupProps), { cache: false });
            }
        }
        if (showSearch) {
            props.popupProps = __assign(__assign({}, popupProps), { ref: this.getPopup, afterOpen: this.handleAfterOpen });
            props.autoWidth = resultAutoWidth && !!searchValue;
        }
        return React.createElement(Select, __assign({}, props, others));
    };
    CascaderSelect.displayName = 'CascaderSelect';
    CascaderSelect.propTypes = {
        prefix: PropTypes.string,
        pure: PropTypes.bool,
        className: PropTypes.string,
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        placeholder: PropTypes.string,
        disabled: PropTypes.bool,
        hasArrow: PropTypes.bool,
        hasBorder: PropTypes.bool,
        hasClear: PropTypes.bool,
        label: PropTypes.node,
        readOnly: PropTypes.bool,
        dataSource: PropTypes.arrayOf(PropTypes.object),
        defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
        onChange: PropTypes.func,
        defaultExpandedValue: PropTypes.arrayOf(PropTypes.string),
        expandedValue: PropTypes.arrayOf(PropTypes.string),
        expandTriggerType: PropTypes.oneOf(['click', 'hover']),
        onExpand: PropTypes.func,
        useVirtual: PropTypes.bool,
        multiple: PropTypes.bool,
        changeOnSelect: PropTypes.bool,
        canOnlyCheckLeaf: PropTypes.bool,
        checkStrictly: PropTypes.bool,
        listStyle: PropTypes.object,
        listClassName: PropTypes.string,
        displayRender: PropTypes.func,
        itemRender: PropTypes.func,
        showSearch: PropTypes.bool,
        filter: PropTypes.func,
        onSearch: PropTypes.func,
        resultRender: PropTypes.func,
        resultAutoWidth: PropTypes.bool,
        notFoundContent: PropTypes.node,
        locale: PropTypes.object,
        loadData: PropTypes.func,
        header: PropTypes.node,
        footer: PropTypes.node,
        defaultVisible: PropTypes.bool,
        visible: PropTypes.bool,
        onVisibleChange: PropTypes.func,
        popupStyle: PropTypes.object,
        popupClassName: PropTypes.string,
        popupContainer: PropTypes.any,
        popupProps: PropTypes.object,
        followTrigger: PropTypes.bool,
        isPreview: PropTypes.bool,
        renderPreview: PropTypes.func,
        immutable: PropTypes.bool,
        /**
         * 查询选中后清除查询条件
         */
        autoClearSearchValue: PropTypes.bool,
    };
    CascaderSelect.defaultProps = {
        prefix: 'next-',
        pure: false,
        size: 'medium',
        disabled: false,
        hasArrow: true,
        hasBorder: true,
        hasClear: false,
        dataSource: [],
        defaultValue: null,
        expandTriggerType: 'click',
        onExpand: function () { },
        useVirtual: false,
        multiple: false,
        changeOnSelect: false,
        canOnlyCheckLeaf: false,
        checkStrictly: false,
        showSearch: false,
        filter: function (searchValue, path) {
            return path.some(function (item) {
                return String(item.label).toLowerCase().indexOf(String(searchValue).toLowerCase()) > -1;
            });
        },
        resultRender: function (searchValue, path) {
            var parts = [];
            path.forEach(function (item, i) {
                var reExp = searchValue.replace(/[-.+*?^$()[\]{}|\\]/g, function (v) { return "\\".concat(v); });
                var re = new RegExp(reExp, 'gi');
                var others = item.label.split(re);
                var matches = item.label.match(re);
                others.forEach(function (other, j) {
                    if (other) {
                        parts.push(other);
                    }
                    if (j < others.length - 1) {
                        parts.push(React.createElement("em", { key: "".concat(i, "-").concat(j) }, matches[j]));
                    }
                });
                if (i < path.length - 1) {
                    parts.push(' / ');
                }
            });
            return React.createElement("span", null, parts);
        },
        resultAutoWidth: true,
        defaultVisible: false,
        onVisibleChange: function () { },
        popupProps: {},
        immutable: false,
        locale: zhCN.Select,
        autoClearSearchValue: false,
    };
    return CascaderSelect;
}(Component));
export default polyfill(CascaderSelect);
