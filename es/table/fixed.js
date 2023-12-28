import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import classnames from 'classnames';
import { dom } from '../util';
import HeaderComponent from './fixed/header';
import BodyComponent from './fixed/body';
import WrapperComponent from './fixed/wrapper';
import { statics } from './util';
export default function fixed(BaseComponent, stickyLock) {
    /** Table */
    var FixedTable = /** @class */ (function (_super) {
        __extends(FixedTable, _super);
        function FixedTable() {
            var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
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
                    dom[leftFunc](table, "".concat(prefix, "table-scrolling-to-right"));
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
                return findDOMNode(table.tableEl);
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
            var scrollBarSize = +dom.scrollbar().width || 0;
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
                dom.setStyle(this.headerNode, style);
            }
            if (hasHeader && !this.props.lockType && this.headerNode) {
                var fixer = this.headerNode.querySelector(".".concat(prefix, "table-header-fixer"));
                var height = dom.getStyle(this.headerNode, 'height');
                var paddingBottom = dom.getStyle(this.headerNode, 'paddingBottom');
                dom.setStyle(fixer, {
                    width: scrollBarSize,
                    height: height - paddingBottom,
                });
            }
        };
        FixedTable.prototype.render = function () {
            var _a;
            /* eslint-disable no-unused-vars, prefer-const */
            var _b = this.props, components = _b.components, className = _b.className, prefix = _b.prefix, fixedHeader = _b.fixedHeader, lockType = _b.lockType, dataSource = _b.dataSource, maxBodyHeight = _b.maxBodyHeight, others = __rest(_b, ["components", "className", "prefix", "fixedHeader", "lockType", "dataSource", "maxBodyHeight"]);
            if (fixedHeader) {
                components = __assign({}, components);
                if (!components.Header) {
                    components.Header = HeaderComponent;
                }
                if (!components.Body) {
                    components.Body = BodyComponent;
                }
                if (!components.Wrapper) {
                    components.Wrapper = WrapperComponent;
                }
                className = classnames((_a = {},
                    _a["".concat(prefix, "table-fixed")] = true,
                    _a["".concat(prefix, "table-wrap-empty")] = !dataSource.length,
                    _a[className] = className,
                    _a));
            }
            return (React.createElement(BaseComponent, __assign({}, others, { dataSource: dataSource, lockType: lockType, components: components, className: className, prefix: prefix })));
        };
        FixedTable.FixedHeader = HeaderComponent;
        FixedTable.FixedBody = BodyComponent;
        FixedTable.FixedWrapper = WrapperComponent;
        FixedTable.propTypes = __assign({ 
            /**
             * 是否具有表头
             */
            hasHeader: PropTypes.bool, 
            /**
             * 表头是否固定，该属性配合maxBodyHeight使用，当内容区域的高度超过maxBodyHeight的时候，在内容区域会出现滚动条
             */
            fixedHeader: PropTypes.bool, 
            /**
             * 最大内容区域的高度,在`fixedHeader`为`true`的时候,超过这个高度会出现滚动条
             */
            maxBodyHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]) }, BaseComponent.propTypes);
        FixedTable.defaultProps = __assign(__assign({}, BaseComponent.defaultProps), { hasHeader: true, fixedHeader: false, maxBodyHeight: 200, components: {}, refs: {}, prefix: 'next-' });
        FixedTable.childContextTypes = {
            fixedHeader: PropTypes.bool,
            getNode: PropTypes.func,
            onFixedScrollSync: PropTypes.func,
            getTableInstanceForFixed: PropTypes.func,
            maxBodyHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        };
        return FixedTable;
    }(React.Component));
    statics(FixedTable, BaseComponent);
    return FixedTable;
}
