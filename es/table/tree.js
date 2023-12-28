import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import RowComponent from './tree/row';
import CellComponent from './tree/cell';
import { statics } from './util';
var noop = function () { };
export default function tree(BaseComponent) {
    var TreeTable = /** @class */ (function (_super) {
        __extends(TreeTable, _super);
        function TreeTable(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.onTreeNodeClick = function (record) {
                var primaryKey = _this.props.primaryKey, id = record[primaryKey], dataSource = _this.ds, openRowKeys = __spreadArray([], __read(_this.state.openRowKeys), false), index = openRowKeys.indexOf(id), getChildrenKeyById = function (id) {
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
            var _a = this.props, components = _a.components, isTree = _a.isTree, dataSource = _a.dataSource, indent = _a.indent, others = __rest(_a, ["components", "isTree", "dataSource", "indent"]);
            if (isTree) {
                components = __assign({}, components);
                if (!components.Row) {
                    components.Row = RowComponent;
                }
                if (!components.Cell) {
                    components.Cell = CellComponent;
                }
                dataSource = this.normalizeDataSource(dataSource);
            }
            return React.createElement(BaseComponent, __assign({}, others, { dataSource: dataSource, components: components }));
        };
        TreeTable.TreeRow = RowComponent;
        TreeTable.TreeCell = CellComponent;
        TreeTable.propTypes = __assign({ 
            /**
             * 默认情况下展开的树形表格，传入了此属性代表tree的展开为受控操作
             */
            openRowKeys: PropTypes.array, 
            /**
             * 默认情况下展开的 Expand行 或者 Tree行，非受控模式
             * @version 1.23.22
             */
            defaultOpenRowKeys: PropTypes.array, 
            /**
             * 点击tree展开或者关闭的时候触发的事件
             * @param {Array} openRowKeys tree模式下展开的key
             * @param {String} currentRowKey 当前点击行的key
             * @param {Boolean} opened 当前点击是展开还是收起
             * @param {Object} currentRecord 当前点击行的记录
             */
            onRowOpen: PropTypes.func, 
            /**
             * dataSource当中数据的主键，如果给定的数据源中的属性不包含该主键，会造成选择状态全部选中
             */
            primaryKey: PropTypes.oneOfType([PropTypes.symbol, PropTypes.string]), 
            /**
             * 在tree模式下的缩进尺寸， 仅在isTree为true时候有效
             */
            indent: PropTypes.number, 
            /**
             * 开启Table的tree模式, 接收的数据格式中包含children则渲染成tree table
             */
            isTree: PropTypes.bool, locale: PropTypes.object }, BaseComponent.propTypes);
        TreeTable.defaultProps = __assign(__assign({}, BaseComponent.defaultProps), { primaryKey: 'id', onRowOpen: noop, components: {}, indent: 12 });
        TreeTable.childContextTypes = {
            openTreeRowKeys: PropTypes.array,
            indent: PropTypes.number,
            treeStatus: PropTypes.array,
            onTreeNodeClick: PropTypes.func,
            isTree: PropTypes.bool,
        };
        return TreeTable;
    }(React.Component));
    statics(TreeTable, BaseComponent);
    return polyfill(TreeTable);
}
