import { __assign, __extends, __read, __spreadArray } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import { func } from '../../util';
import { uid } from '../util';
var noop = func.noop;
/**
 * Upload.Selecter
 * @description [底层能力] 可自定义样式的文件选择器
 */
var Selecter = /** @class */ (function (_super) {
    __extends(Selecter, _super);
    function Selecter() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.onSelect = function (e) {
            var files = e.target.files;
            var filesArr = files.length ? Array.prototype.slice.call(files) : [files];
            filesArr.forEach(function (file) {
                file.uid = uid();
            });
            _this.props.onSelect(filesArr);
        };
        /**
         * 点击上传按钮
         * @return {void}
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
         * @param  {SyntheticEvent} e
         * @return {void}
         */
        _this.onKeyDown = function (e) {
            if (e.key === 'Enter') {
                _this.onClick();
            }
        };
        /**
         * 拖拽
         * @param  {SyntheticEvent} e
         * @return {void}
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
        return (React.createElement("div", __assign({ role: "application", style: style, className: className }, events),
            React.createElement("input", __assign({}, otherProps, { type: "file", name: name, id: id, ref: this.saveFileRef, style: { display: 'none' }, accept: accept, "aria-hidden": true, multiple: multiple, onChange: this.onSelect, disabled: disabled })),
            children));
    };
    Selecter.propTypes = {
        id: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
        /**
         * 是否禁用上传功能
         */
        disabled: PropTypes.bool,
        /**
         * 是否支持多选文件，`ie10+` 支持。开启后按住 ctrl 可选择多个文件
         */
        multiple: PropTypes.bool,
        /**
         * 是否支持上传文件夹，仅在 chorme 下生效
         */
        webkitdirectory: PropTypes.bool,
        /**
         * 调用系统设备媒体
         */
        capture: PropTypes.string,
        /**
         * 是否支持拖拽上传，`ie10+` 支持。
         */
        dragable: PropTypes.bool,
        /**
         * 接受上传的文件类型 (image/png, image/jpg, .doc, .ppt) 详见 [input accept attribute](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-accept)
         */
        accept: PropTypes.string,
        /**
         * 文件选择回调
         */
        onSelect: PropTypes.func,
        /**
         * 拖拽经过回调
         */
        onDragOver: PropTypes.func,
        /**
         * 拖拽离开回调
         */
        onDragLeave: PropTypes.func,
        /**
         * 拖拽完成回调
         */
        onDrop: PropTypes.func,
        children: PropTypes.node,
        name: PropTypes.string,
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
}(React.Component));
export default Selecter;
