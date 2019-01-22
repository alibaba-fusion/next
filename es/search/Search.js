import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp, _initialiseProps;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Input from '../input';
import Select from '../select';
import Button from '../button';
import Icon from '../icon';
import { obj, func, KEYCODE } from '../util';

var Group = Input.Group;
var AutoComplete = Select.AutoComplete;

/**
 * Search
 * @description 输入框部分继承 Select.AutoComplete 的能力，可以直接用AutoComplete 的 api
 */
var Search = (_temp = _class = function (_React$Component) {
    _inherits(Search, _React$Component);

    function Search(props) {
        _classCallCheck(this, Search);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _initialiseProps.call(_this);

        var value = 'value' in props ? props.value : props.defaultValue;
        var filterValue = 'filterValue' in props ? props.filterValue : props.defaultFilterValue;

        _this.state = {
            value: typeof value === 'undefined' ? '' : value,
            filterValue: filterValue
        };
        return _this;
    }

    Search.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var state = {};
        if ('value' in nextProps) {
            state.value = typeof nextProps.value === 'undefined' ? '' : nextProps.value;
        }
        if ('filterValue' in nextProps) {
            state.filterValue = typeof nextProps.filterValue === 'undefined' ? '' : nextProps.filterValue;
        }
        this.setState(state);
    };

    Search.prototype.render = function render() {
        var _classNames;

        var _props = this.props,
            shape = _props.shape,
            filter = _props.filter,
            hasIcon = _props.hasIcon,
            placeholder = _props.placeholder,
            type = _props.type,
            className = _props.className,
            style = _props.style,
            size = _props.size,
            prefix = _props.prefix,
            searchText = _props.searchText,
            dataSource = _props.dataSource,
            filterProps = _props.filterProps,
            buttonProps = _props.buttonProps,
            popupContent = _props.popupContent,
            hasClear = _props.hasClear,
            visible = _props.visible,
            rtl = _props.rtl,
            others = _objectWithoutProperties(_props, ['shape', 'filter', 'hasIcon', 'placeholder', 'type', 'className', 'style', 'size', 'prefix', 'searchText', 'dataSource', 'filterProps', 'buttonProps', 'popupContent', 'hasClear', 'visible', 'rtl']);

        var cls = classNames((_classNames = {}, _classNames[prefix + 'search'] = true, _classNames[prefix + 'search-' + shape] = true, _classNames['' + prefix + type] = type, _classNames['' + prefix + size] = size, _classNames[className] = !!className, _classNames));

        var searchIcon = null,
            filterSelect = null,
            searchBtn = null;

        if (shape === 'simple') {
            var _classNames2;

            var _cls = classNames((_classNames2 = {}, _classNames2[prefix + 'search-icon'] = true, _classNames2[buttonProps.className] = !!buttonProps.className, _classNames2));
            searchIcon = React.createElement(Icon, _extends({}, buttonProps, { type: 'search', tabIndex: '0', role: 'button', className: _cls, onClick: this.onSearch, onKeyDown: this.onKeyDown }));
        } else {
            var _classNames3;

            var _cls2 = classNames((_classNames3 = {}, _classNames3[prefix + 'search-btn'] = true, _classNames3[buttonProps.className] = !!buttonProps.className, _classNames3));
            searchBtn = React.createElement(
                Button,
                _extends({}, buttonProps, { tabIndex: '0', className: _cls2, onClick: this.onSearch, onKeyDown: this.onKeyDown }),
                hasIcon ? React.createElement(Icon, { type: 'search' }) : null,
                searchText ? React.createElement(
                    'span',
                    { className: prefix + 'search-btn-text' },
                    searchText
                ) : null
            );
        }

        if (filter.length > 0) {
            filterSelect = React.createElement(Select, _extends({}, filterProps, {
                hasBorder: false,
                dataSource: filter,
                size: size,
                value: this.state.filterValue,
                onChange: this.onFilterChange
            }));
        }

        var othersAttributes = obj.pickOthers(Search.propTypes, others);
        if (visible !== undefined) {
            // 受控属性 visible 不能直接写在组件上
            othersAttributes.visible = Boolean(visible);
        }
        var dataAttr = obj.pickAttrsWith(others, 'data-');
        var left = React.createElement(
            Group,
            { addonBefore: filterSelect,
                className: prefix + 'search-left',
                addonBeforeClassName: prefix + 'search-left-addon' },
            React.createElement(AutoComplete, _extends({}, othersAttributes, {
                hasClear: hasClear,
                className: prefix + 'search-input',
                size: size,
                placeholder: placeholder,
                dataSource: dataSource,
                innerAfter: searchIcon,
                onPressEnter: this.onSearch,
                value: this.state.value,
                onChange: this.onChange,
                popupContent: popupContent
            }))
        );

        return React.createElement(
            'span',
            _extends({ className: cls, style: style }, dataAttr, { dir: rtl ? 'rtl' : undefined }),
            searchBtn ? React.createElement(
                Group,
                { addonAfter: searchBtn },
                left
            ) : left
        );
    };

    return Search;
}(React.Component), _class.propTypes = {
    /**
     * 样式前缀
     */
    prefix: PropTypes.string,
    /**
     * 形状
     */
    shape: PropTypes.oneOf(['normal', 'simple']),
    /**
     * 类型 shape=normal: primary/secondary; shape=simple: normal/dark;
     */
    type: PropTypes.oneOf(['primary', 'secondary', 'normal', 'dark']),
    /**
     * 大小
     * @enumdesc '大', '小'
     */
    size: PropTypes.oneOf(['large', 'medium']),
    /**
     * 搜索框默认值
     */
    defaultValue: PropTypes.string,
    /**
     * 搜索框数值
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * 输入关键字时的回掉
     * @param {Object} value 输入值
     */
    onChange: PropTypes.func,
    /**
     * 点击搜索按钮触发的回调
     * @param {Object} value 输入值
     */
    onSearch: PropTypes.func,
    /**
     * 选择器默认值
     */
    defaultFilterValue: PropTypes.string,
    /**
     * 选择器
     */
    filter: PropTypes.array,
    /**
     * 选择器值
     */
    filterValue: PropTypes.string,
    /**
     * 选择器发生变化时回调
     * @param {Object} filter value
     */
    onFilterChange: PropTypes.func,
    /**
     * 搜索框下拉联想列表
     */
    dataSource: PropTypes.array,
    /**
     * 默认提示
     */
    placeholder: PropTypes.string,
    /**
     * button 的内容
     */
    searchText: PropTypes.node,
    /**
     * 自定义样式
     */
    style: PropTypes.object,
    /**
     * 样式名称
     */
    className: PropTypes.string,
    /**
     * 选择器的props
     */
    filterProps: PropTypes.object,
    /**
     * 按钮的额外属性
     */
    buttonProps: PropTypes.object,
    /**
     * 自定义渲染的的下拉框
     */
    popupContent: PropTypes.node,
    /**
     * 自定义渲染的的下拉框
     */
    visible: PropTypes.bool,
    /**
     * 是否显示清除按钮
     */
    hasClear: PropTypes.bool,
    locale: PropTypes.object,
    rtl: PropTypes.bool
}, _class.defaultProps = {
    prefix: 'next-',
    shape: 'normal',
    type: 'normal',
    size: 'medium',
    hasIcon: true,
    filter: [],
    buttonProps: {},
    onChange: func.noop,
    onSearch: func.noop,
    onFilterChange: func.noop,
    hasClear: false
}, _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.onChange = function (value) {
        if (!('value' in _this2.props)) {
            _this2.setState({ value: value });
        }

        _this2.props.onChange(value);
    };

    this.onSearch = function () {
        _this2.props.onSearch(_this2.state.value, _this2.state.filterValue);
    };

    this.onFilterChange = function (filterValue) {
        if (!('filterValue' in _this2.props)) {
            _this2.setState({ filterValue: filterValue });
        }

        _this2.props.onFilterChange(filterValue);
    };

    this.onKeyDown = function (e) {
        if (e.keyCode !== KEYCODE.ENTER) {
            return;
        }
        _this2.onSearch();
    };
}, _temp);
Search.displayName = 'Search';


export default Search;