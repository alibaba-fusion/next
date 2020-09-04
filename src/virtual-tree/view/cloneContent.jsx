import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import ItemRenderer from './itemRenderer';
import * as cloneContentController from '../controller/cloneContent';
import useModel from '../model/cloneContent';

const CloneContent = props => {
    const { index, item, snapshot, containerClassName, draggableProps, dragHandleProps } = props;
    const model = useModel();
    cloneContentController.useEffects(props, model);
    return (
        <div
            className={classnames(
                'cabala-tree-base-content',
                'cabala-tree-clone-content',
                `cabala-tree-base-content-level-${model.order}`,
                containerClassName
            )}
            {...draggableProps}
            {...dragHandleProps}
            style={cloneContentController.getStyle(props, snapshot, index, item, draggableProps.style)}
        >
            <ItemRenderer
                name={model.name}
                icon={model.icon}
                content={model.content}
                expanded={false}
                isParent={model.isParent}
            />
        </div>
    );
};
CloneContent.propTypes = {
    index: PropTypes.number,
    item: PropTypes.object,
    snapshot: PropTypes.object,
    containerClassName: PropTypes.string,
    draggableProps: PropTypes.object,
    dragHandleProps: PropTypes.object,
    rowHeight: PropTypes.number,
    getContainerStyle: PropTypes.func,
};
CloneContent.defaultProps = {
    renderIcon: () => undefined,
    renderContent: () => undefined,
    getContainerStyle: () => ({}),
};

export default React.memo(CloneContent);
