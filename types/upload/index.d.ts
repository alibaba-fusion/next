import React, { Component } from 'react';
import Dragger from './dragger';
import Selecter from './runtime/selecter';
import Uploader from './runtime/uploader';
import type { CardProps, CoreProps, UploadFile } from './types';
export type {
    UploadProps,
    CardProps,
    SelecterProps,
    DraggerProps,
    UploadFile,
    UploadOptions,
    UploadError,
} from './types';
declare class Core extends Component<CoreProps> {
    uploader: Uploader;
    constructor(props: CoreProps);
    abort(): void;
    handleSelect: (files: UploadFile[]) => void;
    render(): React.JSX.Element;
}
declare const _default: import('../config-provider/types').ConfiguredComponentClass<
    import('./types').UploadProps & import('../config-provider/types').ComponentCommonProps,
    {
        onSelect: (files: UploadFile[]) => void;
        onDrop: (files: UploadFile[]) => void;
        selectFiles(files: File[]): void;
        uploadFiles(files: import('./types').ObjectFile[]): void;
        startUpload(): void;
        replaceFiles(old: import('./types').ObjectFile, current: UploadFile): void;
        replaceWithNewFile: (
            old: import('./types').ObjectFile,
            current: UploadFile
        ) => import('./types').ObjectFile;
        isUploading(): boolean;
        onProgress: (e: import('./types').UploadProgressEvent, file: UploadFile) => void;
        onSuccess: (response: import('./types').UploadResponse, file: UploadFile) => void;
        onError: (
            err: import('./types').UploadError,
            response: import('./types').UploadResponse | null,
            file?: import('./types').ObjectFile | undefined
        ) => void;
        removeFile: (file: UploadFile) => void;
        updateUploadingState: () => void;
        abort: (file: File) => void;
        onChange: (
            value: import('./types').ObjectFile[],
            file: import('./types').ObjectFile | import('./types').ObjectFile[]
        ) => void;
        render(): React.JSX.Element | null;
        uploaderRef: import('./types').UploaderRef;
        saveUploaderRef: (
            ref:
                | import('./types').UploaderRef
                | {
                      getInstance: () => import('./types').UploaderRef;
                  }
                | null
        ) => void;
        context: any;
        setState<K extends keyof import('./types').UploadState>(
            state:
                | import('./types').UploadState
                | ((
                      prevState: Readonly<import('./types').UploadState>,
                      props: Readonly<import('./types').UploadProps>
                  ) =>
                      | import('./types').UploadState
                      | Pick<import('./types').UploadState, K>
                      | null)
                | Pick<import('./types').UploadState, K>
                | null,
            callback?: (() => void) | undefined
        ): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import('./types').UploadProps> &
            Readonly<{
                children?: React.ReactNode;
            }>;
        state: Readonly<import('./types').UploadState>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(
            nextProps: Readonly<import('./types').UploadProps>,
            nextState: Readonly<import('./types').UploadState>,
            nextContext: any
        ): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(
            prevProps: Readonly<import('./types').UploadProps>,
            prevState: Readonly<import('./types').UploadState>
        ): any;
        componentDidUpdate?(
            prevProps: Readonly<import('./types').UploadProps>,
            prevState: Readonly<import('./types').UploadState>,
            snapshot?: any
        ): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(
            nextProps: Readonly<import('./types').UploadProps>,
            nextContext: any
        ): void;
        UNSAFE_componentWillReceiveProps?(
            nextProps: Readonly<import('./types').UploadProps>,
            nextContext: any
        ): void;
        componentWillUpdate?(
            nextProps: Readonly<import('./types').UploadProps>,
            nextState: Readonly<import('./types').UploadState>,
            nextContext: any
        ): void;
        UNSAFE_componentWillUpdate?(
            nextProps: Readonly<import('./types').UploadProps>,
            nextState: Readonly<import('./types').UploadState>,
            nextContext: any
        ): void;
    },
    {}
