import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React, { Children } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import Icon from '../icon';
import { KEYCODE, dom, events } from '../util';
import RowComponent from './expanded/row';
import Col from './column';
import { statics } from './util';
var noop = function () { };
export default function expanded(BaseComponent, stickyLock) {
    /** Table */
    var ExpandedTable = /** @class */ (function (_super) {
        __extends(ExpandedTable, _super);
        function ExpandedTable() {
            var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
            _this.state = {
                openRowKeys: _this.props.openRowKeys || _this.props.defaultOpenRowKeys || [],
            };
            _this.saveExpandedRowRef = function (key, rowRef) {
                if (!_this.expandedRowRefs) {
                    _this.expandedRowRefs = {};
                }
                _this.expandedRowRefs[key] = rowRef;
            };
            _this.setExpandedWidth = function () {
                var prefix = _this.props.prefix;
                var tableEl = _this.getTableNode();
                var totalWidth = +(tableEl && tableEl.clientWidth) - 1 || '100%';
                var bodyNode = tableEl && tableEl.querySelector(".".concat(prefix, "table-body"));
                Object.keys(_this.expandedRowRefs || {}).forEach(function (key) {
                    dom.setStyle(_this.expandedRowRefs[key], { width: (bodyNode && bodyNode.clientWidth) || totalWidth });
                });
            };
            _this.getTableInstance = function (instance) {
                _this.tableInc = instance;
            };
            _this.expandedKeydown = function (value, record, index, e) {
                e.preventDefault();
                e.stopPropagation();
                if (e.keyCode === KEYCODE.ENTER) {
                    _this.onExpandedClick(value, record, index, e);
                }
            };
            _this.renderExpandedCell = function (value, index, record) {
                var _a;
                var _b = _this.props, getExpandedColProps = _b.getExpandedColProps, prefix = _b.prefix, locale = _b.locale, rowExpandable = _b.rowExpandable;
                if (typeof rowExpandable === 'function' && !rowExpandable(record, index)) {
                    return '';
                }
                var openRowKeys = _this.state.openRowKeys, primaryKey = _this.props.primaryKey, hasExpanded = openRowKeys.indexOf(record[primaryKey]) > -1, switchNode = hasExpanded ? (React.createElement(Icon, { type: "minus", size: "xs", className: "".concat(prefix, "table-expand-unfold") })) : (React.createElement(Icon, { type: "add", size: "xs", className: "".concat(prefix, "table-expand-fold") })), attrs = getExpandedColProps(record, index) || {};
                var cls = classnames((_a = {},
                    _a["".concat(prefix, "table-expanded-ctrl")] = true,
                    _a.disabled = attrs.disabled,
                    _a[attrs.className] = attrs.className,
                    _a));
                if (!attrs.disabled) {
                    attrs.onClick = _this.onExpandedClick.bind(_this, value, record, index);
                }
                return (React.createElement("span", __assign({}, attrs, { role: "button", tabIndex: "0", onKeyDown: _this.expandedKeydown.bind(_this, value, record, index), "aria-label": hasExpanded ? locale.expanded : locale.folded, "aria-expanded": hasExpanded, className: cls }), switchNode));
            };
            _this.addExpandCtrl = function (columns) {
                var _a = _this.props, prefix = _a.prefix, size = _a.size;
                if (!columns.find(function (record) { return record.key === 'expanded'; })) {
                    columns.unshift({
                        key: 'expanded',
                        title: '',
                        cell: _this.renderExpandedCell.bind(_this),
                        width: size === 'small' ? 34 : 50,
                        className: "".concat(prefix, "table-expanded ").concat(prefix, "table-prerow"),
                        __normalized: true,
                    });
                }
            };
            return _this;
        }
        ExpandedTable.prototype.getChildContext = function () {
            return {
                openRowKeys: this.state.openRowKeys,
                expandedRowRender: this.props.expandedRowRender,
                expandedIndexSimulate: this.props.expandedIndexSimulate,
                expandedRowWidthEquals2Table: stickyLock,
                getExpandedRowRef: this.saveExpandedRowRef,
                getTableInstanceForExpand: this.getTableInstance,
                expandedRowIndent: stickyLock ? [0, 0] : this.props.expandedRowIndent,
            };
        };
        ExpandedTable.getDerivedStateFromProps = function (nextProps) {
            if ('openRowKeys' in nextProps) {
                return {
                    openRowKeys: nextProps.openRowKeys || [],
                };
            }
            return null;
        };
        ExpandedTable.prototype.componentDidMount = function () {
            this.setExpandedWidth();
            events.on(window, 'resize', this.setExpandedWidth);
        };
        ExpandedTable.prototype.componentDidUpdate = function () {
            this.setExpandedWidth();
        };
        ExpandedTable.prototype.componentWillUnmount = function () {
            events.off(window, 'resize', this.setExpandedWidth);
        };
        ExpandedTable.prototype.getTableNode = function () {
            var table = this.tableInc;
            try {
                // in case of finding an unmounted component due to cached data
                // need to clear refs of table when dataSource Changed
                // use try catch for temporary
                return findDOMNode(table.tableEl);
            }
            catch (error) {
                return null;
            }
        };
        ExpandedTable.prototype.onExpandedClick = function (value, record, i, e) {
            var openRowKeys = __spreadArray([], __read(this.state.openRowKeys), false), primaryKey = this.props.primaryKey, id = record[primaryKey], index = openRowKeys.indexOf(id);
            if (index > -1) {
                openRowKeys.splice(index, 1);
            }
            else {
                openRowKeys.push(id);
            }
            if (!('openRowKeys' in this.props)) {
                this.setState({
                    openRowKeys: openRowKeys,
                });
            }
            this.props.onRowOpen(openRowKeys, id, index === -1, record);
            e.stopPropagation();
        };
        ExpandedTable.prototype.normalizeChildren = function (children) {
            var _a = this.props, prefix = _a.prefix, size = _a.size;
            var toArrayChildren = Children.map(children, function (child, index) {
                return React.cloneElement(child, {
                    key: index,
                });
            });
            toArrayChildren.unshift(React.createElement(Col, { title: "", key: "expanded", cell: this.renderExpandedCell.bind(this), width: size === 'small' ? 34 : 50, className: "".concat(prefix, "table-expanded ").concat(prefix, "table-prerow"), __normalized: true }));
            return toArrayChildren;
        };
        ExpandedTable.prototype.normalizeDataSource = function (ds) {
            var ret = [];
            ds.forEach(function (item) {
                var itemCopy = __assign({}, item);
                itemCopy.__expanded = true;
                ret.push(item, itemCopy);
            });
            return ret;
        };
        ExpandedTable.prototype.render = function () {
            /* eslint-disable no-unused-vars, prefer-const */
            var _a = this.props, components = _a.components, openRowKeys = _a.openRowKeys, expandedRowRender = _a.expandedRowRender, rowExpandable = _a.rowExpandable, hasExpandedRowCtrl = _a.hasExpandedRowCtrl, children = _a.children, columns = _a.columns, dataSource = _a.dataSource, entireDataSource = _a.entireDataSource, getExpandedColProps = _a.getExpandedColProps, expandedRowIndent = _a.expandedRowIndent, onRowOpen = _a.onRowOpen, onExpandedRowClick = _a.onExpandedRowClick, others = __rest(_a, ["components", "openRowKeys", "expandedRowRender", "rowExpandable", "hasExpandedRowCtrl", "children", "columns", "dataSource", "entireDataSource", "getExpandedColProps", "expandedRowIndent", "onRowOpen", "onExpandedRowClick"]);
            if (expandedRowRender && !components.Row) {
                components = __assign({}, components);
                components.Row = RowComponent;
                dataSource = this.normalizeDataSource(dataSource);
                entireDataSource = this.normalizeDataSource(entireDataSource);
            }
            if (expandedRowRender && hasExpandedRowCtrl) {
                var useColumns = columns && !children;
                if (useColumns) {
                    this.addExpandCtrl(columns);
                }
                else {
                    children = this.normalizeChildren(children || []);
                }
            }
            return (React.createElement(BaseComponent, __assign({}, others, { columns: columns, dataSource: dataSource, entireDataSource: entireDataSource, components: components }), children));
        };
        ExpandedTable.ExpandedRow = RowComponent;
        ExpandedTable.propTypes = __assign({ 
            /**
             * 额外渲染行的渲染函数
             * @param {Object} record 该行所对应的数据
             * @param {Number} index 该行所对应的序列
             * @returns {Element}
             */
            expandedRowRender: PropTypes.func, 
            /**
             * 设置行是否可展开，设置 false 为不可展开
             * @param {Object} record 该行所对应的数据
             * @param {Number} index 该行所对应的序列
             * @returns {Boolean} 是否可展开
             * @version 1.21
             */
            rowExpandable: PropTypes.func, 
            /**
             * 额外渲染行的缩进
             */
            expandedRowIndent: PropTypes.array, 
            /**
             * 默认情况下展开的渲染行或者Tree, 传入此属性为受控状态
             */
            openRowKeys: PropTypes.array, 
            /**
             * 默认情况下展开的 Expand行 或者 Tree行，非受控模式
             * @version 1.23.22
             */
            defaultOpenRowKeys: PropTypes.array, 
            /**
             * 是否显示点击展开额外渲染行的+号按钮
             */
            hasExpandedRowCtrl: PropTypes.bool, 
            /**
             * 设置额外渲染行的属性
             */
            getExpandedColProps: PropTypes.func, 
            /**
             * 在额外渲染行或者Tree展开或者收起的时候触发的事件
             * @param {Array} openRowKeys 展开的渲染行的key
             * @param {String} currentRowKey 当前点击的渲染行的key
             * @param {Boolean} expanded 当前点击是展开还是收起
             * @param {Object} currentRecord 当前点击额外渲染行的记录
             */
            onRowOpen: PropTypes.func, onExpandedRowClick: PropTypes.func, locale: PropTypes.object }, BaseComponent.propTypes);
        ExpandedTable.defaultProps = __assign(__assign({}, BaseComponent.defaultProps), { getExpandedColProps: noop, onRowOpen: noop, hasExpandedRowCtrl: true, components: {}, expandedRowIndent: stickyLock ? [0, 0] : [1, 0], prefix: 'next-' });
        ExpandedTable.childContextTypes = {
            openRowKeys: PropTypes.array,
            expandedRowRender: PropTypes.func,
            expandedIndexSimulate: PropTypes.bool,
            expandedRowWidthEquals2Table: PropTypes.bool,
            expandedRowIndent: PropTypes.array,
            getExpandedRowRef: PropTypes.func,
            getTableInstanceForExpand: PropTypes.func,
        };
        return ExpandedTable;
    }(React.Component));
    statics(ExpandedTable, BaseComponent);
    return polyfill(ExpandedTable);
}
