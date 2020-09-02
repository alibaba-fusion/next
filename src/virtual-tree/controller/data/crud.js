import * as assembly from './assembly';
import * as helper from '../helper';
import { obj } from '../../../util';
import { ROOT } from '../../constant';

export function _getGetNodes(ref) {
    return () => {
        const result = Array.from(ref._nodeMap.values());
        return result;
    };
}
export function _getFindNodeById(ref) {
    return id => {
        if (ref._nodeMap.has(id)) {
            return ref._nodeMap.get(id);
        }
        return null;
    };
}
export function getAddNodes(props, ref) {
    return (nodes, autoExpand = true) => {
        if (autoExpand) {
            getAutoExpandParent(ref)(nodes);
        }
        getWriteNodesToMap(ref)(nodes);
        ref._viewList = [];
        assembly.getAssemblyViewListWhenLoad(props, ref)();
        return ref._viewList;
    };
}
export function getLoadNodes(props, ref) {
    return nextNodes => {
        getWriteNodesToMap(ref)(nextNodes);
        ref._viewList = [];
        assembly.getAssemblyViewListWhenLoad(props, ref)();
        return ref._viewList;
    };
}
export function getWriteNodesToMap(ref) {
    return nodes => {
        try {
            // eslint-disable-next-line
            for (const key in nodes) {
                const item = nodes[key];
                const { id, pId } = item;
                if (!ref._nodeMap.has(id)) {
                    let nextValue = new Map();
                    item._inSearch = true;
                    if (obj.isNil(pId)) {
                        nextValue = ref._treeMap.get(ROOT);
                    } else if (ref._treeMap.has(pId)) {
                        nextValue = ref._treeMap.get(pId);
                    } else {
                        ref._treeMap.set(pId, nextValue);
                    }
                    ref._nodeMap.set(id, item);
                    nextValue.set(id, item);
                }
            }
        } catch (e) {
            // eslint-disable-next-line
            console.error(e);
        }
    };
}
export function getSearchNodes(ref) {
    return filter => {
        getHideAndCollapseAll(ref)();
        const nodes = _getGetNodes(ref)();
        const filteredNodes = nodes.filter(filter);
        ref._viewList = [];
        getSetNodesAsVisible(ref)(filteredNodes);
        getAutoExpandParent(ref)(filteredNodes);
        assembly.getAssemblyViewListWhenSearch(ref)();
        return ref._viewList;
    };
}
export function getFocusOnNode(props, ref) {
    return node => {
        ref._viewList = [];
        getSetNodesAsVisible(ref)([node]);
        getAutoExpandParent(ref)([node]);
        assembly.getAssemblyViewListWhenLoad(props, ref)();
        return ref._viewList;
    };
}
export function getFindNodeById(ref) {
    return id => {
        const result = _getFindNodeById(ref)(id);
        return obj.clone(result);
    };
}
export function getUpdateNodes(props, ref) {
    return (nodes, autoExpand = false) => {
        if (autoExpand) {
            getAutoExpandParent(ref)(nodes);
        }
        // eslint-disable-next-line
        for (const index in nodes) {
            const node = nodes[index];
            const { id } = node;
            const memoNode = _getFindNodeById(ref)(id);
            memoNode._visible = true;
            if (memoNode.pId !== node.pId) {
                const memoNodeParentMap = ref._treeMap.get(memoNode.pId);
                memoNodeParentMap && memoNodeParentMap.delete(memoNode.id);
                if (ref._treeMap.has(node.pId)) {
                    const nextParentMap = ref._treeMap.get(node.pId);
                    nextParentMap.set(node.id, memoNode);
                } else {
                    ref._treeMap.set(node.pId, new Map([[node.id, memoNode]]));
                }
            }
            // eslint-disable-next-line
            for (const key in node) {
                memoNode[key] = node[key];
            }
        }
        ref._viewList = [];
        assembly.getAssemblyViewListWhenLoad(props, ref)();
        return ref._viewList;
    };
}
export function getMoveNode(props, ref) {
    return (source, target) => {
        if ((target && !ref._nodeMap.has(target.id)) || !ref._nodeMap.has(source.id)) {
            // eslint-disable-next-line
            console.error('The moving action failed. The target or source doesnt exist.');
        }
        if (target === null || helper.isFolder(target)) {
            const targetId = target === null ? ROOT : target.id;
            const sourcePId = source.pId ? source.pId : ROOT;
            if (!ref._treeMap.has(targetId)) {
                ref._treeMap.set(targetId, new Map());
            }
            const targetFolderMap = ref._treeMap.get(targetId);
            const sourceFolderMap = ref._treeMap.get(sourcePId);
            if (sourceFolderMap && sourceFolderMap.has(source.id)) {
                const node = sourceFolderMap.get(source.id);
                sourceFolderMap.delete(source.id);
                node.pId = targetId;
                targetFolderMap.set(source.id, node);
                ref._viewList = [];
                assembly.getAssemblyViewListWhenLoad(props, ref)();
                return ref._viewList;
            } else {
                // eslint-disable-next-line
                console.error('The source node was not found in node map.');
            }
        } else {
            // eslint-disable-next-line
            console.error('The moving action failed. The target should be a folder.');
        }
    };
}
export function getExpandFolder(ref) {
    return (id, expanded) => {
        const target = _getFindNodeById(ref)(id);
        target.expanded = expanded;
        ref._viewList = [];
        assembly.getAssemblyViewListWhenExpand(ref)();
        return ref._viewList;
    };
}
export function getAutoExpandParent(ref) {
    return nodes => {
        // eslint-disable-next-line
        for (const index in nodes) {
            getExpandUntilToRoot(ref)(nodes[index]);
        }
    };
}
export function getExpandUntilToRoot(ref) {
    return node => {
        const { pId } = node;
        if (pId) {
            const parent = _getFindNodeById(ref)(pId);
            if (parent) {
                parent.expanded = true;
                parent._visible = true;
                getExpandUntilToRoot(ref)(parent);
            }
        }
    };
}
export function getHideAndCollapseAll(ref) {
    return () => {
        const nodes = _getGetNodes(ref)();
        // eslint-disable-next-line
        for (const index in nodes) {
            nodes[index]._visible = false;
            nodes[index]._inSearch = true;
            if (!helper.isNil(nodes[index].expanded)) {
                nodes[index].expanded = false;
            }
        }
    };
}
export function getSetNodesAsVisible(ref) {
    return nodes => {
        for (const index in nodes) {
            if (ref._nodeMap.has(nodes[index].id)) {
                const item = ref._nodeMap.get(nodes[index].id);
                item._visible = true;
            }
        }
    };
}
export function getReset(props, ref) {
    return () => {
        ref._viewList = [];
        getHideAndCollapseAll(ref)();
        assembly.getAssemblyViewListWhenLoad(props, ref)();
        return ref._viewList;
    };
}
export function getRemoveNodes(props, ref) {
    return nodes => {
        let result = [];
        // eslint-disable-next-line
        for (const index in nodes) {
            const node = nodes[index];
            const { id, pId } = node;
            const nextPId = pId ? pId : ROOT;
            if (ref._treeMap.has(nextPId)) {
                const group = ref._treeMap.get(nextPId);
                group.delete(id);
            }
            result.push(node);
            const data = getRecursiveRemoveChildren(ref)(id);
            result = result.concat(data);
        }
        for (const index in result) {
            if (ref._nodeMap.has(result[index].id)) {
                ref._nodeMap.delete(result[index].id);
            }
        }
        ref._viewList = [];
        assembly.getAssemblyViewListWhenLoad(props, ref)();
        return { viewList: ref._viewList, deletedNodes: result };
    };
}
export function getRecursiveRemoveChildren(ref) {
    return id => {
        let result = [];
        if (ref._treeMap.has(id)) {
            const childGroup = ref._treeMap.get(id);
            result = result.concat(Array.from(childGroup.values()));
            ref._treeMap.delete(id);
            // eslint-disable-next-line
            for (const index in childGroup) {
                const item = childGroup[index];
                const { id } = item;
                const data = getRecursiveRemoveChildren(ref)(id);
                result = result.concat(data);
            }
        }
        return result;
    };
}
