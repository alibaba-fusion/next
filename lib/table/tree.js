"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var row_1 = require("./tree/row");
var cell_1 = require("./tree/cell");
var util_1 = require("./util");
var noop = function () { };
function tree(BaseComponent) {
    var TreeTable = /** @class */ (function (_super) {
        tslib_1.__extends(TreeTable, _super);
        function TreeTable(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.onTreeNodeClick = function (record) {
                var primaryKey = _this.props.primaryKey, id = record[primaryKey], dataSource = _this.ds, openRowKeys = tslib_1.__spreadArray([], tslib_1.__read(_this.state.openRowKeys), false), index = openRowKeys.indexOf(id), getChildrenKeyById = function (id) {
                    var ret = [id];
                    var loop = function (data) {
                        data.forEach(function (item) {
                            ret.push(item[primaryKey]);
                            if (item.children) {
                                loop(item.children);
                            }
                        });
                    };
                    dataSource.forEach(function (item) {
                        if (item[primaryKey] === id) {
                            if (item.children) {
                                loop(item.children);
                            }
                        }
                    });
                    return ret;
                };
                if (index > -1) {
                    // 不仅要删除当前的openRowKey，还需要删除关联子节点的openRowKey
                    var ids = getChildrenKeyById(id);
                    ids.forEach(function (id) {
                        var i = openRowKeys.indexOf(id);
                        if (i > -1) {
                            openRowKeys.splice(i, 1);
                        }
                    });
                }
                else {
                    openRowKeys.push(id);
                }
                if (!('openRowKeys' in _this.props)) {
                    _this.setState({
                        openRowKeys: openRowKeys,
                    });
                }
                _this.props.onRowOpen(openRowKeys, id, index === -1, record);
            };
            _this.state = {
                openRowKeys: props.openRowKeys || props.defaultOpenRowKeys || [],
            };
            return _this;
        }
        TreeTable.prototype.getChildContext = function () {
            return {
                openTreeRowKeys: this.state.openRowKeys,
                indent: this.props.indent,
                treeStatus: this.getTreeNodeStatus(this.ds),
                onTreeNodeClick: this.onTreeNodeClick,
                isTree: this.props.isTree,
            };
        };
        TreeTable.getDerivedStateFromProps = function (nextProps) {
            if ('openRowKeys' in nextProps) {
                return {
                    openRowKeys: nextProps.openRowKeys || [],
                };
            }
            return null;
        };
        TreeTable.prototype.normalizeDataSource = function (dataSource) {
            var openRowKeys = this.state.openRowKeys;
            var primaryKey = this.props.primaryKey;
            var ret = [], loop = function (dataSource, level, parentId) {
                if (parentId === void 0) { parentId = null; }
                dataSource.forEach(function (item) {
                    item.__level = level;
                    if (level === 0 || openRowKeys.indexOf(parentId) > -1) {
                        item.__hidden = false;
                    }
                    else {
                        item.__hidden = true;
                    }
                    ret.push(item);
                    if (item.children) {
                        loop(item.children, level + 1, item[primaryKey]);
                    }
                });
            };
            loop(dataSource, 0);
            this.ds = ret;
            return ret;
        };
        TreeTable.prototype.getTreeNodeStatus = function (dataSource) {
            if (dataSource === void 0) { dataSource = []; }
            var openRowKeys = this.state.openRowKeys, primaryKey = this.props.primaryKey, ret = [];
            openRowKeys.forEach(function (openKey) {
                dataSource.forEach(function (item) {
                    if (item[primaryKey] === openKey) {
                        if (item.children) {
                            item.children.forEach(function (child) {
                                ret.push(child[primaryKey]);
                            });
                        }
                    }
                });
            });
            return ret;
        };
        TreeTable.prototype.render = function () {
            /* eslint-disable no-unused-vars, prefer-const */
            var _a = this.props, components = _a.components, isTree = _a.isTree, dataSource = _a.dataSource, indent = _a.indent, others = tslib_1.__rest(_a, ["components", "isTree", "dataSource", "indent"]);
            if (isTree) {
                components = tslib_1.__assign({}, components);
                if (!components.Row) {
                    components.Row = row_1.default;
                }
                if (!components.Cell) {
                    components.Cell = cell_1.default;
                }
                dataSource = this.normalizeDataSource(dataSource);
            }
            return react_1.default.createElement(BaseComponent, tslib_1.__assign({}, others, { dataSource: dataSource, components: components }));
        };
        TreeTable.TreeRow = row_1.default;
        TreeTable.TreeCell = cell_1.default;
        TreeTable.propTypes = tslib_1.__assign({ 
            /**
             * 默认情况下展开的树形表格，传入了此属性代表tree的展开为受控操作
             */
            openRowKeys: prop_types_1.default.array, 
            /**
             * 默认情况下展开的 Expand行 或者 Tree行，非受控模式
             * @version 1.23.22
             */
            defaultOpenRowKeys: prop_types_1.default.array, 
            /**
             * 点击tree展开或者关闭的时候触发的事件
             * @param {Array} openRowKeys tree模式下展开的key
             * @param {String} currentRowKey 当前点击行的key
             * @param {Boolean} opened 当前点击是展开还是收起
             * @param {Object} currentRecord 当前点击行的记录
             */
            onRowOpen: prop_types_1.default.func, 
            /**
             * dataSource当中数据的主键，如果给定的数据源中的属性不包含该主键，会造成选择状态全部选中
             */
            primaryKey: prop_types_1.default.oneOfType([prop_types_1.default.symbol, prop_types_1.default.string]), 
            /**
             * 在tree模式下的缩进尺寸， 仅在isTree为true时候有效
             */
            indent: prop_types_1.default.number, 
            /**
             * 开启Table的tree模式, 接收的数据格式中包含children则渲染成tree table
             */
            isTree: prop_types_1.default.bool, locale: prop_types_1.default.object }, BaseComponent.propTypes);
        TreeTable.defaultProps = tslib_1.__assign(tslib_1.__assign({}, BaseComponent.defaultProps), { primaryKey: 'id', onRowOpen: noop, components: {}, indent: 12 });
        TreeTable.childContextTypes = {
            openTreeRowKeys: prop_types_1.default.array,
            indent: prop_types_1.default.number,
            treeStatus: prop_types_1.default.array,
            onTreeNodeClick: prop_types_1.default.func,
            isTree: prop_types_1.default.bool,
        };
        return TreeTable;
    }(react_1.default.Component));
    (0, util_1.statics)(TreeTable, BaseComponent);
    return (0, react_lifecycles_compat_1.polyfill)(TreeTable);
}
exports.default = tree;
