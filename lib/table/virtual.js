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

var _util = require('../util');

var _body = require('./virtual/body');

var _body2 = _interopRequireDefault(_body);

var _util2 = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {};
function virtual(BaseComponent) {
    var _class, _temp2;

    var VirtualTable = (_temp2 = _class = function (_React$Component) {
        (0, _inherits3.default)(VirtualTable, _React$Component);

        function VirtualTable() {
            var _temp, _this, _ret;

            (0, _classCallCheck3.default)(this, VirtualTable);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
                rowHeight: _this.props.rowHeight,
                scrollToRow: _this.props.scrollToRow,
                height: _this.props.maxBodyHeight
            }, _this.onScroll = function () {
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
            }, _this.getBodyNode = function (node, lockType) {
                lockType = lockType ? lockType.charAt(0).toUpperCase() + lockType.substr(1) : '';
                _this['body' + lockType + 'Node'] = node;
            }, _this.getTableInstance = function (type, instance) {
                type = type ? type.charAt(0).toUpperCase() + type.substr(1) : '';
                _this['table' + type + 'Inc'] = instance;
            }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
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

        VirtualTable.prototype.componentWillMount = function componentWillMount() {
            var _props = this.props,
                useVirtual = _props.useVirtual,
                dataSource = _props.dataSource;


            this.hasVirtualData = useVirtual && dataSource && dataSource.length > 0;
        };

        VirtualTable.prototype.componentDidMount = function componentDidMount() {

            if (this.hasVirtualData) {
                this.lastScrollTop = this.bodyNode.scrollTop;
            }

            this.adjustScrollTop();
            this.adjustSize();
            this.reComputeSize();
        };

        VirtualTable.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
            var useVirtual = nextProps.useVirtual,
                dataSource = nextProps.dataSource;


            this.hasVirtualData = useVirtual && dataSource && dataSource.length > 0;

            if ('maxBodyHeight' in nextProps) {
                if (this.state.height !== nextProps.maxBodyHeight) {
                    this.setState({
                        height: nextProps.maxBodyHeight
                    });
                }
            }

            if ('scrollToRow' in nextProps) {
                this.setState({
                    scrollToRow: nextProps.scrollToRow
                });
            }
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

            var end = void 0,
                visibleCount = 0;
            var start = 0;
            if (typeof rowHeight === 'function') {
                // try get cell height;
                end = 2;
            } else {
                visibleCount = parseInt(height / rowHeight, 10);

                if ('number' === typeof ExpectStart) {
                    start = ExpectStart;
                }

                end = +start + 1 + visibleCount + 10;
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
                this.bodyNode.scrollTop = this.lastScrollTop || this.state.scrollToRow * this.state.rowHeight;
            }
        };

        VirtualTable.prototype.adjustSize = function adjustSize() {
            if (this.hasVirtualData) {
                var body = this.bodyNode;
                var virtualScrollNode = body.querySelector('div');
                var table = virtualScrollNode.querySelector('table');
                var clientHeight = body.clientHeight,
                    clientWidth = body.clientWidth;
                var tableClientWidth = table.clientWidth;

                if (clientWidth < tableClientWidth) {
                    _util.dom.setStyle(virtualScrollNode, 'width', tableClientWidth);
                    var leftNode = this.bodyLeftNode;
                    var rightNode = this.bodyRightNode;
                    leftNode && _util.dom.setStyle(leftNode, 'max-height', clientHeight);
                    rightNode && _util.dom.setStyle(rightNode, 'max-height', clientHeight);
                    this.hasScrollbar = true;
                } else {
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
            return (0, _reactDom.findDOMNode)(this.tableInc.getRowRef(1));
        };

        VirtualTable.prototype.render = function render() {
            /* eslint-disable no-unused-vars, prefer-const */
            var _props2 = this.props,
                useVirtual = _props2.useVirtual,
                components = _props2.components,
                dataSource = _props2.dataSource,
                fixedHeader = _props2.fixedHeader,
                rowHeight = _props2.rowHeight,
                scrollToRow = _props2.scrollToRow,
                onBodyScroll = _props2.onBodyScroll,
                others = (0, _objectWithoutProperties3.default)(_props2, ['useVirtual', 'components', 'dataSource', 'fixedHeader', 'rowHeight', 'scrollToRow', 'onBodyScroll']);


            var entireDataSource = dataSource;

            this.rowSelection = this.props.rowSelection;
            if (this.hasVirtualData) {
                components = (0, _extends3.default)({}, components);

                var _getVisibleRange = this.getVisibleRange(this.state.scrollToRow),
                    start = _getVisibleRange.start,
                    end = _getVisibleRange.end;

                dataSource = dataSource.slice(start, end);

                if (!components.Body) {
                    components.Body = _body2.default;
                }
                fixedHeader = true;
            }

            return _react2.default.createElement(BaseComponent, (0, _extends3.default)({}, others, { dataSource: dataSource, entireDataSource: entireDataSource, components: components, fixedHeader: fixedHeader }));
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
        maxBodyHeight: _propTypes2.default.number,
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
    }, _temp2);
    VirtualTable.displayName = 'VirtualTable';

    (0, _util2.statics)(VirtualTable, BaseComponent);
    return VirtualTable;
}
module.exports = exports['default'];