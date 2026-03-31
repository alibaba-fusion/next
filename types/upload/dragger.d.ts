import React, { type DragEvent, Component } from 'react';
import PropTypes from 'prop-types';
import Upload from './upload';
import type { DraggerProps } from './types';
/**
 * Upload.Dragger
 * IE10+ 支持。继承 Upload 的 API，除非特别说明
 */
declare class Dragger extends Component<DraggerProps> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        locale: PropTypes.Requireable<object>;
        shape: PropTypes.Requireable<string>;
        onDragOver: PropTypes.Requireable<(...args: any[]) => any>;
        onDragLeave: PropTypes.Requireable<(...args: any[]) => any>;
        onDrop: PropTypes.Requireable<(...args: any[]) => any>;
        limit: PropTypes.Requireable<number>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        defaultValue: PropTypes.Requireable<any[]>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        listType: PropTypes.Requireable<string>;
        timeout: PropTypes.Requireable<number>;
    };
    static defaultProps: {
        prefix: string;
        onDragOver: () => void;
        onDragLeave: () => void;
        onDrop: () => void;
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
    };
    uploaderRef: InstanceType<typeof Upload>;
    state: {
        dragOver: boolean;
    };
    onDragOver: (e: DragEvent<HTMLElement>) => void;
    onDragLeave: (e: DragEvent<HTMLElement>) => void;
    onDrop: (e: File[]) => void;
    abort(file: File): void;
    startUpload(): void;
    saveUploaderRef: (
        ref:
            | InstanceType<typeof Upload>
            | {
                  getInstance: () => InstanceType<typeof Upload>;
              }
            | null
    ) => void;
    render(): React.JSX.Element;
}
export default Dragger;
