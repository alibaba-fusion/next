import { __extends, __read, __spreadArray } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../../icon';
import { KEYCODE } from '../../util';
/* eslint-disable react/prefer-stateless-function */
var Sort = /** @class */ (function (_super) {
    __extends(Sort, _super);
    function Sort() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
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
            if (e.keyCode === KEYCODE.ENTER) {
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
            return sortOrder === 'default' ? null : (React.createElement("a", { key: sortOrder, className: sortStatus === sortOrder ? 'current' : '' }, sortIcons ? sortIcons[sortOrder] : React.createElement(Icon, { rtl: rtl, type: map[sortOrder], size: "xs" })));
        });
        var cls = classnames((_a = {},
            _a["".concat(prefix, "table-sort")] = true,
            _a[className] = className,
            _a));
        return (React.createElement("span", { role: "button", tabIndex: "0", "aria-label": locale[sortStatus], className: cls, onClick: this.handleClick.bind(this), onKeyDown: this.keydownHandler }, icons));
    };
    Sort.prototype.render = function () {
        return this.renderSort();
    };
    Sort.propTypes = {
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        className: PropTypes.string,
        sort: PropTypes.object,
        sortIcons: PropTypes.object,
        onSort: PropTypes.func,
        sortDirections: PropTypes.arrayOf(PropTypes.oneOf(['desc', 'asc', 'default'])),
        dataIndex: PropTypes.string,
        locale: PropTypes.object,
    };
    Sort.defaultProps = {
        sort: {},
        sortDirections: ['desc', 'asc'],
    };
    return Sort;
}(React.Component));
export default Sort;
