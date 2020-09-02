import * as React from 'react';
import PropTypes from 'prop-types';
import Context from './context';
import Tree from './tree';

const App = (props, ref) => {
    const { shouldStartCapture, beforeStartCapture, beforeDragStart, beforeDrop, ...restProps } = props;
    return (
        <Context
            shouldStartCapture={shouldStartCapture}
            beforeStartCapture={beforeStartCapture}
            beforeDragStart={beforeDragStart}
            beforeDrop={beforeDrop}
        >
            <Tree ref={ref} {...restProps} />
        </Context>
    );
};
App.propTypes = {
    shouldStartCapture: PropTypes.func,
    beforeStartCapture: PropTypes.func,
    beforeDragStart: PropTypes.func,
    beforeDrop: PropTypes.func,
};

export default React.forwardRef(App);
