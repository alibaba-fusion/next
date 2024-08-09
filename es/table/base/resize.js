import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React from 'react';
import T from 'prop-types';
import { events, dom } from '../../util';

var Resize = (_temp = _class = function (_React$Component) {
    _inherits(Resize, _React$Component);

    function Resize() {
        _classCallCheck(this, Resize);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this));

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
            events.on(document, 'mousemove', _this.onMouseMove);
            events.on(document, 'mouseup', _this.onMouseUp);
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
        events.off(document, 'mousemove', this.onMouseMove);
        events.off(document, 'mouseup', this.onMouseUp);
        this.select();
    };

    Resize.prototype.unSelect = function unSelect() {
        dom.setStyle(document.body, {
            userSelect: 'none',
            cursor: 'ew-resize'
        });
        document.body.setAttribute('unselectable', 'on');
    };

    Resize.prototype.select = function select() {
        dom.setStyle(document.body, {
            userSelect: '',
            cursor: ''
        });
        document.body.removeAttribute('unselectable');
    };

    Resize.prototype.render = function render() {
        var prefix = this.props.prefix;

        return React.createElement('a', { className: prefix + 'table-resize-handler', onMouseDown: this.onMouseDown });
    };

    return Resize;
}(React.Component), _class.propTypes = {
    prefix: T.string,
    rtl: T.bool,
    onChange: T.func,
    dataIndex: T.string,
    tableEl: T.any,
    resizeProxyDomRef: T.any,
    cellDomRef: T.any,
    col: T.any,
    hasLock: T.bool,
    asyncResizable: T.bool
}, _class.defaultProps = {
    onChange: function onChange() {}
}, _temp);
Resize.displayName = 'Resize';


export default Resize;