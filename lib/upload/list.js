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

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _progress = require('../progress');

var _progress2 = _interopRequireDefault(_progress);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _util = require('../util');

var _zhCn = require('../locale/zh-cn.js');

var _zhCn2 = _interopRequireDefault(_zhCn);

var _util2 = require('./util');

var _transform = require('./transform');

var _transform2 = _interopRequireDefault(_transform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = (_temp2 = _class = function (_Component) {
    (0, _inherits3.default)(List, _Component);

    function List() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, List);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleClose = function (file) {
            var _this$props = _this.props,
                onRemove = _this$props.onRemove,
                uploader = _this$props.uploader;


            var remove = onRemove(file);

            _util.func.promiseCall(remove, function () {
                uploader && uploader.removeFile(file);
            });
        }, _this.handleCancel = function (file) {
            var _this$props2 = _this.props,
                onCancel = _this$props2.onCancel,
                uploader = _this$props2.uploader;

            var cancel = onCancel(file);

            _util.func.promiseCall(cancel, function () {
                uploader && uploader.abort(file);
            });
        }, _this.onImageError = function (file, obj) {
            obj.onerror = null;
            _this.props.onImageError(obj, file);
        }, _this.onPreview = function (file, e) {
            _this.props.onPreview(file, e);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    List.prototype.componentDidUpdate = function componentDidUpdate() {
        var _this2 = this;

        var _props = this.props,
            listType = _props.listType,
            useDataURL = _props.useDataURL,
            value = _props.value;

        if (listType !== 'image' && listType !== 'card') {
            return;
        }

        useDataURL && value.forEach(function (file) {
            if (typeof document === 'undefined' || typeof window === 'undefined' || !window.FileReader || !window.File || !(file.originFileObj instanceof File) || file.imgURL !== undefined) {
                return;
            }
            file.imgURL = '';
            (0, _util2.previewFile)(file.originFileObj, function (previewDataUrl) {
                file.imgURL = previewDataUrl;
                _this2.forceUpdate();
            });
        });
    };

    List.prototype.getInfo = function getInfo(file) {
        var _classNames;

        var prefixCls = this.props.prefix + 'upload';
        var downloadURL = file.downloadURL || file.url;
        var imgURL = file.imgURL || file.url;
        var size = this.sizeCaculator(file.size);
        var itemCls = (0, _classnames2.default)((_classNames = {}, _classNames[prefixCls + '-list-item'] = true, _classNames[prefixCls + '-list-item-' + file.state] = file.state, _classNames[prefixCls + '-list-item-error-with-msg'] = file.state === 'error' && file.errorMsg, _classNames));
        var alt = file.name || file.alt;
        return { prefixCls: prefixCls, downloadURL: downloadURL, imgURL: imgURL, size: size, itemCls: itemCls, alt: alt };
    };
    // transfer size from number to xx K/ XxxM / xxG


    List.prototype.sizeCaculator = function sizeCaculator(size) {
        var fileSize = parseFloat(size, 10);
        // fileSize为浮点数 用 < 0.000001 替代 === 0
        if (isNaN(fileSize) || fileSize < 0.0000001) {
            return 0;
        }
        var SIZE_SUFFIX = ['B', 'K', 'M', 'G', 'T', 'P'];
        var suffixIndex = 0;

        // 在Mac上实验发现 取1024造成显示的大小和实际大小不一致
        // 因为单位制不同 见 https://superuser.com/questions/938234/size-of-files-in-windows-os-its-kb-or-kb
        var BIT_NUMBER_SYSTEM = 1024;
        while (fileSize >= BIT_NUMBER_SYSTEM && suffixIndex < SIZE_SUFFIX.length) {
            suffixIndex++;
            fileSize /= BIT_NUMBER_SYSTEM;
        }

        var suffix = SIZE_SUFFIX[suffixIndex];
        fileSize = fileSize.toFixed(2);

        return '' + fileSize + suffix;
    };

    List.prototype.getTextList = function getTextList(file) {
        var _this3 = this;

        var _props2 = this.props,
            locale = _props2.locale,
            extraRender = _props2.extraRender,
            progressProps = _props2.progressProps,
            rtl = _props2.rtl;

        var _getInfo = this.getInfo(file),
            prefixCls = _getInfo.prefixCls,
            downloadURL = _getInfo.downloadURL,
            size = _getInfo.size,
            itemCls = _getInfo.itemCls;

        var onClick = function onClick() {
            return file.state === 'uploading' ? _this3.handleCancel(file) : _this3.handleClose(file);
        };
        var onKeyDown = function onKeyDown(e) {
            if (e.keyCode === _util.KEYCODE.ENTER) {
                onClick();
            }
        };
        return _react2.default.createElement(
            'div',
            { className: itemCls, key: file.uid || file.name },
            _react2.default.createElement(
                'div',
                { className: prefixCls + '-list-item-name-wrap' },
                _react2.default.createElement(
                    'a',
                    {
                        href: downloadURL,
                        target: '_blank',
                        style: { pointerEvents: downloadURL ? '' : 'none' },
                        className: prefixCls + '-list-item-name'
                    },
                    _react2.default.createElement(
                        'span',
                        null,
                        file.name
                    ),
                    !!size && _react2.default.createElement(
                        'span',
                        {
                            className: prefixCls + '-list-item-size',
                            dir: rtl ? 'rtl' : undefined
                        },
                        '(',
                        size,
                        ')'
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: prefixCls + '-extra' },
                        extraRender(file)
                    )
                )
            ),
            file.state === 'uploading' ? _react2.default.createElement(
                'div',
                { className: prefixCls + '-list-item-progress' },
                _react2.default.createElement(_progress2.default, (0, _extends3.default)({
                    size: 'medium',
                    percent: file.percent,
                    textRender: _util.func.noop,
                    rtl: rtl
                }, progressProps))
            ) : null,
            file.state === 'error' && file.errorMsg ? _react2.default.createElement(
                'div',
                { className: prefixCls + '-list-item-error-msg' },
                file.errorMsg
            ) : null,
            this.props.closable ? _react2.default.createElement(_icon2.default, {
                type: 'close',
                size: 'large',
                role: 'button',
                'aria-label': locale.upload.delete,
                tabIndex: '0',
                onClick: onClick,
                onKeyDown: onKeyDown
            }) : null
        );
    };

    List.prototype.getImageList = function getImageList(file) {
        var _this4 = this;

        var _props3 = this.props,
            extraRender = _props3.extraRender,
            progressProps = _props3.progressProps,
            rtl = _props3.rtl;

        var _getInfo2 = this.getInfo(file),
            prefixCls = _getInfo2.prefixCls,
            downloadURL = _getInfo2.downloadURL,
            imgURL = _getInfo2.imgURL,
            size = _getInfo2.size,
            itemCls = _getInfo2.itemCls,
            alt = _getInfo2.alt;

        var img = null;

        var onClick = function onClick() {
            return file.state === 'uploading' ? _this4.handleCancel(file) : _this4.handleClose(file);
        };
        var onKeyDown = function onKeyDown(e) {
            if (e.keyCode === _util.KEYCODE.ENTER) {
                onClick();
            }
        };

        if (file.state === 'uploading' || file.state === 'selected' && !imgURL) {
            img = _react2.default.createElement(_icon2.default, { type: 'picture' });
        } else if (file.state === 'error') {
            img = _react2.default.createElement(_icon2.default, { type: 'cry' });
        } else {
            img = _react2.default.createElement('img', {
                src: imgURL,
                onError: this.onImageError.bind(this, file),
                tabIndex: '0',
                alt: alt,
                onClick: this.onPreview.bind(this, file)
            });
        }

        return _react2.default.createElement(
            'div',
            { className: itemCls, key: file.uid || file.name },
            _react2.default.createElement(
                'div',
                { className: prefixCls + '-list-item-thumbnail' },
                img
            ),
            this.props.closable ? _react2.default.createElement(_icon2.default, {
                type: 'close',
                size: 'large',
                tabIndex: '0',
                role: 'button',
                onClick: onClick,
                onKeyDown: onKeyDown
            }) : null,
            _react2.default.createElement(
                'a',
                {
                    href: downloadURL,
                    target: '_blank',
                    style: { pointerEvents: downloadURL ? '' : 'none' },
                    className: prefixCls + '-list-item-name'
                },
                _react2.default.createElement(
                    'span',
                    null,
                    file.name
                ),
                !!size && _react2.default.createElement(
                    'span',
                    {
                        className: prefixCls + '-list-item-size',
                        dir: rtl ? 'rtl' : undefined
                    },
                    '(',
                    size,
                    ')'
                ),
                _react2.default.createElement(
                    'span',
                    { className: prefixCls + '-extra' },
                    extraRender(file)
                )
            ),
            file.state === 'uploading' ? _react2.default.createElement(
                'div',
                { className: prefixCls + '-list-item-progress' },
                _react2.default.createElement(_progress2.default, (0, _extends3.default)({
                    size: 'medium',
                    percent: file.percent,
                    textRender: _util.func.noop
                }, progressProps))
            ) : null,
            file.state === 'error' && file.errorMsg ? _react2.default.createElement(
                'div',
                { className: prefixCls + '-list-item-error-msg' },
                file.errorMsg
            ) : null
        );
    };

    List.prototype.getPictureCardList = function getPictureCardList(file, isPreview) {
        var _this5 = this;

        var _props4 = this.props,
            locale = _props4.locale,
            progressProps = _props4.progressProps;

        var _getInfo3 = this.getInfo(file),
            prefixCls = _getInfo3.prefixCls,
            downloadURL = _getInfo3.downloadURL,
            imgURL = _getInfo3.imgURL,
            itemCls = _getInfo3.itemCls,
            alt = _getInfo3.alt;

        var state = isPreview ? '' : file.state;

        var img = null;

        if (state === 'uploading' || state === 'selected' && !imgURL) {
            img = _react2.default.createElement(
                'div',
                { className: prefixCls + '-list-item-handler' },
                _react2.default.createElement(_icon2.default, { type: 'picture' }),
                _react2.default.createElement(
                    _button2.default,
                    { text: true, onClick: function onClick() {
                            return _this5.handleCancel(file);
                        } },
                    locale.card.cancel
                )
            );
        } else if (state === 'error') {
            img = _react2.default.createElement(
                'div',
                { className: prefixCls + '-list-item-handler' },
                _react2.default.createElement(_icon2.default, { type: 'cry' })
            );
        } else {
            img = _react2.default.createElement('img', {
                src: imgURL,
                tabIndex: '0',
                alt: alt,
                onError: this.onImageError.bind(this, file),
                onClick: this.onPreview.bind(this, file)
            });
        }

        var onClose = function onClose() {
            return _this5.handleClose(file);
        };
        var onKeyDownClose = function onKeyDownClose(e) {
            if (e.keyCode === _util.KEYCODE.ENTER) {
                onClose();
            }
        };
        return _react2.default.createElement(
            'div',
            { className: itemCls, key: file.uid || file.name },
            _react2.default.createElement(
                'div',
                { className: prefixCls + '-list-item-wrapper' },
                _react2.default.createElement(
                    'div',
                    { className: prefixCls + '-list-item-thumbnail' },
                    img
                ),
                state === 'uploading' ? _react2.default.createElement(
                    'div',
                    { className: prefixCls + '-list-item-progress' },
                    _react2.default.createElement(_progress2.default, (0, _extends3.default)({
                        size: 'medium',
                        percent: file.percent,
                        textRender: _util.func.noop
                    }, progressProps))
                ) : null,
                state !== 'uploading' ? _react2.default.createElement(
                    'span',
                    {
                        className: prefixCls + '-tool ' + (!this.props.closable ? prefixCls + '-noclose' : '')
                    },
                    _react2.default.createElement(
                        'a',
                        {
                            href: downloadURL,
                            target: '_blank',
                            tabIndex: downloadURL ? '0' : '-1',
                            className: prefixCls + '-tool-download-link',
                            style: {
                                pointerEvents: downloadURL ? '' : 'none'
                            }
                        },
                        _react2.default.createElement(_icon2.default, {
                            type: downloadURL ? 'download' : '',
                            'aria-label': locale.card.download,
                            className: prefixCls + '-tool-download-icon'
                        })
                    ),
                    this.props.closable && !isPreview ? _react2.default.createElement(
                        'span',
                        { className: prefixCls + '-tool-close' },
                        _react2.default.createElement(_icon2.default, {
                            type: 'ashbin',
                            'aria-label': locale.card.delete,
                            tabIndex: '0',
                            role: 'button',
                            onClick: onClose,
                            onKeyDown: onKeyDownClose
                        })
                    ) : null
                ) : ''
            ),
            _react2.default.createElement(
                'span',
                { className: prefixCls + '-list-item-name' },
                file.name
            )
        );
    };

    List.prototype.render = function render() {
        var _this6 = this,
            _classNames3;

        var _props5 = this.props,
            listType = _props5.listType,
            children = _props5.children,
            prefix = _props5.prefix,
            rtl = _props5.rtl,
            className = _props5.className,
            isPreview = _props5.isPreview;

        var prefixCls = prefix + 'upload';

        var list = [];
        if (isPreview) {
            var _classNames2;

            var previewCls = (0, _classnames2.default)((_classNames2 = {}, _classNames2[prefix + 'form-preview'] = true, _classNames2[className] = !!className, _classNames2));
            list = this.props.value.map(function (file) {
                var downloadURL = file.downloadURL,
                    imgURL = file.imgURL,
                    name = file.name;

                if (listType === 'text') {
                    return _react2.default.createElement(
                        'div',
                        { className: previewCls },
                        _react2.default.createElement(
                            'a',
                            { href: downloadURL, target: '_blank' },
                            name
                        )
                    );
                } else if (listType === 'image' || listType === 'card') {
                    return _this6.getPictureCardList(file, true);
                }
                return null;
            });
        } else {
            list = this.props.value.map(function (file) {
                if (listType === 'text') {
                    return _this6.getTextList(file);
                } else if (listType === 'image') {
                    return _this6.getImageList(file);
                } else if (listType === 'card') {
                    return _this6.getPictureCardList(file);
                }
                return null;
            });
        }

        if (rtl && listType === 'card' && Array.isArray(list)) {
            list = list.reverse();
        }
        var _listType = isPreview && listType === 'image' ? 'card' : this.props.listType;
        var listclassNames = (0, _classnames2.default)((_classNames3 = {}, _classNames3[prefixCls + '-list'] = true, _classNames3[prefixCls + '-list-' + _listType] = true, _classNames3), className);

        var others = _util.obj.pickAttrsWith(this.props, 'data-');
        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({}, others, {
                className: listclassNames,
                dir: rtl ? 'rtl' : undefined
            }),
            rtl ? children : list,
            rtl ? list : children
        );
    };

    return List;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    /**
     * 多语言
     */
    locale: _propTypes2.default.object,
    /**
     * 文件列表，数据格式请参考 文件对象
     */
    listType: _propTypes2.default.oneOf(['text', 'image', 'card']),
    /**
     * 文件列表
     */
    value: _propTypes2.default.array,
    closable: _propTypes2.default.bool,
    /**
     * 删除文件回调(支持Promise)
     */
    onRemove: _propTypes2.default.func,
    /**
     * 取消上传回调(支持Promise)
     */
    onCancel: _propTypes2.default.func,
    /**
     * 头像加载出错回调
     */
    onImageError: _propTypes2.default.func,
    /**
     * listType=card时点击图片回调
     */
    onPreview: _propTypes2.default.func,
    /**
     * 自定义额外渲染
     */
    extraRender: _propTypes2.default.func,
    /**
     * 透传给Progress props
     */
    progressProps: _propTypes2.default.object,
    children: _propTypes2.default.node,
    uploader: _propTypes2.default.any,
    /**
     * 可选参数，是否本地预览
     */
    useDataURL: _propTypes2.default.bool,
    rtl: _propTypes2.default.bool,
    isPreview: _propTypes2.default.bool
}, _class.defaultProps = {
    prefix: 'next-',
    listType: 'text',
    value: [],
    locale: _zhCn2.default.Upload,
    closable: false,
    onRemove: _util.func.noop,
    onCancel: _util.func.noop,
    extraRender: _util.func.noop,
    onImageError: _util.func.noop,
    onPreview: _util.func.noop,
    progressProps: {}
}, _temp2);

// Wrap <List> with <ConfigProvider> to avoid context missing if it is
// referenced by other internal modules.
// https://github.com/alibaba-fusion/next/blob/build/1.13.9/src/upload/upload.jsx#L521

List.displayName = 'List';
exports.default = _configProvider2.default.config(List, {
    componentName: 'Upload',
    transform: _transform2.default
});
module.exports = exports['default'];