'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = virtual;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _util = require('../util');

var _body = require('./virtual/body');

var _body2 = _interopRequireDefault(_body);

var _util2 = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {};
function virtual(BaseComponent) {
    var _class, _temp;

    var VirtualTable = (_temp = _class = function (_React$Component) {
        (0, _inherits3.default)(VirtualTable, _React$Component);

        function VirtualTable(props, context) {
            (0, _classCallCheck3.default)(this, VirtualTable);

            var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props, context));

            _this.state = {
                rowHeight: _this.props.rowHeight,
                scrollToRow: _this.props.scrollToRow,
                height: _this.props.maxBodyHeight
            };

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


            _this.hasVirtualData = useVirtual && dataSource && dataSource.length > 0;
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

            return state;
        };

        VirtualTable.prototype.componentDidMount = function componentDidMount() {
            if (this.hasVirtualData) {
                this.lastScrollTop = this.bodyNode.scrollTop;
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
            var rowHeight = this.state.rowHeight;

            if (typeof rowHeight === 'function' && this.hasVirtualData) {
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
            return dataSource.length * rowHeight;
        };

        VirtualTable.prototype.computeInnerTop = function computeInnerTop() {
            var rowHeight = this.state.rowHeight;

            if (typeof rowHeight === 'function') {
                return 0;
            }

            return this.start * rowHeight;
        };

        VirtualTable.prototype.getVisibleRange = function getVisibleRange(ExpectStart) {
            var _state = this.state,
                height = _state.height,
                rowHeight = _state.rowHeight;

            var len = this.props.dataSource.length;

            var end = void 0,
                visibleCount = 0;
            var start = 0;
            if (typeof rowHeight === 'function') {
                // try get cell height;
                end = 1;
            } else {
                visibleCount = parseInt(_util.dom.getPixels(height) / rowHeight, 10);

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
            if (this.hasVirtualData) {
                this.bodyNode.scrollTop = this.lastScrollTop % this.state.rowHeight + this.state.rowHeight * this.state.scrollToRow;
            }
        };

        VirtualTable.prototype.adjustSize = function adjustSize() {
            if (this.hasVirtualData) {
                var body = this.bodyNode;
                var virtualScrollNode = body.querySelector('div');
                var clientHeight = body.clientHeight,
                    clientWidth = body.clientWidth;


                var tableInc = this.tableInc;
                var tableNode = (0, _reactDom.findDOMNode)(tableInc);
                var prefix = this.props.prefix;

                var headerNode = tableNode.querySelector('.' + prefix + 'table-header table');
                var headerClientWidth = headerNode && headerNode.clientWidth;

                if (clientWidth < headerClientWidth) {
                    _util.dom.setStyle(virtualScrollNode, 'min-width', headerClientWidth);
                    var leftNode = this.bodyLeftNode;
                    var rightNode = this.bodyRightNode;
                    leftNode && _util.dom.setStyle(leftNode, 'max-height', clientHeight);
                    rightNode && _util.dom.setStyle(rightNode, 'max-height', clientHeight);
                    this.hasScrollbar = true;
                } else {
                    _util.dom.setStyle(virtualScrollNode, 'min-width', 'auto');
                    this.hasScrollbar = false;
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
                return (0, _reactDom.findDOMNode)(this.tableInc.getRowRef(0));
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
                others = (0, _objectWithoutProperties3.default)(_props, ['useVirtual', 'components', 'dataSource', 'fixedHeader', 'rowHeight', 'scrollToRow', 'onBodyScroll']);


            var entireDataSource = dataSource;
            var newDataSource = dataSource;

            this.rowSelection = this.props.rowSelection;
            if (this.hasVirtualData) {
                newDataSource = [];
                components = (0, _extends3.default)({}, components);

                var _getVisibleRange = this.getVisibleRange(this.state.scrollToRow),
                    start = _getVisibleRange.start,
                    end = _getVisibleRange.end;

                dataSource.forEach(function (current, index, record) {
                    if (index >= start && index < end) {
                        current.__rowIndex = index;
                        newDataSource.push(current);
                    }
                });

                if (!components.Body) {
                    components.Body = _body2.default;
                }
                fixedHeader = true;
            }

            return _react2.default.createElement(BaseComponent, (0, _extends3.default)({}, others, {
                dataSource: newDataSource,
                entireDataSource: entireDataSource,
                components: components,
                fixedHeader: fixedHeader
            }));
        };

        return VirtualTable;
    }(_react2.default.Component), _class.VirtualBody = _body2.default, _class.propTypes = (0, _extends3.default)({
        /**
         * 是否开启虚拟滚动
         */
        useVirtual: _propTypes2.default.bool,
        /**
         * 设置行高
         */
        rowHeight: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
        maxBodyHeight: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
        primaryKey: _propTypes2.default.string,
        dataSource: _propTypes2.default.array,
        /**
         * 在内容区域滚动的时候触发的函数
         */
        onBodyScroll: _propTypes2.default.func
    }, BaseComponent.propTypes), _class.defaultProps = (0, _extends3.default)({}, BaseComponent.defaultProps, {
        primaryKey: 'id',
        rowHeight: noop,
        maxBodyHeight: 200,
        components: {},
        prefix: 'next-',
        onBodyScroll: noop
    }), _class.childContextTypes = {
        onVirtualScroll: _propTypes2.default.func,
        bodyHeight: _propTypes2.default.number,
        innerTop: _propTypes2.default.number,
        getBodyNode: _propTypes2.default.func,
        getTableInstanceForVirtual: _propTypes2.default.func,
        rowSelection: _propTypes2.default.object
    }, _temp);
    VirtualTable.displayName = 'VirtualTable';

    (0, _util2.statics)(VirtualTable, BaseComponent);
    return (0, _reactLifecyclesCompat.polyfill)(VirtualTable);
}
module.exports = exports['default'];