import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';

import { func, obj } from '../util';
import Icon from '../icon';
import Base from './base';
import Uploader from './runtime/index';
import html5Uploader from './runtime/html5-uploader';
import List from './list';
import { fileToObject, getFileItem, errorCode } from './util';
import type {
    ObjectFile,
    UploadError,
    UploadFile,
    UploadProgressEvent,
    UploadProps,
    UploadResponse,
    UploadState,
} from './types';

const noop = func.noop;

class Upload extends Base<UploadProps, UploadState> {
    static displayName = 'Upload';

    static propTypes = {
        ...html5Uploader.propTypes,
        ...List.propTypes,
        prefix: PropTypes.string.isRequired,
        action: PropTypes.string,
        value: PropTypes.array,
        defaultValue: PropTypes.array,
        shape: PropTypes.oneOf(['card']),
        listType: PropTypes.oneOf(['text', 'image', 'card', 'none']),
        list: PropTypes.any,
        name: PropTypes.string,
        data: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
        formatter: PropTypes.func,
        limit: PropTypes.number,
        timeout: PropTypes.number,
        dragable: PropTypes.bool,
        closable: PropTypes.bool,
        useDataURL: PropTypes.bool,
        disabled: PropTypes.bool,
        onSelect: PropTypes.func,
        onProgress: PropTypes.func,
        onChange: PropTypes.func,
        onSuccess: PropTypes.func,
        afterSelect: PropTypes.func,
        onRemove: PropTypes.func,
        onError: PropTypes.func,
        beforeUpload: PropTypes.func,
        onDrop: PropTypes.func,
        className: PropTypes.string,
        style: PropTypes.object,
        children: PropTypes.node,
        autoUpload: PropTypes.bool,
        request: PropTypes.func,
        progressProps: PropTypes.object,
        rtl: PropTypes.bool,
        isPreview: PropTypes.bool,
        renderPreview: PropTypes.func,
        fileKeyName: PropTypes.string,
        fileNameRender: PropTypes.func,
        actionRender: PropTypes.func,
        previewOnFileName: PropTypes.bool,
    };

    static defaultProps = {
        ...html5Uploader.defaultProps,
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
        afterSelect: noop,
        previewOnFileName: false,
    };

    constructor(props: UploadProps) {
        super(props);

        let value;
        if ('value' in props) {
            value = props.value;
        } else {
            value = props.defaultValue;
        }

        this.state = {
            value: !Array.isArray(value) ? [] : value,
            uploading: false,
        };
    }

    static getDerivedStateFromProps(nextProps: UploadProps, prevState: UploadState) {
        // 上传中不允许做受控修改
        if ('value' in nextProps && nextProps.value !== prevState.value && !prevState.uploading) {
            return {
                value: !Array.isArray(nextProps.value) ? [] : nextProps.value,
            };
        }

        return null;
    }

    onSelect = (files: Array<UploadFile>) => {
        const { autoUpload, afterSelect, onSelect, limit } = this.props;
        // 总数
        const total = this.state.value.length + files.length;
        // 差额
        const less = limit! - this.state.value.length;
        if (less <= 0) {
            // 差额不足 则不上传
            return;
        }

        const fileList = files.map(file => {
            const objFile = fileToObject(file);
            objFile.state = 'selected';
            return objFile;
        });

        // 默认全量上传
        let uploadFiles = fileList;
        let discardFiles: Array<ObjectFile> = [];
        if (total > limit!) {
            // 全量上传总数会超过limit 但是 还有差额
            uploadFiles = fileList.slice(0, less);
            discardFiles = fileList.slice(less);
        }

        const value = this.state.value.concat(fileList);

        /* eslint-disable-next */
        // @ts-expect-error 无法为“value”赋值，因为它是只读属性。
        this.state.value = value;

        if (autoUpload) {
            this.uploadFiles(uploadFiles);
        }

        onSelect!(uploadFiles, value);
        discardFiles.forEach(file => {
            // 丢弃的文件
            const err: UploadError = new Error(errorCode.EXCEED_LIMIT);
            err.code = errorCode.EXCEED_LIMIT;
            this.onError(err, null, file);
        });

        if (!autoUpload) {
            uploadFiles.forEach(file => {
                const isPassed = afterSelect!(file);
                func.promiseCall(isPassed, func.noop, (error: UploadError) => {
                    this.onError(error, null, file);
                });
            });
            this.onChange(value, uploadFiles);
        }
    };

