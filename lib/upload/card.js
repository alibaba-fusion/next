"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var zh_cn_1 = tslib_1.__importDefault(require("../locale/zh-cn"));
var util_1 = require("../util");
var base_1 = tslib_1.__importDefault(require("./base"));
var list_1 = tslib_1.__importDefault(require("./list"));
var upload_1 = tslib_1.__importDefault(require("./upload"));
/**
 * Upload.Card
 * 继承 Upload 的 API，除非特别说明
 */
var Card = /** @class */ (function (_super) {
    tslib_1.__extends(Card, _super);
    function Card(props) {
        var _this = _super.call(this, props) || this;
        _this.onProgress = function (value, targetItem) {
            _this.setState({
                value: value,
            });
            _this.props.onProgress(value, targetItem);
        };
        _this.onChange = function (value, file) {
            if (!('value' in _this.props)) {
                _this.setState({
                    value: value,
                });
            }
            _this.props.onChange(value, file);
        };
        var value;
        if ('value' in props) {
            value = props.value;
        }
        else {
            value = props.defaultValue;
        }
        _this.state = {
            value: !Array.isArray(value) ? [] : value,
            uploaderRef: _this.uploaderRef,
        };
        return _this;
    }
    Card.prototype.componentDidMount = function () {
        this.updateUploaderRef(this.uploaderRef);
    };
    Card.prototype.componentDidUpdate = function () {
        var uploaderRef = this.state.uploaderRef;
        if (!uploaderRef && this.uploaderRef) {
            this.updateUploaderRef(this.uploaderRef);
        }
    };
    Card.getDerivedStateFromProps = function (nextProps, prevState) {
        var isUploading = prevState.uploaderRef && prevState.uploaderRef.isUploading();
        if ('value' in nextProps && nextProps.value !== prevState.value && !isUploading) {
            return {
                value: !Array.isArray(nextProps.value)
                    ? []
                    : [].concat(nextProps.value),
            };
        }
        return null;
    };
    Card.prototype.isUploading = function () {
        return this.uploaderRef.isUploading();
    };
    Card.prototype.saveRef = function (ref) {
        this.saveUploaderRef(ref);
    };
    Card.prototype.updateUploaderRef = function (uploaderRef) {
        this.setState({ uploaderRef: uploaderRef });
    };
    Card.prototype.render = function () {
        var _a, _b;
        var _this = this;
        var _c = this.props, action = _c.action, disabled = _c.disabled, prefix = _c.prefix, locale = _c.locale, className = _c.className, style = _c.style, limit = _c.limit, onPreview = _c.onPreview, onRemove = _c.onRemove, onCancel = _c.onCancel, timeout = _c.timeout, isPreview = _c.isPreview, renderPreview = _c.renderPreview, itemRender = _c.itemRender, reUpload = _c.reUpload, showDownload = _c.showDownload;
        var isExceedLimit = this.state.value.length >= limit;
        var uploadButtonCls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "upload-list-item")] = true,
            _a["".concat(prefix, "hidden")] = isExceedLimit,
            _a));
        var children = this.props.children || locale.card.addPhoto;
        var onRemoveFunc = disabled ? util_1.func.prevent : onRemove;
        var othersForList = util_1.obj.pickOthers(Card.propTypes, this.props);
        var othersForUpload = util_1.obj.pickOthers(list_1.default.propTypes, othersForList);
        if (isPreview) {
            if (typeof renderPreview === 'function') {
                var previewCls = (0, classnames_1.default)((_b = {},
                    _b["".concat(prefix, "form-preview")] = true,
                    _b[className] = !!className,
                    _b));
                return (react_1.default.createElement("div", { style: style, className: previewCls }, renderPreview(this.state.value, this.props)));
            }
        }
        return (react_1.default.createElement(list_1.default, tslib_1.__assign({ className: className, style: style, listType: "card", closable: true, locale: locale, value: this.state.value, onRemove: onRemoveFunc, onCancel: onCancel, onPreview: onPreview, itemRender: itemRender, isPreview: isPreview, uploader: this.uploaderRef, reUpload: reUpload, showDownload: showDownload }, othersForList),
            react_1.default.createElement(upload_1.default, tslib_1.__assign({}, othersForUpload, { shape: "card", prefix: prefix, disabled: disabled, action: action, timeout: timeout, isPreview: isPreview, value: this.state.value, onProgress: this.onProgress, onChange: this.onChange, ref: function (ref) { return _this.saveRef(ref); }, className: uploadButtonCls }), children)));
    };
    Card.displayName = 'Card';
    Card.propTypes = {
        prefix: prop_types_1.default.string,
        locale: prop_types_1.default.object,
        children: prop_types_1.default.object,
        value: prop_types_1.default.oneOfType([prop_types_1.default.array, prop_types_1.default.object]),
        defaultValue: prop_types_1.default.oneOfType([prop_types_1.default.array, prop_types_1.default.object]),
        onPreview: prop_types_1.default.func,
        onChange: prop_types_1.default.func,
        onRemove: prop_types_1.default.func,
        onCancel: prop_types_1.default.func,
        itemRender: prop_types_1.default.func,
        reUpload: prop_types_1.default.bool,
        showDownload: prop_types_1.default.bool,
        onProgress: prop_types_1.default.func,
        isPreview: prop_types_1.default.bool,
        renderPreview: prop_types_1.default.func,
    };
    Card.defaultProps = {
        prefix: 'next-',
        locale: zh_cn_1.default.Upload,
        showDownload: true,
        onChange: util_1.func.noop,
        onPreview: util_1.func.noop,
        onProgress: util_1.func.noop,
    };
    return Card;
}(base_1.default));
exports.default = (0, react_lifecycles_compat_1.polyfill)(Card);
