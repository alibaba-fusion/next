"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var select_1 = tslib_1.__importDefault(require("../select"));
var tree_1 = tslib_1.__importDefault(require("../tree"));
var util_1 = require("../tree/view/util");
var util_2 = require("../util");
var zh_cn_1 = tslib_1.__importDefault(require("../locale/zh-cn"));
var util_3 = require("../select/util");
var noop = function () { };
var TreeNode = tree_1.default.Node;
var bindCtx = util_2.func.bindCtx;
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
                var newItem = tslib_1.__assign(tslib_1.__assign({}, item), { key: key, pos: pos });
                if (children && children.length) {
                    newItem.children = loop_1(children, pos);
                }
                // When null and undefined are used as keys of an object, they will be converted to the string type
                _k2n[key] = _p2n[pos] = _v2n[value] = newItem;
                return newItem;
            });
        };
        loop_1(props.dataSource);
    }
    else if ('children' in props) {
        var loop_2 = function (children, prefix) {
            if (prefix === void 0) { prefix = '0'; }
            return react_1.Children.map(children, function (node, index) {
                if (!(0, react_1.isValidElement)(node)) {
                    return;
                }
                var _a = node.props, value = _a.value, children = _a.children;
                var pos = "".concat(prefix, "-").concat(index);
                var key = node.key || pos;
                var newItem = tslib_1.__assign(tslib_1.__assign({}, node.props), { key: key, pos: pos });
                if (children && react_1.Children.count(children)) {
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
        if ((0, react_1.isValidElement)(arg) && arg.props.children) {
            react_1.Children.forEach(arg.props.children, loop);
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
    tslib_1.__extends(TreeSelect, _super);
    function TreeSelect(props, context) {
        var _this = _super.call(this, props, context) || this;
        var defaultVisible = props.defaultVisible, visible = props.visible, defaultValue = props.defaultValue, value = props.value;
        _this.state = tslib_1.__assign({ visible: typeof visible === 'undefined' ? defaultVisible : visible, value: (0, util_1.normalizeToArray)(typeof value === 'undefined' ? defaultValue : value), searchedValue: '', expandedKeys: [], searchedKeys: [], retainedKeys: [], autoExpandParent: false, 
            // map of value => item, includes value not exist in dataSource
            mapValueDS: {} }, flatDataSource(props));
        // init value/mapValueDS when defaultValue is not undefined
        if (_this.state.value !== undefined) {
            // @ts-expect-error Since `this.state` cannot be reassigned, use `@ts-expect-error` temporarily
            _this.state.mapValueDS = (0, util_3.getValueDataSource)(_this.state.value, _this.state.mapValueDS).mapValueDS;
            // @ts-expect-error Since `this.state` cannot be reassigned, use `@ts-expect-error` temporarily
            _this.state.value = _this.state.value.map(function (v) {
                return (0, util_3.valueToSelectKey)(v);
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
            var valueArray = (0, util_1.normalizeToArray)(props.value);
            // convert value to string[]
            st.value = valueArray.map(function (v) {
                return (0, util_3.valueToSelectKey)(v);
            });
            // re-calculate map
            st.mapValueDS = (0, util_3.getValueDataSource)(props.value, state.mapValueDS).mapValueDS;
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
        return tslib_1.__assign(tslib_1.__assign({}, st), { _k2n: _k2n, _p2n: _p2n, _v2n: _v2n });
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
        keys = (0, util_1.getAllCheckedKeys)(keys, this.state._k2n, this.state._p2n);
        switch (treeCheckedStrategy) {
            case 'parent':
                keys = (0, util_1.filterChildKey)(keys, this.state._k2n, this.state._p2n);
                break;
            case 'child':
                keys = (0, util_1.filterParentKey)(keys, this.state._k2n, this.state._p2n);
                break;
            default:
                break;
        }
        var values = this.getValueByKeys(keys);
        return tslib_1.__spreadArray(tslib_1.__spreadArray([], tslib_1.__read(values), false), tslib_1.__read(nonExistentValueKeys), false);
    };
    TreeSelect.prototype.getData = function (value, forSelect) {
        var _this = this;
        var preserveNonExistentValue = this.props.preserveNonExistentValue;
        var mapValueDS = this.state.mapValueDS;
        var ret = value.reduce(function (ret, v) {
            var k = _this.state._v2n[v] && _this.state._v2n[v].key;
            if (k) {
                var _a = _this.state._k2n[k], label = _a.label, pos = _a.pos, disabled = _a.disabled, checkboxDisabled = _a.checkboxDisabled, children = _a.children, rests = tslib_1.__rest(_a, ["label", "pos", "disabled", "checkboxDisabled", "children"]);
                var d = tslib_1.__assign(tslib_1.__assign({}, rests), { value: v, label: label, pos: pos });
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
                // @ts-expect-error v must not be object
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
    TreeSelect.prototype.triggerOnChange = function (value, data) {
        var _a = this.props, useDetailValue = _a.useDetailValue, onChange = _a.onChange;
        onChange(useDetailValue ? data : value, data);
    };
    TreeSelect.prototype.handleSelect = function (selectedKeys, extra) {
        var _a = this.props, multiple = _a.multiple, autoClearSearch = _a.autoClearSearch;
        var selected = extra.selected;
        if (multiple || selected) {
            var selectedValue = this.getValueByKeys(selectedKeys);
            var nonExistentValues = this.getNonExistentValues();
            var value = tslib_1.__spreadArray(tslib_1.__spreadArray([], tslib_1.__read(nonExistentValues), false), tslib_1.__read(selectedValue), false);
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
            multiple
                ? this.triggerOnChange(value, data)
                : this.triggerOnChange(selectedValue[0], selectedData[0]);
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
        var autoClearSearch = this.props.autoClearSearch;
        var value = this.getValueByKeys(checkedKeys);
        var nonExistentValues = this.getNonExistentValues();
        value = tslib_1.__spreadArray(tslib_1.__spreadArray([], tslib_1.__read(nonExistentValues), false), tslib_1.__read(value), false);
        if (!('value' in this.props)) {
            this.setState({
                value: value,
            });
        }
        this.triggerOnChange(value, this.getData(value));
        // clear search value manually
        if (autoClearSearch) {
            this.select.handleSearchClear('select');
        }
    };
    TreeSelect.prototype.handleRemove = function (removedItem) {
        var _this = this;
        var removedValue = removedItem.value;
        var _a = this.props, treeCheckable = _a.treeCheckable, treeCheckStrictly = _a.treeCheckStrictly, treeCheckedStrategy = _a.treeCheckedStrategy;
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
                return !(0, util_1.isDescendantOrSelf)(removedPos_1, p);
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
        this.triggerOnChange(value, data);
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
            case util_2.KEYCODE.UP:
            case util_2.KEYCODE.DOWN:
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
            this.triggerOnChange(null, null);
        }
    };
    TreeSelect.prototype.searchNodes = function (children) {
        var _a = this.state, searchedKeys = _a.searchedKeys, retainedKeys = _a.retainedKeys;
        var loop = function (children) {
            var retainedNodes = [];
            react_1.Children.forEach(children, function (child) {
                if (searchedKeys.indexOf(child.key) > -1) {
                    retainedNodes.push(child);
                }
                else if (retainedKeys.indexOf(child.key) > -1) {
                    var retainedNode = child.props.children
                        ? (0, react_1.cloneElement)(child, {}, loop(child.props.children))
                        : child;
                    retainedNodes.push(retainedNode);
                }
                else {
                    var hideNode = (0, react_1.cloneElement)(child, {
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
                var _a = item, children = _a.children, others = tslib_1.__rest(_a, ["children"]);
                var pos = "".concat(prefix, "-").concat(index);
                var key = _this.state._p2n[pos].key;
                var addNode = function (isParentMatched, hide) {
                    if (hide) {
                        others.style = { display: 'none' };
                    }
                    retainedNodes.push(react_1.default.createElement(TreeNode, tslib_1.__assign({}, others, { key: key }), children && children.length
                        ? loop(children, isParentMatched, pos)
                        : null));
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
            return react_1.default.createElement("div", { className: "".concat(treeSelectPrefix, "dropdown") });
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
            customTreeProps.style = tslib_1.__assign({ maxHeight: '260px', overflow: 'auto', boxSizing: 'border-box' }, customTreeProps.style);
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
                newChildren = dataSource
                    ? this.createNodesByData(dataSource, true)
                    : this.searchNodes(children);
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
                if (react_1.Children.count(children)) {
                    newChildren = children;
                }
                else {
                    notFound = true;
                }
            }
        }
        var contentClass = "".concat(treeSelectPrefix, "dropdown-content");
        return (react_1.default.createElement("div", { className: "".concat(treeSelectPrefix, "dropdown") }, notFound ? (react_1.default.createElement("div", { className: "".concat(treeSelectPrefix, "not-found contentClass") }, notFoundContent)) : (react_1.default.createElement(tree_1.default, tslib_1.__assign({}, treeProps, customTreeProps, { className: contentClass }), newChildren))));
    };
    TreeSelect.prototype.renderPreview = function (data, others) {
        var _a = this.props, prefix = _a.prefix, className = _a.className, renderPreview = _a.renderPreview;
        var previewCls = (0, classnames_1.default)(className, "".concat(prefix, "form-preview"));
        var items = data && !Array.isArray(data) ? [data] : data;
        if (typeof renderPreview === 'function') {
            return (react_1.default.createElement("div", tslib_1.__assign({}, others, { className: previewCls }), renderPreview(items, this.props)));
        }
        return (react_1.default.createElement("p", tslib_1.__assign({}, others, { className: previewCls }), items && items.map(function (_a) {
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
            treeSelectTotalValue = util_2.obj.values(_v2n);
        }
        else if (treeCheckedStrategy === 'all') {
            // all
            treeSelectTotalValue = util_2.obj.values(_v2n);
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
            return "".concat(util_2.str.template(locale.shortMaxTagPlaceholder, {
                selected: value.length,
            }));
        }
        return "".concat(util_2.str.template(locale.maxTagPlaceholder, {
            selected: value.length,
            total: treeSelectTotalValue.length,
        }));
    };
    TreeSelect.prototype.render = function () {
        var _this = this;
        var _a = this.props, prefix = _a.prefix, size = _a.size, placeholder = _a.placeholder, disabled = _a.disabled, hasArrow = _a.hasArrow, hasBorder = _a.hasBorder, hasClear = _a.hasClear, label = _a.label, readOnly = _a.readOnly, autoWidth = _a.autoWidth, popupStyle = _a.popupStyle, popupClassName = _a.popupClassName, showSearch = _a.showSearch, multiple = _a.multiple, treeCheckable = _a.treeCheckable, treeCheckStrictly = _a.treeCheckStrictly, className = _a.className, popupContainer = _a.popupContainer, popupProps = _a.popupProps, followTrigger = _a.followTrigger, isPreview = _a.isPreview, dataSource = _a.dataSource, tagInline = _a.tagInline, valueRender = _a.valueRender;
        var others = util_2.obj.pickOthers(Object.keys(TreeSelect.propTypes), this.props);
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
        return (react_1.default.createElement(select_1.default, tslib_1.__assign({ prefix: prefix, className: className, size: size, hasBorder: hasBorder, hasArrow: hasArrow, hasClear: hasClear, placeholder: placeholder, disabled: disabled, autoWidth: autoWidth, label: label, readOnly: readOnly, ref: this.saveSelectRef, dataSource: dataSource, value: data, onChange: this.handleChange, visible: visible, onVisibleChange: this.handleVisibleChange, showSearch: showSearch, onSearch: this.handleSearch, onSearchClear: this.handleSearchClear, popupContainer: popupContainer, popupStyle: popupStyle, popupClassName: popupClassName, popupProps: popupProps, followTrigger: followTrigger, tagInline: tagInline, maxTagPlaceholder: this.renderMaxTagPlaceholder }, valueRenderProps, others, { onRemove: this.handleRemove, onKeyDown: this.handleKeyDown, popupContent: this.renderPopupContent(), mode: treeCheckable || multiple ? 'multiple' : 'single' })));
    };
    TreeSelect.propTypes = {
        prefix: prop_types_1.default.string,
        pure: prop_types_1.default.bool,
        locale: prop_types_1.default.object,
        className: prop_types_1.default.string,
        children: prop_types_1.default.node,
        size: prop_types_1.default.oneOf(['small', 'medium', 'large']),
        placeholder: prop_types_1.default.string,
        disabled: prop_types_1.default.bool,
        hasArrow: prop_types_1.default.bool,
        hasBorder: prop_types_1.default.bool,
        hasClear: prop_types_1.default.bool,
        label: prop_types_1.default.node,
        readOnly: prop_types_1.default.bool,
        autoWidth: prop_types_1.default.bool,
        dataSource: prop_types_1.default.arrayOf(prop_types_1.default.object),
        preserveNonExistentValue: prop_types_1.default.bool,
        value: prop_types_1.default.oneOfType([
            prop_types_1.default.string,
            prop_types_1.default.object,
            prop_types_1.default.arrayOf(prop_types_1.default.any),
        ]),
        defaultValue: prop_types_1.default.oneOfType([
            prop_types_1.default.string,
            prop_types_1.default.object,
            prop_types_1.default.arrayOf(prop_types_1.default.any),
        ]),
        onChange: prop_types_1.default.func,
        tagInline: prop_types_1.default.bool,
        maxTagPlaceholder: prop_types_1.default.func,
        autoClearSearch: prop_types_1.default.bool,
        showSearch: prop_types_1.default.bool,
        filterLocal: prop_types_1.default.bool,
        onSearch: prop_types_1.default.func,
        onSearchClear: prop_types_1.default.func,
        notFoundContent: prop_types_1.default.node,
        multiple: prop_types_1.default.bool,
        treeCheckable: prop_types_1.default.bool,
        treeCheckStrictly: prop_types_1.default.bool,
        treeCheckedStrategy: prop_types_1.default.oneOf(['all', 'parent', 'child']),
        treeDefaultExpandAll: prop_types_1.default.bool,
        treeDefaultExpandedKeys: prop_types_1.default.arrayOf(prop_types_1.default.string),
        treeLoadData: prop_types_1.default.func,
        treeProps: prop_types_1.default.object,
        defaultVisible: prop_types_1.default.bool,
        visible: prop_types_1.default.bool,
        onVisibleChange: prop_types_1.default.func,
        popupStyle: prop_types_1.default.object,
        popupClassName: prop_types_1.default.string,
        popupContainer: prop_types_1.default.any,
        popupProps: prop_types_1.default.object,
        followTrigger: prop_types_1.default.bool,
        isPreview: prop_types_1.default.bool,
        renderPreview: prop_types_1.default.func,
        useVirtual: prop_types_1.default.bool,
        immutable: prop_types_1.default.bool,
        clickToCheck: prop_types_1.default.bool,
        valueRender: prop_types_1.default.func,
        useDetailValue: prop_types_1.default.bool,
    };
    TreeSelect.defaultProps = {
        prefix: 'next-',
        pure: false,
        locale: zh_cn_1.default.TreeSelect,
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
    TreeSelect.displayName = 'TreeSelect';
    return TreeSelect;
}(react_1.Component));
exports.default = (0, react_lifecycles_compat_1.polyfill)(TreeSelect);
