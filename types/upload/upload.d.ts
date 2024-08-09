import React from 'react';
import PropTypes from 'prop-types';
import Base from './base';
import type {
    ObjectFile,
    UploadError,
    UploadFile,
    UploadProgressEvent,
    UploadProps,
    UploadResponse,
    UploadState,
} from './types';
declare class Upload extends Base<UploadProps, UploadState> {
    static displayName: string;
    static propTypes: {
        prefix: PropTypes.Validator<string>;
        action: PropTypes.Requireable<string>;
        value: PropTypes.Requireable<any[]>;
        defaultValue: PropTypes.Requireable<any[]>;
        shape: PropTypes.Requireable<string>;
        listType: PropTypes.Requireable<string>;
        list: PropTypes.Requireable<any>;
        name: PropTypes.Requireable<string>;
        data: PropTypes.Requireable<object>;
        formatter: PropTypes.Requireable<(...args: any[]) => any>;
        limit: PropTypes.Requireable<number>;
        timeout: PropTypes.Requireable<number>;
        dragable: PropTypes.Requireable<boolean>;
        closable: PropTypes.Requireable<boolean>;
        useDataURL: PropTypes.Requireable<boolean>;
        disabled: PropTypes.Requireable<boolean>;
        onSelect: PropTypes.Requireable<(...args: any[]) => any>;
        onProgress: PropTypes.Requireable<(...args: any[]) => any>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        onSuccess: PropTypes.Requireable<(...args: any[]) => any>;
        afterSelect: PropTypes.Requireable<(...args: any[]) => any>;
        onRemove: PropTypes.Requireable<(...args: any[]) => any>;
        onError: PropTypes.Requireable<(...args: any[]) => any>;
        beforeUpload: PropTypes.Requireable<(...args: any[]) => any>;
        onDrop: PropTypes.Requireable<(...args: any[]) => any>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        autoUpload: PropTypes.Requireable<boolean>;
        request: PropTypes.Requireable<(...args: any[]) => any>;
        progressProps: PropTypes.Requireable<object>;
        rtl: PropTypes.Requireable<boolean>;
        isPreview: PropTypes.Requireable<boolean>;
        renderPreview: PropTypes.Requireable<(...args: any[]) => any>;
        fileKeyName: PropTypes.Requireable<string>;
        fileNameRender: PropTypes.Requireable<(...args: any[]) => any>;
        actionRender: PropTypes.Requireable<(...args: any[]) => any>;
        previewOnFileName: PropTypes.Requireable<boolean>;
        reUpload?: React.Validator<boolean | null | undefined> | undefined;
        onCancel?:
            | React.Validator<((file?: ObjectFile | undefined) => void) | null | undefined>
            | undefined;
        onImageError?:
            | React.Validator<((obj: object, file: UploadFile) => void) | null | undefined>
            | undefined;
        onPreview?:
            | React.Validator<
                  | ((
                        file: UploadFile,
                        e?: React.MouseEvent<HTMLElement, MouseEvent> | undefined
                    ) => void)
                  | null
                  | undefined
              >
            | undefined;
        extraRender?: React.Validator<((file: ObjectFile) => void) | null | undefined> | undefined;
        itemRender?:
            | React.Validator<
                  | ((
                        file: ObjectFile,
                        action?:
                            | {
                                  remove: () => void;
                              }
                            | undefined
                    ) => void)
                  | null
                  | undefined
              >
            | undefined;
        showDownload?: React.Validator<boolean | null | undefined> | undefined;
        uploader?:
            | React.Validator<
                  | {
                        removeFile: (file: ObjectFile) => void;
                        abort: (file: ObjectFile) => void;
                        replaceWithNewFile: (oldfile: UploadFile, newfile: UploadFile) => void;
                        props: {
                            accept?: string | undefined;
                            fileKeyName?: string | undefined;
                        };
                    }
                  | null
                  | undefined
              >
            | undefined;
        locale?:
            | React.Validator<
                  | (Partial<{
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
                    } & import('../locale/types').ComponentLocaleObject)
                  | null
                  | undefined
              >
            | undefined;
        id: React.Validator<string | null | undefined>;
        pure?: React.Validator<boolean | null | undefined> | undefined;
        device?:
            | React.Validator<import('../config-provider/types').DeviceType | null | undefined>
            | undefined;
        errorBoundary?:
            | React.Validator<
                  import('../config-provider/types').ErrorBoundaryType | null | undefined
              >
            | undefined;
        warning?: React.Validator<boolean | null | undefined> | undefined;
        accept: PropTypes.Requireable<string>;
        headers: PropTypes.Requireable<object>;
        withCredentials: PropTypes.Requireable<boolean>;
        method: PropTypes.Requireable<string>;
        multiple: PropTypes.Requireable<boolean>;
        webkitdirectory: PropTypes.Requireable<boolean>;
        capture: PropTypes.Requireable<string>;
        onDragOver: PropTypes.Requireable<(...args: any[]) => any>;
        onDragLeave: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        prefix: string;
        limit: number;
        autoUpload: boolean;
        closable: boolean;
        onSelect: () => void;
        onProgress: () => void;
        onChange: () => void;
        onSuccess: () => void;
        onRemove: () => void;
        onError: () => void;
        onDrop: () => void;
        beforeUpload: () => void;
        afterSelect: () => void;
        previewOnFileName: boolean;
        name: string;
        multiple: boolean;
        withCredentials: boolean;
        onDragOver: () => void;
        onDragLeave: () => void;
        onAbort: () => void;
        method: string;
    };
    constructor(props: UploadProps);
    static getDerivedStateFromProps(
        nextProps: UploadProps,
        prevState: UploadState
    ): {
        value: ObjectFile[];
    } | null;
    onSelect: (files: Array<UploadFile>) => void;
    onDrop: (files: UploadFile[]) => void;
    /**
     * 对外暴露 API, 添加文件
     */
    selectFiles(files: File[]): void;
    uploadFiles(files: ObjectFile[]): void;
    /**
     * 对外暴露 api，控制文件上传
     */
    startUpload(): void;
    replaceFiles(old: ObjectFile, current: UploadFile): void;
    replaceWithNewFile: (old: ObjectFile, current: UploadFile) => ObjectFile;
    isUploading(): boolean;
    onProgress: (e: UploadProgressEvent, file: UploadFile) => void;
    onSuccess: (response: UploadResponse, file: UploadFile) => void;
    onError: (err: UploadError, response: UploadResponse | null, file?: ObjectFile) => void;
    /**
     * 删除文件
     */
    removeFile: (file: UploadFile) => void;
    updateUploadingState: () => void;
    /**
     * 取消上传
     */
    abort: (file: File) => void;
    onChange: (value: Array<ObjectFile>, file: ObjectFile | Array<ObjectFile>) => void;
    render(): React.JSX.Element | null;
}
declare const _default: typeof Upload;
export default _default;
