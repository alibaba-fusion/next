import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {func, obj} from '../util';
import Icon from '../icon';
import Base from './base';
import Uploader from './runtime/index';
import html5Uploader from './runtime/html5-uploader';
import List from './list';
import {fileToObject, getFileItem} from './util';

const noop = func.noop;

/**
 * Upload
 */
class Upload extends Base {
    static displayName = 'Upload';

    static propTypes = {
        ...html5Uploader.propTypes,
        ...List.propTypes,
        /**
         * 样式前缀
         */
        prefix: PropTypes.string.isRequired,
        /**
         * 上传的地址
         */
        action: PropTypes.string,
        /**
         * 文件列表
         */
        value: PropTypes.array,
        /**
         * 默认文件列表
         */
        defaultValue: PropTypes.array,
        /**
         * 上传按钮形状
         */
        shape: PropTypes.oneOf(['card']),
        /**
         * 上传列表的样式
         * @enumdesc 文字, 图文, 卡片
         */
        listType: PropTypes.oneOf(['text', 'image', 'card']),
        list: PropTypes.any,
        /**
         * 上传额外传参
         */
        data: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
        /**
         * 数据格式化函数，配合自定义 action 使用，参数为服务器的响应数据，详见 [formatter](#formater)
         * @param {String} response 返回
         * @param {File} file 文件对象
         */
        formatter: PropTypes.func,
        /**
         * 最大文件上传个数
         */
        limit: PropTypes.number,
        /**
         * 设置上传超时,单位ms
         */
        timeout: PropTypes.number,
        /**
         * 可选参数，是否支持拖拽上传，`ie10+` 支持。
         */
        dragable: PropTypes.bool,
        closable: PropTypes.bool,
        useDataURL: PropTypes.bool,
        /**
         * 可选参数，是否禁用上传功能
         */
        disabled: PropTypes.bool,
        /**
         * 选择文件回调
         */
        onSelect: PropTypes.func,
        /**
         * 上传中
         */
        onProgress: PropTypes.func,
        /**
         * 上传文件改变时的状态
         * @param {Object} info 文件事件对象
         */
        onChange: PropTypes.func,
        /**
         * 可选参数，上传成功回调函数，参数为请求下响应信息以及文件
         */
        onSuccess: PropTypes.func,
        /**
         * 移除文件回调函数，详见 [onRemove](#onRemove)
         */
        onRemove: PropTypes.func,
        /**
         * 可选参数，上传失败回调函数，参数为上传失败的信息、响应信息以及文件
         */
        onError: PropTypes.func,
        /**
         * 可选参数, 详见 [beforeUpload](#beforeUpload)
         * @param {Object} files
         * @param {Object} options
         * @returns {Boolean|Object|Promise}
         */
        beforeUpload: PropTypes.func,
        /**
         * 放文件
         */
        onDrop: PropTypes.func,
        /**
         * 自定义class
         */
        className: PropTypes.string,
        /**
         * 自定义内联样式
         */
        style: PropTypes.object,
        /**
         * 子元素
         */
        children: PropTypes.node,
        /**
         * 自动上传
         */
        autoUpload: PropTypes.bool,
        /**
         * 可选参数, 用于校验文件,afterSelect仅在 autoUpload=false 的时候生效,autoUpload=true时,可以使用beforeUpload完全可以替代该功能.
         * @param {Object} file
         * @returns {Boolean} 返回false会阻止上传,其他则表示正常
         */
        afterSelect: PropTypes.func,
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
    };

    constructor(props) {
        super(props);

        let value;
        if ('value' in props) {
            value = props.value;
        } else {
            value = props.defaultValue;
        }

        this.state = {
            value: typeof value === 'undefined' ? [] : [].concat(value)
        };

        this.uploading = false;
    }

    componentWillReceiveProps(nextProps) {
        if ('value' in nextProps && !this.uploading) {
            this.setState({
                value: typeof nextProps.value === 'undefined' ? [] : [].concat(nextProps.value)
            });
        }
    }

    onSelect = (files) => {
        const {autoUpload, afterSelect, onSelect, limit} = this.props;

        const fileList = files.map(file => {
            const objFile = fileToObject(file);
            objFile.state = 'selected';
            return objFile;
        });

        const total = this.state.value.length + fileList.length;

        if (total > limit) {
            const more = total - limit;
            fileList.splice(fileList.length - more, more);
        }

        const value = this.state.value.concat(fileList);

        /* eslint-disable-next */
        this.state.value = value;


        if (autoUpload) {
            this.uploadFiles(fileList);
        }

        onSelect(fileList, value);

        if (!autoUpload) {
            fileList.forEach(file => {
                const isPassed = afterSelect(file);
                func.promiseCall(isPassed, func.noop, error => {
                    this.onError(error, null, file); //TODO: handle error message
                });
            });
            this.onChange(value, fileList);
        }
    };

