import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon';
import { func } from '../util';
import zhCN from '../locale/zh-cn';
import Upload from './upload';
/**
 * Upload.Dragger
 * IE10+ 支持。继承 Upload 的 API，除非特别说明
 */
var Dragger = /** @class */ (function (_super) {
    __extends(Dragger, _super);
    function Dragger() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
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
        var _b = this.props, className = _b.className, style = _b.style, shape = _b.shape, locale = _b.locale, prefix = _b.prefix, listType = _b.listType, others = __rest(_b, ["className", "style", "shape", "locale", "prefix", "listType"]);
        var prefixCls = "".concat(prefix, "upload-drag");
        var cls = classNames((_a = {},
            _a["".concat(prefixCls)] = true,
            _a["".concat(prefixCls, "-over")] = this.state.dragOver,
            _a[className] = !!className,
            _a));
        var children = this.props.children || (React.createElement("div", { className: cls },
            React.createElement("p", { className: "".concat(prefixCls, "-icon") },
                React.createElement(Icon, { size: "large", className: "".concat(prefixCls, "-upload-icon") })),
            React.createElement("p", { className: "".concat(prefixCls, "-text") }, locale.drag.text),
            React.createElement("p", { className: "".concat(prefixCls, "-hint") }, locale.drag.hint)));
        return (React.createElement(Upload, __assign({}, others, { prefix: prefix, shape: shape, listType: listType, dragable: true, style: style, onDragOver: this.onDragOver, onDragLeave: this.onDragLeave, onDrop: this.onDrop, ref: this.saveUploaderRef }), children));
    };
    Dragger.propTypes = {
        prefix: PropTypes.string,
        locale: PropTypes.object,
        shape: PropTypes.string,
        onDragOver: PropTypes.func,
        onDragLeave: PropTypes.func,
        onDrop: PropTypes.func,
        limit: PropTypes.number,
        className: PropTypes.string,
        style: PropTypes.object,
        defaultValue: PropTypes.array,
        children: PropTypes.node,
        listType: PropTypes.string,
        timeout: PropTypes.number,
    };
    Dragger.defaultProps = {
        prefix: 'next-',
        onDragOver: func.noop,
        onDragLeave: func.noop,
        onDrop: func.noop,
        locale: zhCN.Upload,
    };
    return Dragger;
}(Component));
export default Dragger;
