import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import { dom } from '../util';
import VirtualBody from './virtual/body';
import { statics } from './util';

var noop = function noop() {};
export default function virtual(BaseComponent) {
    var _class, _temp;

    var VirtualTable = (_temp = _class = function (_React$Component) {
        _inherits(VirtualTable, _React$Component);

        function VirtualTable(props, context) {
            _classCallCheck(this, VirtualTable);

            var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

            _this.onScroll = function () {
                // 避免横向滚动带来的性能问题
                var scrollTop = _this.bodyNode.scrollTop;
                if (scrollTop === _this.lastScrollTop) {
                    return;
                }
                var start = _this.computeScrollToRow(scrollTop);
                if (!('scrollToRow' in _this.props)) {
                    _this.setState({
                        scrollToRow: start
                    });
                }
                _this.props.onBodyScroll(start);
                _this.lastScrollTop = scrollTop;
            };

            _this.getBodyNode = function (node, lockType) {
                lockType = lockType ? lockType.charAt(0).toUpperCase() + lockType.substr(1) : '';
                _this['body' + lockType + 'Node'] = node;
            };

            _this.getTableInstance = function (type, instance) {
                type = type ? type.charAt(0).toUpperCase() + type.substr(1) : '';
                _this['table' + type + 'Inc'] = instance;
            };

            var useVirtual = props.useVirtual,
                dataSource = props.dataSource;


            var hasVirtualData = useVirtual && dataSource && dataSource.length > 0;

            _this.state = {
                rowHeight: _this.props.rowHeight,
                scrollToRow: _this.props.scrollToRow,
                height: _this.props.maxBodyHeight,
                hasVirtualData: hasVirtualData
            };
            return _this;
        }

        VirtualTable.prototype.getChildContext = function getChildContext() {
            return {
                onVirtualScroll: this.onScroll,
                bodyHeight: this.computeBodyHeight(),
                innerTop: this.computeInnerTop(),
                getBodyNode: this.getBodyNode,
                getTableInstanceForVirtual: this.getTableInstance,
                rowSelection: this.rowSelection
            };
        };

        VirtualTable.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
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

        VirtualTable.prototype.componentDidMount = function componentDidMount() {
            if (this.state.hasVirtualData && this.bodyNode) {
                this.lastScrollTop = this.bodyNode.scrollTop;
            } else {
                this.lastScrollTop = 0;
            }

            this.adjustScrollTop();
            this.adjustSize();
            this.reComputeSize();
        };

        VirtualTable.prototype.componentDidUpdate = function componentDidUpdate() {
            this.adjustScrollTop();
            this.adjustSize();
            this.reComputeSize();
        };

        VirtualTable.prototype.reComputeSize = function reComputeSize() {
            var _state = this.state,
                rowHeight = _state.rowHeight,
                hasVirtualData = _state.hasVirtualData;

            if (typeof rowHeight === 'function' && hasVirtualData) {
                var row = this.getRowNode();
                var rowClientHeight = row && row.clientHeight;
                if (rowClientHeight !== this.state.rowHeight) {
                    this.setState({
                        rowHeight: rowClientHeight
                    });
                }
            }
        };

        VirtualTable.prototype.computeBodyHeight = function computeBodyHeight() {
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

        VirtualTable.prototype.computeInnerTop = function computeInnerTop() {
            var keepForwardRenderRows = this.props.keepForwardRenderRows;
            var rowHeight = this.state.rowHeight;

            if (typeof rowHeight === 'function') {
                return 0;
            }

            var start = Math.max(this.start - keepForwardRenderRows, 0);

            return start * rowHeight;
        };

        VirtualTable.prototype.getVisibleRange = function getVisibleRange(ExpectStart) {
            var _state2 = this.state,
                height = _state2.height,
                rowHeight = _state2.rowHeight;

            var len = this.props.dataSource.length;

            var end = void 0,
                visibleCount = 0;
            var start = 0;
            if (typeof rowHeight === 'function') {
                // try get cell height;
                end = 1;
            } else {
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
                end: end
            };
        };

        VirtualTable.prototype.adjustScrollTop = function adjustScrollTop() {
            var _state3 = this.state,
                rowHeight = _state3.rowHeight,
                hasVirtualData = _state3.hasVirtualData,
                scrollToRow = _state3.scrollToRow;

            var oldScrollToRow = Math.floor(this.lastScrollTop / rowHeight);
            if (hasVirtualData && this.bodyNode) {
                //根据上次lastScrollTop记录的位置计算而来的scrollToRow位置不准 则以最新的scrollToRow为准重新校准位置（可能是由非用户滚动事件导致的props.scrollToRow发生了变化）
                if (oldScrollToRow !== scrollToRow) {
                    this.bodyNode.scrollTop = rowHeight * scrollToRow;
                } else {
                    this.bodyNode.scrollTop = this.lastScrollTop % rowHeight + rowHeight * scrollToRow;
                }
            }
        };

        VirtualTable.prototype.adjustSize = function adjustSize() {
            if (this.state.hasVirtualData && this.bodyNode) {
                var body = this.bodyNode;
                var virtualScrollNode = body.querySelector('div');
                var clientHeight = body.clientHeight,
                    clientWidth = body.clientWidth;


                var tableInc = this.tableInc;
                var tableNode = findDOMNode(tableInc);
                var prefix = this.props.prefix;

                var headerNode = tableNode.querySelector('.' + prefix + 'table-header table');
                var headerClientWidth = headerNode && headerNode.clientWidth;
                // todo 2.0 设置宽度这个可以去掉
                if (clientWidth < headerClientWidth) {
                    dom.setStyle(virtualScrollNode, 'min-width', headerClientWidth);
                    var leftNode = this.bodyLeftNode;
                    var rightNode = this.bodyRightNode;
                    leftNode && dom.setStyle(leftNode, 'max-height', clientHeight);
                    rightNode && dom.setStyle(rightNode, 'max-height', clientHeight);
                } else {
                    dom.setStyle(virtualScrollNode, 'min-width', 'auto');
                }
            }
        };

        VirtualTable.prototype.computeScrollToRow = function computeScrollToRow(offset) {
            var rowHeight = this.state.rowHeight;

            var start = parseInt(offset / rowHeight);
            this.start = start;
            return start;
        };

        VirtualTable.prototype.getRowNode = function getRowNode() {
            try {
                // in case of finding an unmounted component due to cached data
                // need to clear refs of this.tableInc when dataSource Changed
                // use try catch for temporary
                return findDOMNode(this.tableInc.getRowRef(0));
            } catch (error) {
                return null;
            }
        };

        VirtualTable.prototype.render = function render() {
            /* eslint-disable no-unused-vars, prefer-const */
            var _props = this.props,
                useVirtual = _props.useVirtual,
                components = _props.components,
                dataSource = _props.dataSource,
                fixedHeader = _props.fixedHeader,
                rowHeight = _props.rowHeight,
                scrollToRow = _props.scrollToRow,
                onBodyScroll = _props.onBodyScroll,
                keepForwardRenderRows = _props.keepForwardRenderRows,
                others = _objectWithoutProperties(_props, ['useVirtual', 'components', 'dataSource', 'fixedHeader', 'rowHeight', 'scrollToRow', 'onBodyScroll', 'keepForwardRenderRows']);

            var entireDataSource = dataSource;
            var newDataSource = dataSource;

            this.rowSelection = this.props.rowSelection;
            if (this.state.hasVirtualData) {
                newDataSource = [];
                components = _extends({}, components);

                var _getVisibleRange = this.getVisibleRange(this.state.scrollToRow),
                    start = _getVisibleRange.start,
                    end = _getVisibleRange.end;

                var count = -1;
                dataSource.forEach(function (current, index, record) {
                    if (!current.__hidden) {
                        count += 1;
                        if (count >= Math.max(start - keepForwardRenderRows, 0) && count < end) {
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

            return React.createElement(BaseComponent, _extends({}, others, {
                scrollToRow: scrollToRow,
                dataSource: newDataSource,
                entireDataSource: entireDataSource,
                components: components,
                fixedHeader: fixedHeader
            }));
        };

        return VirtualTable;
    }(React.Component), _class.VirtualBody = VirtualBody, _class.propTypes = _extends({
        /**
         * 是否开启虚拟滚动
         */
        useVirtual: PropTypes.bool,
        /**
         * 设置行高
         */
        rowHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
        maxBodyHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        primaryKey: PropTypes.oneOfType([PropTypes.symbol, PropTypes.string]),
        dataSource: PropTypes.array,
        /**
         * 在内容区域滚动的时候触发的函数
         */
        onBodyScroll: PropTypes.func,
        keepForwardRenderRows: PropTypes.number
    }, BaseComponent.propTypes), _class.defaultProps = _extends({}, BaseComponent.defaultProps, {
        primaryKey: 'id',
        rowHeight: noop,
        maxBodyHeight: 200,
        components: {},
        prefix: 'next-',
        onBodyScroll: noop,
        keepForwardRenderRows: 10
    }), _class.childContextTypes = {
        onVirtualScroll: PropTypes.func,
        bodyHeight: PropTypes.number,
        innerTop: PropTypes.number,
        getBodyNode: PropTypes.func,
        getTableInstanceForVirtual: PropTypes.func,
        rowSelection: PropTypes.object
    }, _temp);
    VirtualTable.displayName = 'VirtualTable';

    statics(VirtualTable, BaseComponent);
    return polyfill(VirtualTable);
}