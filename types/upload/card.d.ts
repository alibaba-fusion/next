import React from 'react';
import PropTypes from 'prop-types';
import Base from './base';
import Upload from './upload';
import type { CardProps, CardState, ObjectFile, UploadFile } from './types';
/**
 * Upload.Card
 * 继承 Upload 的 API，除非特别说明
 */
declare class Card extends Base<CardProps, CardState> {
    static displayName: string;
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        locale: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<object>;
        value: PropTypes.Requireable<object>;
        defaultValue: PropTypes.Requireable<object>;
        onPreview: PropTypes.Requireable<(...args: any[]) => any>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        onRemove: PropTypes.Requireable<(...args: any[]) => any>;
        onCancel: PropTypes.Requireable<(...args: any[]) => any>;
        itemRender: PropTypes.Requireable<(...args: any[]) => any>;
        reUpload: PropTypes.Requireable<boolean>;
        showDownload: PropTypes.Requireable<boolean>;
        onProgress: PropTypes.Requireable<(...args: any[]) => any>;
        isPreview: PropTypes.Requireable<boolean>;
        renderPreview: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        prefix: string;
        locale: Partial<{
            card: {
                cancel: string;
                addPhoto: string;
                download: string;
                delete: string;
            };
            drag: {
                text: string;
                hint: string;
            };
            upload: {
                delete: string;
            };
            image: {
                cancel: string;
                addPhoto: string;
                download: string;
                delete: string;
            };
        }> & {
            momentLocale?: string | undefined;
        };
        showDownload: boolean;
        onChange: () => void;
        onPreview: () => void;
        onProgress: () => void;
    };
    constructor(props: CardProps);
    uploaderRef: InstanceType<typeof Upload>;
    componentDidMount(): void;
    componentDidUpdate(): void;
    static getDerivedStateFromProps(
        nextProps: CardProps,
        prevState: CardState
    ): {
        value: ObjectFile[];
    } | null;
    onProgress: (value: UploadFile[], targetItem: UploadFile) => void;
    onChange: (value: Array<UploadFile>, file: UploadFile) => void;
    isUploading(): boolean;
    saveRef(ref: InstanceType<typeof Upload> | null): void;
    updateUploaderRef(uploaderRef: InstanceType<typeof Upload>): void;
    render(): React.JSX.Element;
}
declare const _default: typeof Card;
export default _default;
