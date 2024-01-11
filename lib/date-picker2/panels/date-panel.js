'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

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

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propTypes3 = require('../prop-types');

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _util = require('../../util');

var _util2 = require('../util');

var _calendar = require('../../calendar2');

var _calendar2 = _interopRequireDefault(_calendar);

var _timePanel = require('./time-panel');

var _timePanel2 = _interopRequireDefault(_timePanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DatePanel = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(DatePanel, _React$Component);

    function DatePanel(props) {
        (0, _classCallCheck3.default)(this, DatePanel);

        // 默认时间
        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

        _initialiseProps.call(_this);

        var _props$timePanelProps = props.timePanelProps,
            timePanelProps = _props$timePanelProps === undefined ? {} : _props$timePanelProps;

        var defaultTime = timePanelProps.defaultValue;

        if (defaultTime) {
            // fix: https://github.com/alibaba-fusion/next/issues/3203
            defaultTime = (0, _util.datejs)(defaultTime, typeof defaultTime === 'string' ? timePanelProps.format || 'HH:mm:ss' : undefined);
        }

        _this.state = {
            defaultTime: defaultTime
        };
        return _this;
    }

    DatePanel.prototype.render = function render() {
        var _classnames;

        var _props = this.props,
            mode = _props.mode,
            panelMode = _props.panelMode,
            prefix = _props.prefix,
            showTime = _props.showTime,
            value = _props.value,
            disabledDate = _props.disabledDate,
            disabledTime = _props.disabledTime,
            timePanelProps = _props.timePanelProps,
            dateCellRender = _props.dateCellRender,
            restProps = (0, _objectWithoutProperties3.default)(_props, ['mode', 'panelMode', 'prefix', 'showTime', 'value', 'disabledDate', 'disabledTime', 'timePanelProps', 'dateCellRender']);


        var className = (0, _classnames3.default)(prefix + 'date-picker2-panel', (_classnames = {}, _classnames[prefix + 'date-time-picker2-panel'] = showTime, _classnames));

        // 禁用时间
        var _disabledTime = void 0;
        if (showTime && mode === panelMode && disabledTime) {
            _disabledTime = typeof disabledTime === 'function' ? disabledTime(value) : disabledTime;
            if ((typeof _disabledTime === 'undefined' ? 'undefined' : (0, _typeof3.default)(_disabledTime)) !== 'object') {
                _disabledTime = null;
            }
        }

        return _react2.default.createElement(
            'div',
            { className: className },
            _react2.default.createElement(_calendar2.default, (0, _extends3.default)({}, _util.obj.pickProps(_calendar2.default.propTypes, restProps), {
                shape: 'panel',
                value: value,
                panelMode: mode,
                colNum: showTime ? 6 : undefined,
                onSelect: this.handleSelect,
                onPanelChange: this.handlePanelChange,
                disabledDate: disabledDate,
                dateCellRender: dateCellRender
            })),
            showTime && mode === panelMode ? _react2.default.createElement(_timePanel2.default, (0, _extends3.default)({}, _util.obj.pickProps(_timePanel2.default.propTypes, restProps), {
                prefix: prefix,
                value: value || this.state.defaultTime,
                onSelect: this.onTimeSelect,
                disabledTime: disabledTime,
                timePanelProps: (0, _extends3.default)({}, _disabledTime, timePanelProps)
            })) : null
        );
    };

    return DatePanel;
}(_react2.default.Component), _class.propTypes = {
    rtl: _propTypes2.default.bool,
    prefix: _propTypes2.default.string,
    locale: _propTypes2.default.object,
    mode: _propTypes4.default.mode,
    panelMode: _propTypes2.default.any,
    value: _propTypes4.default.date,
    disabledDate: _propTypes2.default.func,
    showTime: _propTypes2.default.bool,
    resetTime: _propTypes2.default.bool,
    timePanelProps: _propTypes2.default.object,
    disabledTime: _propTypes4.default.disabledTime,
    dateCellRender: _propTypes2.default.func
}, _class.defaultProps = {
    showTime: false,
    resetTime: false
}, _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.onTimeSelect = function (v) {
        _this2.handleSelect(v, true);
    };

    this.handleSelect = function (v, fromTimeChange) {
        var defaultTime = _this2.state.defaultTime;


        var timeVal = null;

        if (!_this2.props.resetTime && !fromTimeChange) {
            timeVal = _this2.props.value || defaultTime || (0, _util.datejs)();
        }

        v = (0, _util2.setTime)(v, timeVal);

        _util.func.invoke(_this2.props, 'onSelect', [v]);
    };

    this.handlePanelChange = function (v, mode) {
        _util.func.invoke(_this2.props, 'onPanelChange', [v, mode]);
    };
}, _temp);
DatePanel.displayName = 'DatePanel';
exports.default = (0, _reactLifecyclesCompat.polyfill)(DatePanel);
module.exports = exports.default;
module.exports.default = exports.default;