import React, { Component, type MouseEvent } from 'react';
import PropTypes from 'prop-types';
import type { ListProps, UploadFile, ImageError, ObjectFile } from './types';
declare class List extends Component<ListProps> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        locale: PropTypes.Requireable<object>;
        listType: PropTypes.Requireable<string>;
        value: PropTypes.Requireable<any[]>;
        closable: PropTypes.Requireable<boolean>;
        onRemove: PropTypes.Requireable<(...args: any[]) => any>;
        onCancel: PropTypes.Requireable<(...args: any[]) => any>;
        onImageError: PropTypes.Requireable<(...args: any[]) => any>;
        onPreview: PropTypes.Requireable<(...args: any[]) => any>;
        previewOnFileName: PropTypes.Requireable<boolean>;
        extraRender: PropTypes.Requireable<(...args: any[]) => any>;
        actionRender: PropTypes.Requireable<(...args: any[]) => any>;
        itemRender: PropTypes.Requireable<(...args: any[]) => any>;
        progressProps: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        uploader: PropTypes.Requireable<any>;
        showDownload: PropTypes.Requireable<boolean>;
        useDataURL: PropTypes.Requireable<boolean>;
        rtl: PropTypes.Requireable<boolean>;
        isPreview: PropTypes.Requireable<boolean>;
        fileNameRender: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        prefix: string;
        listType: string;
        value: never[];
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
        closable: boolean;
        showDownload: boolean;
        onRemove: () => void;
        onCancel: () => void;
        extraRender: () => void;
        actionRender: () => void;
        onImageError: () => void;
        progressProps: {};
        fileNameRender: (file: File) => string;
        previewOnFileName: boolean;
    };
    componentDidUpdate(): void;
    handleClose: (file: ObjectFile) => void;
    handleCancel: (file: ObjectFile) => void;
    onImageError: (file: UploadFile, obj: ImageError) => void;
    onPreview(file: UploadFile, e: MouseEvent<HTMLElement>): void;
    getInfo(file: ObjectFile): {
        prefixCls: string;
        downloadURL: string | undefined;
        imgURL: string | undefined;
        size: string | number;
        itemCls: string;
        alt: string | undefined;
    };
    sizeCaculator(size: string): string | 0;
    getTextList(file: ObjectFile): React.JSX.Element;
    getImageList(file: ObjectFile): React.JSX.Element;
    onSelect: (oldfile: UploadFile, files: UploadFile[]) => void;
    getPictureCardList(file: ObjectFile, isPreview?: boolean): React.JSX.Element;
    render(): React.JSX.Element;
}
declare const _default: import('../config-provider/types').ConfiguredComponentClass<
    ListProps & import('../config-provider/types').ComponentCommonProps,
    List,
    {}
>;
export default _default;
