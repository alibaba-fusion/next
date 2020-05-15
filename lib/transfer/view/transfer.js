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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _icon = require('../../icon');

var _icon2 = _interopRequireDefault(_icon);

var _button = require('../../button');

var _button2 = _interopRequireDefault(_button);

var _zhCn = require('../../locale/zh-cn');

var _zhCn2 = _interopRequireDefault(_zhCn);

var _util = require('../../util');

var _configProvider = require('../../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _transferPanel = require('../view/transfer-panel');

var _transferPanel2 = _interopRequireDefault(_transferPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = _configProvider2.default.config;
var bindCtx = _util.func.bindCtx;
var pickOthers = _util.obj.pickOthers;


var getLeftValue = function getLeftValue(dataSource, rightValue) {
    return dataSource.map(function (item) {
        return item.value;
    }).filter(function (itemValue) {
        return rightValue.indexOf(itemValue) === -1;
    });
};

var filterCheckedValue = function filterCheckedValue(left, right, dataSource) {
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

/**
 * Transfer
 */
var Transfer = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Transfer, _Component);

    Transfer.normalizeValue = function normalizeValue(value) {
        if (value) {
            if (Array.isArray(value)) {
                return value;
            }
            /* istanbul ignore next */
            return [value];
        }

        return [];
    };

    Transfer.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
        var innerUpdate = prevState.innerUpdate,
            value = prevState.value,
            leftValue = prevState.leftValue;

        if (innerUpdate) {
            return {
                innerUpdate: false,
                value: value,
                leftValue: leftValue
            };
        }
        var st = {};

        var newValue = void 0;
        if ('value' in nextProps) {
            var _value = Transfer.normalizeValue(nextProps.value);
            st.value = _value;
            newValue = _value;
        } else {
            /* istanbul ignore next */
            newValue = prevState.value;
        }
        st.leftValue = getLeftValue(nextProps.dataSource, newValue);

        var _filterCheckedValue = filterCheckedValue(prevState.leftCheckedValue, prevState.rightCheckedValue, nextProps.dataSource),
            left = _filterCheckedValue.left,
            right = _filterCheckedValue.right;

        st.leftCheckedValue = left;
        st.rightCheckedValue = right;

        return st;
    };

    function Transfer(props, context) {
        (0, _classCallCheck3.default)(this, Transfer);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props, context));

        var value = props.value,
            defaultValue = props.defaultValue,
            defaultLeftChecked = props.defaultLeftChecked,
            defaultRightChecked = props.defaultRightChecked,
            dataSource = props.dataSource,
            rtl = props.rtl,
            operations = props.operations;

        if (operations.length === 0) {
            operations.push(_react2.default.createElement(_icon2.default, { rtl: rtl, type: 'arrow-right' }));
            operations.push(_react2.default.createElement(_icon2.default, { rtl: rtl, type: 'arrow-left' }));
        }

        var _filterCheckedValue2 = filterCheckedValue(Transfer.normalizeValue(defaultLeftChecked), Transfer.normalizeValue(defaultRightChecked), dataSource),
            left = _filterCheckedValue2.left,
            right = _filterCheckedValue2.right;

        var stValue = Transfer.normalizeValue('value' in props ? value : defaultValue);
        _this.state = {
            value: stValue,
            leftCheckedValue: left,
            rightCheckedValue: right,
            leftValue: getLeftValue(dataSource, stValue)
        };

        bindCtx(_this, ['handlePanelChange', 'handlePanelSort', 'handleMoveItem', 'handleSimpleMove', 'handleSimpleMoveAll']);
        return _this;
    }

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

        var _state = this.state,
            value = _state.value,
            leftValue = _state.leftValue;

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
            leftValue: leftValue
        }, function () {
            _this2.props.onSort(newValue, position);
        });
    };

    Transfer.prototype.handleMoveItem = function handleMoveItem(direction) {
        var _st;

        var rightValue = void 0;
        var newLeftValue = void 0;
        var movedValue = void 0;
        var valuePropName = void 0;

        var _state2 = this.state,
            value = _state2.value,
            leftValue = _state2.leftValue,
            leftCheckedValue = _state2.leftCheckedValue,
            rightCheckedValue = _state2.rightCheckedValue;


        if (direction === 'right') {
            rightValue = leftCheckedValue.concat(value);
            newLeftValue = leftValue.filter(function (itemValue) {
                return leftCheckedValue.indexOf(itemValue) === -1;
            });
            movedValue = leftCheckedValue;
            valuePropName = 'leftCheckedValue';
        } else {
            rightValue = value.filter(function (itemValue) {
                return rightCheckedValue.indexOf(itemValue) === -1;
            });
            newLeftValue = rightCheckedValue.concat(leftValue);
            movedValue = rightCheckedValue;
            valuePropName = 'rightCheckedValue';
        }

        var st = (_st = {}, _st[valuePropName] = [], _st);

        this.setValueState(st, rightValue, newLeftValue, movedValue, direction);
    };

    Transfer.prototype.handleSimpleMove = function handleSimpleMove(direction, v) {
        var rightValue = void 0;
        var newLeftValue = void 0;

        var _state3 = this.state,
            value = _state3.value,
            leftValue = _state3.leftValue;


        if (direction === 'right') {
            rightValue = [v].concat(value);
            newLeftValue = leftValue.filter(function (itemValue) {
                return itemValue !== v;
            });
        } else {
            rightValue = value.filter(function (itemValue) {
                return itemValue !== v;
            });
            newLeftValue = [v].concat(leftValue);
        }

        this.setValueState({}, rightValue, newLeftValue, [v], direction);
    };

    Transfer.prototype.handleSimpleMoveAll = function handleSimpleMoveAll(direction) {
        var rightValue = void 0;
        var newLeftValue = void 0;
        var movedValue = void 0;

        var dataSource = this.props.dataSource;
        var _state4 = this.state,
            value = _state4.value,
            leftValue = _state4.leftValue;

        var disabledValue = dataSource.reduce(function (ret, item) {
            if (item.disabled) {
                ret.push(item.value);
            }

            return ret;
        }, []);

        if (direction === 'right') {
            movedValue = leftValue.filter(function (itemValue) {
                return disabledValue.indexOf(itemValue) === -1;
            });
            rightValue = movedValue.concat(value);
            newLeftValue = leftValue.filter(function (itemValue) {
                return disabledValue.indexOf(itemValue) > -1;
            });
        } else {
            movedValue = value.filter(function (itemValue) {
                return disabledValue.indexOf(itemValue) === -1;
            });
            rightValue = value.filter(function (itemValue) {
                return disabledValue.indexOf(itemValue) > -1;
            });
            newLeftValue = movedValue.concat(leftValue);
        }

        this.setValueState({}, rightValue, newLeftValue, movedValue, direction);
    };

    // eslint-disable-next-line max-params


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
            st.leftValue = leftValue;
        }

        if (Object.keys(st).length) {
            this.setState(st, callback);
        } else {
            // eslint-disable-next-line callback-return
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
            rightDisabled = _props.rightDisabled,
            locale = _props.locale;
        var _state5 = this.state,
            leftCheckedValue = _state5.leftCheckedValue,
            rightCheckedValue = _state5.rightCheckedValue;

        return _react2.default.createElement(
            'div',
            { className: prefix + 'transfer-operations' },
            mode === 'simple' ? _react2.default.createElement(_icon2.default, {
                className: prefix + 'transfer-move',
                size: 'large',
                type: 'switch'
            }) : [_react2.default.createElement(
                _button2.default,
                {
                    'aria-label': locale.moveToRight,
                    key: 'l2r',
                    className: prefix + 'transfer-operation',
                    type: leftCheckedValue.length ? 'primary' : 'normal',
                    disabled: leftDisabled || disabled || !leftCheckedValue.length,
                    onClick: this.handleMoveItem.bind(this, 'right')
                },
                operations[0]
            ), _react2.default.createElement(
                _button2.default,
                {
                    'aria-label': locale.moveToLeft,
                    key: 'r2l',
                    className: prefix + 'transfer-operation',
                    type: rightCheckedValue.length ? 'primary' : 'normal',
                    disabled: rightDisabled || disabled || !rightCheckedValue.length,
                    onClick: this.handleMoveItem.bind(this, 'left')
                },
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
            sortable = _props2.sortable,
            rtl = _props2.rtl,
            id = _props2.id,
            children = _props2.children;
        var _state6 = this.state,
            value = _state6.value,
            leftValue = _state6.leftValue,
            leftCheckedValue = _state6.leftCheckedValue,
            rightCheckedValue = _state6.rightCheckedValue;

        var itemValues = dataSource.map(function (item) {
            return item.value;
        });
        var leftDatasource = this.groupDatasource(leftValue, itemValues, dataSource);
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
            onSort: this.handlePanelSort,
            baseId: id,
            customerList: children
        };
        var others = pickOthers(Object.keys(Transfer.propTypes), this.props);

        if (rtl) {
            others.dir = 'rtl';
        }
        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({
                className: (0, _classnames2.default)(prefix + 'transfer', className),
                id: id
            }, others),
            _react2.default.createElement(_transferPanel2.default, (0, _extends3.default)({}, panelProps, {
                position: 'left',
                dataSource: leftDatasource,
                disabled: leftDisabled || disabled,
                value: leftCheckedValue,
                title: titles[0]
            })),
            this.renderCenter(),
            _react2.default.createElement(_transferPanel2.default, (0, _extends3.default)({}, panelProps, {
                position: 'right',
                dataSource: rightDatasource,
                disabled: rightDisabled || disabled,
                value: rightCheckedValue,
                title: titles[1]
            }))
        );
    };

    return Transfer;
}(_react.Component), _class.contextTypes = {
    prefix: _propTypes2.default.string
}, _class.propTypes = (0, _extends3.default)({}, _configProvider2.default.propTypes, {
    prefix: _propTypes2.default.string,
    pure: _propTypes2.default.bool,
    rtl: _propTypes2.default.bool,
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
     * @default [<Icon type="arrow-right" />, <Icon type="arrow-left" />]
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
    locale: _propTypes2.default.object,
    /**
     * 请设置 id 以保证transfer的可访问性
     */
    id: _propTypes2.default.string,
    /**
     * 接收 children 自定义渲染列表
     */
    children: _propTypes2.default.func
}), _class.defaultProps = {
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

        return labelString.length >= searchedValue.length && labelString.indexOf(searchedValue) > -1;
    },
    onSearch: function onSearch() {},
    notFoundContent: 'Not Found',
    titles: [],
    operations: [],
    defaultLeftChecked: [],
    defaultRightChecked: [],
    sortable: false,
    onSort: function onSort() {},
    locale: _zhCn2.default.Transfer
}, _temp);
Transfer.displayName = 'Transfer';
exports.default = config((0, _reactLifecyclesCompat.polyfill)(Transfer));
module.exports = exports['default'];