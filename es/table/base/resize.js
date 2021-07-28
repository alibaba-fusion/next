import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp2;

import React from 'react';
import { findDOMNode } from 'react-dom';
import T from 'prop-types';
import { events, dom } from '../../util';

var Resize = (_temp2 = _class = function (_React$Component) {
    _inherits(Resize, _React$Component);

    function Resize() {
        var _temp, _this, _ret;

        _classCallCheck(this, Resize);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.onMouseDown = function (e) {
            _this.lastPageX = e.pageX;
            events.on(document, 'mousemove', _this.onMouseMove);
            events.on(document, 'mouseup', _this.onMouseUp);
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
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    Resize.prototype.componentWillUnmount = function componentWillUnmount() {
        this.destory();
    };

    Resize.prototype.destory = function destory() {
        events.off(document, 'mousemove', this.onMouseMove);
        events.off(document, 'mouseup', this.onMouseMove);
        this.select();
    };

    Resize.prototype.unSelect = function unSelect() {
        var height = dom.getStyle(this.props.tableEl, 'height');
        dom.setStyle(document.body, {
            userSelect: 'none',
            cursor: 'ew-resize'
        });
        dom.setStyle(this.resizeRef, { height: height });
        document.body.setAttribute('unselectable', 'on');
        dom.addClass(this.resizeRef, 'resizing');
    };

    Resize.prototype.select = function select() {
        dom.setStyle(document.body, {
            userSelect: '',
            cursor: ''
        });
        dom.setStyle(this.resizeRef, { height: '100%' });
        document.body.removeAttribute('unselectable');
        dom.removeClass(this.resizeRef, 'resizing');
    };

    Resize.prototype.render = function render() {
        var _this2 = this;

        var prefix = this.props.prefix;

        return React.createElement('a', {
            className: prefix + 'table-resize-handler',
            ref: function ref(r) {
                _this2.resizeRef = r;
            },
            onMouseDown: this.onMouseDown
        });
    };

    return Resize;
}(React.Component), _class.propTypes = {
    prefix: T.string,
    rtl: T.bool,
    onChange: T.func,
    dataIndex: T.string,
    tableEl: T.any
}, _class.defaultProps = {
    onChange: function onChange() {}
}, _temp2);
Resize.displayName = 'Resize';


export default Resize;