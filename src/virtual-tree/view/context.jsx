import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'cabala-react-beautiful-dnd';
import * as controller from '../controller/context';
import ContextModel from '../model/context';
import Context from '../context/context';

const { Provider } = Context;

const TreeContext = props => {
    const contextModel = React.useMemo(() => new ContextModel(), []);
    return (
        <Provider value={contextModel}>
            <DragDropContext
                shouldStartCapture={controller.getShouldStartCapture(props, contextModel)}
                onBeforeCapture={controller.getOnBeforeCapture(props, contextModel)}
                onBeforeDragStart={controller.getOnBeforeDragStart(props, contextModel)}
                onDragEnd={controller.getOnDragEnd(props, contextModel)}
            >
                {props.children}
            </DragDropContext>
        </Provider>
    );
};
TreeContext.propTypes = {
    children: PropTypes.node,
};
TreeContext.defaultProps = {
    shouldStartCapture: () => true,
    beforeStartCapture: () => {},
    beforeDragStart: () => {},
    beforeDrop: () => true,
};

export default TreeContext;
