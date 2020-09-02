import { debounce } from '../../util';
import { ROOT } from '../constant';

export function obtaibSetSelectedNodeId(model) {
    return value => {
        // Reset scrollIndex as undefined to prevent scroller return to top.
        model.scrollIndex = undefined;
        model.selectedNodeId = value;
    };
}
export function obtainGetSelectedNodeId(model) {
    return () => {
        return model.selectedNodeId;
    };
}
export function obtainExpandFolder(model, dataHandler) {
    return (id, expanded) => {
        const viewList = dataHandler.expandFolder(id, expanded);
        model.viewList = viewList;
    };
}
export function obtainAddNodes(model, dataHandler) {
    return (nodes, autoFocus = true) => {
        if (nodes.length > 0) {
            const viewList = dataHandler.addNodes(nodes);
            if (autoFocus) {
                model.scrollIndex = viewList.findIndex(item => item.id === nodes[0].id);
            }
            model.viewList = viewList;
        }
        return nodes;
    };
}
export function obtainAddNode(model, dataHandler) {
    return (node, autoFocus = true) => {
        const viewList = dataHandler.addNodes([node]);
        if (autoFocus) {
            model.scrollIndex = viewList.findIndex(item => item.id === node.id);
        }
        model.viewList = viewList;
        return node;
    };
}
export function obtainGetNodeById(dataHandler) {
    return id => {
        return dataHandler.findNodeById(id);
    };
}
export function obtainUpdateNode(model, dataHandler) {
    return node => {
        const viewList = dataHandler.updateNodes([node]);
        model.viewList = viewList;
        return node;
    };
}
export function obtainUpdateNodes(model, dataHandler) {
    return nodes => {
        const viewList = dataHandler.updateNodes(nodes);
        model.viewList = viewList;
        return nodes;
    };
}
export function obtainDeleteNode(model, dataHandler) {
    return node => {
        const { viewList, deletedNodes } = dataHandler.removeNodes([node]);
        model.viewList = viewList;
        return deletedNodes;
    };
}
export function obtainDeleteNodes(model, dataHandler) {
    return nodes => {
        const { viewList, deletedNodes } = dataHandler.removeNodes(nodes);
        model.viewList = viewList;
        return deletedNodes;
    };
}
export function obtainMoveNode(model, dataHandler) {
    return (sourceNode, targetNode) => {
        const viewList = dataHandler.moveNode(sourceNode, targetNode);
        model.viewList = viewList;
    };
}
export function obtainSearchNodes(model, dataHandler) {
    return filter => {
        model.scrollIndex = 0;
        if (typeof filter === 'function') {
            const viewList = dataHandler.searchNodes(node => {
                return filter(node);
            });
            model.viewList = viewList;
        } else {
            model.viewList = dataHandler.reset();
        }
    };
}
export function obtainFocusOnNode(model, dataHandler) {
    return node => {
        const viewList = dataHandler.focusOnNode(node);
        model.viewList = viewList;
        const scrollIndex = viewList.findIndex(item => item.id === node.id);
        if (scrollIndex > -1) {
            model.scrollIndex = scrollIndex;
            model.selectedNodeId = node.id;
        }
    };
}
export function obtainReset(model, dataHandler) {
    return () => {
        dataHandler.reset();
        model.scrollIndex = 0;
    };
}
export function obtainForceUpdateGrid(listRef) {
    return () => {
        if (listRef.current) {
            listRef.current.forceUpdateGrid();
        }
    };
}
export function obtainDispose(model, dataHandler) {
    return () => {
        model.viewList = [];
        model.selectedNodeId = undefined;
        model.scrollIndex = 0;
        dataHandler._nodeMap = new Map();
        dataHandler._treeMap = new Map([[ROOT, new Map()]]);
        dataHandler._viewList = [];
    };
}
export function obtainIsNodeInParent(dataHandler) {
    return (parent, nodeId) => {
        const node = dataHandler.findNodeById(nodeId);
        if (!node) {
            return false;
        }
        if (node.id === parent.id) {
            return true;
        } else {
            return obtainIsNodeInParent(dataHandler)(parent, node.pId);
        }
    };
}
export function obtainGetParentNode(dataHandler) {
    return node => {
        const result = dataHandler.findNodeById(node.pId);
        return result;
    };
}
export function obtainGetPath(dataHandler) {
    return node => {
        let pId = node.pId;
        const paths = [];
        let parent;
        do {
            parent = dataHandler.findNodeById(pId);
            if (parent) {
                paths.push(parent);
                pId = parent.pId;
            }
        } while (parent);
        return paths;
    };
}
export function obtainHasNodeInFolder(dataHandler) {
    return node => {
        const nodes = dataHandler._treeMap.get(node.id);
        return !!(nodes && nodes.size > 0);
    };
}
export function create(props, model, treeRef, listRef, dataHandler) {
    return {
        target: treeRef.current,
        getSelectedNodeId: obtainGetSelectedNodeId(model),
        setSelectedNodeId: obtaibSetSelectedNodeId(model),
        expandFolder: obtainExpandFolder(model, dataHandler),
        addNode: obtainAddNode(model, dataHandler),
        addNodes: obtainAddNodes(model, dataHandler),
        getNodeById: obtainGetNodeById(dataHandler),
        getParentNode: obtainGetParentNode(dataHandler),
        getPath: obtainGetPath(dataHandler),
        searchNodes: debounce(obtainSearchNodes(model, dataHandler), props.searchDebounceTime),
        updateNode: obtainUpdateNode(model, dataHandler),
        updateNodes: obtainUpdateNodes(model, dataHandler),
        moveNode: obtainMoveNode(model, dataHandler),
        deleteNode: obtainDeleteNode(model, dataHandler),
        deleteNodes: obtainDeleteNodes(model, dataHandler),
        focusOnNode: obtainFocusOnNode(model, dataHandler),
        forceUpdateGrid: obtainForceUpdateGrid(listRef),
        reset: obtainReset(model, dataHandler),
        isNodeInParent: obtainIsNodeInParent(dataHandler),
        hasNodeInFolder: obtainHasNodeInFolder(dataHandler),
        dispose: obtainDispose(model, dataHandler),
    };
}
