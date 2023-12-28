"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
var util_1 = require("../util");
var base_1 = require("./base");
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
    tslib_1.__extends(TextArea, _super);
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
        var node = react_dom_1.default.findDOMNode(this.helpRef);
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
        var node = react_dom_1.default.findDOMNode(this.helpRef);
        if (!node) {
            return 0;
        }
        node.value = value;
        return node.scrollHeight;
    };
    TextArea.prototype.ieHack = function (value) {
        // Fix: textarea dit not support maxLength in ie9
        /* istanbul ignore if */
        if (util_1.env.ieVersion === 9 && this.props.maxLength) {
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
        if (util_1.env.ieVersion || isMacSafari) {
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
        var cls = (0, classnames_1.default)(this.getClass(), (_a = {},
            _a["".concat(prefix).concat(size)] = size === 'large' || 'size' === 'small',
            _a["".concat(prefix, "input-textarea")] = true,
            _a["".concat(prefix, "noborder")] = !hasBorder,
            _a[className] = !!className,
            _a));
        var props = this.getProps();
        // custom data attributes are assigned to the top parent node
        // data-类自定义数据属性分配到顶层node节点
        var dataProps = util_1.obj.pickAttrsWith(this.props, 'data-');
        // Custom props are transparently transmitted to the core input node by default
        // 自定义属性默认透传到核心node节点：input
        var others = util_1.obj.pickOthers(Object.assign({}, dataProps, TextArea.propTypes), this.props);
        var textareStyle = tslib_1.__assign(tslib_1.__assign({}, props.style), { height: this.state.height, minHeight: this.state.minHeight, maxHeight: this.state.maxHeight, overflowY: this.state.overflowY });
        var previewCls = (0, classnames_1.default)((_b = {},
            _b["".concat(prefix, "input-textarea")] = true,
            _b["".concat(prefix, "form-preview")] = true,
            _b[className] = !!className,
            _b));
        var wrapStyle = autoHeight ? tslib_1.__assign(tslib_1.__assign({}, style), { position: 'relative' }) : style;
        if (isPreview) {
            var value = props.value;
            if ('renderPreview' in this.props) {
                return (react_1.default.createElement("div", tslib_1.__assign({}, others, { className: previewCls }), renderPreview(value, this.props)));
            }
            return (react_1.default.createElement("div", tslib_1.__assign({}, others, { className: previewCls }), value.split('\n').map(function (data, i) { return (react_1.default.createElement("p", { key: "p-".concat(i) }, data)); })));
        }
        var compositionProps = {};
        if (composition) {
            compositionProps.onCompositionStart = this.handleCompositionStart;
            compositionProps.onCompositionEnd = this.handleCompositionEnd;
        }
        return (react_1.default.createElement("span", tslib_1.__assign({ className: cls, style: wrapStyle, dir: rtl ? 'rtl' : undefined }, dataProps),
            react_1.default.createElement("textarea", tslib_1.__assign({}, others, props, compositionProps, { "data-real": true, rows: rows, style: textareStyle, ref: this.saveRef.bind(this), onKeyDown: this.onKeyDown.bind(this) })),
            autoHeight ? (react_1.default.createElement("textarea", { "data-fake": true, ref: this.saveHelpRef.bind(this), style: tslib_1.__assign(tslib_1.__assign({}, props.style), hiddenStyle), rows: "1" })) : null,
            this.renderControl()));
    };
    TextArea.displayName = 'TextArea';
    TextArea.getDerivedStateFromProps = base_1.default.getDerivedStateFromProps;
    TextArea.propTypes = tslib_1.__assign(tslib_1.__assign({}, base_1.default.propTypes), { 
        /**
         * 是否有边框
         */
        hasBorder: prop_types_1.default.bool, 
        /**
         * 状态
         * @enumdesc 错误
         */
        state: prop_types_1.default.oneOf(['error', 'warning']), 
        /**
         * 自动高度 true / {minRows: 2, maxRows: 4}
         */
        autoHeight: prop_types_1.default.oneOfType([prop_types_1.default.bool, prop_types_1.default.object]), 
        /**
         * 多行文本框高度 <br />(不要直接用height设置多行文本框的高度, ie9 10会有兼容性问题)
         */
        rows: prop_types_1.default.number, 
        /**
         * 是否为预览态
         */
        isPreview: prop_types_1.default.bool, 
        /**
         * 预览态模式下渲染的内容
         * @param {number} value 评分值
         */
        renderPreview: prop_types_1.default.func });
    TextArea.defaultProps = tslib_1.__assign(tslib_1.__assign({}, base_1.default.defaultProps), { hasBorder: true, isPreview: false, rows: 4, autoHeight: false });
    return TextArea;
}(base_1.default));
exports.default = TextArea;