> & {
    Card: import('../config-provider/types').ConfiguredComponentClass<
        CardProps & import('../config-provider/types').ComponentCommonProps,
        {
            uploaderRef: {
                onSelect: (files: UploadFile[]) => void;
                onDrop: (files: UploadFile[]) => void;
                selectFiles(files: File[]): void;
                uploadFiles(files: import('./types').ObjectFile[]): void;
                startUpload(): void;
                replaceFiles(old: import('./types').ObjectFile, current: UploadFile): void;
                replaceWithNewFile: (
                    old: import('./types').ObjectFile,
                    current: UploadFile
                ) => import('./types').ObjectFile;
                isUploading(): boolean;
                onProgress: (e: import('./types').UploadProgressEvent, file: UploadFile) => void;
                onSuccess: (response: import('./types').UploadResponse, file: UploadFile) => void;
                onError: (
                    err: import('./types').UploadError,
                    response: import('./types').UploadResponse | null,
                    file?: import('./types').ObjectFile | undefined
                ) => void;
                removeFile: (file: UploadFile) => void;
                updateUploadingState: () => void;
                abort: (file: File) => void;
                onChange: (
                    value: import('./types').ObjectFile[],
                    file: import('./types').ObjectFile | import('./types').ObjectFile[]
                ) => void;
                render(): React.JSX.Element | null;
                uploaderRef: import('./types').UploaderRef;
                saveUploaderRef: (
                    ref:
                        | import('./types').UploaderRef
                        | {
                              getInstance: () => import('./types').UploaderRef;
                          }
                        | null
                ) => void;
                context: any;
                setState<K extends keyof import('./types').UploadState>(
                    state:
                        | import('./types').UploadState
                        | ((
                              prevState: Readonly<import('./types').UploadState>,
                              props: Readonly<import('./types').UploadProps>
                          ) =>
                              | import('./types').UploadState
                              | Pick<import('./types').UploadState, K>
                              | null)
                        | Pick<import('./types').UploadState, K>
                        | null,
                    callback?: (() => void) | undefined
                ): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import('./types').UploadProps> &
                    Readonly<{
                        children?: React.ReactNode;
                    }>;
                state: Readonly<import('./types').UploadState>;
                refs: {
                    [key: string]: React.ReactInstance;
                };
                componentDidMount?(): void;
                shouldComponentUpdate?(
                    nextProps: Readonly<import('./types').UploadProps>,
                    nextState: Readonly<import('./types').UploadState>,
                    nextContext: any
                ): boolean;
                componentWillUnmount?(): void;
                componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                getSnapshotBeforeUpdate?(
                    prevProps: Readonly<import('./types').UploadProps>,
                    prevState: Readonly<import('./types').UploadState>
                ): any;
                componentDidUpdate?(
                    prevProps: Readonly<import('./types').UploadProps>,
                    prevState: Readonly<import('./types').UploadState>,
                    snapshot?: any
                ): void;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(
                    nextProps: Readonly<import('./types').UploadProps>,
                    nextContext: any
                ): void;
                UNSAFE_componentWillReceiveProps?(
                    nextProps: Readonly<import('./types').UploadProps>,
                    nextContext: any
                ): void;
                componentWillUpdate?(
                    nextProps: Readonly<import('./types').UploadProps>,
                    nextState: Readonly<import('./types').UploadState>,
                    nextContext: any
                ): void;
                UNSAFE_componentWillUpdate?(
                    nextProps: Readonly<import('./types').UploadProps>,
                    nextState: Readonly<import('./types').UploadState>,
                    nextContext: any
                ): void;
            };
            componentDidMount(): void;
            componentDidUpdate(): void;
            onProgress: (value: UploadFile[], targetItem: UploadFile) => void;
            onChange: (value: UploadFile[], file: UploadFile) => void;
            isUploading(): boolean;
            saveRef(
                ref: {
                    onSelect: (files: UploadFile[]) => void;
                    onDrop: (files: UploadFile[]) => void;
                    selectFiles(files: File[]): void;
                    uploadFiles(files: import('./types').ObjectFile[]): void;
                    startUpload(): void;
                    replaceFiles(old: import('./types').ObjectFile, current: UploadFile): void;
                    replaceWithNewFile: (
                        old: import('./types').ObjectFile,
                        current: UploadFile
                    ) => import('./types').ObjectFile;
                    isUploading(): boolean;
                    onProgress: (
                        e: import('./types').UploadProgressEvent,
                        file: UploadFile
                    ) => void;
                    onSuccess: (
                        response: import('./types').UploadResponse,
                        file: UploadFile
                    ) => void;
                    onError: (
                        err: import('./types').UploadError,
                        response: import('./types').UploadResponse | null,
                        file?: import('./types').ObjectFile | undefined
                    ) => void;
                    removeFile: (file: UploadFile) => void;
                    updateUploadingState: () => void;
                    abort: (file: File) => void;
                    onChange: (
                        value: import('./types').ObjectFile[],
                        file: import('./types').ObjectFile | import('./types').ObjectFile[]
                    ) => void;
                    render(): React.JSX.Element | null;
                    uploaderRef: import('./types').UploaderRef;
                    saveUploaderRef: (
                        ref:
                            | import('./types').UploaderRef
                            | {
                                  getInstance: () => import('./types').UploaderRef;
                              }
                            | null
                    ) => void;
                    context: any;
                    setState<K extends keyof import('./types').UploadState>(
                        state:
                            | import('./types').UploadState
                            | ((
                                  prevState: Readonly<import('./types').UploadState>,
                                  props: Readonly<import('./types').UploadProps>
                              ) =>
                                  | import('./types').UploadState
                                  | Pick<import('./types').UploadState, K>
                                  | null)
                            | Pick<import('./types').UploadState, K>
                            | null,
                        callback?: (() => void) | undefined
                    ): void;
                    forceUpdate(callback?: (() => void) | undefined): void;
                    readonly props: Readonly<import('./types').UploadProps> &
                        Readonly<{
                            children?: React.ReactNode;
                        }>;
                    state: Readonly<import('./types').UploadState>;
                    refs: {
                        [key: string]: React.ReactInstance;
                    };
                    componentDidMount?(): void;
                    shouldComponentUpdate?(
                        nextProps: Readonly<import('./types').UploadProps>,
                        nextState: Readonly<import('./types').UploadState>,
                        nextContext: any
                    ): boolean;
                    componentWillUnmount?(): void;
                    componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                    getSnapshotBeforeUpdate?(
                        prevProps: Readonly<import('./types').UploadProps>,
                        prevState: Readonly<import('./types').UploadState>
                    ): any;
                    componentDidUpdate?(
                        prevProps: Readonly<import('./types').UploadProps>,
                        prevState: Readonly<import('./types').UploadState>,
                        snapshot?: any
                    ): void;
                    componentWillMount?(): void;
                    UNSAFE_componentWillMount?(): void;
                    componentWillReceiveProps?(
                        nextProps: Readonly<import('./types').UploadProps>,
                        nextContext: any
                    ): void;
                    UNSAFE_componentWillReceiveProps?(
                        nextProps: Readonly<import('./types').UploadProps>,
                        nextContext: any
                    ): void;
                    componentWillUpdate?(
                        nextProps: Readonly<import('./types').UploadProps>,
                        nextState: Readonly<import('./types').UploadState>,
                        nextContext: any
                    ): void;
                    UNSAFE_componentWillUpdate?(
                        nextProps: Readonly<import('./types').UploadProps>,
                        nextState: Readonly<import('./types').UploadState>,
                        nextContext: any
                    ): void;
                } | null
            ): void;
            updateUploaderRef(uploaderRef: {
                onSelect: (files: UploadFile[]) => void;
                onDrop: (files: UploadFile[]) => void;
                selectFiles(files: File[]): void;
                uploadFiles(files: import('./types').ObjectFile[]): void;
                startUpload(): void;
                replaceFiles(old: import('./types').ObjectFile, current: UploadFile): void;
                replaceWithNewFile: (
                    old: import('./types').ObjectFile,
                    current: UploadFile
                ) => import('./types').ObjectFile;
                isUploading(): boolean;
                onProgress: (e: import('./types').UploadProgressEvent, file: UploadFile) => void;
                onSuccess: (response: import('./types').UploadResponse, file: UploadFile) => void;
                onError: (
                    err: import('./types').UploadError,
                    response: import('./types').UploadResponse | null,
                    file?: import('./types').ObjectFile | undefined
                ) => void;
                removeFile: (file: UploadFile) => void;
                updateUploadingState: () => void;
                abort: (file: File) => void;
                onChange: (
                    value: import('./types').ObjectFile[],
                    file: import('./types').ObjectFile | import('./types').ObjectFile[]
                ) => void;
                render(): React.JSX.Element | null;
                uploaderRef: import('./types').UploaderRef;
                saveUploaderRef: (
                    ref:
                        | import('./types').UploaderRef
                        | {
                              getInstance: () => import('./types').UploaderRef;
                          }
                        | null
                ) => void;
                context: any;
                setState<K extends keyof import('./types').UploadState>(
                    state:
                        | import('./types').UploadState
                        | ((
                              prevState: Readonly<import('./types').UploadState>,
                              props: Readonly<import('./types').UploadProps>
                          ) =>
                              | import('./types').UploadState
                              | Pick<import('./types').UploadState, K>
                              | null)
                        | Pick<import('./types').UploadState, K>
                        | null,
                    callback?: (() => void) | undefined
                ): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import('./types').UploadProps> &
                    Readonly<{
                        children?: React.ReactNode;
                    }>;
                state: Readonly<import('./types').UploadState>;
                refs: {
                    [key: string]: React.ReactInstance;
                };
                componentDidMount?(): void;
                shouldComponentUpdate?(
                    nextProps: Readonly<import('./types').UploadProps>,
                    nextState: Readonly<import('./types').UploadState>,
                    nextContext: any
                ): boolean;
                componentWillUnmount?(): void;
                componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                getSnapshotBeforeUpdate?(
                    prevProps: Readonly<import('./types').UploadProps>,
                    prevState: Readonly<import('./types').UploadState>
                ): any;
                componentDidUpdate?(
                    prevProps: Readonly<import('./types').UploadProps>,
                    prevState: Readonly<import('./types').UploadState>,
                    snapshot?: any
                ): void;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(
                    nextProps: Readonly<import('./types').UploadProps>,
                    nextContext: any
                ): void;
                UNSAFE_componentWillReceiveProps?(
                    nextProps: Readonly<import('./types').UploadProps>,
                    nextContext: any
                ): void;
                componentWillUpdate?(
                    nextProps: Readonly<import('./types').UploadProps>,
                    nextState: Readonly<import('./types').UploadState>,
                    nextContext: any
                ): void;
                UNSAFE_componentWillUpdate?(
                    nextProps: Readonly<import('./types').UploadProps>,
                    nextState: Readonly<import('./types').UploadState>,
                    nextContext: any
                ): void;
            }): void;
            render(): React.JSX.Element;
            abort(file: File): void;
            startUpload(): void;
            saveUploaderRef: (
                ref:
                    | import('./types').UploaderRef
                    | {
                          getInstance: () => import('./types').UploaderRef;
                      }
                    | null
            ) => void;
            context: any;
            setState<K_1 extends keyof import('./types').CardState>(
                state:
                    | import('./types').CardState
                    | ((
                          prevState: Readonly<import('./types').CardState>,
                          props: Readonly<CardProps>
                      ) =>
                          | import('./types').CardState
                          | Pick<import('./types').CardState, K_1>
                          | null)
                    | Pick<import('./types').CardState, K_1>
                    | null,
                callback?: (() => void) | undefined
            ): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<CardProps> &
                Readonly<{
                    children?: React.ReactNode;
                }>;
            state: Readonly<import('./types').CardState>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            shouldComponentUpdate?(
                nextProps: Readonly<CardProps>,
                nextState: Readonly<import('./types').CardState>,
                nextContext: any
            ): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(
                prevProps: Readonly<CardProps>,
                prevState: Readonly<import('./types').CardState>
            ): any;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<CardProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(
                nextProps: Readonly<CardProps>,
                nextContext: any
            ): void;
            componentWillUpdate?(
                nextProps: Readonly<CardProps>,
                nextState: Readonly<import('./types').CardState>,
                nextContext: any
            ): void;
            UNSAFE_componentWillUpdate?(
                nextProps: Readonly<CardProps>,
                nextState: Readonly<import('./types').CardState>,
                nextContext: any
            ): void;
        },
        {}
    >;
    List: import('../config-provider/types').ConfiguredComponentClass<
        import('./types').ListProps & import('../config-provider/types').ComponentCommonProps,
        {
            componentDidUpdate(): void;
            handleClose: (file: import('./types').ObjectFile) => void;
            handleCancel: (file: import('./types').ObjectFile) => void;
            onImageError: (file: UploadFile, obj: import('./types').ImageError) => void;
            onPreview(file: UploadFile, e: React.MouseEvent<HTMLElement, MouseEvent>): void;
            getInfo(file: import('./types').ObjectFile): {
                prefixCls: string;
                downloadURL: string | undefined;
                imgURL: string | undefined;
                size: string | number;
                itemCls: string;
                alt: string | undefined;
            };
            sizeCaculator(size: string): string | 0;
            getTextList(file: import('./types').ObjectFile): React.JSX.Element;
            getImageList(file: import('./types').ObjectFile): React.JSX.Element;
            onSelect: (oldfile: UploadFile, files: UploadFile[]) => void;
            getPictureCardList(
                file: import('./types').ObjectFile,
                isPreview?: boolean | undefined
            ): React.JSX.Element;
            render(): React.JSX.Element;
            context: any;
            setState<K_2 extends never>(
                state:
                    | {}
                    | ((
                          prevState: Readonly<{}>,
                          props: Readonly<import('./types').ListProps>
                      ) => {} | Pick<{}, K_2> | null)
                    | Pick<{}, K_2>
                    | null,
                callback?: (() => void) | undefined
            ): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import('./types').ListProps> &
                Readonly<{
                    children?: React.ReactNode;
                }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(
                nextProps: Readonly<import('./types').ListProps>,
                nextState: Readonly<{}>,
                nextContext: any
            ): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(
                prevProps: Readonly<import('./types').ListProps>,
                prevState: Readonly<{}>
            ): any;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(
                nextProps: Readonly<import('./types').ListProps>,
                nextContext: any
            ): void;
            UNSAFE_componentWillReceiveProps?(
                nextProps: Readonly<import('./types').ListProps>,
                nextContext: any
            ): void;
            componentWillUpdate?(
                nextProps: Readonly<import('./types').ListProps>,
                nextState: Readonly<{}>,
                nextContext: any
            ): void;
            UNSAFE_componentWillUpdate?(
                nextProps: Readonly<import('./types').ListProps>,
                nextState: Readonly<{}>,
                nextContext: any
            ): void;
        },
        {}
    >;
    Dragger: import('../config-provider/types').ConfiguredComponentClass<
        import('./types').DraggerProps & import('../config-provider/types').ComponentCommonProps,
        Dragger,
        {}
    >;
    Selecter: typeof Selecter;
    Uploader: typeof Uploader;
    ErrorCode: {
        EXCEED_LIMIT: string;
        BEFOREUPLOAD_REJECT: string;
        RESPONSE_FAIL: string;
    };
    ImageUpload: import('../config-provider/types').ConfiguredComponentClass<
        CardProps & import('../config-provider/types').ComponentCommonProps,
        {
            uploaderRef: {
                onSelect: (files: UploadFile[]) => void;
                onDrop: (files: UploadFile[]) => void;
                selectFiles(files: File[]): void;
                uploadFiles(files: import('./types').ObjectFile[]): void;
                startUpload(): void;
                replaceFiles(old: import('./types').ObjectFile, current: UploadFile): void;
                replaceWithNewFile: (
                    old: import('./types').ObjectFile,
                    current: UploadFile
                ) => import('./types').ObjectFile;
                isUploading(): boolean;
                onProgress: (e: import('./types').UploadProgressEvent, file: UploadFile) => void;
                onSuccess: (response: import('./types').UploadResponse, file: UploadFile) => void;
                onError: (
                    err: import('./types').UploadError,
                    response: import('./types').UploadResponse | null,
                    file?: import('./types').ObjectFile | undefined
                ) => void;
                removeFile: (file: UploadFile) => void;
                updateUploadingState: () => void;
                abort: (file: File) => void;
                onChange: (
                    value: import('./types').ObjectFile[],
                    file: import('./types').ObjectFile | import('./types').ObjectFile[]
                ) => void;
                render(): React.JSX.Element | null;
                uploaderRef: import('./types').UploaderRef;
                saveUploaderRef: (
                    ref:
                        | import('./types').UploaderRef
                        | {
                              getInstance: () => import('./types').UploaderRef;
                          }
                        | null
                ) => void;
                context: any;
                setState<K extends keyof import('./types').UploadState>(
                    state:
                        | import('./types').UploadState
                        | ((
                              prevState: Readonly<import('./types').UploadState>,
                              props: Readonly<import('./types').UploadProps>
                          ) =>
                              | import('./types').UploadState
                              | Pick<import('./types').UploadState, K>
                              | null)
                        | Pick<import('./types').UploadState, K>
                        | null,
                    callback?: (() => void) | undefined
                ): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import('./types').UploadProps> &
                    Readonly<{
                        children?: React.ReactNode;
                    }>;
                state: Readonly<import('./types').UploadState>;
                refs: {
                    [key: string]: React.ReactInstance;
                };
                componentDidMount?(): void;
                shouldComponentUpdate?(
                    nextProps: Readonly<import('./types').UploadProps>,
                    nextState: Readonly<import('./types').UploadState>,
                    nextContext: any
                ): boolean;
                componentWillUnmount?(): void;
                componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                getSnapshotBeforeUpdate?(
                    prevProps: Readonly<import('./types').UploadProps>,
                    prevState: Readonly<import('./types').UploadState>
                ): any;
                componentDidUpdate?(
                    prevProps: Readonly<import('./types').UploadProps>,
                    prevState: Readonly<import('./types').UploadState>,
                    snapshot?: any
                ): void;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(
                    nextProps: Readonly<import('./types').UploadProps>,
                    nextContext: any
                ): void;
                UNSAFE_componentWillReceiveProps?(
                    nextProps: Readonly<import('./types').UploadProps>,
                    nextContext: any
                ): void;
                componentWillUpdate?(
                    nextProps: Readonly<import('./types').UploadProps>,
                    nextState: Readonly<import('./types').UploadState>,
                    nextContext: any
                ): void;
                UNSAFE_componentWillUpdate?(
                    nextProps: Readonly<import('./types').UploadProps>,
                    nextState: Readonly<import('./types').UploadState>,
                    nextContext: any
                ): void;
            };
            componentDidMount(): void;
            componentDidUpdate(): void;
            onProgress: (value: UploadFile[], targetItem: UploadFile) => void;
            onChange: (value: UploadFile[], file: UploadFile) => void;
            isUploading(): boolean;
            saveRef(
                ref: {
                    onSelect: (files: UploadFile[]) => void;
                    onDrop: (files: UploadFile[]) => void;
                    selectFiles(files: File[]): void;
                    uploadFiles(files: import('./types').ObjectFile[]): void;
                    startUpload(): void;
                    replaceFiles(old: import('./types').ObjectFile, current: UploadFile): void;
                    replaceWithNewFile: (
                        old: import('./types').ObjectFile,
                        current: UploadFile
                    ) => import('./types').ObjectFile;
                    isUploading(): boolean;
                    onProgress: (
                        e: import('./types').UploadProgressEvent,
                        file: UploadFile
                    ) => void;
                    onSuccess: (
                        response: import('./types').UploadResponse,
                        file: UploadFile
                    ) => void;
                    onError: (
                        err: import('./types').UploadError,
                        response: import('./types').UploadResponse | null,
                        file?: import('./types').ObjectFile | undefined
                    ) => void;
                    removeFile: (file: UploadFile) => void;
                    updateUploadingState: () => void;
                    abort: (file: File) => void;
                    onChange: (
                        value: import('./types').ObjectFile[],
                        file: import('./types').ObjectFile | import('./types').ObjectFile[]
                    ) => void;
                    render(): React.JSX.Element | null;
                    uploaderRef: import('./types').UploaderRef;
                    saveUploaderRef: (
                        ref:
                            | import('./types').UploaderRef
                            | {
                                  getInstance: () => import('./types').UploaderRef;
                              }
                            | null
                    ) => void;
                    context: any;
                    setState<K extends keyof import('./types').UploadState>(
                        state:
                            | import('./types').UploadState
                            | ((
                                  prevState: Readonly<import('./types').UploadState>,
                                  props: Readonly<import('./types').UploadProps>
                              ) =>
                                  | import('./types').UploadState
                                  | Pick<import('./types').UploadState, K>
                                  | null)
                            | Pick<import('./types').UploadState, K>
                            | null,
                        callback?: (() => void) | undefined
                    ): void;
                    forceUpdate(callback?: (() => void) | undefined): void;
                    readonly props: Readonly<import('./types').UploadProps> &
                        Readonly<{
                            children?: React.ReactNode;
                        }>;
                    state: Readonly<import('./types').UploadState>;
                    refs: {
                        [key: string]: React.ReactInstance;
                    };
                    componentDidMount?(): void;
                    shouldComponentUpdate?(
                        nextProps: Readonly<import('./types').UploadProps>,
                        nextState: Readonly<import('./types').UploadState>,
                        nextContext: any
                    ): boolean;
                    componentWillUnmount?(): void;
                    componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                    getSnapshotBeforeUpdate?(
                        prevProps: Readonly<import('./types').UploadProps>,
                        prevState: Readonly<import('./types').UploadState>
                    ): any;
                    componentDidUpdate?(
                        prevProps: Readonly<import('./types').UploadProps>,
                        prevState: Readonly<import('./types').UploadState>,
                        snapshot?: any
                    ): void;
                    componentWillMount?(): void;
                    UNSAFE_componentWillMount?(): void;
                    componentWillReceiveProps?(
                        nextProps: Readonly<import('./types').UploadProps>,
                        nextContext: any
                    ): void;
                    UNSAFE_componentWillReceiveProps?(
                        nextProps: Readonly<import('./types').UploadProps>,
                        nextContext: any
                    ): void;
                    componentWillUpdate?(
                        nextProps: Readonly<import('./types').UploadProps>,
                        nextState: Readonly<import('./types').UploadState>,
                        nextContext: any
                    ): void;
                    UNSAFE_componentWillUpdate?(
                        nextProps: Readonly<import('./types').UploadProps>,
                        nextState: Readonly<import('./types').UploadState>,
                        nextContext: any
                    ): void;
                } | null
            ): void;
            updateUploaderRef(uploaderRef: {
                onSelect: (files: UploadFile[]) => void;
                onDrop: (files: UploadFile[]) => void;
                selectFiles(files: File[]): void;
                uploadFiles(files: import('./types').ObjectFile[]): void;
                startUpload(): void;
                replaceFiles(old: import('./types').ObjectFile, current: UploadFile): void;
                replaceWithNewFile: (
                    old: import('./types').ObjectFile,
                    current: UploadFile
                ) => import('./types').ObjectFile;
                isUploading(): boolean;
                onProgress: (e: import('./types').UploadProgressEvent, file: UploadFile) => void;
                onSuccess: (response: import('./types').UploadResponse, file: UploadFile) => void;
                onError: (
                    err: import('./types').UploadError,
                    response: import('./types').UploadResponse | null,
                    file?: import('./types').ObjectFile | undefined
                ) => void;
                removeFile: (file: UploadFile) => void;
                updateUploadingState: () => void;
                abort: (file: File) => void;
                onChange: (
                    value: import('./types').ObjectFile[],
                    file: import('./types').ObjectFile | import('./types').ObjectFile[]
                ) => void;
                render(): React.JSX.Element | null;
                uploaderRef: import('./types').UploaderRef;
                saveUploaderRef: (
                    ref:
                        | import('./types').UploaderRef
                        | {
                              getInstance: () => import('./types').UploaderRef;
                          }
                        | null
                ) => void;
                context: any;
                setState<K extends keyof import('./types').UploadState>(
                    state:
                        | import('./types').UploadState
                        | ((
                              prevState: Readonly<import('./types').UploadState>,
                              props: Readonly<import('./types').UploadProps>
                          ) =>
                              | import('./types').UploadState
                              | Pick<import('./types').UploadState, K>
                              | null)
                        | Pick<import('./types').UploadState, K>
                        | null,
                    callback?: (() => void) | undefined
                ): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import('./types').UploadProps> &
                    Readonly<{
                        children?: React.ReactNode;
                    }>;
                state: Readonly<import('./types').UploadState>;
                refs: {
                    [key: string]: React.ReactInstance;
                };
                componentDidMount?(): void;
                shouldComponentUpdate?(
                    nextProps: Readonly<import('./types').UploadProps>,
                    nextState: Readonly<import('./types').UploadState>,
                    nextContext: any
                ): boolean;
                componentWillUnmount?(): void;
                componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                getSnapshotBeforeUpdate?(
                    prevProps: Readonly<import('./types').UploadProps>,
                    prevState: Readonly<import('./types').UploadState>
                ): any;
                componentDidUpdate?(
                    prevProps: Readonly<import('./types').UploadProps>,
                    prevState: Readonly<import('./types').UploadState>,
                    snapshot?: any
                ): void;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(
                    nextProps: Readonly<import('./types').UploadProps>,
                    nextContext: any
                ): void;
                UNSAFE_componentWillReceiveProps?(
                    nextProps: Readonly<import('./types').UploadProps>,
                    nextContext: any
                ): void;
                componentWillUpdate?(
                    nextProps: Readonly<import('./types').UploadProps>,
                    nextState: Readonly<import('./types').UploadState>,
                    nextContext: any
                ): void;
                UNSAFE_componentWillUpdate?(
                    nextProps: Readonly<import('./types').UploadProps>,
                    nextState: Readonly<import('./types').UploadState>,
                    nextContext: any
                ): void;
            }): void;
            render(): React.JSX.Element;
            abort(file: File): void;
            startUpload(): void;
            saveUploaderRef: (
                ref:
                    | import('./types').UploaderRef
                    | {
                          getInstance: () => import('./types').UploaderRef;
                      }
                    | null
            ) => void;
            context: any;
            setState<K_1 extends keyof import('./types').CardState>(
                state:
                    | import('./types').CardState
                    | ((
                          prevState: Readonly<import('./types').CardState>,
                          props: Readonly<CardProps>
                      ) =>
                          | import('./types').CardState
                          | Pick<import('./types').CardState, K_1>
                          | null)
                    | Pick<import('./types').CardState, K_1>
                    | null,
                callback?: (() => void) | undefined
            ): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<CardProps> &
                Readonly<{
                    children?: React.ReactNode;
                }>;
            state: Readonly<import('./types').CardState>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            shouldComponentUpdate?(
                nextProps: Readonly<CardProps>,
                nextState: Readonly<import('./types').CardState>,
                nextContext: any
            ): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(
                prevProps: Readonly<CardProps>,
                prevState: Readonly<import('./types').CardState>
            ): any;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<CardProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(
                nextProps: Readonly<CardProps>,
                nextContext: any
            ): void;
            componentWillUpdate?(
                nextProps: Readonly<CardProps>,
                nextState: Readonly<import('./types').CardState>,
                nextContext: any
            ): void;
            UNSAFE_componentWillUpdate?(
                nextProps: Readonly<CardProps>,
                nextState: Readonly<import('./types').CardState>,
                nextContext: any
            ): void;
        },
        {}
    >;
    DragUpload: import('../config-provider/types').ConfiguredComponentClass<
        import('./types').DraggerProps & import('../config-provider/types').ComponentCommonProps,
        Dragger,
        {}
    >;
    Core: typeof Core;
    CropUpload: () => null;
};
export default _default;
