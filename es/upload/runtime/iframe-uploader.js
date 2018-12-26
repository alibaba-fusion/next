import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp, _initialiseProps;

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { log, func } from '../../util';
import { uid } from '../util';

var INPUT_STYLE = {
    position: 'absolute',
    top: 0,
    right: 0,
    fontSize: 9999,
    zIndex: 9999,
    opacity: 0,
    outline: 'none',
    cursor: 'pointer'
};

var IframeUploader = (_temp = _class = function (_React$Component) {
    _inherits(IframeUploader, _React$Component);

    function IframeUploader(props) {
        _classCallCheck(this, IframeUploader);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _initialiseProps.call(_this);

        _this.domain = typeof document !== 'undefined' && document.domain ? document.domain : '';
        return _this;
    }

    IframeUploader.prototype.componentDidMount = function componentDidMount() {
        this.updateInputWH();
    };

    IframeUploader.prototype.componentDidUpdate = function componentDidUpdate() {
        this.updateInputWH();
    };

    IframeUploader.prototype.startUpload = function startUpload() {
        this.upload(this.file);
        this.file = {};
    };

    IframeUploader.prototype.upload = function upload(file) {
        var _this2 = this;

        if (!this.state.uploading) {
            // eslint-disable-next-line
            this.state.uploading = true;
            this.setState({ uploading: true });
        }

        var beforeUpload = this.props.beforeUpload;

        if (!beforeUpload) {
            return this.post(file);
        }
        var before = beforeUpload(file);
        if (before && before.then) {
            before.then(function () {
                _this2.post(file);
            }, function () {
                _this2.endUpload();
            });
        } else if (before !== false) {
            this.post(file);
        } else {
            this.endUpload();
        }
    };

    IframeUploader.prototype.endUpload = function endUpload() {
        this.file = {};
        if (this.state.uploading) {
            // eslint-disable-next-line
            this.state.uploading = false;
            this.setState({ uploading: false });
        }
    };

    IframeUploader.prototype.updateInputWH = function updateInputWH() {
        var rootNode = ReactDOM.findDOMNode(this);
        var inputNode = this.refs.input;
        inputNode.style.height = rootNode.offsetHeight + 'px';
        inputNode.style.width = rootNode.offsetWidth + 'px';
    };

    IframeUploader.prototype.abort = function abort(file) {
        if (file) {
            var _uid = file;
            if (file && file.uid) {
                _uid = file.uid;
            }
            if (_uid === this.file.uid) {
                this.endUpload();
            }
        } else {
            this.endUpload();
        }
    };

    IframeUploader.prototype.post = function post(file) {
        var formNode = this.refs.form;
        var dataSpan = this.refs.data;

        var data = this.props.data;
        if (typeof data === 'function') {
            data = data(file);
        }

        var inputs = document.createDocumentFragment();
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                var input = document.createElement('input');
                input.setAttribute('name', key);
                input.value = data[key];
                inputs.appendChild(input);
            }
        }
        dataSpan.appendChild(inputs);
        formNode.submit();
        dataSpan.innerHTML = '';
        this.props.onStart(file);
    };

    IframeUploader.prototype.render = function render() {
        var _props = this.props,
            disabled = _props.disabled,
            className = _props.className,
            children = _props.children,
            accept = _props.accept,
            name = _props.name,
            style = _props.style;


        var iframeName = name + '-iframe';

        return React.createElement(
            'span',
            { className: className, style: _extends({
                    position: 'relative',
                    zIndex: 0,
                    display: 'inline-block'
                }, style) },
            !disabled ? React.createElement('iframe', { ref: 'iframe', name: iframeName, onLoad: this.onLoad, style: { display: 'none' } }) : null,
            React.createElement(
                'form',
                { ref: 'form', method: 'post', action: this.props.action, encType: 'multipart/form-data',
                    target: iframeName },
                React.createElement('input', { ref: 'input', type: 'file', accept: accept, name: name, onChange: this.onSelect,
                    style: INPUT_STYLE }),
                React.createElement('input', { name: '_documentDomain', value: this.domain, type: 'hidden' }),
                React.createElement('span', { ref: 'data' })
            ),
            children
        );
    };

    return IframeUploader;
}(React.Component), _class.propTypes = {
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
    accept: PropTypes.string
}, _class.defaultProps = {
    name: 'file',
    onSelect: func.noop,
    beforeUpload: func.noop,
    onStart: func.noop,
    onSuccess: func.noop,
    onError: func.noop,
    onAbort: func.noop
}, _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.state = {
        uploading: false
    };
    this.file = {};

    this.onLoad = function () {
        if (!_this3.state.uploading) {
            return;
        }
        var props = _this3.props,
            file = _this3.file;

        var response = void 0;
        try {
            var doc = _this3.refs.iframe.contentDocument;
            var script = doc.getElementsByTagName('script')[0];
            if (script && script.parentNode === doc.body) {
                doc.body.removeChild(script);
            }
            response = doc.body.innerHTML;
            props.onSuccess(response, file);
        } catch (err) {
            log.warning('cross domain error for Upload. Maybe server should return document.domain script.');
            response = 'cross-domain';
            props.onError(err, null, file);
        }
        _this3.endUpload();
    };

    this.onSelect = function (e) {
        _this3.file = {
            uid: uid(),
            name: e.target.value
        };
        _this3.props.onSelect([_this3.file]);
    };
}, _temp);
IframeUploader.displayName = 'IframeUploader';


export default IframeUploader;