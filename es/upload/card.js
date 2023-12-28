import { __assign, __extends } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import zhCN from '../locale/zh-cn';
import { func, obj } from '../util';
import Base from './base';
import List from './list';
import Upload from './upload';
/**
 * Upload.Card
 * @description 继承 Upload 的 API，除非特别说明
 */
var Card = /** @class */ (function (_super) {
    __extends(Card, _super);
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
        /* istanbul ignore else */
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
                value: !Array.isArray(nextProps.value) ? [] : [].concat(nextProps.value),
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
        var uploadButtonCls = classNames((_a = {},
            _a["".concat(prefix, "upload-list-item")] = true,
            _a["".concat(prefix, "hidden")] = isExceedLimit,
            _a));
        var children = this.props.children || locale.card.addPhoto;
        var onRemoveFunc = disabled ? func.prevent : onRemove;
        var othersForList = obj.pickOthers(Card.propTypes, this.props);
        var othersForUpload = obj.pickOthers(List.propTypes, othersForList);
        if (isPreview) {
            if (typeof renderPreview === 'function') {
                var previewCls = classNames((_b = {},
                    _b["".concat(prefix, "form-preview")] = true,
                    _b[className] = !!className,
                    _b));
                return (React.createElement("div", { style: style, className: previewCls }, renderPreview(this.state.value, this.props)));
            }
        }
        return (React.createElement(List, __assign({ className: className, style: style, listType: "card", closable: true, locale: locale, value: this.state.value, onRemove: onRemoveFunc, onCancel: onCancel, onPreview: onPreview, itemRender: itemRender, isPreview: isPreview, uploader: this.uploaderRef, reUpload: reUpload, showDownload: showDownload }, othersForList),
            React.createElement(Upload, __assign({}, othersForUpload, { shape: "card", prefix: prefix, disabled: disabled, action: action, timeout: timeout, isPreview: isPreview, value: this.state.value, onProgress: this.onProgress, onChange: this.onChange, ref: function (ref) { return _this.saveRef(ref); }, className: uploadButtonCls }), children)));
    };
    Card.displayName = 'Card';
    Card.propTypes = {
        prefix: PropTypes.string,
        locale: PropTypes.object,
        children: PropTypes.object,
        value: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
        defaultValue: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
        /**
         * 点击图片回调
         */
        onPreview: PropTypes.func,
        /**
         * 改变时候的回调
         */
        onChange: PropTypes.func,
        /**
         * 点击移除的回调
         */
        onRemove: PropTypes.func,
        /**
         * 取消上传的回调
         */
        onCancel: PropTypes.func,
        /**
         * 自定义成功和失败的列表渲染方式
         * @param {File} file 文件对象
         * @param {Object} obj {remove: 删除回调}
         * @retuns {ReactNode} React元素
         * @version 1.21
         */
        itemRender: PropTypes.func,
        /**
         * 选择新文件上传并替换
         * @version 1.24
         */
        reUpload: PropTypes.bool,
        /**
         * 展示下载按钮
         * @version 1.24
         */
        showDownload: PropTypes.bool,
        /**
         * 上传中
         */
        onProgress: PropTypes.func,
        isPreview: PropTypes.bool,
        renderPreview: PropTypes.func,
    };
    Card.defaultProps = {
        prefix: 'next-',
        locale: zhCN.Upload,
        showDownload: true,
        onChange: func.noop,
        onPreview: func.noop,
        onProgress: func.noop,
    };
    return Card;
}(Base));
export default polyfill(Card);
