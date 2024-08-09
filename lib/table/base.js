'use strict';

exports.__esModule = true;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _classnames3 = require('classnames');

var _classnames4 = _interopRequireDefault(_classnames3);

var _shallowElementEquals = require('shallow-element-equals');

var _shallowElementEquals2 = _interopRequireDefault(_shallowElementEquals);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _loading = require('../loading');

var _loading2 = _interopRequireDefault(_loading);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _zhCn = require('../locale/zh-cn');

var _zhCn2 = _interopRequireDefault(_zhCn);

var _util = require('../util');

var _body = require('./base/body');

var _body2 = _interopRequireDefault(_body);

var _header = require('./base/header');

var _header2 = _interopRequireDefault(_header);

var _wrapper = require('./base/wrapper');

var _wrapper2 = _interopRequireDefault(_wrapper);

var _row = require('./base/row');

var _row2 = _interopRequireDefault(_row);

var _cell = require('./base/cell');

var _cell2 = _interopRequireDefault(_cell);

var _filter = require('./base/filter');

var _filter2 = _interopRequireDefault(_filter);

var _sort = require('./base/sort');

var _sort2 = _interopRequireDefault(_sort);

var _column = require('./column');

var _column2 = _interopRequireDefault(_column);

var _columnGroup = require('./column-group');

