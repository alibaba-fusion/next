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

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _propTypes = require('prop-types');

var PT = _interopRequireWildcard(_propTypes);

var _util = require('../../util');

var _constant = require('../constant');

var _radio = require('../../radio');

var _radio2 = _interopRequireDefault(_radio);

var _select = require('../../select');

var _select2 = _interopRequireDefault(_select);

var _button = require('../../button');

var _button2 = _interopRequireDefault(_button);

var _icon = require('../../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderNode = _util.func.renderNode;
var DATE = _constant.DATE_PANEL_MODE.DATE,
    WEEK = _constant.DATE_PANEL_MODE.WEEK,
    QUARTER = _constant.DATE_PANEL_MODE.QUARTER,
    MONTH = _constant.DATE_PANEL_MODE.MONTH,
    YEAR = _constant.DATE_PANEL_MODE.YEAR,
    DECADE = _constant.DATE_PANEL_MODE.DECADE;
var HeaderPanel = (_temp = _class = function (_React$PureComponent) {
    (0, _inherits3.default)(HeaderPanel, _React$PureComponent);

    function HeaderPanel(props) {
        (0, _classCallCheck3.default)(this, HeaderPanel);

        var _this = (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.call(this, props));

        _this.createPanelBtns = function (_ref) {
            var unit = _ref.unit,
                _ref$num = _ref.num,
                num = _ref$num === undefined ? 1 : _ref$num,
                _ref$isSuper = _ref.isSuper,
                isSuper = _ref$isSuper === undefined ? true : _ref$isSuper;

            var value = _this.props.panelValue.clone();
            var prefixCls = _this.prefixCls;

            var iconTypes = isSuper ? ['arrow-double-left', 'arrow-double-right'] : ['arrow-left', 'arrow-right'];

            return [_react2.default.createElement(
                _button2.default,
                {
                    text: true,
                    iconSize: 'xxs',
                    className: prefixCls + '-btn  ' + prefixCls + '-left-btn',
                    onClick: function onClick() {
                        return _this.handleClick(value, { num: num, unit: unit, isSuper: isSuper, isNext: false });
                    },
                    key: 'prev-btn-' + unit
                },
                _react2.default.createElement(_icon2.default, { type: iconTypes[0] })
            ), _react2.default.createElement(
                _button2.default,
                {
                    text: true,
                    iconSize: 'xxs',
                    className: prefixCls + '-btn ' + prefixCls + '-right-btn',
                    onClick: function onClick() {
                        return _this.handleClick(value, { num: num, unit: unit, isSuper: isSuper, isNext: true });
                    },
                    key: 'next-btn-' + unit
                },
                _react2.default.createElement(_icon2.default, { type: iconTypes[1] })
            )];
        };

        _this.renderModeSwitch = function () {
            var _this$props = _this.props,
                mode = _this$props.mode,
                locale = _this$props.locale,
                onModeChange = _this$props.onModeChange;


            return _react2.default.createElement(
                _radio2.default.Group,
                { key: 'mode-switch', shape: 'button', value: mode, onChange: onModeChange },
                _react2.default.createElement(
                    _radio2.default,
                    { value: _constant.CALENDAR_MODE.MONTH },
                    locale.month
                ),
                _react2.default.createElement(
                    _radio2.default,
                    { value: _constant.CALENDAR_MODE.YEAR },
                    locale.year
                )
            );
        };

        _this.renderMonthSelect = function () {
            var prefixCls = _this.prefixCls;
            var _this$props2 = _this.props,
                panelValue = _this$props2.panelValue,
                onPanelValueChange = _this$props2.onPanelValueChange;


            var curMonth = panelValue.month();
            var dataSource = _util.datejs.monthsShort().map(function (label, value) {
                return {
                    label: label,
                    value: value
                };
            });

            return _react2.default.createElement(_select2.default, {
                className: prefixCls + '-select-month',
                popupClassName: prefixCls + '-select-month-popup',
                defaultValue: curMonth,
                dataSource: dataSource,
                onChange: function onChange(v) {
                    return onPanelValueChange(panelValue.month(v));
                }
            });
        };

        _this.prefixCls = props.prefix + 'calendar2-header';
        return _this;
    }

    HeaderPanel.prototype.handleClick = function handleClick(value, _ref2) {
        var unit = _ref2.unit,
            num = _ref2.num,
            isSuper = _ref2.isSuper,
            isNext = _ref2.isNext;
        var _props = this.props,
            onPanelValueChange = _props.onPanelValueChange,
            onPrev = _props.onPrev,
            onSuperPrev = _props.onSuperPrev,
            onNext = _props.onNext,
            onSuperNext = _props.onSuperNext;


        var handler = void 0;

        if (isSuper) {
            handler = isNext ? onSuperNext : onSuperPrev;
        } else {
            handler = isNext ? onNext : onPrev;
        }

        if (handler) {
            handler(value, { unit: unit, num: num });
        } else {
            var m = isNext ? 'add' : 'subtract';
            onPanelValueChange(value[m](num, unit), 'PANEL');
        }
    };

    HeaderPanel.prototype.renderYearSelect = function renderYearSelect() {
        var prefixCls = this.prefixCls;
        var _props2 = this.props,
            validValue = _props2.validValue,
            panelValue = _props2.panelValue,
            onPanelValueChange = _props2.onPanelValueChange;

        var curYear = panelValue.year();

        var beginYear = void 0;
        var endYear = void 0;

        // TODO 有效区间
        if (validValue) {
            var begin = validValue[0],
                end = validValue[1];

            beginYear = begin.year();
            endYear = end.year();
        } else {
            for (var i = 0; i < 20; i++) {
                beginYear = curYear - 10;
                endYear = curYear + 10;
            }
        }
        var dataSource = [];
        for (var _i = beginYear; _i < endYear; _i++) {
            dataSource.push({ label: _i, value: _i });
        }

        return _react2.default.createElement(_select2.default, {
            key: 'year-select',
            className: prefixCls + '-select-year',
            popupClassName: prefixCls + '-select-year-popup',
            defaultValue: curYear,
            dataSource: dataSource,
            menuProps: { hasSelectedIcon: false },
            onChange: function onChange(v) {
                return onPanelValueChange(panelValue.year(v));
            }
        });
    };

    HeaderPanel.prototype.renderTextField = function renderTextField() {
        var prefixCls = this.prefixCls;
        var _props3 = this.props,
            panelValue = _props3.panelValue,
            locale = _props3.locale,
            panelMode = _props3.panelMode,
            onPanelModeChange = _props3.onPanelModeChange;


        var monthBeforeYear = locale.monthBeforeYear || false;
        var localeData = _util.datejs.localeData();

        var year = panelValue.year() + (locale && locale.year === '年' ? '年' : '');
        var month = localeData.monthsShort()[panelValue.month()];
        var DATE = _constant.DATE_PANEL_MODE.DATE,
            WEEK = _constant.DATE_PANEL_MODE.WEEK,
            QUARTER = _constant.DATE_PANEL_MODE.QUARTER,
            MONTH = _constant.DATE_PANEL_MODE.MONTH,
            YEAR = _constant.DATE_PANEL_MODE.YEAR,
            DECADE = _constant.DATE_PANEL_MODE.DECADE;


        var nodes = void 0;
        var yearNode = _react2.default.createElement(
            _button2.default,
            {
                text: true,
                key: 'year-btn',
                tabIndex: -1,
                className: prefixCls + '-btn',
                onClick: function onClick() {
                    return onPanelModeChange(YEAR);
                }
            },
            year
        );

        switch (panelMode) {
            case DATE:
            case WEEK:
                {
                    var monthNode = _react2.default.createElement(
                        _button2.default,
                        {
                            text: true,
                            key: 'month-btn',
                            tabIndex: -1,
                            className: prefixCls + '-btn',
                            onClick: function onClick() {
                                return onPanelModeChange(MONTH);
                            }
                        },
                        month
                    );
                    nodes = monthBeforeYear ? [monthNode, yearNode] : [yearNode, monthNode];
                    break;
                }

            case MONTH:
            case QUARTER:
                {
                    nodes = yearNode;
                    break;
                }

            case YEAR:
                {
                    var curYear = panelValue.year();
                    var start = curYear - curYear % 10;
                    var end = start + 9;
                    nodes = _react2.default.createElement(
                        _button2.default,
                        {
                            text: true,
                            key: 'decade-btn',
                            tabIndex: -1,
                            className: prefixCls + '-btn',
                            onClick: function onClick() {
                                return onPanelModeChange(DECADE);
                            }
                        },
                        this.props.rtl ? end + '-' + start : start + '-' + end
                    );
                    break;
                }
            case DECADE:
                {
                    var _curYear = panelValue.year();
                    var _start = _curYear - _curYear % 100;
                    var _end = _start + 99;

                    nodes = this.props.rtl ? _end + '-' + _start : _start + '-' + _end;
                    break;
                }
        }

        return _react2.default.createElement(
            'div',
            { key: 'header-text-field', className: prefixCls + '-text-field' },
            nodes
        );
    };

    HeaderPanel.prototype.renderPanelHeader = function renderPanelHeader() {
        var createPanelBtns = this.createPanelBtns;
        var panelMode = this.props.panelMode;


        var nodes = [];

        var textFieldNode = this.renderTextField();

        switch (panelMode) {
            case DATE:
            case WEEK:
                {
                    var _createPanelBtns = createPanelBtns({
                        unit: 'month',
                        isSuper: false
                    }),
                        preMonthBtn = _createPanelBtns[0],
                        nextMonthBtn = _createPanelBtns[1];

                    var _createPanelBtns2 = createPanelBtns({
                        unit: 'year'
                    }),
                        preYearBtn = _createPanelBtns2[0],
                        nextYearBtn = _createPanelBtns2[1];

                    nodes = [preYearBtn, preMonthBtn, textFieldNode, nextMonthBtn, nextYearBtn];
                    break;
                }
            case QUARTER:
            case MONTH:
                {
                    var _createPanelBtns3 = createPanelBtns({
                        unit: 'year'
                    }),
                        _preYearBtn = _createPanelBtns3[0],
                        _nextYearBtn = _createPanelBtns3[1];

                    nodes = [_preYearBtn, textFieldNode, _nextYearBtn];
                    break;
                }
            case YEAR:
                {
                    var _createPanelBtns4 = createPanelBtns({
                        unit: 'year',
                        num: 10
                    }),
                        preDecadeBtn = _createPanelBtns4[0],
                        nextDecadeBtn = _createPanelBtns4[1];

                    nodes = [preDecadeBtn, textFieldNode, nextDecadeBtn];
                    break;
                }
            case DECADE:
                {
                    var _createPanelBtns5 = createPanelBtns({
                        unit: 'year',
                        num: 100
                    }),
                        preCenturyBtn = _createPanelBtns5[0],
                        nextCenturyBtn = _createPanelBtns5[1];

                    nodes = [preCenturyBtn, textFieldNode, nextCenturyBtn];
                    break;
                }
        }

        return nodes;
    };

    HeaderPanel.prototype.renderInner = function renderInner() {
        var prefixCls = this.prefixCls;
        var _props4 = this.props,
            shape = _props4.shape,
            showTitle = _props4.showTitle,
            value = _props4.value,
            mode = _props4.mode,
            showModeSwitch = _props4.showModeSwitch;


        var nodes = [];

        if (shape === _constant.CALENDAR_SHAPE.PANEL) {
            return this.renderPanelHeader();
        } else {
            if (showTitle) {
                nodes.push(_react2.default.createElement(
                    'div',
                    { key: 'title', className: prefixCls + '-title' },
                    renderNode(this.props.titleRender, value.format(), [value])
                ));
            }
            nodes.push(_react2.default.createElement(
                'div',
                { key: 'actions', className: prefixCls + '-actions' },
                this.renderYearSelect(),
                mode !== _constant.CALENDAR_MODE.YEAR ? this.renderMonthSelect() : null,
                showModeSwitch ? this.renderModeSwitch() : null,
                this.props.renderHeaderExtra && this.props.renderHeaderExtra((0, _extends3.default)({}, this.props))
            ));
        }

        return nodes;
    };

    HeaderPanel.prototype.render = function render() {
        return _react2.default.createElement(
            'div',
            { className: '' + this.prefixCls },
            renderNode(this.props.headerRender, this.renderInner(), [].concat(this.props))
        );
    };

    return HeaderPanel;
}(_react2.default.PureComponent), _class.propTypes = {
    rtl: PT.bool,
    prefix: PT.string,
    locale: PT.object,
    mode: PT.any,
    shape: PT.string,
    value: PT.any,
    panelMode: PT.any,
    panelValue: PT.any,
    validValue: PT.any,
    showTitle: PT.bool,
    showModeSwitch: PT.bool,
    onModeChange: PT.func,
    onPanelValueChange: PT.func,
    onPanelModeChange: PT.func,
    onPrev: PT.func,
    onNext: PT.func,
    onSuperPrev: PT.func,
    onSuperNext: PT.func,
    titleRender: PT.func,
    /**
     * 扩展操作区域渲染
     */
    renderHeaderExtra: PT.func,
    /**
     * 自定义头部渲染
     */
    headerRender: PT.func
}, _class.defaultProps = {
    showTitle: false
}, _temp);
exports.default = (0, _reactLifecyclesCompat.polyfill)(HeaderPanel);
module.exports = exports['default'];