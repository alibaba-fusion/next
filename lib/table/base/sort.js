"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
var icon_1 = require("../../icon");
var util_1 = require("../../util");
/* eslint-disable react/prefer-stateless-function */
var Sort = /** @class */ (function (_super) {
    tslib_1.__extends(Sort, _super);
    function Sort() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this.handleClick = function () {
            var _a = _this.props, sort = _a.sort, dataIndex = _a.dataIndex, sortDirections = _a.sortDirections;
            var nextSortType = '';
            sortDirections.forEach(function (dir, i) {
                if (sort[dataIndex] === dir) {
                    nextSortType = sortDirections.length - 1 > i ? sortDirections[i + 1] : sortDirections[0];
                }
            });
            if (!sort[dataIndex]) {
                nextSortType = sortDirections[0];
            }
            _this.onSort(dataIndex, nextSortType);
        };
        _this.keydownHandler = function (e) {
            e.preventDefault();
            e.stopPropagation();
            if (e.keyCode === util_1.KEYCODE.ENTER) {
                _this.handleClick();
            }
        };
        _this.onSort = function (dataIndex, order) {
            var sort = {};
            sort[dataIndex] = order;
            _this.props.onSort(dataIndex, order, sort);
        };
        return _this;
    }
    // 渲染排序
    Sort.prototype.renderSort = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, sort = _b.sort, sortIcons = _b.sortIcons, className = _b.className, dataIndex = _b.dataIndex, locale = _b.locale, sortDirections = _b.sortDirections, rtl = _b.rtl, sortStatus = sort[dataIndex], map = {
            desc: 'descending',
            asc: 'ascending',
        };
        var icons = sortDirections.map(function (sortOrder) {
            return sortOrder === 'default' ? null : (react_1.default.createElement("a", { key: sortOrder, className: sortStatus === sortOrder ? 'current' : '' }, sortIcons ? sortIcons[sortOrder] : react_1.default.createElement(icon_1.default, { rtl: rtl, type: map[sortOrder], size: "xs" })));
        });
        var cls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "table-sort")] = true,
            _a[className] = className,
            _a));
        return (react_1.default.createElement("span", { role: "button", tabIndex: "0", "aria-label": locale[sortStatus], className: cls, onClick: this.handleClick.bind(this), onKeyDown: this.keydownHandler }, icons));
    };
    Sort.prototype.render = function () {
        return this.renderSort();
    };
    Sort.propTypes = {
        prefix: prop_types_1.default.string,
        rtl: prop_types_1.default.bool,
        className: prop_types_1.default.string,
        sort: prop_types_1.default.object,
        sortIcons: prop_types_1.default.object,
        onSort: prop_types_1.default.func,
        sortDirections: prop_types_1.default.arrayOf(prop_types_1.default.oneOf(['desc', 'asc', 'default'])),
        dataIndex: prop_types_1.default.string,
        locale: prop_types_1.default.object,
    };
    Sort.defaultProps = {
        sort: {},
        sortDirections: ['desc', 'asc'],
    };
    return Sort;
}(react_1.default.Component));
exports.default = Sort;
