"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var icon_1 = tslib_1.__importDefault(require("../icon"));
var util_1 = require("../util");
var zh_cn_1 = tslib_1.__importDefault(require("../locale/zh-cn"));
var upload_1 = tslib_1.__importDefault(require("./upload"));
/**
 * Upload.Dragger
 * IE10+ 支持。继承 Upload 的 API，除非特别说明
 */
var Dragger = /** @class */ (function (_super) {
    tslib_1.__extends(Dragger, _super);
    function Dragger() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this.state = {
            dragOver: false,
        };
        _this.onDragOver = function (e) {
            if (!_this.state.dragOver) {
                _this.setState({
                    dragOver: true,
                });
            }
            _this.props.onDragOver(e);
        };
        _this.onDragLeave = function (e) {
            _this.setState({
                dragOver: false,
            });
            _this.props.onDragLeave(e);
        };
        _this.onDrop = function (e) {
            _this.setState({
                dragOver: false,
            });
            _this.props.onDrop(e);
        };
        _this.saveUploaderRef = function (ref) {
            if (ref &&
                typeof ref.getInstance ===
                    'function') {
                _this.uploaderRef = ref.getInstance();
            }
            else {
                _this.uploaderRef = ref;
            }
        };
        return _this;
    }
    Dragger.prototype.abort = function (file) {
        this.uploaderRef.abort(file);
    };
    Dragger.prototype.startUpload = function () {
        this.uploaderRef.startUpload();
    };
    Dragger.prototype.render = function () {
        var _a;
        var _b = this.props, className = _b.className, style = _b.style, shape = _b.shape, locale = _b.locale, prefix = _b.prefix, listType = _b.listType, others = tslib_1.__rest(_b, ["className", "style", "shape", "locale", "prefix", "listType"]);
        var prefixCls = "".concat(prefix, "upload-drag");
        var cls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefixCls)] = true,
            _a["".concat(prefixCls, "-over")] = this.state.dragOver,
            _a[className] = !!className,
            _a));
        var children = this.props.children || (react_1.default.createElement("div", { className: cls },
            react_1.default.createElement("p", { className: "".concat(prefixCls, "-icon") },
                react_1.default.createElement(icon_1.default, { size: "large", className: "".concat(prefixCls, "-upload-icon") })),
            react_1.default.createElement("p", { className: "".concat(prefixCls, "-text") }, locale.drag.text),
            react_1.default.createElement("p", { className: "".concat(prefixCls, "-hint") }, locale.drag.hint)));
        return (react_1.default.createElement(upload_1.default, tslib_1.__assign({}, others, { prefix: prefix, shape: shape, listType: listType, dragable: true, style: style, onDragOver: this.onDragOver, onDragLeave: this.onDragLeave, onDrop: this.onDrop, ref: this.saveUploaderRef }), children));
    };
    Dragger.propTypes = {
        prefix: prop_types_1.default.string,
        locale: prop_types_1.default.object,
        shape: prop_types_1.default.string,
        onDragOver: prop_types_1.default.func,
        onDragLeave: prop_types_1.default.func,
        onDrop: prop_types_1.default.func,
        limit: prop_types_1.default.number,
        className: prop_types_1.default.string,
        style: prop_types_1.default.object,
        defaultValue: prop_types_1.default.array,
        children: prop_types_1.default.node,
        listType: prop_types_1.default.string,
        timeout: prop_types_1.default.number,
    };
    Dragger.defaultProps = {
        prefix: 'next-',
        onDragOver: util_1.func.noop,
        onDragLeave: util_1.func.noop,
        onDrop: util_1.func.noop,
        locale: zh_cn_1.default.Upload,
    };
    return Dragger;
}(react_1.Component));
exports.default = Dragger;
