import React, { type ChangeEvent, Component, type KeyboardEvent, type DragEvent } from 'react';
import PropTypes from 'prop-types';
import type { SelecterProps } from '../types';
/**
 * Upload.Selecter
 * [底层能力] 可自定义样式的文件选择器
 */
export default class Selecter extends Component<SelecterProps> {
    static propTypes: {
        id: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        disabled: PropTypes.Requireable<boolean>;
        multiple: PropTypes.Requireable<boolean>;
        webkitdirectory: PropTypes.Requireable<boolean>;
        capture: PropTypes.Requireable<string>;
        dragable: PropTypes.Requireable<boolean>;
        accept: PropTypes.Requireable<string>;
        onSelect: PropTypes.Requireable<(...args: any[]) => any>;
        onDragOver: PropTypes.Requireable<(...args: any[]) => any>;
        onDragLeave: PropTypes.Requireable<(...args: any[]) => any>;
        onDrop: PropTypes.Requireable<(...args: any[]) => any>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        name: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        name: string;
        multiple: boolean;
        onSelect: () => void;
        onDragOver: () => void;
        onDragLeave: () => void;
        onDrop: () => void;
    };
    fileRef: HTMLInputElement;
    onSelect: (e: ChangeEvent<HTMLInputElement>) => void;
    /**
     * 点击上传按钮
     *
     */
    onClick: () => void;
    /**
     * 键盘事件
     *  e
     *
     */
    onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
    /**
     * 拖拽
     *  e
     *
     */
    onDrop: (e: DragEvent<HTMLInputElement>) => void;
    onDragOver: (e: DragEvent<HTMLInputElement>) => void;
    saveFileRef: (ref: HTMLInputElement) => void;
    render(): React.JSX.Element;
}
