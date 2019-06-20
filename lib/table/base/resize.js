'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = require('../../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Resize = (_temp2 = _class = function (_React$Component) {
    (0, _inherits3.default)(Resize, _React$Component);

    function Resize() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Resize);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.onMouseDown = function (e) {
            _this.lastPageX = e.pageX;
            _util.events.on(document, 'mousemove', _this.onMouseMove);
            _util.events.on(document, 'mouseup', _this.onMouseUp);
            _this.unSelect();
        }, _this.onMouseMove = function (e) {
            var pageX = e.pageX;
            var changedPageX = pageX - _this.lastPageX;

            if (_this.props.rtl) {
                changedPageX = -changedPageX;
            }

            _this.props.onChange(_this.props.dataIndex, changedPageX);
            _this.lastPageX = pageX;
        }, _this.onMouseUp = function () {
            _this.destory();
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    Resize.prototype.componentWillUnmount = function componentWillUnmount() {
        this.destory();
    };

    Resize.prototype.destory = function destory() {
        _util.events.off(document, 'mousemove', this.onMouseMove);
        _util.events.off(document, 'mouseup', this.onMouseMove);
        this.select();
    };

    Resize.prototype.unSelect = function unSelect() {
        _util.dom.setStyle(document.body, {
            userSelect: 'none',
            cursor: 'ew-resize'
        });
        document.body.setAttribute('unselectable', 'on');
    };

    Resize.prototype.select = function select() {
        _util.dom.setStyle(document.body, {
            userSelect: '',
            cursor: ''
        });
        document.body.removeAttribute('unselectable');
    };

    Resize.prototype.render = function render() {
        var prefix = this.props.prefix;

        return _react2.default.createElement('a', {
            className: prefix + 'table-resize-handler',
            onMouseDown: this.onMouseDown
        });
    };

    return Resize;
}(_react2.default.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    rtl: _propTypes2.default.bool,
    onChange: _propTypes2.default.func,
    dataIndex: _propTypes2.default.string
}, _class.defaultProps = {
    onChange: function onChange() {}
}, _temp2);
Resize.displayName = 'Resize';
exports.default = Resize;
module.exports = exports['default'];