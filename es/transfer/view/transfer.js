import { __assign, __extends } from "tslib";
import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import Icon from '../../icon';
import Button from '../../button';
import zhCN from '../../locale/zh-cn';
import { func, obj } from '../../util';
import ConfigProvider from '../../config-provider';
import TransferPanel from '../view/transfer-panel';
var config = ConfigProvider.config;
var bindCtx = func.bindCtx;
var pickOthers = obj.pickOthers;
var getLeftValue = function (dataSource, rightValue) {
    return dataSource
        .map(function (item) { return item.value; })
        .filter(function (itemValue) {
        return rightValue.indexOf(itemValue) === -1;
    });
};
var filterCheckedValue = function (left, right, dataSource) {
    var result = {
        left: [],
        right: [],
    };
    if (left.length || right.length) {
        var value = dataSource.map(function (item) { return item.value; });
        value.forEach(function (itemValue) {
            if (left.indexOf(itemValue) > -1) {
                result.left.push(itemValue);
            }
            else if (right.indexOf(itemValue) > -1) {
                result.right.push(itemValue);
            }
        });
    }
    return result;
};
/**
 * Transfer
 */
var Transfer = /** @class */ (function (_super) {
    __extends(Transfer, _super);
    function Transfer(props, context) {
        var _this = _super.call(this, props, context) || this;
        var value = props.value, defaultValue = props.defaultValue, defaultLeftChecked = props.defaultLeftChecked, defaultRightChecked = props.defaultRightChecked, dataSource = props.dataSource, rtl = props.rtl, operations = props.operations;
        if (Array.isArray(operations) && !operations.length) {
            operations.push(React.createElement(Icon, { rtl: rtl, type: "arrow-right" }));
            operations.push(React.createElement(Icon, { rtl: rtl, type: "arrow-left" }));
        }
        var _a = filterCheckedValue(Transfer.normalizeValue(defaultLeftChecked), Transfer.normalizeValue(defaultRightChecked), dataSource), left = _a.left, right = _a.right;
        var stValue = Transfer.normalizeValue('value' in props ? value : defaultValue);
        _this.state = {
            value: stValue,
            leftCheckedValue: left,
            rightCheckedValue: right,
            leftValue: getLeftValue(dataSource, stValue),
        };
        bindCtx(_this, [
            'handlePanelChange',
            'handlePanelSort',
            'handleMoveItem',
            'handleSimpleMove',
            'handleSimpleMoveAll',
        ]);
        return _this;
    }
    Transfer.normalizeValue = function (value) {
        if (value) {
            if (Array.isArray(value)) {
                return value;
            }
            /* istanbul ignore next */
            return [value];
        }
        return [];
    };
    Transfer.getDerivedStateFromProps = function (nextProps, prevState) {
        var innerUpdate = prevState.innerUpdate, value = prevState.value, leftValue = prevState.leftValue;
        if (innerUpdate) {
            return {
                innerUpdate: false,
                value: value,
                leftValue: leftValue,
            };
        }
        var st = {};
        var newValue;
        if ('value' in nextProps) {
            var value_1 = Transfer.normalizeValue(nextProps.value);
            st.value = value_1;
            newValue = value_1;
        }
        else {
            /* istanbul ignore next */
            newValue = prevState.value;
        }
        st.leftValue = getLeftValue(nextProps.dataSource, newValue);
        var _a = filterCheckedValue(prevState.leftCheckedValue, prevState.rightCheckedValue, nextProps.dataSource), left = _a.left, right = _a.right;
        st.leftCheckedValue = left;
        st.rightCheckedValue = right;
        return st;
    };
    Transfer.prototype.groupDatasource = function (value, itemValues, dataSource) {
        return value.reduce(function (ret, itemValue) {
            var index = itemValues.indexOf(itemValue);
            if (index > -1) {
                ret.push(dataSource[index]);
            }
            return ret;
        }, []);
    };
    Transfer.prototype.handlePanelChange = function (position, value) {
        var _a;
        var _b = this.state, leftCheckedValue = _b.leftCheckedValue, rightCheckedValue = _b.rightCheckedValue;
        var onSelect = this.props.onSelect;
        var valuePropName = position === 'left' ? 'leftCheckedValue' : 'rightCheckedValue';
        // inner state changed
        this.setState((_a = {
                innerUpdate: true
            },
            _a[valuePropName] = value,
            _a));
        onSelect &&
            onSelect(position === 'left' ? value : leftCheckedValue, position === 'left' ? rightCheckedValue : value, position === 'left' ? 'source' : 'target');
    };
    Transfer.prototype.handlePanelSort = function (position, dragValue, referenceValue, dragGap) {
        var _this = this;
        var _a = this.state, value = _a.value, leftValue = _a.leftValue;
        var newValue = position === 'right' ? value : leftValue;
        var currentIndex = newValue.indexOf(dragValue);
        var referenceIndex = newValue.indexOf(referenceValue);
        var expectIndex = dragGap === 'before' ? referenceIndex : referenceIndex + 1;
        if (currentIndex === expectIndex) {
            return;
        }
        newValue.splice(currentIndex, 1);
        if (currentIndex < expectIndex) {
            expectIndex = expectIndex - 1;
        }
        newValue.splice(expectIndex, 0, dragValue);
        this.setState({
            innerUpdate: true,
            value: value,
            leftValue: leftValue,
        }, function () {
            _this.props.onSort(newValue, position);
        });
    };
    Transfer.prototype.handleMoveItem = function (direction) {
        var _a;
        var rightValue;
        var newLeftValue;
        var movedValue;
        var valuePropName;
        var _b = this.state, value = _b.value, leftValue = _b.leftValue, leftCheckedValue = _b.leftCheckedValue, rightCheckedValue = _b.rightCheckedValue;
        if (direction === 'right') {
            rightValue = leftCheckedValue.concat(value);
            newLeftValue = leftValue.filter(function (itemValue) { return leftCheckedValue.indexOf(itemValue) === -1; });
            movedValue = leftCheckedValue;
            valuePropName = 'leftCheckedValue';
        }
        else {
            rightValue = value.filter(function (itemValue) { return rightCheckedValue.indexOf(itemValue) === -1; });
            newLeftValue = rightCheckedValue.concat(leftValue);
            movedValue = rightCheckedValue;
            valuePropName = 'rightCheckedValue';
        }
        var st = (_a = {}, _a[valuePropName] = [], _a);
        this.setValueState(st, rightValue, newLeftValue, movedValue, direction);
    };
    Transfer.prototype.handleSimpleMove = function (direction, v) {
        var rightValue;
        var newLeftValue;
        var _a = this.state, value = _a.value, leftValue = _a.leftValue;
        if (direction === 'right') {
            rightValue = [v].concat(value);
            newLeftValue = leftValue.filter(function (itemValue) { return itemValue !== v; });
        }
        else {
            rightValue = value.filter(function (itemValue) { return itemValue !== v; });
            newLeftValue = [v].concat(leftValue);
        }
        this.setValueState({}, rightValue, newLeftValue, [v], direction);
    };
    Transfer.prototype.handleSimpleMoveAll = function (direction) {
        var rightValue;
        var newLeftValue;
        var movedValue;
        var dataSource = this.props.dataSource;
        var _a = this.state, value = _a.value, leftValue = _a.leftValue;
        var disabledValue = dataSource.reduce(function (ret, item) {
            if (item.disabled) {
                ret.push(item.value);
            }
            return ret;
        }, []);
        if (direction === 'right') {
            movedValue = leftValue.filter(function (itemValue) { return disabledValue.indexOf(itemValue) === -1; });
            rightValue = movedValue.concat(value);
            newLeftValue = leftValue.filter(function (itemValue) { return disabledValue.indexOf(itemValue) > -1; });
        }
        else {
            movedValue = value.filter(function (itemValue) { return disabledValue.indexOf(itemValue) === -1; });
            rightValue = value.filter(function (itemValue) { return disabledValue.indexOf(itemValue) > -1; });
            newLeftValue = movedValue.concat(leftValue);
        }
        this.setValueState({}, rightValue, newLeftValue, movedValue, direction);
    };
    Transfer.prototype.setValueState = function (st, rightValue, leftValue, movedValue, direction) {
        var _this = this;
        var dataSource = this.props.dataSource;
        var callback = function () {
            if ('onChange' in _this.props) {
                var itemValues = dataSource.map(function (item) { return item.value; });
                var rightData = _this.groupDatasource(rightValue, itemValues, dataSource);
                var leftData = _this.groupDatasource(leftValue, itemValues, dataSource);
                var movedData = _this.groupDatasource(movedValue, itemValues, dataSource);
                _this.props.onChange(rightValue, rightData, {
                    leftValue: leftValue,
                    leftData: leftData,
                    movedValue: movedValue,
                    movedData: movedData,
                    direction: direction,
                });
            }
        };
        if (!('value' in this.props)) {
            st.value = rightValue;
            st.leftValue = leftValue;
        }
        if (Object.keys(st).length) {
            this.setState(st, callback);
        }
        else {
            callback();
        }
    };
    Transfer.prototype.renderCenter = function () {
        var _a = this.props, prefix = _a.prefix, mode = _a.mode, operations = _a.operations, disabled = _a.disabled, leftDisabled = _a.leftDisabled, rightDisabled = _a.rightDisabled, locale = _a.locale;
        var _b = this.state, leftCheckedValue = _b.leftCheckedValue, rightCheckedValue = _b.rightCheckedValue;
        return (React.createElement("div", { className: "".concat(prefix, "transfer-operations") }, mode === 'simple' ? (React.createElement(Icon, { className: "".concat(prefix, "transfer-move"), size: "large", type: "switch" })) : ([
            React.createElement(Button, { "aria-label": locale.moveToRight, key: "l2r", className: "".concat(prefix, "transfer-operation"), type: leftCheckedValue.length ? 'primary' : 'normal', disabled: leftDisabled || disabled || !leftCheckedValue.length, onClick: this.handleMoveItem.bind(this, 'right') }, operations[0]),
            React.createElement(Button, { "aria-label": locale.moveToLeft, key: "r2l", className: "".concat(prefix, "transfer-operation"), type: rightCheckedValue.length ? 'primary' : 'normal', disabled: rightDisabled || disabled || !rightCheckedValue.length, onClick: this.handleMoveItem.bind(this, 'left') }, operations[1]),
        ])));
    };
    Transfer.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, mode = _a.mode, disabled = _a.disabled, className = _a.className, _b = _a.dataSource, dataSource = _b === void 0 ? [] : _b, locale = _a.locale, _c = _a.showSearch, showSearch = _c === void 0 ? false : _c, _d = _a.searchProps, searchProps = _d === void 0 ? {} : _d, filter = _a.filter, onSearch = _a.onSearch, leftDisabled = _a.leftDisabled, rightDisabled = _a.rightDisabled, searchPlaceholder = _a.searchPlaceholder, notFoundContent = _a.notFoundContent, _e = _a.titles, titles = _e === void 0 ? [] : _e, listClassName = _a.listClassName, listStyle = _a.listStyle, itemRender = _a.itemRender, sortable = _a.sortable, useVirtual = _a.useVirtual, rtl = _a.rtl, id = _a.id, children = _a.children, showCheckAll = _a.showCheckAll;
        var _f = this.state, value = _f.value, leftValue = _f.leftValue, leftCheckedValue = _f.leftCheckedValue, rightCheckedValue = _f.rightCheckedValue;
        var itemValues = dataSource.map(function (item) { return item.value; });
        var leftDatasource = this.groupDatasource(leftValue, itemValues, dataSource);
        var rightDatasource = this.groupDatasource(value, itemValues, dataSource);
        var panelProps = {
            prefix: prefix,
            mode: mode,
            locale: locale,
            filter: filter,
            onSearch: onSearch,
            searchPlaceholder: searchPlaceholder,
            listClassName: listClassName,
            listStyle: listStyle,
            itemRender: itemRender,
            onMove: this.handleSimpleMove,
            onMoveAll: this.handleSimpleMoveAll,
            onChange: this.handlePanelChange,
            sortable: sortable,
            useVirtual: useVirtual,
            onSort: this.handlePanelSort,
            baseId: id,
            customerList: children,
            showCheckAll: showCheckAll,
        };
        var others = pickOthers(Transfer.propTypes, this.props);
        if (rtl) {
            others.dir = 'rtl';
        }
        var _showSearch = Array.isArray(showSearch) ? showSearch : [showSearch, showSearch];
        var _searchProps = Array.isArray(searchProps) ? searchProps : [searchProps, searchProps];
        var _notFoundContent = Array.isArray(notFoundContent)
            ? notFoundContent
            : [notFoundContent, notFoundContent];
        return (React.createElement("div", __assign({ className: cx("".concat(prefix, "transfer"), className), id: id }, others),
            React.createElement(TransferPanel, __assign({}, panelProps, { position: "left", dataSource: leftDatasource, disabled: leftDisabled || disabled, value: leftCheckedValue, showSearch: _showSearch[0], searchProps: _searchProps[0], notFoundContent: _notFoundContent[0], title: titles[0] })),
            this.renderCenter(),
            React.createElement(TransferPanel, __assign({}, panelProps, { position: "right", dataSource: rightDatasource, disabled: rightDisabled || disabled, value: rightCheckedValue, showSearch: _showSearch[1], searchProps: _searchProps[1], notFoundContent: _notFoundContent[1], title: titles[1] }))));
    };
    Transfer.contextTypes = {
        prefix: PropTypes.string,
    };
    Transfer.propTypes = __assign(__assign({}, ConfigProvider.propTypes), { prefix: PropTypes.string, pure: PropTypes.bool, rtl: PropTypes.bool, className: PropTypes.string, 
        /**
         * 移动选项模式
         */
        mode: PropTypes.oneOf(['normal', 'simple']), 
        /**
         * 数据源
         */
        dataSource: PropTypes.arrayOf(PropTypes.object), 
        /**
         * （用于受控）当前值
         */
        value: PropTypes.arrayOf(PropTypes.string), 
        /**
         * （用于非受控）初始值
         */
        defaultValue: PropTypes.arrayOf(PropTypes.string), 
        /**
         * 值发生改变的时候触发的回调函数
         */
        onChange: PropTypes.func, 
        /**
         * Item 被选中的时候触发的回调函数
         */
        onSelect: PropTypes.func, 
        /**
         * 是否禁用
         */
        disabled: PropTypes.bool, 
        /**
         * 是否禁用左侧面板
         */
        leftDisabled: PropTypes.bool, 
        /**
         * 是否禁用右侧面板
         */
        rightDisabled: PropTypes.bool, 
        /**
         * 列表项渲染函数
         */
        itemRender: PropTypes.func, 
        /**
         * 自定义搜索函数
         */
        filter: PropTypes.func, 
        /**
         * 搜索框输入时触发的回调函数
         */
        onSearch: PropTypes.func, 
        /**
         * 搜索框占位符
         */
        searchPlaceholder: PropTypes.string, 
        /**
         * 左右面板是否显示搜索框
         */
        showSearch: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.bool)]), 
        /**
         * 左右面板搜索框配置项，同 Search 组件 props
         */
        searchProps: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]), 
        /**
         * 列表为空显示内容
         */
        notFoundContent: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]), 
        /**
         * 左右面板标题
         */
        titles: PropTypes.arrayOf(PropTypes.node), 
        /**
         * 向右向左移动按钮显示内容
         */
        operations: PropTypes.arrayOf(PropTypes.node), 
        /**
         * 左面板默认选中值
         */
        defaultLeftChecked: PropTypes.arrayOf(PropTypes.string), 
        /**
         * 右面板默认选中值
         */
        defaultRightChecked: PropTypes.arrayOf(PropTypes.string), 
        /**
         * 左右面板列表自定义样式类名
         */
        listClassName: PropTypes.string, 
        /**
         * 左右面板列表自定义样式对象
         */
        listStyle: PropTypes.object, 
        /**
         * 是否允许拖拽排序
         */
        sortable: PropTypes.bool, 
        /**
         * 拖拽排序时触发的回调函数
         */
        onSort: PropTypes.func, 
        /**
         * 自定义国际化文案对象
         */
        locale: PropTypes.object, 
        /**
         * 请设置 id 以保证transfer的可访问性
         */
        id: PropTypes.string, 
        /**
         * 接收 children 自定义渲染列表
         */
        children: PropTypes.func, 
        /**
         * 是否开启虚拟滚动
         */
        useVirtual: PropTypes.bool, 
        /**
         * 是否显示底部全选 checkbox
         */
        showCheckAll: PropTypes.bool });
    Transfer.defaultProps = {
        prefix: 'next-',
        pure: false,
        mode: 'normal',
        dataSource: [],
        defaultValue: [],
        disabled: false,
        leftDisabled: false,
        rightDisabled: false,
        showCheckAll: true,
        itemRender: function (data) { return data.label; },
        showSearch: false,
        filter: function (searchedValue, data) {
            var labelString = '';
            var loop = function (arg) {
                if (React.isValidElement(arg) &&
                    arg.props.children) {
                    React.Children.forEach(arg.props.children, loop);
                }
                else if (typeof arg === 'string') {
                    labelString += arg;
                }
            };
            loop(data.label);
            return (labelString.length >= searchedValue.length &&
                labelString.indexOf(searchedValue) > -1);
        },
        onSearch: function () { },
        notFoundContent: 'Not Found',
        titles: [],
        operations: [],
        defaultLeftChecked: [],
        defaultRightChecked: [],
        sortable: false,
        onSort: function () { },
        locale: zhCN.Transfer,
    };
    Transfer.displayName = 'Transfer';
    return Transfer;
}(Component));
export default config(polyfill(Transfer));
