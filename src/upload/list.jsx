import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import Progress from '../progress';
import Icon from '../icon';
import Button from '../button';
import { func, obj, KEYCODE, env } from '../util';
import zhCN from '../locale/zh-cn.js';
import { previewFile } from './util';
import transform from './transform';
import Item from '../menu/view/item';
import Selecter from './runtime/selecter';

const isIE9 = env.ieVersion === 9;

class List extends Component {
    static propTypes = {
        prefix: PropTypes.string,
        /**
         * 多语言
         */
        locale: PropTypes.object,
        /**
         * 文件列表，数据格式请参考 文件对象
         */
        listType: PropTypes.oneOf(['text', 'image', 'card']),
        /**
         * 文件列表
         */
        value: PropTypes.array,
        closable: PropTypes.bool,
        /**
         * 删除文件回调(支持Promise)
         */
        onRemove: PropTypes.func,
        /**
         * 取消上传回调(支持Promise)
         */
        onCancel: PropTypes.func,
        /**
         * 头像加载出错回调
         */
        onImageError: PropTypes.func,
        /**
         * 点击图片回调
         */
        onPreview: PropTypes.func,
        /**
         * 点击文件名时触发 onPreview
         */
        previewOnFileName: PropTypes.bool,
        /**
         * 自定义额外渲染
         */
        extraRender: PropTypes.func,
        /**
         * 自定义操作渲染
         */
        actionRender: PropTypes.func,
        /**
         * 卡片自定义渲染（目前只支持 Card)
         * @param {Object} file 文件对象
         * @param {Object} {remove} remove:删除回调
         * @retuns {ReactNode} React元素
         */
        itemRender: PropTypes.func,
        /**
         * 透传给Progress props
         */
        progressProps: PropTypes.object,
        children: PropTypes.node,
        uploader: PropTypes.any,
        showDownload: PropTypes.bool,
        /**
         * 可选参数，是否本地预览
         */
        useDataURL: PropTypes.bool,
        rtl: PropTypes.bool,
        isPreview: PropTypes.bool,
        fileNameRender: PropTypes.func,
    };

    static defaultProps = {
        prefix: 'next-',
        listType: 'text',
        value: [],
        locale: zhCN.Upload,
        closable: false,
        showDownload: true,
        onRemove: func.noop,
        onCancel: func.noop,
        extraRender: func.noop,
        actionRender: func.noop,
        onImageError: func.noop,
        progressProps: {},
        fileNameRender: file => file.name,
        previewOnFileName: false,
    };

    componentDidUpdate() {
        const { listType, useDataURL, value } = this.props;
        if (listType !== 'image' && listType !== 'card') {
            return;
        }

        useDataURL &&
            value.forEach(file => {
                if (
                    typeof document === 'undefined' ||
                    typeof window === 'undefined' ||
                    !window.FileReader ||
                    !window.File ||
                    !(file.originFileObj instanceof File) ||
                    file.imgURL !== undefined
                ) {
                    return;
                }
                file.imgURL = '';
                previewFile(file.originFileObj, previewDataUrl => {
                    file.imgURL = previewDataUrl;
                    this.forceUpdate();
                });
            });
    }

    handleClose = file => {
        const { onRemove, uploader } = this.props;

        const remove = onRemove(file);

        func.promiseCall(remove, () => {
            uploader && uploader.removeFile(file);
        });
    };

    handleCancel = file => {
        const { onCancel, uploader } = this.props;
        const cancel = onCancel(file);

        func.promiseCall(cancel, () => {
            uploader && uploader.abort(file);
        });
    };

    onImageError = (file, obj) => {
        obj.onerror = null;
        this.props.onImageError(obj, file);
    };

    onPreview(file, e) {
        const { onPreview } = this.props;

        if (!onPreview) {
            return;
        }
        // e.preventDefault();
        return onPreview(file, e);
    }

