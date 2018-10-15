import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Progress from '../progress';
import Icon from '../icon';
import Button from '../button';
import {func, obj, KEYCODE} from '../util';
import zhCN from '../locale/zh-cn.js';
import {previewFile} from './util';

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
         * listType=card时点击图片回调
         */
        onPreview: PropTypes.func,
        /**
         * 自定义额外渲染
         */
        extraRender: PropTypes.func,
        children: PropTypes.node,
        uploader: PropTypes.any,
        useDataURL: PropTypes.bool,
    };

    static defaultProps = {
        prefix: 'next-',
        listType: 'text',
        value: [],
        locale: zhCN.Upload,
        closable: false,
        onRemove: func.noop,
        onCancel: func.noop,
        extraRender: func.noop,
        onImageError: func.noop,
        onPreview: func.noop,
    };

    componentDidUpdate() {
        if (this.props.listType !== 'image' && this.props.listType !== 'card') {
            return;
        }

        this.props.useDataURL && this.props.value.forEach(file => {
            if (typeof document === 'undefined' || typeof window === 'undefined' || !window.FileReader || !window.File || !(file.originFileObj instanceof File) || file.imgURL !== undefined) {
                return;
            }
            file.imgURL = '';
            previewFile(file.originFileObj, (previewDataUrl) => {
                file.imgURL = previewDataUrl;
                this.forceUpdate();
            });
        });
    }

    handleClose = (file) => {
        const {onRemove, uploader} = this.props;

        const remove = onRemove(file);

        func.promiseCall(remove, () => {
            uploader && uploader.removeFile(file);
        });
    };

    handleCancel = (file) => {
        const {onCancel, uploader} = this.props;
        const cancel = onCancel(file);

        func.promiseCall(cancel, () => {
            uploader && uploader.abort(file);
        });
    };

    onImageError = (file, obj) => {
        obj.onerror = null;
        this.props.onImageError(obj, file);
    };

    onPreview = (file, e) => {
        this.props.onPreview(file, e);
    };

    getInfo(file) {
        const prefixCls = `${this.props.prefix}upload`;
        const downloadURL = file.downloadURL || file.url;
        const imgURL = file.imgURL || file.url;
        const size = this.sizeCaculator(file.size);
        const itemCls = classNames({
            [`${prefixCls}-list-item`]: true,
            [`${prefixCls}-list-item-${file.state}`]: file.state
        });
        const alt = file.name || file.alt;
        return {prefixCls, downloadURL, imgURL, size, itemCls, alt};
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
        const {extraRender} = this.props;

        const {prefixCls, downloadURL, size, itemCls} = this.getInfo(file);
        const onClick = () => file.state === 'uploading' ? this.handleCancel(file) : this.handleClose(file);
        const onKeyDown = (e) => {
            if (e.keyCode === KEYCODE.ENTER) {
                onClick();
            }
        };
        return (
            <div className={itemCls} key={file.uid || file.name}>
                <div>
                    <a href={downloadURL} target="_blank" style={{pointerEvents: downloadURL ? '' : 'none'}}
                        className={`${prefixCls}-list-item-name`}>
                        <span>{file.name}</span>
                        {!!size && <span className={`${prefixCls}-list-item-size`}>({size})</span>}
                    </a>
                    {file.state === 'uploading' ?
                        <div className={`${prefixCls}-list-item-progress`}>
                            <Progress size="medium" percent={file.percent} textRender={func.noop}/>
                        </div> : null}

                    <span className={`${prefixCls}-extra`}>{extraRender(file)}</span>

                </div>

                {this.props.closable ?
                    <Icon type="close"
                        size="large"
                        role="button"
                        tabIndex="0"
                        onClick={onClick}
                        onKeyDown={onKeyDown}/> : null
                }
            </div>
        );
    }

    getImageList(file) {
        const {extraRender} = this.props;

        const {prefixCls, downloadURL, imgURL, size, itemCls, alt} = this.getInfo(file);

        let img = null;

        const onClick = () => file.state === 'uploading' ? this.handleCancel(file) : this.handleClose(file);
        const onKeyDown = (e) => {
            if (e.keyCode === KEYCODE.ENTER) {
                onClick();
            }
        };

        if (file.state === 'uploading' || (file.state === 'selected' && !imgURL)) {
            img = (<Icon type="picture"/>);
        } else if (file.state === 'error') {
            img = (<Icon type="cry"/>);
        } else {
            img = (<img src={imgURL} onError={this.onImageError.bind(this, file)} tabIndex="0" alt={alt} onClick={this.onPreview.bind(this, file)}/>);
        }

        return (
            <div className={itemCls} key={file.uid || file.name}>
                <div className={`${prefixCls}-list-item-thumbnail`}>
                    {img}
                </div>
                {file.state !== 'uploading' ? <a href={downloadURL} target="_blank" style={{pointerEvents: downloadURL ? '' : 'none'}} className={`${prefixCls}-list-item-name`}>
                    <span>{file.name}</span>
                    {!!size && <span className={`${prefixCls}-list-item-size`}>({size})</span>}
                </a> : null}
                {file.state === 'uploading' ? <div className={`${prefixCls}-list-item-progress`}>
                    <Progress size="medium" percent={file.percent} textRender={func.noop}/>
                </div> : null}
                <span className={`${prefixCls}-extra`}>{extraRender(file)}</span>
                {this.props.closable ? <Icon type="close" size="large" tabIndex="0" role="button" onClick={onClick} onKeyDown={onKeyDown}/> : null}
            </div>
        );
    }

    getPictureCardList(file) {
        const {locale} = this.props;

        const {prefixCls, downloadURL, imgURL, itemCls, alt} = this.getInfo(file);

        let img = null;

        if (file.state === 'uploading' || (file.state === 'selected' && !imgURL)) {
            img = (
                <div className={`${prefixCls}-list-item-handler`}>
                    <Icon type="picture"/>
                    <Button text onClick={() => this.handleCancel(file)} >
                        {locale.card.cancel}
                    </Button>
                </div>
            );
        } else if (file.state === 'error') {
            img = (
                <div className={`${prefixCls}-list-item-handler`}>
                    <Icon type="cry"/>
                </div>
            );
        } else {
            img = (<img src={imgURL} tabIndex="0" alt={alt} onError={this.onImageError.bind(this, file)} onClick={this.onPreview.bind(this, file)}/>);
        }

        const onClose = () => this.handleClose(file);
        const onKeyDownClose = (e) => {
            if (e.keyCode === KEYCODE.ENTER) {
                onClose();
            }
        };
        return (
            <div className={itemCls} key={file.uid || file.name}>
                <div className={`${prefixCls}-list-item-wrapper`}>
                    <div className={`${prefixCls}-list-item-thumbnail`}>
                        {img}
                    </div>
                    {file.state === 'uploading' ?
                        <div className={`${prefixCls}-list-item-progress`}>
                            <Progress size="medium" percent={file.percent} textRender={func.noop}/>
                        </div> : null
                    }
                    {file.state !== 'uploading' ? (
                        <span className={`${prefixCls}-tool ${!this.props.closable ? '`${prefixCls}-noclose' : ''}`}>
                            <a href={downloadURL} target="_blank" tabIndex={downloadURL ? '0' : '-1'} style={{pointerEvents: downloadURL ? '' : 'none'}}>
                                <Icon type={downloadURL ? 'download' : ''} className={`${prefixCls}-tool-download-icon`}/>
                            </a>

                            {this.props.closable ?
                                <span className={`${prefixCls}-tool-close`}>
                                    <Icon type="ashbin" tabIndex="0" role="button" onClick={onClose} onKeyDown={onKeyDownClose}/>
                                </span> : null
                            }
                        </span>
                    ) : ''}
                </div>

                <span className={`${prefixCls}-list-item-name`}>{file.name}</span>
            </div>
        );
    }

    render() {
        const {listType, children, prefix} = this.props;
        const prefixCls = `${prefix}upload`;

        const list = this.props.value.map((file) => {
            if (listType === 'text') {
                return this.getTextList(file);
            } else if (listType === 'image') {
                return this.getImageList(file);
            } else if (listType === 'card') {
                return this.getPictureCardList(file);
            }
            return null;
        });
        const listclassNames = classNames({
            [`${prefixCls}-list`]: true,
            [`${prefixCls}-list-${this.props.listType}`]: true
        });

        const others = obj.pickAttrsWith(this.props, 'data-');
        return (
            <div {...others} className={listclassNames}  >
                {list}
                {children}
            </div>
        );
    }
}

export default List;
