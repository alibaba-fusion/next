import * as crud from './crud';
import { ROOT } from '../../constant';

export function create(props) {
    const _nodeMap = new Map();
    const _treeMap = new Map([[ROOT, new Map()]]);
    const _viewList = [];
    const result = {};
    Object.defineProperties(result, {
        _nodeMap: {
            value: _nodeMap,
            writable: true,
            enumerable: false,
            configurable: false,
        },
        _treeMap: {
            value: _treeMap,
            writable: true,
            enumerable: false,
            configurable: false,
        },
        _viewList: {
            value: _viewList,
            writable: true,
            enumerable: false,
            configurable: false,
        },
        addNodes: {
            value: crud.getAddNodes(props, result),
            writable: false,
            enumerable: false,
            configurable: false,
        },
        loadNodes: {
            value: crud.getLoadNodes(props, result),
            writable: false,
            enumerable: false,
            configurable: false,
        },
        searchNodes: {
            value: crud.getSearchNodes(result),
            writable: false,
            enumerable: false,
            configurable: false,
        },
        focusOnNode: {
            value: crud.getFocusOnNode(props, result),
            writable: false,
            enumerable: false,
            configurable: false,
        },
        findNodeById: {
            value: crud.getFindNodeById(result),
            writable: false,
            enumerable: false,
            configurable: false,
        },
        updateNodes: {
            value: crud.getUpdateNodes(props, result),
            writable: false,
            enumerable: false,
            configurable: false,
        },
        moveNode: {
            value: crud.getMoveNode(props, result),
            writable: false,
            enumerable: false,
            configurable: false,
        },
        expandFolder: {
            value: crud.getExpandFolder(result),
            writable: false,
            enumerable: false,
            configurable: false,
        },
        reset: {
            value: crud.getReset(props, result),
            writable: false,
            enumerable: false,
            configurable: false,
        },
        removeNodes: {
            value: crud.getRemoveNodes(props, result),
            writable: false,
            enumerable: false,
            configurable: false,
        },
    });
    return result;
}
