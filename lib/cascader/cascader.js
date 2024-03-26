"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var lodash_clonedeep_1 = tslib_1.__importDefault(require("lodash.clonedeep"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var menu_1 = tslib_1.__importDefault(require("../menu"));
var util_1 = require("../util");
var menu_2 = tslib_1.__importDefault(require("./menu"));
var item_1 = tslib_1.__importDefault(require("./item"));
var utils_1 = require("./utils");
var bindCtx = util_1.func.bindCtx;
var pickOthers = util_1.obj.pickOthers;
var addClass = util_1.dom.addClass, removeClass = util_1.dom.removeClass, setStyle = util_1.dom.setStyle, getStyle = util_1.dom.getStyle;
// 数据打平
var flatDataSource = function (data, prefix, v2n, p2n) {
    if (prefix === void 0) { prefix = '0'; }
    if (v2n === void 0) { v2n = {}; }
    if (p2n === void 0) { p2n = {}; }
    data.forEach(function (item, index) {
        var value = item.value, children = item.children;
        var pos = "".concat(prefix, "-").concat(index);
        var newValue = String(value);
        item.value = newValue;
        v2n[newValue] = p2n[pos] = tslib_1.__assign(tslib_1.__assign({}, item), { pos: pos, _source: item });
        if (children && children.length) {
            flatDataSource(children, pos, v2n, p2n);
        }
    });
    return { v2n: v2n, p2n: p2n };
};
function preHandleData(data, immutable) {
    var _data = immutable ? (0, lodash_clonedeep_1.default)(data) : data;
    try {
        return flatDataSource(_data);
    }
    catch (err) {
        if ((err.message || '').match('Cannot assign to read only property')) {
            // eslint-disable-next-line no-console
            console.error(err.message, 'try to set immutable to true to allow immutable dataSource');
        }
        throw err;
    }
}
var getExpandedValue = function (v, _v2n, _p2n) {
    if (!v || !_v2n[v]) {
        return [];
    }
    var pos = _v2n[v].pos;
    if (pos.split('-').length === 2) {
        return [];
    }
    var expandedMap = {};
    Object.keys(_p2n).forEach(function (p) {
        if ((0, utils_1.isDescendantOrSelf)(p, pos) && p !== pos) {
            expandedMap[_p2n[p].value] = p;
        }
    });
    return Object.keys(expandedMap).sort(function (prev, next) {
        return expandedMap[prev].split('-').length - expandedMap[next].split('-').length;
    });
};
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
 * Cascader
 */
