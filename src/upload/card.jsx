import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';

import zhCN from '../locale/zh-cn.js';
import { func, obj } from '../util';
import Base from './base';
import List from './list';
import Upload from './upload';

/**
 * Upload.Card
 * @description 继承 Upload 的 API，除非特别说明
 */
class Card extends Base {
    static displayName = 'Card';

    static propTypes = {
        prefix: PropTypes.string,
        locale: PropTypes.object,
        children: PropTypes.object,
        value: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
        defaultValue: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
        /**
         * 点击图片回调
         */
        onPreview: PropTypes.func,
        /**
         * 改变时候的回调
         */
        onChange: PropTypes.func,
        /**
         * 点击移除的回调
         */
        onRemove: PropTypes.func,
        /**
         * 取消上传的回调
         */
        onCancel: PropTypes.func,
        /**
         * 自定义成功和失败的列表渲染方式
         * @version 1.21
         */
        itemRender: PropTypes.func,
        /**
         * 支持上传出错后重新上传
         * @version 1.24
         */
        reUpload: PropTypes.bool,
        /**
         * 上传中
         */
        onProgress: PropTypes.func,
        isPreview: PropTypes.bool,
        renderPreview: PropTypes.func,
    };

    static defaultProps = {
        prefix: 'next-',
        locale: zhCN.Upload,
        onChange: func.noop,
        onPreview: func.noop,
        onProgress: func.noop,
    };

    constructor(props) {
        super(props);

        let value;
        /* istanbul ignore else */
        if ('value' in props) {
            value = props.value;
        } else {
            value = props.defaultValue;
        }

        this.state = {
            value: !Array.isArray(value) ? [] : value,
            uploaderRef: this.uploaderRef,
        };
    }
    /* eslint react/no-did-mount-set-state: [0] */
    componentDidMount() {
        this.setState({ uploaderRef: this.uploaderRef });
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const isUploading = prevState.uploaderRef && prevState.uploaderRef.isUploading();
        if ('value' in nextProps && nextProps.value !== prevState.value && !isUploading) {
            return {
                value: !Array.isArray(nextProps.value) ? [] : [].concat(nextProps.value),
            };
        }

        return null;
    }

    onProgress = (value, targetItem) => {
        this.setState({
            value,
        });

        this.props.onProgress(value, targetItem);
    };

    onChange = (value, file) => {
        if (!('value' in this.props)) {
            this.setState({
                value,
            });
        }
        this.props.onChange(value, file);
    };

    isUploading() {
        return this.state.uploaderRef.isUploading();
    }

    saveRef(ref) {
        this.saveUploaderRef(ref);
    }

    render() {
        const {
            action,
            disabled,
            prefix,
            locale,
            className,
            style,
            limit,
            onPreview,
            onRemove,
            onCancel,
            timeout,
            isPreview,
            renderPreview,
            itemRender,
            reUpload,
        } = this.props;

        const isExceedLimit = this.state.value.length >= limit;
        const uploadButtonCls = classNames({
            [`${prefix}upload-list-item`]: true,
            [`${prefix}hidden`]: isExceedLimit,
        });

        const children = this.props.children || locale.card.addPhoto;

        const onRemoveFunc = disabled ? func.prevent : onRemove;
        const othersForList = obj.pickOthers(Card.propTypes, this.props);
        const othersForUpload = obj.pickOthers(List.propTypes, othersForList);

        if (isPreview) {
            if (typeof renderPreview === 'function') {
                const previewCls = classNames({
                    [`${prefix}form-preview`]: true,
                    [className]: !!className,
                });
                return (
                    <div style={style} className={previewCls}>
                        {renderPreview(this.state.value, this.props)}
                    </div>
                );
            }
        }

        return (
            <List
                className={className}
                style={style}
                listType="card"
                closable
                locale={locale}
                value={this.state.value}
                onRemove={onRemoveFunc}
                onCancel={onCancel}
                onPreview={onPreview}
                itemRender={itemRender}
                isPreview={isPreview}
                uploader={this.state.uploaderRef}
                disabled={disabled}
                reUpload={reUpload}
                {...othersForList}
            >
                <Upload
                    {...othersForUpload}
                    shape="card"
                    prefix={prefix}
                    disabled={disabled}
                    action={action}
                    timeout={timeout}
                    isPreview={isPreview}
                    value={this.state.value}
                    onProgress={this.onProgress}
                    onChange={this.onChange}
                    ref={ref => this.saveRef(ref)}
                    className={uploadButtonCls}
                >
                    {children}
                </Upload>
            </List>
        );
    }
}

export default polyfill(Card);
