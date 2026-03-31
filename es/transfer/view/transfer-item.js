import { __assign, __extends } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Menu from '../../menu';
import { func, obj, dom } from '../../util';
var Item = Menu.Item, CheckboxItem = Menu.CheckboxItem;
var bindCtx = func.bindCtx;
var pickOthers = obj.pickOthers;
var getOffset = dom.getOffset;
var TransferItem = /** @class */ (function (_super) {
    __extends(TransferItem, _super);
    function TransferItem(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            highlight: false,
        };
        bindCtx(_this, [
            'getItemDOM',
            'handleClick',
            'handleDragStart',
            'handleDragOver',
            'handleDragEnd',
            'handleDrop',
        ]);
        return _this;
    }
    TransferItem.prototype.componentDidMount = function () {
        var _this = this;
        if (this.props.needHighlight) {
            this.addHighlightTimer = setTimeout(function () {
                _this.setState({
                    highlight: true,
                });
            }, 1);
            this.removeHighlightTimer = setTimeout(function () {
                _this.setState({
                    highlight: false,
                });
            }, 201);
        }
    };
    TransferItem.prototype.componentWillUnmount = function () {
        clearTimeout(this.addHighlightTimer);
        clearTimeout(this.removeHighlightTimer);
    };
    TransferItem.prototype.getItemDOM = function (ref) {
        this.item = ref;
    };
    TransferItem.prototype.handleClick = function () {
        var _a = this.props, onClick = _a.onClick, panelPosition = _a.panelPosition, item = _a.item;
        onClick(panelPosition === 'left' ? 'right' : 'left', item.value);
    };
    TransferItem.prototype.handleDragStart = function (ev) {
        ev &&
            ev.dataTransfer &&
            typeof ev.dataTransfer.setData === 'function' &&
            ev.dataTransfer.setData('text/plain', ev.target.id);
        var _a = this.props, onDragStart = _a.onDragStart, panelPosition = _a.panelPosition, item = _a.item;
        onDragStart(panelPosition, item.value);
    };
    TransferItem.prototype.getDragGap = function (e) {
        var referenceTop = getOffset(e.currentTarget).top;
        var referenceHeight = e.currentTarget.offsetHeight;
        return e.pageY <= referenceTop + referenceHeight / 2 ? 'before' : 'after';
    };
    TransferItem.prototype.handleDragOver = function (e) {
        var _a = this.props, panelPosition = _a.panelPosition, dragPosition = _a.dragPosition, onDragOver = _a.onDragOver, item = _a.item;
        if (panelPosition === dragPosition) {
            e.preventDefault();
            var dragGap = this.getDragGap(e);
            if (this.dragGap !== dragGap) {
                this.dragGap = dragGap;
                onDragOver(item.value);
            }
        }
    };
    TransferItem.prototype.handleDragEnd = function () {
        var onDragEnd = this.props.onDragEnd;
        onDragEnd();
    };
    TransferItem.prototype.handleDrop = function (e) {
        e.preventDefault();
        var _a = this.props, onDrop = _a.onDrop, item = _a.item, panelPosition = _a.panelPosition, dragValue = _a.dragValue;
        onDrop(panelPosition, dragValue, item.value, this.dragGap);
    };
    TransferItem.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, mode = _b.mode, checked = _b.checked, disabled = _b.disabled, item = _b.item, onCheck = _b.onCheck, itemRender = _b.itemRender, draggable = _b.draggable, dragOverValue = _b.dragOverValue, panelPosition = _b.panelPosition, dragPosition = _b.dragPosition;
        var others = pickOthers(Object.keys(TransferItem.propTypes), this.props);
        var highlight = this.state.highlight;
        var isSimple = mode === 'simple';
        var classNames = cx((_a = {},
            _a["".concat(prefix, "transfer-panel-item")] = true,
            _a["".concat(prefix, "insert-").concat(this.dragGap)] = dragOverValue === item.value && panelPosition === dragPosition,
            _a["".concat(prefix, "focused")] = highlight,
            _a["".concat(prefix, "simple")] = isSimple,
            _a));
        var children = itemRender(item);
        var itemProps = __assign({ ref: this.getItemDOM, className: classNames, children: children, disabled: disabled, draggable: draggable && !disabled, onDragStart: this.handleDragStart, onDragOver: this.handleDragOver, onDragEnd: this.handleDragEnd, onDrop: this.handleDrop }, others);
        var title;
        if (typeof children === 'string') {
            title = children;
        }
        if (isSimple) {
            if (!itemProps.disabled) {
                itemProps.onClick = this.handleClick;
            }
            return React.createElement(Item, __assign({ title: title }, itemProps));
        }
        return (React.createElement(CheckboxItem, __assign({ checked: checked, onChange: onCheck.bind(this, item.value), title: title }, itemProps)));
    };
    TransferItem.menuChildType = CheckboxItem.menuChildType;
    TransferItem.propTypes = {
        prefix: PropTypes.string,
        mode: PropTypes.oneOf(['normal', 'simple']),
        value: PropTypes.array,
        disabled: PropTypes.bool,
        item: PropTypes.object,
        onCheck: PropTypes.func,
        onClick: PropTypes.func,
        needHighlight: PropTypes.bool,
        itemRender: PropTypes.func,
        draggable: PropTypes.bool,
        onDragStart: PropTypes.func,
        onDragOver: PropTypes.func,
        onDragEnd: PropTypes.func,
        onDrop: PropTypes.func,
        dragPosition: PropTypes.oneOf(['left', 'right']),
        dragValue: PropTypes.string,
        dragOverValue: PropTypes.string,
        panelPosition: PropTypes.oneOf(['left', 'right']),
    };
    return TransferItem;
}(Component));
export default TransferItem;