var _columnGroup2 = _interopRequireDefault(_columnGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Children = _react2.default.Children,
    noop = function noop() {};

//<Table>
//    <Table.Column/>
//    <Table.ColumnGroup>
//      <Table.Column/>
//      <Table.Column/>
//    </Table.ColumnGroup>
//</Table>

/** Table */
var Table = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(Table, _React$Component);

    function Table(props, context) {
        (0, _classCallCheck3.default)(this, Table);

        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props, context));

        _this.state = {
            sort: _this.props.sort || {}
        };

        _this.onSort = function (dataIndex, order, sort) {
            if (typeof _this.props.sort === 'undefined') {
                _this.setState({
                    sort: sort
                }, function () {
                    _this.props.onSort(dataIndex, order, sort);
                });
            } else {
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
            var cellRef = 'header_cell_' + i + '_' + j;
            if (!cell) {
                return _this[cellRef];
            }
            _this[cellRef] = cell;
        };

        _this.getRowRef = function (i, row) {
            var rowRef = 'row_' + i;
            if (!row) {
                return _this[rowRef];
            }
            _this[rowRef] = row;
        };

        _this.getCellRef = function (i, j, cell) {
            var cellRef = 'cell_' + i + '_' + j;
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
                        var currentCol = (0, _reactDom.findDOMNode)(_this.getCellRef(index, colIndex));
                        currentCol && _util.dom[funcName](currentCol, 'hovered');
                    } catch (error) {
                        return null;
                    }
                });
            }
        };

        _this.findEventTarget = function (e) {
            var prefix = _this.props.prefix;

            var target = _util.dom.getClosest(e.target, 'td.' + prefix + 'table-cell');
            var colIndex = target && target.getAttribute('data-next-table-col');
            var rowIndex = target && target.getAttribute('data-next-table-row');

            try {
                // in case of finding an unmounted component due to cached data
                // need to clear refs of this.tableInc when dataSource Changed
                // in virtual table
                var currentCol = (0, _reactDom.findDOMNode)(_this.getCellRef(rowIndex, colIndex));
                if (currentCol === target) {
                    return {
                        colIndex: colIndex,
                        rowIndex: rowIndex
                    };
                }
            } catch (error) {
                return {};
            }

            return {};
        };

        _this.onBodyMouseOver = function (e) {
            var crossline = _this.props.crossline;

            if (!crossline) {
                return;
            }

            var _this$findEventTarget = _this.findEventTarget(e),
                colIndex = _this$findEventTarget.colIndex,
                rowIndex = _this$findEventTarget.rowIndex;
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

            var _this$findEventTarget2 = _this.findEventTarget(e),
                colIndex = _this$findEventTarget2.colIndex,
                rowIndex = _this$findEventTarget2.rowIndex;
            // colIndex, rowIndex are string


            if (!colIndex || !rowIndex) {
                return;
            }
            _this.handleColHoverClass(_this.rowIndex, _this.colIndex, false);
            _this.colIndex = -1;
            _this.rowIndex = -1;
        };

        _this.addColIndex = function (children) {
            var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            children.forEach(function (child, i) {
                child.__colIndex = start + i;
            });
        };

        _this.getTableEl = function (ref) {
            _this.tableEl = ref;
        };

        var _this$context = _this.context,
            getTableInstance = _this$context.getTableInstance,
            getTableInstanceForVirtual = _this$context.getTableInstanceForVirtual,
            getTableInstanceForFixed = _this$context.getTableInstanceForFixed,
            getTableInstanceForExpand = _this$context.getTableInstanceForExpand;

        getTableInstance && getTableInstance(props.lockType, _this);
        getTableInstanceForFixed && getTableInstanceForFixed(props.lockType, _this);
        getTableInstanceForVirtual && getTableInstanceForVirtual(props.lockType, _this);
        getTableInstanceForExpand && getTableInstanceForExpand(_this);
        _this.notRenderCellIndex = [];
        return _this;
    }

    Table.prototype.getChildContext = function getChildContext() {
        return {
            notRenderCellIndex: this.notRenderCellIndex || [],
            lockType: this.props.lockType
        };
    };

    Table.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
        var state = {};

        if (typeof nextProps.sort !== 'undefined') {
            state.sort = nextProps.sort;
        }

        return state;
    };

    Table.prototype.componentDidMount = function componentDidMount() {
        this.notRenderCellIndex = [];
    };

    Table.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextProps.pure) {
            var isEqual = (0, _shallowElementEquals2.default)(nextProps, this.props) && _util.obj.shallowEqual(nextState, this.state) && _util.obj.shallowEqual(nextContext, this.context);
            return !isEqual;
        }

        return true;
    };

    Table.prototype.componentDidUpdate = function componentDidUpdate() {
        this.notRenderCellIndex = [];
    };

    Table.prototype.normalizeChildrenState = function normalizeChildrenState(props) {
        var columns = props.columns;
        if (props.children) {
            columns = this.normalizeChildren(props);
        }
        return this.fetchInfoFromBinaryChildren(columns);
    };

    // 将React结构化数据提取props转换成数组


    Table.prototype.normalizeChildren = function normalizeChildren(props) {
        var columns = props.columns;

        var getChildren = function getChildren(children) {
            var ret = [];
            Children.forEach(children, function (child) {
                if (child) {
                    var _props = (0, _extends3.default)({}, child.props);

                    if (child.ref) {
                        _props.ref = child.ref;
                    }

                    if (!(child && ['function', 'object'].indexOf((0, _typeof3.default)(child.type)) > -1 && (child.type._typeMark === 'column' || child.type._typeMark === 'columnGroup'))) {
                        _util.log.warning('Use <Table.Column/>, <Table.ColumnGroup/> as child.');
                    }
                    ret.push(_props);
                    if (child.props.children) {
                        _props.children = getChildren(child.props.children);
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

    Table.prototype.fetchInfoFromBinaryChildren = function fetchInfoFromBinaryChildren(children) {
        var hasGroupHeader = false;
        var flatChildren = [],
            groupChildren = [],
            getChildren = function getChildren() {
            var propsChildren = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var level = arguments[1];

            groupChildren[level] = groupChildren[level] || [];
            propsChildren.forEach(function (child) {
                child.headerCellRowIndex = level;
                child.headerCellColIndex = groupChildren[level].length;
                if (child.children) {
                    hasGroupHeader = true;
                    getChildren(child.children, level + 1);
                } else {
                    flatChildren.push(child);
                }
                groupChildren[level].push(child);
            });
        },
            getColSpan = function getColSpan(children, colSpan) {
            colSpan = colSpan || 0;
            children.forEach(function (child) {
                if (child.children) {
                    colSpan = getColSpan(child.children, colSpan);
                } else {
                    colSpan += 1;
                }
            });
            return colSpan;
        };

        getChildren(children, 0);

        groupChildren.forEach(function (groupChild, i) {
            groupChild.forEach(function (child, j) {
                var colSpan = void 0;
                var children = child.children;

                if (children) {
                    colSpan = getColSpan(children);
                    child.colSpan = colSpan;
                    groupChildren[i][j] = child;
                }
            });
        });

        var _props2 = this.props,
            lockType = _props2.lockType,
            lengths = _props2.lengths;

        var start = lockType === 'right' ? lengths.origin - lengths.right : 0;
        this.addColIndex(flatChildren, start);

        return {
            flatChildren: flatChildren,
            groupChildren: groupChildren,
            hasGroupHeader: hasGroupHeader
        };
    };

    Table.prototype.renderColGroup = function renderColGroup(flatChildren) {
        var cols = flatChildren.map(function (col, index) {
            var width = col.width;
            var style = {};
            if (width) {
                style = {
                    width: width
                };
            }

            return _react2.default.createElement('col', { style: style, key: index });
        });
        return _react2.default.createElement(
            'colgroup',
            { key: 'table-colgroup' },
            cols
        );
    };

    // 通过头部和扁平的结构渲染表格
    Table.prototype.renderTable = function renderTable(groupChildren, flatChildren) {
        if (flatChildren.length || !flatChildren.length && !this.props.lockType) {
            var _props3 = this.props,
                hasHeader = _props3.hasHeader,
                components = _props3.components,
                prefix = _props3.prefix,
                wrapperContent = _props3.wrapperContent,
                filterParams = _props3.filterParams,
                locale = _props3.locale,
                dataSource = _props3.dataSource,
                emptyContent = _props3.emptyContent,
                loading = _props3.loading,
                primaryKey = _props3.primaryKey,
                cellProps = _props3.cellProps,
                rowProps = _props3.rowProps,
                onRowClick = _props3.onRowClick,
                onRowMouseEnter = _props3.onRowMouseEnter,
                onRowMouseLeave = _props3.onRowMouseLeave,
                expandedIndexSimulate = _props3.expandedIndexSimulate,
                pure = _props3.pure,
                rtl = _props3.rtl,
                crossline = _props3.crossline,
                sortIcons = _props3.sortIcons,
                tableWidth = _props3.tableWidth;
            var sort = this.state.sort;
            var _components$Header = components.Header,
                Header = _components$Header === undefined ? _header2.default : _components$Header,
                _components$Wrapper = components.Wrapper,
                Wrapper = _components$Wrapper === undefined ? _wrapper2.default : _components$Wrapper,
                _components$Body = components.Body,
                Body = _components$Body === undefined ? _body2.default : _components$Body;

            var colGroup = this.renderColGroup(flatChildren);

            return [_react2.default.createElement('div', {
                key: prefix + 'table-column-resize-proxy',
                ref: this.getResizeProxyDomRef,
                className: prefix + 'table-column-resize-proxy'
            }), _react2.default.createElement(
                Wrapper,
                {
                    key: prefix + 'table-wrapper',
                    colGroup: colGroup,
                    ref: this.getWrapperRef,
                    prefix: prefix,
                    tableWidth: tableWidth
                },
                hasHeader ? _react2.default.createElement(Header, {
                    prefix: prefix,
                    rtl: rtl,
                    pure: pure,
                    affixRef: this.getAffixRef,
                    colGroup: colGroup,
                    className: prefix + 'table-header',
                    filterParams: filterParams,
                    tableEl: this.tableEl,
                    columns: groupChildren,
                    locale: locale,
                    headerCellRef: this.getHeaderCellRef,
                    components: components,
                    onFilter: this.onFilter,
                    sort: sort,
                    onResizeChange: this.onResizeChange,
                    onSort: this.onSort,
                    sortIcons: sortIcons,
                    tableWidth: tableWidth,
                    resizeProxyDomRef: this.resizeProxyDomRef
                }) : null,
                _react2.default.createElement(Body, {
                    prefix: prefix,
                    rtl: rtl,
                    pure: pure,
                    crossline: crossline,
                    colGroup: colGroup,
                    className: prefix + 'table-body',
                    components: components,
                    loading: loading,
                    emptyContent: emptyContent,
                    getCellProps: cellProps,
                    primaryKey: primaryKey,
                    getRowProps: rowProps,
                    columns: flatChildren,
                    rowRef: this.getRowRef,
                    cellRef: this.getCellRef,
                    onRowClick: onRowClick,
                    expandedIndexSimulate: expandedIndexSimulate,
                    tableEl: this.tableEl,
                    onRowMouseEnter: onRowMouseEnter,
                    onRowMouseLeave: onRowMouseLeave,
                    dataSource: dataSource,
                    locale: locale,
                    onBodyMouseOver: this.onBodyMouseOver,
                    onBodyMouseOut: this.onBodyMouseOut,
                    tableWidth: tableWidth
                }),
                wrapperContent
            )];
        } else {
            return null;
        }
    };

    /**
     * @param event
     * @returns {Object} { rowIndex: string; colIndex: string }
     */


    Table.prototype.render = function render() {
        var _classnames, _classnames2;

        var ret = this.normalizeChildrenState(this.props);
        this.groupChildren = ret.groupChildren;
        this.flatChildren = ret.flatChildren;
        /* eslint-disable no-unused-vars, prefer-const */
        var table = this.renderTable(ret.groupChildren, ret.flatChildren),
            _props4 = this.props,
            className = _props4.className,
            style = _props4.style,
            hasBorder = _props4.hasBorder,
            isZebra = _props4.isZebra,
            loading = _props4.loading,
            size = _props4.size,
            hasHeader = _props4.hasHeader,
            prefix = _props4.prefix,
            dataSource = _props4.dataSource,
            entireDataSource = _props4.entireDataSource,
            onSort = _props4.onSort,
            onResizeChange = _props4.onResizeChange,
            onRowClick = _props4.onRowClick,
            onRowMouseEnter = _props4.onRowMouseEnter,
            onRowMouseLeave = _props4.onRowMouseLeave,
            onFilter = _props4.onFilter,
            rowProps = _props4.rowProps,
            cellProps = _props4.cellProps,
            scrollToRow = _props4.scrollToRow,
            primaryKey = _props4.primaryKey,
            components = _props4.components,
            wrapperContent = _props4.wrapperContent,
            lockType = _props4.lockType,
            locale = _props4.locale,
            expandedIndexSimulate = _props4.expandedIndexSimulate,
            refs = _props4.refs,
            pure = _props4.pure,
            rtl = _props4.rtl,
            emptyContent = _props4.emptyContent,
            filterParams = _props4.filterParams,
            columns = _props4.columns,
            sortIcons = _props4.sortIcons,
            _props4$loadingCompon = _props4.loadingComponent,
            LoadingComponent = _props4$loadingCompon === undefined ? _loading2.default : _props4$loadingCompon,
            tableLayout = _props4.tableLayout,
            tableWidth = _props4.tableWidth,
            ref = _props4.ref,
            others = (0, _objectWithoutProperties3.default)(_props4, ['className', 'style', 'hasBorder', 'isZebra', 'loading', 'size', 'hasHeader', 'prefix', 'dataSource', 'entireDataSource', 'onSort', 'onResizeChange', 'onRowClick', 'onRowMouseEnter', 'onRowMouseLeave', 'onFilter', 'rowProps', 'cellProps', 'scrollToRow', 'primaryKey', 'components', 'wrapperContent', 'lockType', 'locale', 'expandedIndexSimulate', 'refs', 'pure', 'rtl', 'emptyContent', 'filterParams', 'columns', 'sortIcons', 'loadingComponent', 'tableLayout', 'tableWidth', 'ref']),
            cls = (0, _classnames4.default)((_classnames = {}, _classnames[prefix + 'table'] = true, _classnames[prefix + 'table-' + size] = size, _classnames[prefix + 'table-layout-' + tableLayout] = tableLayout, _classnames[prefix + 'table-loading'] = loading, _classnames['only-bottom-border'] = !hasBorder, _classnames['no-header'] = !hasHeader, _classnames.zebra = isZebra, _classnames[className] = className, _classnames));


        if (rtl) {
            others.dir = 'rtl';
        }

        var loadingcls = (0, _classnames4.default)((_classnames2 = {}, _classnames2[prefix + 'table-loading-content'] = true, _classnames2));

        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({
                className: cls,
                style: style,
                ref: ref || this.getTableEl
            }, _util.obj.pickOthers(Object.keys(Table.propTypes), others)),
            table,
            loading ? _react2.default.createElement(LoadingComponent, { className: loadingcls }) : null
        );
    };

    return Table;
}(_react2.default.Component), _class.Column = _column2.default, _class.ColumnGroup = _columnGroup2.default, _class.Header = _header2.default, _class.Body = _body2.default, _class.Wrapper = _wrapper2.default, _class.Row = _row2.default, _class.Cell = _cell2.default, _class.Filter = _filter2.default, _class.Sort = _sort2.default, _class.propTypes = (0, _extends3.default)({}, _configProvider2.default.propTypes, {
    /**
     * 样式类名的品牌前缀
     */
    prefix: _propTypes2.default.string,
    pure: _propTypes2.default.bool,
    rtl: _propTypes2.default.bool,
    /**
     * 表格元素的 table-layout 属性，设为 fixed 表示内容不会影响列的布局
     */
    tableLayout: _propTypes2.default.oneOf(['fixed', 'auto']),
    /**
     * 表格的总长度，可以这么用：设置表格总长度 、设置部分列的宽度，这样表格会按照剩余空间大小，自动其他列分配宽度
     */
    tableWidth: _propTypes2.default.number,
    /**
     * 自定义类名
     */
    className: _propTypes2.default.string,
    /**
     * 自定义内联样式
     */
    style: _propTypes2.default.object,
    /**
     * 尺寸 small为紧凑模式
     */
    size: _propTypes2.default.oneOf(['small', 'medium']),
    /**
     * 表格展示的数据源
     */
    dataSource: _propTypes2.default.array,
    entireDataSource: _propTypes2.default.array,
    /**
     * 点击表格每一行触发的事件
     * @param {Object} record 该行所对应的数据
     * @param {Number} index 该行所对应的序列
     * @param {Event} e DOM事件对象
     */
    onRowClick: _propTypes2.default.func,
    /**
     * 悬浮在表格每一行的时候触发的事件
     * @param {Object} record 该行所对应的数据
     * @param {Number} index 该行所对应的序列
     * @param {Event} e DOM事件对象
     */
    onRowMouseEnter: _propTypes2.default.func,
    /**
     * 离开表格每一行的时候触发的事件
     * @param {Object} record 该行所对应的数据
     * @param {Number} index 该行所对应的序列
     * @param {Event} e DOM事件对象
     */
    onRowMouseLeave: _propTypes2.default.func,
    /**
     * 点击列排序触发的事件
     * @param {String} dataIndex 指定的排序的字段
     * @param {String} order 排序对应的顺序, 有`desc`和`asc`两种
     */
    onSort: _propTypes2.default.func,
    /**
     * 点击过滤确认按钮触发的事件
     * @param {Object} filterParams 过滤的字段信息
     */
    onFilter: _propTypes2.default.func,
    /**
     * 重设列尺寸的时候触发的事件
     * @param {String} dataIndex 指定重设的字段
     * @param {Number} value 列宽变动的数值
     */
    onResizeChange: _propTypes2.default.func,
    /**
     * 设置每一行的属性，如果返回值和其他针对行操作的属性冲突则无效。
     * @param {Object} record 该行所对应的数据
     * @param {Number} index 该行所对应的序列
     * @returns {Object} 需要设置的行属性
     */
    rowProps: _propTypes2.default.func,
    /**
     * 设置单元格的属性，通过该属性可以进行合并单元格
     * @param {Number} rowIndex 该行所对应的序列
     * @param {Number} colIndex 该列所对应的序列
     * @param {String} dataIndex 该列所对应的字段名称
     * @param {Object} record 该行对应的记录
     * @returns {Object} 返回td元素的所支持的属性对象
     */
    cellProps: _propTypes2.default.func,
    /**
     * 虚拟滚动时向前保留渲染的行数
     */
    keepForwardRenderRows: _propTypes2.default.number,
    /**
     * 表格是否具有边框
     */
    hasBorder: _propTypes2.default.bool,
    /**
     * 表格是否具有头部
     */
    hasHeader: _propTypes2.default.bool,
    /**
     * 表格是否是斑马线
     */
    isZebra: _propTypes2.default.bool,
    /**
     * 表格是否在加载中
     */
    loading: _propTypes2.default.bool,
    /**
     * 自定义 Loading 组件
     * 请务必传递 props, 使用方式： loadingComponent={props => <Loading {...props}/>}
     * @param {LoadingProps} props 需要透传给组件的参数
     * @return {React.ReactNode} 展示的组件
     */
    loadingComponent: _propTypes2.default.func,
    /**
     * 当前过滤的的keys,使用此属性可以控制表格的头部的过滤选项中哪个菜单被选中,格式为 {dataIndex: {selectedKeys:[]}}
     * 示例:
     * 假设要控制dataIndex为id的列的过滤菜单中key为one的菜单项选中
     * `<Table filterParams={{id: {selectedKeys: ['one']}}}/>`
     */
    filterParams: _propTypes2.default.object,
    /**
     * 当前排序的字段,使用此属性可以控制表格的字段的排序,格式为{[dataIndex]: 'asc' | 'desc' } , 例如  {id: 'desc'}
     */
    sort: _propTypes2.default.object,
    /**
     * 自定义排序按钮，例如上下排布的: `{desc: <Icon style={{top: '6px', left: '4px'}} type={'arrow-down'} size="small" />, asc: <Icon style={{top: '-6px', left: '4px'}} type={'arrow-up'} size="small" />}`
     */
    sortIcons: _propTypes2.default.object,
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
    locale: _propTypes2.default.object,
    components: _propTypes2.default.object,
    /**
     * 等同于写子组件 Table.Column ，子组件优先级更高
     */
    columns: _propTypes2.default.array,
    /**
     * 设置数据为空的时候的表格内容展现
     */
    emptyContent: _propTypes2.default.node,
    /**
     * dataSource当中数据的主键，如果给定的数据源中的属性不包含该主键，会造成选择状态全部选中
     */
    primaryKey: _propTypes2.default.oneOfType([_propTypes2.default.symbol, _propTypes2.default.string]),
    lockType: _propTypes2.default.oneOf(['left', 'right']),
    wrapperContent: _propTypes2.default.any,
    refs: _propTypes2.default.object,
    /**
     * 额外渲染行的渲染函数
     * @param {Object} record 该行所对应的数据
     * @param {Number} index 该行所对应的序列
     * @returns {Element} 渲染内容
     */
    expandedRowRender: _propTypes2.default.func,
    /**
     * 设置行是否可展开，设置 false 为不可展开
     * @param {Object} record 该行所对应的数据
     * @param {Number} index 该行所对应的序列
     * @returns {Boolean} 是否可展开
     */
    rowExpandable: _propTypes2.default.func,
    /**
     * 额外渲染行的缩进, 是个二维数组(eg:[1,1]) 分别表示左右两边的缩进
     */
    expandedRowIndent: _propTypes2.default.array,
    /**
     * 是否显示点击展开额外渲染行的+号按钮
     */
    hasExpandedRowCtrl: _propTypes2.default.bool,
    /**
     * 设置额外渲染行的属性
     * @param {Object} record 该行所对应的数据
     * @param {Number} index 该行所对应的序列
     * @returns {Object} 额外渲染行的属性
     */
    getExpandedColProps: _propTypes2.default.func,
    /**
     * 当前展开的 Expand行 或者 Tree行 , 传入此属性为受控状态，一般配合 onRowOpen 使用
     */
    openRowKeys: _propTypes2.default.array,
    /**
     * 默认情况下展开的 Expand行 或者 Tree行，非受控模式
     * @version 1.23.22
     */
    defaultOpenRowKeys: _propTypes2.default.array,
    /**
     * 在 Expand行 或者 Tree行 展开或者收起的时候触发的事件
     * @param {Array} openRowKeys 展开的渲染行的key
     * @param {String} currentRowKey 当前点击的渲染行的key
     * @param {Boolean} expanded 当前点击是展开还是收起
     * @param {Object} currentRecord 当前点击额外渲染行的记录
     */
    onRowOpen: _propTypes2.default.func,
    onExpandedRowClick: _propTypes2.default.func,
    /**
     * 表头是否固定，该属性配合maxBodyHeight使用，当内容区域的高度超过maxBodyHeight的时候，在内容区域会出现滚动条
     */
    fixedHeader: _propTypes2.default.bool,
    /**
     * 最大内容区域的高度,在`fixedHeader`为`true`的时候,超过这个高度会出现滚动条
     */
    maxBodyHeight: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
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
    rowSelection: _propTypes2.default.object,
    /**
     * 表头是否是sticky
     */
    stickyHeader: _propTypes2.default.bool,
    /**
     * 距离窗口顶部达到指定偏移量后触发
     */
    offsetTop: _propTypes2.default.number,
    /**
     * affix组件的的属性
     */
    affixProps: _propTypes2.default.object,
    /**
     * 在tree模式下的缩进尺寸， 仅在isTree为true时候有效
     */
    indent: _propTypes2.default.number,
    /**
     * 开启Table的tree模式, 接收的数据格式中包含children则渲染成tree table
     */
    isTree: _propTypes2.default.bool,
    /**
     * 是否开启虚拟滚动
     */
    useVirtual: _propTypes2.default.bool,
    rowHeight: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
    /**
     * 滚动到第几行，需要保证行高相同。1.22.15 版本之前仅在虚拟滚动场景下生效，之后在所有情况下生效
     * @version 1.22.15
     */
    scrollToRow: _propTypes2.default.number,
    /**
     * 在内容区域滚动的时候触发的函数
     */
    onBodyScroll: _propTypes2.default.func,
    /**
     * 开启时，getExpandedColProps() / rowProps() / expandedRowRender() 的第二个参数 index (该行所对应的序列) 将按照01,2,3,4...的顺序返回，否则返回真实index(0,2,4,6... / 1,3,5,7...)
     */
    expandedIndexSimulate: _propTypes2.default.bool,
    /**
     * 在 hover 时出现十字参考轴，适用于表头比较复杂，需要做表头分类的场景。
     */
    crossline: _propTypes2.default.bool,
    lengths: _propTypes2.default.object
}), _class.defaultProps = {
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
    locale: _zhCn2.default.Table,
    crossline: false
}, _class.childContextTypes = {
    notRenderCellIndex: _propTypes2.default.array,
    lockType: _propTypes2.default.oneOf(['left', 'right'])
}, _class.contextTypes = {
    getTableInstance: _propTypes2.default.func,
    getTableInstanceForFixed: _propTypes2.default.func,
    getTableInstanceForVirtual: _propTypes2.default.func,
    getTableInstanceForExpand: _propTypes2.default.func
}, _temp);
Table.displayName = 'Table';
exports.default = (0, _reactLifecyclesCompat.polyfill)(Table);
module.exports = exports.default;
module.exports.default = exports.default;