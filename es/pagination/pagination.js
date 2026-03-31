import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React, { Component, cloneElement, } from 'react';
import { polyfill } from 'react-lifecycles-compat';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ConfigProvider from '../config-provider';
import Icon from '../icon';
import Button from '../button';
import Input from '../input';
import Select from '../select';
import { KEYCODE, str, obj } from '../util';
import zhCN from '../locale/zh-cn';
var Option = Select.Option;
var noop = function () { };
function getTotalPage(total, currentPageSize) {
    var totalPage = Math.ceil(total / currentPageSize);
    return totalPage <= 0 ? 1 : totalPage;
}
function correctCurrent(currentPage, total, currentPageSize) {
    var totalPage = getTotalPage(total, currentPageSize);
    return currentPage > totalPage ? totalPage : currentPage;
}
/**
 * Pagination
 */
var Pagination = /** @class */ (function (_super) {
    __extends(Pagination, _super);
    function Pagination(props) {
        var _this = _super.call(this, props) || this;
        _this.handleJump = function (e) {
            var total = _this.props.total;
            var _a = _this.state, current = _a.current, currentPageSize = _a.currentPageSize, inputValue = _a.inputValue;
            var totalPage = getTotalPage(total, currentPageSize);
            var value = parseInt(inputValue, 10);
            if (isNaN(value)) {
                value = 0;
            }
            else if (value < 1) {
                value = 1;
            }
            else if (value > totalPage) {
                value = totalPage;
            }
            if (value && value !== current) {
                _this.onPageItemClick(value, e);
            }
            _this.setState({
                inputValue: '',
            });
        };
        _this.state = {
            current: props.defaultCurrent || 1,
            currentPageSize: 0,
            inputValue: '',
        };
        return _this;
    }
    Pagination.getDerivedStateFromProps = function (props, state) {
        var current = props.current, total = props.total, pageSize = props.pageSize;
        var st = {};
        var newCurrent = correctCurrent(current || state.current, total, pageSize);
        if (state.current !== newCurrent) {
            st.current = newCurrent;
        }
        if (state.currentPageSize !== pageSize) {
            st.currentPageSize = pageSize;
        }
        return st;
    };
    Pagination.prototype.onPageItemClick = function (page, e) {
        if (!('current' in this.props)) {
            this.setState({
                current: page,
            });
        }
        this.props.onChange(page, e);
    };
    Pagination.prototype.onInputChange = function (value) {
        this.setState({
            inputValue: value,
        });
    };
    Pagination.prototype.onSelectSize = function (pageSize) {
        var newState = {
            currentPageSize: pageSize,
        };
        var totalPage = getTotalPage(this.props.total, pageSize);
        if (this.state.current > totalPage) {
            newState.current = totalPage;
        }
        this.setState(newState);
        this.props.onPageSizeChange(pageSize);
    };
    Pagination.prototype.renderPageTotal = function () {
        var _a = this.props, prefix = _a.prefix, total = _a.total, totalRender = _a.totalRender;
        var _b = this.state, currentPageSize = _b.currentPageSize, current = _b.current;
        var range = [(current - 1) * currentPageSize + 1, current * currentPageSize];
        return React.createElement("div", { className: "".concat(prefix, "pagination-total") }, totalRender === null || totalRender === void 0 ? void 0 : totalRender(total, range));
    };
    Pagination.prototype.renderPageItem = function (index) {
        var _a;
        var _b = this.props, prefix = _b.prefix, size = _b.size, link = _b.link, pageNumberRender = _b.pageNumberRender, total = _b.total, pageSize = _b.pageSize, locale = _b.locale;
        var current = this.state.current;
        var totalPage = getTotalPage(total, pageSize);
        // @ts-expect-error type error cause by old logic, index should be string
        var isCurrent = parseInt(index, 10) === current;
        var props = {
            size: size,
            className: cx((_a = {},
                _a["".concat(prefix, "pagination-item")] = true,
                _a["".concat(prefix, "current")] = isCurrent,
                _a)),
            onClick: isCurrent ? noop : this.onPageItemClick.bind(this, index),
        };
        if (link) {
            props.component = 'a';
            // @ts-expect-error type error cause by old logic, index should be string
            props.href = link.replace('{page}', index);
        }
        return (React.createElement(Button, __assign({ "aria-label": str.template(locale.total, {
                current: index,
                total: totalPage,
            }) }, props, { key: index }), pageNumberRender(index)));
    };
    Pagination.prototype.renderPageFirst = function (current) {
        var _a;
        var _b = this.props, prefix = _b.prefix, size = _b.size, shape = _b.shape, locale = _b.locale;
        var isFirst = current <= 1;
        var props = {
            disabled: isFirst,
            size: size,
            className: cx((_a = {},
                _a["".concat(prefix, "pagination-item")] = true,
                _a["".concat(prefix, "prev")] = true,
                _a)),
            onClick: this.onPageItemClick.bind(this, current - 1),
        };
        var icon = React.createElement(Icon, { type: "arrow-left", className: "".concat(prefix, "pagination-icon-prev") });
        return (React.createElement(Button, __assign({}, props, { "aria-label": str.template(locale.labelPrev, { current: current }) }),
            icon,
            shape === 'arrow-only' || shape === 'arrow-prev-only' || shape === 'no-border'
                ? ''
                : locale.prev));
    };
    Pagination.prototype.renderPageLast = function (current, totalPage) {
        var _a;
        var _b = this.props, prefix = _b.prefix, size = _b.size, shape = _b.shape, locale = _b.locale;
        var isLast = current >= totalPage;
        var props = {
            disabled: isLast,
            size: size,
            className: cx((_a = {},
                _a["".concat(prefix, "pagination-item")] = true,
                _a["".concat(prefix, "next")] = true,
                _a)),
            onClick: this.onPageItemClick.bind(this, current + 1),
        };
        var icon = React.createElement(Icon, { type: "arrow-right", className: "".concat(prefix, "pagination-icon-next") });
        return (React.createElement(Button, __assign({}, props, { "aria-label": str.template(locale.labelNext, { current: current }) }),
            shape === 'arrow-only' || shape === 'no-border' ? '' : locale.next,
            icon));
    };
    Pagination.prototype.renderPageEllipsis = function (idx) {
        var prefix = this.props.prefix;
        return (React.createElement(Icon, { className: "".concat(prefix, "pagination-ellipsis ").concat(prefix, "pagination-icon-ellipsis"), type: "ellipsis", key: "ellipsis-".concat(idx) }));
    };
    Pagination.prototype.renderPageJump = function () {
        var _this = this;
        var _a = this.props, prefix = _a.prefix, size = _a.size, locale = _a.locale;
        var inputValue = this.state.inputValue;
        /* eslint-disable react/jsx-key */
        // old code not have key so that use eslint-disable react/jsx-key to avoid warning
        return [
            React.createElement("span", { className: "".concat(prefix, "pagination-jump-text") }, locale.goTo),
            React.createElement(Input, { className: "".concat(prefix, "pagination-jump-input"), type: "text", "aria-label": locale.inputAriaLabel, size: size, value: inputValue, onChange: this.onInputChange.bind(this), onKeyDown: function (e) {
                    if (e.keyCode === KEYCODE.ENTER) {
                        _this.handleJump(e);
                    }
                } }),
            React.createElement("span", { className: "".concat(prefix, "pagination-jump-text") }, locale.page),
            React.createElement(Button, { className: "".concat(prefix, "pagination-jump-go"), size: size, onClick: this.handleJump }, locale.go),
        ];
    };
    Pagination.prototype.renderPageDisplay = function (current, totalPage) {
        var _a = this.props, prefix = _a.prefix, pageNumberRender = _a.pageNumberRender;
        return (React.createElement("span", { className: "".concat(prefix, "pagination-display") },
            React.createElement("em", null, pageNumberRender(current)),
            "/",
            pageNumberRender(totalPage)));
    };
    Pagination.prototype.renderPageList = function (current, totalPage) {
        var _a = this.props, prefix = _a.prefix, pageShowCount = _a.pageShowCount;
        var pages = [];
        if (totalPage <= pageShowCount) {
            for (var i = 1; i <= totalPage; i++) {
                pages.push(this.renderPageItem(i));
            }
        }
        else {
            // 除去第一页，最后一页以及当前页，剩下的页数
            var othersCount = pageShowCount - 3;
            // @ts-expect-error type error case by old logic, othersCount / 2 should be string
            var halfCount = parseInt(othersCount / 2, 10);
            var start = void 0, end = void 0;
            pages.push(this.renderPageItem(1));
            start = current - halfCount;
            end = current + halfCount;
            if (start <= 1) {
                start = 2;
                end = start + othersCount;
            }
            if (start > 2) {
                pages.push(this.renderPageEllipsis(1));
            }
            if (end >= totalPage - 1) {
                end = totalPage - 1;
                start = totalPage - 1 - othersCount;
            }
            for (var j = start; j <= end; j++) {
                pages.push(this.renderPageItem(j));
            }
            if (end < totalPage - 1) {
                pages.push(this.renderPageEllipsis(2));
            }
            pages.push(this.renderPageItem(totalPage));
        }
        return React.createElement("div", { className: "".concat(prefix, "pagination-list") }, pages);
    };
    Pagination.prototype.renderPageSizeSelector = function () {
        var _a = this.props, prefix = _a.prefix, pageSizeSelector = _a.pageSizeSelector, locale = _a.locale;
        var pageSizeSpan = (React.createElement("span", { className: "".concat(prefix, "pagination-size-selector-title") }, locale.pageSize));
        switch (pageSizeSelector) {
            case 'filter':
                return (React.createElement("div", { className: "".concat(prefix, "pagination-size-selector") },
                    pageSizeSpan,
                    this.renderPageSizeFilter()));
            case 'dropdown':
                return (React.createElement("div", { className: "".concat(prefix, "pagination-size-selector") },
                    pageSizeSpan,
                    this.renderPageSizeDropdown()));
            default:
                return null;
        }
    };
    Pagination.prototype.renderPageSizeFilter = function () {
        var _this = this;
        var _a = this.props, prefix = _a.prefix, size = _a.size, pageSizeList = _a.pageSizeList;
        var currentPageSize = this.state.currentPageSize;
        return (React.createElement("div", { className: "".concat(prefix, "pagination-size-selector-filter") }, pageSizeList.map(function (item, index) {
            var _a;
            var label;
            var pageSize;
            // @ts-expect-error type error cause by old logic, item may be number
            if (item.value) {
                // {label: '', value: 5}
                // @ts-expect-error type error cause by old logic, item may be number
                label = item.label;
                // @ts-expect-error type error cause by old logic, item may be number
                pageSize = item.value;
            }
            else {
                // number
                label = pageSize = item;
            }
            var classes = cx((_a = {},
                _a["".concat(prefix, "pagination-size-selector-btn")] = true,
                _a["".concat(prefix, "current")] = pageSize === currentPageSize,
                _a));
            return (React.createElement(Button, { key: index, text: true, size: size, className: classes, onClick: pageSize !== currentPageSize
                    ? _this.onSelectSize.bind(_this, pageSize)
                    : null }, label));
        })));
    };
    Pagination.prototype.renderPageSizeDropdown = function () {
        var _a = this.props, prefix = _a.prefix, size = _a.size, pageSizeList = _a.pageSizeList, locale = _a.locale, popupProps = _a.popupProps, selectProps = _a.selectProps;
        var currentPageSize = this.state.currentPageSize;
        return (React.createElement(Select, __assign({ className: "".concat(prefix, "pagination-size-selector-dropdown"), popupClassName: "".concat(prefix, "pagination-size-selector-popup"), popupProps: popupProps, "aria-label": locale.selectAriaLabel, autoWidth: false, size: size, value: currentPageSize, onChange: this.onSelectSize.bind(this) }, selectProps), pageSizeList.map(function (item, index) {
            var label;
            var pageSize;
            // @ts-expect-error type error cause by old logic, item may be number
            if (item.value) {
                // {label: '', value: 5}
                // @ts-expect-error type error cause by old logic, item may be number
                label = item.label;
                // @ts-expect-error type error cause by old logic, item may be number
                pageSize = item.value;
            }
            else {
                // number
                label = pageSize = item;
            }
            return (React.createElement(Option, { key: index, value: pageSize }, label));
        })));
    };
    Pagination.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this.props, prefix = _b.prefix, pure = _b.pure, rtl = _b.rtl, device = _b.device, paginationType = _b.type, size = _b.size, shape = _b.shape, className = _b.className, total = _b.total, totalRender = _b.totalRender, pageSize = _b.pageSize, pageSizeSelector = _b.pageSizeSelector, pageSizeList = _b.pageSizeList, pageSizePosition = _b.pageSizePosition, useFloatLayout = _b.useFloatLayout, onPageSizeChange = _b.onPageSizeChange, hideOnlyOnePage = _b.hideOnlyOnePage, showJump = _b.showJump, locale = _b.locale, current = _b.current, defaultCurrent = _b.defaultCurrent, pageShowCount = _b.pageShowCount, pageNumberRender = _b.pageNumberRender, link = _b.link, onChange = _b.onChange, popupProps = _b.popupProps, selectProps = _b.selectProps, others = __rest(_b, ["prefix", "pure", "rtl", "device", "type", "size", "shape", "className", "total", "totalRender", "pageSize", "pageSizeSelector", "pageSizeList", "pageSizePosition", "useFloatLayout", "onPageSizeChange", "hideOnlyOnePage", "showJump", "locale", "current", "defaultCurrent", "pageShowCount", "pageNumberRender", "link", "onChange", "popupProps", "selectProps"]);
        var _c = this.state, currentPage = _c.current, currentPageSize = _c.currentPageSize;
        var totalPage = getTotalPage(total, currentPageSize);
        var pageFirst = this.renderPageFirst(currentPage);
        var pageLast = this.renderPageLast(currentPage, totalPage);
        var sizeSelector = this.renderPageSizeSelector();
        var isStart = pageSizePosition === 'start';
        var type = paginationType;
        if (device === 'phone' && type === 'normal') {
            type = 'simple';
        }
        var classes = cx((_a = {},
            _a["".concat(prefix, "pagination")] = true,
            _a["".concat(prefix).concat(size)] = size,
            _a["".concat(prefix).concat(type)] = type,
            _a["".concat(prefix).concat(shape)] = shape,
            _a["".concat(prefix, "start")] = !!pageSizeSelector && isStart && useFloatLayout,
            _a["".concat(prefix, "end")] = !!pageSizeSelector && !isStart && useFloatLayout,
            _a["".concat(prefix, "hide")] = totalPage <= 1 && hideOnlyOnePage,
            _a[className] = !!className,
            _a));
        if (rtl) {
            others.dir = 'rtl';
        }
        var buildComponent = function () {
            var coms = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                coms[_i] = arguments[_i];
            }
            return (React.createElement("div", __assign({ className: classes }, obj.pickOthers(Object.keys(Pagination.propTypes), others)),
                isStart && sizeSelector,
                totalRender ? _this.renderPageTotal() : null,
                React.createElement("div", { className: "".concat(prefix, "pagination-pages") }, coms.map(function (com, index) { return com && cloneElement(com, { key: index }); })),
                !isStart && sizeSelector));
        };
        switch (type) {
            case 'mini':
                return buildComponent(pageFirst, pageLast);
            case 'simple': {
                var pageDisplay = this.renderPageDisplay(currentPage, totalPage);
                return buildComponent(pageFirst, pageDisplay, pageLast);
            }
            case 'normal': {
                var pageList = this.renderPageList(currentPage, totalPage);
                var pageDisplay = showJump && total > pageSize * pageShowCount
                    ? this.renderPageDisplay(currentPage, totalPage)
                    : null;
                var pageJump = showJump && total > pageSize * pageShowCount ? this.renderPageJump() : [];
                return buildComponent.apply(void 0, __spreadArray([pageFirst, pageList, pageLast, pageDisplay], __read(pageJump), false));
            }
            default:
                return null;
        }
    };
    Pagination.displayName = 'Pagination';
    Pagination.propTypes = __assign(__assign({}, ConfigProvider.propTypes), { prefix: PropTypes.string, pure: PropTypes.bool, rtl: PropTypes.bool, device: PropTypes.oneOf(['desktop', 'tablet', 'phone']), className: PropTypes.string, locale: PropTypes.object, type: PropTypes.oneOf(['normal', 'simple', 'mini']), shape: PropTypes.oneOf(['normal', 'arrow-only', 'arrow-prev-only', 'no-border']), size: PropTypes.oneOf(['small', 'medium', 'large']), current: PropTypes.number, defaultCurrent: PropTypes.number, onChange: PropTypes.func, total: PropTypes.number, totalRender: PropTypes.func, pageShowCount: PropTypes.number, pageSize: PropTypes.number, pageSizeSelector: PropTypes.oneOf([false, 'filter', 'dropdown']), pageSizeList: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.number),
            PropTypes.arrayOf(PropTypes.shape({
                label: PropTypes.string,
                value: PropTypes.number,
            })),
        ]), pageNumberRender: PropTypes.func, pageSizePosition: PropTypes.oneOf(['start', 'end']), useFloatLayout: PropTypes.bool, onPageSizeChange: PropTypes.func, hideOnlyOnePage: PropTypes.bool, showJump: PropTypes.bool, link: PropTypes.string, popupProps: PropTypes.object, selectProps: PropTypes.object });
    Pagination.defaultProps = {
        prefix: 'next-',
        pure: false,
        rtl: false,
        locale: zhCN.Pagination,
        type: 'normal',
        shape: 'normal',
        size: 'medium',
        defaultCurrent: 1,
        onChange: noop,
        pageSize: 10,
        pageSizeSelector: false,
        pageSizeList: [5, 10, 20],
        pageSizePosition: 'start',
        onPageSizeChange: noop,
        useFloatLayout: false,
        total: 100,
        pageShowCount: 5,
        hideOnlyOnePage: false,
        showJump: true,
        pageNumberRender: function (index) { return index; },
    };
    return Pagination;
}(Component));
export default ConfigProvider.config(polyfill(Pagination));
