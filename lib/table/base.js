"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var react_dom_1 = require("react-dom");
var classnames_1 = require("classnames");
var shallow_element_equals_1 = require("shallow-element-equals");
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var loading_1 = require("../loading");
var config_provider_1 = require("../config-provider");
var zh_cn_1 = require("../locale/zh-cn");
var util_1 = require("../util");
var body_1 = require("./base/body");
var header_1 = require("./base/header");
var wrapper_1 = require("./base/wrapper");
var row_1 = require("./base/row");
var cell_1 = require("./base/cell");
var filter_1 = require("./base/filter");
var sort_1 = require("./base/sort");
var column_1 = require("./column");
var column_group_1 = require("./column-group");
var Children = react_1.default.Children, noop = function () { };
//<Table>
//    <Table.Column/>
//    <Table.ColumnGroup>
//      <Table.Column/>
//      <Table.Column/>
//    </Table.ColumnGroup>
//</Table>
/** Table */
var Table = /** @class */ (function (_super) {
    tslib_1.__extends(Table, _super);
    function Table(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = {
            sort: _this.props.sort || {},
        };
        _this.onSort = function (dataIndex, order, sort) {
            if (typeof _this.props.sort === 'undefined') {
                _this.setState({
                    sort: sort,
                }, function () {
                    _this.props.onSort(dataIndex, order, sort);
                });
            }
            else {
                _this.props.onSort(dataIndex, order, sort);
            }
        };
        _this.onFilter = function (filterParams) {
            _this.props.onFilter(filterParams);
        };
        _this.onResizeChange = function (dataIndex, value) {
            _this.props.onResizeChange(dataIndex, value);
        };
        _this.getResizeProxyDomRef = function (resizeProxyDom) {
            if (!resizeProxyDom) {
                return _this.resizeProxyDomRef;
            }
            _this.resizeProxyDomRef = resizeProxyDom;
        };
        _this.getWrapperRef = function (wrapper) {
            if (!wrapper) {
                return _this.wrapper;
            }
            _this.wrapper = wrapper;
        };
        _this.getAffixRef = function (affixRef) {
            if (!affixRef) {
                return _this.affixRef;
            }
            _this.affixRef = affixRef;
        };
        _this.getHeaderCellRef = function (i, j, cell) {
            var cellRef = "header_cell_".concat(i, "_").concat(j);
            if (!cell) {
                return _this[cellRef];
            }
            _this[cellRef] = cell;
        };
        _this.getRowRef = function (i, row) {
            var rowRef = "row_".concat(i);
            if (!row) {
                return _this[rowRef];
            }
            _this[rowRef] = row;
        };
        _this.getCellRef = function (i, j, cell) {
            var cellRef = "cell_".concat(i, "_").concat(j);
            if (!cell) {
                return _this[cellRef];
            }
            _this[cellRef] = cell;
        };
        _this.handleColHoverClass = function (rowIndex, colIndex, isAdd) {
            var crossline = _this.props.crossline;
            var funcName = isAdd ? 'addClass' : 'removeClass';
            if (crossline) {
                _this.props.entireDataSource.forEach(function (val, index) {
                    try {
                        // in case of finding an unmounted component due to cached data
                        // need to clear refs of this.tableInc when dataSource Changed
                        // in virtual table
                        var currentCol = (0, react_dom_1.findDOMNode)(_this.getCellRef(index, colIndex));
                        currentCol && util_1.dom[funcName](currentCol, 'hovered');
                    }
                    catch (error) {
                        return null;
                    }
                });
            }
        };
        /**
         * @param event
         * @returns {Object} { rowIndex: string; colIndex: string }
         */
        _this.findEventTarget = function (e) {
            var prefix = _this.props.prefix;
            var target = util_1.dom.getClosest(e.target, "td.".concat(prefix, "table-cell"));
            var colIndex = target && target.getAttribute('data-next-table-col');
            var rowIndex = target && target.getAttribute('data-next-table-row');
            try {
                // in case of finding an unmounted component due to cached data
                // need to clear refs of this.tableInc when dataSource Changed
                // in virtual table
                var currentCol = (0, react_dom_1.findDOMNode)(_this.getCellRef(rowIndex, colIndex));
                if (currentCol === target) {
                    return {
                        colIndex: colIndex,
                        rowIndex: rowIndex,
                    };
                }
            }
            catch (error) {
                return {};
            }
            return {};
        };
        _this.onBodyMouseOver = function (e) {
            var crossline = _this.props.crossline;
            if (!crossline) {
                return;
            }
            var _a = _this.findEventTarget(e), colIndex = _a.colIndex, rowIndex = _a.rowIndex;
            // colIndex, rowIndex are string
            if (!colIndex || !rowIndex) {
                return;
            }
            _this.handleColHoverClass(rowIndex, colIndex, true);
            _this.colIndex = colIndex;
            _this.rowIndex = rowIndex;
        };
        _this.onBodyMouseOut = function (e) {
            var crossline = _this.props.crossline;
            if (!crossline) {
                return;
            }
            var _a = _this.findEventTarget(e), colIndex = _a.colIndex, rowIndex = _a.rowIndex;
            // colIndex, rowIndex are string
            if (!colIndex || !rowIndex) {
                return;
            }
            _this.handleColHoverClass(_this.rowIndex, _this.colIndex, false);
            _this.colIndex = -1;
            _this.rowIndex = -1;
        };
        _this.addColIndex = function (children, start) {
            if (start === void 0) { start = 0; }
            children.forEach(function (child, i) {
                child.__colIndex = start + i;
            });
        };
        _this.getTableEl = function (ref) {
            _this.tableEl = ref;
        };
        var _a = _this.context, getTableInstance = _a.getTableInstance, getTableInstanceForVirtual = _a.getTableInstanceForVirtual, getTableInstanceForFixed = _a.getTableInstanceForFixed, getTableInstanceForExpand = _a.getTableInstanceForExpand;
        getTableInstance && getTableInstance(props.lockType, _this);
        getTableInstanceForFixed && getTableInstanceForFixed(props.lockType, _this);
        getTableInstanceForVirtual && getTableInstanceForVirtual(props.lockType, _this);
        getTableInstanceForExpand && getTableInstanceForExpand(_this);
        _this.notRenderCellIndex = [];
        return _this;
    }
    Table.prototype.getChildContext = function () {
        return {
            notRenderCellIndex: this.notRenderCellIndex || [],
            lockType: this.props.lockType,
        };
    };
    Table.getDerivedStateFromProps = function (nextProps) {
        var state = {};
        if (typeof nextProps.sort !== 'undefined') {
            state.sort = nextProps.sort;
        }
        return state;
    };
    Table.prototype.componentDidMount = function () {
        this.notRenderCellIndex = [];
    };
    Table.prototype.shouldComponentUpdate = function (nextProps, nextState, nextContext) {
        if (nextProps.pure) {
            var isEqual = (0, shallow_element_equals_1.default)(nextProps, this.props) &&
                util_1.obj.shallowEqual(nextState, this.state) &&
                util_1.obj.shallowEqual(nextContext, this.context);
            return !isEqual;
        }
        return true;
    };
    Table.prototype.componentDidUpdate = function () {
        this.notRenderCellIndex = [];
    };
    Table.prototype.normalizeChildrenState = function (props) {
        var columns = props.columns;
        if (props.children) {
            columns = this.normalizeChildren(props);
        }
        return this.fetchInfoFromBinaryChildren(columns);
    };
    // 将React结构化数据提取props转换成数组
    Table.prototype.normalizeChildren = function (props) {
        var columns = props.columns;
        var getChildren = function (children) {
            var ret = [];
            Children.forEach(children, function (child) {
                if (child) {
                    var props_1 = tslib_1.__assign({}, child.props);
                    if (child.ref) {
                        props_1.ref = child.ref;
                    }
                    if (!(child &&
                        ['function', 'object'].indexOf(typeof child.type) > -1 &&
                        (child.type._typeMark === 'column' || child.type._typeMark === 'columnGroup'))) {
                        util_1.log.warning('Use <Table.Column/>, <Table.ColumnGroup/> as child.');
                    }
                    ret.push(props_1);
                    if (child.props.children) {
                        props_1.children = getChildren(child.props.children);
                    }
                }
            });
            return ret;
        };
        if (props.children) {
            columns = getChildren(props.children);
        }
        return columns;
    };
    Table.prototype.fetchInfoFromBinaryChildren = function (children) {
        var hasGroupHeader = false;
        var flatChildren = [], groupChildren = [], getChildren = function (propsChildren, level) {
            if (propsChildren === void 0) { propsChildren = []; }
            groupChildren[level] = groupChildren[level] || [];
            propsChildren.forEach(function (child) {
                child.headerCellRowIndex = level;
                child.headerCellColIndex = groupChildren[level].length;
                if (child.children) {
                    hasGroupHeader = true;
                    getChildren(child.children, level + 1);
                }
                else {
                    flatChildren.push(child);
                }
                groupChildren[level].push(child);
            });
        }, getColSpan = function (children, colSpan) {
            colSpan = colSpan || 0;
            children.forEach(function (child) {
                if (child.children) {
                    colSpan = getColSpan(child.children, colSpan);
                }
                else {
                    colSpan += 1;
                }
            });
            return colSpan;
        };
        getChildren(children, 0);
        groupChildren.forEach(function (groupChild, i) {
            groupChild.forEach(function (child, j) {
                var colSpan;
                var children = child.children;
                if (children) {
                    colSpan = getColSpan(children);
                    child.colSpan = colSpan;
                    groupChildren[i][j] = child;
                }
            });
        });
        var _a = this.props, lockType = _a.lockType, lengths = _a.lengths;
        var start = lockType === 'right' ? lengths.origin - lengths.right : 0;
        this.addColIndex(flatChildren, start);
        return {
            flatChildren: flatChildren,
            groupChildren: groupChildren,
            hasGroupHeader: hasGroupHeader,
        };
    };
    Table.prototype.renderColGroup = function (flatChildren) {
        var cols = flatChildren.map(function (col, index) {
            var width = col.width;
            var style = {};
            if (width) {
                style = {
                    width: width,
                };
            }
            return react_1.default.createElement("col", { style: style, key: index });
        });
        return react_1.default.createElement("colgroup", { key: "table-colgroup" }, cols);
    };
    // 通过头部和扁平的结构渲染表格
    Table.prototype.renderTable = function (groupChildren, flatChildren) {
        if (flatChildren.length || (!flatChildren.length && !this.props.lockType)) {
            var _a = this.props, hasHeader = _a.hasHeader, components = _a.components, prefix = _a.prefix, wrapperContent = _a.wrapperContent, filterParams = _a.filterParams, locale = _a.locale, dataSource = _a.dataSource, emptyContent = _a.emptyContent, loading = _a.loading, primaryKey = _a.primaryKey, cellProps = _a.cellProps, rowProps = _a.rowProps, onRowClick = _a.onRowClick, onRowMouseEnter = _a.onRowMouseEnter, onRowMouseLeave = _a.onRowMouseLeave, expandedIndexSimulate = _a.expandedIndexSimulate, pure = _a.pure, rtl = _a.rtl, crossline = _a.crossline, sortIcons = _a.sortIcons, tableWidth = _a.tableWidth;
            var sort = this.state.sort;
            var _b = components.Header, Header = _b === void 0 ? header_1.default : _b, _c = components.Wrapper, Wrapper = _c === void 0 ? wrapper_1.default : _c, _d = components.Body, Body = _d === void 0 ? body_1.default : _d;
            var colGroup = this.renderColGroup(flatChildren);
            return [
                react_1.default.createElement("div", { key: "".concat(prefix, "table-column-resize-proxy"), ref: this.getResizeProxyDomRef, className: "".concat(prefix, "table-column-resize-proxy") }),
                react_1.default.createElement(Wrapper, { key: "".concat(prefix, "table-wrapper"), colGroup: colGroup, ref: this.getWrapperRef, prefix: prefix, tableWidth: tableWidth },
                    hasHeader ? (react_1.default.createElement(Header, { prefix: prefix, rtl: rtl, pure: pure, affixRef: this.getAffixRef, colGroup: colGroup, className: "".concat(prefix, "table-header"), filterParams: filterParams, tableEl: this.tableEl, columns: groupChildren, locale: locale, headerCellRef: this.getHeaderCellRef, components: components, onFilter: this.onFilter, sort: sort, onResizeChange: this.onResizeChange, onSort: this.onSort, sortIcons: sortIcons, tableWidth: tableWidth, resizeProxyDomRef: this.resizeProxyDomRef })) : null,
                    react_1.default.createElement(Body, { prefix: prefix, rtl: rtl, pure: pure, crossline: crossline, colGroup: colGroup, className: "".concat(prefix, "table-body"), components: components, loading: loading, emptyContent: emptyContent, getCellProps: cellProps, primaryKey: primaryKey, getRowProps: rowProps, columns: flatChildren, rowRef: this.getRowRef, cellRef: this.getCellRef, onRowClick: onRowClick, expandedIndexSimulate: expandedIndexSimulate, tableEl: this.tableEl, onRowMouseEnter: onRowMouseEnter, onRowMouseLeave: onRowMouseLeave, dataSource: dataSource, locale: locale, onBodyMouseOver: this.onBodyMouseOver, onBodyMouseOut: this.onBodyMouseOut, tableWidth: tableWidth }),
                    wrapperContent),
            ];
        }
        else {
            return null;
        }
    };
    Table.prototype.render = function () {
        var _a, _b;
        var ret = this.normalizeChildrenState(this.props);
        this.groupChildren = ret.groupChildren;
        this.flatChildren = ret.flatChildren;
        /* eslint-disable no-unused-vars, prefer-const */
        var table = this.renderTable(ret.groupChildren, ret.flatChildren), _c = this.props, className = _c.className, style = _c.style, hasBorder = _c.hasBorder, isZebra = _c.isZebra, loading = _c.loading, size = _c.size, hasHeader = _c.hasHeader, prefix = _c.prefix, dataSource = _c.dataSource, entireDataSource = _c.entireDataSource, onSort = _c.onSort, onResizeChange = _c.onResizeChange, onRowClick = _c.onRowClick, onRowMouseEnter = _c.onRowMouseEnter, onRowMouseLeave = _c.onRowMouseLeave, onFilter = _c.onFilter, rowProps = _c.rowProps, cellProps = _c.cellProps, scrollToRow = _c.scrollToRow, primaryKey = _c.primaryKey, components = _c.components, wrapperContent = _c.wrapperContent, lockType = _c.lockType, locale = _c.locale, expandedIndexSimulate = _c.expandedIndexSimulate, refs = _c.refs, pure = _c.pure, rtl = _c.rtl, emptyContent = _c.emptyContent, filterParams = _c.filterParams, columns = _c.columns, sortIcons = _c.sortIcons, _d = _c.loadingComponent, LoadingComponent = _d === void 0 ? loading_1.default : _d, tableLayout = _c.tableLayout, tableWidth = _c.tableWidth, ref = _c.ref, others = tslib_1.__rest(_c, ["className", "style", "hasBorder", "isZebra", "loading", "size", "hasHeader", "prefix", "dataSource", "entireDataSource", "onSort", "onResizeChange", "onRowClick", "onRowMouseEnter", "onRowMouseLeave", "onFilter", "rowProps", "cellProps", "scrollToRow", "primaryKey", "components", "wrapperContent", "lockType", "locale", "expandedIndexSimulate", "refs", "pure", "rtl", "emptyContent", "filterParams", "columns", "sortIcons", "loadingComponent", "tableLayout", "tableWidth", "ref"]), cls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "table")] = true,
            _a["".concat(prefix, "table-").concat(size)] = size,
            _a["".concat(prefix, "table-layout-").concat(tableLayout)] = tableLayout,
            _a["".concat(prefix, "table-loading")] = loading,
            _a['only-bottom-border'] = !hasBorder,
            _a['no-header'] = !hasHeader,
            _a.zebra = isZebra,
            _a[className] = className,
            _a));
        if (rtl) {
            others.dir = 'rtl';
        }
        var loadingcls = (0, classnames_1.default)((_b = {},
            _b["".concat(prefix, "table-loading-content")] = true,
            _b));
        return (react_1.default.createElement("div", tslib_1.__assign({ className: cls, style: style, ref: ref || this.getTableEl }, util_1.obj.pickOthers(Object.keys(Table.propTypes), others)),
            table,
            loading ? react_1.default.createElement(LoadingComponent, { className: loadingcls }) : null));
    };
    Table.Column = column_1.default;
    Table.ColumnGroup = column_group_1.default;
    Table.Header = header_1.default;
    Table.Body = body_1.default;
    Table.Wrapper = wrapper_1.default;
    Table.Row = row_1.default;
    Table.Cell = cell_1.default;
    Table.Filter = filter_1.default;
    Table.Sort = sort_1.default;
    Table.propTypes = tslib_1.__assign(tslib_1.__assign({}, config_provider_1.default.propTypes), { 
        /**
         * 样式类名的品牌前缀
         */
        prefix: prop_types_1.default.string, pure: prop_types_1.default.bool, rtl: prop_types_1.default.bool, 
        /**
         * 表格元素的 table-layout 属性，设为 fixed 表示内容不会影响列的布局
         */
        tableLayout: prop_types_1.default.oneOf(['fixed', 'auto']), 
        /**
         * 表格的总长度，可以这么用：设置表格总长度 、设置部分列的宽度，这样表格会按照剩余空间大小，自动其他列分配宽度
         */
        tableWidth: prop_types_1.default.number, 
        /**
         * 自定义类名
         */
        className: prop_types_1.default.string, 
        /**
         * 自定义内联样式
         */
        style: prop_types_1.default.object, 
        /**
         * 尺寸 small为紧凑模式
         */
        size: prop_types_1.default.oneOf(['small', 'medium']), 
        /**
         * 表格展示的数据源
         */
        dataSource: prop_types_1.default.array, entireDataSource: prop_types_1.default.array, 
        /**
         * 点击表格每一行触发的事件
         * @param {Object} record 该行所对应的数据
         * @param {Number} index 该行所对应的序列
         * @param {Event} e DOM事件对象
         */
        onRowClick: prop_types_1.default.func, 
        /**
         * 悬浮在表格每一行的时候触发的事件
         * @param {Object} record 该行所对应的数据
         * @param {Number} index 该行所对应的序列
         * @param {Event} e DOM事件对象
         */
        onRowMouseEnter: prop_types_1.default.func, 
        /**
         * 离开表格每一行的时候触发的事件
         * @param {Object} record 该行所对应的数据
         * @param {Number} index 该行所对应的序列
         * @param {Event} e DOM事件对象
         */
        onRowMouseLeave: prop_types_1.default.func, 
        /**
         * 点击列排序触发的事件
         * @param {String} dataIndex 指定的排序的字段
         * @param {String} order 排序对应的顺序, 有`desc`和`asc`两种
         */
        onSort: prop_types_1.default.func, 
        /**
         * 点击过滤确认按钮触发的事件
         * @param {Object} filterParams 过滤的字段信息
         */
        onFilter: prop_types_1.default.func, 
        /**
         * 重设列尺寸的时候触发的事件
         * @param {String} dataIndex 指定重设的字段
         * @param {Number} value 列宽变动的数值
         */
        onResizeChange: prop_types_1.default.func, 
        /**
         * 设置每一行的属性，如果返回值和其他针对行操作的属性冲突则无效。
         * @param {Object} record 该行所对应的数据
         * @param {Number} index 该行所对应的序列
         * @returns {Object} 需要设置的行属性
         */
        rowProps: prop_types_1.default.func, 
        /**
         * 设置单元格的属性，通过该属性可以进行合并单元格
         * @param {Number} rowIndex 该行所对应的序列
         * @param {Number} colIndex 该列所对应的序列
         * @param {String} dataIndex 该列所对应的字段名称
         * @param {Object} record 该行对应的记录
         * @returns {Object} 返回td元素的所支持的属性对象
         */
        cellProps: prop_types_1.default.func, 
        /**
         * 虚拟滚动时向前保留渲染的行数
         */
        keepForwardRenderRows: prop_types_1.default.number, 
        /**
         * 表格是否具有边框
         */
        hasBorder: prop_types_1.default.bool, 
        /**
         * 表格是否具有头部
         */
        hasHeader: prop_types_1.default.bool, 
        /**
         * 表格是否是斑马线
         */
        isZebra: prop_types_1.default.bool, 
        /**
         * 表格是否在加载中
         */
        loading: prop_types_1.default.bool, 
        /**
         * 自定义 Loading 组件
         * 请务必传递 props, 使用方式： loadingComponent={props => <Loading {...props}/>}
         * @param {LoadingProps} props 需要透传给组件的参数
         * @return {React.ReactNode} 展示的组件
         */
        loadingComponent: prop_types_1.default.func, 
        /**
         * 当前过滤的的keys,使用此属性可以控制表格的头部的过滤选项中哪个菜单被选中,格式为 {dataIndex: {selectedKeys:[]}}
         * 示例:
         * 假设要控制dataIndex为id的列的过滤菜单中key为one的菜单项选中
         * `<Table filterParams={{id: {selectedKeys: ['one']}}}/>`
         */
        filterParams: prop_types_1.default.object, 
        /**
         * 当前排序的字段,使用此属性可以控制表格的字段的排序,格式为{[dataIndex]: 'asc' | 'desc' } , 例如  {id: 'desc'}
         */
        sort: prop_types_1.default.object, 
        /**
         * 自定义排序按钮，例如上下排布的: `{desc: <Icon style={{top: '6px', left: '4px'}} type={'arrow-down'} size="small" />, asc: <Icon style={{top: '-6px', left: '4px'}} type={'arrow-up'} size="small" />}`
         */
        sortIcons: prop_types_1.default.object, 
        /**
         * 自定义国际化文案对象
         * @property {String} ok 过滤器中确认按钮文案
         * @property {String} reset 过滤器中重置按钮文案
         * @property {String} empty 没有数据情况下 table内的文案
         * @property {String} asc 排序升序状态下的文案
         * @property {String} desc 排序将序状态下的文案
         * @property {String} expanded 可折叠行，展开状态下的文案
         * @property {String} folded 可折叠行，折叠状态下的文案
         * @property {String} filter 过滤器文案
         * @property {String} selectAll header里全选的按钮文案
         */
        locale: prop_types_1.default.object, components: prop_types_1.default.object, 
        /**
         * 等同于写子组件 Table.Column ，子组件优先级更高
         */
        columns: prop_types_1.default.array, 
        /**
         * 设置数据为空的时候的表格内容展现
         */
        emptyContent: prop_types_1.default.node, 
        /**
         * dataSource当中数据的主键，如果给定的数据源中的属性不包含该主键，会造成选择状态全部选中
         */
        primaryKey: prop_types_1.default.oneOfType([prop_types_1.default.symbol, prop_types_1.default.string]), lockType: prop_types_1.default.oneOf(['left', 'right']), wrapperContent: prop_types_1.default.any, refs: prop_types_1.default.object, 
        /**
         * 额外渲染行的渲染函数
         * @param {Object} record 该行所对应的数据
         * @param {Number} index 该行所对应的序列
         * @returns {Element} 渲染内容
         */
        expandedRowRender: prop_types_1.default.func, 
        /**
         * 设置行是否可展开，设置 false 为不可展开
         * @param {Object} record 该行所对应的数据
         * @param {Number} index 该行所对应的序列
         * @returns {Boolean} 是否可展开
         */
        rowExpandable: prop_types_1.default.func, 
        /**
         * 额外渲染行的缩进, 是个二维数组(eg:[1,1]) 分别表示左右两边的缩进
         */
        expandedRowIndent: prop_types_1.default.array, 
        /**
         * 是否显示点击展开额外渲染行的+号按钮
         */
        hasExpandedRowCtrl: prop_types_1.default.bool, 
        /**
         * 设置额外渲染行的属性
         * @param {Object} record 该行所对应的数据
         * @param {Number} index 该行所对应的序列
         * @returns {Object} 额外渲染行的属性
         */
        getExpandedColProps: prop_types_1.default.func, 
        /**
         * 当前展开的 Expand行 或者 Tree行 , 传入此属性为受控状态，一般配合 onRowOpen 使用
         */
        openRowKeys: prop_types_1.default.array, 
        /**
         * 默认情况下展开的 Expand行 或者 Tree行，非受控模式
         * @version 1.23.22
         */
        defaultOpenRowKeys: prop_types_1.default.array, 
        /**
         * 在 Expand行 或者 Tree行 展开或者收起的时候触发的事件
         * @param {Array} openRowKeys 展开的渲染行的key
         * @param {String} currentRowKey 当前点击的渲染行的key
         * @param {Boolean} expanded 当前点击是展开还是收起
         * @param {Object} currentRecord 当前点击额外渲染行的记录
         */
        onRowOpen: prop_types_1.default.func, onExpandedRowClick: prop_types_1.default.func, 
        /**
         * 表头是否固定，该属性配合maxBodyHeight使用，当内容区域的高度超过maxBodyHeight的时候，在内容区域会出现滚动条
         */
        fixedHeader: prop_types_1.default.bool, 
        /**
         * 最大内容区域的高度,在`fixedHeader`为`true`的时候,超过这个高度会出现滚动条
         */
        maxBodyHeight: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.string]), 
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
         * @property {Function} titleAddons `Function()=>Node` 选择列 表头添加的元素，在`single` `multiple` 下都生效
         */
        rowSelection: prop_types_1.default.object, 
        /**
         * 表头是否是sticky
         */
        stickyHeader: prop_types_1.default.bool, 
        /**
         * 距离窗口顶部达到指定偏移量后触发
         */
        offsetTop: prop_types_1.default.number, 
        /**
         * affix组件的的属性
         */
        affixProps: prop_types_1.default.object, 
        /**
         * 在tree模式下的缩进尺寸， 仅在isTree为true时候有效
         */
        indent: prop_types_1.default.number, 
        /**
         * 开启Table的tree模式, 接收的数据格式中包含children则渲染成tree table
         */
        isTree: prop_types_1.default.bool, 
        /**
         * 是否开启虚拟滚动
         */
        useVirtual: prop_types_1.default.bool, rowHeight: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.func]), 
        /**
         * 滚动到第几行，需要保证行高相同。1.22.15 版本之前仅在虚拟滚动场景下生效，之后在所有情况下生效
         * @version 1.22.15
         */
        scrollToRow: prop_types_1.default.number, 
        /**
         * 在内容区域滚动的时候触发的函数
         */
        onBodyScroll: prop_types_1.default.func, 
        /**
         * 开启时，getExpandedColProps() / rowProps() / expandedRowRender() 的第二个参数 index (该行所对应的序列) 将按照01,2,3,4...的顺序返回，否则返回真实index(0,2,4,6... / 1,3,5,7...)
         */
        expandedIndexSimulate: prop_types_1.default.bool, 
        /**
         * 在 hover 时出现十字参考轴，适用于表头比较复杂，需要做表头分类的场景。
         */
        crossline: prop_types_1.default.bool, lengths: prop_types_1.default.object });
    Table.defaultProps = {
        dataSource: [],
        onRowClick: noop,
        onRowMouseEnter: noop,
        onRowMouseLeave: noop,
        onSort: noop,
        onFilter: noop,
        onResizeChange: noop,
        size: 'medium',
        rowProps: noop,
        cellProps: noop,
        prefix: 'next-',
        hasBorder: true,
        keepForwardRenderRows: 10,
        hasHeader: true,
        isZebra: false,
        loading: false,
        expandedIndexSimulate: false,
        primaryKey: 'id',
        components: {},
        locale: zh_cn_1.default.Table,
        crossline: false,
    };
    Table.childContextTypes = {
        notRenderCellIndex: prop_types_1.default.array,
        lockType: prop_types_1.default.oneOf(['left', 'right']),
    };
    Table.contextTypes = {
        getTableInstance: prop_types_1.default.func,
        getTableInstanceForFixed: prop_types_1.default.func,
        getTableInstanceForVirtual: prop_types_1.default.func,
        getTableInstanceForExpand: prop_types_1.default.func,
    };
    return Table;
}(react_1.default.Component));
exports.default = (0, react_lifecycles_compat_1.polyfill)(Table);
