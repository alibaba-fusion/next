"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var classnames_1 = require("classnames");
var config_provider_1 = require("../config-provider");
var icon_1 = require("../icon");
var button_1 = require("../button");
var input_1 = require("../input");
var select_1 = require("../select");
var util_1 = require("../util");
var zh_cn_1 = require("../locale/zh-cn");
var Option = select_1.default.Option;
var noop = function () { };
function correctCurrent(currentPage, total, currentPageSize) {
    var totalPage = getTotalPage(total, currentPageSize);
    return currentPage > totalPage ? totalPage : currentPage;
}
function getTotalPage(total, currentPageSize) {
    var totalPage = Math.ceil(total / currentPageSize);
    return totalPage <= 0 ? 1 : totalPage;
}
/**
 * Pagination
 */
var Pagination = /** @class */ (function (_super) {
    tslib_1.__extends(Pagination, _super);
    function Pagination(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.handleJump = function (e) {
            var total = _this.props.total;
            var _a = _this.state, current = _a.current, currentPageSize = _a.currentPageSize, inputValue = _a.inputValue;
            var totalPage = getTotalPage(total, currentPageSize);
            var value = parseInt(inputValue, 10);
            if (isNaN(value)) {
                value = '';
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
        return react_1.default.createElement("div", { className: "".concat(prefix, "pagination-total") }, totalRender(total, range));
    };
    Pagination.prototype.renderPageItem = function (index) {
        var _a;
        var _b = this.props, prefix = _b.prefix, size = _b.size, link = _b.link, pageNumberRender = _b.pageNumberRender, total = _b.total, pageSize = _b.pageSize, locale = _b.locale;
        var current = this.state.current;
        var totalPage = getTotalPage(total, pageSize);
        var isCurrent = parseInt(index, 10) === current;
        var props = {
            size: size,
            className: (0, classnames_1.default)((_a = {},
                _a["".concat(prefix, "pagination-item")] = true,
                _a["".concat(prefix, "current")] = isCurrent,
                _a)),
            onClick: isCurrent ? noop : this.onPageItemClick.bind(this, index),
        };
        if (link) {
            props.component = 'a';
            props.href = link.replace('{page}', index);
        }
        return (react_1.default.createElement(button_1.default, tslib_1.__assign({ "aria-label": util_1.str.template(locale.total, {
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
            className: (0, classnames_1.default)((_a = {},
                _a["".concat(prefix, "pagination-item")] = true,
                _a["".concat(prefix, "prev")] = true,
                _a)),
            onClick: this.onPageItemClick.bind(this, current - 1),
        };
        var icon = react_1.default.createElement(icon_1.default, { type: "arrow-left", className: "".concat(prefix, "pagination-icon-prev") });
        return (react_1.default.createElement(button_1.default, tslib_1.__assign({}, props, { "aria-label": util_1.str.template(locale.labelPrev, { current: current }) }),
            icon,
            shape === 'arrow-only' || shape === 'arrow-prev-only' || shape === 'no-border' ? '' : locale.prev));
    };
    Pagination.prototype.renderPageLast = function (current, totalPage) {
        var _a;
        var _b = this.props, prefix = _b.prefix, size = _b.size, shape = _b.shape, locale = _b.locale;
        var isLast = current >= totalPage;
        var props = {
            disabled: isLast,
            size: size,
            className: (0, classnames_1.default)((_a = {},
                _a["".concat(prefix, "pagination-item")] = true,
                _a["".concat(prefix, "next")] = true,
                _a)),
            onClick: this.onPageItemClick.bind(this, current + 1),
        };
        var icon = react_1.default.createElement(icon_1.default, { type: "arrow-right", className: "".concat(prefix, "pagination-icon-next") });
        return (react_1.default.createElement(button_1.default, tslib_1.__assign({}, props, { "aria-label": util_1.str.template(locale.labelNext, { current: current }) }),
            shape === 'arrow-only' || shape === 'no-border' ? '' : locale.next,
            icon));
    };
    Pagination.prototype.renderPageEllipsis = function (idx) {
        var prefix = this.props.prefix;
        return (react_1.default.createElement(icon_1.default, { className: "".concat(prefix, "pagination-ellipsis ").concat(prefix, "pagination-icon-ellipsis"), type: "ellipsis", key: "ellipsis-".concat(idx) }));
    };
    Pagination.prototype.renderPageJump = function () {
        var _this = this;
        var _a = this.props, prefix = _a.prefix, size = _a.size, locale = _a.locale;
        var inputValue = this.state.inputValue;
        /* eslint-disable react/jsx-key */
        return [
            react_1.default.createElement("span", { className: "".concat(prefix, "pagination-jump-text") }, locale.goTo),
            react_1.default.createElement(input_1.default, { className: "".concat(prefix, "pagination-jump-input"), type: "text", "aria-label": locale.inputAriaLabel, size: size, value: inputValue, onChange: this.onInputChange.bind(this), onKeyDown: function (e) {
                    if (e.keyCode === util_1.KEYCODE.ENTER) {
                        _this.handleJump(e);
                    }
                } }),
            react_1.default.createElement("span", { className: "".concat(prefix, "pagination-jump-text") }, locale.page),
            react_1.default.createElement(button_1.default, { className: "".concat(prefix, "pagination-jump-go"), size: size, onClick: this.handleJump }, locale.go),
        ];
        /* eslint-enable react/jsx-key */
    };
    Pagination.prototype.renderPageDisplay = function (current, totalPage) {
        var _a = this.props, prefix = _a.prefix, pageNumberRender = _a.pageNumberRender;
        return (react_1.default.createElement("span", { className: "".concat(prefix, "pagination-display") },
            react_1.default.createElement("em", null, pageNumberRender(current)),
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
        return react_1.default.createElement("div", { className: "".concat(prefix, "pagination-list") }, pages);
    };
    Pagination.prototype.renderPageSizeSelector = function () {
        var _a = this.props, prefix = _a.prefix, pageSizeSelector = _a.pageSizeSelector, locale = _a.locale;
        var pageSizeSpan = react_1.default.createElement("span", { className: "".concat(prefix, "pagination-size-selector-title") }, locale.pageSize);
        switch (pageSizeSelector) {
            case 'filter':
                return (react_1.default.createElement("div", { className: "".concat(prefix, "pagination-size-selector") },
                    pageSizeSpan,
                    this.renderPageSizeFilter()));
            case 'dropdown':
                return (react_1.default.createElement("div", { className: "".concat(prefix, "pagination-size-selector") },
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
        return (react_1.default.createElement("div", { className: "".concat(prefix, "pagination-size-selector-filter") }, pageSizeList.map(function (item, index) {
            var _a;
            var label;
            var pageSize;
            if (item.value) {
                // {label: '', value: 5}
                label = item.label;
                pageSize = item.value;
            }
            else {
                // number
                label = pageSize = item;
            }
            var classes = (0, classnames_1.default)((_a = {},
                _a["".concat(prefix, "pagination-size-selector-btn")] = true,
                _a["".concat(prefix, "current")] = pageSize === currentPageSize,
                _a));
            return (react_1.default.createElement(button_1.default, { key: index, text: true, size: size, className: classes, onClick: pageSize !== currentPageSize ? _this.onSelectSize.bind(_this, pageSize) : null }, label));
        })));
    };
    Pagination.prototype.renderPageSizeDropdown = function () {
        var _a = this.props, prefix = _a.prefix, size = _a.size, pageSizeList = _a.pageSizeList, locale = _a.locale, popupProps = _a.popupProps, selectProps = _a.selectProps;
        var currentPageSize = this.state.currentPageSize;
        return (react_1.default.createElement(select_1.default, tslib_1.__assign({ className: "".concat(prefix, "pagination-size-selector-dropdown"), popupClassName: "".concat(prefix, "pagination-size-selector-popup"), popupProps: popupProps, "aria-label": locale.selectAriaLabel, autoWidth: false, size: size, value: currentPageSize, onChange: this.onSelectSize.bind(this) }, selectProps), pageSizeList.map(function (item, index) {
            var label;
            var pageSize;
            if (item.value) {
                // {label: '', value: 5}
                label = item.label;
                pageSize = item.value;
            }
            else {
                // number
                label = pageSize = item;
            }
            return (react_1.default.createElement(Option, { key: index, value: pageSize }, label));
        })));
    };
    Pagination.prototype.render = function () {
        var _a;
        var _this = this;
        /* eslint-disable no-unused-vars */
        var _b = this.props, prefix = _b.prefix, pure = _b.pure, rtl = _b.rtl, device = _b.device, paginationType = _b.type, size = _b.size, shape = _b.shape, className = _b.className, total = _b.total, totalRender = _b.totalRender, pageSize = _b.pageSize, pageSizeSelector = _b.pageSizeSelector, pageSizeList = _b.pageSizeList, pageSizePosition = _b.pageSizePosition, useFloatLayout = _b.useFloatLayout, onPageSizeChange = _b.onPageSizeChange, hideOnlyOnePage = _b.hideOnlyOnePage, showJump = _b.showJump, locale = _b.locale, current = _b.current, defaultCurrent = _b.defaultCurrent, pageShowCount = _b.pageShowCount, pageNumberRender = _b.pageNumberRender, link = _b.link, onChange = _b.onChange, popupProps = _b.popupProps, selectProps = _b.selectProps, others = tslib_1.__rest(_b, ["prefix", "pure", "rtl", "device", "type", "size", "shape", "className", "total", "totalRender", "pageSize", "pageSizeSelector", "pageSizeList", "pageSizePosition", "useFloatLayout", "onPageSizeChange", "hideOnlyOnePage", "showJump", "locale", "current", "defaultCurrent", "pageShowCount", "pageNumberRender", "link", "onChange", "popupProps", "selectProps"]);
        /* eslint-enable */
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
        var classes = (0, classnames_1.default)((_a = {},
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
            return (react_1.default.createElement("div", tslib_1.__assign({ className: classes }, util_1.obj.pickOthers(Object.keys(Pagination.propTypes), others)),
                isStart && sizeSelector,
                totalRender ? _this.renderPageTotal() : null,
                react_1.default.createElement("div", { className: "".concat(prefix, "pagination-pages") }, coms.map(function (com, index) { return com && react_1.default.cloneElement(com, { key: index }); })),
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
                var pageJump = showJump && total > pageSize * pageShowCount ? this.renderPageJump(currentPage, totalPage) : null;
                return buildComponent.apply(void 0, tslib_1.__spreadArray([pageFirst, pageList, pageLast, pageDisplay], tslib_1.__read(pageJump), false));
            }
            default:
                return null;
        }
    };
    Pagination.propTypes = tslib_1.__assign(tslib_1.__assign({}, config_provider_1.default.propTypes), { prefix: prop_types_1.default.string, pure: prop_types_1.default.bool, rtl: prop_types_1.default.bool, device: prop_types_1.default.oneOf(['desktop', 'tablet', 'phone']), className: prop_types_1.default.string, 
        /**
         * 自定义国际化文案对象
         */
        locale: prop_types_1.default.object, 
        /**
         * 分页组件类型
         */
        type: prop_types_1.default.oneOf(['normal', 'simple', 'mini']), 
        /**
         * 前进后退按钮样式
         */
        shape: prop_types_1.default.oneOf(['normal', 'arrow-only', 'arrow-prev-only', 'no-border']), 
        /**
         * 分页组件大小
         */
        size: prop_types_1.default.oneOf(['small', 'medium', 'large']), 
        /**
         * （受控）当前页码
         */
        current: prop_types_1.default.number, 
        /**
         * （非受控）初始页码
         */
        defaultCurrent: prop_types_1.default.number, 
        /**
         * 页码发生改变时的回调函数
         * @param {Number} current 改变后的页码数
         * @param {Object} e 点击事件对象
         */
        onChange: prop_types_1.default.func, 
        /**
         * 总记录数
         */
        total: prop_types_1.default.number, 
        /**
         * 总数的渲染函数
         * @param {Number} total 总数
         * @param {Array} range 当前数据在总数中的区间
         */
        totalRender: prop_types_1.default.func, 
        /**
         * 页码显示的数量，更多的使用...代替
         */
        pageShowCount: prop_types_1.default.number, 
        /**
         * 一页中的记录数
         */
        pageSize: prop_types_1.default.number, 
        /**
         * 每页显示选择器类型
         */
        pageSizeSelector: prop_types_1.default.oneOf([false, 'filter', 'dropdown']), 
        /**
         * 每页显示选择器可选值
         */
        pageSizeList: prop_types_1.default.oneOfType([
            prop_types_1.default.arrayOf(prop_types_1.default.number),
            prop_types_1.default.arrayOf(prop_types_1.default.shape({
                label: prop_types_1.default.string,
                value: prop_types_1.default.number,
            })),
        ]), 
        /**
         * 自定义页码渲染函数，函数作用于页码button以及当前页/总页数的数字渲染
         * @param {Number} index 分页的页码，从1开始
         * @return {ReactNode} 返回渲染结果
         */
        pageNumberRender: prop_types_1.default.func, 
        /**
         * 每页显示选择器在组件中的位置
         */
        pageSizePosition: prop_types_1.default.oneOf(['start', 'end']), 
        /**
         * 存在每页显示选择器时是否使用浮动布局
         */
        useFloatLayout: prop_types_1.default.bool, 
        /**
         * 每页显示记录数量改变时的回调函数
         * @param {Number} pageSize 改变后的每页显示记录数
         */
        onPageSizeChange: prop_types_1.default.func, 
        /**
         * 当分页数为1时，是否隐藏分页器
         */
        hideOnlyOnePage: prop_types_1.default.bool, 
        /**
         * type 设置为 normal 时，在页码数超过5页后，会显示跳转输入框与按钮，当设置 showJump 为 false 时，不再显示该跳转区域
         */
        showJump: prop_types_1.default.bool, 
        /**
         * 设置页码按钮的跳转链接，它的值为一个包含 {page} 的模版字符串，如：https://www.taobao.com/{page}
         */
        link: prop_types_1.default.string, 
        /**
         * 弹层组件属性，透传给Popup
         */
        popupProps: prop_types_1.default.object, selectProps: prop_types_1.default.object });
    Pagination.defaultProps = {
        prefix: 'next-',
        pure: false,
        rtl: false,
        locale: zh_cn_1.default.Pagination,
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
}(react_1.Component));
exports.default = config_provider_1.default.config((0, react_lifecycles_compat_1.polyfill)(Pagination));
