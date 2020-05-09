'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _util = require('../util');

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

var _index = require('./runtime/index');

var _index2 = _interopRequireDefault(_index);

var _html5Uploader = require('./runtime/html5-uploader');

var _html5Uploader2 = _interopRequireDefault(_html5Uploader);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

var _util2 = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = _util.func.noop;

/**
 * Upload
 */
var Upload = (_temp = _class = function (_Base) {
    (0, _inherits3.default)(Upload, _Base);

    function Upload(props) {
        (0, _classCallCheck3.default)(this, Upload);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Base.call(this, props));

        _initialiseProps.call(_this);

        var value = void 0;
        if ('value' in props) {
            value = props.value;
        } else {
            value = props.defaultValue;
        }

        _this.state = {
            value: typeof value === 'undefined' ? [] : [].concat(value),
            uploading: false
        };
        return _this;
    }

    Upload.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
        if ('value' in nextProps && nextProps.value !== prevState.value && !prevState.uploading) {
            return {
                value: typeof nextProps.value === 'undefined' ? [] : nextProps.value
            };
        }

        return null;
    };

    /**
     * 对外暴露API, 添加文件
     * @param files
     */
    Upload.prototype.selectFiles = function selectFiles(files) {
        var filesArr = files.length ? Array.prototype.slice.call(files) : [files];

        this.onSelect(filesArr);
    };

    Upload.prototype.uploadFiles = function uploadFiles(files) {
        // NOTE: drag上传，当鼠标松开的时候回执行 onDrop，但此时onChange还没出发所以 value=[], 必须提前标识上传中
        this.state.uploading = true;
        var fileList = files.filter(function (file) {
            if (file.state === 'selected') {
                file.state = 'uploading';
                return true;
            }
            return false;
        }).map(function (file) {
            return file.originFileObj;
        });

        fileList.length && this.uploaderRef.startUpload(fileList);
    };

    /**
     * 对外暴露api，控制文件上传
     */


    Upload.prototype.startUpload = function startUpload() {
        this.uploadFiles(this.state.value);
    };

    Upload.prototype.replaceFiles = function replaceFiles(old, current) {
        var targetItem = (0, _util2.getFileItem)(old, this.state.value);
        if (!targetItem) {
            return;
        }

        current.uid = old.uid;
        targetItem.originFileObj = current;
    };

    Upload.prototype.isUploading = function isUploading() {
        return this.state.uploading;
    };

    /**
     * 删除文件
     * @param {File} file
     * @return {void}
     */


    /**
     * 取消上传
     * @param {File} file
     * @return {void}
     */


    Upload.prototype.render = function render() {
        var _classNames, _classNames2;

        var _props = this.props,
            listType = _props.listType,
            prefix = _props.prefix,
            dragable = _props.dragable,
            shape = _props.shape,
            className = _props.className,
            style = _props.style,
            useDataURL = _props.useDataURL,
            disabled = _props.disabled,
            limit = _props.limit,
            closable = _props.closable,
            beforeUpload = _props.beforeUpload,
            readonly = _props.readonly,
            onRemove = _props.onRemove,
            onCancel = _props.onCancel,
            onPreview = _props.onPreview,
            list = _props.list,
            extraRender = _props.extraRender,
            progressProps = _props.progressProps,
            rtl = _props.rtl,
            isPreview = _props.isPreview,
            renderPreview = _props.renderPreview,
            others = (0, _objectWithoutProperties3.default)(_props, ['listType', 'prefix', 'dragable', 'shape', 'className', 'style', 'useDataURL', 'disabled', 'limit', 'closable', 'beforeUpload', 'readonly', 'onRemove', 'onCancel', 'onPreview', 'list', 'extraRender', 'progressProps', 'rtl', 'isPreview', 'renderPreview']);


        var cls = (0, _classnames2.default)((_classNames = {}, _classNames[prefix + 'upload'] = true, _classNames[prefix + 'upload-dragable'] = dragable, _classNames[prefix + 'disabled'] = disabled, _classNames[prefix + 'readonly'] = readonly, _classNames[className] = className, _classNames));

        var isExceedLimit = this.state.value.length >= limit;
        var innerCls = (0, _classnames2.default)((_classNames2 = {}, _classNames2[prefix + 'upload-inner'] = true, _classNames2[prefix + 'hidden'] = isExceedLimit, _classNames2));

        var children = this.props.children;
        if (shape === 'card') {
            var _classNames3;

            var cardCls = (0, _classnames2.default)((_classNames3 = {}, _classNames3[prefix + 'upload-card'] = true, _classNames3[prefix + 'disabled'] = disabled, _classNames3));
            children = _react2.default.createElement(
                'div',
                { className: cardCls },
                _react2.default.createElement(_icon2.default, { size: 'large', className: prefix + 'upload-add-icon' }),
                _react2.default.createElement(
                    'div',
                    {
                        tabIndex: '0',
                        role: 'button',
                        className: prefix + 'upload-text'
                    },
                    children
                )
            );
        }

        if (isPreview) {
            if (typeof renderPreview === 'function') {
                var _classNames4;

                var previewCls = (0, _classnames2.default)((_classNames4 = {}, _classNames4[prefix + 'form-preview'] = true, _classNames4[className] = !!className, _classNames4));
                return _react2.default.createElement(
                    'div',
                    { style: style, className: previewCls },
                    renderPreview(this.state.value, this.props)
                );
            }

            if (listType) {
                return _react2.default.createElement(_list2.default, {
                    isPreview: true,
                    listType: listType,
                    style: style,
                    className: className,
                    value: this.state.value
                });
            }

            return null;
        }

        // disabled 状态下把 remove函数替换成禁止 remove的函数
        var onRemoveFunc = disabled ? _util.func.prevent : onRemove;
        var otherAttributes = _util.obj.pickAttrsWith(this.props, 'data-');
        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({ className: cls, style: style }, otherAttributes),
            _react2.default.createElement(
                _index2.default,
                (0, _extends3.default)({}, others, {
                    beforeUpload: beforeUpload,
                    dragable: dragable,
                    disabled: disabled || isExceedLimit,
                    className: innerCls,
                    onSelect: this.onSelect,
                    onDrop: this.onDrop,
                    onProgress: this.onProgress,
                    onSuccess: this.onSuccess,
                    onError: this.onError,
                    ref: this.saveUploaderRef
                }),
                children
            ),
            listType || list ? _react2.default.createElement(_list2.default, {
                useDataURL: useDataURL,
                uploader: this,
                listType: listType,
                value: this.state.value,
                closable: closable,
                onRemove: onRemoveFunc,
                progressProps: progressProps,
                onCancel: onCancel,
                onPreview: onPreview,
                extraRender: extraRender,
                rtl: rtl
            }) : null
        );
    };

    return Upload;
}(_base2.default), _class.displayName = 'Upload', _class.propTypes = (0, _extends3.default)({}, _html5Uploader2.default.propTypes, _list2.default.propTypes, {
    /**
     * 样式前缀
     */
    prefix: _propTypes2.default.string.isRequired,
    /**
     * 上传的地址
     */
    action: _propTypes2.default.string,
    /**
     * 文件列表
     */
    value: _propTypes2.default.array,
    /**
     * 默认文件列表
     */
    defaultValue: _propTypes2.default.array,
    /**
     * 上传按钮形状
     */
    shape: _propTypes2.default.oneOf(['card']),
    /**
     * 上传列表的样式
     * @enumdesc 文字, 图文, 卡片
     */
    listType: _propTypes2.default.oneOf(['text', 'image', 'card']),
    list: _propTypes2.default.any,
    /**
     * 文件名字段
     */
    name: _propTypes2.default.string,
    /**
     * 上传额外传参
     */
    data: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    /**
     * 数据格式化函数，配合自定义 action 使用，参数为服务器的响应数据，详见 [formatter](#formater)
     * @param {Object} response 返回
     * @param {File} file 文件对象
     */
    formatter: _propTypes2.default.func,
    /**
     * 最大文件上传个数
     */
    limit: _propTypes2.default.number,
    /**
     * 设置上传超时,单位ms
     */
    timeout: _propTypes2.default.number,
    /**
     * 可选参数，是否支持拖拽上传，`ie10+` 支持。
     */
    dragable: _propTypes2.default.bool,
    closable: _propTypes2.default.bool,
    /**
     * 可选参数，是否本地预览
     */
    useDataURL: _propTypes2.default.bool,
    /**
     * 可选参数，是否禁用上传功能
     */
    disabled: _propTypes2.default.bool,
    /**
     * 选择文件回调
     */
    onSelect: _propTypes2.default.func,
    /**
     * 上传中
     */
    onProgress: _propTypes2.default.func,
    /**
     * 上传文件改变时的状态
     * @param {Object} info 文件事件对象
     */
    onChange: _propTypes2.default.func,
    /**
     * 可选参数，上传成功回调函数，参数为请求下响应信息以及文件
     * @param {Object} file 文件
     * @param {Array<Object>} value 值
     */
    onSuccess: _propTypes2.default.func,
    /**
     * 可选参数, 用于校验文件,afterSelect仅在 autoUpload=false 的时候生效,autoUpload=true时,可以使用beforeUpload完全可以替代该功能.
     * @param {Object} file
     * @returns {Boolean} 返回false会阻止上传,其他则表示正常
     */
    afterSelect: _propTypes2.default.func,
    /**
     * 移除文件回调函数
     * @param {Object} file 文件
     * @returns {Boolean|Promise} 返回 false、Promise.resolve(false)、 Promise.reject() 将阻止文件删除
     */
    onRemove: _propTypes2.default.func,
    /**
     * 可选参数，上传失败回调函数，参数为上传失败的信息、响应信息以及文件
     * @param {Object} file 出错的文件
     * @param {Array} value 当前值
     */
    onError: _propTypes2.default.func,
    /**
     * 可选参数, 详见 [beforeUpload](#beforeUpload)
     * @param {Object} file 所有文件
     * @param {Object} options 参数
     * @returns {Boolean|Object|Promise} 返回值作用见demo
     */
    beforeUpload: _propTypes2.default.func,
    /**
     * 放文件
     */
    onDrop: _propTypes2.default.func,
    /**
     * 自定义class
     */
    className: _propTypes2.default.string,
    /**
     * 自定义内联样式
     */
    style: _propTypes2.default.object,
    /**
     * 子元素
     */
    children: _propTypes2.default.node,
    /**
     * 自动上传
     */
    autoUpload: _propTypes2.default.bool,
    /**
     * 自定义上传方法
     * @param {Object} option
     * @return {Object} object with abort method
     */
    request: _propTypes2.default.func,
    /**
     * 透传给Progress props
     */
    progressProps: _propTypes2.default.object,
    rtl: _propTypes2.default.bool,
    /**
     * 是否为预览态
     */
    isPreview: _propTypes2.default.bool,
    /**
     * 预览态模式下渲染的内容
     * @param {number} value 评分值
     */
    renderPreview: _propTypes2.default.func
}), _class.defaultProps = (0, _extends3.default)({}, _html5Uploader2.default.defaultProps, {
    prefix: 'next-',
    limit: Infinity,
    autoUpload: true,
    closable: true,
    onSelect: noop,
    onProgress: noop,
    onChange: noop,
    onSuccess: noop,
    onRemove: noop,
    onError: noop,
    onDrop: noop,
    beforeUpload: noop,
    afterSelect: noop
}), _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.onSelect = function (files) {
        var _props2 = _this2.props,
            autoUpload = _props2.autoUpload,
            afterSelect = _props2.afterSelect,
            onSelect = _props2.onSelect,
            limit = _props2.limit;
        // 总数

        var total = _this2.state.value.length + files.length;
        // 差额
        var less = limit - _this2.state.value.length;
        if (less <= 0) {
            // 差额不足 则不上传
            return;
        }

        var fileList = files.map(function (file) {
            var objFile = (0, _util2.fileToObject)(file);
            objFile.state = 'selected';
            return objFile;
        });

        // 默认全量上传
        var uploadFiles = fileList;
        var discardFiles = [];
        if (total > limit) {
            // 全量上传总数会超过limit 但是 还有差额
            uploadFiles = fileList.slice(0, less);
            discardFiles = fileList.slice(less);
        }

        var value = _this2.state.value.concat(fileList);

        /* eslint-disable-next */
        _this2.state.value = value;

        if (autoUpload) {
            _this2.uploadFiles(uploadFiles);
        }

        onSelect(uploadFiles, value);
        discardFiles.forEach(function (file) {
            // 丢弃的文件
            var err = new Error(_util2.errorCode.EXCEED_LIMIT);
            err.code = _util2.errorCode.EXCEED_LIMIT;
            _this2.onError(err, null, file);
        });

        if (!autoUpload) {
            uploadFiles.forEach(function (file) {
                var isPassed = afterSelect(file);
                _util.func.promiseCall(isPassed, _util.func.noop, function (error) {
                    _this2.onError(error, null, file); // TODO: handle error message
                });
            });
            _this2.onChange(value, uploadFiles);
        }
    };

    this.onDrop = function (files) {
        _this2.onSelect(files);
        _this2.props.onDrop(files);
    };

    this.onProgress = function (e, file) {
        _this2.state.uploading = true;

        var value = _this2.state.value;
        var targetItem = (0, _util2.getFileItem)(file, value);

        if (!targetItem) {
            return;
        }

        (0, _extends3.default)(targetItem, {
            state: 'uploading',
            percent: e.percent
        });

        _this2.setState({
            value: value
        });

        _this2.props.onProgress(value, targetItem);
    };

    this.onSuccess = function (response, file) {
        _this2.state.uploading = false;

        var formatter = _this2.props.formatter;


        if (formatter) {
            response = formatter(response, file);
        }

        try {
            if (typeof response === 'string') {
                response = JSON.parse(response);
            }
        } catch (e) {
            e.code = _util2.errorCode.RESPONSE_FAIL;
            return _this2.onError(e, response, file);
        }

        if (response.success === false) {
            var err = new Error(response.message || _util2.errorCode.RESPONSE_FAIL);
            err.code = _util2.errorCode.RESPONSE_FAIL;
            return _this2.onError(err, response, file);
        }

        var value = _this2.state.value;
        var targetItem = (0, _util2.getFileItem)(file, value);

        if (!targetItem) {
            return;
        }

        (0, _extends3.default)(targetItem, {
            state: 'done',
            response: response,
            url: response.url,
            downloadURL: response.downloadURL || response.url // 下载地址(可选)
        });

        if (!_this2.props.useDataURL) {
            targetItem.imgURL = response.imgURL || response.url; // 缩略图地址(可选)
        }

        _this2.onChange(value, targetItem);
        _this2.props.onSuccess(targetItem, value);
    };

    this.onError = function (err, response, file) {
        _this2.state.uploading = false;

        var value = _this2.state.value;
        var targetItem = (0, _util2.getFileItem)(file, value);

        if (!targetItem) {
            return;
        }

        (0, _extends3.default)(targetItem, {
            state: 'error',
            error: err,
            response: response
        });

        _this2.onChange(value, targetItem);
        _this2.props.onError(targetItem, value);
    };

    this.removeFile = function (file) {
        file.state = 'removed';
        _this2.uploaderRef.abort(file); // 删除组件时调用组件的 `abort` 方法中断上传

        var fileList = _this2.state.value;
        var targetItem = (0, _util2.getFileItem)(file, fileList);
        var index = fileList.indexOf(targetItem);
        if (index !== -1) {
            fileList.splice(index, 1);
            _this2.onChange(fileList, targetItem);
        }
    };

    this.abort = function (file) {
        var fileList = _this2.state.value;
        var targetItem = (0, _util2.getFileItem)(file, fileList);
        var index = fileList.indexOf(targetItem);
        if (index !== -1) {
            fileList.splice(index, 1);
            _this2.onChange(fileList, targetItem);
        }
        _this2.uploaderRef.abort(file); // 取消上传时调用组件的 `abort` 方法中断上传
    };

    this.onChange = function (value, file) {
        _this2.setState({
            value: value
        });
        _this2.props.onChange(value, file);
    };
}, _temp);
exports.default = (0, _reactLifecyclesCompat.polyfill)(Upload);
module.exports = exports['default'];