    onDrop = (files: UploadFile[]) => {
        this.onSelect(files);
        this.props.onDrop!(files);
    };

    /**
     * 对外暴露API, 添加文件
     */
    selectFiles(files: File[]) {
        const filesArr = files.length ? Array.prototype.slice.call(files) : [files];

        this.onSelect(filesArr);
    }

    uploadFiles(files: (UploadFile | ObjectFile)[]) {
        // NOTE: drag上传，当鼠标松开的时候回执行 onDrop，但此时onChange还没出发所以 value=[], 必须提前标识上传中
        // @ts-expect-error 无法为“uploading”赋值，因为它是只读属性。
        this.state.uploading = true;
        const fileList = files
            .filter(file => {
                if (file.state === 'selected') {
                    file.state = 'uploading';
                    return true;
                }
                return false;
            })
            .map(file => {
                return file.originFileObj;
            });
        fileList.length && this.uploaderRef.startUpload(fileList);
    }

    /**
     * 对外暴露api，控制文件上传
     */
    startUpload() {
        this.uploadFiles(this.state.value);
    }

    replaceFiles(old: ObjectFile, current: UploadFile) {
        const targetItem = getFileItem(old, this.state.value);
        if (!targetItem) {
            return;
        }

        current.uid = old.uid;
        targetItem.originFileObj = current;
    }

    // 替换掉队列里面的文件
    replaceWithNewFile = (old: ObjectFile, current: UploadFile) => {
        const newFile = fileToObject(current);
        newFile.state = 'selected';

        const matchKey = old.uid !== undefined ? 'uid' : 'name';

        const fileList = this.state.value;
        for (let i = 0; i < fileList.length; i++) {
            const item = fileList[i];
            if (item[matchKey] === old[matchKey]) {
                fileList.splice(i, 1, newFile);
                break;
            }
        }

        this.uploadFiles([newFile]);
        return newFile;
    };

    isUploading() {
        return this.state.uploading;
    }

    onProgress = (e: UploadProgressEvent, file: UploadFile) => {
        //@ts-expect-error 无法为“uploading”赋值，因为它是只读属性。
        this.state.uploading = true;

        const value = this.state.value;
        const targetItem = getFileItem(file, value);

        if (!targetItem) {
            return;
        }

        Object.assign(targetItem, {
            state: 'uploading',
            percent: e.percent,
        });

        this.setState({
            value,
        });

        this.props.onProgress!(value, targetItem);
    };

    onSuccess = (response: UploadResponse, file: ObjectFile) => {
        const { formatter } = this.props;

        if (formatter) {
            response = formatter(response, file);
        }

        try {
            if (typeof response === 'string') {
                response = JSON.parse(response);
            }
        } catch (e) {
            e.code = errorCode.RESPONSE_FAIL;
            return this.onError(e, response, file);
        }

        if (response.success === false) {
            const err: UploadError = new Error(response.message || errorCode.RESPONSE_FAIL);
            err.code = errorCode.RESPONSE_FAIL;
            return this.onError(err, response, file);
        }

        const value = this.state.value;
        const targetItem = getFileItem(file, value);

        if (!targetItem) {
            return;
        }

        Object.assign(targetItem, {
            state: 'done',
            response,
            url: response.url,
            downloadURL: response.downloadURL || response.url, // 下载地址(可选)
        });

        if (!this.props.useDataURL) {
            targetItem.imgURL = response.imgURL || response.url; // 缩略图地址(可选)
        }

        this.updateUploadingState();

        this.onChange(value, targetItem);
        this.props.onSuccess!(targetItem, value);
    };

    onError = (err: UploadError, response: UploadResponse | null, file: ObjectFile) => {
        const value = this.state.value;
        const targetItem = getFileItem(file, value);

        if (!targetItem) {
            return;
        }

        Object.assign(targetItem, {
            state: 'error',
            error: err,
            response,
        });

        this.updateUploadingState();

        this.onChange(value, targetItem);
        this.props.onError!(targetItem as UploadError, value);
    };

    /**
     * 删除文件
     */
    removeFile = (file: UploadFile) => {
        file.state = 'removed';
        this.uploaderRef.abort(file); // 删除组件时调用组件的 `abort` 方法中断上传

        const fileList = this.state.value;
        const targetItem = getFileItem(file, fileList);
        const index = fileList.indexOf(targetItem);
        if (index !== -1) {
            fileList.splice(index, 1);
            this.onChange(fileList, targetItem);
        }
    };

