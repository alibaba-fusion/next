'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _button = require('../../button');

var _button2 = _interopRequireDefault(_button);

var _icon = require('../../icon');

var _icon2 = _interopRequireDefault(_icon);

var _configProvider = require('../../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _zhCn = require('../../locale/zh-cn');

var _zhCn2 = _interopRequireDefault(_zhCn);

var _util = require('../../util');

var _transferPanel = require('../view/transfer-panel');

var _transferPanel2 = _interopRequireDefault(_transferPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = _configProvider2.default.config;
var bindCtx = _util.func.bindCtx;
var pickOthers = _util.obj.pickOthers;

/**
 * Transfer
 */

var Transfer = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Transfer, _Component);

    function Transfer(props, context) {
        (0, _classCallCheck3.default)(this, Transfer);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props, context));

        var value = props.value,
            defaultValue = props.defaultValue,
            defaultLeftChecked = props.defaultLeftChecked,
            defaultRightChecked = props.defaultRightChecked,
            dataSource = props.dataSource;

        var _this$filterCheckedVa = _this.filterCheckedValue(_this.normalizeValue(defaultLeftChecked), _this.normalizeValue(defaultRightChecked), dataSource),
            left = _this$filterCheckedVa.left,
            right = _this$filterCheckedVa.right;

        _this.state = {
            value: _this.normalizeValue('value' in props ? value : defaultValue),
            leftCheckedValue: left,
            rightCheckedValue: right
        };

        _this.leftValue = _this.getLeftValue(dataSource, _this.state.value);

        bindCtx(_this, ['handlePanelChange', 'handlePanelSort', 'handleMoveItem', 'handleSimpleMove', 'handleSimpleMoveAll']);
        return _this;
    }

    Transfer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var st = {};

        var newValue = void 0;
        if ('value' in nextProps) {
            var value = this.normalizeValue(nextProps.value);
            st.value = value;
            newValue = value;
        } else {
            newValue = this.state.value;
        }
        this.leftValue = this.getLeftValue(nextProps.dataSource, newValue);

        var _filterCheckedValue = this.filterCheckedValue(this.state.leftCheckedValue, this.state.rightCheckedValue, nextProps.dataSource),
            left = _filterCheckedValue.left,
            right = _filterCheckedValue.right;

        st.leftCheckedValue = left;
        st.rightCheckedValue = right;

        this.setState(st);
    };

    Transfer.prototype.normalizeValue = function normalizeValue(value) {
        if (value) {
            if (Array.isArray(value)) {
                return value;
            }

            return [value];
        }

        return [];
    };

    Transfer.prototype.filterCheckedValue = function filterCheckedValue(left, right, dataSource) {
        var result = {
            left: [],
            right: []
        };

        if (left.length || right.length) {
            var value = dataSource.map(function (item) {
                return item.value;
            });
            value.forEach(function (itemValue) {
                if (left.indexOf(itemValue) > -1) {
                    result.left.push(itemValue);
                } else if (right.indexOf(itemValue) > -1) {
                    result.right.push(itemValue);
                }
            });
        }

        return result;
    };

    Transfer.prototype.getLeftValue = function getLeftValue(dataSource, rightValue) {
        return dataSource.map(function (item) {
            return item.value;
        }).filter(function (itemValue) {
            return rightValue.indexOf(itemValue) === -1;
        });
    };

    Transfer.prototype.groupDatasource = function groupDatasource(value, itemValues, dataSource) {
        return value.reduce(function (ret, itemValue) {
            var index = itemValues.indexOf(itemValue);
            if (index > -1) {
                ret.push(dataSource[index]);
            }
            return ret;
        }, []);
    };

    Transfer.prototype.handlePanelChange = function handlePanelChange(position, value) {
        var _setState;

        var valuePropName = position === 'left' ? 'leftCheckedValue' : 'rightCheckedValue';
        this.setState((_setState = {}, _setState[valuePropName] = value, _setState));
    };

    Transfer.prototype.handlePanelSort = function handlePanelSort(position, dragValue, referenceValue, dragGap) {
        var _this2 = this;

        var value = position === 'right' ? this.state.value : this.leftValue;
        var currentIndex = value.indexOf(dragValue);
        var referenceIndex = value.indexOf(referenceValue);
        var expectIndex = dragGap === 'before' ? referenceIndex : referenceIndex + 1;
        if (currentIndex === expectIndex) {
            return;
        }

        value.splice(currentIndex, 1);
        if (currentIndex < expectIndex) {
            expectIndex = expectIndex - 1;
        }
        value.splice(expectIndex, 0, dragValue);

        this.setState({
            value: this.state.value
        }, function () {
            _this2.props.onSort(value, position);
        });
    };

    Transfer.prototype.handleMoveItem = function handleMoveItem(direction) {
        var _st;

        var rightValue = void 0;
        var leftValue = void 0;
        var movedValue = void 0;
        var valuePropName = void 0;

        var _state = this.state,
            value = _state.value,
            leftCheckedValue = _state.leftCheckedValue,
            rightCheckedValue = _state.rightCheckedValue;


        if (direction === 'right') {
            rightValue = leftCheckedValue.concat(value);
            leftValue = this.leftValue.filter(function (itemValue) {
                return leftCheckedValue.indexOf(itemValue) === -1;
            });
            movedValue = leftCheckedValue;
            valuePropName = 'leftCheckedValue';
        } else {
            rightValue = value.filter(function (itemValue) {
                return rightCheckedValue.indexOf(itemValue) === -1;
            });
            leftValue = rightCheckedValue.concat(this.leftValue);
            movedValue = rightCheckedValue;
            valuePropName = 'rightCheckedValue';
        }

        var st = (_st = {}, _st[valuePropName] = [], _st);

        this.setValueState(st, rightValue, leftValue, movedValue, direction);
    };

    Transfer.prototype.handleSimpleMove = function handleSimpleMove(direction, v) {
        var rightValue = void 0;
        var leftValue = void 0;

        var value = this.state.value;


        if (direction === 'right') {
            rightValue = [v].concat(value);
            leftValue = this.leftValue.filter(function (itemValue) {
                return itemValue !== v;
            });
        } else {
            rightValue = value.filter(function (itemValue) {
                return itemValue !== v;
            });
            leftValue = [v].concat(this.leftValue);
        }

        this.setValueState({}, rightValue, leftValue, [v], direction);
    };

    Transfer.prototype.handleSimpleMoveAll = function handleSimpleMoveAll(direction) {
        var rightValue = void 0;
        var leftValue = void 0;
        var movedValue = void 0;

        var dataSource = this.props.dataSource;
        var value = this.state.value;

        var disabledValue = dataSource.reduce(function (ret, item) {
            if (item.disabled) {
                ret.push(item.value);
            }

            return ret;
        }, []);

        if (direction === 'right') {
            movedValue = this.leftValue.filter(function (itemValue) {
                return disabledValue.indexOf(itemValue) === -1;
            });
            rightValue = movedValue.concat(value);
            leftValue = this.leftValue.filter(function (itemValue) {
                return disabledValue.indexOf(itemValue) > -1;
            });
        } else {
            movedValue = value.filter(function (itemValue) {
                return disabledValue.indexOf(itemValue) === -1;
            });
            rightValue = value.filter(function (itemValue) {
                return disabledValue.indexOf(itemValue) > -1;
            });
            leftValue = movedValue.concat(this.leftValue);
        }

        this.setValueState({}, rightValue, leftValue, movedValue, direction);
    };

    Transfer.prototype.setValueState = function setValueState(st, rightValue, leftValue, movedValue, direction) {
        var _this3 = this;

        var dataSource = this.props.dataSource;

        var callback = function callback() {
            if ('onChange' in _this3.props) {
                var itemValues = dataSource.map(function (item) {
                    return item.value;
                });
                var rightData = _this3.groupDatasource(rightValue, itemValues, dataSource);
                var leftData = _this3.groupDatasource(leftValue, itemValues, dataSource);
                var movedData = _this3.groupDatasource(movedValue, itemValues, dataSource);

                _this3.props.onChange(rightValue, rightData, {
                    leftValue: leftValue,
                    leftData: leftData,
                    movedValue: movedValue,
                    movedData: movedData,
                    direction: direction
                });
            }
        };

        if (!('value' in this.props)) {
            st.value = rightValue;
            this.leftValue = leftValue;
        }

        if (Object.keys(st).length) {
            this.setState(st, callback);
        } else {
            callback();
        }
    };

    Transfer.prototype.renderCenter = function renderCenter() {
        var _props = this.props,
            prefix = _props.prefix,
            mode = _props.mode,
            operations = _props.operations,
            disabled = _props.disabled,
            leftDisabled = _props.leftDisabled,
            rightDisabled = _props.rightDisabled;
        var _state2 = this.state,
            leftCheckedValue = _state2.leftCheckedValue,
            rightCheckedValue = _state2.rightCheckedValue;


        return _react2.default.createElement(
            'div',
            { className: prefix + 'transfer-operations' },
            mode === 'simple' ? _react2.default.createElement(_icon2.default, { className: prefix + 'transfer-move', size: 'large', type: 'switch' }) : [_react2.default.createElement(
                _button2.default,
                { key: 'l2r', className: prefix + 'transfer-operation', type: leftCheckedValue.length ? 'primary' : 'normal', disabled: leftDisabled || disabled || !leftCheckedValue.length, onClick: this.handleMoveItem.bind(this, 'right') },
                operations[0]
            ), _react2.default.createElement(
                _button2.default,
                { key: 'r2l', className: prefix + 'transfer-operation', type: rightCheckedValue.length ? 'primary' : 'normal', disabled: rightDisabled || disabled || !rightCheckedValue.length, onClick: this.handleMoveItem.bind(this, 'left') },
                operations[1]
            )]
        );
    };

    Transfer.prototype.render = function render() {
        var _props2 = this.props,
            prefix = _props2.prefix,
            mode = _props2.mode,
            disabled = _props2.disabled,
            className = _props2.className,
            dataSource = _props2.dataSource,
            locale = _props2.locale,
            showSearch = _props2.showSearch,
            filter = _props2.filter,
            onSearch = _props2.onSearch,
            leftDisabled = _props2.leftDisabled,
            rightDisabled = _props2.rightDisabled,
            searchPlaceholder = _props2.searchPlaceholder,
            notFoundContent = _props2.notFoundContent,
            titles = _props2.titles,
            listClassName = _props2.listClassName,
            listStyle = _props2.listStyle,
            itemRender = _props2.itemRender,
            sortable = _props2.sortable;
        var _state3 = this.state,
            value = _state3.value,
            leftCheckedValue = _state3.leftCheckedValue,
            rightCheckedValue = _state3.rightCheckedValue;

        var itemValues = dataSource.map(function (item) {
            return item.value;
        });
        var leftDatasource = this.groupDatasource(this.leftValue, itemValues, dataSource);
        var rightDatasource = this.groupDatasource(value, itemValues, dataSource);
        var panelProps = {
            prefix: prefix,
            mode: mode,
            locale: locale,
            showSearch: showSearch,
            filter: filter,
            onSearch: onSearch,
            searchPlaceholder: searchPlaceholder,
            notFoundContent: notFoundContent,
            listClassName: listClassName,
            listStyle: listStyle,
            itemRender: itemRender,
            onMove: this.handleSimpleMove,
            onMoveAll: this.handleSimpleMoveAll,
            onChange: this.handlePanelChange,
            sortable: sortable,
            onSort: this.handlePanelSort
        };
        var others = pickOthers(Object.keys(Transfer.propTypes), this.props);

        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({ className: (0, _classnames2.default)(prefix + 'transfer', className) }, others),
            _react2.default.createElement(_transferPanel2.default, (0, _extends3.default)({}, panelProps, {
                position: 'left',
                dataSource: leftDatasource,
                disabled: leftDisabled || disabled,
                value: leftCheckedValue,
                title: titles[0] })),
            this.renderCenter(),
            _react2.default.createElement(_transferPanel2.default, (0, _extends3.default)({}, panelProps, {
                position: 'right',
                dataSource: rightDatasource,
                disabled: rightDisabled || disabled,
                value: rightCheckedValue,
                title: titles[1] }))
        );
    };

    return Transfer;
}(_react.Component), _class.contextTypes = {
    prefix: _propTypes2.default.string
}, _class.propTypes = {
    prefix: _propTypes2.default.string,
    pure: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    /**
     * 移动选项模式
     */
    mode: _propTypes2.default.oneOf(['normal', 'simple']),
    /**
     * 数据源
     */
    dataSource: _propTypes2.default.arrayOf(_propTypes2.default.object),
    /**
     * （用于受控）当前值
     */
    value: _propTypes2.default.arrayOf(_propTypes2.default.string),
    /**
     * （用于非受控）初始值
     */
    defaultValue: _propTypes2.default.arrayOf(_propTypes2.default.string),
    /**
     * 值发生改变的时候触发的回调函数
     * @param {Array} value 右面板值
     * @param {Array} data 右面板数据
     * @param {Object} extra 额外参数
     * @param {Array} extra.leftValue 左面板值
     * @param {Array} extra.leftData 左面板数据
     * @param {Array} extra.movedValue 发生移动的值
     * @param {Object} extra.movedData 发生移动的数据
     * @param {String} extra.direction 移动的方向，值为'left'或'right'
     */
    onChange: _propTypes2.default.func,
    /**
     * 是否禁用
     */
    disabled: _propTypes2.default.bool,
    /**
     * 是否禁用左侧面板
     */
    leftDisabled: _propTypes2.default.bool,
    /**
     * 是否禁用右侧面板
     */
    rightDisabled: _propTypes2.default.bool,
    /**
     * 列表项渲染函数
     * @param {Object} data 数据
     * @return {ReactNode} 列表项内容
     */
    itemRender: _propTypes2.default.func,
    /**
     * 是否显示搜索框
     */
    showSearch: _propTypes2.default.bool,
    /**
     * 自定义搜索函数
     * @param {String} searchedValue 搜索的内容
     * @param {Object} data 数据
     * @return {Boolean} 是否匹配到
     * @default 根据 label 属性匹配
     */
    filter: _propTypes2.default.func,
    /**
     * 搜索框输入时触发的回调函数
     * @param {String} searchedValue 搜索的内容
     * @param {String} position 搜索面板的位置
     */
    onSearch: _propTypes2.default.func,
    /**
     * 搜索框占位符
     */
    searchPlaceholder: _propTypes2.default.string,
    /**
     * 列表为空显示内容
     */
    notFoundContent: _propTypes2.default.node,
    /**
     * 左右面板标题
     */
    titles: _propTypes2.default.arrayOf(_propTypes2.default.node),
    /**
     * 向右向左移动按钮显示内容
     */
    operations: _propTypes2.default.arrayOf(_propTypes2.default.node),
    /**
     * 左面板默认选中值
     */
    defaultLeftChecked: _propTypes2.default.arrayOf(_propTypes2.default.string),
    /**
     * 右面板默认选中值
     */
    defaultRightChecked: _propTypes2.default.arrayOf(_propTypes2.default.string),
    /**
     * 左右面板列表自定义样式类名
     */
    listClassName: _propTypes2.default.string,
    /**
     * 左右面板列表自定义样式对象
     */
    listStyle: _propTypes2.default.object,
    /**
     * 是否允许拖拽排序
     */
    sortable: _propTypes2.default.bool,
    /**
     * 拖拽排序时触发的回调函数
     * @param {Array} value 排序后的值
     * @param {String} position 拖拽的面板位置，值为：left 或 right
     */
    onSort: _propTypes2.default.func,
    /**
     * 自定义国际化文案对象
     */
    locale: _propTypes2.default.object
}, _class.defaultProps = {
    prefix: 'next-',
    pure: false,
    mode: 'normal',
    dataSource: [],
    defaultValue: [],
    disabled: false,
    leftDisabled: false,
    rightDisabled: false,
    itemRender: function itemRender(data) {
        return data.label;
    },
    showSearch: false,
    filter: function filter(searchedValue, data) {
        var labelString = '';
        var loop = function loop(arg) {
            if (_react2.default.isValidElement(arg) && arg.props.children) {
                _react2.default.Children.forEach(arg.props.children, loop);
            } else if (typeof arg === 'string') {
                labelString += arg;
            }
        };
        loop(data.label);

        if (labelString.length >= searchedValue.length && labelString.indexOf(searchedValue) > -1) {
            return true;
        }

        return false;
    },
    onSearch: function onSearch() {},
    notFoundContent: 'Not Found',
    titles: [],
    // eslint-disable-next-line
    operations: [_react2.default.createElement(_icon2.default, { type: 'arrow-right' }), _react2.default.createElement(_icon2.default, { type: 'arrow-left' })],
    defaultLeftChecked: [],
    defaultRightChecked: [],
    sortable: false,
    onSort: function onSort() {},
    locale: _zhCn2.default.Transfer
}, _temp);
Transfer.displayName = 'Transfer';
exports.default = config(Transfer);
module.exports = exports['default'];