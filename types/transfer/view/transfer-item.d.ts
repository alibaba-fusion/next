import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { DragGapType, TransferItemProps, TransferItemState } from '../types';
declare const Item: typeof import('../../menu').SelectableItem,
    CheckboxItem: typeof import('../../menu/view/checkbox-item').default;
type ItemRef = React.ComponentRef<typeof CheckboxItem> | React.ComponentRef<typeof Item> | null;
export default class TransferItem extends Component<TransferItemProps, TransferItemState> {
    static menuChildType: string;
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        mode: PropTypes.Requireable<string>;
        value: PropTypes.Requireable<any[]>;
        disabled: PropTypes.Requireable<boolean>;
        item: PropTypes.Requireable<object>;
        onCheck: PropTypes.Requireable<(...args: any[]) => any>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        needHighlight: PropTypes.Requireable<boolean>;
        itemRender: PropTypes.Requireable<(...args: any[]) => any>;
        draggable: PropTypes.Requireable<boolean>;
        onDragStart: PropTypes.Requireable<(...args: any[]) => any>;
        onDragOver: PropTypes.Requireable<(...args: any[]) => any>;
        onDragEnd: PropTypes.Requireable<(...args: any[]) => any>;
        onDrop: PropTypes.Requireable<(...args: any[]) => any>;
        dragPosition: PropTypes.Requireable<string>;
        dragValue: PropTypes.Requireable<string>;
        dragOverValue: PropTypes.Requireable<string>;
        panelPosition: PropTypes.Requireable<string>;
    };
    addHighlightTimer: ReturnType<typeof setTimeout>;
    removeHighlightTimer: ReturnType<typeof setTimeout>;
    item: ItemRef;
    dragGap: DragGapType;
    constructor(props: TransferItemProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    getItemDOM(ref: ItemRef): void;
    handleClick(): void;
    handleDragStart(ev: React.DragEvent): void;
    getDragGap(e: React.DragEvent<HTMLElement>): 'after' | 'before';
    handleDragOver(e: React.DragEvent<HTMLElement>): void;
    handleDragEnd(): void;
    handleDrop(e: React.DragEvent): void;
    render(): React.JSX.Element;
}
export {};
