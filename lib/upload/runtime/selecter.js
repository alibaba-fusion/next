"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var util_1 = require("../../util");
var util_2 = require("../util");
var noop = util_1.func.noop;
/**
 * Upload.Selecter
 * [底层能力] 可自定义样式的文件选择器
 */
var Selecter = /** @class */ (function (_super) {
    tslib_1.__extends(Selecter, _super);
    function Selecter() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this.onSelect = function (e) {
            var files = e.target.files;
            var filesArr = files.length ? Array.prototype.slice.call(files) : [files];
            filesArr.forEach(function (file) {
                file.uid = (0, util_2.uid)();
            });
            _this.props.onSelect(filesArr);
        };
        /**
         * 点击上传按钮
         *
         */
        _this.onClick = function () {
            var el = _this.fileRef;
            if (!el) {
                return;
            }
            // NOTE: 在 IE 下，el.value = '' 在 el.click() 之后，会触发 input[type=file] 两次 onChange
            el.value = '';
            el.click();
        };
        /**
         * 键盘事件
         *  e
         *
         */
        _this.onKeyDown = function (e) {
            if (e.key === 'Enter') {
                _this.onClick();
            }
        };
        /**
         * 拖拽
         *  e
         *
         */
        _this.onDrop = function (e) {
            e.preventDefault();
            var files = e.dataTransfer.files;
            var filesArr = Array.prototype.slice.call(files);
            _this.props.onDrop(filesArr);
        };
        _this.onDragOver = function (e) {
            e.preventDefault();
            _this.props.onDragOver(e);
        };
        _this.saveFileRef = function (ref) {
            _this.fileRef = ref;
        };
        return _this;
    }
    Selecter.prototype.render = function () {
        var _a = this.props, accept = _a.accept, multiple = _a.multiple, capture = _a.capture, webkitdirectory = _a.webkitdirectory, children = _a.children, id = _a.id, disabled = _a.disabled, dragable = _a.dragable, style = _a.style, className = _a.className, name = _a.name;
        var events = {};
        if (!disabled) {
            events = Object.assign({
                onClick: this.onClick,
                onKeyDown: this.onKeyDown,
                tabIndex: '0',
            }, dragable
                ? {
                    onDrop: this.onDrop,
                    onDragOver: this.onDragOver,
                    onDragLeave: this.props.onDragLeave,
                }
                : {});
        }
        var otherProps = {};
        if (webkitdirectory) {
            otherProps.webkitdirectory = '';
        }
        if (capture) {
            otherProps.capture = capture;
        }
        return (react_1.default.createElement("div", tslib_1.__assign({ role: "application", style: style, className: className }, events),
            react_1.default.createElement("input", tslib_1.__assign({}, otherProps, { type: "file", name: name, id: id, ref: this.saveFileRef, style: { display: 'none' }, accept: accept, "aria-hidden": true, multiple: multiple, onChange: this.onSelect, disabled: disabled })),
            children));
    };
    Selecter.propTypes = {
        id: prop_types_1.default.string,
        style: prop_types_1.default.object,
        className: prop_types_1.default.string,
        disabled: prop_types_1.default.bool,
        multiple: prop_types_1.default.bool,
        webkitdirectory: prop_types_1.default.bool,
        capture: prop_types_1.default.string,
        dragable: prop_types_1.default.bool,
        accept: prop_types_1.default.string,
        onSelect: prop_types_1.default.func,
        onDragOver: prop_types_1.default.func,
        onDragLeave: prop_types_1.default.func,
        onDrop: prop_types_1.default.func,
        children: prop_types_1.default.node,
        name: prop_types_1.default.string,
    };
    Selecter.defaultProps = {
        name: 'file',
        multiple: false,
        onSelect: noop,
        onDragOver: noop,
        onDragLeave: noop,
        onDrop: noop,
    };
    return Selecter;
}(react_1.Component));
exports.default = Selecter;