var Cascader = /** @class */ (function (_super) {
    tslib_1.__extends(Cascader, _super);
    function Cascader(props) {
        var _this = _super.call(this, props) || this;
        var defaultValue = props.defaultValue, value = props.value, defaultExpandedValue = props.defaultExpandedValue, expandedValue = props.expandedValue, dataSource = props.dataSource, multiple = props.multiple, checkStrictly = props.checkStrictly, canOnlyCheckLeaf = props.canOnlyCheckLeaf, loadData = props.loadData, immutable = props.immutable;
        var _a = preHandleData(dataSource, immutable), v2n = _a.v2n, p2n = _a.p2n;
        var normalizedValue = normalizeValue(typeof value === 'undefined' ? defaultValue : value);
        if (!loadData) {
            normalizedValue = normalizedValue.filter(function (v) { return v2n[v]; });
        }
        var realExpandedValue = typeof expandedValue === 'undefined'
            ? typeof defaultExpandedValue === 'undefined'
                ? getExpandedValue(normalizedValue[0], v2n, p2n)
                : normalizeValue(defaultExpandedValue)
            : normalizeValue(expandedValue);
        var st = {
            value: normalizedValue,
            expandedValue: realExpandedValue,
            isExpandedValueSetByAction: false,
        };
        if (multiple && !checkStrictly && !canOnlyCheckLeaf) {
            st.value = (0, utils_1.getAllCheckedValues)(st.value, v2n, p2n);
        }
        _this.lastExpandedValue = tslib_1.__spreadArray([], tslib_1.__read(st.expandedValue), false);
        _this.state = tslib_1.__assign(tslib_1.__assign({}, st), { _v2n: v2n, _p2n: p2n });
        bindCtx(_this, [
            'handleMouseLeave',
            'handleFocus',
            'handleFold',
            'getCascaderNode',
            'getCascaderInnerNode',
            'onBlur',
        ]);
        return _this;
    }
    Cascader.getDerivedStateFromProps = function (props, state) {
        var _a = preHandleData(props.dataSource, props.immutable), v2n = _a.v2n, p2n = _a.p2n;
        var states = {};
        if ('value' in props) {
            states.value = normalizeValue(props.value);
            if (!props.loadData) {
                states.value = states.value.filter(function (v) { return v2n[v]; });
            }
            var multiple = props.multiple, checkStrictly = props.checkStrictly, canOnlyCheckLeaf = props.canOnlyCheckLeaf;
            if (multiple && !checkStrictly && !canOnlyCheckLeaf) {
                states.value = (0, utils_1.getAllCheckedValues)(states.value, v2n, p2n);
            }
            if (
            // 非受控模式下，若已经通过用户事件调整了 expandedValue，则忽略下面的空值兜底处理
            !state.isExpandedValueSetByAction &&
                !state.expandedValue.length &&
                !('expandedValue' in props)) {
                states.expandedValue = getExpandedValue(states.value[0], v2n, p2n);
            }
        }
        if ('expandedValue' in props) {
            states.expandedValue = normalizeValue(props.expandedValue);
            // 受控模式则重置 isExpandedValueSetByAction
            states.isExpandedValueSetByAction = false;
        }
        return tslib_1.__assign(tslib_1.__assign({}, states), { _v2n: v2n, _p2n: p2n });
    };
    Cascader.prototype.componentDidMount = function () {
        this.setCascaderInnerWidth();
    };
    Cascader.prototype.componentDidUpdate = function () {
        this.setCascaderInnerWidth();
    };
    Cascader.prototype.getCascaderNode = function (ref) {
        this.cascader = ref;
    };
    Cascader.prototype.getCascaderInnerNode = function (ref) {
        this.cascaderInner = ref;
    };
    Cascader.prototype.setCascaderInnerWidth = function () {
        if (!this.cascaderInner) {
            return;
        }
        var menus = [].slice.call(this.cascaderInner.querySelectorAll(".".concat(this.props.prefix, "cascader-menu-wrapper")));
        if (menus.length === 0) {
            return;
        }
        var menusWidth = Math.ceil(menus.reduce(function (ret, menu) {
            return ret + Math.ceil(menu.getBoundingClientRect().width);
        }, 0));
        if (getStyle(this.cascaderInner, 'width') !== menusWidth) {
            setStyle(this.cascaderInner, 'width', menusWidth);
        }
        if (getStyle(this.cascader, 'display') === 'inline-block') {
            var hasRightBorderClass_1 = "".concat(this.props.prefix, "has-right-border");
            menus.forEach(function (menu) { return removeClass(menu, hasRightBorderClass_1); });
            if (this.cascader.clientWidth > menusWidth) {
                addClass(menus[menus.length - 1], hasRightBorderClass_1);
            }
        }
    };
    Cascader.prototype.flatValue = function (value) {
        return (0, utils_1.filterChildValue)(value, this.state._v2n, this.state._p2n);
    };
    Cascader.prototype.getValue = function (pos) {
        return this.state._p2n[pos] ? this.state._p2n[pos].value : null;
    };
    Cascader.prototype.getPos = function (value) {
        return this.state._v2n[value] ? this.state._v2n[value].pos : null;
    };
    Cascader.prototype.getData = function (value) {
        var _this = this;
        return value.map(function (v) { return _this.state._v2n[v]; });
    };
    Cascader.prototype.processValue = function (value, v, checked) {
        var index = value.indexOf(v);
        if (checked && index === -1) {
            value.push(v);
        }
        else if (!checked && index > -1) {
            value.splice(index, 1);
        }
    };
    Cascader.prototype.handleSelect = function (v, canExpand) {
        var _this = this;
        if (!(this.props.canOnlySelectLeaf && canExpand)) {
            var data = this.state._v2n[v];
            var nums_1 = data.pos.split('-');
            var selectedPath = nums_1.slice(1).reduce(function (ret, num, index) {
                var p = nums_1.slice(0, index + 2).join('-');
                ret.push(_this.state._p2n[p]);
                return ret;
            }, []);
            if (this.state.value[0] !== v) {
                if (!('value' in this.props)) {
                    this.setState({
                        value: [v],
                    });
                }
                if ('onChange' in this.props) {
                    this.props.onChange(v, data, {
                        selectedPath: selectedPath,
                    });
                }
            }
            if ('onSelect' in this.props) {
                this.props.onSelect(v, data, {
                    selectedPath: selectedPath,
                });
            }
        }
        if (canExpand) {
            if (!this.props.canOnlySelectLeaf) {
                this.lastExpandedValue = this.state.expandedValue.slice(0, -1);
            }
        }
        else {
            this.lastExpandedValue = tslib_1.__spreadArray([], tslib_1.__read(this.state.expandedValue), false);
        }
    };
    Cascader.prototype.handleCheck = function (v, checked) {
        var _this = this;
        var _a = this.props, checkStrictly = _a.checkStrictly, canOnlyCheckLeaf = _a.canOnlyCheckLeaf;
        var value = tslib_1.__spreadArray([], tslib_1.__read(this.state.value), false);
        if (checkStrictly || canOnlyCheckLeaf) {
            this.processValue(value, v, checked);
        }
        else {
            var pos = this.getPos(v);
            var ps = Object.keys(this.state._p2n);
            (0, utils_1.forEachEnableNode)(this.state._v2n[v], function (node) {
                if (node.checkable === false)
                    return;
                _this.processValue(value, node.value, checked);
            });
            var currentPos = pos;
            var nums = pos.split('-');
            for (var i = nums.length; i > 2; i--) {
                var parentCheck = true;
                var parentPos = nums.slice(0, i - 1).join('-');
                if (this.state._p2n[parentPos].disabled ||
                    this.state._p2n[parentPos].checkboxDisabled ||
                    this.state._p2n[parentPos].checkable === false) {
                    currentPos = parentPos;
                    continue;
                }
                var parentValue = this.state._p2n[parentPos].value;
                var parentChecked = value.indexOf(parentValue) > -1;
                if (!checked && !parentChecked) {
                    break;
                }
                for (var j = 0; j < ps.length; j++) {
                    var p = ps[j];
                    var pnode = this.state._p2n[p];
                    if ((0, utils_1.isSiblingOrSelf)(currentPos, p) &&
                        !pnode.disabled &&
                        !pnode.checkboxDisabled) {
                        var k = pnode.value;
                        if (pnode.checkable === false) {
                            if (!pnode.children || pnode.children.length === 0) {
                                continue;
                            }
                            for (var m = 0; m < pnode.children.length; m++) {
                                if (!pnode.children.every(function (child) { return (0, utils_1.isNodeChecked)(child, value); })) {
                                    parentCheck = false;
                                    break;
                                }
                            }
                        }
                        else if (value.indexOf(k) === -1) {
                            parentCheck = false;
                        }
                        if (!parentCheck)
                            break;
                    }
                }
                this.processValue(value, parentValue, parentCheck);
                currentPos = parentPos;
            }
        }
        if (!('value' in this.props)) {
            this.setState({
                value: value,
            });
        }
        if ('onChange' in this.props) {
            if (checkStrictly || canOnlyCheckLeaf) {
                var data = this.getData(value);
                this.props.onChange(value, data, {
                    checked: checked,
                    currentData: this.state._v2n[v],
                    checkedData: data,
                });
            }
            else {
                var flatValue = this.flatValue(value);
                var flatData = this.getData(flatValue);
                var checkedData = this.getData(value);
                var indeterminateValue = this.getIndeterminate(value);
                var indeterminateData = this.getData(indeterminateValue);
                this.props.onChange(flatValue, flatData, {
                    checked: checked,
                    currentData: this.state._v2n[v],
                    checkedData: checkedData,
                    indeterminateData: indeterminateData,
                });
            }
        }
        this.lastExpandedValue = tslib_1.__spreadArray([], tslib_1.__read(this.state.expandedValue), false);
    };
    Cascader.prototype.handleExpand = function (value, level, canExpand, focusedFirstChild) {
        var _this = this;
        var expandedValue = this.state.expandedValue;
        if (canExpand || expandedValue.length > level) {
            // FIXME 此处实现有 bug，state.expandedValue 被直接修改，并没有考虑受控非受控的情况
            if (canExpand) {
                expandedValue.splice(level, expandedValue.length - level, value);
            }
            else {
                expandedValue.splice(level);
            }
            var callback = function () {
                _this.setExpandValue(expandedValue, true);
                if (focusedFirstChild) {
                    var endExpandedValue = expandedValue[expandedValue.length - 1];
                    _this.setState({
                        focusedValue: _this.state._v2n[endExpandedValue].children[0].value,
                    });
                }
            };
            var loadData = this.props.loadData;
            if (canExpand && loadData) {
                var data = this.state._v2n[value];
                return loadData(data, data._source).then(callback);
            }
            else {
                return callback();
            }
        }
    };
    Cascader.prototype.handleMouseLeave = function () {
        this.setExpandValue(tslib_1.__spreadArray([], tslib_1.__read(this.lastExpandedValue), false), true);
    };
    Cascader.prototype.setExpandValue = function (expandedValue, isExpandedValueSetByAction) {
        if (isExpandedValueSetByAction === void 0) { isExpandedValueSetByAction = false; }
        if (!('expandedValue' in this.props)) {
            this.setState({
                expandedValue: expandedValue,
                isExpandedValueSetByAction: isExpandedValueSetByAction,
            });
        }
        if ('onExpand' in this.props) {
            this.props.onExpand(expandedValue);
        }
    };
    Cascader.prototype.getFirstFocusKeyByDataSource = function (dataSource) {
        if (!dataSource || dataSource.length === 0) {
            return '';
        }
        for (var i = 0; i < dataSource.length; i++) {
            if (dataSource[i] && !dataSource[i].disabled) {
                return dataSource[i].value;
            }
        }
        return '';
    };
    Cascader.prototype.getFirstFocusKeyByFilteredPaths = function (filteredPaths) {
        if (!filteredPaths || filteredPaths.length === 0) {
            return '';
        }
        for (var i = 0; i < filteredPaths.length; i++) {
            var path = filteredPaths[i];
            if (!path.some(function (item) { return item.disabled; })) {
                var lastItem = path[path.length - 1];
                return lastItem.value;
            }
        }
        return '';
    };
    Cascader.prototype.getFirstFocusKey = function () {
        var _a = this.props, dataSource = _a.dataSource, searchValue = _a.searchValue, filteredPaths = _a.filteredPaths;
        return !searchValue
            ? this.getFirstFocusKeyByDataSource(dataSource)
            : this.getFirstFocusKeyByFilteredPaths(filteredPaths);
    };
    Cascader.prototype.setFocusValue = function () {
        this.setState({
            focusedValue: this.getFirstFocusKey(),
        });
    };
    Cascader.prototype.handleFocus = function (focusedValue) {
        this.setState({
            focusedValue: focusedValue,
        });
    };
    Cascader.prototype.handleFold = function () {
        var expandedValue = this.state.expandedValue;
        if (expandedValue.length > 0) {
            this.setExpandValue(expandedValue.slice(0, -1), true);
        }
        this.setState({
            focusedValue: expandedValue[expandedValue.length - 1],
        });
    };
    Cascader.prototype.getIndeterminate = function (value) {
        var _this = this;
        var indeterminateValues = [];
        var poss = (0, utils_1.filterChildValue)(value
            .filter(function (v) { return !!_this.state._v2n[v]; })
            .filter(function (v) {
            return !_this.state._v2n[v].disabled &&
                !_this.state._v2n[v].checkboxDisabled &&
                _this.state._v2n[v].checkable !== false;
        }), this.state._v2n, this.state._p2n).map(function (v) { return _this.state._v2n[v].pos; });
        poss.forEach(function (pos) {
            var nums = pos.split('-');
            for (var i = nums.length; i > 2; i--) {
                var parentPos = nums.slice(0, i - 1).join('-');
                var parent_1 = _this.state._p2n[parentPos];
                if (parent_1.disabled || parent_1.checkboxDisabled)
                    break;
                var parentValue = parent_1.value;
                if (indeterminateValues.indexOf(parentValue) === -1) {
                    indeterminateValues.push(parentValue);
                }
            }
        });
        return indeterminateValues;
    };
    Cascader.prototype.onBlur = function (e) {
        this.setState({
            focusedValue: undefined,
        });
        this.props.onBlur && this.props.onBlur(e);
    };
    Cascader.prototype.renderMenu = function (data, level) {
        var _this = this;
        var _a = this.props, prefix = _a.prefix, multiple = _a.multiple, useVirtual = _a.useVirtual, checkStrictly = _a.checkStrictly, expandTriggerType = _a.expandTriggerType, loadData = _a.loadData, canOnlyCheckLeaf = _a.canOnlyCheckLeaf, listClassName = _a.listClassName, listStyle = _a.listStyle, itemRender = _a.itemRender;
        var _b = this.state, value = _b.value, expandedValue = _b.expandedValue, focusedValue = _b.focusedValue;
        return (react_1.default.createElement(menu_2.default, { key: level, prefix: prefix, useVirtual: useVirtual, className: listClassName, style: listStyle, focusedKey: focusedValue, onItemFocus: this.handleFocus, onBlur: this.onBlur }, data
            .map(function (item) {
            var disabled = !!item.disabled;
            var canExpand = (!!item.children && !!item.children.length) ||
                (!!loadData && !item.isLeaf);
            var expanded = expandedValue[level] === item.value;
            var props = {
                prefix: prefix,
                disabled: disabled,
                canExpand: canExpand,
                expanded: expanded,
                expandTriggerType: expandTriggerType,
                onExpand: _this.handleExpand.bind(_this, item.value, level, canExpand),
                onFold: _this.handleFold,
            };
            if ('title' in item) {
                props.title = item.title;
            }
            if (multiple) {
                props.checkable = !(canOnlyCheckLeaf && canExpand);
                props.checked = value.indexOf(item.value) > -1 || !!item.checked;
                props.indeterminate =
                    (checkStrictly || canOnlyCheckLeaf
                        ? false
                        : _this.indeterminate.indexOf(item.value) > -1) ||
                        !!item.indeterminate;
                props.checkboxDisabled = !!item.checkboxDisabled;
                props.onCheck = _this.handleCheck.bind(_this, item.value);
            }
            else {
                props.selected = value[0] === item.value;
                props.onSelect = _this.handleSelect.bind(_this, item.value, canExpand);
            }
            var itemContent = itemRender(item, props);
            if (itemContent === null) {
                return null;
            }
            return (react_1.default.createElement(item_1.default, tslib_1.__assign({ key: item.value }, props), itemContent));
        })
            .filter(function (v) { return v; })));
    };
    Cascader.prototype.renderMenus = function () {
        var dataSource = this.props.dataSource;
        var expandedValue = this.state.expandedValue;
        var menus = [];
        var data = dataSource;
        for (var i = 0; i <= expandedValue.length; i++) {
            if (!data) {
                break;
            }
            menus.push(this.renderMenu(data, i));
            var expandedItem = void 0;
            for (var j = 0; j < data.length; j++) {
                if (data[j].value === expandedValue[i]) {
                    expandedItem = data[j];
                    break;
                }
            }
            data = expandedItem ? expandedItem.children : null;
        }
        return menus;
    };
    Cascader.prototype.renderFilteredItem = function (path) {
        var _a = this.props, prefix = _a.prefix, resultRender = _a.resultRender, searchValue = _a.searchValue, multiple = _a.multiple;
        var value = this.state.value;
        var lastItem = path[path.length - 1];
        var Item;
        var props = {
            className: "".concat(prefix, "cascader-filtered-item"),
            disabled: path.some(function (item) { return item.disabled; }),
            children: resultRender(searchValue, path),
        };
        if (multiple) {
            Item = menu_1.default.CheckboxItem;
            var _b = this.props, checkStrictly = _b.checkStrictly, canOnlyCheckLeaf = _b.canOnlyCheckLeaf;
            props = tslib_1.__assign(tslib_1.__assign({}, props), { checked: value.indexOf(lastItem.value) > -1, indeterminate: !checkStrictly &&
                    !canOnlyCheckLeaf &&
                    this.indeterminate.indexOf(lastItem.value) > -1, checkboxDisabled: lastItem.checkboxDisabled, onChange: this.handleCheck.bind(this, lastItem.value) });
        }
        else {
            Item = menu_1.default.Item;
            props = tslib_1.__assign(tslib_1.__assign({}, props), { selected: value[0] === lastItem.value, onSelect: this.handleSelect.bind(this, lastItem.value, false) });
        }
        return react_1.default.createElement(Item, tslib_1.__assign({ key: lastItem.value }, props));
    };
    Cascader.prototype.renderFilteredList = function () {
        var _this = this;
        var _a = this.props, prefix = _a.prefix, filteredListStyle = _a.filteredListStyle, filteredPaths = _a.filteredPaths, _b = _a.focusable, focusable = _b === void 0 ? false : _b;
        var focusedValue = this.state.focusedValue;
        return (react_1.default.createElement(menu_1.default
        // 如果不设置为false， CascaderSelect 开启 showSearch后，弹窗展开时，光标无法到input上去，也无法输入.
        // TODO: set focusable=true in 2.x
        , { 
            // 如果不设置为false， CascaderSelect 开启 showSearch后，弹窗展开时，光标无法到input上去，也无法输入.
            // TODO: set focusable=true in 2.x
            focusable: focusable, focusedKey: focusedValue, onItemFocus: this.handleFocus, className: "".concat(prefix, "cascader-filtered-list"), style: filteredListStyle }, filteredPaths.map(function (path) { return _this.renderFilteredItem(path); })));
    };
    Cascader.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, rtl = _b.rtl, className = _b.className, expandTriggerType = _b.expandTriggerType, multiple = _b.multiple, dataSource = _b.dataSource, checkStrictly = _b.checkStrictly, canOnlyCheckLeaf = _b.canOnlyCheckLeaf, searchValue = _b.searchValue;
        // FIXME 这样做风险比较大，propTypes 如果不全，就会出现一些 div 接收不了的参数传导到 div
        var others = pickOthers(Cascader.propTypes, this.props);
        var value = this.state.value;
        if (rtl) {
            others.dir = 'rtl';
        }
        var props = tslib_1.__assign({ className: (0, classnames_1.default)((_a = {},
                _a["".concat(prefix, "cascader")] = true,
                _a.multiple = multiple,
                _a[className] = !!className,
                _a)), ref: 'cascader' }, others);
        if (expandTriggerType === 'hover') {
            props.onMouseLeave = this.handleMouseLeave;
        }
        if (multiple && !checkStrictly && !canOnlyCheckLeaf) {
            this.indeterminate = this.getIndeterminate(value);
        }
        return (react_1.default.createElement("div", tslib_1.__assign({}, props, { ref: this.getCascaderNode }), !searchValue ? (react_1.default.createElement("div", { className: "".concat(prefix, "cascader-inner"), ref: this.getCascaderInnerNode }, dataSource && dataSource.length ? this.renderMenus() : null)) : (this.renderFilteredList())));
    };
    Cascader.propTypes = {
        prefix: prop_types_1.default.string,
        rtl: prop_types_1.default.bool,
        pure: prop_types_1.default.bool,
        className: prop_types_1.default.string,
        dataSource: prop_types_1.default.arrayOf(prop_types_1.default.object),
        defaultValue: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.arrayOf(prop_types_1.default.string)]),
        value: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.arrayOf(prop_types_1.default.string)]),
        onChange: prop_types_1.default.func,
        onSelect: prop_types_1.default.func,
        defaultExpandedValue: prop_types_1.default.arrayOf(prop_types_1.default.string),
        expandedValue: prop_types_1.default.arrayOf(prop_types_1.default.string),
        expandTriggerType: prop_types_1.default.oneOf(['click', 'hover']),
        onExpand: prop_types_1.default.func,
        useVirtual: prop_types_1.default.bool,
        multiple: prop_types_1.default.bool,
        canOnlySelectLeaf: prop_types_1.default.bool,
        canOnlyCheckLeaf: prop_types_1.default.bool,
        checkStrictly: prop_types_1.default.bool,
        listStyle: prop_types_1.default.object,
        listClassName: prop_types_1.default.string,
        itemRender: prop_types_1.default.func,
        loadData: prop_types_1.default.func,
        searchValue: prop_types_1.default.string,
        onBlur: prop_types_1.default.func,
        filteredPaths: prop_types_1.default.array,
        filteredListStyle: prop_types_1.default.object,
        resultRender: prop_types_1.default.func,
        immutable: prop_types_1.default.bool,
    };
    Cascader.defaultProps = {
        prefix: 'next-',
        rtl: false,
        pure: false,
        dataSource: [],
        defaultValue: null,
        canOnlySelectLeaf: false,
        canOnlyCheckLeaf: false,
        expandTriggerType: 'click',
        multiple: false,
        useVirtual: false,
        checkStrictly: false,
        itemRender: function (item) { return item.label; },
        immutable: false,
    };
    return Cascader;
}(react_1.Component));
exports.default = (0, react_lifecycles_compat_1.polyfill)(Cascader);
