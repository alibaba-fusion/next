import { __assign, __extends } from "tslib";
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { obj, env } from '../util';
import Base from './base';
function onNextFrame(cb) {
    if (window.requestAnimationFrame) {
        return window.requestAnimationFrame(cb);
    }
    return window.setTimeout(cb, 1);
}
function clearNextFrameAction(nextFrameId) {
    if (window.cancelAnimationFrame) {
        window.cancelAnimationFrame(nextFrameId);
    }
    else {
        window.clearTimeout(nextFrameId);
    }
}
// safari in mac
var isMacSafari = typeof navigator !== 'undefined' && navigator && navigator.userAgent
    ? navigator.userAgent.match(/^((?!chrome|android|windows).)*safari/i)
    : false;
var hiddenStyle = {
    visibility: 'hidden',
    position: 'absolute',
    zIndex: '-1000',
    top: '-1000px',
    overflowY: 'hidden',
    left: 0,
    right: 0,
};
/**
 * Input.TextArea
 * @order 2
 */
var TextArea = /** @class */ (function (_super) {
    __extends(TextArea, _super);
    function TextArea(props) {
        var _this = _super.call(this, props) || this;
        _this._resizeTextArea = function (value) {
            if (_this.nextFrameActionId) {
                clearNextFrameAction(_this.nextFrameActionId);
            }
            _this.nextFrameActionId = onNextFrame(function () {
                var height = _this._getHeight(value);
                var maxHeight = _this.state.maxHeight ? _this.state.maxHeight : Infinity;
                _this.setState({
                    height: _this._getHeight(value),
                    overflowY: height <= maxHeight ? 'hidden' : undefined,
                });
            });
        };
        var value;
        if ('value' in props) {
            value = props.value;
        }
        else {
            value = props.defaultValue;
        }
        _this.state = {
            value: typeof value === 'undefined' || value === null ? '' : value,
        };
        return _this;
    }
    TextArea.prototype.componentDidMount = function () {
        var autoHeight = this.props.autoHeight;
        if (autoHeight) {
            if (typeof autoHeight === 'object') {
                /* eslint-disable react/no-did-mount-set-state */
                this.setState(this._getMinMaxHeight(autoHeight, this.state.value));
            }
            else {
                this.setState({
                    height: this._getHeight(this.state.value),
                    overflowY: 'hidden',
                });
            }
        }
    };
    TextArea.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.autoHeight &&
            (this.props.value !== prevProps.value || this.props.isPreview !== prevProps.isPreview)) {
            this._resizeTextArea(this.props.value);
        }
    };
    TextArea.prototype._getMinMaxHeight = function (_a, value) {
        var minRows = _a.minRows, maxRows = _a.maxRows;
        var node = ReactDOM.findDOMNode(this.helpRef);
        if (!node) {
            return {};
        }
        node.setAttribute('rows', minRows);
        var minHeight = node.clientHeight;
        node.setAttribute('rows', maxRows);
        var maxHeight = node.clientHeight;
        node.setAttribute('rows', '1');
        var height = this._getHeight(value);
        return {
            minHeight: minHeight,
            maxHeight: maxHeight,
            height: height,
            overflowY: height <= maxHeight ? 'hidden' : undefined,
        };
    };
    TextArea.prototype._getHeight = function (value) {
        var node = ReactDOM.findDOMNode(this.helpRef);
        if (!node) {
            return 0;
        }
        node.value = value;
        return node.scrollHeight;
    };
    TextArea.prototype.ieHack = function (value) {
        // Fix: textarea dit not support maxLength in ie9
        /* istanbul ignore if */
        if (env.ieVersion === 9 && this.props.maxLength) {
            var maxLength = parseInt(this.props.maxLength);
            var len = this.getValueLength(value, true);
            if (len > maxLength && this.props.cutString) {
                value = value.replace(/\n/g, '\n\n');
                value = value.substr(0, maxLength);
                value = value.replace(/\n\n/g, '\n');
            }
        }
        this.props.autoHeight && this._resizeTextArea(value);
        return value;
    };
    /**
     * value.length !== maxLength  in ie/safari(mac) while value has `Enter`
     * about maxLength compute: `Enter` was considered to be one char(\n) in chrome , but two chars(\r\n) in ie/safari(mac).
     * so while value has `Enter`, we should let display length + 1
     */
    TextArea.prototype.getValueLength = function (value) {
        var _a = this.props, maxLength = _a.maxLength, cutString = _a.cutString;
        var nv = "".concat(value);
        var strLen = this.props.getValueLength(nv);
        if (typeof strLen !== 'number') {
            strLen = nv.length;
        }
        /* istanbul ignore if */
        if (env.ieVersion || isMacSafari) {
            strLen = strLen + nv.split('\n').length - 1;
            if (strLen > maxLength && cutString) {
                strLen = maxLength;
            }
        }
        return strLen;
    };
    TextArea.prototype.saveTextAreaRef = function (textArea) {
        this.inputRef = textArea;
    };
    TextArea.prototype.saveHelpRef = function (ref) {
        this.helpRef = ref;
    };
    TextArea.prototype.render = function () {
        var _a, _b;
        var _c = this.props, rows = _c.rows, style = _c.style, className = _c.className, autoHeight = _c.autoHeight, isPreview = _c.isPreview, renderPreview = _c.renderPreview, prefix = _c.prefix, rtl = _c.rtl, hasBorder = _c.hasBorder, size = _c.size, composition = _c.composition;
        var cls = classNames(this.getClass(), (_a = {},
            _a["".concat(prefix).concat(size)] = size === 'large' || 'size' === 'small',
            _a["".concat(prefix, "input-textarea")] = true,
            _a["".concat(prefix, "noborder")] = !hasBorder,
            _a[className] = !!className,
            _a));
        var props = this.getProps();
        // custom data attributes are assigned to the top parent node
        // data-类自定义数据属性分配到顶层node节点
        var dataProps = obj.pickAttrsWith(this.props, 'data-');
        // Custom props are transparently transmitted to the core input node by default
        // 自定义属性默认透传到核心node节点：input
        var others = obj.pickOthers(Object.assign({}, dataProps, TextArea.propTypes), this.props);
        var textareStyle = __assign(__assign({}, props.style), { height: this.state.height, minHeight: this.state.minHeight, maxHeight: this.state.maxHeight, overflowY: this.state.overflowY });
        var previewCls = classNames((_b = {},
            _b["".concat(prefix, "input-textarea")] = true,
            _b["".concat(prefix, "form-preview")] = true,
            _b[className] = !!className,
            _b));
        var wrapStyle = autoHeight ? __assign(__assign({}, style), { position: 'relative' }) : style;
        if (isPreview) {
            var value = props.value;
            if ('renderPreview' in this.props) {
                return (React.createElement("div", __assign({}, others, { className: previewCls }), renderPreview(value, this.props)));
            }
            return (React.createElement("div", __assign({}, others, { className: previewCls }), value.split('\n').map(function (data, i) { return (React.createElement("p", { key: "p-".concat(i) }, data)); })));
        }
        var compositionProps = {};
        if (composition) {
            compositionProps.onCompositionStart = this.handleCompositionStart;
            compositionProps.onCompositionEnd = this.handleCompositionEnd;
        }
        return (React.createElement("span", __assign({ className: cls, style: wrapStyle, dir: rtl ? 'rtl' : undefined }, dataProps),
            React.createElement("textarea", __assign({}, others, props, compositionProps, { "data-real": true, rows: rows, style: textareStyle, ref: this.saveRef.bind(this), onKeyDown: this.onKeyDown.bind(this) })),
            autoHeight ? (React.createElement("textarea", { "data-fake": true, ref: this.saveHelpRef.bind(this), style: __assign(__assign({}, props.style), hiddenStyle), rows: "1" })) : null,
            this.renderControl()));
    };
    TextArea.displayName = 'TextArea';
    TextArea.getDerivedStateFromProps = Base.getDerivedStateFromProps;
    TextArea.propTypes = __assign(__assign({}, Base.propTypes), { 
        /**
         * 是否有边框
         */
        hasBorder: PropTypes.bool, 
        /**
         * 状态
         * @enumdesc 错误
         */
        state: PropTypes.oneOf(['error', 'warning']), 
        /**
         * 自动高度 true / {minRows: 2, maxRows: 4}
         */
        autoHeight: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]), 
        /**
         * 多行文本框高度 <br />(不要直接用height设置多行文本框的高度, ie9 10会有兼容性问题)
         */
        rows: PropTypes.number, 
        /**
         * 是否为预览态
         */
        isPreview: PropTypes.bool, 
        /**
         * 预览态模式下渲染的内容
         * @param {number} value 评分值
         */
        renderPreview: PropTypes.func });
    TextArea.defaultProps = __assign(__assign({}, Base.defaultProps), { hasBorder: true, isPreview: false, rows: 4, autoHeight: false });
    return TextArea;
}(Base));
export default TextArea;
