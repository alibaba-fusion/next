"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/* istanbul ignore file */
var react_1 = tslib_1.__importDefault(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var react_dom_1 = tslib_1.__importDefault(require("react-dom"));
var util_1 = require("../../util");
var util_2 = require("../util");
var INPUT_STYLE = {
    position: 'absolute',
    top: 0,
    right: 0,
    fontSize: 9999,
    zIndex: 9999,
    opacity: 0,
    outline: 'none',
    cursor: 'pointer',
};
var IframeUploader = /** @class */ (function (_super) {
    tslib_1.__extends(IframeUploader, _super);
    function IframeUploader(props) {
        var _this = _super.call(this, props) || this;
        _this.file = {};
        _this.uid = '';
        _this.state = {
            uploading: false,
        };
        _this.onLoad = function () {
            if (!_this.state.uploading) {
                return;
            }
            var _a = _this, props = _a.props, file = _a.file;
            var response;
            try {
                var doc = _this.iFrameEl.contentDocument;
                var script = doc.getElementsByTagName('script')[0];
                if (script && script.parentNode === doc.body) {
                    doc.body.removeChild(script);
                }
                response = doc.body.innerHTML;
                props.onSuccess(response, file);
            }
            catch (err) {
                util_1.log.warning('cross domain error for Upload. Maybe server should return document.domain script.');
                response = 'cross-domain';
                props.onError(err, null, file);
            }
            _this.endUpload();
        };
        _this.onSelect = function (e) {
            _this.file = {
                uid: (0, util_2.uid)(),
                name: e.target.value,
            };
            _this.props.onSelect([_this.file]);
        };
        _this.saveIFrameRef = function (ref) {
            _this.iFrameEl = ref;
        };
        _this.saveFormRef = function (ref) {
            _this.formEl = ref;
        };
        _this.saveDataRef = function (ref) {
            _this.dataEl = ref;
        };
        _this.saveInputRef = function (ref) {
            _this.inputEl = ref;
        };
        _this.domain = typeof document !== 'undefined' && document.domain ? document.domain : '';
        _this.uid = (0, util_2.uid)();
        return _this;
    }
    IframeUploader.prototype.componentDidMount = function () {
        this.updateInputWH();
    };
    IframeUploader.prototype.componentDidUpdate = function () {
        this.updateInputWH();
    };
    IframeUploader.prototype.startUpload = function () {
        this.upload(this.file);
    };
    IframeUploader.prototype.upload = function (file) {
        var _this = this;
        if (!this.state.uploading) {
            // eslint-disable-next-line
            this.state.uploading = true;
            this.setState({ uploading: true });
        }
        var _a = this.props, beforeUpload = _a.beforeUpload, action = _a.action, name = _a.name, data = _a.data;
        if (!beforeUpload) {
            return this.post(file);
        }
        var requestData = {
            action: action,
            name: name,
            data: data,
        };
        var before = beforeUpload(file, requestData);
        if (before && before.then) {
            before.then(function (data) {
                _this.post(file, data);
            }, function () {
                _this.endUpload();
            });
        }
        else if (before !== false) {
            this.post(file, util_1.obj.isPlainObject(before) ? before : undefined);
        }
        else {
            this.endUpload();
        }
    };
    IframeUploader.prototype.endUpload = function () {
        this.file = {};
        if (this.state.uploading) {
            // eslint-disable-next-line
            this.state.uploading = false;
            this.setState({ uploading: false });
        }
    };
    IframeUploader.prototype.updateInputWH = function () {
        var rootNode = react_dom_1.default.findDOMNode(this);
        var inputNode = this.inputEl;
        inputNode.style.height = "".concat(rootNode.offsetHeight, "px");
        inputNode.style.width = "".concat(rootNode.offsetWidth, "px");
    };
    IframeUploader.prototype.abort = function (file) {
        if (file) {
            var uid_1 = file;
            if (file && file.uid) {
                uid_1 = file.uid;
            }
            if (uid_1 === this.file.uid) {
                this.endUpload();
            }
        }
        else {
            this.endUpload();
        }
    };
    IframeUploader.prototype.post = function (file, requestOption) {
        if (requestOption === void 0) { requestOption = {}; }
        var formNode = this.formEl;
        var dataSpan = this.dataEl;
        var fileInput = this.inputEl;
        var propsData = this.props.data;
        if (typeof propsData === 'function') {
            propsData = propsData(file);
        }
        var action = requestOption.action, name = requestOption.name, data = requestOption.data;
        if (name) {
            fileInput.setAttribute('name', name);
        }
        if (action) {
            formNode.setAttribute('action', action);
        }
        if (data) {
            propsData = data;
        }
        var inputs = document.createDocumentFragment();
        for (var key in propsData) {
            if (data.hasOwnProperty(key)) {
                var input = document.createElement('input');
                input.setAttribute('name', key);
                input.value = propsData[key];
                inputs.appendChild(input);
            }
        }
        dataSpan.appendChild(inputs);
        formNode.submit();
        dataSpan.innerHTML = '';
        this.props.onStart(file);
    };
    IframeUploader.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, className = _a.className, children = _a.children, accept = _a.accept, name = _a.name, style = _a.style;
        var uid = this.uid;
        var iframeName = "".concat(name, "-").concat(uid, "-iframe");
        return (react_1.default.createElement("span", { className: className, style: tslib_1.__assign({ position: 'relative', zIndex: 0, display: 'inline-block' }, style) },
            !disabled ? (react_1.default.createElement("iframe", { ref: this.saveIFrameRef, name: iframeName, onLoad: this.onLoad, style: { display: 'none' } })) : null,
            react_1.default.createElement("form", { ref: this.saveFormRef, method: "post", action: this.props.action, encType: "multipart/form-data", target: iframeName },
                react_1.default.createElement("input", { name: "_documentDomain", value: this.domain, type: "hidden" }),
                react_1.default.createElement("span", { ref: this.saveDataRef }),
                react_1.default.createElement("input", { ref: this.saveInputRef, type: "file", accept: accept, name: name, onChange: this.onSelect, style: INPUT_STYLE })),
            children));
    };
    IframeUploader.propTypes = {
        style: prop_types_1.default.object,
        action: prop_types_1.default.string.isRequired,
        name: prop_types_1.default.string.isRequired,
        data: prop_types_1.default.oneOfType([prop_types_1.default.object, prop_types_1.default.func]),
        disabled: prop_types_1.default.bool,
        className: prop_types_1.default.string,
        children: prop_types_1.default.node,
        headers: prop_types_1.default.object,
        autoUpload: prop_types_1.default.bool,
        onSelect: prop_types_1.default.func,
        beforeUpload: prop_types_1.default.func,
        onStart: prop_types_1.default.func,
        onSuccess: prop_types_1.default.func,
        onError: prop_types_1.default.func,
        accept: prop_types_1.default.string,
    };
    IframeUploader.defaultProps = {
        name: 'file',
        onSelect: util_1.func.noop,
        beforeUpload: util_1.func.noop,
        onStart: util_1.func.noop,
        onSuccess: util_1.func.noop,
        onError: util_1.func.noop,
        onAbort: util_1.func.noop,
    };
    return IframeUploader;
}(react_1.default.Component));
exports.default = IframeUploader;
