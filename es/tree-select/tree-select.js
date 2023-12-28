import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React, { Component, Children, isValidElement, cloneElement } from 'react';
import { polyfill } from 'react-lifecycles-compat';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select from '../select';
import Tree from '../tree';
import { normalizeToArray, getAllCheckedKeys, filterChildKey, filterParentKey, isDescendantOrSelf, } from '../tree/view/util';
import { func, obj, KEYCODE, str } from '../util';
import zhCN from '../locale/zh-cn';
import { getValueDataSource, valueToSelectKey } from '../select/util';
var noop = function () { };
var TreeNode = Tree.Node;
var bindCtx = func.bindCtx;
var POS_REGEXP = /^\d+(-\d+){1,}$/;
var flatDataSource = function (props) {
    var _k2n = {};
    var _p2n = {};
    var _v2n = {};
    if ('dataSource' in props) {
        var loop_1 = function (data, prefix) {
            if (prefix === void 0) { prefix = '0'; }
            return data.map(function (item, index) {
                var value = item.value, children = item.children;
                var pos = "".concat(prefix, "-").concat(index);
                var key = item.key || pos;
                var newItem = __assign(__assign({}, item), { key: key, pos: pos });
                if (children && children.length) {
                    newItem.children = loop_1(children, pos);
                }
                _k2n[key] = _p2n[pos] = _v2n[value] = newItem;
                return newItem;
            });
        };
        loop_1(props.dataSource);
    }
    else if ('children' in props) {
        var loop_2 = function (children, prefix) {
            if (prefix === void 0) { prefix = '0'; }
            return Children.map(children, function (node, index) {
                if (!React.isValidElement(node)) {
                    return;
                }
                var _a = node.props, value = _a.value, children = _a.children;
                var pos = "".concat(prefix, "-").concat(index);
                var key = node.key || pos;
                var newItem = __assign(__assign({}, node.props), { key: key, pos: pos });
                if (children && Children.count(children)) {
                    newItem.children = loop_2(children, pos);
                }
                _k2n[key] = _p2n[pos] = _v2n[value] = newItem;
                return newItem;
            });
        };
        loop_2(props.children);
    }
    return { _k2n: _k2n, _p2n: _p2n, _v2n: _v2n };
};
var isSearched = function (label, searchedValue) {
    var labelString = '';
    searchedValue = String(searchedValue);
    var loop = function (arg) {
        if (isValidElement(arg) && arg.props.children) {
            Children.forEach(arg.props.children, loop);
        }
        else {
            labelString += arg;
        }
    };
    loop(label);
    if (labelString.length >= searchedValue.length &&
        labelString.toLowerCase().indexOf(searchedValue.toLowerCase()) > -1) {
        return true;
    }
    return false;
};
var getSearchKeys = function (searchedValue, _k2n, _p2n) {
    var searchedKeys = [];
    var retainedKeys = [];
    Object.keys(_k2n).forEach(function (k) {
        var _a = _k2n[k], label = _a.label, pos = _a.pos;
        if (isSearched(label, searchedValue)) {
            searchedKeys.push(k);
            var posArr_1 = pos.split('-');
            posArr_1.forEach(function (n, i) {
                if (i > 0) {
                    var p = posArr_1.slice(0, i + 1).join('-');
                    var kk = _p2n[p].key;
                    if (retainedKeys.indexOf(kk) === -1) {
                        retainedKeys.push(kk);
                    }
                }
            });
        }
    });
    return { searchedKeys: searchedKeys, retainedKeys: retainedKeys };
};
/**
 * TreeSelect
 */