    onDrop = (files) => {
        this.onSelect(files);
    };

    /**
     * 对外暴露API, 添加文件
     * @param files
     */
    selectFiles(files) {
        const filesArr = files.length ? Array.prototype.slice.call(files) : [files];

        this.onSelect(filesArr);
    }

    uploadFiles(files) {
        const fileList = files.filter((file => {
            if (file.state === 'selected') {
                file.state = 'uploading';
                return true;
            }
            return false;
        })).map((file) => {
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

    replaceFiles(old, current) {
        const targetItem = getFileItem(old, this.state.value);
        if (!targetItem) {
            return;
        }

        current.uid = old.uid;
        targetItem.originFileObj = current;
    }

    isUploading() {
        return this.uploading;
    }

    onProgress = (e, file) => {
        this.uploading = true;

        const value = this.state.value;
        const targetItem = getFileItem(file, value);

        if (!targetItem) {
            return;
        }

        Object.assign(targetItem, {
            state: 'uploading',
            percent: e.percent
        });

        this.setState({
            value,
        });

        this.props.onProgress(value, targetItem);
    };

    onSuccess = (response, file) => {
        this.uploading = false;

        const {formatter} = this.props;

        if (formatter) {
            response = formatter(response, file);
        }

        try {
            if (typeof response === 'string') {
                response = JSON.parse(response);
            }
        } catch (e) {
            this.onError(e, response, file);
            return;
        }

        if (response.success === false) {
            return this.onError(response.message, response, file);
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
            downloadURL: response.downloadURL || response.url,      // 下载地址(可选)
        });

        if (!this.props.useDataURL) {
            targetItem.imgURL = response.imgURL || response.url;     // 缩略图地址(可选)
        }

        this.props.onSuccess(targetItem, value);
        this.onChange(value, targetItem);
    };

    onError = (err, response, file) => {
        this.uploading = false;

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

        this.props.onError(targetItem, value);
        this.onChange(value, targetItem);
    };


    /**
     * 删除文件
     * @param {File} file
     * @return {void}
     */
    removeFile = (file) => {
        file.state = 'removed';
        this.uploaderRef.abort(file);     // 删除组件时调用组件的 `abort` 方法中断上传

        const fileList = this.state.value;
        const targetItem = getFileItem(file, fileList);
        const index = fileList.indexOf(targetItem);
        if (index !== -1) {
            fileList.splice(index, 1);
            this.onChange(fileList, targetItem);
        }
    };

    /**
     * 取消上传
     * @param {File} file
     * @return {void}
     */
    abort = (file) => {
        const fileList = this.state.value;
        const targetItem = getFileItem(file, fileList);
        const index = fileList.indexOf(targetItem);
        if (index !== -1) {
            fileList.splice(index, 1);
            this.onChange(fileList, targetItem);
        }
        this.uploaderRef.abort(file);     // 取消上传时调用组件的 `abort` 方法中断上传
    };

    onChange = (value, file) => {
        // not controlled
        // if (!('value' in this.props)) {
        //     this.setState({
        //         value
        //     });
        // }
        this.setState({
            value
        });
        this.props.onChange(value, file);
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
            ...others} = this.props;

        const cls = classNames({
            [`${prefix}upload`]: true,
            [`${prefix}disabled`]: disabled,
            [`${prefix}readonly`]: readonly,
            [className]: className
        });

        const hidden = this.state.value.length >= limit;
        const innerCls = classNames({
            [`${prefix}upload-inner`]: true,
            [`${prefix}hidden`]: hidden,
        });

        let children = this.props.children;
        if (shape === 'card') {
            const cardCls = classNames({
                [`${prefix}upload-card`]: true,
                [`${prefix}disabled`]: disabled,
            });
            children = (<div className={cardCls}>
                <Icon type="add" size="large"/>
                <div tabIndex="0" role="button" className={`${prefix}upload-text`}>
                    {children}
                </div>
            </div>);
        }

        const otherAttributes = obj.pickAttrsWith(this.props, 'data-');
        return (
            <div className={cls} style={style} {...otherAttributes}>
                <Uploader
                    {...others}
                    beforeUpload={beforeUpload}
                    dragable={dragable}
                    disabled={disabled}
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
                {listType || list ?
                    <List useDataURL={useDataURL} uploader={this} listType={listType} value={this.state.value}
                        closable={closable} onRemove={onRemove}
                        onCancel={onCancel} onPreview={onPreview} extraRender={extraRender}/> :
                    null}
            </div>
        );
    }
}

export default Upload;
