"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var checkbox_1 = tslib_1.__importDefault(require("../../checkbox"));
var radio_1 = tslib_1.__importDefault(require("../../radio"));
var util_1 = require("../../util");
var item_1 = tslib_1.__importDefault(require("./item"));
var noop = {};
var bindCtx = util_1.func.bindCtx;
var pickOthers = util_1.obj.pickOthers;
var CheckableItem = /** @class */ (function (_super) {
    tslib_1.__extends(CheckableItem, _super);
    function CheckableItem(props) {
        var _this = _super.call(this, props) || this;
        bindCtx(_this, ['stopPropagation', 'handleKeyDown', 'handleClick']);
        _this.id = util_1.htmlId.escapeForId("checkable-item-".concat(props.id || props._key));
        return _this;
    }
    CheckableItem.prototype.stopPropagation = function (e) {
        e.stopPropagation();
    };
    CheckableItem.prototype.handleCheck = function (e) {
        var _a = this.props, checkType = _a.checkType, checked = _a.checked, onChange = _a.onChange;
        if (!(checkType === 'radio' && checked)) {
            onChange(!checked, e);
        }
    };
    CheckableItem.prototype.handleKeyDown = function (e) {
        if (e.keyCode === util_1.KEYCODE.SPACE && !this.props.checkDisabled) {
            this.handleCheck(e);
        }
        this.props.onKeyDown && this.props.onKeyDown(e);
    };
    CheckableItem.prototype.handleClick = function (e) {
        this.handleCheck(e);
        this.props.onClick && this.props.onClick(e);
    };
    CheckableItem.prototype.renderCheck = function () {
        var _a = this
            .props, root = _a.root, checked = _a.checked, indeterminate = _a.indeterminate, disabled = _a.disabled, checkType = _a.checkType, checkDisabled = _a.checkDisabled, onChange = _a.onChange;
        var labelToggleChecked = root.props.labelToggleChecked;
        var Check = checkType === 'radio' ? radio_1.default : checkbox_1.default;
        var checkProps = {
            tabIndex: -1,
            checked: checked,
            disabled: disabled || checkDisabled,
        };
        if (checkType === 'checkbox') {
            checkProps.indeterminate = indeterminate;
        }
        if (!labelToggleChecked) {
            checkProps.onChange = onChange;
            checkProps.onClick = this.stopPropagation;
        }
        return react_1.default.createElement(Check, tslib_1.__assign({ "aria-labelledby": this.id }, checkProps));
    };
    CheckableItem.prototype.render = function () {
        var _a = this
            .props, _key = _a._key, root = _a.root, checked = _a.checked, disabled = _a.disabled, onClick = _a.onClick, helper = _a.helper, children = _a.children;
        var _b = root.props, prefix = _b.prefix, labelToggleChecked = _b.labelToggleChecked;
        var others = pickOthers(CheckableItem.propTypes, this.props);
        var newProps = tslib_1.__assign({ _key: _key, root: root, disabled: disabled, type: 'item', onClick: onClick, onKeyDown: this.handleKeyDown }, others);
        if (labelToggleChecked && !disabled) {
            newProps.onClick = this.handleClick;
        }
        var title;
        if (typeof children === 'string') {
            title = children;
        }
        return (react_1.default.createElement(item_1.default, tslib_1.__assign({ "aria-checked": checked, title: title }, newProps),
            this.renderCheck(),
            react_1.default.createElement("span", { className: "".concat(prefix, "menu-item-text"), id: this.id }, children),
            helper ? react_1.default.createElement("div", { className: "".concat(prefix, "menu-item-helper") }, helper) : null));
    };
    CheckableItem.propTypes = {
        _key: prop_types_1.default.string,
        root: prop_types_1.default.object,
        disabled: prop_types_1.default.bool,
        inlineIndent: prop_types_1.default.number,
        checked: prop_types_1.default.bool,
        indeterminate: prop_types_1.default.bool,
        onChange: prop_types_1.default.func,
        checkType: prop_types_1.default.oneOf(['checkbox', 'radio']),
        checkDisabled: prop_types_1.default.bool,
        helper: prop_types_1.default.node,
        children: prop_types_1.default.node,
        onKeyDown: prop_types_1.default.func,
        onClick: prop_types_1.default.func,
        id: prop_types_1.default.string,
    };
    CheckableItem.defaultProps = {
        disabled: false,
        checked: false,
        indeterminate: false,
        checkType: 'checkbox',
        checkDisabled: false,
        onChange: noop,
    };
    return CheckableItem;
}(react_1.Component));
exports.default = CheckableItem;
