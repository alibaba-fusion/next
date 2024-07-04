import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';

import zhCN from '../locale/zh-cn';
import { func, obj } from '../util';
import Base from './base';
import List from './list';
import Upload from './upload';
import type { CardProps, CardState, ObjectFile, UploadFile } from './types';

/**
 * Upload.Card
 * 继承 Upload 的 API，除非特别说明
 */
class Card extends Base<CardProps, CardState> {
    static displayName = 'Card';

    static propTypes = {
        prefix: PropTypes.string,
        locale: PropTypes.object,
        children: PropTypes.object,
        value: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
        defaultValue: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
        onPreview: PropTypes.func,
        onChange: PropTypes.func,
        onRemove: PropTypes.func,
        onCancel: PropTypes.func,
        itemRender: PropTypes.func,
        reUpload: PropTypes.bool,
        showDownload: PropTypes.bool,
        onProgress: PropTypes.func,
        isPreview: PropTypes.bool,
        renderPreview: PropTypes.func,
    };

    static defaultProps = {
        prefix: 'next-',
        locale: zhCN.Upload,
        showDownload: true,
        onChange: func.noop,
        onPreview: func.noop,
        onProgress: func.noop,
    };

    constructor(props: CardProps) {
        super(props);

        let value;
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

    uploaderRef: InstanceType<typeof Upload>;

    componentDidMount() {
        this.updateUploaderRef(this.uploaderRef);
    }

    componentDidUpdate() {
        const { uploaderRef } = this.state;
        if (!uploaderRef && this.uploaderRef) {
            this.updateUploaderRef(this.uploaderRef);
        }
    }

    static getDerivedStateFromProps(nextProps: CardProps, prevState: CardState) {
        const isUploading = prevState.uploaderRef && prevState.uploaderRef.isUploading();
        if ('value' in nextProps && nextProps.value !== prevState.value && !isUploading) {
            return {
                value: !Array.isArray(nextProps.value)
                    ? []
                    : ([] as ObjectFile[]).concat(nextProps.value),
            };
        }

        return null;
    }

    onProgress = (value: UploadFile[], targetItem: UploadFile) => {
        this.setState({
            value,
        });

        this.props.onProgress!(value, targetItem);
    };

    onChange = (value: Array<UploadFile>, file: UploadFile) => {
        if (!('value' in this.props)) {
            this.setState({
                value,
            });
        }
        this.props.onChange!(value, file);
    };

    isUploading() {
        return this.uploaderRef.isUploading();
    }

    saveRef(ref: InstanceType<typeof Upload> | null) {
        this.saveUploaderRef(ref);
    }

    updateUploaderRef(uploaderRef: InstanceType<typeof Upload>) {
        this.setState({ uploaderRef });
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
            showDownload,
        } = this.props;

        const isExceedLimit = this.state.value.length >= limit!;
        const uploadButtonCls = classNames({
            [`${prefix}upload-list-item`]: true,
            [`${prefix}hidden`]: isExceedLimit,
        });

        const children = this.props.children || locale!.card!.addPhoto;

        const onRemoveFunc = disabled ? func.prevent : onRemove;
        const othersForList = obj.pickOthers(Card.propTypes, this.props);
        const othersForUpload = obj.pickOthers(List.propTypes!, othersForList);

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
        }

        return (
            <List
                className={className}
                style={style}
                listType="card"
                closable
                locale={locale}
                value={this.state.value as UploadFile[]}
                onRemove={onRemoveFunc}
                onCancel={onCancel}
                onPreview={onPreview}
                itemRender={itemRender}
                isPreview={isPreview}
                uploader={this.uploaderRef}
                reUpload={reUpload}
                showDownload={showDownload}
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
