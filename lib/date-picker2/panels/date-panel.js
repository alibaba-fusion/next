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

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _propTypes = require('prop-types');

var PT = _interopRequireWildcard(_propTypes);

var _propTypes2 = require('../prop-types');

var _propTypes3 = _interopRequireDefault(_propTypes2);

var _util = require('../../util');

var _util2 = require('../util');

var _calendar = require('../../calendar2');

var _calendar2 = _interopRequireDefault(_calendar);

var _timePanel = require('./time-panel');

var _timePanel2 = _interopRequireDefault(_timePanel);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DatePanel = (_temp2 = _class = function (_React$Component) {
    (0, _inherits3.default)(DatePanel, _React$Component);

    function DatePanel() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, DatePanel);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.onTimeSelect = function (v) {
            var value = _this.props.value;


            _util.func.invoke(_this.props, 'onSelect', [(0, _util2.setTime)(value || (0, _util.datejs)(), v)]);
        }, _this.handleSelect = function (v) {
            if (!_this.props.resetTime) {
                v = (0, _util2.setTime)(v, _this.props.value || (0, _util.datejs)());
            }

            _util.func.invoke(_this.props, 'onSelect', [v]);
        }, _this.handlePanelChange = function (v, mode) {
            _util.func.invoke(_this.props, 'onPanelChange', [v, mode]);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
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
                value: value,
                onSelect: this.onTimeSelect,
                disabledTime: disabledTime,
                timePanelProps: (0, _extends3.default)({}, _disabledTime, timePanelProps)
            })) : null
        );
    };

    return DatePanel;
}(_react2.default.Component), _class.propTypes = {
    rtl: PT.bool,
    prefix: PT.string,
    locale: PT.object,
    mode: _propTypes3.default.mode,
    panelMode: PT.any,
    value: _propTypes3.default.date,
    disabledDate: PT.func,
    showTime: PT.bool,
    resetTime: PT.bool,
    timePanelProps: PT.object,
    disabledTime: _propTypes3.default.disabledTime,
    dateCellRender: PT.func
}, _class.defaultProps = {
    showTime: false,
    resetTime: false
}, _temp2);
DatePanel.displayName = 'DatePanel';
exports.default = (0, _reactLifecyclesCompat.polyfill)(DatePanel);
module.exports = exports['default'];