import React from 'react';
import classnames from 'classnames';
import { Draggable } from 'cabala-react-beautiful-dnd';
import BaseContent from './baseContent';
import { DELIMITER } from '../constant';

const getRowRenderer = (props, treeRef, list, selectedId, droppableId) => renderProps => {
    const { key, style, index } = renderProps;
    const item = list[index];
    return (
        <Draggable
            key={String(index)}
            draggableId={`${droppableId}${DELIMITER}${String(index)}`}
            index={index}
            isDragDisabled={typeof item.disabled === 'boolean' ? item.disabled : false}
        >
            {(provided, snapshot) => (
                <div
                    key={key}
                    style={{
                        ...style,
                        lineHeight: `${props.rowHeight}px`,
                    }}
                    className={classnames(
                        'cabala-get-row-base-container',
                        selectedId === item.id ? 'cabala-get-row-selected' : undefined
                    )}
                >
                    <BaseContent
                        {...props}
                        index={index}
                        provided={provided}
                        snapshot={snapshot}
                        item={item}
                        treeRef={treeRef}
                    />
                </div>
            )}
        </Draggable>
    );
};

export default getRowRenderer;