    updateUploadingState = () => {
        const inProgress = this.state.value.some(i => i.state === 'uploading');
        if (!inProgress) {
            // @ts-expect-error 无法为“uploading”赋值，因为它是只读属性。
            this.state.uploading = false;
        }
    };

    /**
     * 取消上传
     */
    abort = (file: File) => {
        const fileList = this.state.value;
        const targetItem = getFileItem(file, fileList);
        const index = fileList.indexOf(targetItem);
        if (index !== -1) {
            fileList.splice(index, 1);
            this.onChange(fileList, targetItem);
        }
        this.uploaderRef.abort(file); // 取消上传时调用组件的 `abort` 方法中断上传
    };

    onChange = (value: Array<ObjectFile>, file: ObjectFile | Array<ObjectFile>) => {
        this.setState({
            value,
        });
        this.props.onChange!(value, file);
    };

    render() {
        const {
            listType,
            prefix,
            dragable,
            shape,
            className,
            style,
            useDataURL,
            disabled,
            limit,
            closable,
            beforeUpload,
            readonly,
            onRemove,
            onCancel,
            onPreview,
            list,
            extraRender,
            progressProps,
            rtl,
            isPreview,
            renderPreview,
            name,
            fileKeyName = name,
            fileNameRender,
            actionRender,
            previewOnFileName,
            ...others
        } = this.props;

        const cls = classNames({
            [`${prefix}upload`]: true,
            [`${prefix}upload-dragable`]: dragable,
            [`${prefix}disabled`]: disabled,
            [`${prefix}readonly`]: readonly,
            [className!]: className,
        });
        const isExceedLimit = this.state.value.length >= limit!;
        const innerCls = classNames({
            [`${prefix}upload-inner`]: true,
            [`${prefix}hidden`]: isExceedLimit,
        });

        let children = this.props.children;
        if (shape === 'card') {
            const cardCls = classNames({
                [`${prefix}upload-card`]: true,
                [`${prefix}disabled`]: disabled,
            });
            children = (
                <div className={cardCls}>
                    <Icon size="large" type="add" className={`${prefix}upload-add-icon`} />
                    <div tabIndex={0} role="button" className={`${prefix}upload-text`}>
                        {children}
                    </div>
                </div>
            );
        }

        if (isPreview) {
            if (typeof renderPreview === 'function') {
                const previewCls = classNames({
                    [`${prefix}form-preview`]: true,
                    [className!]: !!className,
                });
                return (
                    <div style={style} className={previewCls}>
                        {renderPreview(this.state.value, this.props)}
                    </div>
                );
            }

            if (listType) {
                return (
                    <List
                        isPreview
                        listType={listType}
                        style={style}
                        className={className}
                        value={this.state.value as UploadFile[]}
                        onPreview={onPreview}
                    />
                );
            }

            return null;
        }

        // disabled 状态下把 remove函数替换成禁止 remove的函数
        const onRemoveFunc = disabled ? func.prevent : onRemove;
        const otherAttributes = obj.pickAttrsWith(this.props, 'data-');
        return (
            <div className={cls} style={style} {...otherAttributes}>
                <Uploader
                    {...others}
                    name={fileKeyName}
                    beforeUpload={beforeUpload}
                    dragable={dragable}
                    disabled={disabled || isExceedLimit}
                    className={innerCls}
                    onSelect={this.onSelect}
                    onDrop={this.onDrop}
                    onProgress={this.onProgress}
                    onSuccess={this.onSuccess}
                    onError={this.onError}
                    ref={this.saveUploaderRef}
                >
                    {children}
                </Uploader>
                {(listType && listType !== 'none') || list ? (
                    <List
                        useDataURL={useDataURL}
                        fileNameRender={fileNameRender}
                        actionRender={actionRender}
                        uploader={this}
                        listType={listType}
                        value={this.state.value as UploadFile[]}
                        closable={closable}
                        onRemove={onRemoveFunc}
                        progressProps={progressProps}
                        onCancel={onCancel}
                        onPreview={onPreview}
                        extraRender={extraRender}
                        rtl={rtl}
                        previewOnFileName={previewOnFileName}
                    />
                ) : null}
            </div>
        );
    }
}

export default polyfill(Upload);
