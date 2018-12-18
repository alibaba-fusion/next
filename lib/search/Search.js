'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var _select = require('../select');

var _select2 = _interopRequireDefault(_select);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Group = _input2.default.Group;
var AutoComplete = _select2.default.AutoComplete;

/**
 * Search
 * @description 输入框部分继承 Select.AutoComplete 的能力，可以直接用AutoComplete 的 api
 */
var Search = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(Search, _React$Component);

    function Search(props) {
        (0, _classCallCheck3.default)(this, Search);

        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

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
            others = (0, _objectWithoutProperties3.default)(_props, ['shape', 'filter', 'hasIcon', 'placeholder', 'type', 'className', 'style', 'size', 'prefix', 'searchText', 'dataSource', 'filterProps', 'buttonProps', 'popupContent', 'hasClear', 'visible', 'rtl']);


        var cls = (0, _classnames2.default)((_classNames = {}, _classNames[prefix + 'search'] = true, _classNames[prefix + 'search-' + shape] = true, _classNames['' + prefix + type] = type, _classNames['' + prefix + size] = size, _classNames[className] = !!className, _classNames));

        var searchIcon = null,
            filterSelect = null,
            searchBtn = null;

        if (shape === 'simple') {
            var _classNames2;

            var _cls = (0, _classnames2.default)((_classNames2 = {}, _classNames2[prefix + 'search-icon'] = true, _classNames2[buttonProps.className] = !!buttonProps.className, _classNames2));
            searchIcon = _react2.default.createElement(_icon2.default, (0, _extends3.default)({}, buttonProps, { type: 'search', tabIndex: '0', role: 'button', className: _cls, onClick: this.onSearch, onKeyDown: this.onKeyDown }));
        } else {
            var _classNames3;

            var _cls2 = (0, _classnames2.default)((_classNames3 = {}, _classNames3[prefix + 'search-btn'] = true, _classNames3[buttonProps.className] = !!buttonProps.className, _classNames3));
            searchBtn = _react2.default.createElement(
                _button2.default,
                (0, _extends3.default)({}, buttonProps, { tabIndex: '0', className: _cls2, onClick: this.onSearch, onKeyDown: this.onKeyDown }),
                hasIcon ? _react2.default.createElement(_icon2.default, { type: 'search' }) : null,
                searchText ? _react2.default.createElement(
                    'span',
                    { className: prefix + 'search-btn-text' },
                    searchText
                ) : null
            );
        }

        if (filter.length > 0) {
            filterSelect = _react2.default.createElement(_select2.default, (0, _extends3.default)({}, filterProps, {
                hasBorder: false,
                dataSource: filter,
                size: size,
                value: this.state.filterValue,
                onChange: this.onFilterChange
            }));
        }

        var othersAttributes = _util.obj.pickOthers(Search.propTypes, others);
        if (visible !== undefined) {
            // 受控属性 visible 不能直接写在组件上
            othersAttributes.visible = Boolean(visible);
        }
        var dataAttr = _util.obj.pickAttrsWith(others, 'data-');
        var left = _react2.default.createElement(
            Group,
            { addonBefore: filterSelect,
                className: prefix + 'search-left',
                addonBeforeClassName: prefix + 'search-left-addon' },
            _react2.default.createElement(AutoComplete, (0, _extends3.default)({}, othersAttributes, {
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

        return _react2.default.createElement(
            'span',
            (0, _extends3.default)({ className: cls, style: style }, dataAttr, { dir: rtl ? 'rtl' : undefined }),
            searchBtn ? _react2.default.createElement(
                Group,
                { addonAfter: searchBtn },
                left
            ) : left
        );
    };

    return Search;
}(_react2.default.Component), _class.propTypes = {
    /**
     * 样式前缀
     */
    prefix: _propTypes2.default.string,
    /**
     * 形状
     */
    shape: _propTypes2.default.oneOf(['normal', 'simple']),
    /**
     * 类型 shape=normal: primary/secondary; shape=simple: normal/dark;
     */
    type: _propTypes2.default.oneOf(['primary', 'secondary', 'normal', 'dark']),
    /**
     * 大小
     * @enumdesc '大', '小'
     */
    size: _propTypes2.default.oneOf(['large', 'medium']),
    /**
     * 搜索框默认值
     */
    defaultValue: _propTypes2.default.string,
    /**
     * 搜索框数值
     */
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    /**
     * 输入关键字时的回掉
     * @param {Object} 输入值
     */
    onChange: _propTypes2.default.func,
    /**
     * 点击搜索按钮触发的回调
     * @param {Object} 输入值
     */
    onSearch: _propTypes2.default.func,
    /**
     * 选择器默认值
     */
    defaultFilterValue: _propTypes2.default.string,
    /**
     * 选择器
     */
    filter: _propTypes2.default.array,
    /**
     * 选择器值
     */
    filterValue: _propTypes2.default.string,
    /**
     * 选择器发生变化时回调
     * @param {Object} filter value
     */
    onFilterChange: _propTypes2.default.func,
    /**
     * 搜索框下拉联想列表
     */
    dataSource: _propTypes2.default.array,
    /**
     * 默认提示
     */
    placeholder: _propTypes2.default.string,
    /**
     * button 的内容
     */
    searchText: _propTypes2.default.node,
    /**
     * 自定义样式
     */
    style: _propTypes2.default.object,
    /**
     * 样式名称
     */
    className: _propTypes2.default.string,
    /**
     * 选择器的props
     */
    filterProps: _propTypes2.default.object,
    /**
     * 按钮的额外属性
     */
    buttonProps: _propTypes2.default.object,
    /**
     * 自定义渲染的的下拉框
     */
    popupContent: _propTypes2.default.node,
    /**
     * 自定义渲染的的下拉框
     */
    visible: _propTypes2.default.bool,
    /**
     * 是否显示清除按钮
     */
    hasClear: _propTypes2.default.bool,
    locale: _propTypes2.default.object,
    rtl: _propTypes2.default.bool
}, _class.defaultProps = {
    prefix: 'next-',
    shape: 'normal',
    type: 'normal',
    size: 'medium',
    hasIcon: true,
    filter: [],
    buttonProps: {},
    onChange: _util.func.noop,
    onSearch: _util.func.noop,
    onFilterChange: _util.func.noop,
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
        if (e.keyCode !== _util.KEYCODE.ENTER) {
            return;
        }
        _this2.onSearch();
    };
}, _temp);
Search.displayName = 'Search';
exports.default = Search;
module.exports = exports['default'];