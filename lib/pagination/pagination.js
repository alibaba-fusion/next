"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var icon_1 = tslib_1.__importDefault(require("../icon"));
var button_1 = tslib_1.__importDefault(require("../button"));
var input_1 = tslib_1.__importDefault(require("../input"));
var select_1 = tslib_1.__importDefault(require("../select"));
var util_1 = require("../util");
var zh_cn_1 = tslib_1.__importDefault(require("../locale/zh-cn"));
var Option = select_1.default.Option;
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
    tslib_1.__extends(Pagination, _super);
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
        return react_1.default.createElement("div", { className: "".concat(prefix, "pagination-total") }, totalRender === null || totalRender === void 0 ? void 0 : totalRender(total, range));
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
            className: (0, classnames_1.default)((_a = {},
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
        // old code not have key so that use eslint-disable react/jsx-key to avoid warning
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
        return react_1.default.createElement("div", { className: "".concat(prefix, "pagination-list") }, pages);
    };
    Pagination.prototype.renderPageSizeSelector = function () {
        var _a = this.props, prefix = _a.prefix, pageSizeSelector = _a.pageSizeSelector, locale = _a.locale;
        var pageSizeSpan = (react_1.default.createElement("span", { className: "".concat(prefix, "pagination-size-selector-title") }, locale.pageSize));
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
            var classes = (0, classnames_1.default)((_a = {},
                _a["".concat(prefix, "pagination-size-selector-btn")] = true,
                _a["".concat(prefix, "current")] = pageSize === currentPageSize,
                _a));
            return (react_1.default.createElement(button_1.default, { key: index, text: true, size: size, className: classes, onClick: pageSize !== currentPageSize
                    ? _this.onSelectSize.bind(_this, pageSize)
                    : null }, label));
        })));
    };
    Pagination.prototype.renderPageSizeDropdown = function () {
        var _a = this.props, prefix = _a.prefix, size = _a.size, pageSizeList = _a.pageSizeList, locale = _a.locale, popupProps = _a.popupProps, selectProps = _a.selectProps;
        var currentPageSize = this.state.currentPageSize;
        return (react_1.default.createElement(select_1.default, tslib_1.__assign({ className: "".concat(prefix, "pagination-size-selector-dropdown"), popupClassName: "".concat(prefix, "pagination-size-selector-popup"), popupProps: popupProps, "aria-label": locale.selectAriaLabel, autoWidth: false, size: size, value: currentPageSize, onChange: this.onSelectSize.bind(this) }, selectProps), pageSizeList.map(function (item, index) {
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
            return (react_1.default.createElement(Option, { key: index, value: pageSize }, label));
        })));
    };
    Pagination.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this.props, prefix = _b.prefix, pure = _b.pure, rtl = _b.rtl, device = _b.device, paginationType = _b.type, size = _b.size, shape = _b.shape, className = _b.className, total = _b.total, totalRender = _b.totalRender, pageSize = _b.pageSize, pageSizeSelector = _b.pageSizeSelector, pageSizeList = _b.pageSizeList, pageSizePosition = _b.pageSizePosition, useFloatLayout = _b.useFloatLayout, onPageSizeChange = _b.onPageSizeChange, hideOnlyOnePage = _b.hideOnlyOnePage, showJump = _b.showJump, locale = _b.locale, current = _b.current, defaultCurrent = _b.defaultCurrent, pageShowCount = _b.pageShowCount, pageNumberRender = _b.pageNumberRender, link = _b.link, onChange = _b.onChange, popupProps = _b.popupProps, selectProps = _b.selectProps, others = tslib_1.__rest(_b, ["prefix", "pure", "rtl", "device", "type", "size", "shape", "className", "total", "totalRender", "pageSize", "pageSizeSelector", "pageSizeList", "pageSizePosition", "useFloatLayout", "onPageSizeChange", "hideOnlyOnePage", "showJump", "locale", "current", "defaultCurrent", "pageShowCount", "pageNumberRender", "link", "onChange", "popupProps", "selectProps"]);
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
                react_1.default.createElement("div", { className: "".concat(prefix, "pagination-pages") }, coms.map(function (com, index) { return com && (0, react_1.cloneElement)(com, { key: index }); })),
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
                return buildComponent.apply(void 0, tslib_1.__spreadArray([pageFirst, pageList, pageLast, pageDisplay], tslib_1.__read(pageJump), false));
            }
            default:
                return null;
        }
    };
    Pagination.displayName = 'Pagination';
    Pagination.propTypes = tslib_1.__assign(tslib_1.__assign({}, config_provider_1.default.propTypes), { prefix: prop_types_1.default.string, pure: prop_types_1.default.bool, rtl: prop_types_1.default.bool, device: prop_types_1.default.oneOf(['desktop', 'tablet', 'phone']), className: prop_types_1.default.string, locale: prop_types_1.default.object, type: prop_types_1.default.oneOf(['normal', 'simple', 'mini']), shape: prop_types_1.default.oneOf(['normal', 'arrow-only', 'arrow-prev-only', 'no-border']), size: prop_types_1.default.oneOf(['small', 'medium', 'large']), current: prop_types_1.default.number, defaultCurrent: prop_types_1.default.number, onChange: prop_types_1.default.func, total: prop_types_1.default.number, totalRender: prop_types_1.default.func, pageShowCount: prop_types_1.default.number, pageSize: prop_types_1.default.number, pageSizeSelector: prop_types_1.default.oneOf([false, 'filter', 'dropdown']), pageSizeList: prop_types_1.default.oneOfType([
            prop_types_1.default.arrayOf(prop_types_1.default.number),
            prop_types_1.default.arrayOf(prop_types_1.default.shape({
                label: prop_types_1.default.string,
                value: prop_types_1.default.number,
            })),
        ]), pageNumberRender: prop_types_1.default.func, pageSizePosition: prop_types_1.default.oneOf(['start', 'end']), useFloatLayout: prop_types_1.default.bool, onPageSizeChange: prop_types_1.default.func, hideOnlyOnePage: prop_types_1.default.bool, showJump: prop_types_1.default.bool, link: prop_types_1.default.string, popupProps: prop_types_1.default.object, selectProps: prop_types_1.default.object });
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
