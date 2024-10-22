/// <reference types="react" />
declare const Upload: import("../../config-provider/types").ConfiguredComponentClass<import("../types").UploadProps & import("../../config-provider/types").ComponentCommonProps, {
    onSelect: (files: import("../types").UploadFile[]) => void;
    onDrop: (files: import("../types").UploadFile[]) => void;
    selectFiles(files: File[]): void;
    uploadFiles(files: import("../types").ObjectFile[]): void;
    startUpload(): void;
    replaceFiles(old: import("../types").ObjectFile, current: import("../types").UploadFile): void;
    replaceWithNewFile: (old: import("../types").ObjectFile, current: import("../types").UploadFile) => import("../types").ObjectFile;
    isUploading(): boolean;
    onProgress: (e: import("../types").UploadProgressEvent, file: import("../types").UploadFile) => void;
    onSuccess: (response: import("../types").UploadResponse, file: import("../types").UploadFile) => void;
    onError: (err: import("../types").UploadError, response: import("../types").UploadResponse | null, file?: import("../types").ObjectFile | undefined) => void;
    removeFile: (file: import("../types").UploadFile) => void;
    updateUploadingState: () => void;
    abort: (file: File) => void;
    onChange: (value: import("../types").ObjectFile[], file: import("../types").ObjectFile | import("../types").ObjectFile[]) => void;
    render(): import("react").JSX.Element | null;
    uploaderRef: import("../types").UploaderRef;
    saveUploaderRef: (ref: import("../types").UploaderRef | {
        getInstance: () => import("../types").UploaderRef;
    } | null) => void;
    context: any;
    setState<K extends keyof import("../types").UploadState>(state: import("../types").UploadState | ((prevState: Readonly<import("../types").UploadState>, props: Readonly<import("../types").UploadProps>) => import("../types").UploadState | Pick<import("../types").UploadState, K> | null) | Pick<import("../types").UploadState, K> | null, callback?: (() => void) | undefined): void;
    forceUpdate(callback?: (() => void) | undefined): void;
    readonly props: Readonly<import("../types").UploadProps> & Readonly<{
        children?: import("react").ReactNode;
    }>;
    state: Readonly<import("../types").UploadState>;
    refs: {
        [key: string]: import("react").ReactInstance;
    };
    componentDidMount?(): void;
    shouldComponentUpdate?(nextProps: Readonly<import("../types").UploadProps>, nextState: Readonly<import("../types").UploadState>, nextContext: any): boolean;
    componentWillUnmount?(): void;
    componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
    getSnapshotBeforeUpdate?(prevProps: Readonly<import("../types").UploadProps>, prevState: Readonly<import("../types").UploadState>): any;
    componentDidUpdate?(prevProps: Readonly<import("../types").UploadProps>, prevState: Readonly<import("../types").UploadState>, snapshot?: any): void;
    componentWillMount?(): void;
    UNSAFE_componentWillMount?(): void;
    componentWillReceiveProps?(nextProps: Readonly<import("../types").UploadProps>, nextContext: any): void;
    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../types").UploadProps>, nextContext: any): void;
    componentWillUpdate?(nextProps: Readonly<import("../types").UploadProps>, nextState: Readonly<import("../types").UploadState>, nextContext: any): void;
    UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../types").UploadProps>, nextState: Readonly<import("../types").UploadState>, nextContext: any): void;
}, {}> & {
    Card: import("../../config-provider/types").ConfiguredComponentClass<import("../types").CardProps & import("../../config-provider/types").ComponentCommonProps, {
        uploaderRef: {
            onSelect: (files: import("../types").UploadFile[]) => void;
            onDrop: (files: import("../types").UploadFile[]) => void;
            selectFiles(files: File[]): void;
            uploadFiles(files: import("../types").ObjectFile[]): void;
            startUpload(): void;
            replaceFiles(old: import("../types").ObjectFile, current: import("../types").UploadFile): void;
            replaceWithNewFile: (old: import("../types").ObjectFile, current: import("../types").UploadFile) => import("../types").ObjectFile;
            isUploading(): boolean;
            onProgress: (e: import("../types").UploadProgressEvent, file: import("../types").UploadFile) => void;
            onSuccess: (response: import("../types").UploadResponse, file: import("../types").UploadFile) => void;
            onError: (err: import("../types").UploadError, response: import("../types").UploadResponse | null, file?: import("../types").ObjectFile | undefined) => void;
            removeFile: (file: import("../types").UploadFile) => void;
            updateUploadingState: () => void;
            abort: (file: File) => void;
            onChange: (value: import("../types").ObjectFile[], file: import("../types").ObjectFile | import("../types").ObjectFile[]) => void;
            render(): import("react").JSX.Element | null;
            uploaderRef: import("../types").UploaderRef;
            saveUploaderRef: (ref: import("../types").UploaderRef | {
                getInstance: () => import("../types").UploaderRef;
            } | null) => void;
            context: any;
            setState<K extends keyof import("../types").UploadState>(state: import("../types").UploadState | ((prevState: Readonly<import("../types").UploadState>, props: Readonly<import("../types").UploadProps>) => import("../types").UploadState | Pick<import("../types").UploadState, K> | null) | Pick<import("../types").UploadState, K> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import("../types").UploadProps> & Readonly<{
                children?: import("react").ReactNode;
            }>;
            state: Readonly<import("../types").UploadState>;
            refs: {
                [key: string]: import("react").ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<import("../types").UploadProps>, nextState: Readonly<import("../types").UploadState>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("../types").UploadProps>, prevState: Readonly<import("../types").UploadState>): any;
            componentDidUpdate?(prevProps: Readonly<import("../types").UploadProps>, prevState: Readonly<import("../types").UploadState>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("../types").UploadProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../types").UploadProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("../types").UploadProps>, nextState: Readonly<import("../types").UploadState>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../types").UploadProps>, nextState: Readonly<import("../types").UploadState>, nextContext: any): void;
        };
        componentDidMount(): void;
        componentDidUpdate(): void;
        onProgress: (value: import("../types").UploadFile[], targetItem: import("../types").UploadFile) => void;
        onChange: (value: import("../types").UploadFile[], file: import("../types").UploadFile) => void;
        isUploading(): boolean;
        saveRef(ref: {
            onSelect: (files: import("../types").UploadFile[]) => void;
            onDrop: (files: import("../types").UploadFile[]) => void;
            selectFiles(files: File[]): void;
            uploadFiles(files: import("../types").ObjectFile[]): void;
            startUpload(): void;
            replaceFiles(old: import("../types").ObjectFile, current: import("../types").UploadFile): void;
            replaceWithNewFile: (old: import("../types").ObjectFile, current: import("../types").UploadFile) => import("../types").ObjectFile;
            isUploading(): boolean;
            onProgress: (e: import("../types").UploadProgressEvent, file: import("../types").UploadFile) => void;
            onSuccess: (response: import("../types").UploadResponse, file: import("../types").UploadFile) => void;
            onError: (err: import("../types").UploadError, response: import("../types").UploadResponse | null, file?: import("../types").ObjectFile | undefined) => void;
            removeFile: (file: import("../types").UploadFile) => void;
            updateUploadingState: () => void;
            abort: (file: File) => void;
            onChange: (value: import("../types").ObjectFile[], file: import("../types").ObjectFile | import("../types").ObjectFile[]) => void;
            render(): import("react").JSX.Element | null;
            uploaderRef: import("../types").UploaderRef;
            saveUploaderRef: (ref: import("../types").UploaderRef | {
                getInstance: () => import("../types").UploaderRef;
            } | null) => void;
            context: any;
            setState<K extends keyof import("../types").UploadState>(state: import("../types").UploadState | ((prevState: Readonly<import("../types").UploadState>, props: Readonly<import("../types").UploadProps>) => import("../types").UploadState | Pick<import("../types").UploadState, K> | null) | Pick<import("../types").UploadState, K> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import("../types").UploadProps> & Readonly<{
                children?: import("react").ReactNode;
            }>;
            state: Readonly<import("../types").UploadState>;
            refs: {
                [key: string]: import("react").ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<import("../types").UploadProps>, nextState: Readonly<import("../types").UploadState>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("../types").UploadProps>, prevState: Readonly<import("../types").UploadState>): any;
            componentDidUpdate?(prevProps: Readonly<import("../types").UploadProps>, prevState: Readonly<import("../types").UploadState>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("../types").UploadProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../types").UploadProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("../types").UploadProps>, nextState: Readonly<import("../types").UploadState>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../types").UploadProps>, nextState: Readonly<import("../types").UploadState>, nextContext: any): void;
        } | null): void;
        updateUploaderRef(uploaderRef: {
            onSelect: (files: import("../types").UploadFile[]) => void;
            onDrop: (files: import("../types").UploadFile[]) => void;
            selectFiles(files: File[]): void;
            uploadFiles(files: import("../types").ObjectFile[]): void;
            startUpload(): void;
            replaceFiles(old: import("../types").ObjectFile, current: import("../types").UploadFile): void;
            replaceWithNewFile: (old: import("../types").ObjectFile, current: import("../types").UploadFile) => import("../types").ObjectFile;
            isUploading(): boolean;
            onProgress: (e: import("../types").UploadProgressEvent, file: import("../types").UploadFile) => void;
            onSuccess: (response: import("../types").UploadResponse, file: import("../types").UploadFile) => void;
            onError: (err: import("../types").UploadError, response: import("../types").UploadResponse | null, file?: import("../types").ObjectFile | undefined) => void;
            removeFile: (file: import("../types").UploadFile) => void;
            updateUploadingState: () => void;
            abort: (file: File) => void;
            onChange: (value: import("../types").ObjectFile[], file: import("../types").ObjectFile | import("../types").ObjectFile[]) => void;
            render(): import("react").JSX.Element | null;
            uploaderRef: import("../types").UploaderRef;
            saveUploaderRef: (ref: import("../types").UploaderRef | {
                getInstance: () => import("../types").UploaderRef;
            } | null) => void;
            context: any;
            setState<K extends keyof import("../types").UploadState>(state: import("../types").UploadState | ((prevState: Readonly<import("../types").UploadState>, props: Readonly<import("../types").UploadProps>) => import("../types").UploadState | Pick<import("../types").UploadState, K> | null) | Pick<import("../types").UploadState, K> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import("../types").UploadProps> & Readonly<{
                children?: import("react").ReactNode;
            }>;
            state: Readonly<import("../types").UploadState>;
            refs: {
                [key: string]: import("react").ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<import("../types").UploadProps>, nextState: Readonly<import("../types").UploadState>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("../types").UploadProps>, prevState: Readonly<import("../types").UploadState>): any;
            componentDidUpdate?(prevProps: Readonly<import("../types").UploadProps>, prevState: Readonly<import("../types").UploadState>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("../types").UploadProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../types").UploadProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("../types").UploadProps>, nextState: Readonly<import("../types").UploadState>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../types").UploadProps>, nextState: Readonly<import("../types").UploadState>, nextContext: any): void;
        }): void;
        render(): import("react").JSX.Element;
        abort(file: File): void;
        startUpload(): void;
        saveUploaderRef: (ref: import("../types").UploaderRef | {
            getInstance: () => import("../types").UploaderRef;
        } | null) => void;
        context: any;
        setState<K_1 extends keyof import("../types").CardState>(state: import("../types").CardState | ((prevState: Readonly<import("../types").CardState>, props: Readonly<import("../types").CardProps>) => import("../types").CardState | Pick<import("../types").CardState, K_1> | null) | Pick<import("../types").CardState, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("../types").CardProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<import("../types").CardState>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<import("../types").CardProps>, nextState: Readonly<import("../types").CardState>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("../types").CardProps>, prevState: Readonly<import("../types").CardState>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("../types").CardProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../types").CardProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("../types").CardProps>, nextState: Readonly<import("../types").CardState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../types").CardProps>, nextState: Readonly<import("../types").CardState>, nextContext: any): void;
    }, {}>;
    List: import("../../config-provider/types").ConfiguredComponentClass<import("../types").ListProps & import("../../config-provider/types").ComponentCommonProps, {
        componentDidUpdate(): void;
        handleClose: (file: import("../types").ObjectFile) => void;
        handleCancel: (file: import("../types").ObjectFile) => void;
        onImageError: (file: import("../types").UploadFile, obj: import("../types").ImageError) => void;
        onPreview(file: import("../types").UploadFile, e: import("react").MouseEvent<HTMLElement, MouseEvent>): void;
        getInfo(file: import("../types").ObjectFile): {
            prefixCls: string;
            downloadURL: string | undefined;
            imgURL: string | undefined;
            size: string | number;
            itemCls: string;
            alt: string | undefined;
        };
        sizeCaculator(size: string): string | 0;
        getTextList(file: import("../types").ObjectFile): import("react").JSX.Element;
        getImageList(file: import("../types").ObjectFile): import("react").JSX.Element;
        onSelect: (oldfile: import("../types").UploadFile, files: import("../types").UploadFile[]) => void;
        getPictureCardList(file: import("../types").ObjectFile, isPreview?: boolean | undefined): import("react").JSX.Element;
        render(): import("react").JSX.Element;
        context: any;
        setState<K_2 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("../types").ListProps>) => {} | Pick<{}, K_2> | null) | Pick<{}, K_2> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("../types").ListProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<import("../types").ListProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("../types").ListProps>, prevState: Readonly<{}>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("../types").ListProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../types").ListProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("../types").ListProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../types").ListProps>, nextState: Readonly<{}>, nextContext: any): void;
    }, {}>;
    Dragger: import("../../config-provider/types").ConfiguredComponentClass<import("../types").DraggerProps & import("../../config-provider/types").ComponentCommonProps, import("../dragger").default, {}>;
    Selecter: typeof import("../runtime/selecter").default;
    Uploader: typeof import("../runtime/uploader").default;
    ErrorCode: {
        EXCEED_LIMIT: string;
        BEFOREUPLOAD_REJECT: string;
        RESPONSE_FAIL: string;
    };
    ImageUpload: import("../../config-provider/types").ConfiguredComponentClass<import("../types").CardProps & import("../../config-provider/types").ComponentCommonProps, {
        uploaderRef: {
            onSelect: (files: import("../types").UploadFile[]) => void;
            onDrop: (files: import("../types").UploadFile[]) => void;
            selectFiles(files: File[]): void;
            uploadFiles(files: import("../types").ObjectFile[]): void;
            startUpload(): void;
            replaceFiles(old: import("../types").ObjectFile, current: import("../types").UploadFile): void;
            replaceWithNewFile: (old: import("../types").ObjectFile, current: import("../types").UploadFile) => import("../types").ObjectFile;
            isUploading(): boolean;
            onProgress: (e: import("../types").UploadProgressEvent, file: import("../types").UploadFile) => void;
            onSuccess: (response: import("../types").UploadResponse, file: import("../types").UploadFile) => void;
            onError: (err: import("../types").UploadError, response: import("../types").UploadResponse | null, file?: import("../types").ObjectFile | undefined) => void;
            removeFile: (file: import("../types").UploadFile) => void;
            updateUploadingState: () => void;
            abort: (file: File) => void;
            onChange: (value: import("../types").ObjectFile[], file: import("../types").ObjectFile | import("../types").ObjectFile[]) => void;
            render(): import("react").JSX.Element | null;
            uploaderRef: import("../types").UploaderRef;
            saveUploaderRef: (ref: import("../types").UploaderRef | {
                getInstance: () => import("../types").UploaderRef;
            } | null) => void;
            context: any;
            setState<K extends keyof import("../types").UploadState>(state: import("../types").UploadState | ((prevState: Readonly<import("../types").UploadState>, props: Readonly<import("../types").UploadProps>) => import("../types").UploadState | Pick<import("../types").UploadState, K> | null) | Pick<import("../types").UploadState, K> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import("../types").UploadProps> & Readonly<{
                children?: import("react").ReactNode;
            }>;
            state: Readonly<import("../types").UploadState>;
            refs: {
                [key: string]: import("react").ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<import("../types").UploadProps>, nextState: Readonly<import("../types").UploadState>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("../types").UploadProps>, prevState: Readonly<import("../types").UploadState>): any;
            componentDidUpdate?(prevProps: Readonly<import("../types").UploadProps>, prevState: Readonly<import("../types").UploadState>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("../types").UploadProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../types").UploadProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("../types").UploadProps>, nextState: Readonly<import("../types").UploadState>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../types").UploadProps>, nextState: Readonly<import("../types").UploadState>, nextContext: any): void;
        };
        componentDidMount(): void;
        componentDidUpdate(): void;
        onProgress: (value: import("../types").UploadFile[], targetItem: import("../types").UploadFile) => void;
        onChange: (value: import("../types").UploadFile[], file: import("../types").UploadFile) => void;
        isUploading(): boolean;
        saveRef(ref: {
            onSelect: (files: import("../types").UploadFile[]) => void;
            onDrop: (files: import("../types").UploadFile[]) => void;
            selectFiles(files: File[]): void;
            uploadFiles(files: import("../types").ObjectFile[]): void;
            startUpload(): void;
            replaceFiles(old: import("../types").ObjectFile, current: import("../types").UploadFile): void;
            replaceWithNewFile: (old: import("../types").ObjectFile, current: import("../types").UploadFile) => import("../types").ObjectFile;
            isUploading(): boolean;
            onProgress: (e: import("../types").UploadProgressEvent, file: import("../types").UploadFile) => void;
            onSuccess: (response: import("../types").UploadResponse, file: import("../types").UploadFile) => void;
            onError: (err: import("../types").UploadError, response: import("../types").UploadResponse | null, file?: import("../types").ObjectFile | undefined) => void;
            removeFile: (file: import("../types").UploadFile) => void;
            updateUploadingState: () => void;
            abort: (file: File) => void;
            onChange: (value: import("../types").ObjectFile[], file: import("../types").ObjectFile | import("../types").ObjectFile[]) => void;
            render(): import("react").JSX.Element | null;
            uploaderRef: import("../types").UploaderRef;
            saveUploaderRef: (ref: import("../types").UploaderRef | {
                getInstance: () => import("../types").UploaderRef;
            } | null) => void;
            context: any;
            setState<K extends keyof import("../types").UploadState>(state: import("../types").UploadState | ((prevState: Readonly<import("../types").UploadState>, props: Readonly<import("../types").UploadProps>) => import("../types").UploadState | Pick<import("../types").UploadState, K> | null) | Pick<import("../types").UploadState, K> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import("../types").UploadProps> & Readonly<{
                children?: import("react").ReactNode;
            }>;
            state: Readonly<import("../types").UploadState>;
            refs: {
                [key: string]: import("react").ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<import("../types").UploadProps>, nextState: Readonly<import("../types").UploadState>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("../types").UploadProps>, prevState: Readonly<import("../types").UploadState>): any;
            componentDidUpdate?(prevProps: Readonly<import("../types").UploadProps>, prevState: Readonly<import("../types").UploadState>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("../types").UploadProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../types").UploadProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("../types").UploadProps>, nextState: Readonly<import("../types").UploadState>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../types").UploadProps>, nextState: Readonly<import("../types").UploadState>, nextContext: any): void;
        } | null): void;
        updateUploaderRef(uploaderRef: {
            onSelect: (files: import("../types").UploadFile[]) => void;
            onDrop: (files: import("../types").UploadFile[]) => void;
            selectFiles(files: File[]): void;
            uploadFiles(files: import("../types").ObjectFile[]): void;
            startUpload(): void;
            replaceFiles(old: import("../types").ObjectFile, current: import("../types").UploadFile): void;
            replaceWithNewFile: (old: import("../types").ObjectFile, current: import("../types").UploadFile) => import("../types").ObjectFile;
            isUploading(): boolean;
            onProgress: (e: import("../types").UploadProgressEvent, file: import("../types").UploadFile) => void;
            onSuccess: (response: import("../types").UploadResponse, file: import("../types").UploadFile) => void;
            onError: (err: import("../types").UploadError, response: import("../types").UploadResponse | null, file?: import("../types").ObjectFile | undefined) => void;
            removeFile: (file: import("../types").UploadFile) => void;
            updateUploadingState: () => void;
            abort: (file: File) => void;
            onChange: (value: import("../types").ObjectFile[], file: import("../types").ObjectFile | import("../types").ObjectFile[]) => void;
            render(): import("react").JSX.Element | null;
            uploaderRef: import("../types").UploaderRef;
            saveUploaderRef: (ref: import("../types").UploaderRef | {
                getInstance: () => import("../types").UploaderRef;
            } | null) => void;
            context: any;
            setState<K extends keyof import("../types").UploadState>(state: import("../types").UploadState | ((prevState: Readonly<import("../types").UploadState>, props: Readonly<import("../types").UploadProps>) => import("../types").UploadState | Pick<import("../types").UploadState, K> | null) | Pick<import("../types").UploadState, K> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import("../types").UploadProps> & Readonly<{
                children?: import("react").ReactNode;
            }>;
            state: Readonly<import("../types").UploadState>;
            refs: {
                [key: string]: import("react").ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<import("../types").UploadProps>, nextState: Readonly<import("../types").UploadState>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("../types").UploadProps>, prevState: Readonly<import("../types").UploadState>): any;
            componentDidUpdate?(prevProps: Readonly<import("../types").UploadProps>, prevState: Readonly<import("../types").UploadState>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("../types").UploadProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../types").UploadProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("../types").UploadProps>, nextState: Readonly<import("../types").UploadState>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../types").UploadProps>, nextState: Readonly<import("../types").UploadState>, nextContext: any): void;
        }): void;
        render(): import("react").JSX.Element;
        abort(file: File): void;
        startUpload(): void;
        saveUploaderRef: (ref: import("../types").UploaderRef | {
            getInstance: () => import("../types").UploaderRef;
        } | null) => void;
        context: any;
        setState<K_1 extends keyof import("../types").CardState>(state: import("../types").CardState | ((prevState: Readonly<import("../types").CardState>, props: Readonly<import("../types").CardProps>) => import("../types").CardState | Pick<import("../types").CardState, K_1> | null) | Pick<import("../types").CardState, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("../types").CardProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<import("../types").CardState>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<import("../types").CardProps>, nextState: Readonly<import("../types").CardState>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("../types").CardProps>, prevState: Readonly<import("../types").CardState>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("../types").CardProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../types").CardProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("../types").CardProps>, nextState: Readonly<import("../types").CardState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../types").CardProps>, nextState: Readonly<import("../types").CardState>, nextContext: any): void;
    }, {}>;
    DragUpload: import("../../config-provider/types").ConfiguredComponentClass<import("../types").DraggerProps & import("../../config-provider/types").ComponentCommonProps, import("../dragger").default, {}>;
    Core: {
        new (props: import("../types").CoreProps): {
            uploader: import("../runtime/uploader").default;
            abort(): void;
            handleSelect: (files: import("../types").UploadFile[]) => void;
            render(): import("react").JSX.Element;
            context: any;
            setState<K_3 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("../types").CoreProps>) => {} | Pick<{}, K_3> | null) | Pick<{}, K_3> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import("../types").CoreProps> & Readonly<{
                children?: import("react").ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: import("react").ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<import("../types").CoreProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("../types").CoreProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<import("../types").CoreProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("../types").CoreProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../types").CoreProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("../types").CoreProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../types").CoreProps>, nextState: Readonly<{}>, nextContext: any): void;
        };
        contextType?: import("react").Context<any> | undefined;
    };
    CropUpload: () => null;
};
export default Upload;