    getInfo(file) {
        const prefixCls = `${this.props.prefix}upload`;
        const downloadURL = file.downloadURL || file.url;
        const imgURL = file.imgURL || file.url;
        const size = this.sizeCaculator(file.size);
        const itemCls = classNames({
            [`${prefixCls}-list-item`]: true,
            [`${prefixCls}-list-item-${file.state}`]: file.state,
            [`${prefixCls}-list-item-error-with-msg`]: file.state === 'error' && file.errorMsg,
        });
        const alt = file.name || file.alt;
        return { prefixCls, downloadURL, imgURL, size, itemCls, alt };
    }
    // transfer size from number to xx K/ XxxM / xxG
    sizeCaculator(size) {
        let fileSize = parseFloat(size, 10);
        // fileSize为浮点数 用 < 0.000001 替代 === 0
        if (isNaN(fileSize) || fileSize < 0.0000001) {
            return 0;
        }
        const SIZE_SUFFIX = ['B', 'K', 'M', 'G', 'T', 'P'];
        let suffixIndex = 0;

        // 在Mac上实验发现 取1024造成显示的大小和实际大小不一致
        // 因为单位制不同 见 https://superuser.com/questions/938234/size-of-files-in-windows-os-its-kb-or-kb
        const BIT_NUMBER_SYSTEM = 1024;
        while (fileSize >= BIT_NUMBER_SYSTEM && suffixIndex < SIZE_SUFFIX.length) {
            suffixIndex++;
            fileSize /= BIT_NUMBER_SYSTEM;
        }

        const suffix = SIZE_SUFFIX[suffixIndex];
        fileSize = fileSize.toFixed(2);

        return `${fileSize}${suffix}`;
    }
    getTextList(file) {
        const { locale, extraRender, actionRender, progressProps, rtl, fileNameRender, previewOnFileName } = this.props;

        const { prefixCls, downloadURL, size, itemCls } = this.getInfo(file);
        const onClick = () => (file.state === 'uploading' ? this.handleCancel(file) : this.handleClose(file));
        const onKeyDown = e => {
            if (e.keyCode === KEYCODE.ENTER) {
                onClick();
            }
        };
        return (
            <div className={itemCls} key={file.uid || file.name}>
                <div className={`${prefixCls}-list-item-name-wrap`}>
                    <a
                        onClick={previewOnFileName ? this.onPreview.bind(this, file) : func.noop}
                        href={downloadURL}
                        target="_blank"
                        style={{ pointerEvents: downloadURL ? '' : 'none' }}
                        className={`${prefixCls}-list-item-name`}
                    >
                        <span>{fileNameRender(file)}</span>
                        {!!size && (
                            <span className={`${prefixCls}-list-item-size`} dir={rtl ? 'rtl' : undefined}>
                                ({size})
                            </span>
                        )}
                        <span className={`${prefixCls}-extra`}>{extraRender(file)}</span>
                    </a>
                </div>
                {file.state === 'uploading' ? (
                    <div className={`${prefixCls}-list-item-progress`}>
                        <Progress
                            size="medium"
                            percent={file.percent}
                            textRender={func.noop}
                            rtl={rtl}
                            {...progressProps}
                        />
                    </div>
                ) : null}
                {file.state === 'error' && file.errorMsg ? (
                    <div className={`${prefixCls}-list-item-error-msg`}>{file.errorMsg}</div>
                ) : null}
                <span className={`${prefixCls}-list-item-op`}>
                    {actionRender(file)}
                    {this.props.closable ? (
                        <Icon
                            type="close"
                            size="large"
                            role="button"
                            aria-label={locale.upload.delete}
                            tabIndex="0"
                            onClick={onClick}
                            onKeyDown={onKeyDown}
                        />
                    ) : null}
                </span>
            </div>
        );
    }

