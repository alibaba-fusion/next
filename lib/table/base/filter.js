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

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _classnames4 = require('classnames');

var _classnames5 = _interopRequireDefault(_classnames4);

var _dropdown = require('../../dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _menu = require('../../menu');

var _menu2 = _interopRequireDefault(_menu);

var _button = require('../../button');

var _button2 = _interopRequireDefault(_button);

var _icon = require('../../icon');

var _icon2 = _interopRequireDefault(_icon);

var _util = require('../../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 共享状态的组件需要变成非受控组件
var Filter = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(Filter, _React$Component);

    function Filter(props) {
        (0, _classCallCheck3.default)(this, Filter);

        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

        _initialiseProps.call(_this);

        var filterParams = props.filterParams || {};
        var filterConfig = filterParams[props.dataIndex] || {};
        _this.state = {
            visible: filterConfig.visible || false,
            selectedKeys: filterConfig.selectedKeys || [],
            selectedKeysChangedByInner: true
        };
        _this._selectedKeys = [].concat(_this.state.selectedKeys);
        return _this;
    }

    Filter.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
        var state = {};
        if (nextProps.hasOwnProperty('filterParams') && typeof nextProps.filterParams !== 'undefined') {
            var dataIndex = nextProps.dataIndex || this.props.dataIndex;
            var filterParams = nextProps.filterParams || {};
            var filterConfig = filterParams[dataIndex] || {};
            var selectedKeys = void 0;
            if (prevState.selectedKeysChangedByInner) {
                selectedKeys = prevState.selectedKeys || [];
                state.selectedKeysChangedByInner = false;
            } else {
                selectedKeys = filterConfig.selectedKeys || [];
            }

            state.selectedKeys = selectedKeys;
        }

        return state;
    };

    Filter.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
        var selectedKeys = prevState.selectedKeys;

        this._selectedKeys = [].concat(selectedKeys);
    };

    Filter.prototype.render = function render() {
        var _classnames, _classnames2, _classnames3;

        var _props = this.props,
            filters = _props.filters,
            prefix = _props.prefix,
            locale = _props.locale,
            className = _props.className,
            filterMode = _props.filterMode,
            filterMenuProps = _props.filterMenuProps,
            filterProps = _props.filterProps,
            rtl = _props.rtl;


        var dropdownClassname = (0, _classnames5.default)(filterProps && filterProps.className, (_classnames = {}, _classnames[prefix + 'table-filter-menu'] = true, _classnames));
        var _state = this.state,
            visible = _state.visible,
            selectedKeys = _state.selectedKeys;

        var _ref = filterMenuProps || {},
            subMenuSelectable = _ref.subMenuSelectable,
            others = (0, _objectWithoutProperties3.default)(_ref, ['subMenuSelectable']);

        function renderMenuItem(item) {
            return _react2.default.createElement(
                _menu2.default.Item,
                { key: item.value },
                item.label
            );
        }

        function renderSubMenu(parent, children) {
            return _react2.default.createElement(
                _menu2.default.SubMenu,
                { label: parent.label, key: parent.value, selectable: subMenuSelectable },
                renderMenuContent(children)
            );
        }

        function renderMenuContent(list) {
            return list.map(function (item) {
                if (item.children) {
                    return renderSubMenu(item, item.children);
                } else {
                    return renderMenuItem(item);
                }
            });
        }

        var content = renderMenuContent(filters),
            footer = _react2.default.createElement(
            'div',
            { className: prefix + 'table-filter-footer' },
            _react2.default.createElement(
                _button2.default,
                { type: 'primary', onClick: this.onFilterConfirm },
                locale.ok
            ),
            _react2.default.createElement(
                _button2.default,
                { onClick: this.onFilterClear },
                locale.reset
            )
        );

        var cls = (0, _classnames5.default)((_classnames2 = {}, _classnames2[prefix + 'table-filter'] = true, _classnames2[className] = className, _classnames2));

        var filterIconCls = (0, _classnames5.default)((_classnames3 = {}, _classnames3[prefix + 'table-filter-active'] = selectedKeys && selectedKeys.length > 0, _classnames3));

        return _react2.default.createElement(
            _dropdown2.default,
            (0, _extends3.default)({
                trigger: _react2.default.createElement(
                    'span',
                    {
                        role: 'button',
                        'aria-label': locale.filter,
                        onKeyDown: this.filterKeydown,
                        tabIndex: '0',
                        className: cls
                    },
                    _react2.default.createElement(_icon2.default, { type: 'filter', size: 'small', className: filterIconCls })
                ),
                triggerType: 'click',
                visible: visible,
                autoFocus: true,
                rtl: rtl,
                needAdjust: false,
                onVisibleChange: this.onFilterVisible,
                className: dropdownClassname
            }, filterProps),
            _react2.default.createElement(
                _menu2.default,
                (0, _extends3.default)({
                    footer: footer,
                    rtl: rtl,
                    selectedKeys: selectedKeys,
                    selectMode: filterMode,
                    onSelect: this.onFilterSelect
                }, others),
                content
            )
        );
    };

    return Filter;
}(_react2.default.Component), _class.propTypes = {
    dataIndex: _propTypes2.default.string,
    filters: _propTypes2.default.array,
    filterMode: _propTypes2.default.string,
    filterParams: _propTypes2.default.object,
    filterMenuProps: _propTypes2.default.object,
    filterProps: _propTypes2.default.object,
    locale: _propTypes2.default.object,
    onFilter: _propTypes2.default.func,
    prefix: _propTypes2.default.string,
    rtl: _propTypes2.default.bool
}, _class.defaultProps = {
    onFilter: function onFilter() {}
}, _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.filterKeydown = function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (e.keyCode === _util.KEYCODE.ENTER) {
            _this2.setState({
                visible: !_this2.state.visible
            });
        }
    };

    this.onFilterVisible = function (visible) {
        _this2.setState({
            visible: visible
        });

        if (!visible) {
            var selectedKeys = [].concat(_this2._selectedKeys);

            _this2.setState({
                selectedKeysChangedByInner: true,
                selectedKeys: selectedKeys
            });
        }
    };

    this.onFilterSelect = function (selectedKeys) {
        _this2.setState({
            visible: true,
            selectedKeysChangedByInner: true,
            selectedKeys: selectedKeys
        });
    };

    this.onFilterConfirm = function () {
        var selectedKeys = _this2.state.selectedKeys;
        var filterParams = {},
            dataIndex = _this2.props.dataIndex;


        filterParams[dataIndex] = {
            visible: false,
            selectedKeys: selectedKeys
        };
        _this2._selectedKeys = [].concat(selectedKeys);
        _this2.setState({
            visible: false,
            selectedKeysChangedByInner: true
        });
        // 兼容之前的格式
        _this2.props.onFilter(filterParams);
    };

    this.onFilterClear = function () {
        var filterParams = {},
            dataIndex = _this2.props.dataIndex;


        filterParams[dataIndex] = {
            visible: false,
            selectedKeys: []
        };
        _this2._selectedKeys = [];
        _this2.setState({
            selectedKeys: [],
            visible: false,
            selectedKeysChangedByInner: true
        });
        // 兼容之前的格式
        _this2.props.onFilter(filterParams);
    };
}, _temp);
Filter.displayName = 'Filter';
exports.default = (0, _reactLifecyclesCompat.polyfill)(Filter);
module.exports = exports.default;
module.exports.default = exports.default;