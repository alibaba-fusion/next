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

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _propTypes = require('prop-types');

var PT = _interopRequireWildcard(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _zhCn = require('../locale/zh-cn');

var _zhCn2 = _interopRequireDefault(_zhCn);

var _util = require('../util');

var _propTypes2 = require('./prop-types');

var _propTypes3 = _interopRequireDefault(_propTypes2);

var _constant = require('./constant');

var _headerPanel = require('./panels/header-panel');

var _headerPanel2 = _interopRequireDefault(_headerPanel);

var _dateTable = require('./panels/date-table');

var _dateTable2 = _interopRequireDefault(_dateTable);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pickProps = _util.obj.pickProps,
    pickOthers = _util.obj.pickOthers;

// CALENDAR_MODE => DATE_PANEL_MODE

function getPanelMode(mode) {
    return mode && (mode === _constant.CALENDAR_MODE.YEAR ? _constant.DATE_PANEL_MODE.MONTH : _constant.DATE_PANEL_MODE.DATE);
}

function isValueChanged(newVal, oldVal) {
    return newVal !== oldVal && !(0, _util.datejs)(newVal).isSame((0, _util.datejs)(oldVal));
}

var Calendar = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(Calendar, _React$Component);

    function Calendar(props) {
        (0, _classCallCheck3.default)(this, Calendar);

        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

        _initialiseProps.call(_this);

        var defaultValue = props.defaultValue,
            mode = props.mode;

        var value = 'value' in props ? props.value : defaultValue;
        var panelValue = (0, _util.datejs)('panelValue' in props ? props.panelValue : value || props.defaultPanelValue);
        var panelMode = props.panelMode || getPanelMode(mode) || _constant.DATE_PANEL_MODE.DATE;

        _this.state = {
            mode: mode,
            value: value,
            panelMode: panelMode,
            panelValue: panelValue.isValid() ? panelValue : (0, _util.datejs)()
        };
        return _this;
    }

    Calendar.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
        var newState = null;
        var value = void 0;
        var panelValue = void 0;

        if ('value' in props && isValueChanged(props.value, state.value)) {
            value = props.value;
            panelValue = (0, _util.datejs)(value);
        }

        if ('panelValue' in props) {
            panelValue = (0, _util.datejs)(props.panelValue);
        }

        // panelValue不能是无效值
        if (panelValue) {
            panelValue = panelValue.isValid() ? panelValue : (0, _util.datejs)();
            newState = {
                panelValue: panelValue
            };
        }
        if (value) {
            newState.value = value;
        }

        return newState;
    };

    Calendar.prototype.render = function render() {
        var value = 'value' in this.props ? (0, _util.datejs)(this.props.value) : this.state.value;
        var _state = this.state,
            panelMode = _state.panelMode,
            mode = _state.mode,
            panelValue = _state.panelValue;
        var _props = this.props,
            prefix = _props.prefix,
            shape = _props.shape,
            rtl = _props.rtl,
            className = _props.className,
            restProps = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'shape', 'rtl', 'className']);


        var sharedProps = {
            rtl: rtl,
            prefix: prefix,
            shape: shape,
            value: value,
            panelValue: panelValue
        };

        var headerPanelProps = (0, _extends3.default)({}, pickProps(_headerPanel2.default.propTypes, restProps), sharedProps, {
            mode: mode,
            panelMode: panelMode,
            onPanelValueChange: this.onPanelValueChange,
            onModeChange: this.onModeChange,
            onPanelModeChange: this.onPanelModeChange,
            showModeSwitch: this.props.mode !== _constant.CALENDAR_MODE.YEAR
        });

        var dateTableProps = (0, _extends3.default)({}, pickProps(_dateTable2.default.propTypes, restProps), sharedProps, {
            mode: panelMode,
            onSelect: this.onDateSelect
        });

        var classNames = (0, _classnames2.default)([prefix + 'calendar2', prefix + 'calendar2-' + shape, className]);

        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({}, pickOthers(Calendar.propTypes, restProps), { dir: rtl ? 'rtl' : undefined, className: classNames }),
            _react2.default.createElement(_headerPanel2.default, headerPanelProps),
            _react2.default.createElement(
                'div',
                { className: prefix + 'calendar2-body' },
                _react2.default.createElement(_dateTable2.default, dateTableProps)
            )
        );
    };

    return Calendar;
}(_react2.default.Component), _class.propTypes = {
    rtl: PT.bool,
    name: PT.string,
    prefix: PT.string,
    locale: PT.object,
    /**
     * 展现形态
     */
    shape: _propTypes3.default.shape,
    /*
     * 日期模式: month | year
     */
    mode: _propTypes3.default.mode,
    /**
     * 默认选中的日期（受控）
     */
    value: _propTypes3.default.date,
    /**
     * 默认选中的日期
     */
    defaultValue: _propTypes3.default.date,
    /**
     * 面板显示的日期（受控）
     */
    panelValue: _propTypes3.default.date,
    /**
     * 面板默认显示的日期
     */
    defaultPanelValue: _propTypes3.default.date,
    /**
     * 不可选择的日期
     */
    disabledDate: PT.func,
    /**
     * 可显示的日期范围
     */
    validRange: PT.arrayOf(_propTypes3.default.date),
    /**
     * 自定义日期渲染
     */
    dateCellRender: PT.func,
    quarterCellRender: PT.func,
    monthCellRender: PT.func,
    yearCellRender: PT.func,
    /**
     * 自定义头部渲染
     */
    headerRender: PT.func,
    /**
     * 日期变化回调
     */
    onChange: PT.func,
    /**
     * 点击选择日期回调
     */
    onSelect: PT.func,
    /**
     * 日期面板变化回调
     */
    onPanelChange: PT.func,
    cellProps: PT.object,
    cellClassName: PT.oneOfType([PT.func, PT.string]),
    panelMode: PT.any,
    onPrev: PT.func,
    onNext: PT.func,
    onSuperPrev: PT.func,
    onSuperNext: PT.func,
    colNum: PT.number
}, _class.defaultProps = {
    rtl: false,
    prefix: 'next-',
    locale: _zhCn2.default.Calendar,
    shape: _constant.CALENDAR_SHAPE.FULLSCREEN,
    mode: _constant.CALENDAR_MODE.MONTH,
    defaultPanelValue: (0, _util.datejs)()
}, _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.switchPanelMode = function (mode) {
        var MONTH = _constant.DATE_PANEL_MODE.MONTH,
            YEAR = _constant.DATE_PANEL_MODE.YEAR,
            DECADE = _constant.DATE_PANEL_MODE.DECADE;

        var originalPanelMode = _this2.props.panelMode || getPanelMode(mode);

        switch (mode) {
            case YEAR:
                return MONTH;
            case DECADE:
                return YEAR;
            default:
                return originalPanelMode;
        }
    };

    this.shouldSwitchPanelMode = function () {
        var _props2 = _this2.props,
            mode = _props2.mode,
            shape = _props2.shape;
        var panelMode = _this2.state.panelMode;

        var originalPanelMode = _this2.props.panelMode || getPanelMode(mode);
        return shape === _constant.CALENDAR_SHAPE.PANEL && panelMode !== originalPanelMode;
    };

    this.onDateSelect = function (value, _, _ref) {
        var isCurrent = _ref.isCurrent;
        var panelMode = _this2.state.panelMode;

        var unit = panelMode === 'date' ? 'day' : panelMode;

        if (_this2.shouldSwitchPanelMode()) {
            _this2.onPanelChange(value, _this2.switchPanelMode(panelMode), 'DATESELECT_VALUE_SWITCH_MODE');
        } else {
            isCurrent || _this2.onPanelValueChange(value, 'DATESELECT');
            value.isSame(_this2.state.value, unit) || _this2.onChange(value);

            _util.func.invoke(_this2.props, 'onSelect', [value]);
        }
    };

    this.onModeChange = function (mode, reason) {
        _this2.setState({
            mode: mode
        });
        var panelMode = getPanelMode(mode);

        if (_this2.state.panelMode !== panelMode) {
            _this2.onPanelModeChange(panelMode, reason);
        }
    };

    this.onPanelValueChange = function (panelValue, reason) {
        _this2.onPanelChange(panelValue, _this2.state.panelMode, reason);
    };

    this.onPanelModeChange = function (panelMode, reason) {
        _this2.onPanelChange(_this2.state.panelValue, panelMode, reason);
    };

    this.onPanelChange = function (value, mode, reason) {
        _this2.setState({
            panelMode: mode,
            panelValue: value
        });

        _util.func.invoke(_this2.props, 'onPanelChange', [value, mode, reason]);
    };

    this.onChange = function (value) {
        _this2.setState({
            value: value,
            panelValue: value
        });
        _util.func.invoke(_this2.props, 'onChange', [value]);
    };
}, _temp);
Calendar.displayName = 'Calendar';
exports.default = (0, _reactLifecyclesCompat.polyfill)(Calendar);
module.exports = exports['default'];