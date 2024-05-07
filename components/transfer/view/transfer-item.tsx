import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Menu from '../../menu';
import { func, obj, dom } from '../../util';
import type { DragGapType, TransferItemProps, TransferItemState } from '../types';

const { Item, CheckboxItem } = Menu;
const { bindCtx } = func;
const { pickOthers } = obj;
const { getOffset } = dom;

type CheckboxItemProps = React.ComponentPropsWithRef<typeof CheckboxItem>;
type MenuItemProps = React.ComponentPropsWithRef<typeof Item>;
type ItemRef = React.ComponentRef<typeof CheckboxItem> | React.ComponentRef<typeof Item> | null;

export default class TransferItem extends Component<TransferItemProps, TransferItemState> {
    static menuChildType = CheckboxItem.menuChildType;

    static propTypes = {
        prefix: PropTypes.string,
        mode: PropTypes.oneOf(['normal', 'simple']),
        value: PropTypes.array,
        disabled: PropTypes.bool,
        item: PropTypes.object,
        onCheck: PropTypes.func,
        onClick: PropTypes.func,
        needHighlight: PropTypes.bool,
        itemRender: PropTypes.func,
        draggable: PropTypes.bool,
        onDragStart: PropTypes.func,
        onDragOver: PropTypes.func,
        onDragEnd: PropTypes.func,
        onDrop: PropTypes.func,
        dragPosition: PropTypes.oneOf(['left', 'right']),
        dragValue: PropTypes.string,
        dragOverValue: PropTypes.string,
        panelPosition: PropTypes.oneOf(['left', 'right']),
    };

    addHighlightTimer: ReturnType<typeof setTimeout>;
    removeHighlightTimer: ReturnType<typeof setTimeout>;
    item: ItemRef;
    dragGap: DragGapType;

    constructor(props: TransferItemProps) {
        super(props);

        this.state = {
            highlight: false,
        };

        bindCtx(this, [
            'getItemDOM',
            'handleClick',
            'handleDragStart',
            'handleDragOver',
            'handleDragEnd',
            'handleDrop',
        ]);
    }

    componentDidMount() {
        if (this.props.needHighlight) {
            this.addHighlightTimer = setTimeout(() => {
                this.setState({
                    highlight: true,
                });
            }, 1);
            this.removeHighlightTimer = setTimeout(() => {
                this.setState({
                    highlight: false,
                });
            }, 201);
        }
    }

    componentWillUnmount() {
        clearTimeout(this.addHighlightTimer);
        clearTimeout(this.removeHighlightTimer);
    }

    getItemDOM(ref: ItemRef) {
        this.item = ref;
    }

    handleClick() {
        const { onClick, panelPosition, item } = this.props;
        onClick(panelPosition === 'left' ? 'right' : 'left', item.value);
    }

    handleDragStart(ev: React.DragEvent) {
        ev &&
            ev.dataTransfer &&
            typeof ev.dataTransfer.setData === 'function' &&
            ev.dataTransfer.setData('text/plain', (ev.target as HTMLElement).id);
        const { onDragStart, panelPosition, item } = this.props;
        onDragStart(panelPosition, item.value);
    }

    getDragGap(e: React.DragEvent<HTMLElement>) {
        const referenceTop = getOffset(e.currentTarget).top;
        const referenceHeight = e.currentTarget.offsetHeight;
        return e.pageY <= referenceTop + referenceHeight / 2 ? 'before' : 'after';
    }

    handleDragOver(e: React.DragEvent<HTMLElement>) {
        const { panelPosition, dragPosition, onDragOver, item } = this.props;
        if (panelPosition === dragPosition) {
            e.preventDefault();

            const dragGap = this.getDragGap(e);
            if (this.dragGap !== dragGap) {
                this.dragGap = dragGap;
                onDragOver(item.value);
            }
        }
    }

    handleDragEnd() {
        const { onDragEnd } = this.props;
        onDragEnd();
    }

    handleDrop(e: React.DragEvent) {
        e.preventDefault();

        const { onDrop, item, panelPosition, dragValue } = this.props;
        onDrop(panelPosition, dragValue, item.value, this.dragGap);
    }

    render() {
        const {
            prefix,
            mode,
            checked,
            disabled,
            item,
            onCheck,
            itemRender,
            draggable,
            dragOverValue,
            panelPosition,
            dragPosition,
        } = this.props;
        const others = pickOthers(Object.keys(TransferItem.propTypes), this.props);
        const { highlight } = this.state;
        const isSimple = mode === 'simple';

        const classNames = cx({
            [`${prefix}transfer-panel-item`]: true,
            [`${prefix}insert-${this.dragGap}`]:
                dragOverValue === item.value && panelPosition === dragPosition,
            [`${prefix}focused`]: highlight,
            [`${prefix}simple`]: isSimple,
        });

        const children = itemRender!(item);
        const itemProps: CheckboxItemProps | MenuItemProps = {
            ref: this.getItemDOM,
            className: classNames,
            children,
            disabled,
            draggable: draggable && !disabled,
            onDragStart: this.handleDragStart,
            onDragOver: this.handleDragOver,
            onDragEnd: this.handleDragEnd,
            onDrop: this.handleDrop,
            ...others,
        };
        let title;
        if (typeof children === 'string') {
            title = children;
        }
        if (isSimple) {
            if (!itemProps.disabled) {
                itemProps.onClick = this.handleClick;
            }

            return <Item title={title} {...(itemProps as MenuItemProps)} />;
        }

        return (
            <CheckboxItem
                checked={checked}
                onChange={onCheck.bind(this, item.value)}
                title={title}
                {...(itemProps as CheckboxItemProps)}
            />
        );
    }
}