    getImageList(file) {
        const { extraRender, actionRender, progressProps, rtl, fileNameRender, previewOnFileName } = this.props;

        const { prefixCls, downloadURL, imgURL, size, itemCls, alt } = this.getInfo(file);

        let img = null;

        const onClick = () => (file.state === 'uploading' ? this.handleCancel(file) : this.handleClose(file));
        const onKeyDown = e => {
            if (e.keyCode === KEYCODE.ENTER) {
                onClick();
            }
        };

        if (file.state === 'uploading' || (file.state === 'selected' && !imgURL)) {
            img = <Icon type="picture" />;
        } else if (file.state === 'error') {
            img = <Icon type="cry" />;
        } else {
            img = (
                <img
                    src={imgURL}
                    onError={this.onImageError.bind(this, file)}
                    tabIndex="0"
                    alt={alt}
                    onClick={this.onPreview.bind(this, file)}
                />
            );
        }

        return (
            <div className={itemCls} key={file.uid || file.name}>
                <div className={`${prefixCls}-list-item-thumbnail`}>{img}</div>
                <span className={`${prefixCls}-list-item-op`}>
                    {actionRender(file)}
                    {this.props.closable ? (
                        <Icon
                            type="close"
                            size="large"
                            tabIndex="0"
                            role="button"
                            onClick={onClick}
                            onKeyDown={onKeyDown}
                        />
                    ) : null}
                </span>
                <a
                    onClick={previewOnFileName ? this.onPreview.bind(this, file) : func.noop}
                    href={downloadURL}
                    target="_blank"
                    style={{ pointerEvents: downloadURL ? '' : 'none' }}
                    className={`${prefixCls}-list-item-name`}
                >
                    <span>{fileNameRender(file)}</span>
                    {!!size && (
                        <span className={`${prefixCls}-list-item-size`} dir={rtl ? 'rtl' : undefined}>
                            ({size})
                        </span>
                    )}
                    <span className={`${prefixCls}-extra`}>{extraRender(file)}</span>
                </a>
                {file.state === 'uploading' ? (
                    <div className={`${prefixCls}-list-item-progress`}>
                        <Progress size="medium" percent={file.percent} textRender={func.noop} {...progressProps} />
                    </div>
                ) : null}
                {file.state === 'error' && file.errorMsg ? (
                    <div className={`${prefixCls}-list-item-error-msg`}>{file.errorMsg}</div>
                ) : null}
            </div>
        );
    }

    onSelect = (oldfile, files) => {
        const uploader = this.props.uploader;
        uploader && files.length && uploader.replaceWithNewFile(oldfile, files[0]);
    };

