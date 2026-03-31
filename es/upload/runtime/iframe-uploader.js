import { __assign, __extends } from "tslib";
/* istanbul ignore file */
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { log, func, obj } from '../../util';
import { uid } from '../util';
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
    __extends(IframeUploader, _super);
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
                log.warning('cross domain error for Upload. Maybe server should return document.domain script.');
                response = 'cross-domain';
                props.onError(err, null, file);
            }
            _this.endUpload();
        };
        _this.onSelect = function (e) {
            _this.file = {
                uid: uid(),
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
        _this.uid = uid();
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
            this.post(file, obj.isPlainObject(before) ? before : undefined);
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
        var rootNode = ReactDOM.findDOMNode(this);
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
        return (React.createElement("span", { className: className, style: __assign({ position: 'relative', zIndex: 0, display: 'inline-block' }, style) },
            !disabled ? (React.createElement("iframe", { ref: this.saveIFrameRef, name: iframeName, onLoad: this.onLoad, style: { display: 'none' } })) : null,
            React.createElement("form", { ref: this.saveFormRef, method: "post", action: this.props.action, encType: "multipart/form-data", target: iframeName },
                React.createElement("input", { name: "_documentDomain", value: this.domain, type: "hidden" }),
                React.createElement("span", { ref: this.saveDataRef }),
                React.createElement("input", { ref: this.saveInputRef, type: "file", accept: accept, name: name, onChange: this.onSelect, style: INPUT_STYLE })),
            children));
    };
    IframeUploader.propTypes = {
        style: PropTypes.object,
        action: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        data: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
        disabled: PropTypes.bool,
        className: PropTypes.string,
        children: PropTypes.node,
        headers: PropTypes.object,
        autoUpload: PropTypes.bool,
        onSelect: PropTypes.func,
        beforeUpload: PropTypes.func,
        onStart: PropTypes.func,
        onSuccess: PropTypes.func,
        onError: PropTypes.func,
        accept: PropTypes.string,
    };
    IframeUploader.defaultProps = {
        name: 'file',
        onSelect: func.noop,
        beforeUpload: func.noop,
        onStart: func.noop,
        onSuccess: func.noop,
        onError: func.noop,
        onAbort: func.noop,
    };
    return IframeUploader;
}(React.Component));
export default IframeUploader;
