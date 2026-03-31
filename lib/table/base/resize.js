'use strict';

exports.__esModule = true;

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

var _util = require('../../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Resize = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(Resize, _React$Component);

    function Resize() {
        (0, _classCallCheck3.default)(this, Resize);

        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this));

        _this.showResizeProxy = function () {
            _this.props.resizeProxyDomRef.style.cssText = 'display:block;left:' + _this.startLeft + 'px;';
        };

        _this.moveResizeProxy = function () {
            var moveLeft = _this.startLeft + _this.changedPageX;
            _this.props.resizeProxyDomRef.style.cssText = 'left:' + moveLeft + 'px;display:block;';
        };

        _this.resetResizeProxy = function () {
            // when the mouse was not moved,don't change cell width
            if (_this.asyncResizeFlag) {
                _this.props.onChange(_this.props.dataIndex, _this.changedPageX);
            }
            _this.changedPageX = 0;
            _this.tRight = 0;
            _this.asyncResizeFlag = false;
            _this.props.resizeProxyDomRef.style.cssText = 'display:none;';
        };

        _this.movingLimit = function () {
            // table right limit
            var moveLeft = _this.startLeft + _this.changedPageX;
            if (moveLeft > _this.tRight) {
                moveLeft = _this.tRight;
                _this.changedPageX = _this.tRight - _this.startLeft;
            }

            // cell left limit
            if (moveLeft - _this.cellLeft < _this.cellMinWidth) {
                _this.changedPageX = _this.cellLeft + _this.cellMinWidth - _this.startLeft;
            }

            // table left limit
            if (moveLeft < 0) {
                _this.changedPageX = 0 - _this.startLeft;
            }

            if (_this.props.col.width + _this.changedPageX < _this.cellMinWidth) {
                _this.changedPageX = _this.cellMinWidth - _this.props.col.width;
            }
        };

        _this.onMouseDown = function (e) {
            var _this$props$tableEl$g = _this.props.tableEl.getBoundingClientRect(),
                tableLeft = _this$props$tableEl$g.left,
                tableWidth = _this$props$tableEl$g.width;

            if (!_this.props.cellDomRef || !_this.props.cellDomRef.current) {
                return;
            }

            var _this$props$cellDomRe = _this.props.cellDomRef.current.getBoundingClientRect(),
                cellDomLeft = _this$props$cellDomRe.left;

            _this.lastPageX = e.pageX;
            _this.tLeft = tableLeft;
            _this.tRight = tableWidth;
            _this.startLeft = e.pageX - tableLeft;
            _this.cellLeft = cellDomLeft - tableLeft;

            if (_this.props.asyncResizable) _this.showResizeProxy();
            _util.events.on(document, 'mousemove', _this.onMouseMove);
            _util.events.on(document, 'mouseup', _this.onMouseUp);
            _this.unSelect();
        };

        _this.onMouseMove = function (e) {
            var pageX = e.pageX;
            _this.changedPageX = pageX - _this.lastPageX;

            if (_this.props.rtl) {
                _this.changedPageX = -_this.changedPageX;
            }

            if (_this.props.hasLock) {
                if (!_this.props.asyncResizable) {
                    // when hasn't lock attribute, cellLeft will change
                    _this.cellLeft = _this.props.cellDomRef.current.getBoundingClientRect().left - _this.tLeft;
                }
            }
            _this.movingLimit();

            // stop at here when async
            if (_this.props.asyncResizable) {
                // asyncResizeFlag use to prevent just click without mouse move
                _this.asyncResizeFlag = true;
                _this.moveResizeProxy();
                return;
            }
            _this.props.onChange(_this.props.dataIndex, _this.changedPageX);
            _this.lastPageX = pageX;
        };

        _this.onMouseUp = function () {
            if (_this.props.asyncResizable) {
                _this.resetResizeProxy();
            }
            _this.startLeft = 0;
            _this.destory();
        };

        _this.cellMinWidth = 40;

        _this.lastPageX = 0;
        _this.tRight = 0;
        _this.tLeft = 0;
        _this.cellLeft = 0;
        _this.startLeft = 0;
        _this.changedPageX = 0;

        _this.asyncResizeFlag = false;
        return _this;
    }

    Resize.prototype.componentWillUnmount = function componentWillUnmount() {
        this.destory();
    };

    Resize.prototype.destory = function destory() {
        _util.events.off(document, 'mousemove', this.onMouseMove);
        _util.events.off(document, 'mouseup', this.onMouseUp);
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

        return _react2.default.createElement('a', { className: prefix + 'table-resize-handler', onMouseDown: this.onMouseDown });
    };

    return Resize;
}(_react2.default.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    rtl: _propTypes2.default.bool,
    onChange: _propTypes2.default.func,
    dataIndex: _propTypes2.default.string,
    tableEl: _propTypes2.default.any,
    resizeProxyDomRef: _propTypes2.default.any,
    cellDomRef: _propTypes2.default.any,
    col: _propTypes2.default.any,
    hasLock: _propTypes2.default.bool,
    asyncResizable: _propTypes2.default.bool
}, _class.defaultProps = {
    onChange: function onChange() {}
}, _temp);
Resize.displayName = 'Resize';
exports.default = Resize;
module.exports = exports.default;
module.exports.default = exports.default;