    getPictureCardList(file, isPreview) {
        const { locale, progressProps, fileNameRender, itemRender, showDownload } = this.props;

        const { prefixCls, downloadURL, imgURL, itemCls, alt } = this.getInfo(file);
        const state = isPreview ? '' : file.state;

        let img = null;

        if (state === 'uploading' || (state === 'selected' && !imgURL)) {
            img = (
                <div className={`${prefixCls}-list-item-handler`}>
                    <Icon type="picture" />
                    <Button text onClick={() => this.handleCancel(file)}>
                        {locale.card.cancel}
                    </Button>
                </div>
            );
        } else if (state === 'error') {
            img = (
                <div className={`${prefixCls}-list-item-handler`}>
                    <Icon type="cry" />
                </div>
            );
        } else {
            img = (
                <img
                    src={imgURL}
                    tabIndex="0"
                    alt={alt}
                    onError={this.onImageError.bind(this, file)}
                    onClick={this.onPreview.bind(this, file)}
                />
            );
        }

        const onClose = () => this.handleClose(file);
        const onKeyDownClose = e => {
            if (e.keyCode === KEYCODE.ENTER) {
                onClose();
            }
        };

        let item = null;
        if (state === 'uploading') {
            item = [
                <div className={`${prefixCls}-list-item-thumbnail`} key="img">
                    {img}
                </div>,
                <div className={`${prefixCls}-list-item-progress`} key="progress">
                    <Progress size="medium" percent={file.percent} textRender={func.noop} {...progressProps} />
                </div>,
            ];
        } else {
            /* eslint-disable no-lonely-if */
            if (typeof itemRender === 'function') {
                // 不处理上传态和选择态，太过复杂
                item = itemRender(file, { remove: onClose });
            } else {
                const Uploader = this.props.uploader || { props: {} };
                const UploaderProps = Uploader.props;

                // TODO: 2.x 中逻辑会修改为，只要有showDownload，那就有下载按钮（不管有没有downloadURL）
                item = [
                    <div className={`${prefixCls}-list-item-thumbnail`} key="img">
                        {img}
                    </div>,
                    <span key="tool" className={`${prefixCls}-tool`}>
                        {state !== 'error' && showDownload && downloadURL ? (
                            <a
                                href={downloadURL}
                                target="_blank"
                                className={`${prefixCls}-tool-item ${prefixCls}-tool-download-link`}
                            >
                                <Icon
                                    type="download"
                                    aria-label={locale.card.download}
                                    className={`${prefixCls}-tool-download-icon`}
                                />
                            </a>
                        ) : null}

                        {this.props.reUpload && !isPreview && !isIE9 ? (
                            <Selecter
                                className={`${prefixCls}-tool-item ${prefixCls}-tool-reupload`}
                                accept={UploaderProps.accept}
                                name={UploaderProps.fileKeyName}
                                onSelect={this.onSelect.bind(this, file)}
                            >
                                <Icon type="edit" className={`${prefixCls}-tool-reupload-icon`} />
                            </Selecter>
                        ) : null}

                        {this.props.closable && !isPreview ? (
                            <span className={`${prefixCls}-tool-item ${prefixCls}-tool-close`}>
                                <Icon
                                    type="ashbin"
                                    aria-label={locale.card.delete}
                                    tabIndex="0"
                                    role="button"
                                    onClick={onClose}
                                    onKeyDown={onKeyDownClose}
                                />
                            </span>
                        ) : null}
                    </span>,
                ];
            }
        }

        return (
            <div className={itemCls} key={file.uid || file.name}>
                <div className={`${prefixCls}-list-item-wrapper`}>{item}</div>

                <span className={`${prefixCls}-list-item-name`}>{fileNameRender(file)}</span>
            </div>
        );
    }

    render() {
        const { listType, children, prefix, rtl, className, isPreview } = this.props;
        const prefixCls = `${prefix}upload`;

        let list = [];
        if (isPreview) {
            const previewCls = classNames({
                [`${prefix}form-preview`]: true,
                [className]: !!className,
            });
            list = this.props.value.map(file => {
                if (!file) {
                    return null;
                }

                const { downloadURL, imgURL, name } = file;
                if (listType === 'text') {
                    return (
                        <div className={previewCls}>
                            <a href={downloadURL} target="_blank">
                                {name}
                            </a>
                        </div>
                    );
                } else if (listType === 'image' || listType === 'card') {
                    return this.getPictureCardList(file, true);
                }
                return null;
            });
        } else {
            list = this.props.value.map(file => {
                if (!file) {
                    return null;
                }

                if (listType === 'text') {
                    return this.getTextList(file);
                } else if (listType === 'image') {
                    return this.getImageList(file);
                } else if (listType === 'card') {
                    return this.getPictureCardList(file);
                }
                return null;
            });
        }

        if (rtl && listType === 'card' && Array.isArray(list)) {
            list = list.reverse();
        }
        const _listType = isPreview && listType === 'image' ? 'card' : this.props.listType;
        const listclassNames = classNames(
            {
                [`${prefixCls}-list`]: true,
                [`${prefixCls}-list-${_listType}`]: true,
                [`${prefixCls}-ie9`]: isIE9,
            },
            className
        );

        const others = obj.pickAttrsWith(this.props, 'data-');
        return (
            <div {...others} className={listclassNames} dir={rtl ? 'rtl' : undefined}>
                {rtl ? children : list}
                {rtl ? list : children}
            </div>
        );
    }
}

// Wrap <List> with <ConfigProvider> to avoid context missing if it is
// referenced by other internal modules.
// https://github.com/alibaba-fusion/next/blob/build/1.13.9/src/upload/upload.jsx#L521
export default ConfigProvider.config(List, {
    componentName: 'Upload',
    transform,
});
