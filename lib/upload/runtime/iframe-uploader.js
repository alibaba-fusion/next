'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _util = require('../../util');

var _util2 = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    (0, _inherits3.default)(IframeUploader, _React$Component);

    function IframeUploader(props) {
        (0, _classCallCheck3.default)(this, IframeUploader);

        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

        _initialiseProps.call(_this);

        _this.domain = typeof document !== 'undefined' && document.domain ? document.domain : '';
        _this.uid = (0, _util2.uid)();
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
    };

    IframeUploader.prototype.upload = function upload(file) {
        var _this2 = this;

        if (!this.state.uploading) {
            // eslint-disable-next-line
            this.state.uploading = true;
            this.setState({ uploading: true });
        }

        var _props = this.props,
            beforeUpload = _props.beforeUpload,
            action = _props.action,
            name = _props.name,
            data = _props.data;

        if (!beforeUpload) {
            return this.post(file);
        }
        var requestData = {
            action: action,
            name: name,
            data: data
        };
        var before = beforeUpload(file, requestData);
        if (before && before.then) {
            before.then(function (data) {
                _this2.post(file, data);
            }, function () {
                _this2.endUpload();
            });
        } else if (before !== false) {
            this.post(file, _util.obj.isPlainObject(before) ? before : undefined);
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
        var rootNode = _reactDom2.default.findDOMNode(this);
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
        var requestOption = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var formNode = this.refs.form;
        var dataSpan = this.refs.data;
        var fileInput = this.refs.input;

        var propsData = this.props.data;
        if (typeof propsData === 'function') {
            propsData = propsData(file);
        }

        var action = requestOption.action,
            name = requestOption.name,
            data = requestOption.data;

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

    IframeUploader.prototype.render = function render() {
        var _props2 = this.props,
            disabled = _props2.disabled,
            className = _props2.className,
            children = _props2.children,
            accept = _props2.accept,
            name = _props2.name,
            style = _props2.style;
        var uid = this.uid;

        var iframeName = name + '-' + uid + '-iframe';

        return _react2.default.createElement(
            'span',
            {
                className: className,
                style: (0, _extends3.default)({
                    position: 'relative',
                    zIndex: 0,
                    display: 'inline-block'
                }, style)
            },
            !disabled ? _react2.default.createElement('iframe', {
                ref: 'iframe',
                name: iframeName,
                onLoad: this.onLoad,
                style: { display: 'none' }
            }) : null,
            _react2.default.createElement(
                'form',
                {
                    ref: 'form',
                    method: 'post',
                    action: this.props.action,
                    encType: 'multipart/form-data',
                    target: iframeName
                },
                _react2.default.createElement('input', {
                    name: '_documentDomain',
                    value: this.domain,
                    type: 'hidden'
                }),
                _react2.default.createElement('span', { ref: 'data' }),
                _react2.default.createElement('input', {
                    ref: 'input',
                    type: 'file',
                    accept: accept,
                    name: name,
                    onChange: this.onSelect,
                    style: INPUT_STYLE
                })
            ),
            children
        );
    };

    return IframeUploader;
}(_react2.default.Component), _class.propTypes = {
    style: _propTypes2.default.object,
    action: _propTypes2.default.string.isRequired,
    name: _propTypes2.default.string.isRequired,
    data: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    disabled: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    children: _propTypes2.default.node,
    headers: _propTypes2.default.object,
    autoUpload: _propTypes2.default.bool,
    onSelect: _propTypes2.default.func,
    beforeUpload: _propTypes2.default.func,
    onStart: _propTypes2.default.func,
    onSuccess: _propTypes2.default.func,
    onError: _propTypes2.default.func,
    accept: _propTypes2.default.string
}, _class.defaultProps = {
    name: 'file',
    onSelect: _util.func.noop,
    beforeUpload: _util.func.noop,
    onStart: _util.func.noop,
    onSuccess: _util.func.noop,
    onError: _util.func.noop,
    onAbort: _util.func.noop
}, _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.state = {
        uploading: false
    };
    this.file = {};
    this.uid = '';

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
            _util.log.warning('cross domain error for Upload. Maybe server should return document.domain script.');
            response = 'cross-domain';
            props.onError(err, null, file);
        }
        _this3.endUpload();
    };

    this.onSelect = function (e) {
        _this3.file = {
            uid: (0, _util2.uid)(),
            name: e.target.value
        };
        _this3.props.onSelect([_this3.file]);
    };
}, _temp);
IframeUploader.displayName = 'IframeUploader';
exports.default = IframeUploader;
module.exports = exports['default'];