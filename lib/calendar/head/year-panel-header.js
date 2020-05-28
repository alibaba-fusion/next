'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icon = require('../../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var YearPanelHeader = function (_React$PureComponent) {
    (0, _inherits3.default)(YearPanelHeader, _React$PureComponent);

    function YearPanelHeader() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, YearPanelHeader);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.getDecadeLabel = function (date) {
            var year = date.year();
            var start = parseInt(year / 10, 10) * 10;
            var end = start + 9;
            return start + '-' + end;
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    YearPanelHeader.prototype.render = function render() {
        var _props = this.props,
            prefix = _props.prefix,
            visibleMonth = _props.visibleMonth,
            locale = _props.locale,
            goPrevDecade = _props.goPrevDecade,
            goNextDecade = _props.goNextDecade;

        var decadeLable = this.getDecadeLabel(visibleMonth);
        var btnCls = prefix + 'calendar-btn';

        return _react2.default.createElement(
            'div',
            { className: prefix + 'calendar-panel-header' },
            _react2.default.createElement(
                'button',
                {
                    role: 'button',
                    title: locale.prevDecade,
                    className: btnCls + ' ' + btnCls + '-prev-decade',
                    onClick: goPrevDecade
                },
                _react2.default.createElement(_icon2.default, {
                    type: 'arrow-double-left',
                    className: [prefix + 'calendar-symbol-prev-super']
                })
            ),
            _react2.default.createElement(
                'div',
                { className: prefix + 'calendar-panel-header-full' },
                _react2.default.createElement(
                    'button',
                    {
                        role: 'button',
                        title: decadeLable,
                        className: btnCls
                    },
                    decadeLable
                )
            ),
            _react2.default.createElement(
                'button',
                {
                    role: 'button',
                    title: locale.nextDecade,
                    className: btnCls + ' ' + btnCls + '-next-decade',
                    onClick: goNextDecade
                },
                _react2.default.createElement(_icon2.default, {
                    type: 'arrow-double-right',
                    className: [prefix + 'calendar-symbol-next-super']
                })
            )
        );
    };

    return YearPanelHeader;
}(_react2.default.PureComponent);

exports.default = YearPanelHeader;
module.exports = exports['default'];