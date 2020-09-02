import React from 'react';
import PropTypes from 'prop-types';
import { List, AutoSizer } from 'react-virtualized';
import { Droppable } from 'cabala-react-beautiful-dnd';
import classnames from 'classnames';
import { guid } from '../../util';
import ContextMenu from './contextMenu';
import CloneContent from './cloneContent';
import getRowRenderer from './getRowRenderer';
import * as dataController from '../controller/data';
import * as treeController from '../controller/tree';
import * as operatorController from '../controller/operators';
import useModel from '../model/tree';
import Context from '../context/context';
import TreeContext from '../context/tree';

const { Provider } = TreeContext;

const CabalaVirtualizeTree = (props, ref) => {
    const nextRef = ref ? ref : React.useRef();
    const dataHandler = React.useMemo(() => dataController.create(props), []);
    const contextModel = React.useContext(Context);
    const treeModel = useModel();
    const droppableId = React.useMemo(() => {
        const result = guid();
        treeModel.droppableId = result;
        return result;
    }, []);
    const treeRef = React.useRef(null);
    const listRef = React.useRef(null);
    treeController.useEffects(props, treeModel, contextModel, droppableId, nextRef, listRef, dataHandler);
    React.useImperativeHandle(nextRef, () =>
        operatorController.create(props, treeModel, treeRef, listRef, dataHandler)
    );
    return (
        <Provider value={treeModel}>
            <div className={classnames('cabala-virtualized-tree')} ref={treeRef}>
                <Droppable
                    droppableId={droppableId}
                    mode="virtual"
                    renderClone={(provided, draggableStateSnapshot, rubric) => (
                        <CloneContent
                            index={rubric.source.index}
                            item={treeModel.viewList[rubric.source.index]}
                            rowHeight={props.rowHeight}
                            containerClassName={props.containerClassName}
                            getContainerStyle={props.getContainerStyle}
                            renderIcon={props.renderIcon}
                            renderContent={props.renderContent}
                            draggableProps={provided.draggableProps}
                            dragHandleProps={provided.dragHandleProps}
                            snapshot={draggableStateSnapshot}
                        />
                    )}
                    isCombineEnabled
                >
                    {droppableProvided => (
                        <AutoSizer>
                            {({ height, width }) => (
                                <List
                                    ref={treeController.getRefFn(listRef, droppableProvided)}
                                    width={width}
                                    height={treeController.getHeight(props, treeModel.viewList, height)}
                                    rowHeight={props.rowHeight}
                                    rowCount={treeModel.viewList.length}
                                    scrollToIndex={treeModel.scrollIndex}
                                    rowRenderer={getRowRenderer(
                                        props,
                                        nextRef,
                                        treeModel.viewList,
                                        treeModel.selectedNodeId,
                                        droppableId
                                    )}
                                    className={classnames('cabala-virtualized-tree-list')}
                                    scrollToAlignment="center"
                                />
                            )}
                        </AutoSizer>
                    )}
                </Droppable>
                {props.useContextMenu ? (
                    <ContextMenu
                        treeRef={treeRef}
                        getContextMenuList={props.getContextMenuList}
                        renderContextMenu={props.renderContextMenu}
                        onContextMenuItemClick={props.onContextMenuItemClick}
                    />
                ) : null}
            </div>
        </Provider>
    );
};
CabalaVirtualizeTree.propTypes = {
    rowHeight: PropTypes.number,
    containerClassName: PropTypes.string,
    getContainerStyle: PropTypes.func,
    renderIcon: PropTypes.func,
    renderContent: PropTypes.func,
    useContextMenu: PropTypes.bool,
    getContextMenuList: PropTypes.func,
    renderContextMenu: PropTypes.func,
    onContextMenuItemClick: PropTypes.func,
};

const forwardRefCabalaVirtualizeTree = React.forwardRef(CabalaVirtualizeTree);

forwardRefCabalaVirtualizeTree.defaultProps = {
    rowHeight: 24,
    nextList: [],
    searchDebounceTime: 200,
    onListUpdated: () => {},
    onSortNodes: undefined,
    useContextMenu: true,
};

export default forwardRefCabalaVirtualizeTree;
