"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var menu_1 = tslib_1.__importDefault(require("../../menu"));
var util_1 = require("../../util");
var Item = menu_1.default.Item, CheckboxItem = menu_1.default.CheckboxItem;
var bindCtx = util_1.func.bindCtx;
var pickOthers = util_1.obj.pickOthers;
var getOffset = util_1.dom.getOffset;
var TransferItem = /** @class */ (function (_super) {
    tslib_1.__extends(TransferItem, _super);
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
        var classNames = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "transfer-panel-item")] = true,
            _a["".concat(prefix, "insert-").concat(this.dragGap)] = dragOverValue === item.value && panelPosition === dragPosition,
            _a["".concat(prefix, "focused")] = highlight,
            _a["".concat(prefix, "simple")] = isSimple,
            _a));
        var children = itemRender(item);
        var itemProps = tslib_1.__assign({ ref: this.getItemDOM, className: classNames, children: children, disabled: disabled, draggable: draggable && !disabled, onDragStart: this.handleDragStart, onDragOver: this.handleDragOver, onDragEnd: this.handleDragEnd, onDrop: this.handleDrop }, others);
        var title;
        if (typeof children === 'string') {
            title = children;
        }
        if (isSimple) {
            if (!itemProps.disabled) {
                itemProps.onClick = this.handleClick;
            }
            return react_1.default.createElement(Item, tslib_1.__assign({ title: title }, itemProps));
        }
        return (react_1.default.createElement(CheckboxItem, tslib_1.__assign({ checked: checked, onChange: onCheck.bind(this, item.value), title: title }, itemProps)));
    };
    TransferItem.menuChildType = CheckboxItem.menuChildType;
    TransferItem.propTypes = {
        prefix: prop_types_1.default.string,
        mode: prop_types_1.default.oneOf(['normal', 'simple']),
        value: prop_types_1.default.array,
        disabled: prop_types_1.default.bool,
        item: prop_types_1.default.object,
        onCheck: prop_types_1.default.func,
        onClick: prop_types_1.default.func,
        needHighlight: prop_types_1.default.bool,
        itemRender: prop_types_1.default.func,
        draggable: prop_types_1.default.bool,
        onDragStart: prop_types_1.default.func,
        onDragOver: prop_types_1.default.func,
        onDragEnd: prop_types_1.default.func,
        onDrop: prop_types_1.default.func,
        dragPosition: prop_types_1.default.oneOf(['left', 'right']),
        dragValue: prop_types_1.default.string,
        dragOverValue: prop_types_1.default.string,
        panelPosition: prop_types_1.default.oneOf(['left', 'right']),
    };
    return TransferItem;
}(react_1.Component));
exports.default = TransferItem;
