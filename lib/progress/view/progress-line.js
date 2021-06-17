'use strict';

exports.__esModule = true;
exports.default = undefined;

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Line = (_temp = _class = function (_React$PureComponent) {
    (0, _inherits3.default)(Line, _React$PureComponent);

    function Line() {
        (0, _classCallCheck3.default)(this, Line);
        return (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.apply(this, arguments));
    }

    Line.prototype.render = function render() {
        var _classNames, _classNames2;

        var _props = this.props,
            prefix = _props.prefix,
            size = _props.size,
            state = _props.state,
            color = _props.color,
            percent = _props.percent,
            progressive = _props.progressive,
            hasBorder = _props.hasBorder,
            textRender = _props.textRender,
            className = _props.className,
            rtl = _props.rtl,
            backgroundColor = _props.backgroundColor,
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'size', 'state', 'color', 'percent', 'progressive', 'hasBorder', 'textRender', 'className', 'rtl', 'backgroundColor']);


        var suffixText = textRender(percent, { rtl: rtl });

        var wrapCls = (0, _classnames2.default)((_classNames = {}, _classNames[prefix + 'progress-line'] = true, _classNames[prefix + 'progress-line-show-info'] = suffixText, _classNames[prefix + 'progress-line-show-border'] = hasBorder, _classNames['' + (prefix + size)] = size, _classNames[className] = className, _classNames));
        var lineCls = (0, _classnames2.default)((_classNames2 = {}, _classNames2[prefix + 'progress-line-overlay'] = true, _classNames2[prefix + 'progress-line-overlay-' + state] = !color && !progressive && state, _classNames2[prefix + 'progress-line-overlay-started'] = !color && progressive && percent <= 30, _classNames2[prefix + 'progress-line-overlay-middle'] = !color && progressive && percent > 30 && percent < 80, _classNames2[prefix + 'progress-line-overlay-finishing'] = !color && progressive && percent >= 80, _classNames2));

        var lineStyle = {
            width: (percent > 100 ? 100 : percent < 0 ? 0 : percent) + '%',
            backgroundColor: color
        };
        var underlayStyle = { backgroundColor: backgroundColor };

        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({
                dir: rtl ? 'rtl' : undefined,
                role: 'progressbar',
                'aria-valuenow': percent,
                'aria-valuemin': '0',
                'aria-valuemax': '100',
                className: wrapCls
            }, others),
            _react2.default.createElement(
                'div',
                { className: prefix + 'progress-line-container' },
                _react2.default.createElement(
                    'div',
                    {
                        className: prefix + 'progress-line-underlay',
                        style: underlayStyle
                    },
                    _react2.default.createElement('div', { className: lineCls, style: lineStyle })
                )
            ),
            suffixText ? _react2.default.createElement(
                'div',
                { className: prefix + 'progress-line-text' },
                suffixText
            ) : null
        );
    };

    return Line;
}(_react2.default.PureComponent), _class.propTypes = {
    size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
    percent: _propTypes2.default.number,
    state: _propTypes2.default.oneOf(['normal', 'success', 'error']),
    progressive: _propTypes2.default.bool,
    hasBorder: _propTypes2.default.bool,
    textRender: _propTypes2.default.func,
    color: _propTypes2.default.string,
    backgroundColor: _propTypes2.default.string,
    rtl: _propTypes2.default.bool,
    prefix: _propTypes2.default.string,
    className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])
}, _temp);
exports.default = Line;
module.exports = exports['default'];