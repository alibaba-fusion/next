import { __assign, __extends, __rest } from "tslib";
import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import { dom } from '../util';
import VirtualBody from './virtual/body';
import { statics } from './util';
var noop = function () { };
export default function virtual(BaseComponent) {
    var VirtualTable = /** @class */ (function (_super) {
        __extends(VirtualTable, _super);
        function VirtualTable(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.onScroll = function () {
                // 避免横向滚动带来的性能问题
                var scrollTop = _this.bodyNode.scrollTop;
                if (scrollTop === _this.lastScrollTop) {
                    return;
                }
                var start = _this.computeScrollToRow(scrollTop);
                if (!('scrollToRow' in _this.props)) {
                    _this.setState({
                        scrollToRow: start,
                    });
                }
                _this.props.onBodyScroll(start);
                _this.lastScrollTop = scrollTop;
            };
            _this.getBodyNode = function (node, lockType) {
                lockType = lockType ? lockType.charAt(0).toUpperCase() + lockType.substr(1) : '';
                _this["body".concat(lockType, "Node")] = node;
            };
            _this.getTableInstance = function (type, instance) {
                type = type ? type.charAt(0).toUpperCase() + type.substr(1) : '';
                _this["table".concat(type, "Inc")] = instance;
            };
            var useVirtual = props.useVirtual, dataSource = props.dataSource;
            var hasVirtualData = useVirtual && dataSource && dataSource.length > 0;
            _this.state = {
                rowHeight: _this.props.rowHeight,
                scrollToRow: _this.props.scrollToRow,
                height: _this.props.maxBodyHeight,
                hasVirtualData: hasVirtualData,
            };
            return _this;
        }
        VirtualTable.prototype.getChildContext = function () {
            return {
                onVirtualScroll: this.onScroll,
                bodyHeight: this.computeBodyHeight(),
                innerTop: this.computeInnerTop(),
                getBodyNode: this.getBodyNode,
                getTableInstanceForVirtual: this.getTableInstance,
                rowSelection: this.rowSelection,
            };
        };
        VirtualTable.getDerivedStateFromProps = function (nextProps, prevState) {
            var state = {};
            if ('maxBodyHeight' in nextProps) {
                if (prevState.height !== nextProps.maxBodyHeight) {
                    state.height = nextProps.maxBodyHeight;
                }
            }
            if ('scrollToRow' in nextProps) {
                state.scrollToRow = nextProps.scrollToRow;
            }
            if (prevState.useVirtual !== nextProps.useVirtual || prevState.dataSource !== nextProps.dataSource) {
                state.hasVirtualData = nextProps.useVirtual && nextProps.dataSource && nextProps.dataSource.length > 0;
            }
            return state;
        };
        VirtualTable.prototype.componentDidMount = function () {
            if (this.state.hasVirtualData && this.bodyNode) {
                this.lastScrollTop = this.bodyNode.scrollTop;
            }
            else {
                this.lastScrollTop = 0;
            }
            this.adjustScrollTop();
            this.adjustSize();
            this.reComputeSize();
        };
        VirtualTable.prototype.componentDidUpdate = function () {
            this.adjustScrollTop();
            this.adjustSize();
            this.reComputeSize();
        };
        VirtualTable.prototype.reComputeSize = function () {
            var _a = this.state, rowHeight = _a.rowHeight, hasVirtualData = _a.hasVirtualData;
            if (typeof rowHeight === 'function' && hasVirtualData) {
                var row = this.getRowNode();
                var rowClientHeight = row && row.clientHeight;
                if (rowClientHeight !== this.state.rowHeight) {
                    this.setState({
                        rowHeight: rowClientHeight,
                    });
                }
            }
        };
        VirtualTable.prototype.computeBodyHeight = function () {
            var rowHeight = this.state.rowHeight;
            var dataSource = this.props.dataSource;
            if (typeof rowHeight === 'function') {
                return 0;
            }
            var count = 0;
            dataSource.forEach(function (item) {
                if (!item.__hidden) {
                    count += 1;
                }
            });
            return count * rowHeight;
        };
        VirtualTable.prototype.computeInnerTop = function () {
            var keepForwardRenderRows = this.props.keepForwardRenderRows;
            var rowHeight = this.state.rowHeight;
            if (typeof rowHeight === 'function') {
                return 0;
            }
            var start = Math.max(this.start - keepForwardRenderRows, 0);
            return start * rowHeight;
        };
        VirtualTable.prototype.getVisibleRange = function (ExpectStart) {
            var _a = this.state, height = _a.height, rowHeight = _a.rowHeight;
            var len = this.props.dataSource.length;
            var end, visibleCount = 0;
            var start = 0;
            if (typeof rowHeight === 'function') {
                // try get cell height;
                end = 1;
            }
            else {
                visibleCount = parseInt(dom.getPixels(height) / rowHeight, 10);
                if ('number' === typeof ExpectStart) {
                    start = ExpectStart < len ? ExpectStart : 0;
                }
                end = Math.min(+start + 1 + visibleCount + 10, len);
            }
            this.end = end;
            this.visibleCount = visibleCount;
            return {
                start: start,
                end: end,
            };
        };
        VirtualTable.prototype.adjustScrollTop = function () {
            var _a = this.state, rowHeight = _a.rowHeight, hasVirtualData = _a.hasVirtualData, scrollToRow = _a.scrollToRow;
            var oldScrollToRow = Math.floor(this.lastScrollTop / rowHeight);
            if (hasVirtualData && this.bodyNode) {
                //根据上次lastScrollTop记录的位置计算而来的scrollToRow位置不准 则以最新的scrollToRow为准重新校准位置（可能是由非用户滚动事件导致的props.scrollToRow发生了变化）
                if (oldScrollToRow !== scrollToRow) {
                    this.bodyNode.scrollTop = rowHeight * scrollToRow;
                }
                else {
                    this.bodyNode.scrollTop = (this.lastScrollTop % rowHeight) + rowHeight * scrollToRow;
                }
            }
        };
        VirtualTable.prototype.adjustSize = function () {
            if (this.state.hasVirtualData && this.bodyNode) {
                var body = this.bodyNode;
                var virtualScrollNode = body.querySelector('div');
                var clientHeight = body.clientHeight, clientWidth = body.clientWidth;
                var tableInc = this.tableInc;
                var tableNode = findDOMNode(tableInc);
                var prefix = this.props.prefix;
                var headerNode = tableNode.querySelector(".".concat(prefix, "table-header table"));
                var headerClientWidth = headerNode && headerNode.clientWidth;
                // todo 2.0 设置宽度这个可以去掉
                if (clientWidth < headerClientWidth) {
                    dom.setStyle(virtualScrollNode, 'min-width', headerClientWidth);
                    var leftNode = this.bodyLeftNode;
                    var rightNode = this.bodyRightNode;
                    leftNode && dom.setStyle(leftNode, 'max-height', clientHeight);
                    rightNode && dom.setStyle(rightNode, 'max-height', clientHeight);
                }
                else {
                    dom.setStyle(virtualScrollNode, 'min-width', 'auto');
                }
            }
        };
        VirtualTable.prototype.computeScrollToRow = function (offset) {
            var rowHeight = this.state.rowHeight;
            var start = parseInt(offset / rowHeight);
            this.start = start;
            return start;
        };
        VirtualTable.prototype.getRowNode = function () {
            try {
                // in case of finding an unmounted component due to cached data
                // need to clear refs of this.tableInc when dataSource Changed
                // use try catch for temporary
                return findDOMNode(this.tableInc.getRowRef(0));
            }
            catch (error) {
                return null;
            }
        };
        VirtualTable.prototype.render = function () {
            /* eslint-disable no-unused-vars, prefer-const */
            var _a = this.props, useVirtual = _a.useVirtual, components = _a.components, dataSource = _a.dataSource, fixedHeader = _a.fixedHeader, rowHeight = _a.rowHeight, scrollToRow = _a.scrollToRow, onBodyScroll = _a.onBodyScroll, keepForwardRenderRows = _a.keepForwardRenderRows, others = __rest(_a, ["useVirtual", "components", "dataSource", "fixedHeader", "rowHeight", "scrollToRow", "onBodyScroll", "keepForwardRenderRows"]);
            var entireDataSource = dataSource;
            var newDataSource = dataSource;
            this.rowSelection = this.props.rowSelection;
            if (this.state.hasVirtualData) {
                newDataSource = [];
                components = __assign({}, components);
                var _b = this.getVisibleRange(this.state.scrollToRow), start_1 = _b.start, end_1 = _b.end;
                var count_1 = -1;
                dataSource.forEach(function (current, index, record) {
                    if (!current.__hidden) {
                        count_1 += 1;
                        if (count_1 >= Math.max(start_1 - keepForwardRenderRows, 0) && count_1 < end_1) {
                            newDataSource.push(current);
                        }
                    }
                    current.__rowIndex = index;
                });
                if (!components.Body) {
                    components.Body = VirtualBody;
                }
                fixedHeader = true;
            }
            return (React.createElement(BaseComponent, __assign({}, others, { scrollToRow: scrollToRow, dataSource: newDataSource, entireDataSource: entireDataSource, components: components, fixedHeader: fixedHeader })));
        };
        VirtualTable.VirtualBody = VirtualBody;
        VirtualTable.propTypes = __assign({ 
            /**
             * 是否开启虚拟滚动
             */
            useVirtual: PropTypes.bool, 
            /**
             * 设置行高
             */
            rowHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.func]), maxBodyHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), primaryKey: PropTypes.oneOfType([PropTypes.symbol, PropTypes.string]), dataSource: PropTypes.array, 
            /**
             * 在内容区域滚动的时候触发的函数
             */
            onBodyScroll: PropTypes.func, keepForwardRenderRows: PropTypes.number }, BaseComponent.propTypes);
        VirtualTable.defaultProps = __assign(__assign({}, BaseComponent.defaultProps), { primaryKey: 'id', rowHeight: noop, maxBodyHeight: 200, components: {}, prefix: 'next-', onBodyScroll: noop, keepForwardRenderRows: 10 });
        VirtualTable.childContextTypes = {
            onVirtualScroll: PropTypes.func,
            bodyHeight: PropTypes.number,
            innerTop: PropTypes.number,
            getBodyNode: PropTypes.func,
            getTableInstanceForVirtual: PropTypes.func,
            rowSelection: PropTypes.object,
        };
        return VirtualTable;
    }(React.Component));
    statics(VirtualTable, BaseComponent);
    return polyfill(VirtualTable);
}
