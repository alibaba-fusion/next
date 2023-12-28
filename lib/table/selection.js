"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var checkbox_1 = require("../checkbox");
var radio_1 = require("../radio");
var util_1 = require("../util");
var zh_cn_1 = require("../locale/zh-cn");
var row_1 = require("./selection/row");
var column_1 = require("./column");
var util_2 = require("./util");
var makeChain = util_1.func.makeChain;
var unique = function (arr, key) {
    if (key === void 0) { key = 'this'; }
    var temp = {}, ret = [];
    arr.forEach(function (item) {
        var value;
        if (key === 'this') {
            value = item;
        }
        else {
            value = item[key];
        }
        if (!temp[value]) {
            ret.push(item);
            temp[value] = true;
        }
    });
    return ret;
};
function selection(BaseComponent) {
    /** Table */
    var SelectionTable = /** @class */ (function (_super) {
        tslib_1.__extends(SelectionTable, _super);
        function SelectionTable(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.addSelection = function (columns) {
                var _a = _this.props, prefix = _a.prefix, rowSelection = _a.rowSelection, size = _a.size;
                var attrs = (rowSelection.columnProps && rowSelection.columnProps()) || {};
                if (!columns.find(function (record) { return record.key === 'selection'; })) {
                    columns.unshift(tslib_1.__assign({ key: 'selection', title: _this.renderSelectionHeader.bind(_this), cell: _this.renderSelectionBody.bind(_this), width: size === 'small' ? 34 : 50, className: "".concat(prefix, "table-selection ").concat(prefix, "table-prerow"), __normalized: true }, attrs));
                }
            };
            _this.renderSelectionHeader = function () {
                var onChange = _this.selectAllRow, attrs = {}, _a = _this.props, rowSelection = _a.rowSelection, primaryKey = _a.primaryKey, dataSource = _a.dataSource, entireDataSource = _a.entireDataSource, locale = _a.locale, selectedRowKeys = _this.state.selectedRowKeys, mode = rowSelection.mode ? rowSelection.mode : 'multiple';
                var checked = !!selectedRowKeys.length;
                var indeterminate = false;
                var source = entireDataSource || dataSource;
                _this.flatDataSource(source)
                    .filter(function (record, index) {
                    if (!rowSelection.getProps) {
                        return true;
                    }
                    else {
                        return !(rowSelection.getProps(record, index) || {}).disabled;
                    }
                })
                    .map(function (record) { return record[primaryKey]; })
                    .forEach(function (id) {
                    if (selectedRowKeys.indexOf(id) === -1) {
                        checked = false;
                    }
                    else {
                        indeterminate = true;
                    }
                });
                attrs.onClick = makeChain(function (e) {
                    e.stopPropagation();
                }, attrs.onClick);
                var userAttrs = (rowSelection.titleProps && rowSelection.titleProps()) || {};
                if (checked) {
                    indeterminate = false;
                }
                return [
                    mode === 'multiple' ? (react_1.default.createElement(checkbox_1.default, tslib_1.__assign({ key: "_total", indeterminate: indeterminate, "aria-label": locale.selectAll, checked: checked, onChange: onChange }, attrs, userAttrs))) : null,
                    rowSelection.titleAddons && rowSelection.titleAddons(),
                ];
            };
            _this.renderSelectionBody = function (value, index, record) {
                var _a = _this.props, rowSelection = _a.rowSelection, primaryKey = _a.primaryKey;
                var selectedRowKeys = _this.state.selectedRowKeys;
                var mode = rowSelection.mode ? rowSelection.mode : 'multiple';
                var checked = selectedRowKeys.indexOf(record[primaryKey]) > -1;
                var onChange = _this.selectOneRow.bind(_this, index, record);
                var attrs = rowSelection.getProps ? rowSelection.getProps(record, index) || {} : {};
                attrs.onClick = makeChain(function (e) {
                    e.stopPropagation();
                }, attrs.onClick);
                return mode === 'multiple' ? (react_1.default.createElement(checkbox_1.default, tslib_1.__assign({ checked: checked, onChange: onChange }, attrs))) : (react_1.default.createElement(radio_1.default, tslib_1.__assign({ checked: checked, onChange: onChange }, attrs)));
            };
            _this.selectAllRow = function (checked, e) {
                var ret = tslib_1.__spreadArray([], tslib_1.__read(_this.state.selectedRowKeys), false), _a = _this.props, rowSelection = _a.rowSelection, primaryKey = _a.primaryKey, dataSource = _a.dataSource, entireDataSource = _a.entireDataSource, selectedRowKeys = _this.state.selectedRowKeys, getProps = rowSelection.getProps;
                var attrs = {}, records = [];
                var source = entireDataSource ? entireDataSource : dataSource;
                _this.flatDataSource(source).forEach(function (record, index) {
                    var id = record[primaryKey];
                    if (getProps) {
                        attrs = getProps(record, index) || {};
                    }
                    // 反选和全选的时候不要丢弃禁用项的选中状态
                    if (checked && (!attrs.disabled || selectedRowKeys.indexOf(id) > -1)) {
                        ret.push(id);
                        records.push(record);
                    }
                    else if (attrs.disabled && selectedRowKeys.indexOf(id) > -1) {
                        ret.push(id);
                        records.push(record);
                    }
                    else {
                        var i = ret.indexOf(id);
                        i > -1 && ret.splice(i, 1);
                    }
                });
                records = unique(records, primaryKey);
                if (typeof rowSelection.onSelectAll === 'function') {
                    rowSelection.onSelectAll(checked, records);
                }
                _this.triggerSelection(rowSelection, unique(ret), records);
                e.stopPropagation();
            };
            _this.state = {
                selectedRowKeys: props.rowSelection && 'selectedRowKeys' in props.rowSelection
                    ? props.rowSelection.selectedRowKeys || []
                    : [],
            };
            return _this;
        }
        SelectionTable.prototype.getChildContext = function () {
            return {
                rowSelection: this.props.rowSelection,
                selectedRowKeys: this.state.selectedRowKeys,
            };
        };
        SelectionTable.getDerivedStateFromProps = function (nextProps) {
            if (nextProps.rowSelection && 'selectedRowKeys' in nextProps.rowSelection) {
                var selectedRowKeys = nextProps.rowSelection.selectedRowKeys || [];
                return {
                    selectedRowKeys: selectedRowKeys,
                };
            }
            return null;
        };
        SelectionTable.prototype.normalizeChildren = function (children) {
            var _a = this.props, prefix = _a.prefix, rowSelection = _a.rowSelection, size = _a.size;
            if (rowSelection) {
                children = react_1.Children.map(children, function (child, index) {
                    return react_1.default.cloneElement(child, {
                        key: index,
                    });
                });
                var attrs = (rowSelection.columnProps && rowSelection.columnProps()) || {};
                children.unshift(react_1.default.createElement(column_1.default, tslib_1.__assign({ key: "selection", title: this.renderSelectionHeader.bind(this), cell: this.renderSelectionBody.bind(this), width: size === 'small' ? 34 : 50, className: "".concat(prefix, "table-selection ").concat(prefix, "table-prerow"), __normalized: true }, attrs)));
                return children;
            }
            return children;
        };
        SelectionTable.prototype.selectOneRow = function (index, record, checked, e) {
            var selectedRowKeys = tslib_1.__spreadArray([], tslib_1.__read(this.state.selectedRowKeys), false), i;
            var _a = this.props, primaryKey = _a.primaryKey, rowSelection = _a.rowSelection, dataSource = _a.dataSource, entireDataSource = _a.entireDataSource, mode = rowSelection.mode ? rowSelection.mode : 'multiple', id = record[primaryKey];
            if (!id) {
                util_1.log.warning("Can't get value from record using given ".concat(primaryKey, " as primaryKey."));
            }
            if (mode === 'multiple') {
                if (checked) {
                    selectedRowKeys.push(id);
                }
                else {
                    i = selectedRowKeys.indexOf(id);
                    selectedRowKeys.splice(i, 1);
                }
            }
            else if (checked) {
                selectedRowKeys = [id];
            }
            var totalDS = dataSource;
            if (Array.isArray(entireDataSource) && entireDataSource.length > dataSource.length) {
                totalDS = entireDataSource;
            }
            var records = unique(totalDS.filter(function (item) { return selectedRowKeys.indexOf(item[primaryKey]) > -1; }), primaryKey);
            if (typeof rowSelection.onSelect === 'function') {
                rowSelection.onSelect(checked, record, records);
            }
            this.triggerSelection(rowSelection, selectedRowKeys, records);
            e.stopPropagation();
        };
        SelectionTable.prototype.triggerSelection = function (rowSelection, selectedRowKeys, records) {
            if (!('selectedRowKeys' in rowSelection)) {
                this.setState({
                    selectedRowKeys: selectedRowKeys,
                });
            }
            if (typeof rowSelection.onChange === 'function') {
                rowSelection.onChange(selectedRowKeys, records);
            }
        };
        SelectionTable.prototype.flatDataSource = function (dataSource) {
            var ret = dataSource;
            var listHeader = this.context.listHeader;
            if (listHeader) {
                ret = [];
                var hasChildrenSelection_1 = listHeader.hasChildrenSelection, hasSelection_1 = listHeader.hasSelection;
                dataSource.forEach(function (item) {
                    var children = item.children;
                    // 如果需要渲染selection才将这条记录插入到dataSource
                    // 或者没有孩子节点
                    if (hasSelection_1) {
                        ret.push(item);
                    }
                    if (children && hasChildrenSelection_1) {
                        ret = ret.concat(children);
                    }
                });
            }
            return ret;
        };
        SelectionTable.prototype.render = function () {
            /* eslint-disable prefer-const */
            var _a = this.props, rowSelection = _a.rowSelection, components = _a.components, children = _a.children, columns = _a.columns, others = tslib_1.__rest(_a, ["rowSelection", "components", "children", "columns"]);
            var useColumns = columns && !children;
            if (rowSelection) {
                if (useColumns) {
                    this.addSelection(columns);
                }
                else {
                    children = this.normalizeChildren(children || []);
                }
                components = tslib_1.__assign({}, components);
                components.Row = components.Row || row_1.default;
            }
            return react_1.default.createElement(BaseComponent, tslib_1.__assign({}, others, { columns: columns, components: components, children: children }));
        };
        SelectionTable.SelectionRow = row_1.default;
        SelectionTable.propTypes = tslib_1.__assign({ 
            /**
             * 是否启用选择模式
             * @property {Function} getProps `Function(record, index)=>Object` 获取selection的默认属性
             * @property {Function} onChange `Function(selectedRowKeys:Array, records:Array)` 选择改变的时候触发的事件，**注意:** 其中records只会包含当前dataSource的数据，很可能会小于selectedRowKeys的长度。
             * @property {Function} onSelect `Function(selected:Boolean, record:Object, records:Array)` 用户手动选择/取消选择某行的回调
             * @property {Function} onSelectAll `Function(selected:Boolean, records:Array)` 用户手动选择/取消选择所有行的回调
             * @property {Array} selectedRowKeys 设置了此属性,将rowSelection变为受控状态,接收值为该行数据的primaryKey的值
             * @property {String} mode 选择selection的模式, 可选值为`single`, `multiple`，默认为`multiple`
             * @property {Function} columnProps `Function()=>Object` 选择列 的props，例如锁列、对齐等，可使用`Table.Column` 的所有参数
             * @property {Function} titleProps `Function()=>Object` 选择列 表头的props，仅在 `multiple` 模式下生效
             */
            rowSelection: prop_types_1.default.object, primaryKey: prop_types_1.default.oneOfType([prop_types_1.default.symbol, prop_types_1.default.string]), dataSource: prop_types_1.default.array, entireDataSource: prop_types_1.default.array }, BaseComponent.propTypes);
        SelectionTable.defaultProps = tslib_1.__assign(tslib_1.__assign({}, BaseComponent.defaultProps), { locale: zh_cn_1.default.Table, primaryKey: 'id', prefix: 'next-' });
        SelectionTable.contextTypes = {
            listHeader: prop_types_1.default.any,
        };
        SelectionTable.childContextTypes = {
            rowSelection: prop_types_1.default.object,
            selectedRowKeys: prop_types_1.default.array,
        };
        return SelectionTable;
    }(react_1.default.Component));
    (0, util_2.statics)(SelectionTable, BaseComponent);
    return (0, react_lifecycles_compat_1.polyfill)(SelectionTable);
}
exports.default = selection;
