import * as helper from '../helper';
import { ROOT } from '../../constant';

export function getAssemblyViewListWhenExpand(ref) {
    return (id = ROOT) => {
        if (ref._treeMap.has(id)) {
            const nodes = ref._treeMap.get(id);
            for (const [, value] of nodes) {
                if (value._inSearch) {
                    value._visible = true;
                    ref._viewList.push(value);
                    if (helper.isFolder(value) && value.expanded) {
                        getAssemblyViewListWhenExpand(ref)(value.id);
                    }
                }
            }
        }
    };
}
export function getAssemblyViewListWhenSearch(ref) {
    return (id = ROOT) => {
        if (ref._treeMap.has(id)) {
            const nodes = ref._treeMap.get(id);
            for (const [, value] of nodes) {
                if (typeof value._visible === 'boolean' && value._visible) {
                    value._inSearch = true;
                    ref._viewList.push(value);
                } else {
                    value._inSearch = false;
                }
                if (ref._treeMap.has(value.id)) {
                    getAssemblyViewListWhenSearch(ref)(value.id);
                }
            }
        }
    };
}
export function getAssemblyViewListWhenLoad(props, ref) {
    return (parent = { id: ROOT, expanded: true }, order = 0, visible = true) => {
        if (ref._treeMap.has(parent.id)) {
            let nodes = ref._treeMap.get(parent.id);
            const sortFn = props.onSortNodes ? props.onSortNodes : helper.sortNodes;
            nodes = new Map(
                [...nodes.entries()].sort((a, b) => {
                    return sortFn(a[1], b[1]);
                })[0]
            );
            ref._treeMap.set(parent.id, nodes);
            for (const [, value] of nodes) {
                value._order = order;
                value._visible = visible;
                if (value._inSearch && parent.expanded && visible) {
                    ref._viewList.push(value);
                }
                if (helper.isFolder(value)) {
                    getAssemblyViewListWhenLoad(props, ref)(
                        value,
                        order + 1,
                        visible && value.expanded && value._inSearch
                    );
                }
            }
        }
    };
}
