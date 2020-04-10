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

var VIEWBOX_WIDTH = 100; // width of viewBox
var HALF_VIEWBOX_WIDTH = VIEWBOX_WIDTH / 2;
var DEFAULT_STROKE_WIDTH = 8;

var viewBox = '0 0 ' + VIEWBOX_WIDTH + ' ' + VIEWBOX_WIDTH;

var Circle = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Circle, _Component);

    function Circle(props) {
        (0, _classCallCheck3.default)(this, Circle);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

        _this._underlayRefHandler = function (ref) {
            _this.underlay = ref;
        };

        _this._overlayRefHandler = function (ref) {
            _this.overlay = ref;
        };

        _this.state = {
            underlayStrokeWidth: DEFAULT_STROKE_WIDTH,
            overlayStrokeWidth: DEFAULT_STROKE_WIDTH
        };
        return _this;
    }

    Circle.prototype.componentDidMount = function componentDidMount() {
        if (this.underlay && this.overlay) {
            // eslint-disable-next-line
            this.setState({
                underlayStrokeWidth: this._getCssValue(this.underlay, 'stroke-width') || DEFAULT_STROKE_WIDTH,
                overlayStrokeWidth: this._getCssValue(this.overlay, 'stroke-width') || DEFAULT_STROKE_WIDTH
            });
        }
    };

    Circle.prototype._getCssValue = function _getCssValue(dom, name) {
        var css = window.getComputedStyle(dom).getPropertyValue(name);
        var regExp = /(\d*)px/g;
        var result = regExp.exec(css);

        return Array.isArray(result) ? Number(result[1]) : 0;
    };

    Circle.prototype._computeOverlayStrokeDashOffset = function _computeOverlayStrokeDashOffset() {
        var _state = this.state,
            underlayStrokeWidth = _state.underlayStrokeWidth,
            overlayStrokeWidth = _state.overlayStrokeWidth;

        var overlayRadius = HALF_VIEWBOX_WIDTH - overlayStrokeWidth / 2 - (underlayStrokeWidth - overlayStrokeWidth) / 2;
        var overlayLen = Math.PI * 2 * overlayRadius;
        return (VIEWBOX_WIDTH - this.props.percent) / VIEWBOX_WIDTH * overlayLen;
    };

    Circle.prototype._getPath = function _getPath(radius) {
        return 'M ' + HALF_VIEWBOX_WIDTH + ',' + HALF_VIEWBOX_WIDTH + ' m 0,-' + radius + ' a ' + radius + ',' + radius + ' 0 1 1 0,' + 2 * radius + ' a ' + radius + ',' + radius + ' 0 1 1 0,-' + 2 * radius;
    };

    Circle.prototype.render = function render() {
        var _classNames, _classNames2;

        var _props = this.props,
            prefix = _props.prefix,
            size = _props.size,
            state = _props.state,
            percent = _props.percent,
            className = _props.className,
            textRender = _props.textRender,
            progressive = _props.progressive,
            color = _props.color,
            backgroundColor = _props.backgroundColor,
            rtl = _props.rtl,
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'size', 'state', 'percent', 'className', 'textRender', 'progressive', 'color', 'backgroundColor', 'rtl']);
        var _state2 = this.state,
            underlayStrokeWidth = _state2.underlayStrokeWidth,
            overlayStrokeWidth = _state2.overlayStrokeWidth;

        // underlay path

        var underlayRadius = HALF_VIEWBOX_WIDTH - underlayStrokeWidth / 2;
        var underlayPath = this._getPath(underlayRadius);

        // overlay path (为居中，减去相对于underlay的宽度)
        var overlayRadius = HALF_VIEWBOX_WIDTH - overlayStrokeWidth / 2 - (underlayStrokeWidth - overlayStrokeWidth) / 2;
        var overlayPath = this._getPath(overlayRadius);
        var overlayLen = Math.PI * 2 * overlayRadius;
        var overlayStrokeDasharray = overlayLen + 'px ' + overlayLen + 'px';
        var overlayStrokeDashoffset = this._computeOverlayStrokeDashOffset() + 'px';

        var suffixText = textRender(percent, { rtl: rtl });

        var wrapCls = (0, _classnames2.default)((_classNames = {}, _classNames[prefix + 'progress-circle'] = true, _classNames[prefix + 'progress-circle-show-info'] = suffixText, _classNames['' + (prefix + size)] = size, _classNames[className] = className, _classNames));

        var pathCls = (0, _classnames2.default)((_classNames2 = {}, _classNames2[prefix + 'progress-circle-overlay'] = true, _classNames2[prefix + 'progress-circle-overlay-' + state] = !color && !progressive && state, _classNames2[prefix + 'progress-circle-overlay-started'] = !color && progressive && percent <= 30, _classNames2[prefix + 'progress-circle-overlay-middle'] = !color && progressive && percent > 30 && percent < 80, _classNames2[prefix + 'progress-circle-overlay-finishing'] = !color && progressive && percent >= 80, _classNames2));

        var underlayStyle = { stroke: backgroundColor };

        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({
                className: wrapCls,
                dir: rtl ? 'rtl' : undefined,
                role: 'progressbar',
                'aria-valuenow': percent,
                'aria-valuemin': '0',
                'aria-valuemax': '100'
            }, others),
            _react2.default.createElement(
                'svg',
                {
                    className: prefix + 'progress-circle-container',
                    viewBox: viewBox
                },
                _react2.default.createElement('path', {
                    className: prefix + 'progress-circle-underlay',
                    d: underlayPath,
                    fillOpacity: '0',
                    ref: this._underlayRefHandler,
                    style: underlayStyle
                }),
                _react2.default.createElement('path', {
                    className: pathCls,
                    d: overlayPath,
                    fillOpacity: '0',
                    strokeDasharray: overlayStrokeDasharray,
                    strokeDashoffset: overlayStrokeDashoffset,
                    ref: this._overlayRefHandler,
                    stroke: color
                })
            ),
            suffixText ? _react2.default.createElement(
                'div',
                { className: prefix + 'progress-circle-text' },
                suffixText
            ) : null
        );
    };

    return Circle;
}(_react.Component), _class.propTypes = {
    size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
    percent: _propTypes2.default.number,
    state: _propTypes2.default.oneOf(['normal', 'success', 'error']),
    progressive: _propTypes2.default.bool,
    textRender: _propTypes2.default.func,
    prefix: _propTypes2.default.string,
    className: _propTypes2.default.string,
    color: _propTypes2.default.string,
    backgroundColor: _propTypes2.default.string,
    rtl: _propTypes2.default.bool
}, _temp);
Circle.displayName = 'Circle';
exports.default = Circle;
module.exports = exports['default'];