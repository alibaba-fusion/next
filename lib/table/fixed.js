"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var react_dom_1 = require("react-dom");
var classnames_1 = require("classnames");
var util_1 = require("../util");
var header_1 = require("./fixed/header");
var body_1 = require("./fixed/body");
var wrapper_1 = require("./fixed/wrapper");
var util_2 = require("./util");
function fixed(BaseComponent, stickyLock) {
    /** Table */
    var FixedTable = /** @class */ (function (_super) {
        tslib_1.__extends(FixedTable, _super);
        function FixedTable() {
            var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
            _this.state = {};
            _this.getNode = function (type, node, lockType) {
                lockType = lockType ? lockType.charAt(0).toUpperCase() + lockType.substr(1) : '';
                _this["".concat(type).concat(lockType, "Node")] = node;
            };
            _this.getTableInstance = function (type, instance) {
                type = '';
                _this["table".concat(type, "Inc")] = instance;
            };
            // for fixed header scroll left
            _this.onFixedScrollSync = function (current) {
                if (current === void 0) { current = { currentTarget: {} }; }
                var currentTarget = current.currentTarget || {}, headerNode = _this.headerNode, bodyNode = _this.bodyNode;
                var scrollLeft = currentTarget.scrollLeft, scrollWidth = currentTarget.scrollWidth, clientWidth = currentTarget.clientWidth;
                var scrollToRightEnd = !(scrollLeft < scrollWidth - clientWidth);
                var _a = _this.props, prefix = _a.prefix, loading = _a.loading;
                if (!loading && scrollToRightEnd !== _this.scrollToRightEnd) {
                    _this.scrollToRightEnd = scrollToRightEnd;
                    var table = _this.getTableNode();
                    var leftFunc = scrollToRightEnd ? 'removeClass' : 'addClass';
                    util_1.dom[leftFunc](table, "".concat(prefix, "table-scrolling-to-right"));
                }
                // 通过定时器避免重复设置表格的左滚动距离
                if (!_this.scrollTarget || _this.scrollTarget === currentTarget) {
                    _this.scrollTarget = currentTarget;
                    window.clearTimeout(_this.timeoutId);
                    _this.timeoutId = window.setTimeout(function () {
                        _this.scrollTarget = null;
                        _this.timeoutId = undefined;
                    }, 100);
                    if (currentTarget === bodyNode) {
                        if (headerNode && scrollLeft !== headerNode.scrollLeft) {
                            headerNode.scrollLeft = scrollLeft;
                        }
                    }
                    else if (currentTarget === headerNode) {
                        if (bodyNode && scrollLeft !== bodyNode.scrollLeft) {
                            bodyNode.scrollLeft = scrollLeft;
                        }
                    }
                }
            };
            return _this;
        }
        FixedTable.prototype.getChildContext = function () {
            return {
                fixedHeader: this.props.fixedHeader,
                maxBodyHeight: this.props.maxBodyHeight,
                getTableInstanceForFixed: this.getTableInstance,
                onFixedScrollSync: this.onFixedScrollSync,
                getNode: this.getNode,
            };
        };
        FixedTable.prototype.componentDidMount = function () {
            this.adjustFixedHeaderSize();
            this.scrollToRightEnd = undefined;
            this.onFixedScrollSync({ currentTarget: this.bodyNode, target: this.bodyNode });
        };
        FixedTable.prototype.componentDidUpdate = function () {
            this.adjustFixedHeaderSize();
            this.onFixedScrollSync({ currentTarget: this.bodyNode, target: this.bodyNode });
        };
        FixedTable.prototype.getTableNode = function () {
            var table = this.tableInc;
            try {
                // in case of finding an unmounted component due to cached data
                // need to clear refs of table when dataSource Changed
                // use try catch for temporary
                return (0, react_dom_1.findDOMNode)(table.tableEl);
            }
            catch (error) {
                return null;
            }
        };
        FixedTable.prototype.adjustFixedHeaderSize = function () {
            var _a = this.props, hasHeader = _a.hasHeader, rtl = _a.rtl, prefix = _a.prefix;
            var paddingName = rtl ? 'paddingLeft' : 'paddingRight';
            var marginName = rtl ? 'marginLeft' : 'marginRight';
            var body = this.bodyNode;
            var scrollBarSize = +util_1.dom.scrollbar().width || 0;
            if (hasHeader && !this.props.lockType && body) {
                var hasVerScroll = body.scrollHeight > body.clientHeight, hasHozScroll = body.scrollWidth > body.clientWidth;
                var style = {};
                if (!hasVerScroll) {
                    style[paddingName] = 0;
                    style[marginName] = 0;
                }
                if (+scrollBarSize) {
                    style.marginBottom = -scrollBarSize;
                    if (hasHozScroll) {
                        style.paddingBottom = scrollBarSize;
                    }
                    else {
                        style.paddingBottom = scrollBarSize;
                    }
                    if (hasVerScroll) {
                        style[marginName] = scrollBarSize;
                    }
                }
                util_1.dom.setStyle(this.headerNode, style);
            }
            if (hasHeader && !this.props.lockType && this.headerNode) {
                var fixer = this.headerNode.querySelector(".".concat(prefix, "table-header-fixer"));
                var height = util_1.dom.getStyle(this.headerNode, 'height');
                var paddingBottom = util_1.dom.getStyle(this.headerNode, 'paddingBottom');
                util_1.dom.setStyle(fixer, {
                    width: scrollBarSize,
                    height: height - paddingBottom,
                });
            }
        };
        FixedTable.prototype.render = function () {
            var _a;
            /* eslint-disable no-unused-vars, prefer-const */
            var _b = this.props, components = _b.components, className = _b.className, prefix = _b.prefix, fixedHeader = _b.fixedHeader, lockType = _b.lockType, dataSource = _b.dataSource, maxBodyHeight = _b.maxBodyHeight, others = tslib_1.__rest(_b, ["components", "className", "prefix", "fixedHeader", "lockType", "dataSource", "maxBodyHeight"]);
            if (fixedHeader) {
                components = tslib_1.__assign({}, components);
                if (!components.Header) {
                    components.Header = header_1.default;
                }
                if (!components.Body) {
                    components.Body = body_1.default;
                }
                if (!components.Wrapper) {
                    components.Wrapper = wrapper_1.default;
                }
                className = (0, classnames_1.default)((_a = {},
                    _a["".concat(prefix, "table-fixed")] = true,
                    _a["".concat(prefix, "table-wrap-empty")] = !dataSource.length,
                    _a[className] = className,
                    _a));
            }
            return (react_1.default.createElement(BaseComponent, tslib_1.__assign({}, others, { dataSource: dataSource, lockType: lockType, components: components, className: className, prefix: prefix })));
        };
        FixedTable.FixedHeader = header_1.default;
        FixedTable.FixedBody = body_1.default;
        FixedTable.FixedWrapper = wrapper_1.default;
        FixedTable.propTypes = tslib_1.__assign({ 
            /**
             * 是否具有表头
             */
            hasHeader: prop_types_1.default.bool, 
            /**
             * 表头是否固定，该属性配合maxBodyHeight使用，当内容区域的高度超过maxBodyHeight的时候，在内容区域会出现滚动条
             */
            fixedHeader: prop_types_1.default.bool, 
            /**
             * 最大内容区域的高度,在`fixedHeader`为`true`的时候,超过这个高度会出现滚动条
             */
            maxBodyHeight: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.string]) }, BaseComponent.propTypes);
        FixedTable.defaultProps = tslib_1.__assign(tslib_1.__assign({}, BaseComponent.defaultProps), { hasHeader: true, fixedHeader: false, maxBodyHeight: 200, components: {}, refs: {}, prefix: 'next-' });
        FixedTable.childContextTypes = {
            fixedHeader: prop_types_1.default.bool,
            getNode: prop_types_1.default.func,
            onFixedScrollSync: prop_types_1.default.func,
            getTableInstanceForFixed: prop_types_1.default.func,
            maxBodyHeight: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.string]),
        };
        return FixedTable;
    }(react_1.default.Component));
    (0, util_2.statics)(FixedTable, BaseComponent);
    return FixedTable;
}
exports.default = fixed;
