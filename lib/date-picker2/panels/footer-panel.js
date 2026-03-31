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

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames3 = require('classnames');

var _classnames4 = _interopRequireDefault(_classnames3);

var _propTypes3 = require('../prop-types');

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _util = require('../../util');

var _zhCn = require('../../locale/zh-cn');

var _zhCn2 = _interopRequireDefault(_zhCn);

var _button = require('../../button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderNode = _util.func.renderNode;


function normalizePreset(preset) {
    if (Array.isArray(preset)) {
        return preset;
    } else {
        return Object.keys(preset).map(function (key) {
            return {
                label: key,
                value: preset[key]
            };
        });
    }
}

var FooterPanel = (_temp = _class = function (_React$PureComponent) {
    (0, _inherits3.default)(FooterPanel, _React$PureComponent);

    function FooterPanel(props) {
        (0, _classCallCheck3.default)(this, FooterPanel);

        var _this = (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.call(this, props));

        _this.renderRanges = function () {
            if (!_this.props.preset) {
                return null;
            }

            var preset = normalizePreset(_this.props.preset);

            return preset.map(function (_ref, index) {
                var label = _ref.label,
                    value = _ref.value,
                    restProps = (0, _objectWithoutProperties3.default)(_ref, ['label', 'value']);

                var buttonProps = _util.obj.pickProps(_button2.default.propTypes, restProps);

                var handleClick = function handleClick() {
                    var date = typeof value === 'function' ? value() : value;
                    _this.props.onChange(date, 'CLICK_PRESET');
                };
                return _react2.default.createElement(
                    _button2.default,
                    (0, _extends3.default)({
                        text: preset.length === 1,
                        size: 'small',
                        type: preset.length === 1 ? 'primary' : 'secondary',
                        key: label + '-' + index
                        // onClick={() =>
                        //     func.invoke(this.props, 'onChange', [
                        //         typeof value === 'function' ? value() : value,
                        //         'CLICK_PRESET',
                        //     ])
                        // }
                        , onClick: handleClick
                    }, buttonProps),
                    label
                );
            });
        };

        _this.prefixCls = props.prefix + 'date-picker2-footer';
        return _this;
    }

    FooterPanel.prototype.render = function render() {
        var _classnames, _classnames2;

        var prefixCls = this.prefixCls;
        var _props = this.props,
            showOk = _props.showOk,
            locale = _props.locale,
            onOk = _props.onOk,
            oKable = _props.oKable,
            extraRender = _props.extraRender,
            className = _props.className;


        var classNames = (0, _classnames4.default)(prefixCls, className, (_classnames = {}, _classnames[prefixCls + '-with-actions'] = showOk, _classnames));

        var extraNode = renderNode(extraRender);
        var rangeNode = this.renderRanges();
        var actionsNode = _react2.default.createElement(
            _button2.default,
            { size: 'small', disabled: !oKable, onClick: onOk, className: prefixCls + '-ok', type: 'primary' },
            locale.ok
        );

        var showFooter = showOk || extraNode || rangeNode;
        var rangesCls = (0, _classnames4.default)(prefixCls + '-preset', (_classnames2 = {}, _classnames2[prefixCls + '-preset-only'] = !showOk && !extraNode, _classnames2));

        return showFooter ? _react2.default.createElement(
            'div',
            { className: classNames },
            extraNode ? _react2.default.createElement(
                'div',
                { className: prefixCls + '-extra' },
                extraNode
            ) : null,
            rangeNode ? _react2.default.createElement(
                'div',
                { className: rangesCls },
                rangeNode
            ) : null,
            showOk ? _react2.default.createElement(
                'div',
                { className: prefixCls + '-actions' },
                actionsNode
            ) : null
        ) : null;
    };

    return FooterPanel;
}(_react2.default.PureComponent), _class.propTypes = {
    rtl: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    prefix: _propTypes2.default.string,
    locale: _propTypes2.default.object,
    showOk: _propTypes2.default.bool,
    preset: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]),
    onOk: _propTypes2.default.func,
    oKable: _propTypes2.default.bool,
    extraRender: _propTypes4.default.render
}, _class.defaultProps = {
    locale: _zhCn2.default.DatePicker
}, _temp);
exports.default = (0, _reactLifecyclesCompat.polyfill)(FooterPanel);
module.exports = exports.default;
module.exports.default = exports.default;