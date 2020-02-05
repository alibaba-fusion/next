'use strict';

exports.__esModule = true;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _classnames4 = require('classnames');

var _classnames5 = _interopRequireDefault(_classnames4);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _overlay = require('../overlay');

var _overlay2 = _interopRequireDefault(_overlay);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var _calendar = require('../calendar');

var _calendar2 = _interopRequireDefault(_calendar);

var _zhCn = require('../locale/zh-cn');

var _zhCn2 = _interopRequireDefault(_zhCn);

var _util = require('../util');

var _util2 = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Popup = _overlay2.default.Popup;

/**
 * DatePicker.YearPicker
 */

var YearPicker = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(YearPicker, _Component);

    function YearPicker(props, context) {
        (0, _classCallCheck3.default)(this, YearPicker);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props, context));

        _initialiseProps.call(_this);

        var value = (0, _util2.formatDateValue)(props.value || props.defaultValue, props.format);

        _this.inputAsString = typeof (props.value || props.defaultValue) === 'string'; // 判断用户输入是否是字符串
        _this.state = {
            value: value,
            dateInputStr: '',
            inputing: false,
            visible: props.visible || props.defaultVisible
        };
        return _this;
    }

    YearPicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            var value = (0, _util2.formatDateValue)(nextProps.value, nextProps.format || this.props.format);
            this.setState({
                value: value
            });
            this.inputAsString = typeof nextProps.value === 'string';
        }

        if ('visible' in nextProps) {
            this.setState({
                visible: nextProps.visible
            });
        }
    };

    YearPicker.prototype.renderPreview = function renderPreview(others) {
        var _props = this.props,
            prefix = _props.prefix,
            format = _props.format,
            className = _props.className,
            renderPreview = _props.renderPreview;
        var value = this.state.value;

        var previewCls = (0, _classnames5.default)(className, prefix + 'form-preview');

        var label = value ? value.format(format) : '';

        if (typeof renderPreview === 'function') {
            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, others, { className: previewCls }),
                renderPreview(value, this.props)
            );
        }

        return _react2.default.createElement(
            'p',
            (0, _extends3.default)({}, others, { className: previewCls }),
            label
        );
    };

    YearPicker.prototype.render = function render() {
        var _classnames, _classnames2, _classnames3;

        var _props2 = this.props,
            prefix = _props2.prefix,
            rtl = _props2.rtl,
            locale = _props2.locale,
            label = _props2.label,
            state = _props2.state,
            format = _props2.format,
            disabledDate = _props2.disabledDate,
            footerRender = _props2.footerRender,
            placeholder = _props2.placeholder,
            size = _props2.size,
            disabled = _props2.disabled,
            hasClear = _props2.hasClear,
            popupTriggerType = _props2.popupTriggerType,
            popupAlign = _props2.popupAlign,
            popupContainer = _props2.popupContainer,
            popupStyle = _props2.popupStyle,
            popupClassName = _props2.popupClassName,
            popupProps = _props2.popupProps,
            popupComponent = _props2.popupComponent,
            popupContent = _props2.popupContent,
            followTrigger = _props2.followTrigger,
            className = _props2.className,
            inputProps = _props2.inputProps,
            dateInputAriaLabel = _props2.dateInputAriaLabel,
            yearCellRender = _props2.yearCellRender,
            isPreview = _props2.isPreview,
            others = (0, _objectWithoutProperties3.default)(_props2, ['prefix', 'rtl', 'locale', 'label', 'state', 'format', 'disabledDate', 'footerRender', 'placeholder', 'size', 'disabled', 'hasClear', 'popupTriggerType', 'popupAlign', 'popupContainer', 'popupStyle', 'popupClassName', 'popupProps', 'popupComponent', 'popupContent', 'followTrigger', 'className', 'inputProps', 'dateInputAriaLabel', 'yearCellRender', 'isPreview']);
        var _state = this.state,
            visible = _state.visible,
            value = _state.value,
            dateInputStr = _state.dateInputStr,
            inputing = _state.inputing;


        var yearPickerCls = (0, _classnames5.default)((_classnames = {}, _classnames[prefix + 'year-picker'] = true, _classnames), className);

        var triggerInputCls = (0, _classnames5.default)((_classnames2 = {}, _classnames2[prefix + 'year-picker-input'] = true, _classnames2[prefix + 'error'] = false, _classnames2));

        var panelBodyClassName = (0, _classnames5.default)((_classnames3 = {}, _classnames3[prefix + 'year-picker-body'] = true, _classnames3));

        if (rtl) {
            others.dir = 'rtl';
        }

        if (isPreview) {
            return this.renderPreview(_util.obj.pickOthers(others, YearPicker.PropTypes));
        }

        var panelInputCls = prefix + 'year-picker-panel-input';

        var sharedInputProps = (0, _extends3.default)({}, inputProps, {
            size: size,
            disabled: disabled,
            onChange: this.onDateInputChange,
            onBlur: this.onDateInputBlur,
            onPressEnter: this.onDateInputBlur,
            onKeyDown: this.onKeyDown
        });

        var dateInputValue = inputing ? dateInputStr : value && value.format(format) || '';
        var triggerInputValue = dateInputValue;

        var dateInput = _react2.default.createElement(_input2.default, (0, _extends3.default)({}, sharedInputProps, {
            'aria-label': dateInputAriaLabel,
            value: dateInputValue,
            placeholder: format,
            className: panelInputCls
        }));

        var datePanel = _react2.default.createElement(_calendar2.default, {
            shape: 'panel',
            modes: ['year'],
            value: value,
            yearCellRender: yearCellRender,
            onSelect: this.onSelectCalendarPanel,
            disabledDate: disabledDate
        });

        var panelBody = datePanel;
        var panelFooter = footerRender();

        var allowClear = value && hasClear;
        var trigger = _react2.default.createElement(
            'div',
            { className: prefix + 'year-picker-trigger' },
            _react2.default.createElement(_input2.default, (0, _extends3.default)({}, sharedInputProps, {
                label: label,
                state: state,
                value: triggerInputValue,
                role: 'combobox',
                'aria-expanded': visible,
                readOnly: true,
                placeholder: placeholder || locale.yearPlaceholder,
                hint: 'calendar',
                hasClear: allowClear,
                className: triggerInputCls
            }))
        );

        var PopupComponent = popupComponent ? popupComponent : Popup;

        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({}, _util.obj.pickOthers(YearPicker.propTypes, others), {
                className: yearPickerCls
            }),
            _react2.default.createElement(
                PopupComponent,
                (0, _extends3.default)({
                    autoFocus: true,
                    align: popupAlign
                }, popupProps, {
                    followTrigger: followTrigger,
                    disabled: disabled,
                    visible: visible,
                    onVisibleChange: this.onVisibleChange,
                    triggerType: popupTriggerType,
                    container: popupContainer,
                    style: popupStyle,
                    className: popupClassName,
                    trigger: trigger
                }),
                popupContent ? popupContent : _react2.default.createElement(
                    'div',
                    { dir: others.dir, className: panelBodyClassName },
                    _react2.default.createElement(
                        'div',
                        {
                            className: prefix + 'year-picker-panel-header'
                        },
                        dateInput
                    ),
                    panelBody,
                    panelFooter
                )
            )
        );
    };

    return YearPicker;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    rtl: _propTypes2.default.bool,
    /**
     * 输入框内置标签
     */
    label: _propTypes2.default.node,
    /**
     * 输入框状态
     */
    state: _propTypes2.default.oneOf(['success', 'loading', 'error']),
    /**
     * 输入提示
     */
    placeholder: _propTypes2.default.string,
    /**
     * 日期值（受控）moment 对象
     */
    value: _util2.checkDateValue,
    /**
     * 初始日期值，moment 对象
     */
    defaultValue: _util2.checkDateValue,
    /**
     * 日期值的格式（用于限定用户输入和展示）
     */
    format: _propTypes2.default.string,
    /**
     * 禁用日期函数
     * @param {MomentObject} 日期值
     * @param {String} view 当前视图类型，year: 年， month: 月, date: 日
     * @return {Boolean} 是否禁用
     */
    disabledDate: _propTypes2.default.func,
    /**
     * 自定义面板页脚
     * @return {Node} 自定义的面板页脚组件
     */
    footerRender: _propTypes2.default.func,
    /**
     * 日期值改变时的回调
     * @param {MomentObject|String} value 日期值
     */
    onChange: _propTypes2.default.func,
    /**
     * 输入框尺寸
     */
    size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
    /**
     * 是否禁用
     */
    disabled: _propTypes2.default.bool,
    /**
     * 是否显示清空按钮
     */
    hasClear: _propTypes2.default.bool,
    /**
     * 弹层显示状态
     */
    visible: _propTypes2.default.bool,
    /**
     * 弹层默认是否显示
     */
    defaultVisible: _propTypes2.default.bool,
    /**
     * 弹层展示状态变化时的回调
     * @param {Boolean} visible 弹层是否显示
     * @param {String} reason 触发弹层显示和隐藏的来源 calendarSelect 表示由日期表盘的选择触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发
     */
    onVisibleChange: _propTypes2.default.func,
    /**
     * 弹层触发方式
     */
    popupTriggerType: _propTypes2.default.oneOf(['click', 'hover']),
    /**
     * 弹层对齐方式, 具体含义见 OverLay文档
     */
    popupAlign: _propTypes2.default.string,
    /**
     * 弹层容器
     * @param {Element} target 目标元素
     * @return {Element} 弹层的容器元素
     */
    popupContainer: _propTypes2.default.any,
    /**
     * 弹层自定义样式
     */
    popupStyle: _propTypes2.default.object,
    /**
     * 弹层自定义样式类
     */
    popupClassName: _propTypes2.default.string,
    /**
     * 弹层其他属性
     */
    popupProps: _propTypes2.default.object,
    /**
     * 是否跟随滚动
     */
    followTrigger: _propTypes2.default.bool,
    /**
     * 输入框其他属性
     */
    inputProps: _propTypes2.default.object,
    yearCellRender: _propTypes2.default.func, // 兼容 0.x yearCellRender
    /**
     * 日期输入框的 aria-label 属性
     */
    dateInputAriaLabel: _propTypes2.default.string,
    /**
     * 是否为预览态
     */
    isPreview: _propTypes2.default.bool,
    /**
     * 预览态模式下渲染的内容
     * @param {MomentObject} value 年份
     */
    renderPreview: _propTypes2.default.func,
    locale: _propTypes2.default.object,
    className: _propTypes2.default.string,
    name: _propTypes2.default.string,
    popupComponent: _propTypes2.default.elementType,
    popupContent: _propTypes2.default.node
}, _class.defaultProps = {
    prefix: 'next-',
    rtl: false,
    format: 'YYYY',
    size: 'medium',
    disabledDate: function disabledDate() {
        return false;
    },
    footerRender: function footerRender() {
        return null;
    },
    hasClear: true,
    popupTriggerType: 'click',
    popupAlign: 'tl tl',
    locale: _zhCn2.default.DatePicker,
    onChange: _util.func.noop,
    onVisibleChange: _util.func.noop
}, _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.onValueChange = function (newValue) {
        var ret = _this2.inputAsString && newValue ? newValue.format(_this2.props.format) : newValue;
        _this2.props.onChange(ret);
    };

    this.onSelectCalendarPanel = function (value) {
        // const { format } = this.props;
        var prevSelectedMonth = _this2.state.value;
        var selectedMonth = value.clone().month(0).date(1).hour(0).minute(0).second(0);

        _this2.handleChange(selectedMonth, prevSelectedMonth, { inputing: false }, function () {
            _this2.onVisibleChange(false, 'calendarSelect');
        });
    };

    this.clearValue = function () {
        _this2.setState({
            dateInputStr: ''
        });

        _this2.handleChange(null, _this2.state.value);
    };

    this.onDateInputChange = function (inputStr, e, eventType) {
        if (eventType === 'clear' || !inputStr) {
            e.stopPropagation();
            _this2.clearValue();
        } else {
            _this2.setState({
                dateInputStr: inputStr,
                inputing: true
            });
        }
    };

    this.onDateInputBlur = function () {
        var dateInputStr = _this2.state.dateInputStr;

        if (dateInputStr) {
            var _props3 = _this2.props,
                disabledDate = _props3.disabledDate,
                format = _props3.format;

            var parsed = (0, _moment2.default)(dateInputStr, format, true);

            _this2.setState({
                dateInputStr: '',
                inputing: false
            });

            if (parsed.isValid() && !disabledDate(parsed, 'year')) {
                _this2.handleChange(parsed, _this2.state.value);
            }
        }
    };

    this.onKeyDown = function (e) {
        var format = _this2.props.format;
        var _state2 = _this2.state,
            dateInputStr = _state2.dateInputStr,
            value = _state2.value;

        var dateStr = (0, _util2.onDateKeydown)(e, { format: format, dateInputStr: dateInputStr, value: value }, 'year');
        if (!dateStr) return;
        _this2.onDateInputChange(dateStr);
    };

    this.handleChange = function (newValue, prevValue) {
        var others = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var callback = arguments[3];

        if (!('value' in _this2.props)) {
            _this2.setState((0, _extends3.default)({
                value: newValue
            }, others));
        } else {
            _this2.setState((0, _extends3.default)({}, others));
        }

        var format = _this2.props.format;


        var newValueOf = newValue ? newValue.format(format) : null;
        var preValueOf = prevValue ? prevValue.format(format) : null;

        if (newValueOf !== preValueOf) {
            _this2.onValueChange(newValue);
            if (typeof callback === 'function') {
                return callback();
            }
        }
    };

    this.onVisibleChange = function (visible, reason) {
        if (!('visible' in _this2.props)) {
            _this2.setState({
                visible: visible
            });
        }
        _this2.props.onVisibleChange(visible, reason);
    };
}, _temp);
YearPicker.displayName = 'YearPicker';
exports.default = YearPicker;
module.exports = exports['default'];