var TreeSelect = /** @class */ (function (_super) {
    __extends(TreeSelect, _super);
    function TreeSelect(props, context) {
        var _this = _super.call(this, props, context) || this;
        var defaultVisible = props.defaultVisible, visible = props.visible, defaultValue = props.defaultValue, value = props.value;
        _this.state = __assign({ visible: typeof visible === 'undefined' ? defaultVisible : visible, value: normalizeToArray(typeof value === 'undefined' ? defaultValue : value), searchedValue: '', expandedKeys: [], searchedKeys: [], retainedKeys: [], autoExpandParent: false, 
            // map of value => item, includes value not exist in dataSource
            mapValueDS: {} }, flatDataSource(props));
        // init value/mapValueDS when defaultValue is not undefined
        if (_this.state.value !== undefined) {
            _this.state.mapValueDS = getValueDataSource(_this.state.value, _this.state.mapValueDS).mapValueDS;
            _this.state.value = _this.state.value.map(function (v) {
                return valueToSelectKey(v);
            });
        }
        bindCtx(_this, [
            'handleSelect',
            'handleCheck',
            'handleSearch',
            'handleSearchClear',
            'handleVisibleChange',
            'handleChange',
            'handleRemove',
            'handleExpand',
            'handleKeyDown',
            'saveTreeRef',
            'saveSelectRef',
            'renderMaxTagPlaceholder',
        ]);
        return _this;
    }
    TreeSelect.getDerivedStateFromProps = function (props, state) {
        var st = {};
        if ('value' in props) {
            var valueArray = normalizeToArray(props.value);
            // convert value to string[]
            st.value = valueArray.map(function (v) {
                return valueToSelectKey(v);
            });
            // re-calculate map
            st.mapValueDS = getValueDataSource(props.value, state.mapValueDS).mapValueDS;
        }
        if ('visible' in props) {
            st.visible = props.visible;
        }
        var _a = flatDataSource(props), _k2n = _a._k2n, _p2n = _a._p2n, _v2n = _a._v2n;
        if (props.showSearch && state.searchedValue) {
            var _b = getSearchKeys(state.searchedValue, _k2n, _p2n), searchedKeys = _b.searchedKeys, retainedKeys = _b.retainedKeys;
            st.searchedKeys = searchedKeys;
            st.retainedKeys = retainedKeys;
        }
        return __assign(__assign({}, st), { _k2n: _k2n, _p2n: _p2n, _v2n: _v2n });
    };
    TreeSelect.prototype.getKeysByValue = function (value) {
        var _this = this;
        return value.reduce(function (ret, v) {
            var k = _this.state._v2n[v] && _this.state._v2n[v].key;
            if (k) {
                ret.push(k);
            }
            return ret;
        }, []);
    };
    TreeSelect.prototype.getValueByKeys = function (keys) {
        var _this = this;
        return keys.map(function (k) { return _this.state._k2n[k].value; });
    };
    TreeSelect.prototype.getFullItemPath = function (item) {
        if (!item) {
            return [];
        }
        var pos = item.pos;
        if (typeof pos === 'string' && POS_REGEXP.test(pos)) {
            var _p2n_1 = this.state._p2n;
            var posArr_2 = pos.split('-');
            var fullPosArr = posArr_2.map(function (_, i) { return posArr_2.slice(0, i + 1).join('-'); }).slice(1);
            var itemArr = fullPosArr.map(function (pos) { return _p2n_1[pos]; });
            return itemArr;
        }
        return [item];
    };
    TreeSelect.prototype.getValueForSelect = function (value) {
        var treeCheckedStrategy = this.props.treeCheckedStrategy;
        var nonExistentValueKeys = this.getNonExistentValueKeys();
        var keys = this.getKeysByValue(value);
        keys = getAllCheckedKeys(keys, this.state._k2n, this.state._p2n);
        switch (treeCheckedStrategy) {
            case 'parent':
                keys = filterChildKey(keys, this.state._k2n, this.state._p2n);
                break;
            case 'child':
                keys = filterParentKey(keys, this.state._k2n, this.state._p2n);
                break;
            default:
                break;
        }
        var values = this.getValueByKeys(keys);
        return __spreadArray(__spreadArray([], __read(values), false), __read(nonExistentValueKeys), false);
    };
    TreeSelect.prototype.getData = function (value, forSelect) {
        var _this = this;
        var preserveNonExistentValue = this.props.preserveNonExistentValue;
        var mapValueDS = this.state.mapValueDS;
        var ret = value.reduce(function (ret, v) {
            var k = _this.state._v2n[v] && _this.state._v2n[v].key;
            if (k) {
                var _a = _this.state._k2n[k], label = _a.label, pos = _a.pos, disabled = _a.disabled, checkboxDisabled = _a.checkboxDisabled;
                var d = {
                    value: v,
                    label: label,
                    pos: pos,
                };
                if (forSelect) {
                    d.disabled = disabled || checkboxDisabled;
                }
                else {
                    d.key = k;
                }
                ret.push(d);
            }
            else if (preserveNonExistentValue) {
                // 需要保留 dataSource 中不存在的 value
                var item = mapValueDS[v];
                if (item) {
                    ret.push(item);
                }
            }
            return ret;
        }, []);
        return ret;
    };
    TreeSelect.prototype.getNonExistentValues = function () {
        var _this = this;
        var preserveNonExistentValue = this.props.preserveNonExistentValue;
        var value = this.state.value;
        if (!preserveNonExistentValue) {
            return [];
        }
        var nonExistentValues = value.filter(function (v) { return !_this.state._v2n[v]; });
        return nonExistentValues;
    };
    TreeSelect.prototype.getNonExistentValueKeys = function () {
        var nonExistentValues = this.getNonExistentValues();
        return nonExistentValues.map(function (v) {
            if (typeof v === 'object' && v.hasOwnProperty('value')) {
                return v.value;
            }
            return v;
        });
    };
    TreeSelect.prototype.saveTreeRef = function (ref) {
        this.tree = ref;
    };
    TreeSelect.prototype.saveSelectRef = function (ref) {
        this.select = ref;
    };
    TreeSelect.prototype.handleVisibleChange = function (visible, type) {
        if (!('visible' in this.props)) {
            this.setState({
                visible: visible,
            });
        }
        if (['fromTree', 'keyboard'].indexOf(type) !== -1 && !visible) {
            this.select.focusInput();
        }
        this.props.onVisibleChange(visible, type);
    };
    TreeSelect.prototype.handleSelect = function (selectedKeys, extra) {
        var _a = this.props, multiple = _a.multiple, onChange = _a.onChange, autoClearSearch = _a.autoClearSearch;
        var selected = extra.selected;
        if (multiple || selected) {
            var selectedValue = this.getValueByKeys(selectedKeys);
            var nonExistentValues = this.getNonExistentValues();
            var value = __spreadArray(__spreadArray([], __read(nonExistentValues), false), __read(selectedValue), false);
            if (!('value' in this.props)) {
                this.setState({
                    value: value,
                });
            }
            if (!multiple) {
                this.handleVisibleChange(false, 'fromTree');
            }
            var data = this.getData(value);
            var selectedData = this.getData(selectedValue);
            // 单选情况下，不返回 nonExistentValue，直接返回当前选择值，避免无法改选的问题
            multiple ? onChange(value, data) : onChange(selectedValue[0], selectedData[0]);
            // clear search value manually
            if (autoClearSearch) {
                this.select.handleSearchClear('select');
            }
        }
        else {
            this.handleVisibleChange(false, 'fromTree');
        }
    };
    TreeSelect.prototype.handleCheck = function (checkedKeys) {
        var _a = this.props, onChange = _a.onChange, autoClearSearch = _a.autoClearSearch;
        var value = this.getValueByKeys(checkedKeys);
        var nonExistentValues = this.getNonExistentValues();
        value = __spreadArray(__spreadArray([], __read(nonExistentValues), false), __read(value), false);
        if (!('value' in this.props)) {
            this.setState({
                value: value,
            });
        }
        onChange(value, this.getData(value));
        // clear search value manually
        if (autoClearSearch) {
            this.select.handleSearchClear('select');
        }
    };
    TreeSelect.prototype.handleRemove = function (removedItem) {
        var _this = this;
        var removedValue = removedItem.value;
        var _a = this.props, treeCheckable = _a.treeCheckable, treeCheckStrictly = _a.treeCheckStrictly, treeCheckedStrategy = _a.treeCheckedStrategy, onChange = _a.onChange;
        var value;
        if (
        // there's linkage relationship among nodes
        treeCheckable &&
            !treeCheckStrictly &&
            ['parent', 'all'].indexOf(treeCheckedStrategy) !== -1 &&
            // value exits in datasource
            this.state._v2n[removedValue]) {
            var removedPos_1 = this.state._v2n[removedValue].pos;
            value = this.state.value.filter(function (v) {
                var p = _this.state._v2n[v].pos;
                return !isDescendantOrSelf(removedPos_1, p);
            });
            var nums = removedPos_1.split('-');
            for (var i = nums.length; i > 2; i--) {
                var parentPos = nums.slice(0, i - 1).join('-');
                var parentValue = this.state._p2n[parentPos].value;
                var parentIndex = value.indexOf(parentValue);
                if (parentIndex > -1) {
                    value.splice(parentIndex, 1);
                }
                else {
                    break;
                }
            }
        }
        else {
            value = this.state.value.filter(function (v) { return v !== removedValue; });
        }
        if (!('value' in this.props)) {
            this.setState({
                value: value,
            });
        }
        var data = this.getData(value);
        onChange(value, data);
    };
    TreeSelect.prototype.handleSearch = function (searchedValue) {
        var _a = this.state, _k2n = _a._k2n, _p2n = _a._p2n;
        var _b = getSearchKeys(searchedValue, _k2n, _p2n), searchedKeys = _b.searchedKeys, retainedKeys = _b.retainedKeys;
        this.setState({
            searchedValue: searchedValue,
            expandedKeys: searchedKeys,
            searchedKeys: searchedKeys,
            retainedKeys: retainedKeys,
            autoExpandParent: true,
        });
        this.props.onSearch(searchedValue);
    };
    TreeSelect.prototype.handleSearchClear = function (triggerType) {
        this.setState({
            searchedValue: '',
            expandedKeys: [],
        });
        this.props.onSearchClear(triggerType);
    };
    TreeSelect.prototype.handleExpand = function (expandedKeys) {
        this.setState({
            expandedKeys: expandedKeys,
            autoExpandParent: false,
        });
    };
    TreeSelect.prototype.handleKeyDown = function (e) {
        var onKeyDown = this.props.onKeyDown;
        var visible = this.state.visible;
        if (onKeyDown) {
            onKeyDown(e);
        }
        if (!visible) {
            return;
        }
        switch (e.keyCode) {
            case KEYCODE.UP:
            case KEYCODE.DOWN:
                this.tree.setFocusKey();
                e.preventDefault();
                break;
            default:
                break;
        }
    };
    TreeSelect.prototype.handleChange = function (value, triggerType) {
        if (this.props.hasClear && triggerType === 'clear') {
            if (!('value' in this.props)) {
                this.setState({
                    value: [],
                });
            }
            this.props.onChange(null, null);
        }
    };
    TreeSelect.prototype.searchNodes = function (children) {
        var _a = this.state, searchedKeys = _a.searchedKeys, retainedKeys = _a.retainedKeys;
        var loop = function (children) {
            var retainedNodes = [];
            Children.forEach(children, function (child) {
                if (searchedKeys.indexOf(child.key) > -1) {
                    retainedNodes.push(child);
                }
                else if (retainedKeys.indexOf(child.key) > -1) {
                    var retainedNode = child.props.children
                        ? cloneElement(child, {}, loop(child.props.children))
                        : child;
                    retainedNodes.push(retainedNode);
                }
                else {
                    var hideNode = cloneElement(child, {
                        style: { display: 'none' },
                    });
                    retainedNodes.push(hideNode);
                }
            });
            return retainedNodes;
        };
        return loop(children);
    };
    TreeSelect.prototype.createNodesByData = function (data, searching) {
        var _this = this;
        var _a = this.state, searchedKeys = _a.searchedKeys, retainedKeys = _a.retainedKeys;
        var loop = function (data, isParentMatched, prefix) {
            if (prefix === void 0) { prefix = '0'; }
            var retainedNodes = [];
            data.forEach(function (item, index) {
                var children = item.children, others = __rest(item, ["children"]);
                var pos = "".concat(prefix, "-").concat(index);
                var key = _this.state._p2n[pos].key;
                var addNode = function (isParentMatched, hide) {
                    if (hide) {
                        others.style = { display: 'none' };
                    }
                    retainedNodes.push(React.createElement(TreeNode, __assign({}, others, { key: key }), children && children.length ? loop(children, isParentMatched, pos) : null));
                };
                if (searching) {
                    if (searchedKeys.indexOf(key) > -1 || isParentMatched) {
                        addNode(true);
                    }
                    else if (retainedKeys.indexOf(key) > -1) {
                        addNode(false);
                    }
                    else {
                        addNode(false, true);
                    }
                }
                else {
                    addNode();
                }
            });
            return retainedNodes;
        };
        return loop(data, false);
    };
    /*eslint-disable max-statements*/
    TreeSelect.prototype.renderPopupContent = function () {
        var prefix = this.props.prefix;
        var treeSelectPrefix = "".concat(prefix, "tree-select-");
        if (!this.state.visible) {
            return React.createElement("div", { className: "".concat(treeSelectPrefix, "dropdown") });
        }
        var _a = this.props, multiple = _a.multiple, treeCheckable = _a.treeCheckable, treeCheckStrictly = _a.treeCheckStrictly, treeCheckedStrategy = _a.treeCheckedStrategy, treeDefaultExpandAll = _a.treeDefaultExpandAll, treeDefaultExpandedKeys = _a.treeDefaultExpandedKeys, treeLoadData = _a.treeLoadData, _b = _a.treeProps, customTreeProps = _b === void 0 ? {} : _b, showSearch = _a.showSearch, filterLocal = _a.filterLocal, dataSource = _a.dataSource, children = _a.children, readOnly = _a.readOnly, notFoundContent = _a.notFoundContent, useVirtual = _a.useVirtual, clickToCheck = _a.clickToCheck;
        var _c = this.state, value = _c.value, searchedValue = _c.searchedValue, expandedKeys = _c.expandedKeys, autoExpandParent = _c.autoExpandParent, searchedKeys = _c.searchedKeys;
        var treeProps = {
            multiple: multiple,
            ref: this.saveTreeRef,
            loadData: treeLoadData,
            defaultExpandAll: treeDefaultExpandAll,
            defaultExpandedKeys: treeDefaultExpandedKeys,
            useVirtual: useVirtual,
            isNodeBlock: true,
            clickToCheck: clickToCheck,
        };
        // 使用虚拟滚动 设置默认高度
        if (useVirtual) {
            customTreeProps.style = __assign({ maxHeight: '260px', overflow: 'auto', boxSizing: 'border-box' }, customTreeProps.style);
        }
        var keys = this.getKeysByValue(value);
        if (treeCheckable) {
            treeProps.checkable = treeCheckable;
            treeProps.checkStrictly = treeCheckStrictly;
            treeProps.checkedStrategy = treeCheckStrictly ? 'all' : treeCheckedStrategy;
            treeProps.checkedKeys = keys;
            treeProps.selectable = !clickToCheck;
            if (!readOnly) {
                treeProps.onCheck = this.handleCheck;
            }
        }
        else {
            treeProps.selectedKeys = keys;
            if (!readOnly) {
                treeProps.onSelect = this.handleSelect;
            }
        }
        var notFound = false;
        var newChildren;
        if (filterLocal && showSearch && searchedValue) {
            treeProps.expandedKeys = expandedKeys;
            treeProps.autoExpandParent = autoExpandParent;
            treeProps.onExpand = this.handleExpand;
            treeProps.filterTreeNode = function (node) {
                return searchedKeys.indexOf(node.props.eventKey) > -1;
            };
            if (searchedKeys.length) {
                newChildren = dataSource ? this.createNodesByData(dataSource, true) : this.searchNodes(children);
            }
            else {
                notFound = true;
            }
        }
        else {
            // eslint-disable-next-line
            if (dataSource) {
                if (dataSource.length) {
                    newChildren = this.createNodesByData(dataSource);
                }
                else {
                    notFound = true;
                }
            }
            else {
                // eslint-disable-next-line
                if (Children.count(children)) {
                    newChildren = children;
                }
                else {
                    notFound = true;
                }
            }
        }
        var contentClass = "".concat(treeSelectPrefix, "dropdown-content");
        return (React.createElement("div", { className: "".concat(treeSelectPrefix, "dropdown") }, notFound ? (React.createElement("div", { className: "".concat(treeSelectPrefix, "not-found contentClass") }, notFoundContent)) : (React.createElement(Tree, __assign({}, treeProps, customTreeProps, { className: contentClass }), newChildren))));
    };
    TreeSelect.prototype.renderPreview = function (data, others) {
        var _a = this.props, prefix = _a.prefix, className = _a.className, renderPreview = _a.renderPreview;
        var previewCls = classNames(className, "".concat(prefix, "form-preview"));
        var items = data && !Array.isArray(data) ? [data] : data;
        if (typeof renderPreview === 'function') {
            return (React.createElement("div", __assign({}, others, { className: previewCls }), renderPreview(items, this.props)));
        }
        return (React.createElement("p", __assign({}, others, { className: previewCls }), items && items.map(function (_a) {
            var label = _a.label;
            return label;
        }).join(', ')));
    };
    /**
     * TreeSelect 无法直接使用 Select 的 maxTagPlaceholder 逻辑
     * Select 的 totalValue 是所有 leaf 节点，TreeSelect 的 totalValue 受 treeCheckedStrategy 和 treeCheckStrictly 影响
     *
     * treeCheckStrictly = true: totalValue 为所有节点
     *
     * treeCheckStrictly = false: 根据 treeCheckedStrategy 判断
     *   treeCheckedStrategy = 'all': totalValue 为所有节点
     *   treeCheckedStrategy = 'parent': totalValue 无意义，不返回
     *   treeCheckedStrategy = 'child': totalValue 为所有 leaf 节点
     */
    TreeSelect.prototype.renderMaxTagPlaceholder = function (value, totalValue) {
        // 这里的 totalValue 为所有 leaf 节点
        var _a = this.props, treeCheckStrictly = _a.treeCheckStrictly, maxTagPlaceholder = _a.maxTagPlaceholder, treeCheckedStrategy = _a.treeCheckedStrategy, locale = _a.locale;
        var _v2n = this.state._v2n;
        var treeSelectTotalValue = totalValue; // all the leaf nodes
        // calculate total value
        if (treeCheckStrictly) {
            // all the nodes
            treeSelectTotalValue = obj.values(_v2n);
        }
        else if (treeCheckedStrategy === 'all') {
            // all
            treeSelectTotalValue = obj.values(_v2n);
        }
        else if (treeCheckedStrategy === 'parent') {
            // totalValue is pointless when treeCheckedStrategy = 'parent'
            treeSelectTotalValue = undefined;
        }
        // custom render function
        if (maxTagPlaceholder) {
            return maxTagPlaceholder(value, treeSelectTotalValue);
        }
        // default render function
        if (treeCheckedStrategy === 'parent') {
            // don't show totalValue when treeCheckedStrategy = 'parent'
            return "".concat(str.template(locale.shortMaxTagPlaceholder, {
                selected: value.length,
            }));
        }
        return "".concat(str.template(locale.maxTagPlaceholder, {
            selected: value.length,
            total: treeSelectTotalValue.length,
        }));
    };
    /*eslint-enable*/
    TreeSelect.prototype.render = function () {
        var _this = this;
        var _a = this.props, prefix = _a.prefix, size = _a.size, placeholder = _a.placeholder, disabled = _a.disabled, hasArrow = _a.hasArrow, hasBorder = _a.hasBorder, hasClear = _a.hasClear, label = _a.label, readOnly = _a.readOnly, autoWidth = _a.autoWidth, popupStyle = _a.popupStyle, popupClassName = _a.popupClassName, showSearch = _a.showSearch, multiple = _a.multiple, treeCheckable = _a.treeCheckable, treeCheckStrictly = _a.treeCheckStrictly, className = _a.className, popupContainer = _a.popupContainer, popupProps = _a.popupProps, followTrigger = _a.followTrigger, isPreview = _a.isPreview, dataSource = _a.dataSource, tagInline = _a.tagInline, valueRender = _a.valueRender;
        var others = obj.pickOthers(Object.keys(TreeSelect.propTypes), this.props);
        var _b = this.state, value = _b.value, visible = _b.visible;
        var valueRenderProps = typeof valueRender === 'function'
            ? {
                valueRender: function (item) {
                    return valueRender(item, _this.getFullItemPath(item));
                },
            }
            : undefined;
        // if (non-leaf 节点可选 & 父子节点选中状态需要联动)，需要额外计算父子节点间的联动关系
        var valueForSelect = treeCheckable && !treeCheckStrictly ? this.getValueForSelect(value) : value;
        var data = this.getData(valueForSelect, true);
        if (!multiple && !treeCheckable) {
            data = data[0];
        }
        if (isPreview) {
            return this.renderPreview(data, others);
        }
        return (React.createElement(Select, __assign({ prefix: prefix, className: className, size: size, hasBorder: hasBorder, hasArrow: hasArrow, hasClear: hasClear, placeholder: placeholder, disabled: disabled, autoWidth: autoWidth, label: label, readOnly: readOnly, ref: this.saveSelectRef, dataSource: dataSource, value: data, onChange: this.handleChange, visible: visible, onVisibleChange: this.handleVisibleChange, showSearch: showSearch, onSearch: this.handleSearch, onSearchClear: this.handleSearchClear, popupContainer: popupContainer, popupStyle: popupStyle, popupClassName: popupClassName, popupProps: popupProps, followTrigger: followTrigger, tagInline: tagInline, maxTagPlaceholder: this.renderMaxTagPlaceholder }, valueRenderProps, others, { onRemove: this.handleRemove, onKeyDown: this.handleKeyDown, popupContent: this.renderPopupContent(), mode: treeCheckable || multiple ? 'multiple' : 'single' })));
    };
    TreeSelect.propTypes = {
        prefix: PropTypes.string,
        pure: PropTypes.bool,
        locale: PropTypes.object,
        className: PropTypes.string,
        /**
         * 树节点
         */
        children: PropTypes.node,
        /**
         * 选择框大小
         */
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        /**
         * 选择框占位符
         */
        placeholder: PropTypes.string,
        /**
         * 是否禁用
         */
        disabled: PropTypes.bool,
        /**
         * 是否有下拉箭头
         */
        hasArrow: PropTypes.bool,
        /**
         * 是否有边框
         */
        hasBorder: PropTypes.bool,
        /**
         * 是否有清空按钮
         */
        hasClear: PropTypes.bool,
        /**
         * 自定义内联 label
         */
        label: PropTypes.node,
        /**
         * 是否只读，只读模式下可以展开弹层但不能选择
         */
        readOnly: PropTypes.bool,
        /**
         * 下拉框是否与选择器对齐
         */
        autoWidth: PropTypes.bool,
        /**
         * 数据源，该属性优先级高于 children
         */
        dataSource: PropTypes.arrayOf(PropTypes.object),
        /**
         * value/defaultValue 在 dataSource 中不存在时，是否展示
         * @version 1.25
         */
        preserveNonExistentValue: PropTypes.bool,
        /**
         * （受控）当前值
         */
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.arrayOf(PropTypes.any)]),
        /**
         * （非受控）默认值
         */
        defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.arrayOf(PropTypes.any)]),
        /**
         * 选中值改变时触发的回调函数
         * @param {String|Array} value 选中的值，单选时返回单个值，多选时返回数组
         * @param {Object|Array} data 选中的数据，包括 value, label, pos, key属性，单选时返回单个值，多选时返回数组，父子节点选中关联时，同时选中，只返回父节点
         */
        onChange: PropTypes.func,
        /**
         * 是否一行显示，仅在 multiple 和 treeCheckable 为 true 时生效
         * @version 1.25
         */
        tagInline: PropTypes.bool,
        /**
         * 隐藏多余 tag 时显示的内容，在 tagInline 生效时起作用
         * @param {Object[]} selectedValues 当前已选中的元素
         * @param {Object[]} totalValues 总待选元素
         * @returns {reactNode}
         * @version 1.25
         */
        maxTagPlaceholder: PropTypes.func,
        /**
         * 选择时是否自动清空 searchValue
         * @version 1.26
         */
        autoClearSearch: PropTypes.bool,
        /**
         * 是否显示搜索框
         */
        showSearch: PropTypes.bool,
        /**
         * 	是否使用本地过滤，在数据源为远程的时候需要关闭此项
         */
        filterLocal: PropTypes.bool,
        /**
         * 在搜索框中输入时触发的回调函数
         * @param {String} keyword 输入的关键字
         */
        onSearch: PropTypes.func,
        onSearchClear: PropTypes.func,
        /**
         * 无数据时显示内容
         */
        notFoundContent: PropTypes.node,
        /**
         * 是否支持多选
         */
        multiple: PropTypes.bool,
        /**
         * 下拉框中的树是否支持勾选节点的复选框
         */
        treeCheckable: PropTypes.bool,
        /**
         * 下拉框中的树勾选节点复选框是否完全受控（父子节点选中状态不再关联）
         */
        treeCheckStrictly: PropTypes.bool,
        /**
         * 定义选中时回填的方式
         * @enumdesc 返回所有选中的节点, 父子节点都选中时只返回父节点, 父子节点都选中时只返回子节点
         */
        treeCheckedStrategy: PropTypes.oneOf(['all', 'parent', 'child']),
        /**
         * 下拉框中的树是否默认展开所有节点
         */
        treeDefaultExpandAll: PropTypes.bool,
        /**
         * 下拉框中的树默认展开节点key的数组
         */
        treeDefaultExpandedKeys: PropTypes.arrayOf(PropTypes.string),
        /**
         * 下拉框中的树异步加载数据的函数，使用请参考[Tree的异步加载数据Demo](https://fusion.design/pc/component/tree?themeid=2#dynamic-container)
         * @param {ReactElement} node 被点击展开的节点
         */
        treeLoadData: PropTypes.func,
        /**
         * 透传到 Tree 的属性对象
         */
        treeProps: PropTypes.object,
        /**
         * 初始下拉框是否显示
         */
        defaultVisible: PropTypes.bool,
        /**
         * 当前下拉框是否显示
         */
        visible: PropTypes.bool,
        /**
         * 下拉框显示或关闭时触发事件的回调函数
         * @param {Boolean} visible 是否显示
         * @param {String} type 触发显示关闭的操作类型
         */
        onVisibleChange: PropTypes.func,
        /**
         * 下拉框自定义样式对象
         */
        popupStyle: PropTypes.object,
        /**
         * 下拉框样式自定义类名
         */
        popupClassName: PropTypes.string,
        /**
         * 下拉框挂载的容器节点
         */
        popupContainer: PropTypes.any,
        /**
         * 透传到 Popup 的属性对象
         */
        popupProps: PropTypes.object,
        /**
         * 是否跟随滚动
         */
        followTrigger: PropTypes.bool,
        /**
         * 是否为预览态
         */
        isPreview: PropTypes.bool,
        /**
         * 预览态模式下渲染的内容
         * @param {Array<data>} value 选择值 { label: , value:}
         */
        renderPreview: PropTypes.func,
        /**
         * 是否开启虚拟滚动
         */
        useVirtual: PropTypes.bool,
        /**
         * 是否是不可变数据
         * @version 1.23
         */
        immutable: PropTypes.bool,
        /**
         * 点击文本是否可以勾选
         */
        clickToCheck: PropTypes.bool,
        /**
         * 渲染 Select 展现内容的方法
         * @param {Object} item 渲染节点的item
         * @param {Object[]} itemPaths item的全路径数组
         * @return {ReactNode} 展现内容
         * @default item => `item.label || item.value`
         */
        valueRender: PropTypes.func,
    };
    TreeSelect.defaultProps = {
        prefix: 'next-',
        pure: false,
        locale: zhCN.TreeSelect,
        size: 'medium',
        disabled: false,
        hasArrow: true,
        hasBorder: true,
        hasClear: false,
        autoWidth: true,
        defaultValue: null,
        onChange: noop,
        tagInline: false,
        autoClearSearch: true,
        showSearch: false,
        filterLocal: true,
        onSearch: noop,
        onSearchClear: noop,
        notFoundContent: 'Not Found',
        multiple: false,
        treeCheckable: false,
        treeCheckStrictly: false,
        treeCheckedStrategy: 'parent',
        treeDefaultExpandAll: false,
        treeDefaultExpandedKeys: [],
        treeProps: {},
        defaultVisible: false,
        onVisibleChange: noop,
        useVirtual: false,
        /**
         * TODO
         * 目前 select/cascade select 是默认支持的，在 2.x 版本中 tree-select 也将默认支持
         */
        preserveNonExistentValue: false,
        clickToCheck: false,
    };
    return TreeSelect;
}(Component));
TreeSelect.Node = TreeNode;
export default polyfill(TreeSelect);
