import React from 'react';
import classnames from 'classnames';
import ItemRenderer from './itemRenderer';
import * as baseContentController from '../controller/baseContent';
import useModel from '../model/baseContent';
import TreeModel from '../context/tree';

const BaseContent = props => {
    const model = useModel();
    const treeModel = React.useContext(TreeModel);
    const { index, item, provided, snapshot, renderIcon, renderContent, containerClassName } = props;
    const { order, isParent, name, expanded } = model;
    const icon = renderIcon(index, item);
    const content = renderContent(index, item);
    baseContentController.useEffects(props, model);
    return (
        // eslint-disable-next-line
        <div
            ref={provided && provided.innerRef}
            className={classnames(
                'cabala-tree-base-content',
                `cabala-tree-base-content-level-${order}`,
                typeof item.disabled === 'boolean' && item.disabled ? 'cabala-tree-base-content-disabled' : undefined,
                containerClassName
            )}
            onMouseOver={baseContentController.getOnMouseOver(props, model)}
            onMouseOut={baseContentController.getOnMouseOut(props, model)}
            onMouseEnter={baseContentController.getOnMouseEnter(props, model)}
            onMouseLeave={baseContentController.getOnMouseLeave(props, model)}
            onMouseDown={baseContentController.getOnMouseDown(props, model)}
            onMouseUp={baseContentController.getOnItemMouseUp(props, model)}
            onClick={baseContentController.getOnClick(props, model, treeModel)}
            onDoubleClick={baseContentController.getOnDoubleClick(props, model)}
            onContextMenu={baseContentController.getOnContextMenu(props, model, treeModel)}
            {...provided && provided.draggableProps}
            {...provided && provided.dragHandleProps}
            style={baseContentController.getStyle(props, snapshot, index, item, provided)}
            data-index={index}
            data-is-dragging={snapshot.isDragging}
        >
            {model.id !== undefined ? (
                <ItemRenderer
                    name={name}
                    icon={icon}
                    content={content}
                    expanded={expanded}
                    isParent={isParent}
                    style={{ height: `${props.rowHeight}px` }}
                />
            ) : null}
        </div>
    );
};

BaseContent.defaultProps = {
    getContainerStyle: () => ({}),
    renderIcon: () => undefined,
    renderContent: () => undefined,
    beforeExpand: () => true,
    openFolderByDBClick: false,
};

export default BaseContent;
