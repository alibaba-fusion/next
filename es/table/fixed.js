import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
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
    var _class, _temp2;

    /** Table */
    var FixedTable = (_temp2 = _class = function (_React$Component) {
        _inherits(FixedTable, _React$Component);

        function FixedTable() {
            var _temp, _this, _ret;

            _classCallCheck(this, FixedTable);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {}, _this.getNode = function (type, node, lockType) {
                lockType = lockType ? lockType.charAt(0).toUpperCase() + lockType.substr(1) : '';
                _this['' + type + lockType + 'Node'] = node;
            }, _this.getTableInstance = function (type, instance) {
                type = '';
                _this['table' + type + 'Inc'] = instance;
            }, _this.onFixedScrollSync = function () {
                var current = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { currentTarget: {} };

                var currentTarget = current.currentTarget || {},
                    headerNode = _this.headerNode,
                    bodyNode = _this.bodyNode;

                var scrollLeft = currentTarget.scrollLeft,
                    scrollWidth = currentTarget.scrollWidth,
                    clientWidth = currentTarget.clientWidth;

                var scrollToRightEnd = !(scrollLeft < scrollWidth - clientWidth);
                var _this$props = _this.props,
                    prefix = _this$props.prefix,
                    loading = _this$props.loading;


                if (!loading && scrollToRightEnd !== _this.scrollToRightEnd) {
                    _this.scrollToRightEnd = scrollToRightEnd;
                    var table = _this.getTableNode();

                    var leftFunc = scrollToRightEnd ? 'removeClass' : 'addClass';
                    dom[leftFunc](table, prefix + 'table-scrolling-to-right');
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
                    } else if (currentTarget === headerNode) {
                        if (bodyNode && scrollLeft !== bodyNode.scrollLeft) {
                            bodyNode.scrollLeft = scrollLeft;
                        }
                    }
                }
            }, _temp), _possibleConstructorReturn(_this, _ret);
        }

        FixedTable.prototype.getChildContext = function getChildContext() {
            return {
                fixedHeader: this.props.fixedHeader,
                maxBodyHeight: this.props.maxBodyHeight,
                getTableInstanceForFixed: this.getTableInstance,
                onFixedScrollSync: this.onFixedScrollSync,
                getNode: this.getNode
            };
        };

        FixedTable.prototype.componentDidMount = function componentDidMount() {
            this.adjustFixedHeaderSize();
            this.scrollToRightEnd = undefined;
            this.onFixedScrollSync({ currentTarget: this.bodyNode, target: this.bodyNode });
        };

        FixedTable.prototype.componentDidUpdate = function componentDidUpdate() {
            this.adjustFixedHeaderSize();
            this.onFixedScrollSync({ currentTarget: this.bodyNode, target: this.bodyNode });
        };

        FixedTable.prototype.getTableNode = function getTableNode() {
            var table = this.tableInc;
            try {
                // in case of finding an unmounted component due to cached data
                // need to clear refs of table when dataSource Changed
                // use try catch for temporary
                return findDOMNode(table.tableEl);
            } catch (error) {
                return null;
            }
        };

        // for fixed header scroll left


        FixedTable.prototype.adjustFixedHeaderSize = function adjustFixedHeaderSize() {
            var _props = this.props,
                hasHeader = _props.hasHeader,
                rtl = _props.rtl,
                prefix = _props.prefix;

            var paddingName = rtl ? 'paddingLeft' : 'paddingRight';
            var marginName = rtl ? 'marginLeft' : 'marginRight';
            var body = this.bodyNode;
            var scrollBarSize = +dom.scrollbar().width || 0;

            if (hasHeader && !this.props.lockType && body) {
                var hasVerScroll = body.scrollHeight > body.clientHeight,
                    hasHozScroll = body.scrollWidth > body.clientWidth;
                var style = {};
                if (!hasVerScroll) {
                    style[paddingName] = 0;
                    style[marginName] = 0;
                }

                if (+scrollBarSize) {
                    style.marginBottom = -scrollBarSize;
                    if (hasHozScroll) {
                        style.paddingBottom = scrollBarSize;
                    } else {
                        style.paddingBottom = scrollBarSize;
                    }
                    if (hasVerScroll) {
                        style[marginName] = scrollBarSize;
                    }
                }

                dom.setStyle(this.headerNode, style);
            }

            if (hasHeader && !this.props.lockType && this.headerNode) {
                var fixer = this.headerNode.querySelector('.' + prefix + 'table-header-fixer');
                var height = dom.getStyle(this.headerNode, 'height');
                var paddingBottom = dom.getStyle(this.headerNode, 'paddingBottom');

                dom.setStyle(fixer, {
                    width: scrollBarSize,
                    height: height - paddingBottom
                });
            }
        };

        FixedTable.prototype.render = function render() {
            /* eslint-disable no-unused-vars, prefer-const */
            var _props2 = this.props,
                components = _props2.components,
                className = _props2.className,
                prefix = _props2.prefix,
                fixedHeader = _props2.fixedHeader,
                lockType = _props2.lockType,
                dataSource = _props2.dataSource,
                maxBodyHeight = _props2.maxBodyHeight,
                others = _objectWithoutProperties(_props2, ['components', 'className', 'prefix', 'fixedHeader', 'lockType', 'dataSource', 'maxBodyHeight']);

            if (fixedHeader) {
                var _classnames;

                components = _extends({}, components);
                if (!components.Header) {
                    components.Header = HeaderComponent;
                }
                if (!components.Body) {
                    components.Body = BodyComponent;
                }
                if (!components.Wrapper) {
                    components.Wrapper = WrapperComponent;
                }
                className = classnames((_classnames = {}, _classnames[prefix + 'table-fixed'] = true, _classnames[prefix + 'table-wrap-empty'] = !dataSource.length, _classnames[className] = className, _classnames));
            }

            return React.createElement(BaseComponent, _extends({}, others, {
                dataSource: dataSource,
                lockType: lockType,
                components: components,
                className: className,
                prefix: prefix
            }));
        };

        return FixedTable;
    }(React.Component), _class.FixedHeader = HeaderComponent, _class.FixedBody = BodyComponent, _class.FixedWrapper = WrapperComponent, _class.propTypes = _extends({
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
        maxBodyHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    }, BaseComponent.propTypes), _class.defaultProps = _extends({}, BaseComponent.defaultProps, {
        hasHeader: true,
        fixedHeader: false,
        maxBodyHeight: 200,
        components: {},
        refs: {},
        prefix: 'next-'
    }), _class.childContextTypes = {
        fixedHeader: PropTypes.bool,
        getNode: PropTypes.func,
        onFixedScrollSync: PropTypes.func,
        getTableInstanceForFixed: PropTypes.func,
        maxBodyHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    }, _temp2);
    FixedTable.displayName = 'FixedTable';

    statics(FixedTable, BaseComponent);
    return FixedTable;
}